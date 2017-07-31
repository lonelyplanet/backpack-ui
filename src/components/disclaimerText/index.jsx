import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import font from "../../utils/font";
import { fontWeightMedium } from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  color: colors.textSecondary,
  fontFamily: font("benton"),
  fontSize: "9px",
  lineHeight: (15 / 9),
  maxWidth: "calc(100vw - 60px)",
  width: "512px",
};

const scopedStyles = {
  ".DisclaimerText a": {
    fontWeight: fontWeightMedium,
    transition: `color ${timing.fast} ease-in-out`,
  },

  ".DisclaimerText a:hover": {
    color: colors.linkPrimaryHover,
  },

  ".DisclaimerText a:active": {
    color: colors.linkPrimaryHover,
  },

  ".DisclaimerText a:focus": {
    color: colors.linkPrimaryHover,
  },
};

const DisclaimerText = ({ children, style }) => (
  <div
    className="DisclaimerText"
    style={[styles, style]}
  >
    <Style rules={scopedStyles} />

    {children}
  </div>
);

DisclaimerText.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(DisclaimerText);
