import React, { PropTypes } from "react";
import radium from "radium";
import propTypes from "../../utils/propTypes";

const styles = {
  position: "relative",
};

const CardText = ({ children, style }) => (
  <div
    className="Card-text"
    style={[styles, style]}
  >
    {children}
  </div>
);

CardText.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(CardText);
