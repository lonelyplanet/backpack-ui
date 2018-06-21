import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";
import { textHeading6 } from "../../utils/typography";

const largeMQ = `(min-width: ${mq.min[768]})`;
const modalPadding = 24;

const styles = {
  overlay: {
    backgroundColor: rgba(colors.bgOverlay, 0.3),
    overflow: "hidden",
    zIndex: zIndex.modal,
  },

  header: {
    alignItems: "center",
    display: "flex",
    height: "56px",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",

    [`@media ${largeMQ}`]: {
      height: "72px",
    },
  },

  contentContainer: {
    padding: "40px",

    [`@media ${largeMQ}`]: {
      padding: "8px 56px",
    },
  },

  actionItem: {
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "16px",
    position: "absolute",
    top: 0,

    [`@media ${largeMQ}`]: {
      padding: `${modalPadding}px`,
    },
  },

  rightAction: {
    right: 0,
  },

  leftAction: {
    left: 0,
  },

  title: Object.assign({}, {
    display: "inline-block",
  }, textHeading6("medium"), {
    lineHeight: 1,
  }),
};

function ModalComponent({
  isOpen,
  closeModal,
  closeTimeoutMS,
  contentLabel,
  desktopMaxHeight,
  desktopWidth,
  leftAction,
  leftActionContent,
  leftActionDisabled,
  rightAction,
  rightActionContent,
  rightActionDisabled,
  disableContentPadding,
  title,
  showTitle,
  hideHeader,
  className,
  children,
  contentStyle,
  style,
}) {
  const rules = {
    ".ReactModal__Content": {
      outline: 0,
    },

    ".ReactModal__Content--after-open.ReactModal__Content--before-close": {
      opacity: 0,
      transform: "translateY(55%)",
      transition: `opacity ${timing.default},
        transform ${timing.default}`,
    },

    ".ReactModal__Content--after-open": {
      opacity: 1,
      transform: "translateY(0)",
      transition: `opacity ${timing.default},
        transform ${timing.default}`,
    },

    ".ReactModal__Overlay--after-open.ReactModal__Overlay--before-close": {
      opacity: 0,
      transition: `opacity ${timing.default}`,
    },

    ".ReactModal__Overlay--after-open": {
      opacity: 1,
      transition: `opacity ${timing.default}`,
    },

    ".ModalBase": {
      background: colors.bgPrimary,
      border: 0,
      borderRadius: 0,
      bottom: "auto",
      boxShadow: `0 27px 50px ${rgba(colors.bgOverlay, 0.36)}`,
      height: "100vh",
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      MsOverflowStyle: "-ms-autohiding-scrollbar",
      overflow: "auto",
      position: "absolute",
      right: 0,
      top: 0,
      WebkitOverflowScrolling: "touch",
      width: "100%",
      transform: "translate3d(0, 0, 0) !important",
    },

    mediaQueries: {
      [largeMQ]: {
        ".ModalBase": {
          maxHeight: desktopMaxHeight,
          top: "50%",
          width: desktopWidth,
          maxWidth: "1290px",
          transform: "translate3d(0, -50%, 0) !important",
        },
      },
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={Object.assign({}, styles, style)}
      onRequestClose={closeModal}
      closeTimeoutMS={closeTimeoutMS}
      contentLabel={contentLabel}
      className={className ? `ModalBase ${className}` : "ModalBase"}
    >
      <Style
        scopeSelector=".ReactModalPortal"
        rules={rules}
      />

      {!hideHeader &&
        <header
          className="Modal-header clearfix"
          style={[
            styles.header,
            title && {
              [`@media (max-width: ${mq.max[768]})`]: {
                borderBottom: `1px solid ${colors.borderPrimary}`,
              },
            },
          ]}
        >
          {leftAction &&
            <button
              style={[styles.actionItem, styles.leftAction]}
              disabled={leftActionDisabled}
              onClick={leftAction}
            >
              {leftActionContent}
            </button>
          }

          {title &&
            <span
              style={[
                styles.title,
                !showTitle && {
                  [`@media ${largeMQ}`]: {
                    display: "none",
                  },
                },
              ]}
            >
              {title}
            </span>
          }

          {rightAction &&
            <button
              style={[styles.actionItem, styles.rightAction]}
              disabled={rightActionDisabled}
              onClick={rightAction}
            >
              {rightActionContent}
            </button>
          }
        </header>
      }

      <div
        className="Modal-content"
        style={Object.assign(
          {},
          !disableContentPadding ? styles.contentContainer : {},
          contentStyle,
        )}
      >
        {children}
      </div>
    </Modal>
  );
}

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  closeModal: PropTypes.func,
  leftAction: PropTypes.func,
  leftActionContent: PropTypes.node,
  leftActionDisabled: PropTypes.bool,
  rightAction: PropTypes.func,
  rightActionContent: PropTypes.node,
  rightActionDisabled: PropTypes.bool,
  closeTimeoutMS: PropTypes.number,
  contentLabel: PropTypes.string,
  desktopMaxHeight: PropTypes.string,
  desktopWidth: PropTypes.string,
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  hideHeader: PropTypes.bool,
  className: PropTypes.string,
  disableContentPadding: PropTypes.bool,
  contentStyle: propTypes.style,
  style: propTypes.style,
};

ModalComponent.defaultProps = {
  isOpen: false,
  desktopMaxHeight: "85vh",
  desktopWidth: "85%",
  closeTimeoutMS: timing.numDefault,
  disableContentPadding: false,
  hideHeader: false,
};

ModalComponent.styles = styles;

export default radium(ModalComponent);
