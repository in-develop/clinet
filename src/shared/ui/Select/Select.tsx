"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronUpIcon } from "lucide-react";
import * as React from "react";
import {
  FC,
  ComponentProps,
  Children,
  cloneElement,
  ReactElement,
  useState,
} from "react";

import { cn } from "@/shared/lib/utils";

import { SvgIcon } from "../SvgIcon";

interface SelectTriggerProps
  extends ComponentProps<typeof SelectPrimitive.Trigger> {
  open?: boolean;
  size?: "sm" | "default";
}

const Select: FC<ComponentProps<typeof SelectPrimitive.Root>> = (compProps) => {
  const { children, ...props } = compProps;

  const [open, setOpen] = useState(false);

  return (
    <SelectPrimitive.Root data-slot="select" onOpenChange={setOpen} {...props}>
      {Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        // Пробрасываем open в Trigger, чтобы chevron вращалась
        if (child.type === SelectTrigger) {
          return cloneElement(child as ReactElement<SelectTriggerProps>, {
            open,
          });
        }
        return child;
      })}
    </SelectPrimitive.Root>
  );
};

const SelectGroup: FC<ComponentProps<typeof SelectPrimitive.Group>> = (
  compProps,
) => {
  const { ...props } = compProps;

  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
};

const SelectValue: FC<ComponentProps<typeof SelectPrimitive.Value>> = (
  compProps,
) => {
  const { ...props } = compProps;

  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};

const SelectTrigger: FC<SelectTriggerProps> = (compProps) => {
  const {
    children,
    className,
    open = false,
    size = "default",
    ...props
  } = compProps;

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "focus-visible:border-ring border-eerie-black flex w-full cursor-pointer items-center justify-between border-b focus:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[413px] sm:pl-1 " +
          "data-[size=sm] data-[size=sm]:h-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}

      <SelectPrimitive.Icon asChild>
        <SvgIcon
          name="arrow-scroll-down"
          width={11}
          hanging={14}
          className={cn(
            "mr-2.5 transition-transform duration-200",
            open ? "rotate-180" : "",
          )}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const SelectContent: FC<ComponentProps<typeof SelectPrimitive.Content>> = (
  compProps,
) => {
  const { className, children, position = "popper", ...props } = compProps;

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "text-eerie-black data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 m-0 min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto border border-t-0 bg-white",
          position === "popper" &&
            "data-[side=bottom]:translate-y-0 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-0",

          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />

        <SelectPrimitive.Viewport
          className={cn(
            "p-0",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>

        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectLabel: FC<ComponentProps<typeof SelectPrimitive.Label>> = (
  compProps,
) => {
  const { className, ...props } = compProps;

  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
};

const SelectItem: FC<ComponentProps<typeof SelectPrimitive.Item>> = (
  compProps,
) => {
  const { className, children, ...props } = compProps;

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-secondary-1 [&_svg:not([class*='text-'])]:text-eerie-black relative m-0 flex w-full flex-1 cursor-default items-center py-3 pl-1.5 outline-hidden select-none focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 sm:pl-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute top-4 right-4 flex items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <SvgIcon
            name="tick"
            width={16}
            hanging={12}
            className="focus:text-white"
          />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator: FC<ComponentProps<typeof SelectPrimitive.Separator>> = (
  compProps,
) => {
  const { className, ...props } = compProps;

  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};

const SelectScrollUpButton: FC<
  ComponentProps<typeof SelectPrimitive.ScrollUpButton>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
};

const SelectScrollDownButton: FC<
  ComponentProps<typeof SelectPrimitive.ScrollDownButton>
> = (compProps) => {
  const { className, ...props } = compProps;

  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <SvgIcon name="arrow-scroll-down" width={14} height={11} />
    </SelectPrimitive.ScrollDownButton>
  );
};

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
