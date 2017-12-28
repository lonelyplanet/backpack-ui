import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import { media } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  color: colors.textSecondary,
  fontSize: "16px",
  lineHeight: 1,
  marginBottom: 0,
  marginTop: "12px",

  [mq]: {
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
