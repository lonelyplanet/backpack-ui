import React, { PropTypes } from "react";
import radium from "radium";
import { textUppercase } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = Object.assign({}, {
  color: "inherit",
}, textUppercase());

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
  style: propTypes.style,
};

export default radium(AuthorName);
