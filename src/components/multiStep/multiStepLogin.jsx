import React from "react";
import PropTypes from "prop-types";
import MultiStep from "./multiStep";
import Button from "../button";
import ModalContentMagicLinkForm from "../modalContent/modalContentMagicLinkForm";
import ModalContentLegacyLoginForm from "../modalContent/modalContentLegacyLoginForm";
import {
  AuthContainer,
  AuthDisclaimer,
  AuthEmailLink,
  AuthMessage,
  AuthSocialButtons,
} from "../auth";
import { fontWeightMedium } from "../../styles/typography";
import colors from "../../styles/colors";

const styles = {
  disclaimerAboveButton: {
    maxWidth: "100%",
    width: "100%",
  },
  disclaimerBelowButton: {
    maxWidth: "350px",
    textAlign: "center",
  },
  legacyText: {
    color: colors.textPrimary,
    fontWeight: fontWeightMedium,
  },
};

const MultiStepLogin = ({
  currentStep,
  setStep,
  authActions,
  showLogo,
  doneAction,
}) => {
  const SocialDisclaimer = (
    <AuthDisclaimer style={styles.disclaimerBelowButton}>
      {authActions.password && <p>
        <span style={styles.legacyText}>Or sign in with a legacy </span>
        <a
          href="#"
          onClick={(event) => {
            setStep(3);
            event.preventDefault();
          }}
        >
          username and password
        </a>.
      </p>}
      Lonely Planet uses cookies to improve your
      experience, see our <a href="https://www.lonelyplanet.com/legal/cookies/">Cookie Policy</a>.
      Having trouble signing in?
      See <a href="https://support.lonelyplanet.com/hc/en-us/sections/115003521167-Lonely-Planet-Profiles" target="_blank" rel="noopener noreferrer">Account help</a>.
    </AuthDisclaimer>
  );

  const EmailDisclaimer = (
    <AuthDisclaimer style={styles.disclaimerAboveButton}>
      By clicking next below and creating an account, you agree to our <a href="https://www.lonelyplanet.com/legal/website-terms/">terms of service</a> and
       that you're happy for Lonely Planet to use your information as set out in our <a href="https://www.lonelyplanet.com/legal/privacy-policy/">privacy policy</a> (including our <a href="https://www.lonelyplanet.com/legal/cookies/">cookie use</a>).
    </AuthDisclaimer>
  );

  const LegacyDisclaimer = (
    <AuthDisclaimer style={styles.disclaimerBelowButton}>
      <a href="https://auth.lonelyplanet.com/users/password/new/">Forgot your password?</a> Please
      contact <a href="mailto:community@lonelyplanet.com">community@lonelyplanet.com</a> for additional assistance if you do not receive an email from us soon. Be sure to check your spam or junk folder, just in case.
    </AuthDisclaimer>
  );

  return (
    <MultiStep currentStep={currentStep}>
      <AuthContainer key="home" hasLogo={showLogo} className="js-gtm-auth-container">
        <AuthMessage>
          Organize your research & unlock
          tools like bookmarking.
        </AuthMessage>

        <AuthSocialButtons
          actions={authActions}
          className="js-gtm-auth-social-buttons"
        />

        {authActions.passwordless && <AuthEmailLink
          onClick={() => {
            setStep(2);
          }}
        />}

        {SocialDisclaimer}
      </AuthContainer>

      <AuthContainer key="passwordless" hasLogo={showLogo}>
        <AuthMessage style={{ marginTop: "56px" }}>
          Enter your email address to sign in or create an account.
        </AuthMessage>

        <ModalContentMagicLinkForm
          disclaimer={EmailDisclaimer}
          onSubmit={(email) => {
            authActions.passwordless(email);
            setStep(4);
          }}
        />
      </AuthContainer>

      <AuthContainer key="legacy" hasLogo={showLogo}>
        <AuthMessage style={{ marginTop: "80px" }}>
          Enter your email address or username
          and password to sign in.
        </AuthMessage>
        <ModalContentLegacyLoginForm
          authLink={authActions.password}
        />
        {LegacyDisclaimer}
      </AuthContainer>

      <AuthContainer key="success" hasLogo={showLogo}>
        <AuthMessage
          title="Check your email"
          style={{ marginTop: "80px" }}
        >
          We sent you a secure link to sign in with. Please check your email inbox.
        </AuthMessage>

        <Button
          size="small"
          onClick={doneAction}
          rounded
        >
          Ok
        </Button>
      </AuthContainer>
    </MultiStep>
  );
};

MultiStepLogin.propTypes = {
  currentStep: PropTypes.func,
  setStep: PropTypes.func,
  authActions: PropTypes.shape({
    facebook: PropTypes.func,
    twitter: PropTypes.func,
    google: PropTypes.func,
    passwordless: PropTypes.func,
    password: PropTypes.func,
  }),
  showLogo: PropTypes.boolean,
  doneAction: PropTypes.func,
};

export default MultiStepLogin;
