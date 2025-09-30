import { urbanist } from "@/shared/lib/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui";
import { IUsageInstruction } from "@/widgets/product-info/model";

interface IDetailsAccordionProps {
  benefits: string[];
  activeIngredients: string[];
  usageInstructions: IUsageInstruction[];
}

const DetailsAccordion = ({
  benefits,
  activeIngredients,
  usageInstructions,
}: IDetailsAccordionProps) => {
  return (
    <Accordion type={"multiple"}>
      {!!benefits.length && (
        <AccordionItem value={"benefits"}>
          <AccordionTrigger indicator={"chevron"}>Benefits</AccordionTrigger>
          <AccordionContent>
            <ul className={"space-y-3.5"}>
              {benefits.map((benefit) => (
                <li
                  className={`before:bg-silver relative pl-[18px] before:absolute before:top-[5.4px] before:left-0 before:size-2.5 before:rounded-full ${urbanist.className} leading-[130%]`}
                  key={benefit}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      )}
      {!!activeIngredients.length && (
        <AccordionItem value={"activeIngredients"}>
          <AccordionTrigger indicator={"chevron"}>
            Active ingredients
          </AccordionTrigger>
          <AccordionContent>
            <div className={"max-w-[555px]"}>
              {activeIngredients.map((ingredient) => {
                const [first, ...rest] = ingredient.split(/\s+/);
                return (
                  <p
                    key={ingredient}
                    className={"text-light-black leading-[130%]"}
                  >
                    <span className="font-bold">{first}</span>
                    {rest.length ? ` ${rest.join(" ")}` : ""}
                  </p>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      )}
      {!!usageInstructions.length && (
        <AccordionItem value={"usageInstructions"}>
          <AccordionTrigger indicator={"chevron"}>How to use</AccordionTrigger>
          <AccordionContent>
            <ol className={"max-w-[555px] space-y-3.5"}>
              {usageInstructions.map((step, index) => {
                const num = String(index + 1).padStart(2, "0");
                return (
                  <li key={step.instruction}>
                    <p className="text-light-black leading-[130%]">
                      <span className="mr-3 font-bold tabular-nums">{num}</span>
                      <span className="font-bold">{step.instruction}</span>
                      {step.description && (
                        <>
                          {" "}
                          <span className={urbanist.className}>
                            &ndash; {step.description}
                          </span>
                        </>
                      )}
                    </p>
                  </li>
                );
              })}
            </ol>
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};

export { DetailsAccordion };
