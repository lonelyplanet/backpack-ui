import React, { PropTypes } from "react";
import radium from "radium";
import { color, typography } from "../../../settings.json";
import { rgb } from "../../utils/color";
import iconFromString from "../../utils/icon";

const styles = {
  base: {
    width: "100%",
    maxWidth: "295px",
    borderRadius: "100px",
    border: `1px solid ${color.detailHeaderSmall}`,
    background: "transparent",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "24px",
    fontSize: "16px",
    fontWeight: typography.fontWeightMedium,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    transition: "color .5s ease",
    ":hover": {
      background: `rgba(${rgb(color.activeBackgroundColor)}, 0.4)`,
    },
  },
  text: {
    flex: 1,
    color: color.darkGray,
    textAlign: "left",
    paddingLeft: "16px",
    lineHeight: 1,
  },
  icon: {
    fontSize: "18px",
  },
};

const iconSettings = {
  style: styles.icon,
};

const SocialLoginButton = ({ action, iconName, iconProps, text, style }) => (
  <button style={[styles.base, style && style]} onClick={action}>
    {iconFromString(iconName, Object.assign({}, iconSettings, iconProps))}
    <span style={styles.text}>{text}</span>
  </button>
);

SocialLoginButton.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  action: PropTypes.func,
  iconProps: PropTypes.objectOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(SocialLoginButton);
