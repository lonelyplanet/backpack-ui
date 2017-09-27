import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import propTypes from "../../utils/propTypes";
import Input from "../input";

const styles = Object.assign({}, Input.styles, {
  resize: "vertical",
});

class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: Input.height,
      hideOverflow: true,
    };

    this.onInput = this.onInput.bind(this);
    this.disableEnterKey = this.disableEnterKey.bind(this);
    this.autoGrow = this.autoGrow.bind(this);
  }

  componentDidMount() {
    if (this.props.autofocus) {
      this.textarea.focus();
    }

    if (this.props.autogrow) {
      this.autoGrow();
      document.addEventListener("keydown", this.disableEnterKey);
    }
  }

  shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line class-methods-use-this
    return nextState.height !== nextState.maxHeight;
  }

  componentWillUnmount() {
    if (this.props.autofocus) {
      this.textarea.blur();
    }

    if (this.props.autogrow) {
      document.removeEventListener("keydown", this.disableEnterKey);
    }
  }

  onInput() {
    if (this.props.onInput && typeof this.props.onInput === "function") {
      this.props.onInput();
    }

    if (this.props.autogrow) {
      this.autoGrow();
    }
  }

  disableEnterKey(event) {
    const hasFocus = (this.textarea === document.activeElement) || false;

    if (hasFocus && event.keyCode === 13) {
      event.preventDefault();
    }
  }

  autoGrow() {
    const maxHeight = (this.props.maxLines * Input.lineHeight) + Input.height;

    this.textarea.style.height = Input.styles.height;

    this.setState({
      height: Math.min(this.textarea.scrollHeight, maxHeight),
      hideOverflow: Math.min(this.textarea.scrollHeight, maxHeight) < maxHeight,
    }, () => {
      this.textarea.style.height = `${this.state.height}px`;
      this.textarea.style.overflow = this.state.hideOverflow ? "hidden" : null;
    });
  }

  render() {
    const props = Object.assign({}, this.props);

    delete props.autogrow;
    delete props.autofocus;
    delete props.maxLines;

    return (
      <textarea
        {...props}
        ref={node => { this.textarea = node; }}
        onInput={this.onInput}
        style={[
          styles,
          !this.props.autogrow && {
            height: "auto",
          },
          this.props.autogrow && {
            overflow: "hidden",
            resize: "none",
          },
          this.props.style,
        ]}
      />
    );
  }
}

Textarea.propTypes = {
  autogrow: PropTypes.bool,
  autofocus: PropTypes.bool,
  maxLines: PropTypes.number,
  onInput: PropTypes.func,
  style: propTypes.style,
};

Textarea.defaultProps = {
  autogrow: false,
  autofocus: false,
  maxLines: 3,
  onInput: null,
  style: null,
};

export default radium(Textarea);
