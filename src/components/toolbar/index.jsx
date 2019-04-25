import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import Icon from "../icon";

const hover = {
  color: colors.linkPrimary,
};

const styles = {
  container: {
    base: {
      alignItems: "center",
      borderBottom: `${1 / 14}em solid ${colors.borderPrimary}`,
      borderTop: `${1 / 14}em solid ${colors.borderPrimary}`,
      color: colors.textPrimary,
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
function Toolbar({ phone, website, directions, qaHook }) {
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
          data-qa={qaHook ? "toolbar-tel-link" : null}
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon.Mobile />
          </div>
          Call
        </a>
      }

      {website &&
        <a
          href={website}
          style={styles.link.base}
          key="website"
          data-qa={qaHook ? "toolbar-website-icon" : null}
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon.Globe />
          </div>
          Visit
        </a>
      }

      {directions &&
        <a
          href={website}
          style={styles.link.base}
          key="directions"
          data-qa={qaHook ? "toolbar-directions-link" : null}
        >
          <div
            className="Toolbar-icon"
            style={styles.icon.base}
          >
            <Icon.Compass />
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
  phone: PropTypes.string,

  /**
   * Website URL for POI
   */
  website: PropTypes.string,

  /**
   * Address or coordinates for POI
   */
  directions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string, PropTypes.number),
  ]),

  /**
   * QA Hook
   */
  qaHook: PropTypes.bool,
};

Toolbar.defaultProps = {
  phone: "",

  website: "",

  directions: "",

  qaHook: false,
};

Toolbar.styles = styles;

export default radium(Toolbar);
