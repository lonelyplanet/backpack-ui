import React from "react";

import Modal from "../modal";
import { Close } from "../icon";


import WatchLaterListModalContent from "../modalContent/watchLaterListModalContent";
import SocialAuthModalContent from "../modalContent/socialAuthModalContent";

const WatchLaterModal = ({
  loggedIn,
  authMessage,
  isOpen,
  videos,
  toggle,
  removeVideo,
}) => (
  <Modal
    isOpen={isOpen}
    leftAction={() => {}}
    leftActionContent={<Close width={24} height={24} />}
    closeModal={toggle}
    desktopWidth={loggedIn ? "85%" : "650px"}
    title={loggedIn && "Watch Later"}
  >
    { loggedIn ? (
      <WatchLaterListModalContent videos={videos} removeVideo={removeVideo} />
    ) : (
      <SocialAuthModalContent message={authMessage} />
    )}
  </Modal>
);


WatchLaterModal.propTypes = {
  loggedIn: React.PropTypes.bool,
  isOpen: React.PropTypes.bool,
  videos: React.PropTypes.arrayOf(React.PropTypes.object),
  removeVideo: React.PropTypes.func,
  toggle: React.PropTypes.func,
  authMessage: React.PropTypes.string,
};

export default WatchLaterModal;
