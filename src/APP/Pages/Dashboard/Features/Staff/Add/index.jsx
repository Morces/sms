import React, { useState } from "react";
import AddContext from "./AddContext";
import StaffForm from "./components/StaffForm";
import Breadcrumb from "../../../../../Components/BreadCrumb";

const index = () => {
  const [step, setStep] = useState(-1);

  const handleBack = () => {
    if (step === -1) return;
    setStep((c) => c - 1);
  };

  return (
    <AddContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      <Breadcrumb />
      <div className="rounded-md bg-white mr-4">
        <StaffForm />
      </div>
    </AddContext.Provider>
  );
};

export default index;
