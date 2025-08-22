"use client";

import { FC, useState } from "react";
import clsx from "clsx";
import { useDebounce } from "use-debounce";

import { BurgerMenu } from "../BurgerMenu";

import { Logo } from "@/shared/ui/Logo";
import { urbanist } from "@/shared/lib/fonts";
import { AppLink } from "@/shared/ui/Button";

type THeaderProps = {
  isAuthenticated: boolean;
};
const DELAY_MS = 100;

const Header: FC<THeaderProps> = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opened] = useDebounce(isOpen, DELAY_MS);
  const orderCount = 0; // This should be replaced with actual order count logic

  return (
    <>
      <header className="fixed top-0 z-20 w-full bg-white shadow-sm">
        <div
          className={clsx(
            urbanist.className,
            "bg-violet py-2 text-center text-sm font-semibold text-white",
          )}
        >
          <AppLink href="/shipping-payment" className="border-b">
            Shipping & Payment
          </AppLink>
        </div>
        <div className="container flex items-center justify-between py-4">
          <nav className="2md:block hidden max-w-[478px] flex-none">
            <ul className="2md:gap-10 flex items-center gap-2">
              <li>
                <AppLink
                  variant="link"
                  className="linkDecoration font-normal"
                  href="/shop"
                >
                  Shop
                </AppLink>
              </li>
              <li>
                <AppLink
                  variant="link"
                  className="linkDecoration font-normal"
                  href="/cosmetologist"
                >
                  Сosmetologist
                </AppLink>
              </li>
              <li>
                <AppLink
                  variant="link"
                  className="linkDecoration font-normal"
                  href="/about-us"
                >
                  About Us
                </AppLink>
              </li>
              <li>
                <AppLink
                  variant="link"
                  className="linkDecoration font-normal"
                  href="/contact"
                >
                  Contact
                </AppLink>
              </li>
              <li className="flex items-center">
                <button type="button" className="cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.444 12.5541 16.0012 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                      fill="#202020"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
          <button
            className={clsx(
              "2md:hidden relative flex h-6 w-6 cursor-pointer items-center justify-center focus:outline-none",
              { border: opened },
            )}
            onClick={() => setIsOpen(!opened)}
            type="button"
            aria-label="Close"
          >
            <svg
              className={clsx(
                "absolute top-2 h-[2.5px] w-5 origin-[7px] rounded bg-black transition-transform duration-300 ease-in-out",
                {
                  "rotate-45": opened,
                },
              )}
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="2" fill="#000" />
            </svg>
            <svg
              className={clsx(
                "absolute bottom-2 h-[2.5px] w-5 origin-[7px] rounded bg-black transition-transform duration-300 ease-in-out",
                {
                  "-rotate-45": opened,
                },
              )}
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="2" fill="#000" />
            </svg>
          </button>
          <div className="2md:ml-32 2md:min-w-0 2md:flex-1 ml-11 lg:ml-46">
            <Logo />
          </div>
          <div className="flex flex-none items-center gap-2 lg:gap-14">
            <button type="button" className="2md:hidden">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 14.5H14.71L14.43 14.23C15.444 13.0541 16.0012 11.5527 16 10C16 8.71442 15.6188 7.45772 14.9046 6.3888C14.1903 5.31988 13.1752 4.48676 11.9874 3.99479C10.7997 3.50282 9.49279 3.37409 8.23192 3.6249C6.97104 3.8757 5.81285 4.49477 4.90381 5.40381C3.99477 6.31285 3.3757 7.47104 3.1249 8.73192C2.87409 9.99279 3.00282 11.2997 3.49479 12.4874C3.98676 13.6752 4.81988 14.6903 5.8888 15.4046C6.95772 16.1188 8.21442 16.5 9.5 16.5C11.11 16.5 12.59 15.91 13.73 14.93L14 15.21V16L19 20.99L20.49 19.5L15.5 14.5ZM9.5 14.5C7.01 14.5 5 12.49 5 10C5 7.51 7.01 5.5 9.5 5.5C11.99 5.5 14 7.51 14 10C14 12.49 11.99 14.5 9.5 14.5Z"
                  fill="#202020"
                />
              </svg>
            </button>
            <AppLink
              variant="link"
              className="2md:block linkDecoration hidden cursor-pointer font-normal"
              href="/login"
            >
              {isAuthenticated ? "Profile" : "Sign In"}
            </AppLink>
            <AppLink
              className="linkDecoration font-normal"
              variant="iconLink"
              href="/sign-in"
            >
              Cart &#40;{orderCount}&#41;
            </AppLink>
            <button
              className="linkDecoration cursor-pointer"
              type="button"
            ></button>
          </div>
        </div>
      </header>
      <BurgerMenu isOpen={opened} />
    </>
  );
};

export { Header };
