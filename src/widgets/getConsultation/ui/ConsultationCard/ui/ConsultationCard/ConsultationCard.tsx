import Image from "next/image";
import { FC } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";

import {
  consultationCardVariants,
  contentContainerVariants,
  consultationCardImageVariants,
  IConsultationCard,
  textVariants,
} from "../../model";
import { ConsultationButton } from "../ConsultationButton";

export const ConsultationCard: FC<IConsultationCard> = ({
  size = "small",
  title = "NOT SURE WHAT'S RIGHT FOR YOU?",
  description = "Not sure what to choose? Book a consultation",
  imageSrc = "/images/getConsultation/2.png",
  buttonText = "GET A CONSULTATION",
}) => {
  const [isMobile] = useMediaQuery([BREAKPOINTS["max-2md"]]);
  const isFullDesktop = !isMobile && size === "full";
  const isSmallDesktop = !isMobile && size === "small";

  const buttonSpacing = isFullDesktop ? "gap" : "margin";

  return (
    <div
      className={consultationCardVariants({ size })}
      style={{ flexDirection: isFullDesktop ? "row" : "column" }}
    >
      {/* Small desktop и full desktop: IMAGE слева */}
      {(isSmallDesktop || isFullDesktop) && (
        <div className={consultationCardImageVariants({ size })}>
          <Image
            src={imageSrc}
            fill
            className="object-contain"
            alt="Consultation"
          />
        </div>
      )}

      {/* Контейнер с текстом + кнопкой */}
      <div className={contentContainerVariants({ size })}>
        {title && <p className={textVariants({ type: "title" })}>{title}</p>}
        {description && (
          <p className={textVariants({ type: "description" })}>{description}</p>
        )}

        {/* IMAGE для mobile (small/full) под текстом */}
        {isMobile && (
          <div className={consultationCardImageVariants({ size })}>
            <Image
              src={imageSrc}
              fill
              className="object-contain"
              alt="Consultation"
            />
          </div>
        )}

        <ConsultationButton text={buttonText} spacing={buttonSpacing} />
      </div>
    </div>
  );
};
