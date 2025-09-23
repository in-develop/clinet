import { Bestsellers, CompletedSets, Hero } from "@/widgets";

export default function Home() {
  return (
    <div className="mx-auto pt-[6rem] sm:pt-[7.4375rem]">
      <Hero />
      <Bestsellers />
      <CompletedSets />
    </div>
  );
}
