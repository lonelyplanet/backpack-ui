import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import NumberMarker from "../numberMarker";

const styles = {
  container: {
    base: {
      color: colors.textPrimary,
      fontSize: "14px",
      lineHeight: (22 / 14),
    },
  },

  list: {
    base: {
      listStyle: "none",
    },
  },

  item: {
    base: {
      borderBottom: `${1 / 14}em solid ${colors.borderPrimary}`,
      display: "flex",
      padding: `${13 / 14}em ${12 / 14}em ${13 / 14}em ${6 / 14}em`,
    },

    notFirst: {
      marginTop: `${3 / 14}em`,
    },
  },

  marker: {
    base: {
      marginTop: `${3 / 14}em`,
      padding: `${5 / 14}em`,
    },
  },

  link: {
    base: {
      marginLeft: `${26 / 14}em`,
    },
  },

  anchor: {
    base: {
      color: "currentColor",
      transition: `color ${timing.default}`,

      ":hover": {
        color: colors.linkPrimary,
      },
      ":active": {
        color: colors.linkPrimary,
      },
      ":focus": {
        color: colors.linkPrimary,
      },
    },
  },
};

function NumberList({ list }) {
  return (
    <div
      className="NumberList"
      style={styles.container.base}
    >
      <ul style={styles.list.base}>
        {list.map(({ title, url }, i) => (
          <li
            className="NumberList-item"
            style={[styles.item.base, i !== 0 && styles.item.notFirst]}
            key={i + 1}
          >
            <div
              className="NumberList-marker"
              style={styles.marker.base}
            >
              <NumberMarker
                number={i + 1}
                outlined
              />
            </div>

            <div
              className="NumberList-link"
              style={styles.link.base}
            >
              <a
                style={styles.anchor.base}
                href={url}
                key={i + 1}
              >
                {title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

NumberList.propTypes = {
  /**
   * An array of items to list
   */
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

NumberList.defaultProps = {
  list: [],
};

NumberList.styles = styles;

export default radium(NumberList);
