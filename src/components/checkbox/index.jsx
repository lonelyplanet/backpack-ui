import React, { Component, PropTypes } from "react";
import radium from "radium";
import CheckboxComponent from "./checkboxComponent";

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps({ checked }) {
    this.setState({
      checked,
    });
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

  render() {
    return (
      <CheckboxComponent {...this.props} checked={this.state.checked} onClick={this.onClick} />
    );
  }
}

export default radium(Checkbox);
