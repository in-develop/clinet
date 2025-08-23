import Link from "next/link";

import { formatDate } from "@/shared/lib/dates";
import { urbanist } from "@/shared/lib/fonts";
import { ROUTING } from "@/shared/lib/rounting";
import { cn } from "@/shared/lib/utils";

interface IBlogCardProps {
  title: string;
  excerpt: string;
  date: string; // ISO date string
  id: string;
}

export const BlogCard = ({ title, excerpt, date, id }: IBlogCardProps) => {
  return (
    <article
      className={
        "border-light-black group flex w-full justify-between gap-12 border-x border-t px-5 py-[1.875rem] last:border-b"
      }
    >
      <div
        className={cn(
          "text-dim-gray text-sm font-semibold",
          urbanist.className,
        )}
      >
        {formatDate(date)}
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="text-light-black relative font-bold underline-offset-4 group-hover:underline">
          {title}
        </h5>
        <p className={urbanist.className}>
          {excerpt}{" "}
          <Link
            className="font-bold group-hover:underline"
            href={ROUTING.blogPost(id)}
          >
            Read full article
          </Link>
        </p>
      </div>
    </article>
  );
};
