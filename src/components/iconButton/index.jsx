import React from "react";
import radium from "radium";
import assign from "object-assign";
import upperFirst from "lodash/upperFirst";
import settings from "../../../settings.json";
import Icon from "../icon";
import { darken } from "../../utils/color";
import { outline } from "../../utils/mixins";
import iconFromString from "../../utils/icon";

const _ = { upperFirst };

const hoverStyles = {
  backgroundColor: darken(settings.color.white, 12),
  textDecoration: "none",
};

const styles = {
  base: {
    appearance: "none",
    backgroundColor: darken(settings.color.white, 6),
    backfaceVisibility: "hidden",
    border: 0,
    borderRadius: "100%",
    color: settings.color.darkGray,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: 600,
    height: `${30 / 15}em`,
    lineHeight: 1,
    padding: 0,
    position: "relative",
    textAlign: "center",
    textDecoration: "none",
    transition: `background-color ${settings.timing.default}`,
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    width: `${30 / 15}em`,

    ":hover": hoverStyles,
    ":active": hoverStyles,
    ":focus": assign({}, hoverStyles, outline()),
  },

  size: {
    small: {
      fontSize: "12px",
    },
    medium: {
      fontSize: "15px",
    },
    large: {
      fontSize: "20px",
    },
  },
};

function IconButton({ iconName, label, className, href, onClick, size, owns }) {
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : "";

  const style = [styles.base];

  if (size) {
    style.push(styles.size[size]);
  }

  return (
    <Element
      className={`${className ? `${className} ` : ""}IconButton`}
      style={style}
      href={href}
      onClick={onClick}
      role={role}
      title={label}
      aria-label={label}
      aria-owns={owns}
    >
      {iconFromString(_.upperFirst(iconName), { label })}
    </Element>
  );
}

IconButton.propTypes = {
  /**
   * Name of the icon to display inside of the button
   */
  iconName: React.PropTypes.oneOf(Object.keys(Icon)).isRequired,

  /**
   * A descriptive label of the button's purpose
   */
  label: React.PropTypes.string.isRequired,

  /**
   * A custom classname to append to the default IconButton classname
   */
  className: React.PropTypes.string,

  /**
   * Pass an href prop to make the button an `a` element instead of a `button`
   */
  href: React.PropTypes.string,

  /**
   * Function to run when the button is clicked
   */
  onClick: React.PropTypes.func,

  /**
   * Size of the button
   */
  size: React.PropTypes.oneOf([
    "small",
    "medium",
    "large",
  ]),

  /**
   * The ID of the sibling element that the button owns, e.g., if the button has
   * a menu with an ID of "share-menu", then `owns="share-menu"`.
   */
  owns: React.PropTypes.string,
};

IconButton.defaultProps = {
  iconName: "",

  label: "",

  className: "",

  href: "",

  onClick: null,

  size: "medium",

  owns: "",
};

IconButton.styles = styles;

export default radium(IconButton);
