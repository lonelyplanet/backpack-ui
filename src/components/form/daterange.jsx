import React from "react";
import assign from "object-assign";
import { color, zIndex } from "rizzo-next/sass/settings.json";
import radium, { Style } from "radium";
import DateRangePicker from "react-dates/lib/components/DateRangePicker";
import { darken, rgb } from "../../utils/color";

const styles = {
  dateRangeWrapper: {
    position: "relative",
    width: "100%",
    zIndex: (zIndex.default + 1),
  },

  startEndDate: {
    backgroundColor: color.blue,
    borderRadius: "100%",
    position: "relative",
  },

  colorFill: {
    backgroundColor: "#eaf2f8",
    content: "",
    display: "block",
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: zIndex.below,
  },

  daySpan: {
    backgroundColor: "#eaf2f8",
    color: color.titleGray,
    position: "relative",
  },

  startEndDateHovered: {
    backgroundColor: color.blue,
    color: color.white,
  },

  firstLastSelectedSpan: {
    position: "relative",
  },
};

const startDateColorFillStyles = assign({}, styles.colorFill,
  { left: "-50%", width: "50%" });
const endDateColorFillStyles = assign({}, styles.colorFill,
  { left: 0, width: "50%" });
const firstSelectedSpanColorFillStyles = assign({}, styles.colorFill,
  { left: "-23px", width: "23px" });
const lastSelectedSpanColorFillStyles = assign({}, styles.colorFill,
  { right: "-23px", width: "23px" });
const lastSelectedStartColorFillStyles = assign({}, styles.colorFill,
  { left: "50%", width: "calc(100% + 4px)" });


class DateRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.focusedInput,
    };

    this.onFocusChange = this.onFocusChange.bind(this);
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

  render() {
    const { noBorder, withFullScreenPortal } = this.props;
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
              width: "100%",
            } : {
              borderColor: darken(color.white, 17),
              width: "100%",
            },

            ".DateRangePickerInput__arrow": {
              display: "none",
            },

            ".DateInput": {
              color: color.darkGray,
              fontSize: "16px",
              padding: `${20 / 16}em 1em ${17 / 16}em ${20 / 16}em`,
              width: "50%",
            },

            ".DateInput:first-child": noBorder ? {
              borderRight: "2px solid #e9f2f8",
            } : {
              borderRight: `1px solid ${darken(color.white, 17)}`,
            },

            ".DateInput__display-text": {
              fontSize: "1em",
              fontWeight: 400,
              padding: 0,
            },

            ".DateInput__display-text--focused": {
              backgroundColor: color.white,
              color: color.blue,
            },

            // Hide arrow shadow
            ".DateRangePicker__picker::before": {
              display: "none",
            },

            // Hide arrow
            ".DateRangePicker__picker::after": {
              display: "none",
            },

            ".DayPicker--horizontal": {
              borderRadius: 0,
              boxShadow: `0 ${39 / 14}em ${54 / 14}em rgba(${rgb(color.black)}, .16),
                0 0 0 1px rgba(${rgb(color.black)}, .02)`,
            },
          }}
        />

        <Style
          scopeSelector=".DateRangePicker__picker"
          rules={{
            fontSize: "14px",
            zIndex: zIndex.modal,

            ".DayPicker--horizontal svg": {
              fill: darken(color.white, 17),
            },

            ".DayPicker__week-header": {
              color: color.darkGray,
              fontWeight: 600,
            },

            ".DayPicker__nav--prev": {
              border: 0,
            },

            ".DayPicker__nav--next": {
              border: 0,
            },


            ".CalendarMonth__caption strong": {
              color: color.darkGray,
              fontWeight: 400,
            },

            ".CalendarMonth__day": {
              border: 0,
            },

            ".CalendarMonth__day--blocked-past-date": {
              border: 0,
            },

            ".CalendarMonth__day--selected-start": styles.startEndDate,
            ".CalendarMonth__day--selected-start + .CalendarMonth__day--hovered::before": startDateColorFillStyles,
            ".CalendarMonth__day--selected-start + .CalendarMonth__day--hovered-span::before": startDateColorFillStyles,
            ".CalendarMonth__day--selected-start + .CalendarMonth__day--selected-span::before": startDateColorFillStyles,

            ".CalendarMonth__day--selected-end": styles.startEndDate,
            ".CalendarMonth__day--selected-end::before": endDateColorFillStyles,

            ".CalendarMonth__day--selected-start + .CalendarMonth__day--selected-end::before": {
              backgroundColor: color.blue,
              left: "-50%",
              width: "100%",
            },

            ".CalendarMonth__day--selected-span": styles.daySpan,

            ".CalendarMonth__day--hovered": {
              border: 0,
              position: "relative",
            },

            ".CalendarMonth__day--hovered-span": styles.daySpan,

            ".CalendarMonth__day--selected-start.CalendarMonth__day--hovered": styles.startEndDateHovered,
            ".CalendarMonth__day--selected-start.CalendarMonth__day--hovered-span": styles.startEndDateHovered,

            ".CalendarMonth__day--selected-end.CalendarMonth__day--hovered": styles.startEndDateHovered,
            ".CalendarMonth__day--selected-end.CalendarMonth__day--hovered-span": styles.startEndDateHovered,

            "tr > .CalendarMonth__day--selected-span:first-of-type": styles.firstLastSelectedSpan,
            ".CalendarMonth[data-visible='true'] tr > .CalendarMonth__day--selected-span:first-of-type::after": firstSelectedSpanColorFillStyles,

            "tr > .CalendarMonth__day--selected-span:last-of-type": styles.firstLastSelectedSpan,
            ".CalendarMonth[data-visible='true'] tr > .CalendarMonth__day--selected-span:last-of-type::after": lastSelectedSpanColorFillStyles,
            ".CalendarMonth[data-visible='true'] tr > .CalendarMonth__day--selected-start:last-of-type::after": lastSelectedStartColorFillStyles,

            ".CalendarDay__day": {
              verticalAlign: "top",
              paddingTop: "10px",
            },
          }}
        />

        <DateRangePicker
          {...this.props}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          withFullScreenPortal={withFullScreenPortal}
          displayFormat="ddd, MMM D"
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
  noBorder: React.PropTypes.bool,

  /**
   * Should the component open with the full screen portal
   */
  withFullScreenPortal: React.PropTypes.bool,

  focusedInput: React.PropTypes.string,

  onFocusChange: React.PropTypes.func,
};

DateRange.defaultProps = {
  noBorder: false,

  withFullScreenPortal: false,

  focusedInput: null,

  onFocusChange: "",
};

export default radium(DateRange);
