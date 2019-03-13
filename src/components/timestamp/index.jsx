import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import font from "../../utils/font";
import colors from "../../styles/colors";

const styles = {
  color: colors.accentGray,
  fontFamily: font("benton"),
  fontSize: "11px",
  fontWeight: 600,
  lineHeight: 1,
  textTransform: "uppercase",
};

const Timestamp = ({ children, dateTime, style }) => (
  <time className="Timestamp" dateTime={dateTime} style={[styles, style]}>
    {children}
  </time>
);

Timestamp.propTypes = {
  children: PropTypes.node.isRequired,
  dateTime: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(Timestamp);
