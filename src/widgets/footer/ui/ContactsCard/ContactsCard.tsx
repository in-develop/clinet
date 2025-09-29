import { urbanist } from "@/shared/lib/fonts";
import { AppLink } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

interface IContactsCardProps {
  href: string;
  title: string;
  description: string;
  linkText: string;
}

const ContactsCard = ({
  description,
  href,
  linkText,
  title,
}: IContactsCardProps) => {
  return (
    <div className="border-light-black text-light-black flex flex-1 flex-col items-center justify-center border-b py-12 leading-5 first:border-t sm:border-y sm:border-r sm:last:border-r-0">
      <h2 className="text-[clamp(32px,calc(32px+16*((100vw-390px)/1050)),48px)] font-bold">
        {title}
      </h2>
      <p className={`mt-5 ${urbanist.className}`}>{description}</p>
      <AppLink
        href={href}
        className="mt-12 !px-5"
        size={"lg"}
        variant={"secondary"}
      >
        <span>{linkText}</span>
        <SvgIcon name="arrow-scroll-right" />
      </AppLink>
    </div>
  );
};

export { ContactsCard };
