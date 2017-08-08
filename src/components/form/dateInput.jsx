import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import moment from "moment";
import TetherComponent from "react-tether";
import { zIndex } from "../../../settings.json";
import Select from "./select";
import styles from "./styles";
import Calendar from "../calendar";

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCalendarOpen: false,
      startDate: props.startDate,
      endDate: props.endDate,
    };

    this.timeOptionPresets = {
      default: [
        "12:00 AM",
        "1:00 AM",
        "2:00 AM",
        "3:00 AM",
        "4:00 AM",
        "5:00 AM",
        "6:00 AM",
        "7:00 AM",
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM",
        "10:00 PM",
        "11:00 PM",
      ],
      openTable: [
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
        "9:30 PM",
        "10:00 PM",
        "10:30 PM",
        "11:00 PM",
        "11:30 PM",
      ],
    };

    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.calendarOnChange = this.calendarOnChange.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateRangeValues = this.updateRangeValues.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.startRangeOnClick = this.startRangeOnClick.bind(this);
    this.endRangeOnClick = this.endRangeOnClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeydown);
  }

  openCalendar() {
    if (!this.state.isCalendarOpen) {
      this.setState({
        isCalendarOpen: true,
      });
    }
  }

  closeCalendar() {
    if (this.state.isCalendarOpen) {
      this.setState({
        isCalendarOpen: false,
      });
    }
  }

  updateInputValue(date) {
    this.setState({
      isCalendarOpen: false,
      startDate: date,
    });
  }

  updateRangeValues(newDates) {
    const {
      clicked,
      startDate,
      endDate,
    } = this.state;
    const fromDateOpen = clicked === "start";
    const toDateOpen = clicked === "end";

    if (fromDateOpen) {
      if (newDates.startDate > endDate) {
        this.setState({
          startDate: newDates.startDate,
          endDate: newDates.endDate,
        });
      } else {
        this.setState({
          startDate: newDates.startDate,
        });
      }

      this.inputEnd.focus();
    }

    if (toDateOpen) {
      if (startDate > newDates.endDate) {
        this.setState({
          startDate: newDates.startDate,
          endDate: newDates.endDate,
        });
      } else {
        this.setState({
          endDate: newDates.endDate,
        });
      }
    }
  }

  calendarOnChange(date) {
    if (!this.props.range) {
      this.updateInputValue(date);
    }

    if (this.props.range) {
      this.updateRangeValues(date);
    }

    if (this.props.onClose) {
      this.props.onClose({
        startDate: date.startDate,
        endDate: date.endDate,
      });
    }
  }

  handleClickOutside(event) {
    const { isCalendarOpen } = this.state;
    const input = this.input;
    const calendar = this.calendar;

    if (input.contains(event.target)) {
      return;
    } else if (calendar && !calendar.contains(event.target) && isCalendarOpen) {
      this.closeCalendar();
    }
  }

  handleKeydown(event) {
    const { isCalendarOpen } = this.state;

    if (event.keyCode === 27 && isCalendarOpen) {
      this.closeCalendar();
    }
  }

  startRangeOnClick() {
    const { clicked } = this.state;

    this.openCalendar();

    if (clicked !== "start") {
      this.setState({
        clicked: "start",
      });
    }
  }

  endRangeOnClick() {
    const { clicked } = this.state;

    this.openCalendar();

    if (clicked !== "end") {
      this.setState({
        clicked: "end",
      });
    }
  }

  render() {
    const {
      id,
      label,
      name,
      format,
      placeholder,
      required,
      size,
      theme,
      fill,
      noBorder,
      range,
      time,
      timeOptions,
      defaultTime,
    } = this.props;

    const {
      isCalendarOpen,
      startDate,
      endDate,
    } = this.state;

    const style = [
      styles.base,
      styles.element.input.base,
      styles.element.dateInput.base,
    ];

    if (size) {
      style.push(styles.size[size]);
      style.push(styles.element.input.size[size]);
    }

    if (theme) {
      style.push(styles.theme[theme]);
      style.push(styles.element.input.theme[theme]);
      style.push(styles.element.dateInput.theme[theme]);
    }

    if (fill) {
      style.push(styles.fill);
    }

    if (noBorder) {
      style.push(styles.noBorder);
    }

    if (range || time) {
      style.push({
        float: "left",
        width: "50%",
      });
    }

    const tetherComponentStyles = {
      position: "relative",
      zIndex: zIndex.modal,
    };

    return (
      <TetherComponent
        className="DateInput-calendar"
        style={tetherComponentStyles}
        attachment="top left"
        targetAttachment="bottom left"
        constraints={[{
          to: "window",
          attachment: "together",
        }]}
      >
        <div ref={node => { this.input = node; }}>
          {(!range && !time) &&
            <input
              id={id}
              name={name || id}
              style={[style]}
              value={startDate.format(format)}
              onClick={this.openCalendar}
              onFocus={this.openCalendar}
              onBlur={this.closeCalendar}
              placeholder={typeof placeholder === "object" ? placeholder[0] : placeholder}
              required={required}
              aria-label={typeof label === "object" ? label[0] : label}
              title={typeof label === "object" ? label[0] : label}
              readOnly
            />
          }

          {((range && time) || (!range && time)) &&
            <div style={{ overflow: "hidden" }}>
              <input
                id={`${id}-date`}
                name={`${name || id}-date`}
                style={[style]}
                value={startDate.format(format)}
                onClick={this.openCalendar}
                onFocus={this.openCalendar}
                onBlur={this.closeCalendar}
                placeholder={typeof placeholder === "object" ? placeholder[0] : placeholder}
                required={required}
                aria-label={typeof label === "object" ? label[0] : label}
                title={typeof label === "object" ? label[0] : label}
                readOnly
              />

              <Select
                id={`${id}-time`}
                defaultValue={defaultTime}
                options={typeof timeOptions === "string" ?
                  this.timeOptionPresets[timeOptions] :
                  timeOptions
                }
                size={size}
                theme={theme}
                label={typeof label === "object" ? label[1] : label}
                style={{
                  borderLeft: 0,
                  float: "left",
                  width: "50%",
                }}
                required
              />
            </div>
          }

          {(range && !time) &&
            <div style={{ overflow: "hidden" }}>
              <input
                id={`${id}-start`}
                name={`${name || id}-start`}
                style={[
                  style,
                  noBorder && {
                    width: "calc(50% - 1px)",
                  },
                ]}
                value={startDate.format(format)}
                onClick={this.startRangeOnClick}
                onFocus={this.startRangeOnClick}
                placeholder={typeof placeholder === "object" ? placeholder[0] : placeholder}
                required={required}
                aria-label={typeof label === "object" ? label[0] : label}
                title={typeof label === "object" ? label[0] : label}
                ref={node => { this.inputStart = node; }}
                key="inputStart"
                readOnly
              />

              <input
                id={`${id}-end`}
                name={`${name || id}-end`}
                style={[
                  style, { borderLeft: 0 },
                  noBorder && {
                    float: "right",
                    width: "calc(50% - 1px)",
                  },
                ]}
                value={endDate.format(format)}
                onClick={this.endRangeOnClick}
                onFocus={this.endRangeOnClick}
                placeholder={typeof placeholder === "object" ? placeholder[1] : placeholder}
                required={required}
                aria-label={typeof label === "object" ? label[1] : label}
                title={typeof label === "object" ? label[1] : label}
                ref={node => { this.inputEnd = node; }}
                key="inputEnd"
                readOnly
              />
            </div>
          }
        </div>

        {isCalendarOpen &&
          <div ref={node => { this.calendar = node; }}>
            <Calendar
              startDate={startDate}
              endDate={endDate}
              format={format}
              minDate={moment()}
              onChange={this.calendarOnChange}
              useRange={range}
            />
          </div>
        }
      </TetherComponent>
    );
  }
}

DateInput.propTypes = {
  /**
   * ID of the input
   */
  id: PropTypes.string.isRequired,

  /**
   * Label for the input; will not create a `label` element but instead add
   * `title` and `aria-label` attributes; this is a design decision to not
   * show labels
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,

  /**
   * Name of the input
   */
  name: PropTypes.string,

  /**
   * Start date value
   */
  startDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // Moment.js object
    PropTypes.func,
  ]),

  /**
   * End date value; range only
   */
  endDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // Moment.js object
    PropTypes.func,
  ]),

  /**
   * Moment.js date format
   */
  format: PropTypes.string,

  /**
   * Placeholder text for the input
   */
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),

  /**
   * Whether or not the input is required
   */
  required: PropTypes.bool,

  /**
   * Size of the input; sizes are defined in styles.js
   */
  size: PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  /**
   * Theme of the input; themes are defined in styles.js
   */
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

  /**
   * Remove border
   */
  noBorder: PropTypes.bool,

  /**
   * Whether or not to use the range calendar
   */
  range: PropTypes.bool,

  /**
   * Whether or not to show a "time" drop down
   */
  time: PropTypes.bool,

  /**
   * An array of time options or a keyword to use a preset
   */
  timeOptions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf([
      "default",
      "openTable",
    ]),
  ]),

  /**
   * A string to set the default value (time)
   */
  defaultTime: PropTypes.string,

  onClose: PropTypes.func,
};

DateInput.defaultProps = {
  id: "",

  label: "",

  name: "",

  startDate: moment(),

  endDate: moment().add(1, "week"),

  format: "M/D/YYYY",

  placeholder: "",

  required: false,

  size: "medium",

  theme: "base",

  fill: false,

  noBorder: false,

  range: false,

  time: false,

  timeOptions: "default",

  defaultTime: "7:00 PM",
};

DateInput.styles = styles;

export default radium(DateInput);
