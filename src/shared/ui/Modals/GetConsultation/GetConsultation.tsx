"use client";

import React, { FC, useState } from "react";

import { GetConsultationDialog, Loading, Success } from "./ui";

type TSteps = "form" | "loading" | "success";

interface IGetConsultationModalProps {
  open: boolean;
  onOpenChange: (_: boolean) => void;
}

const GetConsultationModal: FC<IGetConsultationModalProps> = (props) => {
  const { open, onOpenChange } = props;

  const [step, setStep] = useState<TSteps>("form");

  const onSubmit = () => {
    setStep("loading");

    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  const closeModal = () => {
    setStep("form");
    onOpenChange(false);
  };

  return (
    <>
      {open && (
        <>
          {step === "form" && (
            <GetConsultationDialog onSubmit={onSubmit} onClose={closeModal} />
          )}
          {step === "loading" && <Loading onClose={closeModal} />}
          {step === "success" && <Success onClose={closeModal} />}
        </>
      )}
    </>
  );
};

export { GetConsultationModal };
