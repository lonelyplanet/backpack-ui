import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import { textBodySmall } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = Object.assign({}, {
  color: colors.textPrimary,
  marginBottom: 0,
  marginTop: 0,
}, textBodySmall());

const markup = (htmlContent) => ({ __html: htmlContent });

const TextBodySmall = (props) => (
  <div {...props} style={[styles, props.style]}>
    <div dangerouslySetInnerHTML={markup(props.children)} />
  </div>
);

TextBodySmall.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(TextBodySmall);
