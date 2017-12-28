import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";

const styles = {
  color: colors.accentGray,
  fontFamily: font("miller"),
  fontSize: "14px",
  fontStyle: "italic",
  lineHeight: 1,
};

const ItalicText = ({ children, style }) => (
  <div className="ItalicText" style={[styles, style]}>
    {children}
  </div>
);

ItalicText.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(ItalicText);
