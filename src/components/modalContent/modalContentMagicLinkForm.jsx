import React, { Component } from "react";
import PropTypes from "prop-types";
import Validate from "react-validate-form";
import ErrorMessages from "../form/errorMessages";
import Input from "../form/input";
import Button from "../button";
import color from "../../styles/colors";

const styles = {
  inputContainer: {
    marginBottom: "48px",
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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit() {
    this.props.onSubmit(this.state.value);
  }

  handleChange(e, errorCount) {
    this.setState({
      value: e.target.value,
      valid: errorCount === 0,
    });
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Validate>
          {({ validate, errorMessages, errorCount }) => (
            <div>
              <div style={styles.inputContainer}>
                <Input
                  theme="float"
                  type="email"
                  name="email"
                  customStyles={styles.input}
                  required
                  placeholder="example@expample.com"
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
                {errorMessages.email && errorMessages.email.length > 0 &&
                  <ErrorMessages
                    messages={errorMessages.email}
                  />
                }
              </div>
              <Button
                onClick={this.handleSubmit}
                disabled={!this.state.valid}
                rounded
              >
                Next
              </Button>
            </div>
          )}
        </Validate>
      </div>
    );
  }
}

MagicLinkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MagicLinkForm;
