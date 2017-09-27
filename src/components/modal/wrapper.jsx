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
    this.handleNavigateAway = this.handleNavigateAway.bind(this);
  }

  componentDidMount() {
    window.onbeforeunload = this.handleNavigateAway;
  }

  componentWillUnmount() {
    this.handleNavigateAway();
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

  // eslint-disable-next-line class-methods-use-this
  handleNavigateAway() {
    noScroll.off();
  }

  render() {
    return this.props.children(this.state.open, this.toggleOpen);
  }
}

ModalWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ModalWrapper;
