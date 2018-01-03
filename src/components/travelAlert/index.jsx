import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeHeading7, lineHeightHeading7 } from "../../styles/typography";
import font from "../../utils/font";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import Container from "../container";

const styles = {
  backgroundColor: colors.accentYellow,
  boxSizing: "border-box",
  color: colors.textPrimary,
  fontFamily: font("benton"),
  fontSize: `${fontSizeHeading7}px`,
  lineHeight: lineHeightHeading7,
  paddingBottom: `${18 / fontSizeHeading7}em`,
  paddingTop: `${22 / fontSizeHeading7}em`,
  textAlign: "center",
};

const scopedStyles = {
  a: {
    color: "inherit",
    textDecoration: "underline",
    transition: `color ${timing.fast} ease-in-out`,
  },

  "a:hover": {
    color: colors.textSecondary,
  },

  "a:active": {
    color: colors.textSecondary,
  },

  "a:focus": Object.assign({}, {
    color: colors.textSecondary,
  }, outline(), {
    outlineColor: colors.textSecondary,
  }),
};

const markup = (htmlContent) => ({
  __html: htmlContent,
});

const TravelAlert = ({ children, style }) => (
  <div
    className="TravelAlert"
    style={[styles, style]}
    role="status"
  >
    <Style
      scopeSelector=".TravelAlert"
      rules={scopedStyles}
    />

    <Container>
      <div dangerouslySetInnerHTML={markup(children)} />
    </Container>
  </div>
);

TravelAlert.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(TravelAlert);
