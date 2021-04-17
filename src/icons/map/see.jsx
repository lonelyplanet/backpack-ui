/* eslint-disable max-len */
import React from "react";
import Icon from "../../components/icon";
import colors from "../../styles/colors";

const See = props => (
  <Icon fill={colors.accentRed} {...props}>
    <path d="M16 10.7c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3c0-2.9-2.4-5.3-5.3-5.3zM16 18.7c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7c0 1.5-1.2 2.7-2.7 2.7z" />
    <path d="M16 5.3c-8.1 0-16 10.7-16 10.7s7.9 10.7 16 10.7 16-10.7 16-10.7-7.9-10.7-16-10.7zM16.2 24c-4.5 0-8.2-3.6-8.2-8s3.7-8 8.2-8 8.2 3.6 8.2 8-3.6 8-8.2 8z" />
  </Icon>
);

export default See;
