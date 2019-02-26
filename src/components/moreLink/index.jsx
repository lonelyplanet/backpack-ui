import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import assign from "object-assign";
import upperFirst from "lodash/upperFirst";
import { blueLink } from "../../utils/mixins";
import font from "../../utils/font";
import iconFromString from "../../utils/icon";
import createQAHook from "../../utils/createQAHook";

const _ = { upperFirst };

const styles = {
  container: {
    base: assign({}, blueLink(), {
      backgroundColor: "transparent",
      border: 0,
      cursor: "pointer",
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
  qaHook,
  ...rest
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
      data-qa={createQAHook(qaHook, "morelink", `${Element === "a" ? "link" : Element}`)}
      target={target}
      onClick={onClick}
      {...rest}
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
  children: PropTypes.node.isRequired,

  /**
   * Where the link should point to
   */
  href: PropTypes.string,

  /**
   * Adjusts the font size
   */
  size: PropTypes.oneOf([
    "",
    "small",
  ]),

  /**
   * Fires onclick function
   */
  onClick: PropTypes.func,

  /**
   * Applies textTransform and fontWeight CSS properties
   */
  caps: PropTypes.bool,

  /**
   * If the arrow icon should be hidden
   */
  hideIcon: PropTypes.bool,

  /**
   * If the link is nested within another link; makes the container a `span`
   */
  isNested: PropTypes.bool,

  /**
   * Object to add override or positioning styles
   */
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),

  /**
   * Direction of the arrow
   */
  arrowDirection: PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),

  /**
   * Specifies where to open the linked document
   */
  target: PropTypes.oneOf([
    "_blank",
    "_parent",
    "_self",
    "_top",
  ]),

  /**
   * Specifies a qa hook to leverage
   */
  qaHook: PropTypes.string,
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
  qaHook: null,
};

MoreLink.styles = styles;

export default radium(MoreLink);
