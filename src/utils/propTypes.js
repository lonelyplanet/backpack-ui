import { PropTypes } from "react";

export default {
  heading: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  fontWeight: PropTypes.oneOf([
    "light",
    "book",
    "medium",
  ]),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};
