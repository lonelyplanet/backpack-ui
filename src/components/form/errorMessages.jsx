import React, { PropTypes } from "react";
import { color } from "../../utils/color";

const styles = {
  base: {
    color: color.red,
    marginTop: "16px",
    fontSize: "12px",
    textAlign: "center",
  },
};

const ErrorMessages = ({ messages, style }) => (
  <div style={[styles.base, style && style]}>
    {messages.map(errorMessage => <p>{errorMessage}</p>)}
  </div>
);

ErrorMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default ErrorMessages;
