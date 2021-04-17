import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const ModalAction = ({ children, disabled }) => (
  <span style={Object.assign({}, styles.mobileSaveButton, disabled && { opacity: 0.5 })}>
    {children}
  </span>
);

ModalAction.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

ModalAction.defaultProps = {
  disabled: false,
};

export default ModalAction;
