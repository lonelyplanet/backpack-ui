import React from "react";
import FacebookBlock from "./facebookBlock";
import colors from "../../styles/colors";

const FacebookBlockColor = props => (
  <FacebookBlock
    {...props}
    fill={colors.socialFacebook}
  />
);

export default FacebookBlockColor;
