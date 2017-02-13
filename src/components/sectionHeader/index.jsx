import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "../heading";
import settings from "../../../settings.json";

const styles = {
  container: {
    textAlign: "center",
  },

  heading: {
    marginBottom: "13px",
    lineHeight: 1.3,
    fontSize: "28px",

    [`@media (min-width: ${settings.media.min["720"]})`]: {
      fontSize: "45px",
    },
  },

  divider: {
    borderColor: settings.color.red,
    width: "30px",
    borderStyle: "solid",
    borderWidth: "1px",
    marginBottom: "31px",
  },
};

const SectionHeader = ({ children, heading, style }) => {
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
        override={styles.heading}
      >
        {children}
      </Heading>

      <hr style={styles.divider} />
    </header>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.shape(Heading.propTypes).isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

SectionHeader.styles = styles;

export default radium(SectionHeader);
