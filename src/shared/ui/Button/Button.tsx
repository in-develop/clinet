import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";
import { FC } from "react";

import { cn } from "@/shared/lib/utils";

type IAppLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "inline-flex cursor-pointer duration-300 items-center justify-center gap-2 transition-colors whitespace-nowrap font-medium [&_svg>path]:duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        itemList: "p-3 hover:bg-blue hover:text-white flex justify-start",
        borderIcon:
          "rounded-full w-9 border border-light-black hover:bg-blue hover:border-white  hover:[&_svg>path]:fill-white",
        card: "uppercase border border-light-black text-light-black hover:bg-violet hover:text-white font-extrabold",
        tabIcon:
          "p-3 rounded-xxl hover:bg-blue hover:text-white font-bold flex justify-center items-center border border-light-black hover:border-white gap-3 uppercase hover:[&_svg>path]:fill-white ",
        tab: "p-3 rounded-xxl hover:bg-blue hover:text-white font-bold",
        link: "text-light-black font-bold",
        iconLink:
          "flex gap-3 font-bold text-light-black items-center justify-center",
        secondary:
          "border border-light-black px-5 py-2 font-bold text-light-black leading-none rounded-full uppercase hover:bg-secondary-1 hover:text-white",
      },

      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const AppLink: FC<IAppLinkProps & VariantProps<typeof buttonVariants>> = ({
  variant,
  children,
  href,
  ...props
}) => {
  return (
    <Button variant={variant} asChild>
      <Link {...props} href={href}>
        {children}
      </Link>
    </Button>
  );
};

export { AppLink, Button, buttonVariants };
