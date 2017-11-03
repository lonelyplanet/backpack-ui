import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import axios from "axios";
import Recaptcha from "react-recaptcha";
import { color, media } from "../../../settings.json";
import font from "../../utils/font";
import colors from "../../styles/colors";
import Heading from "../heading";
import Input from "../form/input";
import Checkbox from "../checkbox";
import Button from "../button";
import MoreLink from "../moreLink";
import Icon from "../icon";
import Container from "../container";

const styles = {
  wrap: {
    backgroundColor: color.lightGrayBlue,
    display: "flex",
    justifyContent: "center",
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
    lineHeight: (32 / 20),

    [`@media (min-width: ${media.min["480"]})`]: {
      fontSize: "24px",
      letterSpacing: "-.4px",
      lineHeight: (32 / 28),
    },
  },

  underline: {
    backgroundColor: color.lightBlue,
    height: "2px",
    marginBottom: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "16px",
    width: "30px",
  },

  copy: {
    color: color.articlesBlurb,
    fontFamily: font("miller"),
    fontSize: "14px",
    fontStyle: "italic",
    letterSpacing: "-.1px",
    lineHeight: (18 / 12),
    margin: 0,
    maxWidth: "386px",

    [`@media (min-width: ${media.min["480"]})`]: {
      letterSpacing: ".4px",
      lineHeight: (32 / 18),
    },
  },

  error: {
    color: color.red,
    fontSize: "14px",
  },

  email: {
    color: color.titleGray,
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
    WebkitAppearance: "none",
    paddingBottom: `${10 / 13}em`,
  },

  checkboxFieldset: {
    marginTop: "32px",
  },

  checkbox: {
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
  static formatFormData(data) {
    const str = [];

    Object.keys(data).forEach((item) => {
      str.push(`${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`);
    });

    return str.join("&");
  }

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
    this.setState({ waiting: true });

    const formattedData = Newsletter.formatFormData({
      [this.props.signup.vars]: "true",
      "newsletter[source]": this.props.signup.source,
      "newsletter[legalOptIn]": this.state.acceptLegalOptIn,
      "newsletter[email]": this.state.email,
      "g-recaptcha-response": reCaptchaResponse,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };

    axios.post("https://www.lonelyplanet.com/newsletter", formattedData, config)
      .then(response => this.setState({
        success: true,
        showSuccess: true,
        showCaptcha: false,
        response,
        waiting: false,
      }))
      .catch(error => this.setState({
        success: false,
        disabled: true,
        showCaptcha: false,
        error,
        waiting: false,
      }));
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
      captchaSiteKey,
      style: overrideStyles,
    } = this.props;

    if (!captchaSiteKey) {
      throw new Error("You did not supply an API key for Recaptcha.");
    }

    return (
      <div
        className="Newsletter"
        style={[
          styles.wrap,
          overrideStyles && overrideStyles,
        ]}
      >
        <Style
          scopeSelector=".Newsletter"
          rules={{
            ".Checkbox label": {
              color: `${colors.textSecondary} !important`,
              fontSize: "9px !important",
              height: "auto !important",
              lineHeight: `${(16 / 9)} !important`,
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
          <Heading
            level={2}
            weight="thick"
            tracking="tight"
            override={styles.heading}
          >
            {title}
            <div style={styles.underline} />
          </Heading>

          {this.state.loading && "Loading…"}

          {this.state.showSuccess &&
            <div>
              <p style={styles.copy}>
                {confirmation.title} <br />
                {confirmation.text} <span style={styles.email}>{this.state.email}</span>
              </p>

              <MoreLink
                onClick={this.resetForm}
                style={styles.reset}
                size="small"
                hideIcon
                caps
              >
                Change Email Address
              </MoreLink>
            </div>
          }

          {!this.state.success && !this.state.showCaptcha &&
            <div>
              {Object.keys(this.state.error).length > 0 ?
                <p style={styles.error}>{this.getErrorMessage()}</p> :
                <p style={styles.copy}>
                  {!this.state.success && subtitle}

                  {this.state.success &&
                    `${confirmation.text} ${this.state.response.email}`
                  }
                </p>
              }

              <form
                style={styles.form}
                action="https://www.lonelyplanet.com/newsletter"
                onSubmit={this.handleSubmit}
              >
                <div style={styles.inputFieldset}>
                  <Input
                    type="email"
                    label="email"
                    placeholder={placeholder}
                    required
                    id="newsletter-email"
                    name="newsletter[email]"
                    customStyles={styles.input}
                    onChange={this.handleInput}
                  />

                  <Button
                    color="blue"
                    size="small"
                    disabled={this.state.disabled}
                    customStyles={styles.button}
                  >
                    {!this.state.waiting && cta}
                    {this.state.waiting && <Icon.Loading />}
                  </Button>
                </div>

                <div style={styles.checkboxFieldset}>
                  <Checkbox
                    id="legalOptIn"
                    label={legalOptInLabel}
                    style={styles.checkbox}
                    checked={this.state.acceptLegalOptIn}
                    onClick={this.handleOptIn}
                    value="legalOptIn"
                    name="legalOptIn"
                    required
                  />
                </div>
              </form>
            </div>
          }

          {this.state.showCaptcha &&
            <div style={{ marginTop: "24px" }}>
              <Recaptcha
                sitekey={captchaSiteKey}
                render="explicit"
                verifyCallback={this.submitRequest}
                onloadCallback={this.recaptchCallback}
              />
            </div>
          }
        </Container>
      </div>
    );
  }
}

Newsletter.propTypes = {
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
  legalOptInLabel: PropTypes.string,
  captchaSiteKey: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
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
  legalOptInLabel: ["Tick to opt-in. Opt out at any time via the “unsubscribe” link in the footer of the emails. View our ", <a href="https://www.lonelyplanet.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">privacy policy</a>, "."],
  captchaSiteKey: null,
};

export default radium(Newsletter);
