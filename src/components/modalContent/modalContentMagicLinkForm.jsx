import React, { Component } from "react";
import PropTypes from "prop-types";
import Validate from "react-validate-form";
import Input from "../form/input";
import Button from "../button";

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
          {({ validate, errorCount }) => (
            <div>
              <Input
                theme="float"
                type="email"
                name="email"
                required
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
