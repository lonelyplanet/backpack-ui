import React from "react";
import PropTypes from "prop-types";
import Portal from "react-portal";
import radium from "radium";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import zIndexDefault from "../../styles/zIndex";
import { rgb } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const styles = {
  portal: {
    base: {
      height: 0,
      width: 0,
    },
  },

  overlay: {
    base: {
      bottom: 0,
      left: 0,
      position: "fixed",
      right: 0,
      top: 0,
      transitionProperty: "opacity",
    },

    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },
  },
};

function Overlay({ animationDuration, attached, color, onClick, visible, zIndex, style }) {
  return (
    <Portal
      className="Overlay-portal"
      key="overlay"
      isOpened={attached || visible}
      style={styles.portal.base}
    >
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className="Overlay"
        onClick={onClick}
        style={[
          styles.overlay.base,
          color && { backgroundColor: color },
          animationDuration && { transitionDuration: `${animationDuration}ms` },
          zIndex && { zIndex },
          visible ? styles.overlay.visible : styles.overlay.hidden,
          style,
        ]}
      />
    </Portal>
  );
}

Overlay.propTypes = {
  /**
   * How long the animation should last, in ms
   */
  animationDuration: PropTypes.number,

  /**
   * Whether or not the overlay has been attached to the DOM. This prop differs
   * from `visible` in that the overlay must be attached _before_ the overlay
   * is actually visible. This allows the animation to have time to run. To
   * create this offset, you'll need to use a setTimeout in the component in
   * which the overlay is called to stagger the state change. If no animation
   * is needed, then omit this prop and the value from `visible` will be used.
   */
  attached: PropTypes.bool,

  /**
   * The color over the overlay; this prop assumes no opacity so you'll need to
   * pass in the correct value via `rgba`.
   */
  color: PropTypes.string,

  /**
   * A method to run when the overlay is clicked, usually to close the overlay
   * and the component in which it was called from.
   */
  onClick: PropTypes.func,

  /**
   * Whether or not the overlay is actually visible, not necessarily attached to
   * the DOM.
   */
  visible: PropTypes.bool.isRequired,

  /**
   * Used to control where the overlay should be placed on the z-axis
   */
  zIndex: PropTypes.number,

  /**
   * Apply custom styles
   */
  style: propTypes.style,
};

Overlay.defaultProps = {
  animationDuration: parseInt(timing.default.replace("ms", ""), 10),
  attached: false,
  color: `rgba(${rgb(colors.bgOverlay)}, .3)`,
  onClick: null,
  visible: false,
  zIndex: zIndexDefault.overlay,
  style: null,
};

export default radium(Overlay);
