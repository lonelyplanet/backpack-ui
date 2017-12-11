import React from "react";
import PropTypes from "prop-types";
import noScroll from "no-scroll";

class ModalWrapper extends React.Component {
  static scrollTo = (x = 0, y = 0) => {
    if (typeof window !== "undefined") {
      window.scrollTo(x, y);
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      scrollPosition: 0,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleNavigateAway = this.handleNavigateAway.bind(this);
  }

  componentDidMount() {
    window.onbeforeunload = this.handleNavigateAway;

    if (typeof window !== "undefined" && window.location.hash === this.props.hash) {
      this.toggleOpen();
    }
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
        ModalWrapper.scrollTo(0, 0);
        this.setState({
          scrollPosition: parseInt(document.documentElement.style.top.replace("px", ""), 10) * -1,
        });
      } else {
        noScroll.off();
        ModalWrapper.scrollTo(0, this.state.scrollPosition);

        if (typeof window !== "undefined" && window.location.hash === this.props.hash && history.pushState) {
          history.pushState("", document.title, window.location.pathname);
        }
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
  hash: PropTypes.string,
};

ModalWrapper.defaultProps = {
  hash: "",
};

export default ModalWrapper;
