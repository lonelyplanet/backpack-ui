import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import Icon from "../icon";
import createQAHook from "../../utils/createQAHook";

const baseFontSize = 14;

const hoverStyles = {
  backgroundColor: `rgba(${rgb(colors.bgOverlay)}, .9)`,
};

const styles = {
  container: {
    base: {
      backgroundColor: `rgba(${rgb(colors.bgOverlay)}, .6)`,
      border: 0,
      borderRadius: `${4 / baseFontSize}em`,
      color: colors.bgPrimary,
      cursor: "pointer",
      display: "block",
      fontFamily: font("benton"),
      fontSize: `${baseFontSize}px`,
      lineHeight: 1,
      padding: `${5 / baseFontSize}em ${4 / baseFontSize}em ${4 / baseFontSize}em ${7 / baseFontSize}em`,
      transition: `background-color ${timing.default}`,
      verticalAlign: "baseline",
      width: "auto",

      ":hover": hoverStyles,
      ":active": hoverStyles,
      ":focus": hoverStyles,
    },
  },

  label: {
    base: {
      fontSize: `${10 / baseFontSize}em`,
      marginRight: `${10 / baseFontSize}em`,
      verticalAlign: "middle",
    },
  },
};

/**
 * ExpandButton component
 *
 * @usage
 * <ExpandButton />
 */
function ExpandButton({ label, onClick, qahook }) {
  return (
    <button
      className="ExpandButton"
      style={styles.container.base}
      aria-label="Expand"
      onClick={onClick}
      data-qa={qahook ? createQAHook(label, "ExpandButton", "btn") : null}
    >
      {label &&
        <small
          className="ExpandButton-label"
          style={styles.label.base}
        >
          {label}
        </small>
      }

      <Icon.PopOut />
    </button>
  );
}

ExpandButton.propTypes = {
  /**
   * Text to be placed to the right of the icon
   */
  label: PropTypes.string,

  /**
   * Perform an action when the button is clicked
   */
  onClick: PropTypes.func,

  /**
   * QA Hook
   */
  qahook: PropTypes.bool,
};

ExpandButton.defaultProps = {
  label: "",
  onClick: null,
  qahook: false,
};

ExpandButton.styles = styles;

export default radium(ExpandButton);
