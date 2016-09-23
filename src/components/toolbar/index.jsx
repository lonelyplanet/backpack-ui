import React from "react";
import radium from "radium";
import { color, timing } from "rizzo-next/sass/settings.json";
import Icon from "../icon";

const hover = {
  color: color.blue,
};

const styles = {
  container: {
    base: {
      alignItems: "center",
      borderBottom: `${1 / 14}em solid ${color.gray}`,
      borderTop: `${1 / 14}em solid ${color.gray}`,
      color: color.darkGray,
      display: "flex",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1,
      paddingTop: `${37 / 14}em`,
      paddingBottom: `${35 / 14}em`,
    },
  },

  link: {
    base: {
      color: "currentColor",
      display: "block",
      flexGrow: 1,
      textAlign: "center",
      transition: `color ${timing.default}`,

      ":hover": hover,
      ":active": hover,
      ":focus": hover,
    },
  },

  icon: {
    base: {
      fontSize: `${25 / 14}em`,
      marginBottom: `${8 / 14}em`,
    },
  },
};

/**
 * Toolbar component
 */
function Toolbar({ phone, website, directions }) {
  return (
    <div
      className="Toolbar"
      style={styles.container.base}
    >
      {phone &&
        <a
          href="tel:"
          style={styles.link.base}
          key="phone"
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon name="mobile" />
          </div>
          Call
        </a>
      }

      {website &&
        <a
          href={website}
          style={styles.link.base}
          key="website"
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon name="globe" />
          </div>
          Visit
        </a>
      }

      {directions &&
        <a
          href={website}
          style={styles.link.base}
          key="directions"
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon name="compass" />
          </div>
          Map
        </a>
      }
    </div>
  );
}

Toolbar.propTypes = {
  /**
   * Phone number for POI
   */
  phone: React.PropTypes.string,

  /**
   * Website URL for POI
   */
  website: React.PropTypes.string,

  /**
   * Address or coordinates for POI
   */
  directions: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
  ]),
};

Toolbar.defaultProps = {
  phone: "",

  website: "",

  directions: "",
};

Toolbar.styles = styles;

export default radium(Toolbar);
