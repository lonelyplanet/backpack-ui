import React, { Component } from "react";
import PropTypes from "prop-types";
import Portal from "react-portal";
import radium from "radium";
import noScroll from "no-scroll";

import { components, spacing, timing, zIndex } from "../../../settings.json";
import colors from "../../styles/colors";
import { rgb } from "../../utils/color";
import { gutter } from "../../utils/grid";
import Icon from "../icon";
import Overlay from "../overlay";

class Takeover extends Component {
  constructor(props) {
    super(props);

    // setting the state here will open the takeover without the animation when
    // `this.props.isOpened` is true
    this.state = {
      isOpen: props.isOpened,
      hasAnimated: props.isOpened,
    };

    this.animatonSpeed = parseInt(timing.default.replace("ms", ""), 10);

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);

    if (this.props.isOpened) {
      this.onOpen();
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldOpen = this.props.isOpened !== nextProps.isOpened && nextProps.isOpened;
    if (shouldOpen) {
      this.onOpen();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);

    this.document = null;
  }

  onOpen() {
    this.setState({
      isOpen: true,
    });

    // Wait for animation
    setTimeout(() => {
      this.setState({
        hasAnimated: true,
      });

      if (this.props.scroll) {
        noScroll.on();
      }
    }, 10);
  }

  onClose() {
    this.setState({
      hasAnimated: false,
    });


    // Wait for animation
    setTimeout(() => {
      this.setState({
        isOpen: false,
      });

      if (this.props.scroll) {
        noScroll.off();
      }
    }, this.animatonSpeed);
  }

  handleKeydown(event) {
    if (event.keyCode === 27 && this.state.isOpen) {
      this.onClose();
    }
  }

  render() {
    const {
      children,
      closeOnHeaderClick,
      cover,
      hasOverlay,
      title,
      mobile,
      contentFill,
      scroll,
    } = this.props;

    const styles = {
      portal: {
        base: {
          height: 0,
          width: 0,
        },
      },

      takeover: {
        container: {
          base: {
            backgroundColor: colors.bgPrimary,
            boxShadow: `0 5px 50px rgba(${rgb(colors.shadowPrimary)}, 0.5)`,
            left: 0,
            opacity: 0,
            position: "fixed",
            top: 0,
            transform: "translateY(15%)",
            transition: `opacity ${this.animatonSpeed}ms,
              transform ${this.animatonSpeed}ms`,
            width: "100%",
            zIndex: zIndex.modal,
          },

          cover: {
            bottom: 0,
            height: "100vh",
            right: 0,
          },

          hidden: {
            opacity: 0,
            transform: "translateY(15%)",
          },

          visible: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        header: {
          base: {
            backgroundColor: colors.bgPrimary,
            height: components.header.heightMobile,
            position: "relative",
            textAlign: "center",
            zIndex: zIndex.modal,
          },

          shadow: {
            boxShadow: `40px 2px 20px rgba(${rgb(colors.shadowPrimary)}, 0.05),
              -40px 2px 20px rgba(${rgb(colors.shadowPrimary)}, 0.05)`,
          },

          border: {
            borderBottom: `1px solid ${colors.borderPrimary}`,
          },

          mobile: {
            paddingLeft: spacing.mobile,
            paddingRight: spacing.mobile,
          },
        },

        heading: {
          base: {
            display: "inline-block",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: 1,
            maxWidth: `${275 / 20}em`,
            overflow: "hidden",
            paddingBottom: `${13 / 20}em`,
            paddingTop: `${17 / 20}em`,
            textOverflow: "ellipsis",
          },
        },

        close: {
          base: {
            backgroundColor: "transparent",
            color: colors.textPrimary,
            fontSize: "16px",
            height: components.header.heightMobile,
            width: components.header.heightMobile,
            position: "absolute",
            right: `${3 / 16}em`,
            top: 0,
          },
        },

        content: {
          base: {
          },

          cover: {
            height: `calc(100vh - ${components.header.heightMobile})`,
          },
        },
      },
    };

    return (
      <span>
        <Portal
          className="Takeover-portal"
          key="content"
          isOpened={this.state.isOpen}
          style={styles.portal.base}
        >
          <div
            className="Takeover"
            style={[
              styles.takeover.container.base,
              cover && styles.takeover.container.cover,
              !this.state.hasAnimated ?
                styles.takeover.container.hidden :
                styles.takeover.container.visible,
            ]}
          >
            <header // eslint-disable-line jsx-a11y/no-static-element-interactions
              className="Takeover-header"
              style={[
                styles.takeover.header.base,
                title && contentFill && styles.takeover.header.shadow,
                title && !contentFill && styles.takeover.header.border,
                mobile && styles.takeover.header.mobile,
              ]}
              onClick={closeOnHeaderClick && this.onClose}
            >
              {title &&
                <h4 className="Takeover-heading" style={styles.takeover.heading.base}>
                  {title}
                </h4>
              }

              <button
                className="Takeover-close"
                style={styles.takeover.close.base}
                onClick={!closeOnHeaderClick && this.onClose}
              >
                <Icon.Cross label="Close" />
              </button>
            </header>

            <div
              className="Takeover-content"
              style={[
                cover && styles.takeover.content.cover,
                scroll && {
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                },
              ]}
            >
              <div
                style={[
                  mobile && !contentFill && { padding: `40px ${spacing.mobile}` },
                  !mobile && !contentFill && { padding: gutter() },
                  cover && !scroll && { height: "100%" },
                ]}
              >
                {children}
              </div>
            </div>
          </div>
        </Portal>

        {hasOverlay &&
          <Overlay
            attached={this.state.isOpen}
            onClick={this.onClose}
            visible={this.state.hasAnimated}
          />
        }
      </span>
    );
  }
}

Takeover.propTypes = {
  /**
   * Content for the takeover
   */
  children: PropTypes.node.isRequired,

  /**
   * Should the takeover be opened on page load; probably only ever true if the
   * takeover has its own URL, i.e., lonelyplanet.com/asia/map could load the
   * takeover opened
   */
  isOpened: PropTypes.bool,

  /**
   * Should an overlay be displayed beneath the takeover to obscure the page
   * content; generally, if `cover` is true, this can be false (but it doesn't
   * have to be)
   */
  hasOverlay: PropTypes.bool,

  /**
   * Should the takeover close when the header is clicked; note that the close
   * button in the header will *always* close the takeover and this prop allows
   * for the any part of the header to be clicked to close the takeover
   */
  closeOnHeaderClick: PropTypes.bool,

  /**
   * Should the takeover cover the entire height of the viewport
   */
  cover: PropTypes.bool,

  /**
   * A title for the takeover's header
   */
  title: PropTypes.string,

  /**
   * Whether or not the layout is mobile
   */
  mobile: PropTypes.bool,

  /**
   * Should the content fill the entire width and height of the area provided,
   * i.e., no padding
   */
  contentFill: PropTypes.bool,

  /**
   * Can the content scroll?
   */
  scroll: PropTypes.bool,
};

Takeover.defaultProps = {
  children: null,
  isOpened: false,
  hasOverlay: false,
  closeOnHeaderClick: false,
  cover: false,
  title: "",
  mobile: false,
  contentFill: false,
  scroll: false,
};

export default radium(Takeover);
