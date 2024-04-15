import React, { useState } from "react";
import AddContext from "./AddContext";
import SubjectForm from "./components/SubjectForm";
import Breadcrumb from "../../../../../../../../Components/BreadCrumb";

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
        <SubjectForm />
      </div>
    </AddContext.Provider>
  );
};

export default index;
