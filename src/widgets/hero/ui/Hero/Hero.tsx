import Image from "next/image";

import { ROUTING } from "@/shared/lib/rounting";
import { AppLink } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

const Hero = () => {
  return (
    <section className="container max-sm:!px-0">
      <div className="border-light-black laptop:min-h-[48.375rem] relative border-y sm:flex sm:border-x">
        <div className="sm:bg-bg-block laptop:flex-[481] absolute top-1/2 left-1/2 z-10 w-full max-w-[17.375rem] -translate-x-1/2 -translate-y-1/2 transform bg-white sm:relative sm:top-0 sm:left-0 sm:z-auto sm:max-w-none sm:flex-[3] sm:translate-none">
          <div className="laptop:px-9 flex h-full flex-col justify-center gap-9 px-5 py-10 sm:gap-6">
            <h1 className="text-light-black laptop:font-semibold laptop:leading-[110%] max-w-[26.0625rem] text-center text-[clamp(2rem,5vw,3.5rem)] leading-none font-bold tracking-normal sm:text-left">
              From Nature. Perfected by Science
            </h1>
            <AppLink
              href={ROUTING.shop}
              className="w-full sm:justify-start"
              variant="link"
              aria-label="Discover the collection"
            >
              <span>Discover the Collection</span>
              <SvgIcon name="arrow" className="shrink-0" decorative />
            </AppLink>
          </div>
        </div>

        <div className="laptop:flex-[474] laptop:aspect-[474/774] relative aspect-[390/636] sm:flex-[4]">
          <Image
            src="/images/heroSection/hero.png"
            alt="Hero Image"
            className="object-cover"
            fill
            priority
            sizes="(min-width:1024px) 474px, (min-width:640px) 60vw, 100vw"
          />
        </div>

        <div className="laptop:flex hidden flex-[405] flex-col items-center justify-center gap-6">
          <div className="border-light-black aspect-[269/326] w-full max-w-[16.8125rem] border">
            {/* TODO: add video here */}
          </div>
          <AppLink
            href={ROUTING.shop}
            variant="secondary"
            aria-label="Shop now"
          >
            <span>Shop now</span>
            <SvgIcon name="arrow-scroll" />
          </AppLink>
        </div>
      </div>
    </section>
  );
};

export { Hero };
