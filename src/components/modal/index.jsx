import React from "react";
import Modal from "react-modal";
import radium, { Style } from "radium";
import { color, media, timing, zIndex } from "../../../settings.json";
import Heading from "../heading";
import { rgb } from "../../utils/color";

const largeMQ = `(min-width: ${media.min["768"]})`;
const sidePadding = "48px";

const styles = {
  overlay: {
    backgroundColor: `rgba(${rgb(color.black)}, .4)`,
    overflow: "hidden",
    zIndex: zIndex.modal - 2,
  },
  header: {
    borderBottom: `1px solid ${color.gray}`,
    paddingBottom: "16px",
    paddingTop: "16px",
    position: "relative",
    textAlign: "center",
    textTransform: "uppercase",
    [`@media ${largeMQ}`]: {
      paddingLeft: sidePadding,
      paddingRight: sidePadding,
      paddingTop: "48px",
      paddingBottom: 0,
      borderBottom: 0,
      textAlign: "left",
    },
  },
  contentContainer: {
    paddingTop: "32px",
    paddingBottom: "32px",
    paddingLeft: sidePadding,
    paddingRight: sidePadding,
    [`@media ${largeMQ}`]: {
      paddingTop: "96px",
      paddingBottom: "96px",
    },
  },
  actionItem: {
    position: "absolute",
    backgroundColor: "transparent",
    top: "12px",
    [`@media ${largeMQ}`]: {
      top: sidePadding,
    },
  },
  rightAction: {
    right: "16px",
    [`@media ${largeMQ}`]: {
      right: sidePadding,
    },
  },
  leftAction: {
    left: "16px",
    [`@media ${largeMQ}`]: {
      left: sidePadding,
    },
  },
  desktopTitle: {
    display: "none",
    [`@media ${largeMQ}`]: {
      display: "block",
      textAlign: "center",
      paddingBottom: "104px",
    },
  },
  mobileTitle: {
    display: "block",
    [`@media ${largeMQ}`]: {
      display: "none",
    },
  },
};

function ModalComponent({
  isOpen,
  closeModal,
  closeTimeoutMS,
  contentLabel,
  desktopWidth,
  leftAction,
  leftActionContent,
  rightAction,
  rightActionContent,
  title,
  children,
}) {
  const rules = {
    ".ReactModal__Content--after-open.ReactModal__Content--before-close": {
      opacity: 0,
      transform: "translateY(55%)",
      transition: `opacity ${timing.default},
        transform ${timing.default}`,
    },
    ".ReactModal__Content--after-open": {
      opacity: "1 !important",
      transform: "tranlateY(0) !important",
      transition: `opacity ${timing.default},
        transform ${timing.default}`,
    },
    ".ReactModal__Overlay--after-open.ReactModal__Overlay--before-close": {
      opacity: 0,
      transition: `opacity ${timing.default},
        transform ${timing.default}`,
    },
    ".ReactModal__Overlay--after-open": {
      opacity: 1,
      transition: `opacity ${timing.default},
        transform ${timing.default}`,
    },
    ".ModalBase": {
      background: color.white,
      position: "absolute",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      border: 0,
      borderRadius: 0,
      boxShadow: `0 27px 50px rgba(${rgb(color.black)}, .36)`,
      top: 0,
      left: 0,
      right: 0,
      zIndex: zIndex.modal,
      marginLeft: "auto",
      marginRight: "auto",
      bottom: "auto",
      height: "100vh",
      width: "100%",
    },
    mediaQueries: {
      [largeMQ]: {
        ".ModalBase": {
          maxHeight: "85vh",
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
      style={styles}
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
        style={styles.header}
      >
        {leftAction &&
          <button
            style={[styles.actionItem, styles.leftAction]}
            onClick={leftAction}
          >
            {leftActionContent}
          </button>
        }
        <Heading
          level={4}
          size="small"
          weight="thick"
          override={styles.mobileTitle}
          caps
        >
          {title}
        </Heading>

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
        {title &&
          <Heading
            level={2}
            size="huge"
            weight="thick"
            override={styles.desktopTitle}
          >
            {title}
          </Heading>
        }
        {children}
      </div>
    </Modal>
  );
}

ModalComponent.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func,
  leftAction: React.PropTypes.func,
  leftActionContent: React.PropTypes.node,
  rightAction: React.PropTypes.func,
  rightActionContent: React.PropTypes.node,
  closeTimeoutMS: React.PropTypes.number,
  contentLabel: React.PropTypes.string,
  desktopWidth: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]).isRequired,
};

ModalComponent.defaultProps = {
  isOpen: false,
  title: "Modal",
  desktopWidth: "85%",
  contentLabel: "Modal",
  closeTimeoutMS: 500,
  children: null,
};

ModalComponent.styles = styles;

export default radium(ModalComponent);
