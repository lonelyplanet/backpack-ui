import React from "react";
import Icon from "../components/icon";

const iconFromString = (iconName, props) =>
  React.createElement(Icon[iconName], { ...props });

export default iconFromString;
