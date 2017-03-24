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
};

function Lede({ content, style }) {
  return (
    <div
      className="Lede"
      style={[styles.container, style]}
    >
      <p>
        {content}
      </p>
    </div>
  );
}

Lede.propTypes = {
  content: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(Lede);
