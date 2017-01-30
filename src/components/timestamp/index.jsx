import React, { PropTypes } from "react";
import radium from "radium";
import font from "../../utils/font";
import { color } from "../../../settings.json";

const styles = {
  color: color.subtitleGray,
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
