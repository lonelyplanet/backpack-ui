import { expect } from "chai";
import {
  textHeading1,
  textHeading2,
  textHeading3,
  textHeading4,
  textHeading5,
  textHeading6,
  textHeading7,
  textHeading8,
  textBodyArticle,
  textBodyArticleSmall,
  textBodySmall,
  textAccent,
  textUppercase,
} from "../../src/utils/typography";

const baseStyles = {
  color: "black",
};

describe('typography', () => {
  describe("Text heading 1", () => {
    it("should add text heading 1 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading1());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "64px",
        fontWeight: 500,
        lineHeight: 1.125,
      });
    });

    it("should add text heading 1 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading1("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "64px",
        fontWeight: 300,
        lineHeight: 1.125,
      });
    });

    it("should add text heading 1 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading1("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "64px",
        fontWeight: 600,
        lineHeight: 1.125,
      });
    });
  });

  describe("Text heading 2", () => {
    it("should add text heading 2 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading2());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "48px",
        fontWeight: 500,
        lineHeight: 1.1666666666666667,
      });
    });

    it("should add text heading 2 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading2("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "48px",
        fontWeight: 300,
        lineHeight: 1.1666666666666667,
      });
    });

    it("should add text heading 2 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading2("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "48px",
        fontWeight: 600,
        lineHeight: 1.1666666666666667,
      });
    });
  });

  describe("Text heading 3", () => {
    it("should add text heading 3 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading3());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "40px",
        fontWeight: 500,
        lineHeight: 1.2,
      });
    });

    it("should add text heading 3 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading3("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "40px",
        fontWeight: 300,
        lineHeight: 1.2,
      });
    });

    it("should add text heading 3 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading3("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: 1.2,
      });
    });
  });

  describe("Text heading 4", () => {
    it("should add text heading 4 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading4());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "32px",
        fontWeight: 500,
        lineHeight: 1.25,
      });
    });

    it("should add text heading 4 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading4("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "32px",
        fontWeight: 300,
        lineHeight: 1.25,
      });
    });

    it("should add text heading 4 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading4("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "32px",
        fontWeight: 600,
        lineHeight: 1.25,
      });
    });
  });

  describe("Text heading 5", () => {
    it("should add text heading 5 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading5());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: 1.3333333333333333,
      });
    });

    it("should add text heading 5 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading5("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "24px",
        fontWeight: 300,
        lineHeight: 1.3333333333333333,
      });
    });

    it("should add text heading 5 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading5("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: 1.3333333333333333,
      });
    });
  });

  describe("Text heading 6", () => {
    it("should add text heading 6 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading6());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: 1.4,
      });
    });

    it("should add text heading 6 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading6("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "20px",
        fontWeight: 300,
        lineHeight: 1.4,
      });
    });

    it("should add text heading 6 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading6("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: 1.4,
      });
    });
  });

  describe("Text heading 7", () => {
    it("should add text heading 7 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading7());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.5,
      });
    });

    it("should add text heading 7 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading7("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: 1.5,
      });
    });

    it("should add text heading 7 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading7("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: 1.5,
      });
    });
  });

  describe("Text heading 8", () => {
    it("should add text heading 8 styles with default weight book", () => {
      const styles = Object.assign({}, baseStyles, textHeading8());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: 1.4545454545454546,
      });
    });

    it("should add text heading 8 styles with weight light", () => {
      const styles = Object.assign({}, baseStyles, textHeading8("light"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "11px",
        fontWeight: 300,
        lineHeight: 1.4545454545454546,
      });
    });

    it("should add text heading 8 styles with weight medium", () => {
      const styles = Object.assign({}, baseStyles, textHeading8("medium"));

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "11px",
        fontWeight: 600,
        lineHeight: 1.4545454545454546,
      });
    });
  });

  describe("Text body article", () => {
    it("should add text body article styles", () => {
      const styles = Object.assign({}, baseStyles, textBodyArticle());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Miller Daily', 'Georgia', 'Times', 'Times New Roman', serif",
        fontSize: "20px",
        lineHeight: 1.8,
      });
    });
  });

  describe("Text body article small", () => {
    it("should add text body article styles", () => {
      const styles = Object.assign({}, baseStyles, textBodyArticleSmall());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Miller Daily', 'Georgia', 'Times', 'Times New Roman', serif",
        fontSize: "16px",
        lineHeight: 2,
      });
    });
  });

  describe("Text body small", () => {
    it("should add text body small styles", () => {
      const styles = Object.assign({}, baseStyles, textBodySmall());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "14px",
        lineHeight: 1.4285714285714286,
      });
    });
  });

  describe("Text accent", () => {
    it("should add text accent styles", () => {
      const styles = Object.assign({}, baseStyles, textAccent());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Miller Daily', 'Georgia', 'Times', 'Times New Roman', serif",
        fontSize: "16px",
        fontStyle: "italic",
        lineHeight: 1.5,
      });
    });
  });

  describe("Text uppercase", () => {
    it("should add text uppercase styles", () => {
      const styles = Object.assign({}, baseStyles, textUppercase());

      expect(styles).to.deep.equal({
        color: "black",
        fontFamily: "'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: "11px",
        fontWeight: 600,
        lineHeight: 1,
        textTransform: "uppercase",
      });
    });
  });
});
