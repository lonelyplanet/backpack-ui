import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import upperFirst from "lodash/upperFirst";
import cn from "classnames";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { lineHeightReset } from "../../styles/typography";
import { darken, rgba } from "../../utils/color";
import { outline } from "../../utils/mixins";
import iconFromString from "../../utils/icon";
import propTypes from "../../utils/propTypes";

const _ = { upperFirst };

const styles = {
  alignItems: "center",
  backgroundColor: darken(colors.bgPrimary, 6),
  backfaceVisibility: "hidden",
  border: 0,
  borderRadius: "100%",
  color: colors.textPrimary,
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  lineHeight: lineHeightReset,
  padding: 0,
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  transition: `background-color ${timing.default}`,
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  WebkitTapHighlightColor: rgba(colors.bgOverlay, 0.04),

  ":focus": outline(4),
};

const iconStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
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
  border,
  shadow,
  style,
}) {
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : null;
  const dimensions = {
    fontSize: fontSize[size],
    height: `${size}px`,
    width: `${size}px`,
  };

  return (
    <Element
      id={id}
      className={cn("IconButton", className)}
      style={[
        styles,
        dimensions,
        backgroundColor && { backgroundColor },
        color && { color },
        border && { border: "1px solid currentColor" },
        shadow && {
          boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${4 / fontSize[size]}em ${16 / fontSize[size]}em`,
          transition: `box-shadow ${timing.fast} ease-in-out`,

          ":active": {
            boxShadow: `${rgba(colors.bgOverlay, 0.2)} 0 ${(4 / fontSize[size]) / 3}em ${(16 / fontSize[size]) / 2}em`,
          },
        },
        style,
      ]}
      href={href}
      onClick={onClick}
      role={role}
      title={label}
      aria-label={label}
      aria-owns={owns}
    >
      {iconFromString(_.upperFirst(iconName), { label, style: iconStyle })}
    </Element>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.oneOf([
    "Bookmark",
    "BookmarkActive",
    "BookmarkAlt",
    "BookmarkAltActive",
    "Ellipsis",
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
  border: PropTypes.bool,
  shadow: PropTypes.bool,
  style: propTypes.style,
};

IconButton.defaultProps = {
  id: null,
  className: null,
  href: null,
  onClick: null,
  size: 32,
  owns: null,
  backgroundColor: "",
  color: "",
  border: false,
  shadow: false,
  style: null,
};

export default radium(IconButton);
