import React, { Component } from "react";
import PropTypes from "prop-types";
import Validate from "react-validate-form";
import ErrorMessages from "../form/errorMessages";
import Input from "../form/input";
import Button from "../button";
import color from "../../styles/colors";

const styles = {
  container: {
    width: "100%",
    maxWidth: "295px",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: "24px",
  },
  input: {
    borderBottom: `1px solid ${color.borderPrimary}`,
  },
};

class MagicLinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      valid: false,
      showErrors: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    if (!this.state.valid) {
      return this.setState({
        showErrors: true,
      });
    }

    return this.props.onSubmit(this.state.value);
  }

  handleChange(e, errorCount) {
    this.setState({
      value: e.target.value,
      valid: errorCount === 0,
    });
  }

  render() {
    return (
      <Validate>
        {({ validate, errorMessages, errorCount }) => (
          <div style={styles.container}>
            <div style={styles.inputContainer}>
              <Input
                autoFocus
                theme="float"
                type="email"
                name="email"
                customStyles={styles.input}
                required
                placeholder="Email"
                onChange={(e) => {
                  this.handleChange(e, errorCount);
                  validate(e);
                }}
                onBlur={(e) => {
                  this.handleChange(e, errorCount);
                  validate(e);
                }}
                value={this.state.value}
              />
              {this.state.showErrors && errorMessages.email && errorMessages.email.length > 0 &&
                <ErrorMessages
                  messages={errorMessages.email}
                />
              }
              {this.props.disclaimer}
            </div>
            <Button
              onClick={this.handleSubmit}
              rounded
              disabled={!this.state.valid}
            >
              Email me a link to sign in
            </Button>
          </div>
        )}
      </Validate>
    );
  }
}

MagicLinkForm.propTypes = {
  disclaimer: PropTypes.element.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MagicLinkForm;
