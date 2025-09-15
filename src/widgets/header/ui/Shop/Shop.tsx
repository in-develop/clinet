import { FC, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import { getTranslateClass } from "../../lib/constants";

import { AppLink, Button } from "@/shared/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import { CATEGORIES } from "@/shared/lib/constants";
import { ROUTING } from "@/shared/lib/rounting";

interface IShopMobileProps {
  isOpenSubCategories: boolean;
  setIsOpenSubCategories: (_: boolean) => void;
  setIsOpenCategories: (_: boolean) => void;
}

interface IShopDesktopProps {
  isOpenCategories: boolean;
  setIsOpenCategories: (_: boolean) => void;
}

const ShopMobile: FC<IShopMobileProps> = ({
  isOpenSubCategories,
  setIsOpenSubCategories,
  setIsOpenCategories,
}) => {
  const handleCloseBurgerMenu = () => {
    setIsOpenSubCategories(false);
    setIsOpenCategories(false);
  };

  return (
    <section
      className={clsx(
        "absolute inset-0 z-30 overflow-y-scroll bg-white pb-3 transition-transform",
        getTranslateClass(isOpenSubCategories),
      )}
    >
      <h3 className="text-md container mb-5">
        <Button
          onClick={() => setIsOpenSubCategories(false)}
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

      {CATEGORIES.map((category) => (
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
                    onClick={handleCloseBurgerMenu}
                    className="p-0 font-normal"
                    href={ROUTING.catalog(category.slug, subTitle.slug)}
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

const ShopDesktop: FC<IShopDesktopProps> = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section
      className={clsx(
        "2md:group-hover:block absolute top-[104px] right-0 bottom-0 left-0 hidden min-h-screen cursor-default overflow-y-scroll bg-white shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
      )}
    >
      <div className="grid h-full grid-cols-[20.83%_20.83%_20.83%_37.5%] grid-rows-[repeat(2,1fr)] gap-y-2.5">
        <div className="py-5.5 pl-10 sm:pl-8">
          <h3 className="relative mb-2.5 inline-block pb-2 font-bold after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:bg-black">
            By Demand
          </h3>
          <ul className="flex flex-col gap-1">
            <li>
              <AppLink variant="link" className="font-normal" href="/">
                See all
              </AppLink>
            </li>
            <li>
              <AppLink variant="link" className="font-normal" href="/">
                New Arrivals
              </AppLink>
            </li>
            <li>
              <AppLink variant="link" className="font-normal" href="/">
                Summer Formula
              </AppLink>
            </li>
          </ul>
        </div>
        <h3 className="row-start-2 pl-10 font-bold sm:pl-8">Promotions</h3>
        <div className="w-fit py-5.5">
          <h3 className="relative mb-2.5 inline-block pb-2 font-bold after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:bg-black">
            On request
          </h3>
          <ul className="flex flex-col gap-1">
            {CATEGORIES.map((category) => (
              <li
                onMouseEnter={() => setHoveredCategory(category.title)}
                key={category.title}
              >
                <AppLink
                  className="p-0 font-normal"
                  href={ROUTING.catalog(category.slug)}
                  variant="link"
                >
                  {category.title}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-start-2 row-start-2 pb-3.5">
          <AppLink
            className="justify-start text-sm"
            variant="iconLink"
            href="/"
          >
            Determine Skin Type
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 13.5L16.17 13.5L10.58 19.09L12 20.5L20 12.5L12 4.5L10.59 5.91L16.17 11.5L4 11.5L4 13.5Z"
                fill="black"
              />
            </svg>
          </AppLink>
          <span className="text-xsm text-eerie-black">
            A personal prescriotion
          </span>
          <Image
            src="/images/determineSkinType/1.png"
            alt="skin type"
            width={160}
            height={160}
          />
        </div>
        <div className="col-start-3 row-start-1 row-end-3 mt-11.5 py-5.5">
          <ul className="flex flex-col gap-3">
            {CATEGORIES.find((c) => c.title === hoveredCategory)?.subTitles.map(
              (sub) => (
                <li key={sub.slug} className="leading-none">
                  <AppLink
                    className="!text-dim-gray font-normal"
                    variant="link"
                    href={ROUTING.catalog(
                      CATEGORIES.find((c) => c.title === hoveredCategory)!.slug,
                      sub.slug,
                    )}
                  >
                    {sub.subTitle}
                  </AppLink>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="relative col-start-4 row-start-1 row-end-3 flex items-center justify-center">
          <Image
            src="/images/header/1.png"
            alt="piel gialur"
            width={540}
            height={640}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 flex flex-col p-10 text-xl font-bold text-white">
            <h3 className="mb-3">BEST - SELLERS</h3>
            <AppLink
              className="w-fit text-sm text-white"
              variant="iconLink"
              href="/"
            >
              Discover the Collection
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"
                  fill="white"
                />
              </svg>
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ShopMobile, ShopDesktop };
