/** @flow */
import React from "react";
import Validate from "react-validate-form";
import PropTypes from "prop-types";
import Input from "../form/input";
import Button from "../button";
import ErrorMessages from "../form/errorMessages";
import color from "../../styles/colors";

const styles = {
  container: {
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: "23px",
  },
  input: {
    borderBottom: `1px solid ${color.borderPrimary}`,
  },
};

class LegacyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifierValue: "",
      passwordValue: "",
      valid: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, type, errorCount) {
    this.setState({
      [`${type}Value`]: e.target.value,
      valid: errorCount === 0,
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Validate>
          {({ validate, errorMessages, errorCount }) => (
            <form action={this.props.authLink} method="post">
              <div style={styles.inputContainer}>
                <input type="hidden" name="user_identifier_type" value="email" />
                <Input
                  theme="float"
                  type="text"
                  name="user_identifier"
                  required
                  customStyles={styles.input}
                  error={errorMessages.username && errorMessages.username.length > 0}
                  placeholder="Email and/or username"
                  onChange={(e) => {
                    this.handleChange(e, "identifier", errorCount);
                    validate(e);
                  }}
                  onBlur={(e) => {
                    this.handleChange(e, "identifier", errorCount);
                    validate(e);
                  }}
                  value={this.state.identifierValue}
                />

                <Input
                  theme="float"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  customStyles={styles.input}
                  error={errorMessages.password && errorMessages.password.length > 0}
                  onChange={(e) => {
                    this.handleChange(e, "password", errorCount);
                    validate(e);
                  }}
                  onBlur={(e) => {
                    this.handleChange(e, "password", errorCount);
                    validate(e);
                  }}
                  value={this.state.passwordValue}
                />
                {errorMessages.username && errorMessages.username.length > 0 &&
                  <ErrorMessages messages={errorMessages.username} />
                }
                {errorMessages.password && errorMessages.password.length > 0 &&
                  <ErrorMessages messages={errorMessages.password} />
                }
              </div>
              <Button
                type="submit"
                disabled={!this.state.valid}
                rounded
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
};

export default LegacyForm;
