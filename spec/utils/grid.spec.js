import { expect } from "chai";
import {
  container,
  gutter,
  span,
  add,
  subtract,
  multiply,
  divide,
  percentage,
} from "../../src/utils/grid";

describe('grid', () => {
  describe("container", () => {
    it("should output the grid's container width", () => {
      expect(container()).to.equal("1290px");
    });
  });

  describe("gutter", () => {
    it("should not output a gutter width because the math must be defined as `fluid` or `static`", () => {
      expect(gutter(null)).to.equal(false);
    });

    it("should output a fluid gutter width", () => {
      expect(gutter()).to.equal("2.3255813953488373%");
    });

    it("should output a static gutter width", () => {
      expect(gutter("static")).to.equal("30px");
    });

    it("should output a fluid gutter width based on a 4 column grid", () => {
      expect(gutter("fluid", 4)).to.equal("7.317073170731707%");
    });

    it("should output a static gutter width based on a 6 column grid", () => {
      expect(gutter("static", 6)).to.equal("30px");
    });

    it("should output a fluid gutter width multiplied by 4 based on a 12 column grid", () => {
      expect(gutter("fluid", "12", 4)).to.equal("9.30232558139535%");
    });

    it("should output a static gutter width multiplied by 4 based on a 12 column grid", () => {
      expect(gutter("static", "12", 4)).to.equal("120px");
    });
  });

  describe("span", () => {
    it("should not output a width because the number of columns was not specified", () => {
      expect(() => span()).to.throw("You must pass a number greater than 0 for the number of columns.");
    });

    it("should output a fluid width that spans 2 columns of a 12 column grid", () => {
      expect(span(2)).to.equal("14.728682170542637%");
    });

    it("should output a static width that spans 2 columns of a 12 column grid", () => {
      expect(span("2", "static")).to.equal("190px");
    });

    it("should output a fluid width that spans 2 columns of a 6 column grid", () => {
      expect(span("2 of 6")).to.equal("30.158730158730158%");
    });
  });

  describe("add", () => {
    it("should add two fluid values and output the sum", () => {
      expect(add(["30%", "25%"])).to.equal("55%");
    });

    it("should add three static values and output the sum", () => {
      expect(add(["300px", "250px", "190px"], "static")).to.equal("740px");
    });
  });

  describe("subtract", () => {
    it("should subtract two fluid values and output the difference", () => {
      expect(subtract(["30%", "25%"])).to.equal("5%");
    });

    it("should subtract three static values and output the difference", () => {
      expect(subtract(["300px", "250px", "190px"], "static")).to.equal("-140px");
    });
  });

  describe("multiply", () => {
    it("should multiply two fluid values and output the product", () => {
      expect(multiply(["30%", "25%"])).to.equal("750%");
    });

    it("should multiply three static values and output the product", () => {
      expect(multiply(["300px", "250px", "190px"], "static")).to.equal("14250000px");
    });
  });

  describe("divide", () => {
    it("should divide two fluid values and output the quotient", () => {
      expect(divide(["30%", "25%"])).to.equal("1.2%");
    });

    it("should divide three static values and output the quotient", () => {
      expect(divide(["300px", "250px", "190px"], "static")).to.equal("0.00631578947368421px");
    });
  });

  describe("percentage", () => {
    it("should output a percentage value using rem input", () => {
      expect(percentage("120px", "1200px")).to.equal("10%");
    });

    it("should output a percentage value using px input", () => {
      expect(percentage("30px", "530px")).to.equal("5.660377358490567%");
    });

    it("should output the target value because cannot calculate perecentage using perecentage values", () => {
      expect(() => percentage("5%", "30%")).to.throw(`Cannot calculate percentage; one or more units appear to
      be %. Units must be rem or px.`);
    });

    it("should output the target value because cannot calculate perecentage using mismatched static values", () => {
      expect(() => percentage("30px", "120rem")).to.throw("Cannot calculate percentage; units do not appear to match.");
    });
  });
});
