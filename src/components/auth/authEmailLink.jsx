import React, { PropTypes } from "react";
import radium from "radium";
import MoreLink from "../moreLink";
import propTypes from "../../utils/propTypes";

const styles = {
  moreLink: {
    letterSpacing: 0,
    padding: "16px",
  },
};

const AuthEmailLink = ({ onClick, style }) => (
  <MoreLink
    caps
    size="small"
    style={[style, styles.moreLink]}
    onClick={onClick}
  >
    Sign in or sign up with email
  </MoreLink>
);

AuthEmailLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: propTypes.style,
};

export default radium(AuthEmailLink);
