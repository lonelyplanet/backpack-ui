import React from "react";
import radium from "radium";
import { timing } from "rizzo-next/sass/settings.json";
import { bookingLoaderFade } from "../../utils/keyframes";

const styles = {
  container: {
    inline: {
      display: "inline-block",
    },
  },

  dot: {
    base: {
      animationDuration: "1s",
      animationIterationCount: "infinite",
      animationName: bookingLoaderFade,
      animationTimingFunction: "cubic-bezier(.68, -.55, .265, 1.55)",
      backgroundColor: "#bfd0d8",
      borderRadius: "50%",
      display: "inline-block",
      height: "10px",
      width: "10px",
    },

    second: {
      animationDelay: timing.default,
      marginLeft: "6px",
    },

    third: {
      animationDelay: timing.slow,
      marginLeft: "6px",
    },
  },
};

function DotLoader({ inline }) {
  return (
    <div className="DotLoader" style={[inline && styles.container.inline]}>
      <span style={styles.dot.base} />
      <span style={[styles.dot.base, styles.dot.second]} />
      <span style={[styles.dot.base, styles.dot.third]} />
    </div>
  );
}

DotLoader.propTypes = {
  inline: React.PropTypes.bool,
};

DotLoader.defaultProps = {
  inline: false,
};

DotLoader.styles = styles;

export default radium(DotLoader);
