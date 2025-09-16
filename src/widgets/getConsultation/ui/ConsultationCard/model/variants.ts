import { cva } from "class-variance-authority";

import { urbanist } from "@/shared/lib/fonts";

// Основной контейнер карточки
const consultationCardVariants = cva(
  "flex flex-col w-full items-center text-center transition duration-300",
  {
    variants: {
      size: {
        small:
          "flex-col 2md:max-w-[27.36vw] px-[35px] 2md:px-0 2md:basis-[27.1%]",
        full: "flex-col gap-0 2md:flex-row 2md:gap-20 2md:w-full",
      },
    },
    defaultVariants: { size: "small" },
  },
);

// Контейнер текста и кнопки
const contentContainerVariants = cva("flex flex-col items-center", {
  variants: {
    size: {
      small: "gap-0",
      full: "w-full 2md:items-start 2md:justify-center mb-10 2md:mb-0 2md:gap-12", // текст слева, кнопка под текстом
    },
  },
  defaultVariants: { size: "small" },
});

// Контейнер картинки
const consultationCardImageVariants = cva(
  "relative w-full border border-eerie-black",
  {
    variants: {
      size: {
        small:
          "aspect-[320/364] max-w-[82.06vw] mt-5 2md:mt-0 2md:mb-6 2md:aspect-[320/359]",
        full: "max-w-[82.06vw] aspect-[318/359] 2md:mt-0 mt-10 2md:mb-0 mb-2 2md:max-w-[31.45vw] 2md:aspect-[451/511.7]", // full desktop = 50% ширины
      },
    },
    defaultVariants: { size: "small" },
  },
);

const buttonVariants = cva("group relative max-w-[273px] self-center", {
  variants: {
    spacing: {
      margin: "mt-8",
      gap: "",
    },
  },
  defaultVariants: { spacing: "margin" },
});

const textVariants = cva("", {
  variants: {
    type: {
      title:
        "text-center font-bold leading-[1] text-[32px] mb-10 2md:text-5xl 2md:leading-[1.1] 2md:mb-0",
      description: `${urbanist.className} text-center font-medium leading-[1] text-[20px]`,
    },
  },
  defaultVariants: { type: "description" },
});

export {
  consultationCardVariants,
  contentContainerVariants,
  consultationCardImageVariants,
  buttonVariants,
  textVariants,
};
