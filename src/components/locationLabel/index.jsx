import React from "react";
import PropTypes from "prop-types";
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
    color: "#99a9b3",
    fontSize: "10px",
    marginRight: "8px",
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
