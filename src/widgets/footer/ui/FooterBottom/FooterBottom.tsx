import { urbanist } from "@/shared/lib/fonts";
import { cn } from "@/shared/lib/utils";
import { Logo } from "@/shared/ui/Logo";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mt-32 mb-10 flex w-full flex-wrap items-end justify-between gap-x-6 gap-y-3.5">
      <Logo hideBadgeOnMobile={false} size="huge" />
      <div className="max-w-[20.3125rem]">
        <small
          className={cn(
            urbanist.className,
            "text-light-black inline-block text-xs leading-3.5",
          )}
        >
          © {currentYear} Piel Cosmetics is a registered trademark. Copying of
          materials from this website is prohibited.
        </small>
      </div>
    </div>
  );
};

export { FooterBottom };
