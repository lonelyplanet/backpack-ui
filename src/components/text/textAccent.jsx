import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { textAccent } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = Object.assign({}, {
  color: colors.textPrimary,
  marginBottom: 0,
  marginTop: 0,
}, textAccent());

const TextAccent = (props) => (
  <p {...props} style={[styles, props.style]}>
    {props.children}
  </p>
);

TextAccent.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(TextAccent);
