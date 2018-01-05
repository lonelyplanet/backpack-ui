import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { upperFirst, uniqueId } from "lodash";
import cn from "classnames";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { lineHeightReset } from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import { darken, rgba } from "../../utils/color";
import iconFromString from "../../utils/icon";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";

const _ = { upperFirst, uniqueId };

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    backfaceVisibility: "hidden",
    border: 0,
    color: colors.textPrimary,
    cursor: "pointer",
    display: "inline-flex",
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

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.id = _.uniqueId("IconButton");
  }

  render() {
    const {
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
      shadow,
      transitionDuration,
      style,
    } = this.props;

    const Element = href ? "a" : "button";
    const role = Element === "a" ? "button" : null;
    const elementId = id || this.id;
    const dimensions = {
      fontSize: fontSize[size],
      height: `${size}px`,
      width: `${size}px`,
    };

    return (
      <Element
        id={elementId}
        className={cn("IconButton", className)}
        style={[
          styles.container,
          { transition: `color ${transitionDuration}` },
          dimensions,
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
            scopeSelector={`#${elementId}:hover`}
            rules={{
              [`.${cn("IconButton", className)}-background`]: {
                backgroundColor: `${hoverBackgroundColor} !important`,
              },
            }}
          />
        }

        {hoverBackgroundScale &&
          <Style
            scopeSelector={`#${elementId}:hover`}
            rules={{
              [`.${cn("IconButton", className)}-background`]: {
                transform: `scale(${hoverBackgroundScale})`,
              },
            }}
          />
        }

        {shadow &&
          <Style
            scopeSelector={`#${elementId}:active`}
            rules={{
              [`.${cn("IconButton", className)}-background`]: {
                boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${(4 / fontSize[size]) / 3}em ${(16 / fontSize[size]) / 2}em !important`,
              },
            }}
          />
        }

        <div
          key={1}
          className={cn("IconButton-background", className)}
          style={[
            styles.background,
            backgroundColor && { backgroundColor },
            { transition: `background-color ${transitionDuration}, transform ${transitionDuration}, box-shadow ${transitionDuration} ease-in-out` },
            border && { border: "1px solid currentColor" },
            shadow && { boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${4 / fontSize[size]}em ${16 / fontSize[size]}em` },
          ]}
        />

        {iconFromString(_.upperFirst(iconName), { label, style: styles.icon })}
      </Element>
    );
  }
}

IconButton.propTypes = {
  iconName: PropTypes.oneOf([
    "Bookmark",
    "BookmarkActive",
    "BookmarkAlt",
    "BookmarkAltActive",
    "ChevronLeft",
    "ChevronRight",
    "ClockOutline",
    "Ellipsis",
    "Play",
    "Share",
  ]).isRequired,
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
  hoverBackgroundScale: null,
  border: false,
  shadow: false,
  transitionDuration: timing.default,
  style: null,
};

export default radium(IconButton);
