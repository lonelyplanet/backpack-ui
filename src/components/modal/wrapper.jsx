import React from "react";
import PropTypes from "prop-types";
import noScroll from "no-scroll";

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    }, () => {
      if (this.state.open) {
        noScroll.on();
      } else {
        noScroll.off();
      }
    });
  }

  render() {
    return this.props.children(this.state.open, this.toggleOpen);
  }
}

ModalWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ModalWrapper;
