import React from "react";

import { Logo } from "../icon";

import { color, typography } from "../../../settings.json";
import SocialLoginButton from "../socialLoginButton";
import MoreLink from "../moreLink";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: color.blue,
    marginTop: "-60px",
    marginBottom: "-60px",
    fontSize: "160px",
  },
  message: {
    width: " 75%",
    marginBottom: "40px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "72px",
  },
  button: {
    marginBottom: "16px",
  },
  buttonLast: {
    marginBottom: "40px",
  },
  more: {
    textTransform: "uppercase",
    letterSpacing: 0,
    fontWeight: typography.fontWeightBold,
  },
  disclaimer: {
    fontSize: "10px",
  },
};

const SocialAuthModalContent = ({ message }) => (
  <div style={styles.container}>
    <div style={styles.logo}>
      <Logo />
    </div>
    <div style={styles.content}>
      <p style={styles.message}>{message}</p>
      <SocialLoginButton style={styles.button} text="Continue with Facebook" iconName="FacebookBlockColor" />
      <SocialLoginButton style={styles.button} text="Continue with Twitter" iconName="TwitterColor" />
      <SocialLoginButton style={styles.buttonLast} text="Continue with Google" iconName="GoogleColor" />

      <MoreLink style={styles.more}>sign in or sign up with email</MoreLink>

    </div>

    {/* eslint-disable */}
    <p style={styles.disclaimer}>If you sign up with Twitter, Facebook or Google, we'll automatically import your profile information. We'll never post without your permission. Alternatively sign in with a username and password. To sign into Lonely Planet you must have cookies enabled and agree to the Terms of Service and read the Privacy Policy and Cookie Policy. For additional account enquiries see Account help.</p>
  </div>
);

SocialAuthModalContent.propTypes = {
  message: React.PropTypes.string.isRequired,
};

SocialAuthModalContent.defaultProps = {
  message: "Sign Up / Sign In",
};

export default SocialAuthModalContent;
