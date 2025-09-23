export interface SvgIconProps {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
  title?: string;
  decorative?: boolean;
}

export const SvgIcon = ({
  name,
  width = 24,
  height = 24,
  title,
  decorative = false,
  ...props
}: SvgIconProps) => {
  const titleId = title && !decorative ? `${name}-icon-title` : undefined;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-labelledby={titleId}
      focusable="false"
      {...props}
    >
      {titleId && <title id={titleId}>{title}</title>}
      <use xlinkHref={`/icons/icons.svg#${name}`} />
    </svg>
  );
};
