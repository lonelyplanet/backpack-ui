import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import {
  fontWeightLight,
  lineHeightHeading2,
  lineHeightHeading4,
  fontSizeHeading2,
  fontSizeHeading4,
} from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    default: {
      textAlign: "center",
      fontWeight: fontWeightLight,
      fontSize: `${fontSizeHeading4}px`,
      lineHeight: lineHeightHeading4,
      maxWidth: "100%",
      marginBottom: "64px",

      [`@media (min-width: ${mq.min["1024"]})`]: {
        fontSize: `${fontSizeHeading2}px`,
        lineHeight: lineHeightHeading2,
        marginBottom: "88px",
      },
    },
    light: {
      color: colors.textOverlay,
    },
  },
  divider: {
    default: {
      display: "block",
      height: "2px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 0,
      marginTop: "24px",
      width: "30px",
      backgroundColor: colors.accentRed,

      [`@media (min-width: ${mq.min["1024"]})`]: {
        marginTop: "40px",
      },
    },
    light: {
      backgroundColor: "currentColor",
    },
  },
};

const SectionHeader = ({ children, theme, style }) => (
  <h2
    data-qa="section-header-h2"
    className="SectionHeader"
    style={[
      styles.container.default,
      styles.container[theme],
      style,
    ]}
  >
    { children }

    <span
      style={[
        styles.divider.default,
        styles.divider[theme],
      ]}
    />
  </h2>
);

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([
    "default",
    "light",
  ]),
  style: propTypes.style,
};

SectionHeader.defaultProps = {
  theme: "default",
};

export default radium(SectionHeader);
