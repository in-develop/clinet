import { Bestsellers, CompletedSets } from "@/widgets";
import { Hero } from "@/widgets/hero";

export default function Home() {
  return (
    <div className="mx-auto pt-[6rem] sm:pt-[7.4375rem]">
      <Hero />
      <Bestsellers />
      <CompletedSets />
    </div>
  );
}
