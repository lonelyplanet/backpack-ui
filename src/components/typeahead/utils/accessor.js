export default class Accessor {
  static identityFunction(input) {
    return input;
  }

  static generateAccessor(field) {
    return (object) => object[field];
  }

  static generateOptionToStringFor(prop) {
    if (typeof prop === "string") {
      return Accessor.generateAccessor(prop);
    } else if (typeof prop === "function") {
      return prop;
    }

    return Accessor.identityFunction;
  }

  static valueForOption(option, object) {
    if (typeof option === "string") {
      return object[option];
    } else if (typeof option === "function") {
      return option(object);
    }

    return object;
  }
}
