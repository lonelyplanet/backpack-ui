import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontWeightMedium, fontSizeUppercase } from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import iconFromString from "../../utils/icon";

const height = 40;
const padding = 24;
const translateY = (padding + height) / fontSizeUppercase;

const styles = {
  container: {
    default: {
      alignItems: "center",
      borderRadius: `${(4 / fontSizeUppercase)}em`,
      color: colors.textOverlay,
      display: "flex",
      fontSize: `${fontSizeUppercase}px`,
      fontWeight: fontWeightMedium,
      justifyContent: "center",
      lineHeight: (13 / fontSizeUppercase),
      minHeight: `${height}px`,
      paddingBottom: `${(8 / fontSizeUppercase)}em`,
      paddingLeft: `${(padding / fontSizeUppercase)}em`,
      paddingRight: `${(padding / fontSizeUppercase)}em`,
      paddingTop: `${(10 / fontSizeUppercase)}em`,
      position: "relative",
      transition: `opacity ${timing.fast} ease-in-out,
        transform ${timing.fast} ease-in-out,
        visibility ${timing.fast} ease-in-out`,
      textAlign: "center",
      visibility: "visible",
      width: "272px",
      zIndex: zIndex.toast,
    },

    invisibleBottom: {
      opacity: 0,
      transform: `translateY(${translateY}em)`,
      visibility: "hidden",
    },

    invisibleTop: {
      opacity: 0,
      transform: `translateY(${(translateY * -1)}em)`,
      visibility: "hidden",
    },

    visible: {
      opacity: 1,
      tranform: "translateY(0)",
    },

    affixed: {
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      position: "fixed",
      right: 0,
    },
  },

  icon: {
    flexShrink: 0,
    fontSize: `${(16 / fontSizeUppercase)}em`,
    marginRight: `${(6 / fontSizeUppercase)}em`,
    verticalAlign: "bottom",
  },
};

const types = {
  alert: {
    styles: {
      backgroundColor: rgba(colors.accentYellow, 0.86),
      color: colors.textSecondary,
    },

    icon: null,
  },

  error: {
    styles: {
      backgroundColor: rgba(colors.accentRed, 0.86),
    },

    icon: null,
  },

  neutral: {
    styles: {
      backgroundColor: rgba(colors.linkPrimary, 0.86),
    },

    icon: null,
  },

  success: {
    styles: {
      backgroundColor: rgba(colors.accentGreen, 0.86),
    },

    icon: "Checkmark",
  },
};

const Toast = ({
  children,
  type,
  direction,
  visible,
  affixed,
  onClick,
  style,
}) => (
  <div // eslint-disable-line jsx-a11y/no-static-element-interactions
    className="Toast"
    style={[
      styles.container.default,
      types[type].styles,
      visible && styles.container.visible,
      (!visible && direction === "bottom") && styles.container.invisibleBottom,
      (!visible && direction === "top") && styles.container.invisibleTop,
      (affixed && direction === "bottom") && Object.assign({},
        styles.container.affixed,
        { bottom: `${padding}px` },
      ),
      (affixed && direction === "top") && Object.assign({},
        styles.container.affixed,
        { top: `${padding}px` },
      ),
      style,
    ]}
    aria-hidden={!visible}
    aria-live="polite"
    role="status"
    onClick={onClick}
  >
    <Style
      scopeSelector=".Toast"
      rules={{
        mediaQueries: {
          "(prefers-reduced-motion)": {
            transform: "translateY(0) !important",
          },
        },
      }}
    />

    {types[type].icon && iconFromString(types[type].icon, {
      style: styles.icon,
      ariaHidden: true,
    })}

    {children}
  </div>
);

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "alert",
    "error",
    "neutral",
    "success",
  ]),
  direction: PropTypes.oneOf(["top", "bottom"]),
  visible: PropTypes.bool,
  affixed: PropTypes.bool,
  onClick: PropTypes.func,
  style: propTypes.style,
};

Toast.defaultProps = {
  color: "linkPrimary",
  type: "neutral",
  direction: "bottom",
  visible: false,
  affixed: false,
};

export default radium(Toast);
