import { FC } from "react";

import { ShopDesktop } from "../Shop";

import { ROUTING } from "@/shared/lib/rounting";
import { AppLink, Button } from "@/shared/ui/Button";

const navigationLinks = [
  { href: "/shop", label: "Shop" },
  { href: ROUTING.cosmetologist, label: "Сosmetologist" },
  { href: ROUTING.aboutUs, label: "About Us" },
  { href: ROUTING.contact, label: "Contact" },
];

interface IDesktopNavigationProps {
  isOpenCategories: boolean;
  setIsOpenCatigories: (_: boolean) => void;
}

const DesktopNavigation: FC<IDesktopNavigationProps> = ({
  setIsOpenCatigories,
  isOpenCategories,
}) => (
  <nav className="2md:block hidden max-w-[478px] flex-none">
    <ul className="flex items-center">
      {navigationLinks.map((link) =>
        link.label === "Shop" ? (
          <li
            className="group cursor-pointer px-5 py-5.5 first:pl-0 last:pr-0"
            key={link.href}
          >
            <Button
              onClick={() => setIsOpenCatigories(!isOpenCategories)}
              variant="link"
              className="linkDecoration font-normal before:bg-white"
            >
              {link.label}
            </Button>

            <ShopDesktop
              isOpenCategories={isOpenCategories}
              setIsOpenCategories={setIsOpenCatigories}
            />
          </li>
        ) : (
          <li className="cursor-pointer px-5 py-5.5" key={link.href}>
            <AppLink
              variant="link"
              className="linkDecoration font-normal"
              href={link.href}
            >
              {link.label}
            </AppLink>
          </li>
        ),
      )}
      <li className="flex items-center">
        <button type="button" className="cursor-pointer py-5.5 pl-5">
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
);

export { DesktopNavigation };
