import React from "react";
import radium from "radium";
import _ from "lodash";
import settings from "../../../settings.json";

const styles = {
  container: {
    width: "100%",
    height: "100%",

    /*
     * Any shorter than 228px and Brightcove's
     * share controls won't fit
     */
    minHeight: "228px",
  },

  video: {
    width: "100%",
    height: "100%",
  },
};

const css = `
  .VideoEmbed .vjs-play-progress,
  .VideoEmbed .vjs-volume-level,
  .VideoEmbed .vjs-big-play-button:hover,
  .VideoEmbed .vjs-big-play-button:active {
    background-color: ${settings.color.lpBlue};
  }

  @media (max-width: ${settings.media.max["480"]}) {
    .VideoEmbed .vjs-big-play-button {
      transform: scale(.7);
      -webkit-transform: scale(.7);
      -moz-transform: scale(.7);
      -ms-transform: scale(.7);
    }
  }
`;

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

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
    const nextVideoId = _.get(nextProps, "videoId", this.props.videoId);
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
    return _.kebabCase(this.props.id) + "-VideoEmbed-initialize";
  }

  getPlayerVideoClassName() {
    return _.kebabCase(this.props.id) + "-VideoEmbed-video";
  }

  isReady() {
    return this.player && this.player.isReady_;
  }

  setupPlayer() {
    const scriptId = this.getPlayerScriptId();
    const scriptSrc = "https://players.brightcove.net/" + this.accountId + "/" + this.playerId + "_" + this.embedId + "/index.min.js";

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
    const { id, videoId, override } = this.props;

    const containerStyle = [styles.container];
    if (override) {
      containerStyle.push(override);
    }

    return (
      <div className="VideoEmbed" style={containerStyle}>
        <style dangerouslySetInnerHTML={markup(css)} />
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
  /**
   * Unique element ID (prefix) for elements within this component
   */
  id: React.PropTypes.string.isRequired,

  /**
   * The Brightcove Video ID
   */
  videoId: React.PropTypes.string.isRequired,

  /**
   * Override styles
   */
  override: React.PropTypes.oneOfType([
    React.PropTypes.object,
  ]),
};

VideoEmbed.defaultProps = {
  id: "",
  videoId: "",
  override: {}
};

VideoEmbed.styles = styles;

export default radium(VideoEmbed);
