import React, { PropTypes, Component } from "react";
import radium from "radium";
import axios from "axios";
import Recaptcha from "react-recaptcha";
import { color, media } from "../../../settings.json";
import font from "../../utils/font";
import Heading from "../heading";
import Input from "../form/input";
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
    display: "flex",
    marginTop: "25px",
    maxWidth: "410px",
    width: "100%",
  },

  input: {
    border: 0,
    WebkitAppearance: "none",
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

  static getErrorMessage() {
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
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submitRequest = this.submitRequest.bind(this);
    this.recaptchCallback = this.recaptchCallback.bind(this);
  }

  recaptchCallback() {
    this.setState({ loading: false });
  }

  handleInput(event) {
    const validEmail = event.target.validity.valid;
    this.setState({ disabled: !validEmail });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
      showCaptcha: true,
      email: event.currentTarget.elements["sailthru[email]"].value,
    });
  }

  submitRequest(reCaptchaResponse) {
    this.setState({ waiting: true });

    const formattedData = Newsletter.formatFormData({
      "sailthru[email_template]": "Welcome email",
      "sailthru[source]": "homepage",
      "sailthru[opt_in]": "on",
      "sailthru[email]": this.state.email,
      "g-recaptcha-response": reCaptchaResponse,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };

    axios.post("//www.lonelyplanet.com/newsletter", formattedData, config)
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
    });
  }

  render() {
    const {
      title,
      subtitle,
      placeholder,
      cta,
      confirmation,
      style: overrideStyles,
    } = this.props;

    return (
      <div
        className="Newsletter"
        style={[
          styles.wrap,
          overrideStyles && overrideStyles,
        ]}
      >
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
                Thanks for signing up! We just sent a confirmatinon email
                to <span style={styles.email}>{this.state.email}</span>
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
                action="//www.lonelyplanet.com/newsletter"
                onSubmit={this.handleSubmit}
              >
                <Input
                  type="email"
                  label="email"
                  placeholder={placeholder}
                  required
                  id="newsletter-email"
                  name="sailthru[email]"
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
              </form>
            </div>
          }

          {this.state.showCaptcha &&
            <div style={{ marginTop: "24px" }}>
              <Recaptcha
                sitekey="6LegewcUAAAAAG-5-ZTtWJ9M8cUyz7Mh0-uzNbC_"
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
  style: PropTypes.objectOf(PropTypes.object),
};

Newsletter.defaultProps = {
  title: "Sign up for our weekly newsletter",
  subtitle: `Get more travel inspiration, tips and
    exclusive offers sent straight to your inbox`,
  placeholder: "Enter email",
  cta: "Sign up",
  confirmation: {
    title: "Thank you for signing up!",
    text: "We’ll send a confirmation email to",
  },
};

export default radium(Newsletter);
