import React, { PropTypes } from "react";
import radium from "radium";
import settings from "../../../settings.json";
import propTypes from "../../utils/propTypes";

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
function Lede({ content, style }) {
  return (
    <div
      className="Lede"
      style={[styles.base, style]}
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
  style: propTypes.style,
};

export default radium(Lede);
