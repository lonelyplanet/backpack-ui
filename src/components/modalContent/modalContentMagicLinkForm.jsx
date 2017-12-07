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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    return this.props.onSubmit(this.state.value);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
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
                  this.handleChange(e);
                  validate(e);
                }}
                onBlur={(e) => {
                  this.handleChange(e);
                  validate(e);
                }}
                value={this.state.value}
              />
              {errorMessages.email && errorMessages.email.length > 0 &&
                <ErrorMessages
                  messages={errorMessages.email}
                />
              }
              {this.props.disclaimer}
            </div>
            <Button
              onClick={this.handleSubmit}
              rounded
              disabled={errorCount !== 0}
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
