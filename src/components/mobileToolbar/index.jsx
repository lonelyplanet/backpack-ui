import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import Icon from "../icon";

const styles = {
  container: {
    base: {
      backgroundColor: colors.bgPrimary,
      borderTop: `1px solid ${colors.borderPrimary}`,
      fontSize: "11px",
      overflow: "hidden",
    },
  },

  breadcrumbs: {
    base: {
      float: "left",
      lineHeight: 1,
      width: "55%",
    },
  },

  buttons: {
    base: {
      float: "right",
      lineHeight: 1,
      marginTop: "-1px",
      overflow: "hidden",
      textAlign: "right",
      width: "45%",
    },
  },

  button: {
    base: {
      display: "inline-block",
      position: "relative",
    },

    notFirstChild: {
      marginLeft: "1px", // to offset Divider
    },

    lastChild: {
      paddingRight: "16px",
    },
  },

  anchor: {
    base: {
      display: "block",
      overflow: "hidden",
      padding: "23px 16px 20px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%",
    },
  },

  divider: {
    base: {
      backgroundColor: colors.borderPrimary,
      display: "block",
      height: "10px",
      right: "-1px",
      position: "absolute",
      top: "24px",
      width: "1px",
    },
  },

  icon: {
    base: {
      marginRight: "9px",
      verticalAlign: "baseline",
      top: "-1px",
    },
  },
};

function MobileToolbar({ children, location, locationUrl, selectedDates, style, qaHook }) {
  return (
    <div className="MobileToolbar" style={[styles.container.base, style]}>
      {(selectedDates || location) &&
        <div className="MobileToolbar-breadcrumbs" style={styles.breadcrumbs.base}>
          {selectedDates &&
            <span>
              <time style={{ fontWeight: 600 }}>{selectedDates}</time> in
            </span>
          } {location && locationUrl &&
            <a
              data-qa={qaHook ? "location" : null}
              style={styles.anchor.base}
              href={`//lonelyplanet.com${locationUrl}`}
            >
              <Icon
                name="chevron-left"
                size="tiny"
                inline="before"
                style={styles.icon.base}
              />
              {location}
            </a>
          }
        </div>
      }

      <div className="MobileToolbar-buttons" style={styles.buttons.base}>
        {children.map((child, index) => (
          <div
            className="MobileToolbar-button"
            style={[
              styles.button.base,
              index !== 0 && styles.button.notFirstChild,
            ]}
            key={`MobileToolbar-part${index}`}
          >
            {child}
            {index !== 1 &&
              <span
                className="Divider"
                style={styles.divider.base}
                aria-hidden="true"
              />
            }
          </div>
        ))}
      </div>
    </div>
  );
}

MobileToolbar.propTypes = {
  /**
   * Contents of toolbar
   */
  children: PropTypes.node.isRequired,

  /**
   * Location name for breadcrumb link
   */
  location: PropTypes.string.isRequired,

  /**
   * Location URL for breadcrumb link
   */
  locationUrl: PropTypes.string.isRequired,

  /**
   * Selected dates of POI booking
   */
  selectedDates: PropTypes.string,

  /**
   * Style object to add or override container styles
   */
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),

  /**
   * Ability to use custom data hook for QA purposes
   */
  qaHook: PropTypes.bool,
};

MobileToolbar.defaultProps = {
  children: null,

  location: "",

  locationUrl: "",

  selectedDates: "",

  style: {},

  qaHook: false,
};

export default radium(MobileToolbar);
