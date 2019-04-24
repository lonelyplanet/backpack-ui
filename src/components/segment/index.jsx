import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import { rgb } from "../../utils/color";

const styles = {
  container: {
    default: {
      marginBottom: "88px",
      paddingBottom: "88px",
      [`@media (min-width: ${mq.min[720]})`]: {
        marginBottom: "128px",
        paddingBottom: "128px",
      },
    },
    halfSpace: {
      marginBottom: "32px",
      paddingBottom: "32px",
      [`@media (min-width: ${mq.min[720]})`]: {
        marginBottom: "64px",
        paddingBottom: "64px",
      },
    },
    hasBorder: {
      borderBottom: `1px solid rgba(${rgb(colors.accentGray)}, 0.47)`,
    },
  },
};

export const breakpointBorder = (breakpoint, showAbove = false) => (
  showAbove ? {
    borderBottom: `1px solid rgba(${rgb(colors.accentGray)}, 0.47)`,
    [`@media (max-width: ${breakpoint}px)`]: {
      borderBottom: 0,
    },
  } : {
    borderBottom: 0,
    [`@media (max-width: ${breakpoint}px)`]: {
      borderBottom: `1px solid rgba(${rgb(colors.accentGray)}, 0.47)`,
    },
  }
);

const Segment = ({
  id,
  border,
  halfSpace,
  showBorderAtBreakpoint,
  showAbove,
  children,
  style,
  qahook,
}) => (
  <div
    className="Segmented"
    id={id}
    data-qa={qahook}
    style={[
      styles.container.default,
      border && styles.container.hasBorder,
      halfSpace && styles.container.halfSpace,
      showBorderAtBreakpoint && breakpointBorder(showBorderAtBreakpoint, showAbove),
      style,
    ]}
  >
    {children}
  </div>
);

Segment.propTypes = {
  id: PropTypes.string,
  border: PropTypes.bool,
  halfSpace: PropTypes.bool,
  showBorderAtBreakpoint: PropTypes.number,
  showAbove: PropTypes.bool,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  qahook: PropTypes.string,
};

Segment.defaultProps = {
  qahook: null,
};

export default radium(Segment);
