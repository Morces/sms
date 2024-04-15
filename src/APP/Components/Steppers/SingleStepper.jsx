import { colors } from "../../Utils/colors";

const SingleStepper = ({ currentStep, stepNo, children }) => {
  return (
    <div
      className=" flex flex-row px-4 py-2 w-fit"
      style={{
        backgroundColor:
          currentStep === stepNo - 1
            ? colors.cadet_grey
            : stepNo <= currentStep
            ? colors.primary
            : colors.bright_grey,
      }}
    >
      {children}
    </div>
  );
};

export default SingleStepper;
