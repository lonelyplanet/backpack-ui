/* eslint-disable max-len */
import React from "react";
import Icon from "../../components/icon";
import colors from "../../styles/colors";

const Eat = props => (
  <Icon fill={colors.accentGreen} {...props}>
    <path d="M13.2 9.3h-1.1v-9.3h-2.3v9.3h-1.2v-9.3h-2.2v13.8c0 2.1 1.5 3.9 3.4 4.4v13.8h2.3v-13.7c2-0.5 3.4-2.3 3.4-4.4v-13.9h-2.3v9.3z" />
    <path d="M23 0h-2.7v32h2.3v-13.7h0.4c1.5 0 2.7-1.2 2.7-2.7v-12.9c-0.1-1.5-1.3-2.7-2.7-2.7z" />
  </Icon>
);

export default Eat;
