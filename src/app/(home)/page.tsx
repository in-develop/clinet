import { GetConsultation } from "@/widgets/getConsultation";
import { Hero } from "@/widgets/hero";

export default function Home() {
  return (
    <div className="mx-auto pt-[6rem] sm:pt-[7.4375rem]">
      <Hero />

      <GetConsultation
        size="small"
        description="Not sure what to choose? Book a consultation"
      />

      <GetConsultation
        size="full"
        title="NOT SURE WHAT'S RIGHT FOR YOU?"
        description="Chat with one of our specialists to discover which of our services might address your individual needs and concerns."
      />
    </div>
  );
}
