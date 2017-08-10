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

const styles = {
  disclaimerAboveButton: {
    maxWidth: "100%",
    width: "100%",
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
    <AuthDisclaimer>
      If you sign up with Twitter, Facebook or Google, we'll import your profile
      information. We'll never post without your permission. Or sign in with a
      legacy <a
        href="https://auth.lonelyplanet.com/users/sign_in"
        onClick={(event) => {
          setStep(3);
          event.preventDefault();
        }}
      >username and password</a> Lonely Planet uses cookies to improve your
      experience, see our <a href="https//www.lonelyplanet.com/legal/cookies/">Cookie Policy</a>.
      You may receive notifications from us and can opt out at any time.
      For additional account inquiries
      see <a href="http://support.lonelyplanet.com/hc/en-us/sections/203968787-Account-administration" target="_blank" rel="noopener noreferrer">Account help</a>.
    </AuthDisclaimer>
  );

  const EmailDisclaimer = (
    <AuthDisclaimer style={styles.disclaimerAboveButton}>
      By clicking next below and creating an account, you agree to our <a href="https//www.lonelyplanet.com/legal/website-terms/">terms of service</a> and
       that you're happy for Lonely Planet to use your information as set out in our <a href="https//www.lonelyplanet.com/legal/privacy-policy/">privacy policy</a> (including our <a href="https//www.lonelyplanet.com/legal/cookies/">cookie use</a>).
       Once you create your account, we will send an email to your email address containing a
       unique link so that you can login to Lonely Planet.
    </AuthDisclaimer>
  );
  return (
    <MultiStep currentStep={currentStep}>
      <AuthContainer key="home" hasLogo={showLogo}>
        <AuthMessage>
          Organize your research & unlock
          tools like bookmarking.
        </AuthMessage>

        <AuthSocialButtons
          actions={authActions}
        />

        <AuthEmailLink
          onClick={() => {
            setStep(2);
          }}
        />

        {SocialDisclaimer}
      </AuthContainer>

      <AuthContainer key="passwordless" hasLogo={showLogo}>
        <AuthMessage style={{ marginTop: "56px" }}>
          Enter your email address to sign in or create an account on Lonely Planet.
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
      </AuthContainer>

      <AuthContainer key="success" hasLogo={showLogo}>
        <AuthMessage
          title="Success!"
          style={{ marginTop: "80px" }}
        >
          We sent a link to log in.
          Please check your inbox.
        </AuthMessage>

        <Button
          size="small"
          onClick={doneAction}
          rounded
        >
          Done
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
