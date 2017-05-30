import React, { PropTypes } from "react";
import Modal from "react-modal";
import radium, { Style } from "radium";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { textHeading6 } from "../../utils/typography";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const largeMQ = `(min-width: ${mq.min["768"]})`;
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
    position: "absolute",
    backgroundColor: "transparent",
    top: 0,
    padding: "16px",

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

    [`@media ${largeMQ}`]: {
      display: "none",
    },
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
  rightAction,
  rightActionContent,
  title,
  children,
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
      position: "absolute",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      border: 0,
      borderRadius: 0,
      boxShadow: `0 27px 50px ${rgba(colors.bgOverlay, 0.36)}`,
      top: 0,
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
      bottom: "auto",
      height: "100vh",
      width: "100%",
    },

    mediaQueries: {
      [largeMQ]: {
        ".ModalBase": {
          maxHeight: desktopMaxHeight,
          top: "50%",
          width: desktopWidth,
          maxWidth: "1290px",
          transform: "translateY(-50%)",
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
      className="ModalBase"
    >
      <Style
        scopeSelector=".ReactModalPortal"
        rules={rules}
      />

      <header
        className="Modal-header clearfix"
        style={[
          styles.header,
          title && {
            [`@media (max-width: ${mq.max["768"]})`]: {
              borderBottom: `1px solid ${colors.borderPrimary}`,
            },
          },
        ]}
      >
        {leftAction &&
          <button
            style={[styles.actionItem, styles.leftAction]}
            onClick={leftAction}
          >
            {leftActionContent}
          </button>
        }

        {title &&
          <span style={styles.title}>
            {title}
          </span>
        }

        {rightAction &&
          <button
            style={[styles.actionItem, styles.rightAction]}
            onClick={rightAction}
          >
            {rightActionContent}
          </button>
        }
      </header>

      <div
        className="Modal-content"
        style={styles.contentContainer}
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
  rightAction: PropTypes.func,
  rightActionContent: PropTypes.node,
  closeTimeoutMS: PropTypes.number,
  contentLabel: PropTypes.string,
  desktopMaxHeight: PropTypes.string,
  desktopWidth: PropTypes.string,
  title: PropTypes.string,
  style: propTypes.style,
};

ModalComponent.defaultProps = {
  isOpen: false,
  desktopMaxHeight: "85vh",
  desktopWidth: "85%",
  closeTimeoutMS: timing.default,
};

ModalComponent.styles = styles;

export default radium(ModalComponent);
