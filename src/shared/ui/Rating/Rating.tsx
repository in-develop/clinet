import { urbanist } from "@/shared/lib/fonts";
import { cn } from "@/shared/lib/utils";

import { SvgIcon } from "../SvgIcon";

interface IRatingProps {
  rating: number;
  reviewCount: number;
  showNumeric?: boolean;
  className?: string;
}

const Rating = ({
  rating,
  reviewCount,
  className,
  showNumeric = false,
}: IRatingProps) => {
  const clampedRating = Math.max(0, Math.min(5, rating));

  return (
    <div
      className={cn(
        "text-light-black flex items-center gap-1.5 text-xs",
        showNumeric && "gap-1",
        urbanist.className,
        className,
      )}
    >
      <span className="sr-only">
        Rating: {clampedRating} out of 5, {reviewCount} reviews
      </span>
      <span aria-hidden="true" className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const starValue = clampedRating - i;
          const fillPortion = Math.max(0, Math.min(1, starValue));
          return (
            <span key={i} className="relative inline-block">
              <SvgIcon
                name="star"
                width={12}
                height={12}
                decorative
                className="fill-current text-gray-300"
              />
              {fillPortion > 0 && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${fillPortion * 100}%` }}
                >
                  <SvgIcon
                    name="star"
                    width={12}
                    height={12}
                    decorative
                    className="text-light-black fill-current"
                  />
                </span>
              )}
            </span>
          );
        })}
      </span>
      {showNumeric && <span className={"ml-1.5 font-medium"}>{rating}</span>}
      <span aria-hidden="true">({reviewCount})</span>
    </div>
  );
};

export { Rating };
