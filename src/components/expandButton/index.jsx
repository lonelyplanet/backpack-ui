import React from "react";
import radium from "radium";
import settings from "rizzo-next/sass/settings.json";
import Icon from "../icon";
import { rgb } from "../../utils/color";

const hoverStyles = {
  backgroundColor: `rgba(${rgb(settings.color.black)}, .9)`,
};

const styles = {
  container: {
    base: {
      backgroundColor: `rgba(${rgb(settings.color.black)}, .6)`,
      borderRadius: `${4 / 14}em`,
      color: settings.color.white,
      display: "block",
      fontSize: "14px",
      padding: `${4 / 14}em ${5 / 14}em ${3 / 14}em ${10 / 14}em`,
      transition: `background-color ${settings.timing.default}`,
      width: "auto",

      ":hover": hoverStyles,
      ":active": hoverStyles,
      ":focus": hoverStyles,
    },
  },

  label: {
    base: {
      fontSize: `${10 / 14}em`,
      marginRight: `${10 / 14}em`,
    },
  },
};

/**
 * ExpandButton component
 *
 * @usage
 * <ExpandButton />
 */
function ExpandButton({ label, onClick }) {
  return (
    <button
      className="ExpandButton"
      style={styles.container.base}
      aria-label="Expand"
      onClick={onClick}
    >
      {label &&
        <small
          className="ExpandButton-label"
          style={styles.label.base}
        >
          {label}
        </small>
      }

      <Icon
        name="pop-out"
      />
    </button>
  );
}

ExpandButton.propTypes = {
  /**
   * Text to be placed to the right of the icon
   */
  label: React.PropTypes.string,

  /**
   * Perform an action when the button is clicked
   */
  onClick: React.PropTypes.func,
};

ExpandButton.defaultProps = {
  label: "",

  onClick: null,
};

ExpandButton.styles = styles;

export default radium(ExpandButton);
