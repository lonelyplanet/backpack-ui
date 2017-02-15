import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import get from "lodash/get";
import kebabCase from "lodash/kebabCase";
import { color, media } from "../../../settings.json";

const _ = { get, kebabCase };

const styles = {
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: `${(9 / 16) * 100}%`,
    position: "relative",
    overflow: "hidden",

    /*
     * Any shorter than 228px and Brightcove's
     * share controls won't fit
     */
    minHeight: "228px",
  },

  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
};

const scopedStyles = {
  ".vjs-play-progress": {
    backgroundColor: color.blue,
  },
  ".vjs-volume-level": {
    backgroundColor: color.blue,
  },
  ".vjs-big-play-button:hover": {
    backgroundColor: color.blue,
  },
  ".vjs-big-play-button:active": {
    backgroundColor: color.blue,
  },
  ".vjs-big-play-button:focus": {
    backgroundColor: color.blue,
  },

  mediaQueries: {
    [`(max-width: ${media.max["480"]})`]: {
      ".vjs-big-play-button": {
        transform: "scale(.7)",
      },
    },
  },
};

class VideoEmbed extends Component {
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

  componentWillReceiveProps(nextProps) {
    const nextVideoId = _.get(nextProps, "videoId", this.props.videoId);

    if (nextVideoId !== this.props.videoId) {
      this.loadVideo(nextVideoId);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Video.js restructures our video element in ways that it relies on so
    // we bypass all re-rendering through React and put all control on video.js.
    return false;
  }

  componentWillUnmount() {
    this.tearDownPlayer();
  }

  onLoadSetupScript() {
    const videoElement = document.getElementsByClassName(this.getPlayerVideoClassName())[0];
    this.player = window.videojs(videoElement);
    this.player.ready(this.onPlayerReady.bind(this));
  }

  onPlayerReady() {
    this.loadVideo(this.props.videoId);
  }

  getPlayerVideoClassName() {
    return `${_.kebabCase(this.props.id)}-VideoEmbed-video`;
  }

  getPlayerScriptId() {
    return `${_.kebabCase(this.props.id)}-VideoEmbed-initialize`;
  }

  setupPlayer() {
    const scriptId = this.getPlayerScriptId();
    const scriptSrc = `https://players.brightcove.net/${this.accountId}/${this.playerId}_${this.embedId}/index.min.js`;
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
  }

  isReady() {
    return this.player && this.player.isReady_;
  }

  loadVideo(videoId) {
    if (!this.isReady()) {
      return;
    }

    this.player.catalog.getVideo(videoId, (error, video) => {
      if (!error) {
        this.player.catalog.load(video);
        if (this.props.autoPlay) {
          this.player.play();
        }
      }
    });
  }

  render() {
    const { override } = this.props;

    return (
      <div
        className="VideoEmbed"
        style={[styles.container, override]}
      >
        <Style
          scopeSelector=".VideoEmbed"
          rules={scopedStyles}
        />

        <video
          style={styles.video}
          data-account={this.accountId}
          data-player={this.playerId}
          data-embed={this.embedId}
          className={`video-js ${this.getPlayerVideoClassName()}`}
          controls
        />
      </div>
    );
  }
}

VideoEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  override: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

VideoEmbed.defaultProps = {
  autoPlay: true,
};

export default radium(VideoEmbed);
