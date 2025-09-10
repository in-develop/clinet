"use client";
import {
  Children,
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useReducedMotion } from "@/shared/hooks";
import { cn } from "@/shared/lib/utils";

interface IRunningLineProps extends PropsWithChildren {
  className?: string;
  speed?: number;
  gap?: string;
}

export const RunningLine = ({
  children,
  className,
  speed = 60,
  gap = "0px",
}: IRunningLineProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstHalfRef = useRef<HTMLDivElement | null>(null);

  const [durationSec, setDurationSec] = useState<number>(20);

  const [pausedByHover, setPausedByHover] = useState(false);
  const [pausedByInvisibility, setPausedByInvisibility] = useState(false);

  const [contentWidth, setContentWidth] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = firstHalfRef.current;

    const measure = () => {
      if (!el) return;

      const measured = el.scrollWidth || el.getBoundingClientRect().width || 0;

      const width = measured || containerRef.current?.clientWidth || 0;

      setContentWidth(width);

      const newDuration = Math.max(1, width / Math.max(1, speed));

      setDurationSec(newDuration);
    };

    measure();

    let ro: ResizeObserver | null = null;

    if (el) {
      ro = new ResizeObserver(() => measure());
      ro.observe(el);
    }

    return () => {
      if (ro) ro.disconnect();
    };
  }, [speed]);

  useEffect(() => {
    const root = containerRef.current;

    let io: IntersectionObserver | null = null;

    if (root) {
      io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          setPausedByInvisibility(
            !(entry.isIntersecting && entry.intersectionRatio > 0),
          );
        },
        { threshold: 0.01 },
      );
      io.observe(root);
    }

    return () => {
      if (io) io.disconnect();
    };
  }, []);

  const paused = prefersReducedMotion || pausedByHover || pausedByInvisibility;

  const trackStyle: CSSProperties = useMemo(
    () => ({
      animationDuration: `${durationSec}s`,
      animationPlayState: paused ? "paused" : "running",
      width: contentWidth ? `${contentWidth * 2}px` : undefined,
    }),
    [durationSec, paused, contentWidth],
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      aria-live="off"
      aria-busy={paused}
      onMouseEnter={() => setPausedByHover(true)}
      onMouseLeave={() => setPausedByHover(false)}
    >
      <div
        className={
          "animate-running-line flex will-change-transform select-none"
        }
        style={trackStyle}
      >
        <div
          ref={firstHalfRef}
          className="flex shrink-0 items-stretch"
          style={{
            gap,
            width: contentWidth ? `${contentWidth}px` : undefined,
          }}
        >
          {Children.map(children, (child, idx) => (
            <div className="shrink-0" key={`a-${idx}`}>
              {child}
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 items-stretch"
          style={{
            gap,
            width: contentWidth ? `${contentWidth}px` : undefined,
          }}
          aria-hidden="true"
        >
          {Children.map(children, (child, idx) => (
            <div className="shrink-0" key={`b-${idx}`}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
