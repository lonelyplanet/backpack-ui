/** @flow */
import React from "react";
import Validate from "react-validate-form";
import PropTypes from "prop-types";

import colors from "../../styles/colors";
import { emailValidation } from "../../utils/validations";
import Input from "../form/input";
import Button from "../button";
import ErrorMessages from "../form/errorMessages";

const styles = {
  container: {
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: "23px",
  },
  input: {
    borderBottom: `1px solid ${colors.borderPrimary}`,
  },
};

class LegacyForm extends React.Component {
  static setIdentifierType(val) {
    return emailValidation.test(val) ? "email" : "username";
  }

  constructor(props) {
    super(props);
    this.state = {
      identifierValue: "",
      identifierType: "username",
      passwordValue: "",
      showErrors: false,
      valid: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, type) {
    this.setState({
      [`${type}Value`]: e.target.value,
      identifierType: type === "identifier" ? LegacyForm.setIdentifierType(e.target.value) : this.state.identifierType,
    });
  }

  render() {
    const { qaHook } = this.props;

    return (
      <div style={styles.container}>
        <Validate>
          {({ validate, errorMessages }) => (
            <form
              data-qa={qaHook ? "legacy-login-form" : null}
              action={this.props.authLink}
              ref={(node) => {
                this.form = node;
              }}
              method="post"
            >
              <div style={styles.inputContainer}>
                <input type="hidden" name="user_identifier_type" value={this.state.identifierType} />
                <Input
                  autoFocus
                  theme="float"
                  type="text"
                  name="user_identifier"
                  required
                  qaHook={qaHook}
                  customStyles={styles.input}
                  error={errorMessages.user_identifier && errorMessages.user_identifier.length > 0}
                  placeholder="Email or username"
                  onChange={(e) => {
                    this.handleChange(e, "identifier");
                  }}
                  onBlur={validate}
                  value={this.state.identifierValue}
                />

                <Input
                  theme="float"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  qaHook={qaHook}
                  customStyles={styles.input}
                  error={errorMessages.password && errorMessages.password.length > 0}
                  onChange={(e) => {
                    this.handleChange(e, "password");
                  }}
                  onBlur={validate}
                  value={this.state.passwordValue}
                />
                {
                  errorMessages.user_identifier &&
                  errorMessages.user_identifier.length > 0 &&
                  <ErrorMessages qaHook={qaHook} messages={["Username/Email is required"]} />
                }
                {
                  errorMessages.password &&
                  errorMessages.password.length > 0 &&
                  <ErrorMessages qaHook={qaHook} messages={errorMessages.password} />
                }
              </div>
              <Button
                rounded
                qaHook={qaHook}
              >
                Submit
              </Button>
            </form>
          )}
        </Validate>
      </div>
    );
  }
}

LegacyForm.propTypes = {
  authLink: PropTypes.string.isRequired,
  qaHook: PropTypes.bool,
};

LegacyForm.defaultProps = {
  qaHook: false,
};

export default LegacyForm;
