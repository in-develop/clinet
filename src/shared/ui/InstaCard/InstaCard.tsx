"use client";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

import { cn } from "@/shared/lib/utils";

interface IInstaCardProps {
  imageUrl: string;
}

const AUTO_COLLAPSE_TIME = 2000; // 2 seconds

export const InstaCard = ({ imageUrl }: IInstaCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    setExpanded((prevValue) => {
      const newValue = !prevValue;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (newValue) {
        timeoutRef.current = setTimeout(() => {
          setExpanded(false);
        }, AUTO_COLLAPSE_TIME);
      }

      return newValue;
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="border-light-black relative aspect-square w-[clamp(13.125rem,calc(210px+155*((100vw-390px)/1050)),22.8125rem)] cursor-pointer border border-r-0 pr-px last:border-r last:pr-0"
      role="button"
      tabIndex={0}
      aria-pressed={expanded}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <div
        className={cn(
          "absolute transition-all duration-300 ease-in-out",
          expanded
            ? "inset-0"
            : "inset-[clamp(1.5rem,calc(1.5rem+24*((100vw-390px)/1050)),3rem)]",
        )}
      >
        <Image
          src={imageUrl}
          alt="Instagram image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
