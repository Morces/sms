import { useContext, useState } from "react";
import Steppers from "../../../../../../Components/Steppers/Steppers";
import Btn from "../../../../../../Components/Button/Btn";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";
import Programs from "./Programs";
import AddContext from "../AddContext";

const Steps = () => {
  const steps = ["Student", "Parent", "Programs"];
  const { currentStep, setCurrentStep, handleSubmit } = useContext(AddContext);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="container mx-auto p-4 pt-6">
      <Steppers steps={steps} currentStep={currentStep} />
      <div className="mt-4">
        {currentStep === 0 && (
          <div className="mb-2 max-md:mb-16 max-sm:mb-18">
            <StudentForm />
          </div>
        )}
        {currentStep === 1 && (
          <div className="mb-2 max-md:mb-16 max-sm:mb-18">
            <ParentForm />
          </div>
        )}
        {currentStep === 2 && (
          <div className="mt-5 mb-2 max-md:mb-16 max-sm:mb-18">
            <Programs />
          </div>
        )}
      </div>

      <div className="flex w-full justify-between h-14 gap-8 mt-8 flex-col-reverse md:flex-row">
        <div className="md:w-2/12">
          <Btn
            btn={currentStep > 0 ? "primary" : "secondary"}
            size="block"
            onClick={() => handlePrev()}
          >
            Previous
          </Btn>
        </div>

        <div className="md:w-2/12">
          <Btn
            btn="primary"
            size="block"
            onClick={() =>
              currentStep < steps.length - 1 ? handleNext() : handleSubmit()
            }
          >
            {currentStep < steps.length - 1 ? "Next" : "Submit"}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Steps;
