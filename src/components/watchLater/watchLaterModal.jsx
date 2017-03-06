import React, { PropTypes } from "react";
import radium from "radium";
import Modal from "../modal";
import { Close } from "../icon";
import CardVideo from "../cardVideo";
import ModalContentWatchLaterList from "../modalContent/modalContentWatchLaterList";
import ModalContentSocialAuth from "../modalContent/modalContentSocialAuth";
import propTypes from "../../utils/propTypes";

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
      style,
    } = this.props;
    return (
      <Modal
        isOpen={this.state.isOpen}
        leftAction={this.toggleOpen}
        leftActionContent={<Close width={24} height={24} />}
        closeModal={this.toggleOpen}
        desktopWidth={loggedIn ? "85%" : "650px"}
        title={loggedIn && "Watch Later"}
        style={style}
      >
        { loggedIn ? (
          <ModalContentWatchLaterList videos={videos} removeVideo={removeVideo} />
        ) : (
          <ModalContentSocialAuth message={authMessage} />
        )}
      </Modal>
    );
  }
}


WatchLaterModal.propTypes = {
  loggedIn: PropTypes.bool,
  isOpen: PropTypes.bool,
  videos: PropTypes.arrayOf(PropTypes.shape(CardVideo.propTypes)),
  removeVideo: PropTypes.func,
  authMessage: PropTypes.string,
  style: propTypes.style,
};

export default radium(WatchLaterModal);
