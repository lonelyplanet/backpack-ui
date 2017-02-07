import React, { PropTypes } from "react";
import radium from "radium";

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
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardText);
