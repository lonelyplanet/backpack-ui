import React, { PropTypes } from "react";
import radium from "radium";

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
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardShelfContent);
