"use client";

import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, FC, useState } from "react";

import { Button } from "../Button";
import { ArrowIcon } from "../Icons";

import { cn } from "@/shared/lib/utils";

const textInputVariants = cva(
  "border-b placeholder-gray text-eerie-black font-normal text-base leading-[1.2] focus:outline-none transition-colors group-hover:border-primary group-hover:placeholder-primary h-7",
  {
    variants: {
      variant: {
        default: "border-eerie-black",
        typing: "border-primary",
        error: "border-error text-error text-xs font-normal placeholder-error",
        disabled:
          "border-gray cursor-not-allowed text-gray group-hover:border-gray group-hover:placeholder-gray",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const buttonVariants = cva(
  "hover:border-primary hover:[&_svg>path]:fill-primary hover:bg-transparent transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-eerie-black text-eerie-black group-hover:border-primary group-hover:[&_svg>path]:fill-primary",
        typing:
          "border-gray text-gray hover:border-gray hover:[&_svg>path]:fill-gray",
        entered: "border-primary text-primary",
        disabled:
          "border-gray text-gray hover:border-gray hover:[&_svg>path]:fill-gray cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ITextInputProps extends ComponentProps<"input">,
  VariantProps<typeof textInputVariants> {
    value: string;
    label?: string;
    onSubmit?: () => void;
    error?: string;
    inputClassName?: string;
    buttonClassName?: string;
  };

const TextInput: FC<ITextInputProps> = ({
  value,
  label,
  onChange,
  onSubmit,
  disabled,
  error,
  className,
  inputClassName,
  buttonClassName,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getTextInputVariant = () => {
    if (disabled) {
      return "disabled";
    }

    if (isFocused || value) {
      return "typing";
    }

    if (error) {
      return "error";
    }

    return "default";
  };

  const getButtonVariant = () => {
    if (disabled || error) {
      return "disabled";
    }

    if (isFocused) {
      return "typing";
    }

    if (value) {
      return "entered";
    }

    return "default";
  };

  return (
    <div className={cn("relative flex flex-col gap-1", className)}>
      {label && (
        <label
          className={cn(
            "text-gray absolute top-0 text-xs font-normal transition-all",
            !isFocused && !value && "top-2/3",
          )}
        >
          {label}
        </label>
      )}

      <div className="group flex items-end gap-2">
        <input
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            textInputVariants({ variant: getTextInputVariant() }),
            inputClassName,
          )}
          {...rest}
        />

        {onSubmit && (
          <Button
            disabled={disabled || Boolean(error)}
            variant="borderIcon"
            size="icon"
            className={cn(
              buttonVariants({ variant: getButtonVariant() }),
              buttonClassName,
            )}
            onClick={onSubmit}
          >
            <ArrowIcon />
          </Button>
        )}
      </div>

      {error && <p className="text-error text-xs font-normal">{error}</p>}
    </div>
  );
};

export { TextInput };
