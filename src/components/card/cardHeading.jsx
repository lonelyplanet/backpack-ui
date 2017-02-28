import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "../heading";
import { media, timing } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  display: "-webkit-box",
  fontSize: "24px",
  lineHeight: (32 / 24),
  maxHeight: "60px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  transition: `color ${timing.fast} ease-in-out`,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,

  [mq]: {
    fontSize: "14px",
    lineHeight: (18 / 14),
    maxHeight: "36px",
  },
};

const CardHeading = ({ children, style }) => (
  <Heading
    level={3}
    weight="thin"
    override={[styles, style]}
  >
    {children}
  </Heading>
);

CardHeading.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(CardHeading);
