import React from "react";
import Icon from "../components/icon";

export const iconFromString = (iconName, props) => React.createElement(Icon[iconName], {
  ariaHidden: true,
  className: "Icon",
  ...props,
});
