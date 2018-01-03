import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import Icon from "../icon";

const styles = {
  container: {
    base: {
      display: "inline-block",
      lineHeight: 1,
    },

    size: {
      small: {
        fontSize: "18px",
      },

      medium: {
        fontSize: "27px",
      },

      large: {
        fontSize: "36px",
      },
    },

    parent: {
      listItem: {
        bottom: "10px",
        color: colors.bgPrimary,
        position: "absolute",

        [`@media (max-width: ${mq.max[768]})`]: {
          textAlign: "center",
          width: "100%",
        },

        [`@media (min-width: ${mq.min[768]})`]: {
          left: "10px",
        },
      },
    },
  },

  label: {
    base: {
      fontSize: `${11 / 18}em`,
      marginLeft: `${7 / 11}em`,
      position: "relative",
      top: `-${1 / 11}em`,
    },

    parent: {
      listItem: {
        [`@media (max-width: ${mq.max[768]})`]: {
          display: "none",
        },
      },
    },
  },
};

function ReviewedBadge({ size, parent }) {
  const style = {
    container: [styles.container.base],
    label: [styles.label.base],
  };

  if (size) {
    style.container.push(styles.container.size[size]);
  }

  if (parent) {
    style.container.push(styles.container.parent[parent]);
    style.label.push(styles.label.parent[parent]);
  }

  return (
    <div className="ReviewedBadge" style={style.container}>
      <Icon.DiamondLogo label="Lonely Planet" />
      <span style={style.label}>Reviewed</span>
    </div>
  );
}

ReviewedBadge.propTypes = {
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
  ]),

  parent: PropTypes.oneOf([
    "",
    "listItem",
  ]),
};

ReviewedBadge.defaultProps = {
  size: "small",
  parent: "",
};

export default radium(ReviewedBadge);
