import React, { useState } from "react";
import AddContext from "./AddContext";
import ClassForm from "./components/ClassForm";
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
        <ClassForm />
      </div>
    </AddContext.Provider>
  );
};

export default index;
