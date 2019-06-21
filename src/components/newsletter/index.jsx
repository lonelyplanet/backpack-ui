import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import axios from "axios";
import Recaptcha from "react-recaptcha";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import { fontWeightLight } from "../../styles/typography";
import font from "../../utils/font";
import { outline } from "../../utils/mixins";
import Button from "../button";
import Checkbox from "../checkbox";
import Container from "../container";
import Heading from "../heading";
import Icon from "../icon";
import Input from "../input";
import MoreLink from "../moreLink";
import { dataLayerPush } from "../../utils/analytics";

const styles = {
  wrap: {
    backgroundColor: colors.bgSecondary,
    minHeight: "320px",
    textAlign: "center",
  },

  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
    justifyContent: "center",
    paddingBottom: "48px",
    paddingTop: "48px",
    width: "100%",
  },

  heading: {
    fontSize: "20px",
    letterSpacing: "-.3px",
    lineHeight: 32 / 20,

    [`@media (min-width: ${mq.min[480]})`]: {
      fontSize: "24px",
      letterSpacing: "-.4px",
      lineHeight: 32 / 28,
    },
  },

  underline: {
    backgroundColor: colors.accentGray,
    height: "2px",
    marginBottom: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "16px",
    width: "30px",
  },

  copy: {
    color: colors.textSecondary,
    fontFamily: font("miller"),
    fontSize: "14px",
    fontStyle: "italic",
    letterSpacing: "-.1px",
    lineHeight: 18 / 12,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "386px",

    [`@media (min-width: ${mq.min[480]})`]: {
      letterSpacing: ".4px",
      lineHeight: 32 / 18,
    },
  },

  button: {
    marginTop: "20px",
    minWidth: "100%",
  },

  error: {
    color: colors.accentRed,
    fontSize: "14px",
  },

  email: {
    color: colors.textPrimary,
  },

  form: {
    marginTop: "25px",
    maxWidth: "410px",
    width: "100%",
  },

  inputFieldset: {
    display: "flex",
    width: "100%",
  },

  input: {
    borderWidth: 0,
    fontSize: "13px",
    fontWeight: fontWeightLight,
    height: "44px",
    minHeight: null,
    paddingBottom: 0,
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "4px",
    ":focus": outline(),
  },

  legalSection: {
    marginTop: "32px",
  },

  legalText: {
    display: "block",
    width: "100%",
  },

  reset: {
    bottom: "24px",
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",
  },
};

class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      success: false,
      showCaptcha: false,
      showSuccess: false,
      email: "",
      response: {},
      error: {},
      loading: false,
      waiting: false,
      acceptLegalOptIn: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleOptIn = this.handleOptIn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submitRequest = this.submitRequest.bind(this);
    this.recaptchCallback = this.recaptchCallback.bind(this);
  }

  getErrorMessage() {
    const has = Object.prototype.hasOwnProperty;
    const error = this.state.error;
    const errorMessage = {
      409: "You are already subscribed.",
    };

    if (error.response && has.call(errorMessage, error.response.status)) {
      return errorMessage[error.response.status];
    }

    return "There was an error processing your request. Please try again later.";
  }

  recaptchCallback() {
    this.setState({ loading: false });
  }

  handleInput(event) {
    const validEmail = event.target.validity.valid;
    this.setState({
      disabled: !validEmail,
    });
  }

  handleOptIn() {
    this.setState({
      acceptLegalOptIn: !this.state.acceptLegalOptIn,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
      showCaptcha: true,
      email: event.currentTarget.elements["newsletter[email]"].value,
    });
  }

  submitRequest(reCaptchaResponse) {
    const { endpoint, signup, hasOptin } = this.props;

    this.setState({ waiting: true });

    const data = {
      newsletter: {
        [signup.vars.replace(/newsletter\[(.*)\]/, "$1")]: true,
        source: signup.source,
        legalOptIn: hasOptin ? this.state.acceptLegalOptIn : true,
        email: this.state.email,
        "g-recaptcha-response": reCaptchaResponse,
      },
    };

    const config = {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      withCredentials: true,
    };

    axios
      .post(endpoint, data, config)
      .then(response => {
        this.setState({
          success: true,
          showSuccess: true,
          showCaptcha: false,
          response,
          waiting: false,
        });
        dataLayerPush({
          event: "newsletter-subscribe",
        });
      })
      .catch(error =>
        this.setState({
          success: false,
          disabled: true,
          showCaptcha: false,
          error,
          waiting: false,
        })
      );
  }

  resetForm() {
    this.setState({
      disabled: true,
      success: false,
      showCaptcha: false,
      showSuccess: false,
      email: "",
      response: {},
      error: {},
      loading: false,
      waiting: false,
      acceptLegalOptIn: false,
    });
  }

  render() {
    const {
      title,
      subtitle,
      placeholder,
      cta,
      confirmation,
      legalOptInLabel,
      hasOptin,
      captchaSiteKey,
      endpoint,
      style: overrideStyles,
      qaHook,
    } = this.props;

    if (!captchaSiteKey) {
      throw new Error("You did not supply an API key for Recaptcha.");
    }

    return (
      <div className="Newsletter" style={[styles.wrap, overrideStyles && overrideStyles]}>
        <Style
          scopeSelector=".Newsletter"
          rules={{
            "a:focus": outline(),
            ".Checkbox label, .Legal span": {
              color: `${colors.textSecondary} !important`,
              fontSize: "9px !important",
              height: "auto !important",
              lineHeight: `${16 / 9} !important`,
              textAlign: "left !important",
            },
            ".Checkbox span:first-of-type": {
              marginTop: "2px",
              padding: "0 !important",
            },
            ".Checkbox label span + span": {
              lineHeight: "inherit !important",
              paddingRight: "8px",
              paddingTop: "0 !important",
            },
          }}
        />

        <Container style={styles.container}>
          <Heading level={2} weight="thick" tracking="tight" override={styles.heading}>
            {title}
            <div style={styles.underline} />
          </Heading>

          {this.state.loading && "Loading…"}

          {this.state.showSuccess && (
            <div>
              <p style={styles.copy}>
                {confirmation.title} <br />
                {confirmation.text} <span style={styles.email}>{this.state.email}</span>
              </p>

              <MoreLink onClick={this.resetForm} style={styles.reset} size="small" hideIcon caps>
                Change Email Address
              </MoreLink>
            </div>
          )}

          {!this.state.success &&
            !this.state.showCaptcha && (
            <div>
              {Object.keys(this.state.error).length > 0 ? (
                <p style={styles.error}>{this.getErrorMessage()}</p>
              ) : (
                <p style={styles.copy}>
                  {!this.state.success && subtitle}

                  {this.state.success && `${confirmation.text} ${this.state.response.email}`}
                </p>
              )}

              <form data-testid={qaHook ? "newsletter-form" : null} style={styles.form} action={endpoint} onSubmit={this.handleSubmit}>
                <div style={styles.inputFieldset}>
                  <Input
                    type="email"
                    placeholder={placeholder}
                    required
                    id="newsletter-email"
                    name="newsletter[email]"
                    style={styles.input}
                    onChange={this.handleInput}
                    data-testid={qaHook ? "newsletter-email-input" : null}
                  />
                </div>

                <div className={!hasOptin ? "Legal" : ""} style={styles.legalSection}>
                  {hasOptin ? (
                    <Checkbox
                      id="legalOptIn"
                      label={legalOptInLabel}
                      style={styles.legalText}
                      checked={this.state.acceptLegalOptIn}
                      onClick={this.handleOptIn}
                      value="legalOptIn"
                      name="legalOptIn"
                      data-testid={qaHook ? "legal-checkbox" : null}
                      required
                    />
                  ) : (
                    <span style={styles.legalText}>{legalOptInLabel}</span>
                  )}
                </div>

                <div style={styles.inputFieldset}>
                  <Button
                    color="blue"
                    size="small"
                    disabled={this.state.disabled}
                    customStyles={styles.button}
                    qaHook={qaHook}
                  >
                    {!this.state.waiting && cta}
                    {this.state.waiting && <Icon.Loading />}
                  </Button>
                </div>
              </form>
            </div>
          )}

          {this.state.showCaptcha && (
            <div style={{ marginTop: "24px" }}>
              <Recaptcha
                sitekey={captchaSiteKey}
                render="explicit"
                verifyCallback={this.submitRequest}
                onloadCallback={this.recaptchCallback}
              />
            </div>
          )}
        </Container>
      </div>
    );
  }
}

Newsletter.propTypes = {
  captchaSiteKey: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  placeholder: PropTypes.string,
  cta: PropTypes.string,
  confirmation: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  signup: PropTypes.shape({
    vars: PropTypes.string,
    source: PropTypes.string,
  }),
  legalOptInLabel: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  hasOptin: PropTypes.bool,
  endpoint: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
  qaHook: PropTypes.bool,
};

Newsletter.defaultProps = {
  title: "Sign up for our weekly newsletter",
  subtitle: `Get more travel inspiration, tips and
    exclusive offers sent straight to your inbox`,
  placeholder: "Enter email",
  cta: "Sign up",
  confirmation: {
    title: "Thanks for signing up!",
    text: "We just sent a confirmation email to",
  },
  signup: {
    vars: "newsletter[LP_Editorial_Newsletter]",
    source: "homepage",
  },
  legalOptInLabel: [
    "I want emails from Lonely Planet with travel and product information, promotions, advertisements, third-party offers, and surveys. I can unsubscribe any time using the unsubscribe link at the end of all emails. ",
    <a
      key="contact-lp"
      href="https://www.lonelyplanet.com/contact"
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact Lonely Planet here
    </a>,
    ". Lonely Planet ",
    <a
      key="privacy-policy"
      href="https://www.lonelyplanet.com/legal/privacy-policy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Privacy Policy
    </a>,
    ".",
  ],
  captchaSiteKey: null,
  endpoint: "https://www.lonelyplanet.com/newsletter",
  qaHook: false,
};

export default radium(Newsletter);
