"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

import { formatDate } from "@/shared/lib/dates";
import { urbanist } from "@/shared/lib/fonts";
import { ROUTING } from "@/shared/lib/rounting";
import { cn } from "@/shared/lib/utils";
import { IBlogPost } from "@/widgets/scincare-guide/model";

interface IBlogCardProps {
  data: IBlogPost;
  className?: string;
  onHover?: () => void;
}

export const BlogCard = ({ data, className, onHover }: IBlogCardProps) => {
  const { id, title, excerpt, date, imageUrl } = data;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(ROUTING.blogPost(id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate();
    }
  };

  return (
    <article
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      onMouseOver={onHover}
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${title}`}
      className={cn(
        "border-light-black group focus-visible:ring-blue flex min-w-[21.875rem] cursor-pointer border-y border-r focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:border-b-0 md:border-l md:last:border-b",
        className,
      )}
    >
      <div className="flex flex-[258] flex-col gap-8 p-5 md:flex-row md:gap-12 md:py-[1.875rem]">
        <time
          dateTime={date}
          className={cn(
            "text-dim-gray text-sm leading-4 font-semibold",
            urbanist.className,
          )}
        >
          {formatDate(date) || "Date unavailable"}
        </time>
        <div className="flex flex-col gap-5">
          <h3 className="text-light-black relative leading-none font-bold underline-offset-4 group-hover:underline">
            {title}
          </h3>
          <p className={cn("line-clamp-3 leading-5", urbanist.className)}>
            {excerpt}{" "}
            <Link
              className="focus-visible:ring-blue hidden font-bold group-hover:underline focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none md:inline"
              href={ROUTING.blogPost(id)}
              tabIndex={-1}
              aria-label={`Read full article: ${title}`}
            >
              Read full article
            </Link>
          </p>
        </div>
      </div>
      <div className="border-light-black relative aspect-[92/219] h-full w-full min-w-[92px] flex-[92] border-l md:hidden">
        <Image
          src={imageUrl}
          alt={`Featured image for ${title}`}
          className="object-cover"
          fill
        />
      </div>
    </article>
  );
};
