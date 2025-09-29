import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { urbanist } from "@/shared/lib/fonts";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/Select";
import { SvgIcon } from "@/shared/ui/SvgIcon";
import { TextInput } from "@/shared/ui/TextInput";

export interface IFormValues {
  name: string;
  phone: string;
  consultationType: string;
}

interface IGetConsultationModalProps {
  open?: boolean;
  onOpenChange?: (_: boolean) => void;
  onSubmit: (_: IFormValues) => void;
  onClose: () => void;
}

const GetConsultationDialog: FC<IGetConsultationModalProps> = (props) => {
  const { open, onOpenChange, onSubmit, onClose } = props;

  const [isMobile] = useMediaQuery(BREAKPOINTS["max-2md"]);

  const { handleSubmit, control } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      consultationType: "consultation",
    },
  });

  const submitHandler = (data: IFormValues) => {
    onSubmit(data);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-bg-block border-eerie-black mx-5 flex h-[557px] min-w-[350px] flex-1 flex-col items-center overflow-visible border-[1px] pt-[22px] pb-10 md:mx-10 md:h-[829px] md:pt-10 md:pb-27">
        <AlertDialogCancel asChild>
          <Button
            variant="iconLink"
            className="mr-[22px] flex self-end md:mr-10"
            onClick={onClose}
          >
            {isMobile ? (
              <SvgIcon name="cross" className="h-[14px] w-[14px]" />
            ) : (
              <SvgIcon name="cross-squared" fill="transparent" />
            )}
          </Button>
        </AlertDialogCancel>

        <AlertDialogHeader>
          <AlertDialogTitle className="mx-5 mt-1.5 text-center text-[32px] leading-[1] font-bold text-pretty md:mt-11 md:text-5xl md:leading-[1.1]">
            Get a free consultation
          </AlertDialogTitle>

          <AlertDialogDescription asChild>
            {isMobile ? (
              <p
                className={`${urbanist.className} mx-5 mt-5 text-center leading-[1.3] text-pretty`}
              >
                Personal skin consultation with product and treatment advice.
              </p>
            ) : (
              <p
                className={`${urbanist.className} mt-6 w-full max-w-[630px] text-center leading-[1.3] text-pretty`}
              >
                Our cosmetologist will assess your skin, recommend the right
                home care, and suggest suitable treatments. Leave a request, and
                we’ll call you to confirm the time.
              </p>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="mt-8 flex flex-1 flex-col justify-between md:mt-16 md:pt-8"
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <TextInput
                  {...field}
                  value={field.value ?? ""}
                  label="Enter name"
                  className="w-[310px] md:w-[413px]"
                  labelClassName="text-base"
                  inputClassName="w-full leading-[1.3] h-full"
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-\s()]{7,}$/,
                  message: "Invalid phone number",
                },
              }}
              render={({ field, fieldState }) => (
                <TextInput
                  {...field}
                  value={field.value ?? ""}
                  label="Enter phone number"
                  className="w-[310px] md:w-[413px]"
                  labelClassName="text-base"
                  inputClassName="w-full leading-[1.3] h-full"
                  error={fieldState.error?.message}
                />
              )}
            />

            <div className="flex flex-col md:gap-3">
              {!isMobile && (
                <label className="text-eerie-black text-[12px]">
                  Select the type of consultation
                </label>
              )}

              <Controller
                name="consultationType"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="p-0">
                      <SelectValue placeholder="Consultation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="light">Procedure</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <AlertDialogFooter className="self-center md:mt-38">
            <Button variant="tabIcon" type="submit">
              BOOK A CONSULTATION
              <SvgIcon name="arrow-scroll" width={11} height={14} />
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { GetConsultationDialog };
