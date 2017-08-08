import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import color from "../../styles/colors";
import * as typography from "../../styles/typography";
import TextHeading from "../text/textHeading";

const styles = {
  title: {
    paddingTop: "16px",
    display: "block",
    lineHeight: 1,
  },
  subtitle: {
    color: color.textSecondary,
    fontWeight: typography.fontWeightLight,
    marginTop: "4px",
    fontSize: typography.fontSizeUppercase,
    lineHeight: 1,
  },
};

const SettingBlockHeader = ({ children, subtitle }) => (
  <div className="SettingBlockHeader">
    <TextHeading
      level={7}
      size={7}
      weight="medium"
      style={styles.title}
    >
      {children}
    </TextHeading>
    { subtitle && <p style={styles.subtitle}>{subtitle}</p>}
  </div>
);

SettingBlockHeader.propTypes = {
  children: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default radium(SettingBlockHeader);
