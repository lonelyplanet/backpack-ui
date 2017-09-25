import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import propTypes from "../../utils/propTypes";
import DisclaimerText from "../disclaimerText";

const styles = {
  marginTop: "24px",
};

const AuthDisclaimer = ({ children, style }) => (
  <DisclaimerText style={[styles, style]}>
    {children}
  </DisclaimerText>
);

AuthDisclaimer.propTypes = {
  children: PropTypes.node,
  style: propTypes.style,
};

export default radium(AuthDisclaimer);
