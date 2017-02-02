import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import { color } from "../../../settings.json";
import font from "../../utils/font";

const styles = {
  color: color.detailHeaderSmall,
  fontFamily: font("benton"),
  fontSize: "11px",
  lineHeight: (17 / 11),
};

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const DisclaimerText = ({ children, style }) => (
  <div className="DisclaimerText" style={[styles, style]}>
    <Style rules={{ ".DisclaimerText a": { color: "inherit" } }} />;
    <div dangerouslySetInnerHTML={markup(children)} />
  </div>
);

DisclaimerText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(DisclaimerText);
