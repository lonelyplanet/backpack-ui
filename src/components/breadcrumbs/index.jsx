import React from "react";
import radium from "radium";
import { color } from "rizzo-next/sass/settings.json";
import Icon from "../icon";

const styles = {
  container: {
    base: {
      color: color.lightText,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1,
    },
  },

  item: {
    padded: {
      marginRight: `${10 / 14}em`,
    },
  },

  anchor: {
    padded: {
      marginRight: `${10 / 14}em`,
    },
  },
};

/**
 * Breadcrumb navigation component
 */
function Breadcrumbs({ links }) {
  const items = links.map((link, index) => (
    <span
      className="Breadcrumbs-item"
      style={[index !== links.length - 1 && styles.item.padded]}
      key={index}
    >
      <a
        style={[
          index < links.length - 1 && styles.anchor.padded,
        ]}
        href={`//www.lonelyplanet.com${link.href}`}
        key={index}
      >
        {link.title}
      </a>

      {index < links.length - 1 &&
        <Icon
          name="chevron-right"
          dimensions={{
            width: `${6 / 14}em`,
            height: `${6 / 14}em`,
          }}
        />
      }
    </span>
  ));

  return (
    <nav
      className="Breadcrumbs"
      style={styles.container.base}
    >
      {items}
    </nav>
  );
}

Breadcrumbs.propTypes = {
  /**
   * An array of links for the navigation
   */
  links: React.PropTypes.array.isRequired,
};

Breadcrumbs.defaultProps = {
  links: [],
};

Breadcrumbs.styles = styles;

export default radium(Breadcrumbs);
