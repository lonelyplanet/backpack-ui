import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import { media } from "../../../settings.json";
import colors from "../../styles/colors";
import font from "../../utils/font";
import Heading from "../heading";

const styles = {
  container: {
    color: colors.bgPrimary,
    display: "inline-block",
    fontFamily: font("benton"),
    minWidth: "108px",
    textAlign: "center",
  },

  heading: {
    color: colors.bgPrimary,
    fontSize: "10px",
    lineHeight: 1,

    [`@media (min-width: ${media.min["720"]})`]: {
      fontSize: "12px",
    },
  },

  underline: {
    backgroundColor: colors.bgPrimary,
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
