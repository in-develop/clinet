"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (_value: T | ((_val: T) => T)) => void] {
  const initialRef = useRef(initialValue);

  const readValue = useCallback(() => {
    if (typeof window === "undefined") return initialRef.current;
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? (JSON.parse(item) as T) : initialRef.current;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialRef.current;
    }
  }, [key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  useEffect(() => {
    setStoredValue(readValue());
  }, [key, readValue]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) {
        setStoredValue(readValue());
      }
    };
    const onLocalStorage = (e: Event) => {
      const ce = e as CustomEvent<{ key: string }>;
      if (ce?.detail?.key === key) {
        setStoredValue(readValue());
      }
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("local-storage", onLocalStorage as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(
        "local-storage",
        onLocalStorage as EventListener,
      );
    };
  }, [key, readValue]);

  const setValue = (value: T | ((_val: T) => T)) => {
    try {
      if (value instanceof Function) {
        const prev = readValue();
        const next = (value as (_v: T) => T)(prev);
        setStoredValue(next);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(next));
          window.dispatchEvent(
            new CustomEvent("local-storage", { detail: { key } }),
          );
        }
      } else {
        setStoredValue(value);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(value));
          window.dispatchEvent(
            new CustomEvent("local-storage", { detail: { key } }),
          );
        }
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
