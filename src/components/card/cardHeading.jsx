import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import timing from "../../styles/timing";
import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";
import Heading from "../heading";

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

  [`@media (max-width: ${mq.max[768]})`]: {
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
