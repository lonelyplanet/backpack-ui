import React from "react";
import Facebook from "./facebook";
import colors from "../../styles/colors";

const FacebookColor = props => (
  <Facebook
    {...props}
    fill={colors.socialFacebook}
  />
);

export default FacebookColor;
