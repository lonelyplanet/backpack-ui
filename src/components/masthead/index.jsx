import React, { PropTypes } from "react";
import radium from "radium";
import styles from "./styles";
import Slider from "./slider";

const Masthead = ({ slides, isUnderGlobalHeader, tabs, full }) => (
  <header
    className="Masthead"
    style={[
      styles.base,
      isUnderGlobalHeader && styles.isUnderGlobalHeader,
      full && styles.base.full,
    ]}
  >
    <Slider slides={slides} navigation={tabs} />
  </header>
);

Masthead.propTypes = {
  slides: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  tabs: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  isUnderGlobalHeader: PropTypes.bool,
  full: PropTypes.bool,
};

export default radium(Masthead);
