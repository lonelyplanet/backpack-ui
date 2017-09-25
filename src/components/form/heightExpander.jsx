import React from "react";
import PropTypes from "prop-types";


class HeightExpander extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: props.baseHeight,
    };

    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    this.element = document.getElementById(this.props.idToFind);
    window.addEventListener("resize", this.updateHeight);
    this.updateHeight();
  }

  componentWillReceiveProps() {
    this.updateHeight();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight);
  }

  updateHeight() {
    this.setState({
      height: "1px",
    }, () => {
      this.setState({
        height: `${this.element.scrollHeight}px`,
      });
    });
  }

  render() {
    return this.props.children(this.updateHeight, this.state.height);
  }
}

HeightExpander.propTypes = {
  children: PropTypes.func.isRequired,
  baseHeight: PropTypes.string.isRequired,
  idToFind: PropTypes.string.isRequired,
};

HeightExpander.defaultProps = {
  baseHeight: "auto",
};

export default HeightExpander;
