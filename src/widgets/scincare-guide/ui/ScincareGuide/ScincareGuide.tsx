"use client";

import Image from "next/image";
import { useState } from "react";

import { mockBlogPosts } from "../../model";
import { BlogCard } from "../BlogCard";
import { ReadMoreLink } from "../ReadMoreLink";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/Carousel";

const ScincareGuide = () => {
  const [isMobile, isNotMobile] = useMediaQuery([
    BREAKPOINTS["max-md"],
    BREAKPOINTS["md"],
  ]);

  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <section>
      <div className="container flex items-center justify-center md:justify-between">
        <h2 className="text-[clamp(2rem,calc(2rem+16*((100vw-390px)/1050)),3rem)] font-bold">
          Scincare Guide
        </h2>
        {isNotMobile && <ReadMoreLink />}
      </div>
      {isNotMobile && (
        <div className="container mt-9 hidden md:flex">
          <div className="flex overflow-auto md:flex-[715] md:flex-col">
            {mockBlogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                data={post}
                onHover={() => setSelectedPost(index)}
              />
            ))}
          </div>
          <div className="relative hidden overflow-hidden md:block md:flex-[644]">
            <Image
              key={`${mockBlogPosts[selectedPost].id}-${selectedPost}`}
              src={mockBlogPosts[selectedPost].imageUrl}
              alt={mockBlogPosts[selectedPost].title}
              className="enter-blur-start animate-unblur hover-scale-soft object-cover will-change-[transform,filters]"
              fill
              priority
            />
          </div>
        </div>
      )}
      {isMobile && (
        <>
          <div className="mt-9 md:hidden">
            <Carousel opts={{ loop: true, align: "start", dragFree: true }}>
              <CarouselContent className="ml-0">
                {mockBlogPosts.map((post) => (
                  <CarouselItem className="max-w-[90vw] pl-0" key={post.id}>
                    <BlogCard data={post} className={"h-full"} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="mt-5 flex justify-center md:hidden">
            <ReadMoreLink isMobile />
          </div>
        </>
      )}
    </section>
  );
};

export { ScincareGuide };
