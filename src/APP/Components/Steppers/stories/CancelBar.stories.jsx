import CancelBar from "../CancelBar";

export default {
  title: "COMPONENTS/STEPPER",
  component: CancelBar,
  argTypes: {
    click: { action: "Btn Call Back" },
    mt: { control: "number", defaultValue: 0 },
    mb: { control: "number", defaultValue: 0 },
  },
};

export const Cancel_Bar = ({ click, mt, mb }) => {
  return <CancelBar click={click} mt={mt} mb={mb} />;
};
