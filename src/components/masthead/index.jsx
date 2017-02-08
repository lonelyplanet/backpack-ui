import React, { PropTypes } from "react";
import radium from "radium";
import styles from "./styles";

const Masthead = ({ children, isUnderGlobalHeader }) => (
  <header
    className="Masthead"
    style={[
      styles.base,
      isUnderGlobalHeader && styles.isUnderGlobalHeader,
    ]}
  >
    {children}
  </header>
);


Masthead.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  isUnderGlobalHeader: PropTypes.bool,
};

export default radium(Masthead);
