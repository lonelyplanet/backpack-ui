import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";

const styles = {
  color: colors.textSecondary,
  fontSize: "16px",
  lineHeight: 1,
  marginBottom: 0,
  marginTop: "12px",

  [`@media (max-width: ${mq.max["768"]})`]: {
    fontSize: "12px",
  },
};

const CardDescription = ({ children, style }) => (
  <p
    className="Card-description"
    style={[styles, style]}
  >
    {children}
  </p>
);

CardDescription.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(CardDescription);
