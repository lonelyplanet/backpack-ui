import React, { PropTypes } from "react";
import radium from "radium";
import Logo from "../logo";
import { typography } from "../../../settings.json";
import SocialLoginButton from "../socialLoginButton";
import MoreLink from "../moreLink";
import DisclaimerText from "../disclaimerText";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: "16px",
    width: "160px",
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
};

const disclaimer = `If you sign up with Twitter, Facebook or Google, we’ll automatically import your
  profile information. We’ll never post without your permission. Alternatively sign in with a
  <a href="https://auth.lonelyplanet.com/users/sign_in">username and password</a>. To sign into
  Lonely Planet you must have cookies enabled and agree to the
  <a href="//www.lonelyplanet.com/legal/website-terms/">Terms of Service</a> and read the
  <a href="//www.lonelyplanet.com/legal/privacy-policy/">Privacy Policy</a> and
  <a href="//www.lonelyplanet.com/legal/cookies/">Cookie Policy</a>. For additional account
  enquiries see <a href="">Account help</a>.`;

const socialNavigate = (path) => {
  window.location = `https://auth.lonelyplanet.com/users/auth/${path}`;
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

      <MoreLink
        caps
        style={styles.more}
        href="https://auth.lonelyplanet.com/users/sign_in"
      >
        Sign in or sign up with email
      </MoreLink>

    </div>

    <DisclaimerText>
      {disclaimer}
    </DisclaimerText>
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
