import React from "react";
import radium from "radium";
import assign from "object-assign";
import upperFirst from "lodash/upperFirst";
import { blueLink } from "../../utils/mixins";
import font from "../../utils/font";
import iconFromString from "../../utils/icon";

const _ = { upperFirst };

const styles = {
  container: {
    base: assign({}, blueLink(), {
      backgroundColor: "transparent",
      border: 0,
      display: "inline-block",
      fontFamily: font("benton"),
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: 1,
      padding: 0,
      letterSpacing: "0.6px",
    }),

    caps: {
      fontWeight: 600,
      textTransform: "uppercase",
    },

    size: {
      small: {
        fontSize: "11px",
      },
    },
  },

  icon: {
    base: {
      position: "relative",
      top: `${-2 / 13}em`,
      verticalAlign: "baseline",
    },

    size: {
      small: {
        top: `${-1 / 11}em`,
      },
    },
  },
};

/**
 * MoreLink component
 *
 * @usage
 * <MoreLink href="/foo">View all tours</MoreLink>
 */
function MoreLink({
  href,
  size,
  children,
  onClick,
  caps,
  hideIcon,
  isNested,
  style,
  arrowDirection,
  target,
}) {
  let Element = "";

  if (isNested) {
    Element = "span";
  } else if (href) {
    Element = "a";
  } else {
    Element = "button";
  }

  const iconStyle = assign({},
    styles.icon.base,
    size && styles.icon.size[size],
    arrowDirection !== "left" && { marginLeft: ".5em" },
    arrowDirection === "left" && { marginRight: ".5em" }
  );

  const IconElement = iconFromString(`Chevron${_.upperFirst(arrowDirection)}`, {
    height: "6px",
    width: "6px",
    style: iconStyle,
  });

  return (
    <Element
      className="MoreLink"
      style={[
        styles.container.base,
        caps && styles.container.caps,
        size && styles.container.size[size],
        style,
      ]}
      href={href}
      target={target}
      onClick={onClick}
    >
      {!hideIcon && arrowDirection === "left" &&
        IconElement
      }

      {children}

      {!hideIcon && arrowDirection !== "left" &&
        IconElement
      }
    </Element>
  );
}

MoreLink.propTypes = {
  /**
   * Content for the link
   */
  children: React.PropTypes.node.isRequired,

  /**
   * Where the link should point to
   */
  href: React.PropTypes.string,

  /**
   * Adjusts the font size
   */
  size: React.PropTypes.oneOf([
    "",
    "small",
  ]),

  /**
   * Fires onclick function
   */
  onClick: React.PropTypes.func,

  /**
   * Applies textTransform and fontWeight CSS properties
   */
  caps: React.PropTypes.bool,

  /**
   * If the arrow icon should be hidden
   */
  hideIcon: React.PropTypes.bool,

  /**
   * If the link is nested within another link; makes the container a `span`
   */
  isNested: React.PropTypes.bool,

  /**
   * Object to add override or positioning styles
   */
  style: React.PropTypes.objectOf(
    React.PropTypes.string,
    React.PropTypes.number,
  ),

  /**
   * Direction of the arrow
   */
  arrowDirection: React.PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),

  /**
   * Specifies where to open the linked document
   */
  target: React.PropTypes.oneOf([
    "_blank",
    "_parent",
    "_self",
    "_top",
  ]),
};

MoreLink.defaultProps = {
  href: null,

  size: "",

  onClick: null,

  caps: false,

  hideIcon: false,

  isNested: false,

  style: {},

  arrowDirection: "right",

  target: null,
};

MoreLink.styles = styles;

export default radium(MoreLink);
