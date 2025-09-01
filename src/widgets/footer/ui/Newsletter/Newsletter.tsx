"use client";

import { useState } from "react";

import { TextInput } from "@/shared/ui/TextInput";

const Newsletter = () => {
  const [value, setValue] = useState("");
  return (
    <form className="container my-16 flex flex-col sm:items-center justify-between gap-5 py-7 sm:flex-row">
      <p className="laptop:max-w-none text-light-black max-w-[18.4375rem] text-[clamp(32px,calc(32px+16*((100vw-390px)/1050)),48px)]">
        Subscribe to get 10% off your first order
      </p>
      <TextInput
        buttonClassName="size-15"
        className="w-full  sm:max-w-[383px]"
        inputClassName="w-full"
        label="Enter email address"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={() => {}}
      />
    </form>
  );
};

export { Newsletter };
