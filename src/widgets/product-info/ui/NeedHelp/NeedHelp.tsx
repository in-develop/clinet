import { cn } from "@/shared/lib/utils";
import { Button, SvgIcon } from "@/shared/ui";

interface INeedHelpProps {
  className?: string;
}

const NeedHelp = ({ className }: INeedHelpProps) => {
  // TODO: add onClick for button to open consultation modal
  return (
    <div
      className={cn(
        "bg-bg-block flex flex-wrap gap-x-6 gap-y-2 px-5 py-[21.5px]",
        className,
      )}
    >
      <span>Not sure what’s right for you?</span>
      <Button variant={"link"}>
        <span>Get a free consultation</span>
        <SvgIcon name={"arrow"} width={16} height={16} />
      </Button>
    </div>
  );
};

export { NeedHelp };
