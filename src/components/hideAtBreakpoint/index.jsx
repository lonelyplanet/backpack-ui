import React, { PropTypes } from "react";
import radium from "radium";
import { media } from "../../../settings.json";

function HideAtBreakpoint({ breakpoint, children, useMaxWidth }) {
  const style = useMaxWidth ? {
    [`@media (max-width: ${breakpoint * 0.0625}em)`]: {
      display: "none",
    },
  } : {
    display: "none",

    [`@media (min-width: ${breakpoint * 0.0625}em)`]: {
      display: "block",
    },
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

HideAtBreakpoint.propTypes = {
  breakpoint: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  useMaxWidth: PropTypes.bool,
};

HideAtBreakpoint.defaultProps = {
  breakpoint: media.max["767"],
  useMaxWidth: false,
};

export default radium(HideAtBreakpoint);
