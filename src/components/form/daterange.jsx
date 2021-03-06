import React from "react";
import moment from "moment";
import radium, { Style } from "radium";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import DateRangePicker from "react-dates/lib/components/DateRangePicker";
import { START_DATE, END_DATE } from "react-dates/constants";
import omit from "lodash/omit";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { rgba } from "../../utils/color";

const styles = {
  dateRangeWrapper: {
    position: "relative",
    width: "100%",
    zIndex: (zIndex.default + 4),
  },

  startEndDate: {
    backgroundColor: colors.linkPrimary,
    color: colors.textOverlay,
    position: "relative",
  },

  daySpan: {
    backgroundColor: "#eaf2f8",
    color: colors.textSecondary,
    position: "relative",
  },

  firstLastSelectedSpan: {
    position: "relative",
  },
};

class DateRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.focusedInput,
    };

    this.initialVisibleMonth = this.initialVisibleMonth.bind(this);
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

  initialVisibleMonth() {
    const { startDate } = this.props;
    if (startDate) {
      return startDate;
    }

    const isTodayLastDayOfMonth = moment() === moment().endOf("month");
    const nextMonth = moment().add(1, "months");
    const thisMonth = moment();

    return isTodayLastDayOfMonth ? nextMonth : thisMonth;
  }

  isOutsideRange(date) {
    const { startDate, lastSelectableDate } = this.props;
    const isPastDate = date < moment();

    return isPastDate || date.isAfter(lastSelectableDate) || (
      this.state.focusedInput === END_DATE &&
      date.diff(startDate, "days") > 30
    );
  }

  render() {
    const { noBorder, withFullScreenPortal, soldOut } = this.props;
    const { focusedInput } = this.state;
    // not all props should be passed to DateRangePicker
    const pickerProps = omit(this.props, [
      "id",
      "lastSelectableDate",
      "noBorder",
      "soldOut",
    ]);

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
              borderColor: soldOut ? colors.accentRed : colors.borderPrimary,
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
              color: colors.textPrimary,
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
              backgroundColor: colors.bgPrimary,
              color: colors.linkPrimary,
            },

            ".DayPickerKeyboardShortcuts__show--bottom-right": {
              borderRightColor: colors.linkPrimary,
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
            backgroundColor: colors.bgPrimary,
            boxShadow: `0 ${39 / 14}em ${54 / 14}em ${rgba(colors.bgOverlay, 0.16)},
              0 0 0 1px ${rgba(colors.bgOverlay, 0.02)}`,

            ".DayPicker--horizontal": {
              borderRadius: 0,
              boxShadow: "none",
            },

            ".DateInput--open-down.DateInput--with-caret::before": {
              borderBottomColor: "transparent",
            },

            ".DayPicker__week-header": {
              color: colors.textPrimary,
              fontWeight: 600,
            },

            ".DayPicker__nav--prev, .DayPicker__nav--next": {
              border: 0,
            },

            ".DayPickerNavigation--horizontal .DayPickerNavigation__prev, .DayPickerNavigation--horizontal .DayPickerNavigation__next": {
              borderRadius: 0,
            },

            ".CalendarMonth__caption strong": {
              color: colors.textPrimary,
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

        <DateRangePicker
          {...pickerProps}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          withFullScreenPortal={withFullScreenPortal}
          displayFormat="ddd, MMM D"
          isOutsideRange={this.isOutsideRange}
          initialVisibleMonth={this.initialVisibleMonth}
          showClearDates
        />
      </div>
    );
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

  focusedInput: PropTypes.oneOf([START_DATE, END_DATE]),

  onFocusChange: PropTypes.func,

  /**
   * The start date as a moment object
   */
  startDate: momentPropTypes.momentObj,

  /**
   * Puts a red border around the input
   */
  soldOut: PropTypes.bool,

  /**
   * The last selectable date on the calendar as a moment object
   */
  lastSelectableDate: momentPropTypes.momentObj,
};

DateRange.defaultProps = {
  noBorder: false,

  withFullScreenPortal: false,

  focusedInput: null,

  soldOut: false,

  lastSelectableDate: null,

  onDatesChange: () => {},
};

export default radium(DateRange);

export const DeveloperNote = () => (
  /**
   * A developer-facing note that is being written as a component
   * for inclusion in storybook, which I figure gets more eyes than the readme.
   */
  <div style={{ margin: "32px" }}>
    <em>Note to developers:</em>
    <small style={{ display: "block" }}>
      This component uses <a href="https://github.com/airbnb/react-dates">Airbnb's "react-dates" package/component</a>,
      which requires some one-time global setup in order to properly load its styles.
      You'll need to
      <ul>
        <li><a href="https://github.com/airbnb/react-dates#install-dependencies">install it as a dependency</a>,</li>
        <li><a href="https://github.com/airbnb/react-dates#initialize">initialize the package</a>,</li>
        <li>and then <a href="https://github.com/airbnb/react-dates#webpack">include its styles</a>.</li>
      </ul>
    </small>
  </div>
);
