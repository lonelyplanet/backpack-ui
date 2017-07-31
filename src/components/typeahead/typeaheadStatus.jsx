import React from "react";
import PropTypes from "prop-types";

const TypeaheadStatus = ({ children }) => (
  <span
    role="status"
    aria-live="polite"
    style={{
      left: "-9999px",
      position: "absolute",
    }}
  >
    {children}
  </span>
);

TypeaheadStatus.propTypes = {
  children: PropTypes.string,
};

TypeaheadStatus.defaultProps = {
  children: null,
};

export default TypeaheadStatus;
