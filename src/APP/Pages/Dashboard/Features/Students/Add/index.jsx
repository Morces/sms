import React, { useContext, useState } from "react";
import Steps from "./components/Steps";
import AddContext from "./AddContext";
import BreadCrumb from "../../../../../Components/BreadCrumb";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../../../Context/AppContext";

const index = () => {
  const [step, setStep] = useState(-1);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(AppContext);

  const handleBack = () => {
    if (step === -1) return;
    setStep((c) => c - 1);
  };

  const handleSubmit = () => {
    // setIsLoading(true);
    navigate("/dashboard/students");
  };

  return (
    <AddContext.Provider
      value={{
        step,
        setStep,
        currentStep,
        setCurrentStep,
        handleSubmit,
      }}
    >
      <BreadCrumb />
      <div className="rounded-md bg-white mr-4 mt-4">
        <Steps currentStep={step} />
      </div>
    </AddContext.Provider>
  );
};

export default index;
