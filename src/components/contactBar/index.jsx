import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import assign from "object-assign";

import { timing } from "../../../settings.json";
import colors from "../../styles/colors";
import { outline } from "../../utils/mixins";
import Icon from "../icon";

const baseFontSize = 11;

const styles = {
  container: {
    base: {
      color: colors.textPrimary,
      display: "flex",
      fontSize: `${baseFontSize}px`,
      lineHeight: 1,
    },
  },

  link: {
    base: {
      color: "inherit",
      display: "flex",
      flex: 1,
      overflow: "hidden",
      paddingBottom: `${20 / baseFontSize}em`,
      paddingTop: `${20 / baseFontSize}em`,
      transition: `color ${timing.fast} ease-in-out`,

      ":hover": { color: colors.linkPrimary },
      ":active": { color: colors.linkPrimary },
      ":focus": assign({}, outline(), { color: colors.linkPrimary }),
    },

    call: {
      paddingRight: `${5 / baseFontSize}em`,
    },

    website: {
      paddingLeft: `${5 / baseFontSize}em`,
    },
  },

  icon: {
    base: {
      fontSize: `${25 / baseFontSize}em`,
    },
  },

  label: {
    base: {
      display: "block",
      flex: 1,
      fontWeight: 600,
      marginLeft: `${12 / baseFontSize}em`,
      overflow: "hidden",
    },

    strong: {
      color: colors.linkPrimary,
      display: "block",
      fontWeight: 400,
      marginTop: `${4 / baseFontSize}em`,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
};

function getTelephone(phone) {
  if (typeof phone === "object") {
    return Object.keys(phone).map((t, i) => i === 0 && phone[t]);
  }

  return phone && typeof phone === "string" ? phone : "";
}

function ContactBar({ phone, website }) {
  const telephone = getTelephone(phone);

  return (
    <div
      className="ContactBar"
      style={styles.container.base}
    >
      {telephone &&
        <a
          className="ContactBar-phone"
          href={`tel:${telephone}`}
          style={[styles.link.base, styles.link.call]}
          key="phone"
        >
          <Icon name="mobile" style={styles.icon.base} />

          <span style={styles.label.base}>
            Call <strong style={styles.label.strong}>{telephone}</strong>
          </span>
        </a>
      }

      {website &&
        <a
          className="ContactBar-website"
          href={website}
          style={[styles.link.base, styles.link.website]}
          key="website"
        >
          <Icon name="globe" style={styles.icon.base} />

          <span style={styles.label.base}>
            Visit <strong style={styles.label.strong}>{website}</strong>
          </span>
        </a>
      }
    </div>
  );
}

ContactBar.propTypes = {
  /**
   * Phone number for POI
   */
  phone: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.object,
  ]),

  /**
   * Website URL for POI
   */
  website: PropTypes.string,
};

ContactBar.defaultProps = {
  phone: "",
  website: "",
};

ContactBar.styles = styles;

export default radium(ContactBar);
