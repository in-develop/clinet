import { urbanist } from "@/shared/lib/fonts";
import { cn } from "@/shared/lib/utils";

import { SvgIcon } from "../SvgIcon";

interface IRatingProps {
  rating: number;
  reviewCount: number;
  className?: string;
}

const Rating = ({ rating, reviewCount, className }: IRatingProps) => {
  const clamped = Math.max(0, Math.min(5, Math.floor(rating)));
  return (
    <div
      className={cn("text-light-black flex items-center gap-1.5", className)}
    >
      <span className="sr-only">
        Rating: {clamped} out of 5, {reviewCount} reviews
      </span>
      <span aria-hidden="true" className="flex items-center gap-0.5">
        {Array.from({ length: clamped }).map((_, index) => (
          <SvgIcon name="star" width={12} height={12} decorative key={index} />
        ))}
      </span>
      <span aria-hidden="true" className={`${urbanist.className} text-xs`}>
        ({reviewCount})
      </span>
    </div>
  );
};

export { Rating };
