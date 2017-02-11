import React from "react";
import radium from "radium";
import { Link } from "react-router";
import settings from "../../../settings.json";
import { gutter } from "../../utils/grid";
import font from "../../utils/font";
import { rgb, lighten } from "../../utils/color";
import Heading from "../heading";
import { Play } from "../icon";

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },

  video: {
    width: '600px',
    height: '400px',
  },
};

class VideoEmbed extends React.Component {
  constructor(props) {
    super(props);

    this.accountId = "5104226627001";
    this.playerId = "default";
    this.embedId = "default";

    this.player = null;
  }

  componentDidMount() {
    this.setupPlayer();
  }

  componentWillUnmount() {
    this.tearDownPlayer();
  }

  componentWillReceiveProps(nextProps) {
    const nextVideoId = typeof nextProps.videoId == "undefined" ? this.props.videoId : nextProps.videoId;
    if (nextVideoId != this.props.videoId) {
      this.loadVideo(nextVideoId);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Video.js restructures our video element in ways that it relies on so
    // we bypass all re-rendering through React and put all control on video.js.
    return false;
  }

  getPlayerScriptId() {
    return this.props.id + "-VideoEmbed-initialize";
  }

  getPlayerVideoClassName() {
    return this.props.id + "-VideoEmbed-video";
  }

  isReady() {
    return this.player && this.player.isReady_;
  }

  setupPlayer() {

    const scriptId = this.getPlayerScriptId();
    const scriptSrc = "https://players.brightcove.net/" + this.accountId + "/" + this.playerId + "_default/index.min.js";

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = scriptSrc;
    script.onload = this.onLoadSetupScript.bind(this);

    document.body.appendChild(script);
  }

  tearDownPlayer() {
    const scriptId = this.getPlayerScriptId();
    const script = document.getElementById(scriptId);
    if (script) {
      script.remove();
    }

    if (this.player) {
      this.player.dispose();
      this.player = null;
    }

    this.ready = false;
  }

  onLoadSetupScript() {
    const videoElement = document.getElementsByClassName(this.getPlayerVideoClassName())[0];
    this.player = videojs(videoElement);
  }


  loadVideo(videoId) {
    if (!this.isReady()) {
      return;
    }
    this.player.catalog.getVideo(videoId, (error, video) => {
      if (!error) {
        this.player.catalog.load(video);
      }
    });
  }

  render () {
    const { id, videoId } = this.props;
    return (
      <div className="VideoEmbed" style={styles.container}>
        <video
          style={styles.video}
          data-video-id={videoId}
          data-account={this.accountId}
          data-player={this.playerId}
          data-embed={this.embedId}
          className={`video-js ${this.getPlayerVideoClassName()}`}
          controls>
        </video>
      </div>
    );
  }
}

VideoEmbed.propTypes = {
  id: React.PropTypes.string.isRequired,
  videoId: React.PropTypes.string.isRequired,
};

VideoEmbed.defaultProps = {
  id: "",
  videoId: "",
};

VideoEmbed.styles = styles;

export default radium(VideoEmbed);
