const settings = {
  columns: 12,
  columnWidth: 80,
  container: 1290,
  gutterPosition: "before",
  gutters: (3 / 8),
  math: "fluid",
  output: "float",
  staticUnit: "px",
  remBase: 10,
};

function _calculateGutter(multiplier = 1) {
  return (settings.columnWidth * settings.gutters * multiplier);
}

function _rem(value, base) {
  return `${(value / base)}rem`;
}

function _px(value) {
  return `${value}px`;
}

function _percent(target, context) {
  return `${(target / context) * 100}%`;
}

function _staticCalculation(value) {
  if (settings.staticUnit && settings.staticUnit === "rem" && settings.remBase) {
    return _rem(value, settings.remBase);
  }

  return _px(value);
}

function _updateContext(columns) {
  const contextWidth = (columns * settings.columnWidth);
  const contextGutters = (columns - 1);
  const gutterWidth = _calculateGutter();

  return (contextWidth + (contextGutters * gutterWidth));
}


function _affixValue(number, math) {
  if (math === "fluid") {
    return `${number}%`;
  }

  if (math === "static") {
    if (settings.staticUnit === "rem") {
      return `${number}rem`;
    }

    return `${number}px`;
  }

  return false;
}

function _getNumbers([...values], math = settings.math, unit = settings.staticUnit) {
  const numbers = [];

  values.map((value) => {
    if (math === "fluid") {
      numbers.push(parseFloat(value.slice(0, -1)));
    }

    if (math === "static") {
      if (unit === "rem") {
        numbers.push(parseFloat(value.slice(0, -3)));
      } else {
        numbers.push(parseFloat(value.slice(0, -2)));
      }
    }

    return false;
  });

  return numbers;
}

/**
 * Add values together
 * @todo protect against mix of static and fluid values
 * @param  {array} [...values]  Array of values to add
 * @param  {string} math        Type of calculation, "fluid" or "static";
 *
 * @return {string}             Calculation converted back to a string with
 *                              the correct units based on `math`
 * @usage
 * add([span("2 of 6"), gutter()]); // fluid
 * add([span(3, "static"), gutter("static")], "static"); // static
 */
function add([...values], math = settings.math) {
  const numbers = _getNumbers(values, math);
  const result = numbers.reduce((a, b) => a + b);
  return _affixValue(result, math);
}

function subtract([...values], math = settings.math) {
  const numbers = _getNumbers(values, math);
  const result = numbers.reduce((a, b) => a - b);
  return _affixValue(result, math);
}

function multiply([...values], math = settings.math) {
  const numbers = _getNumbers(values, math);
  const result = numbers.reduce((a, b) => a * b);
  return _affixValue(result, math);
}

function divide([...values], math = settings.math) {
  const numbers = _getNumbers(values, math);
  const result = numbers.reduce((a, b) => a / b);
  return _affixValue(result, math);
}

/**
 * Calculate a percent value from two static values
 * @todo   Add better regex matching to validate rem or px only
 * @param  {String} target  The width of the element that will be converted to a percent
 * @param  {String} context The width of the element's container
 * @return {String}         Converted value
 * @usage
 * percentage("12rem", "120rem");
 */
function percentage(target, context) {
  if (target.slice(-1) === "%" || context.slice(-1) === "%") {
    throw new Error(`Cannot calculate percentage; one or more units appear to
      be %. Units must be rem or px.`);
  }

  if (target.slice(-1) !== context.slice(-1)) {
    throw new Error("Cannot calculate percentage; units do not appear to match.");
  }

  const unit = target.slice(-1) === "x" ? "px" : "rem";
  const numbers = _getNumbers([target, context], "static", unit);
  const result = numbers.reduce((a, b) => a / b) * 100;
  return _affixValue(result, "fluid");
}

/**
 * Output the container width
 * @return {function} Function to make calculation
 */
function container() {
  return _staticCalculation(settings.container);
}

/**
 * Output the gutter width
 * @param  {string}   math       Type of calculation, "fluid" or "static";
 *                               defaults to global settings
 * @param  {number}   columns    The number of columns; changes context
 * @param  {number}   multiplier Number to multiply the gutter by
 * @return {function}            Function to make calculation
 */
function gutter(
  math = settings.math,
  columns = settings.columns,
  multiplier = 1
) {
  const gutterWidth = _calculateGutter(multiplier);
  const containerWidth = _updateContext(
    typeof columns === "string" ?
    parseInt(columns, 10) :
    columns
  );

  if (math === "static") {
    return _staticCalculation(gutterWidth);
  }

  if (math === "fluid") {
    return _percent(gutterWidth, containerWidth);
  }

  return false;
}

/**
 * Calculate a span width
 * @param  {number|string} columns The number of columns; pass in an
 *                                 optional context
 * @param  {string}        math    Type of calculation, "fluid" or "static";
 *                                 defaults to global settings
 * @return {function}              Function to make calculation
 *
 * @usage
 * // number, context is taken from global settings
 * span(2);
 *
 * // string, context is taken from global settings, math overrides global settings
 * span("2", "static");
 *
 * // string with new context, calculates based on a 6 column grid
 * span("2 of 6");
 */
function span(columns, math = settings.math) {
  const error = "You must pass a number greater than 0 for the number of columns.";
  let spanColumns = 0;
  let containerColumns = settings.columns;

  if (typeof columns === "string") {
    spanColumns = parseInt(columns.split(" of ")[0], 10);

    if (columns.split(" of ")[1]) {
      containerColumns = parseInt(columns.split(" of ")[1], 10);
    }
  } else if (typeof columns === "number" && columns) {
    spanColumns = columns;
  } else {
    throw new Error(error);
  }

  if (columns) {
    let columnWidth = spanColumns * settings.columnWidth;
    const gutters = (spanColumns - 1);
    const containerWidth = _updateContext(containerColumns);

    if (settings.gutterPosition === "before" ||
      settings.gutterPosition === "after" ||
      settings.gutterPosition === "split") {
      if (gutters) {
        columnWidth += (_calculateGutter() * gutters);
      }
    }

    if (settings.gutterPosition === "inside" ||
      settings.gutterPosition === "inside-static") {
      if (gutters) {
        columnWidth += (_calculateGutter()) * 2;
      } else {
        columnWidth += (_calculateGutter());
      }
    }

    if (math === "static") {
      return _staticCalculation(columnWidth);
    }

    if (math === "fluid") {
      return _percent(columnWidth, containerWidth);
    }

    return false;
  }

  return false;
}

export {
  container,
  gutter,
  span,
  add,
  subtract,
  multiply,
  divide,
  percentage,
};
