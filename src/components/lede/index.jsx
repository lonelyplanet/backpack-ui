import React, { PropTypes } from "react";
import radium from "radium";
import settings from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    color: settings.color.darkGray,
    fontSize: "2.6rem",
    fontWeight: 300,
    lineHeight: (40 / 26),
    marginBottom: 0,
  },

  paragraph: {
    marginBottom: 0,
    marginTop: 0,
  },
};

function Lede({ children, content, style }) {
  return (
    <div
      className="Lede"
      style={[styles.container, style]}
    >
      <p style={styles.paragraph}>
        {children || content}
      </p>
    </div>
  );
}

Lede.propTypes = {
  children: PropTypes.string.isRequired,
  content: PropTypes.string,
  style: propTypes.style,
};

export default radium(Lede);
