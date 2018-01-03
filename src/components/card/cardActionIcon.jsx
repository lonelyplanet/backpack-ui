import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import propTypes from "../../utils/propTypes";

const styles = {
  backgroundColor: "transparent",
  color: colors.accentGray,
  cursor: "pointer",
  fontSize: "18px",
  padding: "5px",
  transition: `color ${timing.default} ease-in-out`,

  ":hover": { color: colors.linkPrimary },
  ":active": { color: colors.linkPrimary },
  ":focus": { color: colors.linkPrimary },
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
