"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

import { formatDate } from "@/shared/lib/dates";
import { urbanist } from "@/shared/lib/fonts";
import { ROUTING } from "@/shared/lib/rounting";
import { cn } from "@/shared/lib/utils";

interface IBlogCardProps {
  title: string;
  excerpt: string;
  date: string; // ISO date string
  id: string;
  imageUrl: string;
}

export const BlogCard = ({
  title,
  excerpt,
  date,
  id,
  imageUrl,
}: IBlogCardProps) => {
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
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${title}`}
      className={
        "border-light-black group focus-visible:ring-blue flex min-w-[21.875rem] cursor-pointer border-y border-r focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:border-b-0 sm:border-l sm:last:border-b"
      }
    >
      <div className="flex flex-[258] flex-col gap-8 p-5 sm:flex-row sm:gap-12 sm:py-[1.875rem]">
        <time
          dateTime={date}
          className={cn(
            "text-dim-gray text-sm leading-4 font-semibold",
            urbanist.className,
          )}
        >
          {formatDate(date)} || Date unavailable
        </time>
        <div className="flex flex-col gap-5">
          <h3 className="text-light-black relative leading-none font-bold underline-offset-4 group-hover:underline">
            {title}
          </h3>
          <p className={cn("line-clamp-3 leading-5", urbanist.className)}>
            {excerpt}{" "}
            <Link
              className="focus-visible:ring-blue hidden font-bold group-hover:underline focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none sm:inline"
              href={ROUTING.blogPost(id)}
              tabIndex={-1}
              aria-label={`Read full article: ${title}`}
            >
              Read full article
            </Link>
          </p>
        </div>
      </div>
      <div className="border-light-black relative aspect-[92/219] h-full w-full flex-[92] border-l sm:hidden">
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
