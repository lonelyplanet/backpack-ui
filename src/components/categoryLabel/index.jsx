import React, { PropTypes } from "react";
import radium from "radium";
import { media, timing } from "../../../settings.json";
import font from "../../utils/font";

const styles = {
  container: {
    display: "inline-block",
    fontFamily: font("benton"),
    paddingBottom: "8px",
    transition: `padding-bottom ${timing.fast} ease-in-out`,

    [`@media (min-width: ${media.min["480"]})`]: {
      paddingBottom: "16px",
    },
  },

  smallCaps: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.06px",
    textTransform: "uppercase",
  },
};

const CategoryLabel = ({ text, imagePath, style }) => (
  <span style={[styles.container, style]}>
    {imagePath ?
      <img src={imagePath} role="presentation" alt="" /> :
      <p style={styles.smallCaps}>{text}</p>
    }
  </span>
);

CategoryLabel.propTypes = {
  text: PropTypes.string,
  imagePath: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(CategoryLabel);
