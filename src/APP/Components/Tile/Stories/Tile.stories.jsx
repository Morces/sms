/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import TileComponent from ".."

import { tileVariantNames, bgGradientNames } from "../../../Util/config/tile.style"

import { FaBeer } from "react-icons/fa"

const ImageNames = ["bg-image-1", "bg-image-2", "bg-image-3"]

export default {
    title: "COMPONENTS/Tile",
    component: TileComponent,
    argTypes: {
        variant: { options: tileVariantNames, control: { type: "radio" }, default: "data" },
        onclick: { action: "Btn Clicked" },
        primaryText: { control: { type: "text" }, default: "Title" },
        secondaryText: { control: { type: "text" }, default: "Data" },
        sx: { control: { type: "text" }, default: "bg-blue-500" },
        children: { control: { type: 'text' }, default: '' },
        bgGradient: { options: bgGradientNames, control: { type: "radio" } },
        bgImage: { options: ImageNames, control: { type: "radio" } }
    },
}

const Template = ({ ...args }) => (
    <TileComponent {...args} />
)

export const Tile = Template.bind({});
Tile.args = {
    children: <FaBeer />
}