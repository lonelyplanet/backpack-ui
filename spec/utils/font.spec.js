import { expect } from "chai";
import font from "../../src/utils/font";

describe("font", () => {
  it("should not return a font stack because the font name does not exist in the settings", () => {
    expect(font("helvetica")).to.equal("");
  });

  it("should return a `Benton` font stack", () => {
    expect(font("benton")).to.equal("'Benton Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif");
  });

  it("should return a `Miller` font stack", () => {
    expect(font("miller")).to.equal("'Miller Daily', 'Georgia', 'Times', 'Times New Roman', serif");
  });
});
