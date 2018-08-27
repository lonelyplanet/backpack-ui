import React from "react";
import moment from "moment";
import { expect } from "chai";
import { configure, shallow } from "enzyme";
import { DateRange } from "../../../src";
import Adapter from "enzyme-adapter-react-16.2";

configure({ adapter: new Adapter() });

describe("DateRange component", () => {
  it("renders without crashing", () => {
    shallow(<DateRange />);
  });

  describe("isOutsideRange determination", () => {
    it("returns true if date argument is before today", () => {
      const component = shallow(<DateRange />);
      const date = moment("2018-08-15");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(true);
    });

    it("returns true if date in the future but is past the lastSelectable date", () => {
      const lastSelectableDate = moment().add(7, "days");
      const component = shallow(
        <DateRange lastSelectableDate={lastSelectableDate} />
      );
      const date = moment().add(8, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(true);
    });

    it("returns true if endDate is focused, and the date is greater than 30 days from startDate", () => {
      const startDate = moment().add(1, "days");
      const component = shallow(<DateRange startDate={startDate} />);
      component.find("DateRangePicker").simulate("focusChange", "endDate");
      expect(component.state("focusedInput")).to.equal("endDate");
      const date = moment().add(32, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(true);
    });

    it("returns false if date is after today, lastSelectableDate prop not defined, startDate is focused", () => {
      const startDate = moment().add(1, "days");
      const component = shallow(<DateRange startDate={startDate} />);
      component.find("DateRangePicker").simulate("focusChange", "startDate");
      expect(component.state("focusedInput")).to.equal("startDate");
      const date = moment().add(12, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(false);
    });

    it("returns false if date is after today, lastSelectableDate prop not defined, endDate is focused, startDate prop is undefined", () => {
      const component = shallow(<DateRange />);
      component.find("DateRangePicker").simulate("focusChange", "endDate");
      expect(component.state("focusedInput")).to.equal("endDate");
      const date = moment().add(12, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(false);
    });

    it("returns false if date is after today, lastSelectableDate prop not defined, endDate is focused, and the date is less than 30 days from startDate", () => {
      const startDate = moment().add(1, "days");
      const component = shallow(<DateRange startDate={startDate} />);
      component.find("DateRangePicker").simulate("focusChange", "endDate");
      expect(component.state("focusedInput")).to.equal("endDate");
      const date = moment().add(12, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(false);
    });

    it("returns false if date is after today, date is before lastSelectableDate, startDate is focused", () => {
      const startDate = moment().add(1, "days");
      const lastSelectableDate = moment().add(365, "days");
      const component = shallow(
        <DateRange
          startDate={startDate}
          lastSelectableDate={lastSelectableDate}
        />
      );
      component.find("DateRangePicker").simulate("focusChange", "startDate");
      expect(component.state("focusedInput")).to.equal("startDate");
      const date = moment().add(12, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(false);
    });

    it("returns false if date is after today, date is before lastSelectableDate, endDate is focused, startDate prop is undefined", () => {
      const lastSelectableDate = moment().add(365, "days");
      const component = shallow(
        <DateRange lastSelectableDate={lastSelectableDate} />
      );
      component.find("DateRangePicker").simulate("focusChange", "endDate");
      expect(component.state("focusedInput")).to.equal("endDate");
      const date = moment().add(12, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(false);
    });

    it("returns false if date is after today, date is before lastSelectableDate, endDate is focused, and the date is less than 30 days from startDate", () => {
      const startDate = moment().add(1, "days");
      const lastSelectableDate = moment().add(365, "days");
      const component = shallow(
        <DateRange
          startDate={startDate}
          lastSelectableDate={lastSelectableDate}
        />
      );
      component.find("DateRangePicker").simulate("focusChange", "endDate");
      expect(component.state("focusedInput")).to.equal("endDate");
      const date = moment().add(12, "days");
      const actual = component.instance().isOutsideRange(date);
      expect(actual).to.equal(false);
    });
  });
});
