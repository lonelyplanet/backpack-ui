import React, { Component } from "react";
import PropTypes from "prop-types";
import { Calendar as CalendarComponent, DateRange as DateRangeComponent } from "react-date-range";
import moment from "moment";
import radium, { Style } from "radium";
import { color, timing } from "../../../settings.json";
import { rgb } from "../../utils/color";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      useRange,
      startDate,
      endDate,
      minDate,
      maxDate,
      format,
      firstDayOfWeek,
      onInit,
      onChange,
      linkedCalendars,
      calendars,
      ranges,
    } = this.props;

    const icons = {
      chevron: encodeURIComponent(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${color.blue}"><path class="path1" d="M28.8 6.2l-12.8 12.8-12.8-12.8-3.2 3.2 16 16.4 16-16.4z"></path></svg>`),
    };

    const theme = {
      Calendar: {
        backgroundColor: color.white,
        borderRadius: 0,
        boxShadow: `0 ${39 / 14}em ${54 / 14}em rgba(${rgb(color.black)}, .16)`,
        color: "inherit",
        fontSize: "14px",
        padding: `${10 / 14}em`,
        // width: `${300 / 14}em`,
        width: "391px",
      },
      MonthAndYear: {
        color: color.blue,
        fontSize: "1em",
        fontWeight: 600,
        height: "auto",
        lineHeight: 1,
        padding: 0,
        textTransform: "uppercase",
      },
      DateRange: {
        backgroundColor: color.white,
        borderRadius: 0,
        display: "inline-block",
      },
      MonthButton: {
        backgroundColor: color.white,
        border: 0,
        borderRadius: 0,
        display: "inline-block",
        height: `${20 / 14}em`,
        lineHeight: 1,
        margin: 0,
        position: "relative",
        top: `${5 / 14}em`,
        width: `${20 / 14}em`,
      },
      MonthArrowPrev: {
        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.chevron}")`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${9 / 14}em`,
        borderRightColor: "transparent",
        borderStyle: "none",
        borderWidth: 0,
        display: "block",
        height: "100%",
        margin: 0,
        transform: "rotate(90deg) translateX(-1px)",
        width: "100%",
      },
      MonthArrowNext: {
        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.chevron}")`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${9 / 14}em`,
        borderLeftColor: "transparent",
        display: "block",
        height: "100%",
        margin: 0,
        transform: "rotate(-90deg)",
        width: "100%",
      },
      Weekday: {
        fontSize: "1em",
        fontWeight: 400,
        height: `${20 / 14}em`,
        lineHeight: `${20 / 14}em`,
        width: `${53 / 14}em`,
      },
      Day: {
        fontSize: "1em",
        height: `${53 / 14}em`,
        lineHeight: `${53 / 14}em`,
        transition: `background-color ${timing.fast},
          color ${timing.fast}`,
        width: `${53 / 14}em`,
      },
      DayToday: {
        color: color.red,
      },
      DaySelected: {
        backgroundColor: color.blue,
        color: color.white,
      },
      DayActive: {
        backgroundColor: color.blue,
        color: color.white,
        transform: "none",
      },
      DayInRange: {
        backgroundColor: "#eaf2f8",
        color: color.titleGray,
      },
      DayHover: {
        backgroundColor: color.white,
        color: color.blue,
      },
      DayPassive: {
        cursor: "default",
      },
    };

    const scopedStyles = {
      ".rdr-MonthAndYear": {
        borderBottom: `1px solid ${color.gray}`,
        marginBottom: `${22 / 14}em`,
        marginLeft: `${-10 / 14}em`,
        marginRight: `${-10 / 14}em`,
        paddingBottom: `${16 / 14}em`,
        paddingTop: `${20 / 14}em`,
      },

      ".rdr-MonthAndYear-innerWrapper > span": {
        display: "inline-block",
        width: `${130 / 14}em`,
      },

      ".rdr-MonthAndYear-divider": {
        color: color.white,
        display: "inline-block",
        width: `${3 / 14}em`,
      },

      ".rdr-MonthAndYear-button": {
        float: "none !important",
      },

      ".rdr-MonthAndYear-button > i": {
        borderWidth: "0 !important",
        margin: "0 !important",
      },

      ".rdr-WeekDays": {
        paddingBottom: `${11 / 14}em`,
        paddingTop: `${11 / 14}em`,
      },

      ".rdr-Day.is-inRange:hover": {
        backgroundColor: "#eaf2f8 !important",
        color: `${color.titleGray} !important`,
      },
    };

    return (
      <div className="Calendar">
        <Style
          scopeSelector=".rdr-Calendar"
          rules={scopedStyles}
        />

        {!useRange &&
          <CalendarComponent
            date={startDate}
            firstDayOfWeek={firstDayOfWeek}
            format={format}
            maxDate={maxDate}
            minDate={minDate}
            onChange={onChange}
            onInit={onInit}
            theme={theme}
          />
        }

        {useRange &&
          <DateRangeComponent
            calendars={calendars}
            startDate={startDate}
            endDate={endDate}
            firstDayOfWeek={firstDayOfWeek}
            format={format}
            linkedCalendars={linkedCalendars}
            maxDate={maxDate}
            minDate={minDate}
            onChange={onChange}
            onInit={onInit}
            ranges={ranges}
            theme={theme}
          />
        }
      </div>
    );
  }
}

Calendar.propTypes = {
  /**
   * Should the range-enabled calendar be used
   */
  useRange: PropTypes.bool,

  /**
   * Starting date for the calendar
   */
  startDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // Moment.js object
    PropTypes.func,
  ]),

  /**
   * Starting date for the calendar; range only
   */
  endDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // Moment.js object
    PropTypes.func,
  ]),

  /**
   * Min date for the calendar
   */
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // Moment.js object
    PropTypes.func,
  ]),

  /**
   * Max date for the calendar
   */
  maxDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // Moment.js object
    PropTypes.func,
  ]),

  /**
   * Moment.js date format
   */
  format: PropTypes.string,

  /**
   * Which day of the week is the start of the week
   */
  firstDayOfWeek: PropTypes.number,

  /**
   * Function to run when calendar initializes
   */
  onInit: PropTypes.func,

  /**
   * Function to run when date is changed
   */
  onChange: PropTypes.func,

  /**
   * Should multiple calendars change months together; range only
   */
  linkedCalendars: PropTypes.bool,

  /**
   * Number of calendars to show; range only
   */
  calendars: PropTypes.number,

  /**
   * Ranges to show; range only
   */
  ranges: PropTypes.shape({
    startDate: PropTypes.object, // Moment.js object
    endDate: PropTypes.object, // Moment.js object
  }),
};

Calendar.defaultProps = {
  useRange: false,
  startDate: moment(),
  endDate: moment().add(1, "week"),
  minDate: null,
  maxDate: null,
  format: "M/D/YYYY",
  firstDayOfWeek: moment.localeData().firstDayOfWeek(),
  onInit: null,
  onChange: null,
  linkedCalendars: false,
  calendars: 1,
  ranges: null,
};

export default radium(Calendar);
