import Steppers from "../Steppers";

import { BsFillCartCheckFill } from "react-icons/bs";

export default {
  title: "COMPONENTS/STEPPER",
  component: Steppers,
  argTypes: {
    currentStep: { control: "number", defaultValue: 0 },
    close: { action: "Close btn clicked" },
  },
};

export const Multi_Steppers = ({ currentStep, close }) => {
  return (
    <Steppers currentStep={currentStep} close={close}>
      <div className="flex flex-row items-center gap-x-3 font-DM-Bold text-white text-xl">
        <BsFillCartCheckFill />
        <p>Some Cool Step 1</p>
      </div>
      <div className="flex flex-row items-center gap-x-3 font-DM-Bold text-white text-xl">
        <BsFillCartCheckFill />
        <p>Some Cool Step 2</p>
      </div>
      <div className="flex flex-row items-center gap-x-3 font-DM-Bold text-white text-xl">
        <BsFillCartCheckFill />
        <p>Some Cool Step 3 </p>
      </div>
      <div className="flex flex-row items-center gap-x-3 font-DM-Bold text-white text-xl">
        <BsFillCartCheckFill />
        <p>Some Cool Step 4</p>
      </div>
      <div className="flex flex-row items-center gap-x-3 font-DM-Bold text-white text-xl">
        <BsFillCartCheckFill />
        <p>Some Cool Step 5</p>
      </div>
    </Steppers>
  );
};
