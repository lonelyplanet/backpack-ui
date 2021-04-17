import React from "react";
import FacebookMessenger from "./facebookMessenger";
import colors from "../../styles/colors";

const FacebookMessengerColor = props => (
  <FacebookMessenger
    {...props}
    fill={colors.socialFacebookMessenger}
  />
);

export default FacebookMessengerColor;
