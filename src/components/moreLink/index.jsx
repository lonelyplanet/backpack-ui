import React from "react";
import radium from "radium";
import assign from "object-assign";
import color from "color";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";
import outline from "../../utils/mixins";

const hoverStyles = {
  base: {
    color: color(settings.color.blue).blacken(0.5),
  },
};

const styles = {
  container: {
    base: {
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: 1,
      textTransform: "uppercase",
      backgroundColor: settings.color.white,
      color: settings.color.blue,

      ":hover": hoverStyles.base,
      ":active": hoverStyles.base,
      ":focus": assign({}, hoverStyles.base, outline()),
    },

    size: {
      small: {
        fontSize: "11px",
      },
    },
  },

  icon: {
    base: {
      verticalAlign: "baseline",
      top: `${-2 / 13}em`,
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
function MoreLink({ href, size, children, onClick, style }) {
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : "";

  return (
    <Element
      className="MoreLink"
      style={[
        styles.container.base,
        size && styles.container.size[size],
        style,
      ]}
      href={href}
      onClick={onClick}
      role={role}
    >
      {children}
      <Icon
        name="chevron-right"
        size="tiny"
        inline="after"
        style={[
          styles.icon.base,
          size && styles.icon.size[size],
        ]}
      />
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
  href: React.PropTypes.string.isRequired,

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
   * Object to add override or positioning styles
   */
  style: React.PropTypes.object,
};

MoreLink.defaultProps = {
  href: "",

  size: "",

  onClick: null,

  style: {},
};

MoreLink.styles = styles;

export default radium(MoreLink);
