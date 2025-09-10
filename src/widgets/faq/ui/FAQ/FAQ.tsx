import { AppLink } from "@/shared/ui/Button";
import { ROUTING } from "@/shared/lib/rounting";
import { SvgIcon } from "@/shared/ui/SvgIcon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/shared/ui/Accordion";
import { faqItems } from "@/widgets/faq/model";

const FAQ = () => {
  return (
    <section className={"container my-10 flex flex-col gap-y-12 md:flex-row"}>
      <div
        className={
          "flex flex-col items-center space-y-9 md:flex-[715] md:items-start md:justify-between"
        }
      >
        <div className={"max-w-[400px] space-y-5 text-center md:text-left"}>
          <h2 className="text-[clamp(2rem,calc(2rem+16*((100vw-390px)/1050)),3rem)] font-bold">
            Any questions?
          </h2>
          <p>
            Can’t find the answer you’re looking for? Contact us and we’ll be
            happy to help.
          </p>
        </div>
        <AppLink href={ROUTING.contact} variant={"secondary"}>
          <span>Ask us about your problem</span>
          <SvgIcon name={"arrow-scroll-right"} width={16} height={16} />
        </AppLink>
      </div>
      <div className={"md:flex-[645]"}>
        <Accordion
          type={"single"}
          aria-label="Frequently asked questions"
          collapsible
        >
          {faqItems.map((item) => (
            <AccordionItem value={item.question} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { FAQ };
