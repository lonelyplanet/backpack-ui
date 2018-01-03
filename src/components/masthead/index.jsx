import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import zIndex from "../../styles/zIndex";

const styles = {
  base: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.textPrimary,
    color: colors.bgPrimary,
    left: 0,
    overflow: "hidden",
    position: "relative",
    top: 0,
    zIndex: zIndex.slideshowSlide,
  },

  // REM units being used to match what is currently in rizz-next
  isUnderGlobalHeader: {
    marginTop: "-5rem",
    [`@media (min-width: ${mq.min[720]})`]: {
      marginTop: "-13rem",
    },
  },
};


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
