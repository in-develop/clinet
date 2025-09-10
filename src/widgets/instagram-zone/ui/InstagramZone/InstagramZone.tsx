import { INSTAGRAM_LINK, instaImages } from "../../model";

import { AppLink } from "@/shared/ui/Button";
import { RunningLine } from "@/shared/ui/RunningLine";
import { SvgIcon } from "@/shared/ui/SvgIcon";
import { InstaCard } from "@/widgets/instagram-zone/ui/InstaCard";

const InstagramZone = () => {
  return (
    <section className="my-32">
      <div className="container">
        <h2 className="w-min text-[clamp(20px,calc(20px+16*((100vw-24.375rem)/1050)),3rem)] font-bold">
          <AppLink
            className="flex items-start gap-2 leading-none"
            variant="link"
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Piel Cosmetics on Instagram (opens in a new tab)"
          >
            <span>@pielcosmetics_official</span>
            <SvgIcon
              stroke="black"
              name="link"
              className="text-light-black stroke-2"
              width={16}
              height={16}
              decorative
            />
          </AppLink>
        </h2>
        <p className="sr-only">
          Decorative scrolling gallery of recent Instagram images. Visit our
          Instagram profile.
        </p>
      </div>
      <div className="mt-5 md:mt-9" aria-hidden="true" role="presentation">
        <RunningLine speed={70}>
          {instaImages.map((src) => (
            <InstaCard key={src} imageUrl={src} />
          ))}
        </RunningLine>
      </div>
    </section>
  );
};

export { InstagramZone };
