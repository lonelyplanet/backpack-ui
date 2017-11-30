import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import {
  fontSizeHeading7,
  fontWeightMedium,
  lineHeightHeading7,
} from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const height = 56;

const styles = {
  backgroundColor: colors.bgPrimary,
  display: "block",
  borderBottomColor: colors.borderPrimary,
  borderBottomStyle: "solid",
  borderWidth: "0 0 1px 0",
  height: `${(height / fontSizeHeading7)}em`,
  fontSize: `${fontSizeHeading7}px`,
  fontWeight: fontWeightMedium,
  lineHeight: lineHeightHeading7,
  minHeight: `${height}px`,
  paddingBottom: `${15 / fontSizeHeading7}em`,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: `${17 / fontSizeHeading7}em`,
  transition: `
    backgroundColor ${timing.fast},
    border-bottom-color ${timing.fast},
    color ${timing.fast}`,
  width: "100%",

  ":focus": {
    borderBottomColor: colors.linkPrimary,
    outline: "none",
  },
};

const Input = (props) => {
  const { innerRef, style, ...attributes } = props;

  return (
    <input
      {...attributes}
      ref={innerRef}
      style={[styles, style]}
    />
  );
};

Input.propTypes = {
  innerRef: PropTypes.func,
  style: propTypes.style,
};

Input.defaultProps = {
  type: "text",
  innerRef: null,
  style: null,
};

Input.styles = styles;
Input.fontSize = fontSizeHeading7;
Input.lineHeight = (lineHeightHeading7 * fontSizeHeading7);
Input.height = height;

export default radium(Input);
