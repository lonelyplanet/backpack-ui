import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { color, media } from "../../../settings.json";
import font from "../../utils/font";
import Heading from "../heading";

const styles = {
  container: {
    color: color.white,
    display: "inline-block",
    fontFamily: font("benton"),
    minWidth: "108px",
    textAlign: "center",
  },

  heading: {
    color: color.white,
    fontSize: "10px",
    lineHeight: 1,

    [`@media (min-width: ${media.min["720"]})`]: {
      fontSize: "12px",
    },
  },

  underline: {
    backgroundColor: color.white,
    height: "1px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "16px",
    opacity: 0.47,
    width: "142px",
  },
};

const FeaturedSectionHeading = ({ children }) => (
  <header
    className="FeaturedSectionHeading"
    style={styles.container}
  >
    <Heading
      level={5}
      weight="thick"
      override={styles.heading}
      caps
    >
      {children}
    </Heading>

    <div style={styles.underline} />
  </header>
);

FeaturedSectionHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default radium(FeaturedSectionHeading);
