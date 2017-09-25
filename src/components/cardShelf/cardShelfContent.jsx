import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import propTypes from "../../utils/propTypes";

const styles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const CardShelfContent = ({ children, style }) => (
  <div
    className="CardShelf-content"
    style={[styles, style]}
  >
    {children}
  </div>
);

CardShelfContent.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(CardShelfContent);
