import React, { PropTypes } from "react";
import radium from "radium";
import { timing, typography, media } from "../../../../settings.json";

const styles = {
  container: {
    paddingBottom: 16,
    display: "inline-block",
    transition: `padding-bottom ${timing.fast} ease`,
    [`@media (max-width: ${media.max["480"]})`]: {
      transition: `padding-bottom ${timing.fast} ease`,
      paddingBottom: 8,
    },
  },
  smallCaps: {
    textTransform: "uppercase",
    fontSize: "1.1rem",
    letterSpacing: "0.06px",
    fontWeight: typography.fontWeightBold,
  },
};

const Category = ({ text, imagePath, style }) => (
  <span style={[styles.container, style && style]}>
    {imagePath
      ? <img src={imagePath} role="presentation" />
      : <p style={[styles.smallCaps]}>{text}</p>
    }
  </span>
);

Category.propTypes = {
  text: PropTypes.string,
  imagePath: PropTypes.string,
  style: PropTypes.object,
};

export default radium(Category);
