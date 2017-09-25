import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Modal from "../modal";
import { Close } from "../icon";
import CardVideo from "../cardVideo";
import ModalContentWatchLaterList from "../modalContent/modalContentWatchLaterList";
import ModalContentSocialAuth from "../modalContent/modalContentSocialAuth";
import propTypes from "../../utils/propTypes";
import { span } from "../../utils/grid";

const WatchLaterModal = ({
  loggedIn,
  isOpen,
  onClose,
  authMessage,
  videos,
  removeVideo,
  removeAll,
  style,
}) => (
  <Modal
    isOpen={isOpen}
    leftAction={onClose}
    leftActionContent={<Close width={24} height={24} />}
    closeModal={onClose}
    desktopWidth={(loggedIn && videos.length > 0) ? "85%" : span(6, "static")}
    title={loggedIn ? "Watch Later" : ""}
    style={style}
  >
    {loggedIn ? (
      <ModalContentWatchLaterList
        videos={videos}
        removeVideo={removeVideo}
        removeAll={removeAll}
      />
    ) : (
      <ModalContentSocialAuth message={authMessage} />
    )}
  </Modal>
);

WatchLaterModal.propTypes = {
  loggedIn: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  videos: PropTypes.arrayOf(PropTypes.shape(CardVideo.propTypes)),
  removeVideo: PropTypes.func,
  removeAll: PropTypes.func,
  authMessage: PropTypes.string,
  style: propTypes.style,
};

export default radium(WatchLaterModal);
