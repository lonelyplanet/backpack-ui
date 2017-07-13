import React, { Component } from "react";
import PropTypes from "prop-types";
import clickOutside from "./";

class ExampleHoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isOpened: true,
    });
  }

  handleClickOutside() {
    this.setState({
      isOpened: false,
    });
  }

  render() {
    return (
      <div ref={this.props.innerRef}>
        <button onClick={this.onClick}>
          Toggle
        </button>

        {this.state.isOpened &&
          <div>
            Menu content
          </div>
        }
      </div>
    );
  }
}

ExampleHoc.propTypes = {
  innerRef: PropTypes.func.isRequired,
};

export default clickOutside(ExampleHoc);
