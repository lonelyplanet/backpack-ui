import { expect } from "chai";
import {
  outline,
  underlinedLink,
  visuallyHidden,
} from "../../src/utils/mixins";

const baseStyles = {
  border: "1px solid red",
  padding: "10px",
  width: "auto",
};

describe('mixins', () => {
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

  describe("visuallyHidden mixin", () => {
    it("should add visuallyHidden styles", () => {
      const styles = Object.assign({}, baseStyles, visuallyHidden());

      expect(styles).to.deep.equal({
        border: 0,
        clipPath: "inset(50%)",
        display: "inline-block",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        whiteSpace: "nowrap",
        width: "1px",
      });
    });

    it("should add visuallyHidden styles with focusable styles", () => {
      const styles = Object.assign({}, baseStyles, visuallyHidden("focusable"));

      expect(styles).to.deep.equal({
        border: 0,
        clipPath: "inset(50%)",
        display: "inline-block",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        whiteSpace: "nowrap",
        width: "1px",

        ":active": {
          clip: "auto",
          clipPath: "none",
          height: "auto",
          margin: 0,
          overflow: "visible",
          position: "static",
          whiteSpace: "inherit",
          width: "auto",
        },

        ":focus": {
          clip: "auto",
          clipPath: "none",
          height: "auto",
          margin: 0,
          overflow: "visible",
          position: "static",
          whiteSpace: "inherit",
          width: "auto",
        },
      });
    });

    it("should add visuallyHidden styles without focusable styles", () => {
      const styles = Object.assign({}, baseStyles, visuallyHidden(true));

      expect(styles).to.deep.equal({
        border: 0,
        clipPath: "inset(50%)",
        display: "inline-block",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        whiteSpace: "nowrap",
        width: "1px",
      });
    });
  });
});
