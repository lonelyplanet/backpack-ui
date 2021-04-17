/* eslint-disable max-len */
import React from "react";
import Icon from "../../components/icon";
import colors from "../../styles/colors";

const Drink = props => (
  <Icon fill={colors.accentBlue} {...props}>
    <path d="M0 0l4.6 32h22.9l4.5-32h-32zM9.1 13.9l7.3-6.8 6.8 6.8h-14.1z" />
  </Icon>
);

export default Drink;
