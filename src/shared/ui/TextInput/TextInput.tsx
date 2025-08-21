import { cn } from "@/shared/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textInputVariants = cva(
  "border-b border-light-black bg-transparent placeholder-gray-400 hover:border-b-violet hover:outline-none hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border-light-black text-light-black ",
        hover: "p-3 hover:text-white flex justify-start",
        typing:
          "rounded-full w-9 border border-light-black hover:bg-blue hover:border-white  hover:[&_svg>path]:fill-white",
        entered: "uppercase border border-light-black text-light-black hover:bg-violet hover:text-white font-extrabold",
        disabled:
          "p-3 rounded-xxl hover:bg-blue hover:text-white font-bold flex justify-center items-center border border-light-black hover:border-white gap-3 uppercase hover:[&_svg>path]:fill-white ",
        error: "p-3 rounded-xxl hover:bg-blue hover:text-white font-bold",
      },

    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TextInput(props: React.ComponentProps<"input"> &
  VariantProps<typeof textInputVariants> & {
    // asChild?: boolean;
    value: string;
    onChange: () => void;
    isDisabled? : boolean;
    error?: string;
    className?: string;
  }) {
    const {
      value,
      onChange,
      isDisabled,
      error,
      className,
    // variant,
    ...rest
    } = props;

    const getVariant = () => {
      if (isDisabled) {
        return 'disabled'
      }

      if (error) {
        return 'error'
      }

      return 'default'
    }

    return (
      <div>
        <div className="">
          <input
          // data-slot="button"
          className={cn(textInputVariants({ variant: getVariant(), className }))}
          {...rest}
        />

        
        </div>

          {error && <p className="">{error}</p>}
        </div>
      );
    }

    export {TextInput, textInputVariants}