import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";

import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import { benton } from "../../styles/fonts";
import timing from "../../styles/timing";
import { fontWeightMedium, fontSizeUppercase } from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import { rgba } from "../../utils/color";
import { span } from "../../utils/grid";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import Icon from "../icon";
import createQAHook from "../../utils/createQAHook";

const height = 56;
const padding = 16;
const translateY = (padding + height) / fontSizeUppercase;

const styles = {
  container: {
    default: {
      alignItems: "center",
      borderRadius: `${(4 / fontSizeUppercase)}em`,
      color: colors.textOverlay,
      display: "flex",
      fontFamily: benton,
      fontSize: `${fontSizeUppercase}px`,
      fontWeight: fontWeightMedium,
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
    marginRight: `${(padding / fontSizeUppercase)}em`,
  },

  icon: {
    display: "inline-block",
    flexShrink: 0,
    fontSize: `${(24 / fontSizeUppercase)}em`,
    marginRight: `${(padding / 24)}em`,
  },

  button: {
    backgroundColor: "transparent",
    border: 0,
    color: "currentColor",
    cursor: "pointer",
    display: "block",
    flexShrink: 0,
    marginLeft: "auto",
    textTransform: "uppercase",
    transition: `opacity ${timing.fast} ease-in-out`,

    ":hover": {
      opacity: 0.8,
    },

    ":active": {
      opacity: 0.8,
    },

    ":focus": Object.assign({}, {
      opacity: 0.8,
    }, outline()),
  },

  onClickButton: {
    marginRight: `${(-8 / fontSizeUppercase)}em`,
    padding: "15px 8px 12px",
  },

  onCloseButton: {
    fontSize: `${(10 / fontSizeUppercase)}em`,
    height: `${(24 / 10)}em`,
    marginRight: `${(-8 / 10)}em`,
    width: `${(24 / 10)}em`,
  },

  onCloseIcon: {
    stroke: "currentColor",
    strokeWidth: "2px",
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
  affixed,
  buttonLabel,
  children,
  direction,
  onClick,
  onClose,
  style,
  title,
  type,
  url,
  visible,
  className,
  qaHook,
}) => {
  const Element = url ? "a" : "button";

  return (
    <div
      className={cn("Toast", className)}
      key="toastElement"
      aria-describedby="toastMessage"
      aria-hidden={!visible}
      aria-labelledby="toastTitle"
      aria-live="assertive"
      role="alertdialog"
      style={[
        styles.container.default,
        type && {
          backgroundColor: rgba(messageTypes[type].color, 0.98),
          boxShadow: `0 4px 6px ${rgba(messageTypes[type].color, 0.25)}`,
        },
        type === "warning" && {
          color: colors.textPrimary,
        },
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
        ariaHidden: true,
        style: styles.icon,
      })}

      <div style={styles.text} role="document" tabIndex="0">
        <div id="toastTitle">
          {title || messageTypes[type].title}
        </div>

        <div id="toastMessage">
          {children}
        </div>
      </div>

      {onClick && buttonLabel &&
        <button
          onClick={onClick}
          style={[styles.button, styles.onClickButton]}
        >
          {buttonLabel}
        </button>
      }

      {!onClick &&
        <Element
          href={url}
          onClick={onClose}
          style={[styles.button, url ? styles.onClickButton : styles.onCloseButton]}
          title="Close"
          data-testid={qaHook ? createQAHook("toast", "toast", `${Element === "a" ? "link" : Element}`) : null}
        >
          {url ? buttonLabel : <Icon.Close title="Close" style={styles.onCloseIcon} />}
        </Element>
      }
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
  affixed: PropTypes.bool,
  buttonLabel: PropTypes.string,
  direction: PropTypes.oneOf(["top", "bottom"]),
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  style: propTypes.style,
  title: PropTypes.string,
  url: PropTypes.string,
  visible: PropTypes.bool,
  className: PropTypes.string,
  qaHook: PropTypes.bool,
};

Toast.defaultProps = {
  affixed: false,
  buttonLabel: null,
  direction: "bottom",
  onClick: null,
  onClose: null,
  style: null,
  title: null,
  url: null,
  visible: false,
  className: null,
  qaHook: false,
};

export default radium(Toast);
