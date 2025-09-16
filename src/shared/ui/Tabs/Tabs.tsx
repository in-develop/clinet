"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { ComponentProps, FC } from "react";

import { cn } from "@/shared/lib/utils";

const Tabs: FC<ComponentProps<typeof TabsPrimitive.Root>> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <TabsPrimitive.Root data-slot="tabs" className={cn(className)} {...props} />
  );
};

const TabsList: FC<ComponentProps<typeof TabsPrimitive.List>> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("flex flex-row gap-3 sm:gap-6", className)}
      {...props}
    />
  );
};

const TabsTrigger: FC<ComponentProps<typeof TabsPrimitive.Trigger>> = (
  compProps,
) => {
  const { className, ...props } = compProps;

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-secondary-1 rounded-xxl focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 p-3 leading-[1] font-bold whitespace-nowrap transition-colors duration-300 outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-white sm:leading-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg>path]:duration-300",

        className,
      )}
      {...props}
    />
  );
};

const TabsContent: FC<ComponentProps<typeof TabsPrimitive.Content>> = (
  compProps,
) => {
  const { className, ...props } = compProps;

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(className)}
      {...props}
    />
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
