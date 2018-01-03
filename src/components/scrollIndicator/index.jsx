import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Icon from "../icon";
import colors from "../../styles/colors";

const styles = {
  container: {
    cursor: "pointer",
    transition: "transform .5s ease",
    ":hover": {
      transform: "translateY(3px)",
    },
  },
  scrollIndicatorArrows: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
  },
};

const arrowSize = {
  height: "10px",
  width: "30px",
};

const ScrollIndicator = ({ color }) => (
  <div style={[styles.container, color && { color }]}>
    <div className="scrollIndicatorMouse">
      <Icon.MouseOutline
        height="30px"
        width="30px"
      />
    </div>
    <div style={styles.scrollIndicatorArrows} className="scrollIndicatorArrows">
      <Icon.ChevronDown
        height={arrowSize.height}
        width={arrowSize.width}
      />
      <Icon.ChevronDown
        height={arrowSize.height}
        width={arrowSize.width}
      />
    </div>
  </div>
);

ScrollIndicator.propTypes = {
  color: PropTypes.string,
};

ScrollIndicator.defaultProps = {
  color: colors.bgOverlay,
};

export default radium(ScrollIndicator);
