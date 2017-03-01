import React from "react";
import Modal from "react-modal";
import radium, { Style } from "radium";
import { Close as CloseIcon } from "../icon";
import { color, media, zIndex } from "../../../settings.json";
import Heading from "../heading";
import { rgb } from "../../utils/color";

const largeMQ = `(min-width: ${media.min["768"]})`;
const closeIconSize = 24;

const styles = {
  overlay: {
    backgroundColor: `rgba(${rgb(color.black)}, .4)`,
    overflow: "hidden",
    zIndex: zIndex.modal - 2,
  },
  header: {
    borderBottom: `1px solid ${color.gray}`,
    paddingBottom: "16px",
    position: "relative",
    textAlign: "center",
    textTransform: "uppercase",
    [`@media ${largeMQ}`]: {
      paddingBottom: 0,
      borderBottom: 0,
    },
  },
  contentContainer: {
    paddingTop: "32px",
    [`@media ${largeMQ}`]: {
      paddingTop: "96px",
    },
  },
  close: {
    backgroundColor: color.white,
    border: 0,
    color: color.titleGray,
    fontSize: `${closeIconSize}px`,
    position: "absolute",
    top: `-${closeIconSize / 2}px`,
    [`@media ${largeMQ}`]: {
      top: 0,
    },
  },
  selectNone: {
    backgroundColor: "transparent",
    color: color.blue,
    fontSize: "11px",
    fontWeight: 600,
    position: "absolute",
    textTransform: "uppercase",
    top: "-1px",
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

const rules = {
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
  padding: "48px",
  maxHeight: "100vh",
  width: "100%",
  mediaQueries: {
    [largeMQ]: {
      maxHeight: "85vh",
      top: "50%",
      width: "85%",
      maxWidth: "1290px",
      transform: "translateY(-50%)",
    },
  },
};

function ModalComponent({
  isOpen,
  selectNone,
  onSelectNone,
  title,
  closeModal,
  closeLocation,
  children,
}) {
  return (
    <Modal
      isOpen={isOpen}
      style={styles}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className="ModalContent"
    >
      <Style
        scopeSelector=".ModalContent"
        rules={rules}
      />
      <header
        className="Modal-header"
        style={styles.header}
      >
        {selectNone &&
          <button
            style={[styles.selectNone, { [closeLocation === "right" ? "left" : "right"]: 0 }]}
            onClick={onSelectNone}
          >
            Select None
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

        <button
          style={[styles.close, { [closeLocation]: 0 }]}
          onClick={closeModal}
        >
          <CloseIcon />
        </button>
      </header>

      <div
        className="Modal-content"
        style={styles.contentContainer}
      >
        <Heading
          level={2}
          size="huge"
          weight="thick"
          override={styles.desktopTitle}
        >
          {title}
        </Heading>
        {children}
      </div>
    </Modal>
  );
}

ModalComponent.propTypes = {
  /**
   * Set modal to open or closed
   */
  isOpen: React.PropTypes.bool.isRequired,

  /**
   * Set selectNone visibility
   */
  selectNone: React.PropTypes.bool,

  /**
   * Clear all selected filters
   */
  onSelectNone: React.PropTypes.func,

  /**
   * Modal title
   */
  title: React.PropTypes.string.isRequired,

  /**
   * Function to close modal
   */
  closeModal: React.PropTypes.func.isRequired,

  /**
   * Function to close modal
   */
  closeLocation: React.PropTypes.oneOf(["left", "right"]),

  /**
   * Contents of modal
   */
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.string,
  ]).isRequired,
};

ModalComponent.defaultProps = {
  isOpen: false,

  selectNone: false,

  onSelectNone: null,

  closeLocation: "right",

  title: "Modal",

  closeModal: null,

  children: null,
};

ModalComponent.styles = styles;

export default radium(ModalComponent);
