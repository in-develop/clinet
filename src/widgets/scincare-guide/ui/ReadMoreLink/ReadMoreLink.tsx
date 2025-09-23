import { ROUTING } from "@/shared/lib/rounting";
import { AppLink } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

interface IReadMoreLinkProps {
  isMobile?: boolean;
}

const ReadMoreLink = ({ isMobile = false }: IReadMoreLinkProps) => {
  return (
    <AppLink
      variant={"link"}
      className={!isMobile ? "hidden md:inline-flex" : ""}
      href={ROUTING.blog}
    >
      <span>Read more articles</span>
      <SvgIcon name="arrow" width={16} height={16} />
    </AppLink>
  );
};

export { ReadMoreLink };
