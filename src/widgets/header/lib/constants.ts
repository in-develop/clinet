import { TDiraction } from "./types";

const diractionMap: Record<TDiraction, (_: boolean) => string> = {
  slideLeft: (isOpened: boolean) =>
    isOpened ? "translate-x-0" : "-translate-x-full",
  slideRight: (isOpened: boolean) =>
    isOpened ? "translate-x-0" : "translate-x-full",
  slideUp: (isOpened: boolean) =>
    isOpened ? "translate-y-0" : "-translate-y-full",
  slideDown: (isOpened: boolean) =>
    isOpened ? "translate-y-0" : "translate-y-full",
};

const getTranslateClass = (isOpened: boolean, diraction?: TDiraction) =>
  diractionMap[diraction ?? "slideLeft"](isOpened);

export { getTranslateClass };
