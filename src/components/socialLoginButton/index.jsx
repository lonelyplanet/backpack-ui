import React, { PropTypes } from "react";
import radium from "radium";
import Icon from "../icon";
import { color, typography } from "../../../settings.json";
import { rgb } from "../../utils/color";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const hoverStyles = {
  base: {
    backgroundColor: `rgba(${rgb(color.activeBackgroundColor)}, 0.4)`,
  },
};

const styles = {
  base: {
    width: "100%",
    maxWidth: "295px",
    borderRadius: "100px",
    border: `1px solid ${color.detailHeaderSmall}`,
    backgroundColor: "transparent",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "24px",
    fontSize: "16px",
    fontWeight: typography.fontWeightMedium,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": Object.assign({}, hoverStyles.base, outline()),
  },
  text: {
    flex: 1,
    color: color.darkGray,
    textAlign: "left",
    paddingLeft: "16px",
    lineHeight: 1,
    fontWeight: typography.fontWeightBold,
  },
  icon: {
    fontSize: "18px",
  },
};

const iconSettings = {
  style: styles.icon,
};

const SocialLoginButton = ({
  onClick,
  iconName,
  iconProps,
  iconColor,
  children,
  style,
}) => {
  const iconStyles = {
    style: {
      color: iconColor,
      ...styles.icon,
    },
  };

  const iconParameters = Object.assign({}, iconSettings, iconProps, iconStyles);
  return (
    <button style={[styles.base, style && style]} onClick={onClick}>
      {iconFromString(iconName, iconParameters)}
      <span style={styles.text}>{children}</span>
    </button>
  );
};

SocialLoginButton.propTypes = {
  children: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf(Object.keys(Icon)).isRequired,
  onClick: PropTypes.func,
  iconColor: PropTypes.string,
  iconProps: PropTypes.objectOf(PropTypes.object),
  style: propTypes.style,
};

export default radium(SocialLoginButton);
