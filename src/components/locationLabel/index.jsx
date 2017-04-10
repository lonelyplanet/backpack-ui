import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { textUppercase } from "../../utils/typography";
import iconFromString from "../../utils/icon";
import propTypes from "../../utils/propTypes";

const styles = {
  container: Object.assign({}, {
    color: colors.textPrimary,
  }, textUppercase()),

  icon: {
    color: colors.accentGray,
    fontSize: "10px",
    marginRight: "7px",
    verticalAlign: "top",
  },
};

const LocationLabel = ({ children, style }) => (
  <div className="LocationLabel" style={[styles.container, style]}>
    {iconFromString("Pin", {
      style: styles.icon,
      ariaHidden: true,
    })}
    {children}
  </div>
);

LocationLabel.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(LocationLabel);
