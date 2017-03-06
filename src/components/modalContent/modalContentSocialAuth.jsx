import React, { PropTypes } from "react";
import radium from "radium";
import { Logo } from "../icon";
import { color, typography } from "../../../settings.json";
import SocialLoginButton from "../socialLoginButton";
import MoreLink from "../moreLink";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: color.blue,
    fontSize: "160px",
  },
  message: {
    width: "75%",
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
    letterSpacing: 0,
    fontWeight: typography.fontWeightBold,
  },
  disclaimer: {
    fontSize: "10px",
  },
};

const socialNavigate = (path) => {
  window.location = `https://auth.lonelyplanet.com/${path}`;
};

const ModalContentSocialAuth = ({ message, style }) => (
  <div style={[styles.container, style]} className="ModalContentSocialAuth">
    <Logo style={styles.logo} />
    <div style={styles.content}>
      <p style={styles.message}>{message}</p>
      <SocialLoginButton
        style={styles.button}
        iconName="FacebookBlockColor"
        onClick={() => socialNavigate("facebook")}
      >
        Continue with Facebook
      </SocialLoginButton>
      <SocialLoginButton
        style={styles.button}
        iconName="TwitterColor"
        onClick={() => socialNavigate("twitter")}
      >
        Continue with Twitter
      </SocialLoginButton>
      <SocialLoginButton
        style={styles.buttonLast}
        iconName="GoogleColor"
        onClick={() => socialNavigate("google_oauth2")}
      >
        Continue with Google
      </SocialLoginButton>

      <MoreLink caps style={styles.more}>Sign in or sign up with email</MoreLink>

    </div>

    <p style={styles.disclaimer}>
    If you sign up with Twitter, Facebook or Google,
     we'll automatically import your profile information.
     We'll never post without your permission. Alternatively sign in with a username and password.
     To sign into Lonely Planet you must have cookies enabled
      and agree to the Terms of Service and read the Privacy Policy and Cookie Policy.
     For additional account enquiries see Account help.</p>
  </div>
);

ModalContentSocialAuth.propTypes = {
  message: PropTypes.string.isRequired,
  style: propTypes.style,
};

ModalContentSocialAuth.defaultProps = {
  message: "Sign Up / Sign In",
};

export default radium(ModalContentSocialAuth);
