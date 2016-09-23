import React from "react";
import settings from "rizzo-next/sass/settings.json";
import radium from "radium";

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
  content: React.PropTypes.string.isRequired,
};

Lede.defaultProps = {
  content: "",
};

export default radium(Lede);
