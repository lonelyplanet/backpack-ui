import { expect } from "chai";
import {
  rgb,
  rgba,
  darken,
  lighten,
} from "../../src/utils/color";

describe("rgb", () => {
  it("should convert a hex value to rgb", () => {
    expect(rgb("#406274")).to.equal("64,98,116");
  });
});

describe("rgba", () => {
  it("should convert a hex value to rgba", () => {
    expect(rgba("#406274", 0.2)).to.equal("rgba(64, 98, 116, 0.2)");
  });
});

describe("darken", () => {
  it("should darken white by an amount of 10", () => {
    expect(darken("#fff", 10)).to.equal("#E6E6E6");
  });
});

describe("lighten", () => {
  it("should lighten red by an amount of 20", () => {
    expect(lighten("red", 20)).to.equal("#FF3333");
  });

  it("should not lighten white by any amount", () => {
    expect(lighten("#fff", 5)).to.equal("#FFFFFF");
  });

  it("should not lighten black by any amount", () => {
    expect(lighten("#000", 40)).to.equal("#000000");
  });
});
