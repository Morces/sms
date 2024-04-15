import SingleStepper from "../SingleStepper";

import { BsFillCartCheckFill } from "react-icons/bs";

export default {
  title: "COMPONENTS/STEPPER",
  component: SingleStepper,
  argTypes: {
    currentStep: { control: "number", defaultValue: 0 },
    stepNo: { control: "number", defaultValue: 0 },
  },
};

export const Single_Steppper = ({ currentStep, stepNo }) => {
  return (
    <SingleStepper stepNo={stepNo} currentStep={currentStep}>
      <div className="flex flex-row items-center gap-x-3 font-DM-Bold text-white text-xl">
        <BsFillCartCheckFill />
        <p>Some Cool Step</p>
      </div>
    </SingleStepper>
  );
};
