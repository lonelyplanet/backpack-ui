import React, { PropTypes } from "react";
import radium from "radium";
import { color, media } from "../../../settings.json";
import { rgb } from "../../utils/color";

const styles = {
  container: {
    default: {
      marginBottom: "88px",
      paddingBottom: "88px",
      [`@media (min-width: ${media.min["720"]})`]: {
        marginBottom: "128px",
        paddingBottom: "128px",
      },
    },
    halfSpace: {
      marginBottom: "32px",
      paddingBottom: "32px",
      [`@media (min-width: ${media.min["720"]})`]: {
        marginBottom: "64px",
        paddingBottom: "64px",
      },
    },
    hasBorder: {
      borderBottom: `1px solid rgba(${rgb(color.lightBlue)}, 0.47)`,
    },
  },
};

export const breakpointBorder = (breakpoint, showAbove = false) => (
  showAbove ? {
    borderBottom: `1px solid rgba(${rgb(color.lightBlue)}, 0.47)`,
    [`@media (max-width: ${breakpoint}px)`]: {
      borderBottom: 0,
    },
  } : {
    borderBottom: 0,
    [`@media (max-width: ${breakpoint}px)`]: {
      borderBottom: `1px solid rgba(${rgb(color.lightBlue)}, 0.47)`,
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
}) => (
  <div
    className="Segmented"
    id={id}
    style={[
      styles.container.default,
      border ? styles.container.hasBorder : {},
      halfSpace ? styles.container.halfSpace : {},
      typeof showBorderAtBreakpoint === "number" ? breakpointBorder(showBorderAtBreakpoint, showAbove) : {},
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
};

export default radium(Segment);
