"use client";
import { useEffect, useState } from "react";

export interface IUseMediaQueryOptions {
  fallback?: boolean | boolean[];
  ssr?: boolean;
};

const isClient = typeof window !== "undefined";

export function useMediaQuery(
  query: string | string[],
  options: IUseMediaQueryOptions = {},
): boolean[] {
  const {
    ssr = true,
    fallback = !Array.isArray(query)
      ? [true]
      : Array(query.length).fill(true),
  } = options;

  const queries = Array.isArray(query) ? query : [query];

  let fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
  fallbackValues = fallbackValues.filter((v) => v !== null) as boolean[];

  const [value, setValue] = useState(() => {
    return queries.map((query, index) => ({
      media: query,
      matches: ssr
        ? !!fallbackValues[index]
        : isClient
          ? window.matchMedia(query).matches
          : !!fallbackValues[index],
    }));
  });

  useEffect(() => {
    if (!isClient) return;
    setValue(
      queries.map((query) => ({
        media: query,
        matches: window.matchMedia(query).matches,
      })),
    );

    const mql = queries.map((query) => window.matchMedia(query));

    const handler = (evt: MediaQueryListEvent) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };

    mql.forEach((mql) => {
      mql.addEventListener("change", handler);
    });

    // eslint-disable-next-line consistent-return
    return () => {
      mql.forEach((mql) => {
        mql.removeEventListener("change", handler);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value.map((item) => item.matches);
}
