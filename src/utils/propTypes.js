import PropTypes from "prop-types";

export default {
  heading: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  fontWeight: PropTypes.oneOf([
    "light",
    "regular",
    "medium",
    "book", // Book is deprecated and will be removed in the next major release
  ]),
  currency: PropTypes.oneOf([
    "AUD",
    "EUR",
    "GBP",
    "USD",
  ]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};
