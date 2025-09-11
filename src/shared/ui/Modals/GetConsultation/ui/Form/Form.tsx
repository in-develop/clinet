import { FC, useState } from "react";

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

  return (
    <>
      <h1 className="font-bold sm:mt-11 sm:text-5xl sm:leading-[1.1]">
        Get a free consultation
      </h1>

      <p className={`${urbanist.className} text-center leading-[1.3] sm:mt-6`}>
        Our cosmetologist will assess your skin, recommend the right home care,
        and suggest suitable treatments. Leave a request, and we’ll call you to
        confirm the time.
      </p>

      <form className="flex flex-col sm:mt-16 sm:gap-8 sm:pt-8">
        <TextInput
          value={name}
          label="Enter name"
          className="w-full sm:w-[413px]"
          labelClassName="sm:text-base"
          inputClassName="w-full leading-[1.3] h-full"
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          value={phone}
          label="Enter phone number"
          className="w-full sm:w-[413px]"
          labelClassName="sm:text-base"
          inputClassName="w-full leading-[1.3]"
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="flex flex-col gap-3">
          <label className="text-eerie-black sm:text-[12px]">
            Select the type of consultation
          </label>

          <Select value={consultationType} onValueChange={setConsultationType}>
            <SelectTrigger className="w-[180px] p-0">
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
          className="self-center sm:mt-16"
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
