import clsx from "clsx";
import { FC } from "react";

type TBurgerIconProps = {
  isOpened: boolean;
  setIsOpen: (_: boolean) => void;
};

const BurgerIcon: FC<TBurgerIconProps> = ({ isOpened, setIsOpen }) => (
  <button
    className={clsx(
      "2md:hidden relative flex h-6 w-6 cursor-pointer items-center justify-center focus:outline-none",
      { border: isOpened },
    )}
    onClick={() => setIsOpen(!isOpened)}
    type="button"
    aria-label="Close"
  >
    <svg
      className={clsx(
        "absolute top-2 h-[2.5px] w-5 origin-[7px] rounded bg-black transition-transform duration-300 ease-in-out",
        {
          "rotate-45": isOpened,
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
          "-rotate-45": isOpened,
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
);

export { BurgerIcon };
