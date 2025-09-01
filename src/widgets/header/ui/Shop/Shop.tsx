import { FC } from "react";
import clsx from "clsx";
import Image from "next/image";

import { AppLink, Button } from "@/shared/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";

const mobileCategories = [
  {
    title: "Le Pèlerin Perfume",
    subTitles: [],
  },
  {
    title: "Piel Cosmetics Line",
    subTitles: [
      { subTitle: "Specialiste", slug: "/specialiste" },
      { subTitle: "Youth defence", slug: "/youth-defence" },
      { subTitle: "Safe care", slug: "/safe-care" },
      { subTitle: "Sun & Cold", slug: "/sun-cold" },
      { subTitle: "Sensitive", slug: "/sensitive" },
      { subTitle: "Magnifique", slug: "/magnifique" },
      { subTitle: "Rejuvenate", slug: "/rejuvenate" },
      { subTitle: "Pure salvation", slug: "/pure-salvation" },
      { subTitle: "Men", slug: "/men" },
      { subTitle: "Hair & Lash", slug: "/hair-lash" },
      { subTitle: "Body care", slug: "/body-care" },
      { subTitle: "Professional", slug: "/professional" },
    ],
  },
  {
    title: "Surgene Line",
    subTitles: [],
  },
  {
    title: "Skincare",
    subTitles: [],
  },
  {
    title: "By Skin Type",
    subTitles: [],
  },
  {
    title: "Men's Cosmetics",
    subTitles: [],
  },
  {
    title: "Body Care",
    subTitles: [],
  },
  {
    title: "Hair Care",
    subTitles: [],
  },
  {
    title: "Professional Skincare",
    subTitles: [],
  },
  {
    title: "Gifts and Packaging",
    subTitles: [],
  },
];

interface IShopProps {
  isOpenCategories: boolean;
  setIsOpenCategories: (_: boolean) => void;
}

const Shop: FC<IShopProps> = ({ isOpenCategories, setIsOpenCategories }) => {
  return (
    <section
      className={clsx(
        "absolute inset-0 z-30 overflow-y-scroll bg-white pb-3 transition-transform",
        {
          "translate-y-0": isOpenCategories,
          "-translate-x-full": !isOpenCategories,
        },
      )}
    >
      <h3 className="text-md container mb-5">
        <Button
          onClick={() => setIsOpenCategories(false)}
          className="relative flex w-full py-3"
          variant="iconLink"
        >
          <svg
            className="absolute left-0 rotate-180"
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 14V0L11 7L0 14Z" fill="#202020" />
          </svg>
          Shop
        </Button>
      </h3>

      {mobileCategories.map((category) => (
        <Accordion
          key={category.title}
          type="single"
          collapsible
          className="border-none p-0"
        >
          <AccordionItem
            className="data-[state=open]:bg-secondary-2 container border-none p-0"
            value={category.title}
          >
            <AccordionTrigger
              className={"text-md cursor-pointer py-2.5 font-bold"}
            >
              {category.title}
            </AccordionTrigger>
            <AccordionContent className="pt-0">
              <div className="flex flex-col items-start gap-3 pt-3 pb-2.5">
                {category.subTitles.map((subTitle) => (
                  <AppLink
                    className="p-0 font-normal"
                    href={subTitle.slug}
                    variant="link"
                    key={subTitle.slug}
                  >
                    {subTitle.subTitle}
                  </AppLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <div className="container mt-10">
        <Image
          className="mb-3.5"
          src="/images/shopCategories/texture.jpg"
          alt="texture"
          width="165"
          height="165"
        />
        <p className="mb-1">Filter by skin concern</p>
        <Button variant="iconLink">
          Get formulation
          <svg
            className="w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"
              fill="#202020"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export { Shop };
