import Link from "next/link";

import { TFooterLink } from "@/widgets/footer";

interface INavigationGroupProps {
  title: string;
  links: TFooterLink[];
}

const NavigationGroup = ({ title, links }: INavigationGroupProps) => (
  <div className="space-y-6">
    <h3 className="text-gray leading-none">{title}</h3>
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            className="focus-visible:ring-offset-background leading-5 font-normal hover:underline focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:outline-none"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export { NavigationGroup };
