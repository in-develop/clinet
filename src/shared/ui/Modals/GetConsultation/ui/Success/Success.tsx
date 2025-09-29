import { FC } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/ui/AlertDialog";
import { Button } from "@/shared/ui/Button";
import { SvgIcon } from "@/shared/ui/SvgIcon";

interface ISuccessProps {
  onClose: () => void;
}
const Success: FC<ISuccessProps> = (props) => {
  const { onClose } = props;

  const [isMobile] = useMediaQuery(BREAKPOINTS["max-2md"]);

  return (
    <AlertDialog open onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent className="bg-bg-block border-eerie-black mx-5 flex h-[557px] min-w-[350px] flex-1 flex-col items-center overflow-visible border-[1px] pt-10 pb-10 md:mx-10 md:h-[829px] md:pt-16 md:pb-16">
        <AlertDialogCancel className="mr-[22px] flex self-end md:mr-10">
          {isMobile ? (
            <SvgIcon name="cross" className="h-[14px] w-[14px]" />
          ) : (
            <SvgIcon name="cross-squared" fill="transparent" />
          )}
        </AlertDialogCancel>

        <AlertDialogHeader className="flex flex-1 flex-col items-center justify-center">
          <AlertDialogTitle>
            <SvgIcon
              name="tick"
              fill="eerie-black"
              className="mt-35 h-[32px] w-[43px] md:mt-[218px] md:h-[52px] md:w-[71px]"
            />
          </AlertDialogTitle>

          <AlertDialogDescription className="md:text-5 mt-14 px-8 text-center text-base leading-[1] font-bold md:mt-16 md:leading-[1.1]">
            Thank you! We will contact you shortly to clarify the details.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <Button variant="tabIcon" className="mt-40 self-center md:mt-16">
            GO TO MAIN PAGE
            <SvgIcon name="arrow-scroll" width={11} height={14} />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { Success };
