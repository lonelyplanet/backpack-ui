import React from "react";
import PropTypes from "prop-types";


const ClipboardWrapper = ({ children, text }) => (
  <div
    className="shareCopy"
    data-clipboard-text={text}
  >
    {children}
  </div>
);

ClipboardWrapper.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
};

export default ClipboardWrapper;