import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import colors from "../../styles/colors";
import font from "../../utils/font";
import { fontSizeUppercase } from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  color: colors.textSecondary,
  fontFamily: font("benton"),
  fontSize: `${fontSizeUppercase}px`,
  lineHeight: (17 / 11),
};

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const DisclaimerText = ({ children, style }) => (
  <div
    className="DisclaimerText"
    style={[styles, style]}
  >
    <Style
      rules={{
        ".DisclaimerText a": {
          color: "inherit",
        },
      }}
    />

    <div dangerouslySetInnerHTML={markup(children)} />
  </div>
);

DisclaimerText.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(DisclaimerText);
