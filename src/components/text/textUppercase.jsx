import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { textUppercase } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = Object.assign({}, {
  color: colors.textPrimary,
  marginBottom: 0,
  marginTop: 0,
}, textUppercase());

const TextUppercase = ({ children, style }) => (
  <p style={[styles, style]}>
    {children}
  </p>
);

TextUppercase.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(TextUppercase);
