import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { fontSizeHeading3 } from "../../styles/typography";
import { textHeading3 } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  container: Object.assign({},
    textHeading3("light"),
    {
      color: colors.textPrimary,
      lineHeight: (42 / fontSizeHeading3),
    },
  ),

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
