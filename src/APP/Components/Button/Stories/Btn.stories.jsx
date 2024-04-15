import { FaBeer } from 'react-icons/fa';

import BtnComponent from "../Btn"
import { btnNames, btnSizeNames, btnOutlineOptions, btnPaddingNames } from "../../../Utils/config/btns.style";

export default {
    title: "COMPONENTS/BUTTONS/Btn",
    component: BtnComponent,
    argTypes: {
        btn: { options: btnNames, control: { type: "radio" }, default: "primary" },
        size: { options: btnSizeNames, control: { type: "radio" } },
        onClick: { action: "Btn Clicked" },
        outline: { options: btnOutlineOptions, control: { type: "radio" }, default: false },
        ex: { control: { type: "text" }, default: "shadow-lg" },
        rounded: { control: { type: "boolean" }, default: false },
        disabled: { control: { type: "boolean" }, default: false },
        padding: {options: btnPaddingNames,control: {type: "radio"}, default: "lg"}
    }
}

const Template = ({ btn, ex, onClick, rounded, size, outline, disabled, padding }) => (
    <BtnComponent
        btn={btn}
        ex={ex}
        onClick={onClick}
        rounded={rounded}
        size={size}
        outline={outline}
        disabled={disabled}
        padding={padding}
    >
        Default text <FaBeer />
    </BtnComponent>
)


export const Btn = Template.bind({})
Btn.args = {
    btn: "primary",
    outline: false,
    ex: "",
    rounded: false,
    size: "auto",
    disabled: false,
    onClick: () => { }
}
