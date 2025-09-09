import Link from "next/link";

import {
  CONTACT_EMAIL,
  infoLinks,
  pagesLinks,
  shopLinks,
  socialLinks,
} from "@/widgets/footer";

import { NavigationGroup } from "../NavigationGroup";

const Navigation = () => (
  <nav aria-label="Navigation" className="container" role="navigation">
    <div className="laptop:grid-cols-4 border-light-black grid grid-cols-2 gap-y-12 border-t pt-5">
      <NavigationGroup links={shopLinks} title="Shop" />
      <NavigationGroup links={pagesLinks} title="Pages" />
      <NavigationGroup links={infoLinks} title="Information" />
      <div className="laptop:block contents">
        <NavigationGroup links={socialLinks} title="Social media" />
        <div className="laptop:mt-6">
          <Link
            className="focus-visible:ring-offset-background leading-5 font-normal hover:underline focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:outline-none"
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={`Email us at ${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export { Navigation };
