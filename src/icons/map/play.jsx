/* eslint-disable max-len */
import React from "react";
import Icon from "../../components/icon";
import colors from "../../styles/colors";

const Play = props => (
  <Icon fill={colors.accentYellow} {...props}>
    <path d="M31.8 11.4l-4.2-4.2c-0.1 0.2-0.2 0.3-0.3 0.5-0.8 0.8-2.1 0.8-2.9 0s-0.8-2.1 0-2.9c0.1-0.1 0.3-0.2 0.5-0.3l-4.2-4.2c-0.2-0.2-0.6-0.2-0.8 0l-19.7 19.5c-0.2 0.2-0.2 0.6 0 0.8l4.2 4.2c0.1-0.2 0.2-0.3 0.3-0.5 0.8-0.8 2.1-0.8 2.9 0s0.8 2.1 0 2.9c-0.1 0.1-0.3 0.2-0.5 0.3l4.2 4.2c0.2 0.2 0.6 0.2 0.8 0l19.6-19.6c0.4-0.1 0.4-0.5 0.1-0.7zM11.4 12.9l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5zM14.5 16l1.5-1.5 1.5 1.5-1.5 1.6-1.5-1.6zM19.1 20.7l-1.5-1.5 1.5-1.5 1.5 1.5-1.5 1.5z" />
  </Icon>
);

export default Play;
