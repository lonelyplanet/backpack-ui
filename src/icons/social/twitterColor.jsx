import React from "react";
import Twitter from "./twitter";
import colors from "../../styles/colors";

const TwitterColor = props => (
  <Twitter
    {...props}
    fill={colors.socialTwitter}
  />
);

export default TwitterColor;
