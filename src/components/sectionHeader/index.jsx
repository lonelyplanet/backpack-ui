import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Heading from "../heading";
import { color, media } from "../../../settings.json";

const styles = {
  container: {
    textAlign: "center",
    marginBottom: "40px",
    [`@media (min-width: ${media.min["720"]})`]: {
      marginBottom: "64px",
    },
  },

  heading: {
    marginBottom: "16px",
    lineHeight: 1.3,
    fontSize: "28px",

    [`@media (min-width: ${media.min["720"]})`]: {
      fontSize: "45px",
    },
  },

  divider: {
    width: "30px",
    borderStyle: "solid",
    borderWidth: "1px",
    marginBottom: "32px",
  },
  theme: {
    default: {
      divider: {
        borderColor: color.red,
      },
    },
    light: {
      divider: {
        borderColor: color.white,
      },
      heading: {
        color: color.white,
      },
    },
  },
};


const SectionHeader = ({ children, heading, theme, style }) => {
  heading = heading || {};
  heading.size = heading.size || "large";
  heading.weight = heading.weight || "extraThin";

  return (
    <header
      className="SectionHeader"
      style={[styles.container, style]}
    >
      <Heading
        {...heading}
        override={[styles.heading, styles.theme[theme].heading]}
      >
        {children}
      </Heading>

      <hr style={[styles.divider, styles.theme[theme].divider]} />
    </header>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.shape(Heading.propTypes),
  theme: PropTypes.oneOf([
    "default",
    "light",
  ]).isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

SectionHeader.defaultProps = {
  theme: "default",
};

SectionHeader.styles = styles;

export default radium(SectionHeader);
