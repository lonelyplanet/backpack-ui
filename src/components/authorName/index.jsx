import React, { PropTypes } from "react";
import radium from "radium";
import font from "../../utils/font";

const styles = {
  color: "inherit",
  fontFamily: font("benton"),
  fontSize: "11px",
  fontWeight: 600,
  lineHeight: 1,
  textTransform: "uppercase",
};

const AuthorName = ({ children, style }) => (
  <div
    className="AuthorName"
    itemProp="author"
    style={[styles, style]}
  >
    {children}
  </div>
);

AuthorName.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(AuthorName);
