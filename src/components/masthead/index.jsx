import React, { PropTypes } from "react";
import radium from "radium";
import { color, media, zIndex } from "../../../settings.json";


const styles = {
  base: {
    width: "100%",
    backgroundColor: color.titleGray,
    color: color.white,
    left: 0,
    overflow: "hidden",
    position: "relative",
    top: 0,
    zIndex: zIndex.slideshowSlide,
    [`@media (min-width: ${media.min["720"]})`]: {
      height: "100vh",
    },
  },

  // REM units being used to match what is currently in rizz-next
  isUnderGlobalHeader: {
    marginTop: "-5rem",
    [`@media (min-width: ${media.min["720"]})`]: {
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
