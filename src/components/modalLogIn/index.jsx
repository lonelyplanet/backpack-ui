import React, { PropTypes } from "react";
import radium from "radium";
import Modal from "../modal";
import { Close } from "../icon";
import ModalContentSocialAuth from "../modalContent/modalContentSocialAuth";
import propTypes from "../../utils/propTypes";
import { span } from "../../utils/grid";

const ModalLogIn = ({ isOpen, onClose, style }) => (
  <Modal
    isOpen={isOpen}
    leftAction={onClose}
    leftActionContent={<Close width={24} height={24} />}
    closeModal={onClose}
    desktopMaxHeight="650px"
    desktopWidth={span(6, "static")}
    style={style}
  >
    <ModalContentSocialAuth
      message="Organize your research and unlock tools like bookmarking."
    />
  </Modal>
);

ModalLogIn.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  style: propTypes.style,
};

export default radium(ModalLogIn);
