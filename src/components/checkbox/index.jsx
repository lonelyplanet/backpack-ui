import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import CheckboxComponent from "./checkboxComponent";
import keyCode from "../../utils/keyCode";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.onClick = this.onClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    if (typeof document !== "undefined") {
      document.addEventListener("keydown", this.handleKeydown);
    }
  }

  componentWillReceiveProps({ checked }) {
    this.setState({
      checked,
    });
  }

  componentWillUnmount() {
    if (typeof document !== "undefined") {
      document.removeEventListener("keydown", this.handleKeydown);
    }
  }

  onClick(event) {
    this.setState({
      checked: !this.state.checked,
    });

    if (this.props.onClick) {
      this.props.onClick({
        value: event.currentTarget.value,
        name: event.currentTarget.name,
        checked: !this.state.checked,
      });
    }

    event.preventDefault();
  }

  handleKeydown(event) {
    const hasFocus = (typeof document !== "undefined" && this.checkbox === document.activeElement) || false;

    if (hasFocus && event.keyCode === keyCode.spacebar) {
      event.preventDefault();

      this.setState({
        checked: !this.state.checked,
      });
    }
  }

  render() {
    return (
      <CheckboxComponent
        {...this.props}
        checked={this.state.checked}
        onClick={this.onClick}
        innerRef={node => (this.checkbox = node)}
      />
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default radium(Checkbox);
