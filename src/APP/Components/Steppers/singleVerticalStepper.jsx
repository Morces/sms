import singleStep from "./../../Assets/Icons/verticalStepper.png";

import activeStep from "./../../Assets/Icons/activeVerticalStepper.png";

import { colors } from "../../Utils/colors";

const SingleVerticalStepper = ({
  currentStep = 1,
  stepNo = 1,
  setStepNo = () => {},
  label = "step",
}) => {
  return (
    <div
      className=" flex gap-x-3 cursor-pointer"
      onClick={() => setStepNo(currentStep)}
    >
      {currentStep === stepNo ? (
        <img alt="active step" src={activeStep} width="30px" />
      ) : (
        <img alt="active step" src={singleStep} width="30px" />
      )}
      <p
        className=" text-lg font-bold"
        style={{ color: currentStep === stepNo ? colors.primary : "#020246" }}
      >
        {label}
      </p>
    </div>
  );
};

export default SingleVerticalStepper;
