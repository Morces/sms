import React, { useContext, useState } from "react";
import AddContext from "./AddContext";
import BreadCrumb from "../../../../../Components/BreadCrumb";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../../../Context/AppContext";
import SubjectForm from "./components/SubjectForm";

const index = () => {
  const [step, setStep] = useState(-1);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { setIsLoading } = useContext(AppContext);

  const handleBack = () => {
    if (step === -1) return;
    setStep((c) => c - 1);
  };

  const handleSubmit = () => {
    // setIsLoading(true);
    navigate("/dashboard/classes");
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
        <SubjectForm />
      </div>
    </AddContext.Provider>
  );
};

export default index;
