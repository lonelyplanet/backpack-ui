import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Portal from "react-portal";
import cn from "classnames";
import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import { span } from "../../utils/grid";
import propTypes from "../../utils/propTypes";
import { Heading, TextBodySmall } from "../text";
import Overlay from "../overlay";

const styles = {
  container: {
    default: {
      backgroundColor: colors.bgPrimary,
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: span(4, "static"),
      padding: "48px 24px",
      position: "relative",
      textAlign: "center",
      width: `${(343 / 375) * 100}vw`,
      zIndex: zIndex.dialog,
    },

    centered: {
      left: 0,
      marginBottom: "auto",
      marginTop: "auto",
      position: "fixed",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },

    hidden: {
      display: "none",
    },
  },

  heading: {
    marginBottom: "16px",
  },

  actions: {
    display: "table",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "48px",
    maxWidth: "100%",
    minWidth: "140px",
  },

  action: {
    display: "block",
    minHeight: "44px",
    paddingTop: `${17 / 11}em`,
    paddingRight: `${48 / 11}em`,
    paddingBottom: `${16 / 11}em`,
    paddingLeft: `${48 / 11}em`,
    width: "100%",
  },
};

class Dialog extends Component {
  constructor(props) {
    super(props);

    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown(event) {
    const { isOpen, onClose, modal } = this.props;

    if (event.keyCode === 27 && isOpen && modal) {
      onClose();
    }
  }

  render() {
    const {
      children,
      isOpen,
      actions,
      modal,
      onClose,
      title,
      hasOverlay,
      centered,
      className,
      id,
      style,
    } = this.props;

    return (
      <div>
        <Portal
          isOpened={isOpen}
          style={{ height: 0, width: 0 }}
        >
          <div
            className={cn("Dialog", className)}
            id={id}
            role="alertdialog"
            tabIndex={isOpen ? 0 : -1}
            aria-hidden={isOpen ? "false" : "true"}
            aria-labelledby={id ? `${id}-title` : null}
            aria-describedby={id ? `${id}-message` : null}
            style={[
              styles.container.default,
              centered && styles.container.centered,
              hasOverlay && { zIndex: zIndex.modal },
              !isOpen && styles.container.hidden,
              style,
            ]}
          >
            {title &&
              <Heading
                level={6}
                size={6}
                weight="medium"
                id={id ? `${id}-title` : null}
                style={styles.heading}
              >
                {title}
              </Heading>
            }

            <TextBodySmall id={id ? `${id}-message` : null}>
              {children}
            </TextBodySmall>

            {actions &&
              <div style={styles.actions}>
                {React.Children.map(actions, (child, index) => (
                  React.cloneElement(child, {
                    key: index,
                    customStyles: [
                      styles.action,
                      index > 0 && { marginTop: "16px" },
                    ],
                  })
                ))}
              </div>
            }
          </div>
        </Portal>

        {hasOverlay &&
          <Overlay
            attached={isOpen}
            onClick={modal ? onClose : null}
            visible={isOpen}
          />
        }
      </div>
    );
  }
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  actions: PropTypes.node.isRequired,
  modal: PropTypes.bool,
  onClose: PropTypes.func,
  hasOverlay: PropTypes.bool,
  centered: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  style: propTypes.style,
};

export default radium(Dialog);
