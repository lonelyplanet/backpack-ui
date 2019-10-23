import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontWeightMedium } from "../../styles/typography";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";

const styles = {
  color: colors.textSecondary,
  fontFamily: font("benton"),
  fontSize: "12px",
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

const DisclaimerText = ({ children, style, className }) => (
  <div
    className={cn("DisclaimerText", className)}
    style={[styles, style]}
  >
    <Style rules={scopedStyles} />

    {children}
  </div>
);

DisclaimerText.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
  className: PropTypes.string,
};

export default radium(DisclaimerText);
