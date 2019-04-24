import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";

const styles = {
  base: {
    color: colors.accentRed,
    marginTop: "16px",
    fontSize: "12px",
    textAlign: "center",
  },
};

const ErrorMessages = ({ messages, style, qahook }) => (
  <div data-qa={qahook ? "error-msgs" : false} style={[styles.base, style && style]}>
    {messages.map((errorMessage, i) => <p key={i}>{errorMessage}</p>)}
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
  qahook: PropTypes.bool,
};

ErrorMessages.defaultProps = {
  qahook: false,
};

export default radium(ErrorMessages);
