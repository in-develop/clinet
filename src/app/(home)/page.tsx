import { Hero } from "@/widgets/hero";
import { PromoCard } from "@/widgets/promoSlider";
import { PromoCarousel } from "@/widgets/promoSlider/ui/PromoCarousel";
import { PromoSlider } from "@/widgets/promoSlider/ui/PromoSlider";

export default function Home() {
  return (
    <div className="mx-auto pt-[6rem] sm:pt-[7.4375rem]">
      <Hero />

      <PromoSlider />
    </div>
  );
}
