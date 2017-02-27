import React, { PropTypes } from "react";
import radium from "radium";
import { color, timing } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const styles = {
  backgroundColor: "transparent",
  color: color.detailHeaderSmall,
  cursor: "pointer",
  fontSize: "18px",
  padding: "5px",
  transition: `color ${timing.default} ease-in-out`,

  ":hover": { color: color.blue },
  ":active": { color: color.blue },
  ":focus": { color: color.blue },
};

const CardActionIcon = ({ children, onClick, style }) => (
  <button
    style={[styles, style]}
    onClick={onClick}
  >
    {children}
  </button>
);

CardActionIcon.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  style: propTypes.style,
};

export default radium(CardActionIcon);
