import React from "react";
import moment from "moment";
import radium, { Style } from "radium";
import PropTypes from "prop-types";
import DateRangePicker from "react-dates/lib/components/DateRangePicker";
import { END_DATE } from "react-dates/constants";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { darken, rgb } from "../../utils/color";

const styles = {
  dateRangeWrapper: {
    position: "relative",
    width: "100%",
    zIndex: (zIndex.default + 4),
  },

  startEndDate: {
    backgroundColor: colors.blue,
    color: colors.white,
    position: "relative",
  },

  daySpan: {
    backgroundColor: "#eaf2f8",
    color: colors.titleGray,
    position: "relative",
  },

  firstLastSelectedSpan: {
    position: "relative",
  },
};

class DateRange extends React.Component {
  static initialVisibleMonth() {
    const isTodayLastDayOfMonth = moment() === moment().endOf("month");
    const nextMonth = moment().add(1, "months");
    const thisMonth = moment();

    return isTodayLastDayOfMonth ? nextMonth : thisMonth;
  }

  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.focusedInput,
    };

    this.onFocusChange = this.onFocusChange.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      focusedInput: nextProps.focusedInput,
    });
  }

  onFocusChange(focusedInput) {
    if (this.props.onFocusChange) {
      this.props.onFocusChange(focusedInput);
    }

    this.setState({
      focusedInput,
    });
  }

  isOutsideRange(date) {
    if (
      this.state.focusedInput === END_DATE &&
      this.props.startDate &&
      date.diff(this.props.startDate, "days") > 30
    ) {
      return true;
    }

    return date < moment();
  }

  render() {
    const { noBorder, withFullScreenPortal, soldOut } = this.props;
    const { focusedInput } = this.state;

    /* eslint-disable */
    return (
      <div className="DateRangeWrapper" style={styles.dateRangeWrapper}>
        <Style
          scopeSelector=".DateRangeWrapper"
          rules={{
            ".DateRangePicker": {
              width: "100%",
            },

            ".DateRangePickerInput": noBorder ? {
              border: 0,
              position: "relative",
              width: "100%",
              zIndex: zIndex.modal + 1,
            } : {
                borderColor: soldOut ? colors.red : darken(colors.white, 17),
                position: "relative",
                transition: `border-color ${timing.fast} ease-in-out`,
                width: "100%",
                zIndex: zIndex.modal + 1,
              },

            ".DateRangePickerInput__arrow svg": {
              height: "20px",
              width: "20px",
            },

            ".DateRangePickerInput__clear-dates": {
              bottom: 0,
              margin: "auto 0",
              padding: "10px 20px",
              position: "absolute",
              right: 0,
              top: 0,
            },

            ".DateRangePickerInput__clear-dates--hover": {
              backgroundColor: "transparent",
              borderRadius: "none",
            },

            ".DateInput": {
              color: colors.darkGray,
              fontSize: "14px",
              padding: "18px 17px 16px",
              textAlign: "center",
              width: "40%",
            },

            ".DateInput__input": {
              cursor: "pointer",
            },

            ".DateInput__display-text": {
              fontSize: "1em",
              fontWeight: 400,
              padding: 0,
            },

            ".DateInput__display-text--focused": {
              backgroundColor: colors.white,
              color: colors.blue,
            },

            ".DayPickerKeyboardShortcuts__show--bottom-right": {
              borderRightColor: colors.blue,
            },
          }}
        />

        <Style
          scopeSelector=".DateRangePicker__tether-element"
          rules={{
            top: "-23px !important",
            zIndex: zIndex.modal + 1,
          }}
        />

        <Style
          scopeSelector=".DateRangePicker__picker"
          rules={{
            fontSize: "14px",
            zIndex: zIndex.modal,
            backgroundColor: colors.white,
            boxShadow: `0 ${39 / 14}em ${54 / 14}em rgba(${rgb(colors.black)}, .16),
              0 0 0 1px rgba(${rgb(colors.black)}, .02)`,

            ".DayPicker--horizontal": {
              borderRadius: 0,
              boxShadow: "none",
            },

            ".DateInput--open-down.DateInput--with-caret::before": {
              borderBottomColor: "transparent",
            },

            ".DayPicker__week-header": {
              color: colors.darkGray,
              fontWeight: 600,
            },

            ".DayPicker__nav--prev, .DayPicker__nav--next": {
              border: 0,
            },

            ".DayPickerNavigation--horizontal .DayPickerNavigation__prev, .DayPickerNavigation--horizontal .DayPickerNavigation__next": {
              borderRadius: 0,
            },

            ".CalendarMonth__caption strong": {
              color: colors.darkGray,
              fontWeight: 400,
            },

            ".CalendarDay, .CalendarDay--blocked, .CalendarDay--blocked-out-of-range": {
              border: 0,
            },

            ".CalendarDay--selected-span": styles.daySpan,

            ".CalendarDay--selected-start": styles.startEndDate,
            ".CalendarDay--selected-start.CalendarDay--hovered-span": styles.startEndDate,

            ".CalendarDay--selected-end": styles.startEndDate,

            ".CalendarDay--hovered": {
              border: 0,
              position: "relative",
            },

            ".CalendarDay--hovered-span, .CalendarDay--after-hovered-start": styles.daySpan,
          }}
        />
        <p>local</p>

        <DateRangePicker
          {...this.props}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          withFullScreenPortal={withFullScreenPortal}
          displayFormat="ddd, MMM D"
          isOutsideRange={this.isOutsideRange}
          initialVisibleMonth={() => DateRange.initialVisibleMonth()}
          showClearDates
        />
      </div>
    );
    /* eslint-enable */
  }
}

DateRange.propTypes = {
  /**
   * Remove border
   */
  noBorder: PropTypes.bool,

  /**
   * Should the component open with the full screen portal
   */
  withFullScreenPortal: PropTypes.bool,

  focusedInput: PropTypes.string,

  onFocusChange: PropTypes.func,

  startDate: PropTypes.string,

  /**
   * Puts a red border around the input
   */
  soldOut: PropTypes.bool,
};

DateRange.defaultProps = {
  noBorder: false,

  withFullScreenPortal: false,

  focusedInput: null,

  onFocusChange: "",

  soldOut: false,
};

export default radium(DateRange);
