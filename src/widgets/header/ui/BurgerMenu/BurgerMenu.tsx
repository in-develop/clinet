"use client";

import clsx from "clsx";
import { FC, useEffect } from "react";

import { AppLink, Button } from "@/shared/ui/Button";

type TBurgerMenuProps = {
  isOpen: boolean;
};

const navLinks = [
  { href: "/promotions", label: "Promotions" },
  { href: "/bestsellers", label: "Bestsellers" },
  { href: "/shop", label: "Shop" },
  { href: "/cosmetologist", label: "Cosmetologist" },
  { href: "/about-us", label: "About us" },
  { href: "/skincare-guide", label: "Skincare guide" },
  { href: "/faq", label: "FAQ" },
];

const BurgerMenu: FC<TBurgerMenuProps> = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section
      className={clsx(
        "2md:hidden absolute top-[95.8px] right-0 bottom-0 left-0 z-10 container min-h-[calc(100vh-95.8px)] bg-white transition-transform",
        {
          "translate-y-0": isOpen,
          "-translate-y-full": !isOpen,
        },
      )}
    >
      <div className="h-[calc(100vh-192px)] overflow-y-scroll pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="text-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href === "/shop" ? (
                <Button
                  className="flex w-full justify-between py-3"
                  variant="iconLink"
                >
                  {link.label}
                  <svg
                    width="11"
                    height="14"
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 14V0L11 7L0 14Z" fill="#202020" />
                  </svg>
                </Button>
              ) : (
                <AppLink
                  className="flex justify-between py-3"
                  variant="iconLink"
                  href={link.href}
                >
                  {link.label}
                </AppLink>
              )}
            </li>
          ))}
        </ul>

        <Button className="text-eerie-black mt-20 py-1.5" variant="tabIcon">
          DETERMINE SKIN TYPE
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 14V0L11 7L0 14Z" fill="#202020" />
          </svg>
        </Button>
      </div>
      <div className="before:bg-light-black absolute right-0 bottom-0 left-0 bg-white text-xl before:absolute before:top-0 before:right-0 before:left-0 before:h-[1px]">
        <ul className="container">
          <li>
            <AppLink
              className="flex justify-between py-3"
              variant="iconLink"
              href="/sign-in"
            >
              Sign In
            </AppLink>
          </li>
          <li>
            <AppLink
              className="flex justify-between py-3"
              variant="iconLink"
              href="/contact-us"
            >
              Contact us
            </AppLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { BurgerMenu };
