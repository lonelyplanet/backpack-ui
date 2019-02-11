import { expect } from "chai";
import { validReactAttributes } from "../../src/utils/validReactAttributes";

describe("validReactAttributes", () => {
  it("should return a filtered object of attributes that can be added to a dom element in React", () => {
    const unsanitized = {
      iconName: "some invalid thing",
      "data-valid": "a valid data attribute",
      type: "button",
      autoSave: true,
      "aria-valid": "a valid aria attribute",
    };
    const actual = validReactAttributes(unsanitized);
    expect(actual).to.not.have.property("iconName");
    expect(actual).to.have.property("data-valid");
    expect(actual).to.have.property("type");
    expect(actual).to.have.property("autoSave");
    expect(actual).to.have.property("aria-valid");
    expect(Object.keys(actual).length).to.equal(4);
  });
});
