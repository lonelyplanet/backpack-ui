import React, { Component } from "react";
import PropTypes from "prop-types";
import { spring } from "react-motion";
import Transition from "../../libs/react-motion-ui-pack/Transition";
import Flyout from "../flyout";
import motionPresets from "../../utils/motionPresets";

const styles = {
  container: {
    base: {
      display: "inline-block",
    },
  },
};

const propTypes = {
  /**
   * Label for tooltip target
   */
  label: PropTypes.string.isRequired,

  /**
   * Props object for Flyout component
   */
  flyout: PropTypes.shape(Flyout.propTypes).isRequired,

  /**
   * Content to display with tooltip
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  label: "",

  flyout: {},

  children: null,
};

class Tooltip extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.toggleFlyout = this.toggleFlyout.bind(this);
  }

  toggleFlyout() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { label, flyout, children } = this.props;

    return (
      <div
        className="Tooltip"
        style={styles.container.base}
      >
        <div
          onMouseOver={this.toggleFlyout}
          onMouseOut={this.toggleFlyout}
        >
          {label}
        </div>

        <Transition
          runOnMount={false}
          component={false}
          measure={false}
          enter={{
            opacity: 1,
            translateY: spring(0, motionPresets.quickBounce),
          }}
          leave={{
            opacity: 0,
            translateY: -150,
          }}
        >
          {this.state.isOpen &&
            <Flyout {...flyout} key={label}>
              {children}
            </Flyout>
          }
        </Transition>
      </div>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
Tooltip.styles = styles;

export default Tooltip;
