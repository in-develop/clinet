import { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  direction?: "left" | "right";
};

const ArrowScroll: FC<Props> = (arrProps) => {
  const { direction = "right", ...props } = arrProps;

  const rotate = direction === "left" ? "rotate(180 5.5 7)" : undefined;

  return (
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform={rotate}>
        <path d="M0 14V0L11 7L0 14Z" fill="currentColor" />
      </g>
    </svg>
  );
};

export { ArrowScroll };
