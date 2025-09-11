"use client";

import React, { FC, useState } from "react";

import { SvgIcon } from "../../SvgIcon";

import { Form, Loading, Success } from "./ui";

type TSteps = "form" | "loading" | "success";

interface IGetConsultationModalProps {
  onClose: () => void;
}

const GetConsultationModal: FC<IGetConsultationModalProps> = (props) => {
  const { onClose } = props;

  const [step, setStep] = useState<TSteps>("form");

  const onSubmit = () => {
    setStep("loading");

    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  return (
    <div className="bg-bg-block border-eerie-black flex h-[829px] flex-1 flex-col items-center overflow-visible border-[1px] sm:mx-10 sm:pt-10 sm:pb-27">
      <SvgIcon
        name="cross-squared"
        fill="transparent"
        className="flex cursor-pointer self-end sm:mr-10"
        onClick={onClose}
      />

      {step === "form" ? (
        <Form onSubmit={onSubmit} />
      ) : step === "loading" ? (
        <Loading />
      ) : (
        <Success />
      )}
    </div>
  );
};

export { GetConsultationModal };
