import { FC, useState } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { BREAKPOINTS } from "@/shared/lib/constants";
import { urbanist } from "@/shared/lib/fonts";
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

interface IGetConsultationModalProps {
  onSubmit: () => void;
}

const Form: FC<IGetConsultationModalProps> = (props) => {
  const { onSubmit } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [consultationType, setConsultationType] = useState("consultation");

  const [isMobile] = useMediaQuery([BREAKPOINTS["max-2md"], BREAKPOINTS["md"]]);

  return (
    <>
      <h1 className="mt-1.5 text-center text-[32px] leading-[1] font-bold sm:mt-11 sm:text-5xl sm:leading-[1.1]">
        Get a free consultation
      </h1>

      {isMobile ? (
        <p className={`${urbanist.className} mt-5 text-center leading-[1.3]`}>
          Personal skin consultation with product and treatment advice.
        </p>
      ) : (
        <p
          className={`${urbanist.className} mt-6 w-[630px] text-center leading-[1.3]`}
        >
          Our cosmetologist will assess your skin, recommend the right home
          care, and suggest suitable treatments. Leave a request, and we’ll call
          you to confirm the time.
        </p>
      )}

      <form className="mt-8 flex flex-col gap-6 sm:mt-16 sm:gap-8 sm:pt-8">
        <TextInput
          value={name}
          label="Enter name"
          className="w-[310px] sm:w-[413px]"
          labelClassName="text-base"
          inputClassName="w-full leading-[1.3] h-full"
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          value={phone}
          label="Enter phone number"
          className="w-[310px] sm:w-[413px]"
          labelClassName="text-base"
          inputClassName="w-full leading-[1.3]"
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex flex-col sm:gap-3">
          {!isMobile && (
            <label className="text-eerie-black text-[12px]">
              Select the type of consultation
            </label>
          )}

          <Select value={consultationType} onValueChange={setConsultationType}>
            <SelectTrigger className="p-0">
              <SelectValue placeholder="Consultation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consultation">Consultation</SelectItem>
              <SelectItem value="light">Procedure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="tabIcon"
          className="mt-15 self-center sm:mt-38"
          onClick={onSubmit}
        >
          BOOK A CONSULTATION
          <SvgIcon name="arrow-scroll" width={11} height={14} />
        </Button>
      </form>
    </>
  );
};

export { Form };
