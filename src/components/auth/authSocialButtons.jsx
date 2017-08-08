import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import SocialLoginButton from "../socialLoginButton";
import propTypes from "../../utils/propTypes";

const styles = {
  spacing: {
    marginBottom: "16px",
  },
};

const AuthSocialButtons = ({ actions, style }) => (
  <div
    className="AuthSocialButtons"
    style={[styles.spacing, style]}
  >
    <SocialLoginButton
      style={styles.spacing}
      iconName="FacebookBlockColor"
      onClick={actions.facebook}
    >
      Continue with Facebook
    </SocialLoginButton>

    <SocialLoginButton
      style={styles.spacing}
      iconName="TwitterColor"
      onClick={actions.twitter}
    >
      Continue with Twitter
    </SocialLoginButton>

    <SocialLoginButton
      iconName="GoogleColor"
      onClick={actions.google}
    >
      Continue with Google
    </SocialLoginButton>
  </div>
);

AuthSocialButtons.propTypes = {
  actions: PropTypes.shape({
    facebook: PropTypes.func,
    twitter: PropTypes.func,
    google: PropTypes.func,
  }).isRequired,
  style: propTypes.style,
};

export default radium(AuthSocialButtons);
