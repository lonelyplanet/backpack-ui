import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Modal from "../modal";
import { Close } from "../icon";
import ModalContentSocialAuth from "../modalContent/modalContentSocialAuth";
import propTypes from "../../utils/propTypes";
import { span } from "../../utils/grid";

const ModalLogIn = ({ isOpen, onClose, style, qahook }) => (
  <Modal
    isOpen={isOpen}
    leftAction={onClose}
    leftActionContent={<Close width={24} height={24} />}
    closeModal={onClose}
    desktopMaxHeight="650px"
    desktopWidth={span(6, "static")}
    style={style}
    qahook={qahook}
  >
    <ModalContentSocialAuth
      qahook={qahook}
      message="Organize your research and unlock tools like lists."
    />
  </Modal>
);

ModalLogIn.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  style: propTypes.style,
  qahook: PropTypes.bool,
};

ModalLogIn.defaultProps = {
  qahook: false,
};

export default radium(ModalLogIn);
