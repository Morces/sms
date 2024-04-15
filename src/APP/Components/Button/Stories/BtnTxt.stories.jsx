/* eslint-disable react/prop-types */
/* eslint-disable no-dupe-keys */
import BtnTxtComponent from "./../BtnTxt";
import { btnNames, btnSizeNames, btnOutlineOptions, btnPaddingNames } from "../../../Util/config/btns.style";

export default {
  title: "COMPONENTS/BUTTONS/BtnTxt",
  component: BtnTxtComponent,
  argTypes: {
    btn: { options: btnNames, control: { type: "radio" } },
    size: { options: btnSizeNames, control: { type: "radio" }, default: 'auto' },
    onClick: { action: "Btn Clicked" },
    text: { control: { type: "text" }, default: "Vedi" },
    outline: { options: btnOutlineOptions, control: { type: "radio" }, default: false },
    ex: { control: { type: "text" }, default: "shadow-lg" },
    rounded: { control: { type: "boolean" }, default: true },
    disabled: { control: { type: "boolean" }, default: false },
    padding: {options: btnPaddingNames,control: {type: "radio"}, default: "lg"}
  },
};

export const BtnTxt = ({ btn, text, ex, onClick, rounded, outline, size, disabled, padding }) => {
  return <BtnTxtComponent
    btn={btn}
    text={text}
    ex={ex}
    onClick={onClick}
    rounded={rounded}
    outline={outline}
    size={size}
    disabled={disabled}
    padding={padding}
  />;
};
