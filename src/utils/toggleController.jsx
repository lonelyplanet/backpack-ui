import React, { PropTypes } from "react";

class ToggleController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active || false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return this.props.children(this.state.active, this.toggle);
  }
}

ToggleController.propTypes = {
  children: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default ToggleController;
