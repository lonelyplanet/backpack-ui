import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import styles from "./styles";
import Icon from "../icon";
import createQAHook from "../../utils/createQAHook";
import { validReactAttributes } from "../../utils/validReactAttributes";

/**
 * Component that replicates the HTML5 number input
 *
 * @usage
 * <NumberInput
 *   id="guests"
 *   min={0}
 *   max={10}
 *   value={2}
 * />
 */
class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.setValue = this.setValue.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  setValue() {
    return this.state.value ? parseInt(this.state.value, 10) : 0;
  }

  handleKeyDown(event) {
    const whitelistKeyCodes = [
      48, 49, 50, 51, 52, 53, 54, 55, 56, 57, // 0 - 9
      37, 39, // left arrow, right arrow
      8, 9, 46, // backspace, tab, delete
      91, 93, // command
      13, 17, 16, 18, // enter, ctrl, shift, alt
      27, // esc
    ];

    if (whitelistKeyCodes.indexOf(event.keyCode) === -1) {
      event.preventDefault();
    }

    if (event.keyCode === 38) {
      this.increment();
    }

    if (event.keyCode === 40) {
      this.decrement();
    }
  }

  handleChange(event) {
    let value;

    if (event.target.value) {
      value = parseInt(event.target.value, 10);
    } else {
      value = "";
    }

    this.setState({
      value,
    });
  }

  increment(event) {
    const value = this.setValue();

    if (!value) {
      this.setState({
        value: this.props.min,
      });
    }

    if (value !== this.props.max && this.state.value < this.props.max) {
      this.setState({
        value: (value + 1),
      });
    }

    if (this.state.value < this.props.min) {
      this.setState({
        value: this.props.min,
      });
    }

    if (event) {
      event.preventDefault();
    }
  }

  decrement(event) {
    const value = this.setValue();

    if (!value) {
      this.setState({
        value: this.props.min,
      });
    }

    if (value !== this.props.min && this.state.value > this.props.min) {
      this.setState({
        value: (value - 1),
      });
    }

    if (this.state.value > this.props.max) {
      this.setState({
        value: this.props.max,
      });
    }

    if (event) {
      event.preventDefault();
    }
  }

  render() {
    const {
      id,
      name,
      min,
      max,
      placeholder,
      required,
      size,
      theme,
      fill,
    } = this.props;

    const style = [styles.base];

    style.push(styles.element.input.base);

    if (size) {
      style.push(styles.size[size]);
      style.push(styles.element.input.size[size]);
    }

    if (theme) {
      style.push(styles.theme[theme]);
      style.push(styles.element.input.theme[theme]);
    }

    if (fill) {
      style.push(styles.fill);
    }

    const props = {
      style,
      type: "text",
      id,
      name: name || id,
    };

    props.placeholder = placeholder || null;
    props.required = required || null;
    props.min = min || null;
    props.max = max || null;

    const sanitizedProps = validReactAttributes(props);

    return (
      <div
        className="NumberInput"
        style={styles.element.numberInput.container.base}
      >
        <input
          {...sanitizedProps}
          qa-hook={createQAHook(this.state.value, "number", "input")}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />

        <button
          style={[
            styles.element.numberInput.button.base,
            styles.element.numberInput.button.size[size],
            styles.element.numberInput.button.plus.size[size],
          ]}
          qa-hook={createQAHook("increment", "plus", "btn")}
          onClick={this.increment}
          type="button"
          key="plus"
        >
          <Icon.Plus />
        </button>

        <button
          style={[
            styles.element.numberInput.button.base,
            styles.element.numberInput.button.size[size],
            styles.element.numberInput.button.minus,
          ]}
          qa-hook={createQAHook("decrement", "minus", "btn")}
          onClick={this.decrement}
          type="button"
          key="minus"
        >
          <Icon.Minus />
        </button>
      </div>
    );
  }
}

NumberInput.propTypes = {
  id: PropTypes.string.isRequired,

  name: PropTypes.string,

  value: PropTypes.number,

  min: PropTypes.number,

  max: PropTypes.number,

  placeholder: PropTypes.string,

  required: PropTypes.bool,

  size: PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  theme: PropTypes.oneOf([
    "base",
    "light",
    "dark",
    "inputGroup",
  ]),

  /**
   * Fills the width of the parent
   */
  fill: PropTypes.bool,
};

NumberInput.defaultProps = {
  id: "",

  name: "",

  value: null,

  min: 0,

  max: 100,

  placeholder: "",

  required: false,

  size: "medium",

  theme: "base",

  fill: false,
};

NumberInput.styles = styles;

export default radium(NumberInput);
