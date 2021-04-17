import React from "react";
import Pinterest from "./pinterest";
import colors from "../../styles/colors";

const PinterestColor = props => (
  <Pinterest
    {...props}
    fill={colors.socialPinterest}
  />
);

export default PinterestColor;
