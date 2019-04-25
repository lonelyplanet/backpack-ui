import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import { textAccent } from "../../utils/typography";
import propTypes from "../../utils/propTypes";
import { validReactAttributes } from "../../utils/validReactAttributes";

const styles = Object.assign({}, {
  color: colors.textPrimary,
  marginBottom: 0,
  marginTop: 0,
}, textAccent());

const TextAccent = (props) => (
  <p {...validReactAttributes(props)} style={[styles, props.style]}>
    {props.children}
  </p>
);

TextAccent.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(TextAccent);
