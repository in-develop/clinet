import { FC } from "react";

import { Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

import { buttonVariants } from "../../model";

interface IConsultationButtonProps {
  text: string;
  spacing?: "margin" | "gap";
}

const ConsultationButton: FC<IConsultationButtonProps> = (props) => {
  const { text, spacing } = props;

  return (
    <div className={buttonVariants({ spacing })}>
      <div className="pointer-events-none fixed inset-0 z-40 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <Button variant="tabIcon" className="relative z-50 h-10">
        {text}
        <SvgIcon name="arrow-scroll" width={11} height={14} />
      </Button>
    </div>
  );
};

export { ConsultationButton };
