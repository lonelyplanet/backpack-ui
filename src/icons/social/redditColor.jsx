import React from "react";
import Reddit from "./reddit";
import colors from "../../styles/colors";

const RedditColor = props => (
  <Reddit
    {...props}
    fill={colors.socialReddit}
  />
);

export default RedditColor;
