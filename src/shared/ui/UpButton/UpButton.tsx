"use client";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../Button";
import { SvgIcon } from "../SvgIcon";

import { useReducedMotion } from "@/shared/hooks";
import { cn } from "@/shared/lib/utils";

const THRESHOLD = 600; // in px
const SCROLL_DURATION = 600; // in ms
const INACTIVITY_DELAY = 1500; // in ms

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const rafRef = useRef<number | null>(null);

  const lastScrollTopRef = useRef(0);
  const lastDirectionRef = useRef<"up" | "down">("down");

  const inactivityTimeoutRef = useRef<number | null>(null);

  const reducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const last = lastScrollTopRef.current;

    const direction: "up" | "down" = scrollTop > last ? "down" : "up";

    lastScrollTopRef.current = scrollTop;
    lastDirectionRef.current = direction;

    if (scrollTop <= THRESHOLD) {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
        inactivityTimeoutRef.current = null;
      }
      setIsVisible(false);
      return;
    }

    if (direction === "up") {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
        inactivityTimeoutRef.current = null;
      }
      setIsVisible(true);
      return;
    }

    setIsVisible(false);

    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }

    inactivityTimeoutRef.current = window.setTimeout(() => {
      const currentTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentTop > THRESHOLD && lastDirectionRef.current === "down") {
        setIsVisible(true);
      }

      inactivityTimeoutRef.current = null;
    }, INACTIVITY_DELAY);
  }, []);

  useEffect(() => {
    let throttleTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const throttledScrollHandler = () => {
      if (throttleTimeoutId === null) {
        throttleTimeoutId = setTimeout(() => {
          handleScroll();
          throttleTimeoutId = null;
        }, 16);
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (throttleTimeoutId) {
        clearTimeout(throttleTimeoutId);
      }
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    if (isScrolling) return;

    setIsScrolling(true);

    if (!reducedMotion) {
      const start = window.pageYOffset || document.documentElement.scrollTop;

      let startTime: null | number = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;

        const timeElapsed = currentTime - startTime;

        const progress = Math.min(timeElapsed / SCROLL_DURATION, 1);

        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animateScroll);
        } else {
          setIsScrolling(false);
        }
      };

      rafRef.current = requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      setIsScrolling(false);
    }
  }, [isScrolling, reducedMotion]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Button
      variant={"card"}
      onClick={scrollToTop}
      disabled={isScrolling}
      className={cn(
        "text-light-black fixed right-10 bottom-10 z-50 flex size-16 flex-col items-center gap-1 rounded-full border-none font-extrabold",
        reducedMotion ? "transition-none" : "transition-all",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      )}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <SvgIcon name="arrow" className="size-5 -rotate-90" />
      <span>Up</span>
    </Button>
  );
};

export { UpButton };
