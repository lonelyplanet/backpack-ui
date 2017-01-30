import React, { PropTypes } from "react";
import radium from "radium";
import font from "../../utils/font";
import { color } from "../../../settings.json";

const styles = {
  color: color.subtitleGray,
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
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(ItalicText);
