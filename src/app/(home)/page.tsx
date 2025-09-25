<<<<<<< HEAD
import { Hero } from "@/widgets/hero";
=======
import { Bestsellers, CompletedSets, Hero } from "@/widgets";
>>>>>>> 0838ac598d803293784a6cdd14fe4242bdc5e80f

export default function Home() {
  return (
    <div className="mx-auto pt-[6rem] sm:pt-[7.4375rem]">
      <Hero />
      <Bestsellers />
      <CompletedSets />
    </div>
  );
}
