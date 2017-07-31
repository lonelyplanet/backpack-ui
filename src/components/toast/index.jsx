import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import Icon from "../icon";
import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import timing from "../../styles/timing";
import { fontWeightRegular, fontWeightMedium, fontSizeUppercase } from "../../styles/typography";
import { benton } from "../../styles/fonts";
import zIndex from "../../styles/zIndex";
import { span } from "../../utils/grid";
import { outline } from "../../utils/mixins";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import iconFromString from "../../utils/icon";

const height = 48;
const padding = 16;
const translateY = (padding + height) / fontSizeUppercase;

const styles = {
  container: {
    default: {
      backgroundColor: colors.bgPrimary,
      borderRadius: `${(4 / fontSizeUppercase)}em`,
      borderTop: "3px currentColor solid",
      boxShadow: `0 4px 6px ${rgba(colors.bgOverlay, 0.25)}`,
      display: "flex",
      fontFamily: benton,
      fontSize: `${fontSizeUppercase}px`,
      fontWeight: fontWeightRegular,
      lineHeight: (14 / fontSizeUppercase),
      maxWidth: span(6, "static"),
      minHeight: `${height}px`,
      minWidth: `${(dimensions.minWidth - (padding * 2))}px`,
      paddingBottom: `${(8 / fontSizeUppercase)}em`,
      paddingLeft: `${(padding / fontSizeUppercase)}em`,
      paddingRight: `${(padding / fontSizeUppercase)}em`,
      paddingTop: `${(9 / fontSizeUppercase)}em`,
      position: "relative",
      transition: `opacity ${timing.fast} ease-in-out,
        transform ${timing.fast} ease-in-out,
        visibility ${timing.fast} ease-in-out`,
      visibility: "visible",
      width: `calc(100vw - ${(padding * 2)}px)`,
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

  text: {
    alignSelf: "center",
    marginRight: `${(padding / fontSizeUppercase)}em`,
  },

  title: {
    fontWeight: fontWeightMedium,
  },

  message: {
    color: colors.textPrimary,
  },

  icon: {
    display: "inline-block",
    flexShrink: 0,
    fontSize: `${(24 / fontSizeUppercase)}em`,
    marginRight: `${(padding / 24)}em`,
  },

  action: {
    backgroundColor: colors.bgPrimary,
    border: 0,
    color: colors.textPrimary,
    cursor: "pointer",
    display: "block",
    fontSize: `${(8 / fontSizeUppercase)}em`,
    flexShrink: 0,
    height: `${(24 / 8)}em`,
    marginLeft: "auto",
    marginRight: `${(-8 / 8)}em`,
    transition: `color ${timing.fast} ease-in-out`,
    width: `${(24 / 8)}em`,

    ":hover": {
      color: colors.textSecondary,
    },

    ":active": {
      color: colors.textSecondary,
    },

    ":focus": Object.assign({}, {
      color: colors.textSecondary,
    }, outline()),
  },
};

const messageTypes = {
  error: {
    color: colors.accentRed,
    icon: "ToastError",
    title: "Error!",
  },
  info: {
    color: colors.accentBlue,
    icon: "ToastInfo",
    title: "Information",
  },
  success: {
    color: colors.accentGreen,
    icon: "ToastSuccess",
    title: "Success!",
  },
  warning: {
    color: colors.accentYellow,
    icon: "ToastWarning",
    title: "Warning!",
  },
};

const Toast = ({
  children,
  type,
  direction,
  visible,
  affixed,
  title,
  onClose,
  style,
}) => (
  <div
    className="Toast"
    role="alert"
    aria-hidden={!visible}
    aria-live="assertive"
    style={[
      styles.container.default,
      type && { color: messageTypes[type].color },
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

    {type && iconFromString(messageTypes[type].icon, {
      style: styles.icon,
      ariaHidden: true,
    })}

    <div style={styles.text}>
      <div style={styles.title}>
        {title || messageTypes[type].title}
      </div>

      <div style={styles.message}>
        {children}
      </div>
    </div>

    {onClose &&
      <button
        style={styles.action}
        onClick={onClose}
        title="Close"
      >
        <Icon.Close title="Close" />
      </button>
    }
  </div>
);

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
  direction: PropTypes.oneOf(["top", "bottom"]),
  visible: PropTypes.bool,
  affixed: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  style: propTypes.style,
};

Toast.defaultProps = {
  direction: "bottom",
  visible: false,
  affixed: false,
  onClose: null,
  title: null,
  style: null,
};

export default radium(Toast);
