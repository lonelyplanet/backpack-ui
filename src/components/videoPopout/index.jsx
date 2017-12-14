import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { rgba } from "../../utils/color";
import VideoEmbed from "../videoEmbed";
import { Close } from "../icon";
import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import timing from "../../styles/timing";
import propTypes from "../../utils/propTypes";

const styles = {
  outerContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    paddingBottom: `${(9 / 16) * 100}%`,
    backgroundColor: "black",
  },

  innerContainer: {
    default: {
      overflow: "hidden",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      transition: `opacity ${timing.fast} ease`,
    },
    outOfView: {
      opacity: 0,
    },
    fixedToWindow: {
      position: "fixed",
      zIndex: zIndex.popup,
      right: "20px",
      bottom: "20px",
      width: "60%",
      maxWidth: "406px",
      height: "initial",
      boxShadow: `0px 1px 8px 0px ${rgba("#000000", 0.4)}`,
    },
    poppedOut: {
      opacity: 1,
    },
  },

  overlay: {
    position: "absolute",
    top: -30,
    right: 0,
    zIndex: zIndex.default,
    display: "inline-block",
    opacity: 0,
    transition: `top ${timing.fast} ease, opacity ${timing.fast} ease`,
    textAlign: "right",
  },

  closeButton: {
    padding: "2px 6px",
    color: colors.textOverlay,
    backgroundColor: `${rgba("#000000", 0.55)}`,
  },
};

class VideoPopout extends Component {
  constructor(props) {
    super(props);

    this.enabled = false;
    this.outOfViewTimeoutId = null;
    this.inViewTimeoutId = null;

    this.container = null;
    this.videoEmbed = null;

    this.outOfView = false;

    this.state = {
      outOfView: false,
      fixedToWindow: false,
      poppedOut: false,
      hover: false,
      adIsPlaying: false,
      mutedOverlayVisible: false,
    };

    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onVideoEmbedPlaying = this.onVideoEmbedPlaying.bind(this);
    this.onVideoEmbedPause = this.onVideoEmbedPause.bind(this);
    this.onVideoEmbedAdStarted = this.onVideoEmbedAdStarted.bind(this);
    this.onVideoEmbedAdPlay = this.onVideoEmbedAdPlay.bind(this);
    this.onVideoEmbedAdPause = this.onVideoEmbedAdPause.bind(this);
    this.onVideoEmbedMutedOverlayVisible = this.onVideoEmbedMutedOverlayVisible.bind(this);
    this.onVideoEmbedMutedOverlayHidden = this.onVideoEmbedMutedOverlayHidden.bind(this);
    this.onClickCloseButton = this.onClickCloseButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize() {
    this.update();
  }

  onWindowScroll() {
    this.update();
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  onVideoEmbedAdPlay() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onAdPlay) {
      videoEmbed.onAdPlay();
    }

    this.enabled = true;
    this.setState({ adIsPlaying: true });
  }

  onVideoEmbedAdPause() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onAdPause) {
      videoEmbed.onAdPause();
    }

    if (!this.outOfView) {
      this.enabled = false;
    }

    this.setState({ adIsPlaying: false });
  }

  onVideoEmbedPlaying() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onPlaying) {
      videoEmbed.onPlaying();
    }

    this.enabled = true;
    this.setState({ adIsPlaying: false });
    this.update();
  }

  onVideoEmbedPause() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onPause) {
      videoEmbed.onPause();
    }

    if (!this.outOfView) {
      this.enabled = false;
    }
  }

  onVideoEmbedAdStarted() {
    const { videoEmbed } = this.props;
    if (videoEmbed.onAdStarted) {
      videoEmbed.onAdStarted();
    }

    this.enabled = true;
    this.setState({ adIsPlaying: true });
    this.update();
  }

  onVideoEmbedMutedOverlayVisible() {
    this.setState({ mutedOverlayVisible: true });
  }

  onVideoEmbedMutedOverlayHidden() {
    this.setState({ mutedOverlayVisible: false });
  }

  onClickCloseButton() {
    this.videoEmbed.pause();
    this.enabled = false;
    this.update();
  }

  play() {
    this.videoEmbed.play();
  }

  update() {
    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = this.container.clientHeight / 2;
    const windowHeight = window.innerHeight;

    if (
      this.enabled &&
      ((bounds.top < -(halfContainerHeight)) || bounds.top > (windowHeight - halfContainerHeight))
    ) {
      this.outOfView = true;
      clearInterval(this.inViewTimeoutId);
      this.inViewTimeoutId = null;
      if (!this.outOfViewTimeoutId) {
        this.setState({ outOfView: true });
        this.outOfViewTimeoutId = setTimeout(() => {
          this.setState({ fixedToWindow: true, poppedOut: true });
          this.outOfViewTimeoutId = null;
        }, 200);
      }
    } else {
      this.outOfView = false;
      clearInterval(this.outOfViewTimeoutId);
      this.outOfViewTimeoutId = null;
      if (!this.inViewTimeoutId) {
        this.setState({ poppedOut: false });
        this.inViewTimeoutId = setTimeout(() => {
          this.setState({ fixedToWindow: false, outOfView: false });
          this.inViewTimeoutId = null;
        }, 200);
      }
    }
  }

  render() {
    const {
      videoEmbed,
      style,
    } = this.props;

    const {
      outOfView,
      fixedToWindow,
      poppedOut,
      hover,
      adIsPlaying,
      mutedOverlayVisible,
    } = this.state;

    return (
      <div
        className="VideoPopout"
        ref={(container) => { this.container = container; }}
        style={[styles.outerContainer, style]}
      >
        <div
          style={[
            styles.innerContainer.default,
            outOfView && styles.innerContainer.outOfView,
            fixedToWindow && styles.innerContainer.fixedToWindow,
            poppedOut && styles.innerContainer.poppedOut,
          ]}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >

          <Style
            scopeSelector=".VideoPopout:hover"
            rules={{
              ".vjs-control-bar": {
                transform: "translateY(0) !important",
              },
            }}
          />

          <div
            className="VideoPopout-overlay"
            style={[
              styles.overlay,
              (
              poppedOut &&
              hover &&
              !adIsPlaying &&
              !mutedOverlayVisible ? { opacity: 1, top: 0 } : {}
              ),
            ]}
          >
            <button style={styles.closeButton} onClick={this.onClickCloseButton}>
              <Close width={16} height={16} />
            </button>
          </div>

          <VideoEmbed
            ref={(ref) => { this.videoEmbed = ref; }}
            {...videoEmbed}
            onPlaying={this.onVideoEmbedPlaying}
            onPause={this.onVideoEmbedPause}
            onAdStarted={this.onVideoEmbedAdStarted}
            onAdPlay={this.onVideoEmbedAdPlay}
            onAdPause={this.onVideoEmbedAdPause}
            onMutedOverlayVisible={this.onVideoEmbedMutedOverlayVisible}
            onMutedOverlayHidden={this.onVideoEmbedMutedOverlayHidden}
            style={{
              ...(videoEmbed.style || {}),
              ...(poppedOut ? { paddingBottom: `${(9 / 16) * 100}%` } : {}),
            }}
          />
        </div>
      </div>
    );
  }
}

VideoPopout.propTypes = {
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
  style: propTypes.style,
};

VideoPopout.defaultProps = {
  videoEmbed: {},
};

export default radium(VideoPopout);
