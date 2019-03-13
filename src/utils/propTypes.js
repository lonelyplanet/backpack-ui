import PropTypes from "prop-types";

export default {
  heading: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  fontWeight: PropTypes.oneOf([
    "light",
    "regular",
    "medium",
    "book", // TODO: Book is deprecated and will be removed in the next major release
  ]),
  currency: PropTypes.oneOf([
    "AUD",
    "EUR",
    "GBP",
    "USD",
  ]),
  origin: PropTypes.oneOf([
    "vertical",
    "horizontal",
  ]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};
