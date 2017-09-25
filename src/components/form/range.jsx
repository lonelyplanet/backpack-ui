import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Slider from "rc-slider";
import { color } from "../../../settings.json";
import { rgb } from "../../utils/color";
import createUnitLabel from "../../utils/createUnitLabel";

const styles = {
  container: {
    base: {
      height: "40px",
    },
  },
};

const scopedStyles = {
  ".rc-slider-handle": {
    border: 0,
    boxShadow: `0 1px 3px rgba(${rgb(color.black)}, .36)`,
    height: "22px",
    marginLeft: "-11px",
    marginTop: "-9px",
    width: "22px",
  },

  ".rc-slider-step": {
    height: "3px",
  },

  ".rc-slider-track": {
    backgroundColor: color.blue,
    height: "3px",
  },

  ".rc-slider-mark": {
    fontSize: "1.3rem",
    top: "2.4rem",
  },

  ".rc-slider-mark-text": {
    color: color.darkGray,
    lineHeight: 1,
    marginLeft: "0 !important",
    width: "50% !important",
  },

  ".rc-slider-mark-text:first-of-type": {
    left: "0 !important",
    textAlign: "left",
  },

  ".rc-slider-mark-text:last-of-type": {
    left: "auto !important",
    right: 0,
    textAlign: "right",
  },

  ".rc-slider-dot": {
    display: "none",
  },
};

class Range extends React.Component {
  static convertHoursToDays(hours) {
    const days = Math.ceil(hours / 24);

    return `${days} ${createUnitLabel(days, "day")}`;
  }

  static createTimeMarks(value) {
    return value >= 24 ?
      Range.convertHoursToDays(value) :
      `${value} ${createUnitLabel(value, "hour")}`;
  }

  constructor(props) {
    super(props);

    this.state = {
      values: [props.defaultValue[0], props.defaultValue[1]],
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.state.values) {
      this.setState({
        values: nextProps.defaultValue,
      });
    }
  }

  onChange(value) {
    this.setState({
      values: [value[0], value[1]],
    });
  }

  render() {
    const { onAfterChange, defaultValue, min, max, label, price, time } = this.props;

    const value = defaultValue.length === 2 ? defaultValue : [min, max];

    let marks;

    if (price) {
      marks = {
        [min]: `$${this.state.values[0]}`,
        [max]: `$${this.state.values[1]}`,
      };
    }

    if (time) {
      marks = {
        [min]: Range.createTimeMarks(this.state.values[0]),
        [max]: Range.createTimeMarks(this.state.values[1]),
      };
    }

    if (!price && !time) {
      marks = {
        [min]: this.state.values[0],
        [max]: this.state.values[1],
      };
    }

    return (
      <div
        className="Range"
        style={styles.container.base}
        aria-label={label}
        title={label}
      >
        <Style
          scopeSelector=".Range"
          rules={scopedStyles}
        />

        <Slider
          className="Range-slider"
          allowCross={false}
          defaultValue={value}
          value={this.state.values}
          onChange={this.onChange}
          onAfterChange={onAfterChange}
          min={min}
          max={max}
          marks={marks}
          tipFormatter={null}
          range
        />
      </div>
    );
  }
}

Range.propTypes = {
  /**
   * Method to run after slide values change, e.g., filter list
   */
  onAfterChange: PropTypes.func.isRequired,

  /**
   * Initial values for the slider
   */
  defaultValue: PropTypes.arrayOf(PropTypes.number).isRequired,

  /**
   * Minimum value for slider
   */
  min: PropTypes.number.isRequired,

  /**
   * Maximum value for slider
   */
  max: PropTypes.number.isRequired,

  /**
   * Text to describe the input
   */
  label: PropTypes.string.isRequired,

  /**
   * Is this a price slider? Format the marks with $
   */
  price: PropTypes.bool,

  /**
   * Is this a time slider? Format the marks with hours/days
   */
  time: PropTypes.bool,
};

Range.defaultProps = {
  onAfterChange: null,

  defaultValue: [],

  min: 0,

  max: 100,

  label: "",

  price: false,

  time: false,
};

export default radium(Range);
