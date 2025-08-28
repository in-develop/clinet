"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
      className={cn("border-light-black border", className)}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-b-light-black border-b px-5 py-[1.875rem] last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 group text-light-black flex flex-1 items-center justify-between gap-4 text-left font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        {/* Indicator */}
        <div
          className={cn(
            // Base & rotation animation container
            "relative size-3.5 shrink-0 transition-transform duration-400 ease-out group-data-[state=open]:rotate-180 motion-reduce:transition-none",
            // Horizontal line
            "before:bg-light-black before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full before:-translate-y-1/2 before:rounded before:transition-colors before:duration-300",
            // Vertical line
            "after:bg-light-black after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5 after:origin-center after:-translate-x-1/2 after:rounded after:transition-all after:duration-300",
            // Hide vertical line when open
            "group-data-[state=open]:after:scale-y-0 group-data-[state=open]:after:opacity-0",
          )}
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-light-black overflow-hidden"
      {...props}
    >
      <div className={cn("pt-5", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
