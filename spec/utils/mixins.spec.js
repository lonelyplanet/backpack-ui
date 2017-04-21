import { expect } from "chai";
import {
  outline,
  underlinedLink,
} from "../../src/utils/mixins";

const baseStyles = {
  border: "1px solid red",
  padding: "10px",
  width: "auto",
};

describe("outline mixin", () => {
  it("should add outline styles with a default outline offset of 2", () => {
    const styles = Object.assign({}, baseStyles, outline());

    expect(styles).to.deep.equal({
      border: "1px solid red",
      padding: "10px",
      width: "auto",
      outline: "1px lightgray dotted",
      outlineOffset: "2px",
    });
  });

  it("should add outline styles with an outline offset of 3", () => {
    const styles = Object.assign({}, baseStyles, outline(3));

    expect(styles).to.deep.equal({
      border: "1px solid red",
      padding: "10px",
      width: "auto",
      outline: "1px lightgray dotted",
      outlineOffset: "3px",
    });
  });

  it("should not add outline styles because outline offset is not a number", () => {
    const styles = Object.assign({}, baseStyles, outline("10"));

    expect(styles).to.deep.equal({
      border: "1px solid red",
      padding: "10px",
      width: "auto",
    });
  });
});

describe("underlinedLink mixin", () => {
  it("should add underline styles with the default color", () => {
    const styles = Object.assign({}, baseStyles, underlinedLink());

    expect(styles).to.deep.equal({
      border: "1px solid red",
      padding: "10px",
      width: "auto",
      backgroundImage: `linear-gradient(
      to top,
      transparent,
      transparent 2px,
      rgba(44, 54, 67, 0.4) 2px,
      rgba(44, 54, 67, 0.4) 3px,
      transparent 3px
    )`,
      color: "#2c3643",
      position: "relative",
      textDecoration: "none",
      textShadow: `-1px -1px 0 #fff,
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff`,
      transition: "color 200ms ease",
    });
  });

  it("should add underline styles with the custom color", () => {
    const styles = Object.assign({}, baseStyles, underlinedLink("red"));

    expect(styles).to.deep.equal({
      border: "1px solid red",
      padding: "10px",
      width: "auto",
      backgroundImage: `linear-gradient(
      to top,
      transparent,
      transparent 2px,
      rgba(255, 0, 0, 0.4) 2px,
      rgba(255, 0, 0, 0.4) 3px,
      transparent 3px
    )`,
      color: "red",
      position: "relative",
      textDecoration: "none",
      textShadow: `-1px -1px 0 #fff,
      1px -1px 0 #fff,
      -1px 1px 0 #fff,
      1px 1px 0 #fff`,
      transition: "color 200ms ease",
    });
  });
});
