"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";
import { ComponentProps, FC } from "react";

import { cn } from "@/shared/lib/utils";

import { buttonVariants } from "../Button";

const AlertDialog: FC<ComponentProps<typeof AlertDialogPrimitive.Root>> = (
  compProps,
) => {
  const { ...props } = compProps;

  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
};

const AlertDialogTrigger: FC<
  ComponentProps<typeof AlertDialogPrimitive.Trigger>
> = (compProps) => {
  const { ...props } = compProps;

  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
};

const AlertDialogPortal: FC<
  ComponentProps<typeof AlertDialogPrimitive.Portal>
> = (compProps) => {
  const { ...props } = compProps;

  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
};

const AlertDialogOverlay: FC<
  ComponentProps<typeof AlertDialogPrimitive.Overlay>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
};

const AlertDialogContent: FC<
  ComponentProps<typeof AlertDialogPrimitive.Content>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
};

const AlertDialogHeader: FC<ComponentProps<"div">> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
};

const AlertDialogFooter: FC<ComponentProps<"div">> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
};

const AlertDialogTitle: FC<
  ComponentProps<typeof AlertDialogPrimitive.Title>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
};

const AlertDialogDescription: FC<
  ComponentProps<typeof AlertDialogPrimitive.Description>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

const AlertDialogAction: FC<
  ComponentProps<typeof AlertDialogPrimitive.Action>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
};

const AlertDialogCancel: FC<
  ComponentProps<typeof AlertDialogPrimitive.Cancel>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "borderIcon" }), className)}
      {...props}
    />
  );
};

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
