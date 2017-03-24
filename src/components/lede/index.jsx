import React, { PropTypes } from "react";
import radium from "radium";
import settings from "../../../settings.json";

const styles = {
  base: {
    color: settings.color.darkGray,
    fontSize: "2.6rem",
    fontWeight: 300,
    lineHeight: (40 / 26),
    marginBottom: 0,
  },
};

/**
 * Lede component
 */
function Lede({ content }) {
  return (
    <div
      className="Lede"
      style={styles.base}
    >
      <p>
        {content}
      </p>
    </div>
  );
}

Lede.propTypes = {
  /**
   * String of content
   */
  content: PropTypes.string.isRequired,
};

export default radium(Lede);
