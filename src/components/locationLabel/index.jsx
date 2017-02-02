import React, { PropTypes } from "react";
import radium from "radium";
import { color } from "../../../settings.json";
import font from "../../utils/font";
import iconFromString from "../../utils/icon";

const styles = {
  container: {
    color: color.detailHeaderSmall,
    fontFamily: font("benton"),
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: ".2px",
    lineHeight: 1,
    textTransform: "uppercase",
  },

  icon: {
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
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(LocationLabel);
