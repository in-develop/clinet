import { FC } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/ui/AlertDialog";
import { SvgIcon } from "@/shared/ui/SvgIcon";

interface ILoadingProps {
  onClose: () => void;
}

const Loading: FC<ILoadingProps> = (props) => {
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
              name="loader"
              className="h-12 w-12 animate-spin md:h-[78px] md:w-[78px]"
              fill="transparent"
            />
          </AlertDialogTitle>

          <AlertDialogDescription className="mt-6 text-center text-base font-bold md:text-lg">
            Please wait while we process your request.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { Loading };
