import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import upperFirst from "lodash/upperFirst";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { lineHeightReset } from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import { darken, rgba } from "../../utils/color";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const _ = { upperFirst };

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    backfaceVisibility: "hidden",
    border: 0,
    color: colors.textPrimary,
    cursor: "pointer",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    lineHeight: lineHeightReset,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    transition: `color ${timing.fast}`,
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: rgba(colors.bgOverlay, 0.04),

    ":focus": outline(4),
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    border: 0,
    borderRadius: "100%",
    backgroundColor: darken(colors.bgPrimary, 6),
  },

  icon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: zIndex.default,
  },
};

const fontSize = {
  32: 12,
  40: 16,
  56: 24,
};

function IconButton({
  iconName,
  label,
  id,
  className,
  href,
  onClick,
  size,
  owns,
  backgroundColor,
  color,
  hoverBackgroundColor,
  hoverBackgroundScale,
  hoverColor,
  border,
  borderWidth,
  borderColor,
  shadow,
  transitionDuration,
  style,
}) {
  let Element = "div";
  if (href) {
    Element = "a";
  } else if (onClick) {
    Element = "button";
  }
  const role = Element === "a" ? "button" : null;
  const dimensions = {
    height: `${size}px`,
    width: `${size}px`,
  };

  let hoverBackgroundColorClassName = "";
  if (hoverBackgroundColor) {
    hoverBackgroundColorClassName = `IconButton-hoverBackgroundColor-${hoverBackgroundColor.replace(/\W+/g, "")}`;
  }

  let hoverBackgroundScaleClassName = "";
  if (typeof hoverBackgroundScale === "number") {
    hoverBackgroundScaleClassName = `IconButton-hoverBackgroundScale-${String(hoverBackgroundScale).replace(".", "_")}`;
  }

  const shadowClassName = shadow ? "IconButton-shadow" : "";

  const classNames = [
    "IconButton",
    className || "",
    hoverBackgroundColorClassName,
    hoverBackgroundScaleClassName,
    shadowClassName,
  ];

  return (
    <Element
      id={id}
      className={classNames.join(" ")}
      style={[
        styles.container,
        { transition: `color ${transitionDuration}` },
        dimensions,
        fontSize[size] && { fontSize: fontSize[size] },
        color && { color },
        hoverColor && { ":hover": { color: hoverColor } },
        style,
      ]}
      href={href}
      onClick={onClick}
      role={role}
      title={label}
      aria-label={label}
      aria-owns={owns}
    >

      {hoverBackgroundColor &&
        <Style
          scopeSelector={`.${hoverBackgroundColorClassName}:hover`}
          rules={{
            ".IconButton-background": {
              backgroundColor: `${hoverBackgroundColor} !important`,
            },
          }}
        />
      }

      {typeof hoverBackgroundScale === "number" &&
        <Style
          scopeSelector={`.${hoverBackgroundScaleClassName}:hover`}
          rules={{
            ".IconButton-background": {
              transform: `scale(${hoverBackgroundScale})`,
            },
          }}
        />
      }

      {shadow &&
        <Style
          scopeSelector={`.${shadowClassName}:active`}
          rules={{
            ".IconButton-background": {
              boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${(4 / fontSize[size]) / 3}em ${(16 / fontSize[size]) / 2}em !important`,
            },
          }}
        />
      }

      <div
        key={1}
        className="IconButton-background"
        style={[
          styles.background,
          backgroundColor && { backgroundColor },
          { transition: `background-color ${transitionDuration}, transform ${transitionDuration}, box-shadow ${transitionDuration} ease-in-out` },
          border && { border: `${borderWidth} solid ${borderColor}` },
          shadow && { boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${4 / fontSize[size]}em ${16 / fontSize[size]}em` },
        ]}
      />

      {iconFromString(_.upperFirst(iconName), { label, style: styles.icon })}
    </Element>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([32, 40, 56]),
  owns: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverBackgroundScale: PropTypes.number,
  hoverColor: PropTypes.string,
  border: PropTypes.bool,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
  shadow: PropTypes.bool,
  transitionDuration: PropTypes.string,
  style: propTypes.style,
};

IconButton.defaultProps = {
  id: null,
  className: null,
  href: null,
  onClick: null,
  size: 32,
  owns: null,
  color: "",
  hoverColor: "",
  border: false,
  borderWidth: "1px",
  borderColor: "currentColor",
  shadow: false,
  transitionDuration: timing.default,
  style: null,
};

export default radium(IconButton);
