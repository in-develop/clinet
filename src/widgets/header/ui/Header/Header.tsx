"use client";

import { FC, useState } from "react";
import { useDebounce } from "use-debounce";

import { BurgerMenu } from "../BurgerMenu";
import { HeaderTop } from "../HeaderTop";
import { DesktopNavigation } from "../DesctopNavigation";
import { BurgerIcon } from "../BurgerIcon";
import { RightSideHeader } from "../RightSideHeader";

import { Logo } from "@/shared/ui/Logo";
import { MENU_OPEN_DELAY_MS } from "@/shared/lib/constants";

type THeaderProps = {
  isAuthenticated: boolean;
};

const Header: FC<THeaderProps> = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened] = useDebounce(isOpen, MENU_OPEN_DELAY_MS);
  const orderCount = 0; // This should be replaced with actual order count logic

  return (
    <>
      <header className="fixed top-0 z-20 w-full bg-white shadow-sm">
        <HeaderTop />
        <div className="container flex items-center justify-between py-4">
          <DesktopNavigation />
          <BurgerIcon setIsOpen={setIsOpen} />
          <Logo className="2md:ml-32 2md:min-w-0 2md:flex-1 ml-11 lg:ml-46" />
          <RightSideHeader
            orderCount={orderCount}
            isAuthenticated={isAuthenticated}
          />
        </div>
      </header>
      <BurgerMenu isOpened={isOpened} setIsOpen={setIsOpen} />
    </>
  );
};

export { Header };
