import React from "react";

import Modal from "../modal";
import { Close } from "../icon";


import WatchLaterListModalContent from "../modalContent/watchLaterListModalContent";
import SocialAuthModalContent from "../modalContent/socialAuthModalContent";

class WatchLaterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentWillMount() {
    this.setState({
      isOpen: this.props.isOpen,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isOpen: nextProps.isOpen,
    });
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {
      loggedIn,
      authMessage,
      videos,
      removeVideo,
    } = this.props;
    return (
      <Modal
        isOpen={this.state.isOpen}
        leftAction={this.toggleOpen}
        leftActionContent={<Close width={24} height={24} />}
        closeModal={this.toggleOpen}
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
  }
}


WatchLaterModal.propTypes = {
  loggedIn: React.PropTypes.bool,
  isOpen: React.PropTypes.bool,
  videos: React.PropTypes.arrayOf(React.PropTypes.object),
  removeVideo: React.PropTypes.func,
  authMessage: React.PropTypes.string,
};

export default WatchLaterModal;
