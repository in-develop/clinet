"use client";

import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, FC, ReactNode, useState } from "react";

import { urbanist } from "@/shared/lib/fonts";
import { cn } from "@/shared/lib/utils";

import { Button, buttonVariants } from "../Button";
import { ArrowIcon } from "../Icons";

const textInputStateVariants = cva(
  "border-b placeholder-gray text-eerie-black font-normal text-base leading-[1.2] focus:outline-none transition-colors group-hover:border-primary group-hover:placeholder-primary min-h-7",
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

const buttonStateVariants = cva(
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

interface ITextInputProps
  extends ComponentProps<"input">,
    VariantProps<typeof textInputStateVariants> {
  value: string;
  label?: string;
  onSubmit?: () => void;
  error?: string;
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
  buttonSize?: VariantProps<typeof buttonVariants>["size"];
  buttonIcon?: ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonIconClassName?: string;
}

const TextInput: FC<ITextInputProps> = (props) => {
  const {
    value,
    label,
    onChange,
    onSubmit,
    disabled,
    error,
    className,
    buttonVariant = "borderIcon",
    buttonSize = "icon",
    buttonIcon,
    labelClassName,
    inputClassName,
    buttonClassName,
    buttonIconClassName,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const getTextInputStateVariant = () => {
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

  const getButtonStateVariant = () => {
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
    <div
      className={cn(
        "relative flex h-[58px] flex-col justify-end gap-1",
        className,
      )}
    >
      {label && (
        <label
          className={cn(
            urbanist.className,
            "text-eerie-black absolute top-0 text-xs font-normal transition-all",
            !isFocused && !value && "top-2/3 -translate-y-1/2 text-base",
            labelClassName,
          )}
        >
          {label}
        </label>
      )}

      <div className="group relative flex items-end">
        <input
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            urbanist.className,
            "peer transition-all",
            textInputStateVariants({ variant: getTextInputStateVariant() }),
            inputClassName,
          )}
          {...rest}
        />
        {buttonIcon && <div className={buttonIconClassName}>{buttonIcon}</div>}

        {onSubmit && (
          <Button
            disabled={disabled || Boolean(error)}
            variant={buttonVariant}
            size={buttonSize}
            className={cn(
              buttonStateVariants({ variant: getButtonStateVariant() }),
              buttonClassName,
            )}
            onClick={onSubmit}
          >
            <ArrowIcon className="size-4" />
          </Button>
        )}
      </div>

      {error && <p className="text-error text-xs font-normal">{error}</p>}
    </div>
  );
};

export { TextInput };
