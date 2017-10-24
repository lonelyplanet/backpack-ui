import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import { fontSizeHeading4 } from "../../styles/typography";
import { textHeading4 } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  container: Object.assign({},
    textHeading4("light"),
    {
      color: colors.textPrimary,
      lineHeight: (42 / fontSizeHeading4),
    },
  ),

  paragraph: {
    marginBottom: 0,
    marginTop: 0,
  },
};

function Lede({ children, style }) {
  return (
    <div
      className="Lede"
      style={[styles.container, style]}
    >
      <p style={styles.paragraph}>
        {children}
      </p>
    </div>
  );
}

Lede.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(Lede);
