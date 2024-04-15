/* eslint-disable react/prop-types */
import BadgeComponent from "..";

import { badgeClassNames } from "../../../Util/config/badge.style";

export default {
  title: 'COMPONENTS/Badge',
  component: BadgeComponent,
  argTypes: {
    variant: { options: badgeClassNames, control: { type: "radio" }, default: 'success' },
    text: { control: { type: "text" }, default: 'Badge' },
  },
};


export const Badge = ({ variant, text="Badge text" }) => (
  <BadgeComponent variant={variant} text={text} />
);
