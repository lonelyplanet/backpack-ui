import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import VideoEmbed from "./videoEmbed";
import { Close } from "../icon";
import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import timing from "../../styles/timing";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const styles = {
  outerContainer: {
    backgroundColor: colors.bgOverlay,
    bottom: 0,
    height: "100%",
    left: 0,
    paddingBottom: `${(9 / 16) * 100}%`,
    position: "relative",
    right: 0,
    top: 0,
    width: "100%",
  },

  innerContainer: {
    default: {
      bottom: 0,
      height: "100%",
      overflow: "hidden",
      position: "absolute",
      right: 0,
      transition: `opacity ${timing.fast} ease`,
      width: "100%",
    },

    outOfView: {
      opacity: 0,
    },

    fixedToWindow: {
      bottom: "24px",
      boxShadow: `0px 1px 8px 0px ${rgba(colors.bgOverlay, 0.4)}`,
      height: "initial",
      maxWidth: "406px",
      position: "fixed",
      right: "24px",
      width: "60%",
      zIndex: zIndex.popup,
    },

    poppedOut: {
      opacity: 1,
    },
  },

  overlay: {
    display: "inline-block",
    opacity: 0,
    position: "absolute",
    right: 0,
    textAlign: "right",
    top: "-30px",
    transition: `top ${timing.fast} ease, opacity ${timing.fast} ease`,
    zIndex: zIndex.default,
  },

  closeButton: {
    backgroundColor: `${rgba(colors.bgOverlay, 0.55)}`,
    color: colors.textOverlay,
    padding: "2px 6px",
  },
};

class VideoPopout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outOfView: false,
      fixedToWindow: false,
      poppedOut: false,
      hover: false,
      adIsPlaying: false,
      mutedOverlayVisible: false,
    };

    this.enabled = false;
    this.outOfViewTimeoutId = null;
    this.inViewTimeoutId = null;
    this.container = null;
    this.videoEmbed = null;
    this.outOfView = false;
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.onWindowScroll);
      window.addEventListener("resize", this.onWindowResize);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.onWindowScroll);
      window.removeEventListener("resize", this.onWindowResize);
    }
  }

  onWindowResize = () => {
    this.update();
  }

  onWindowScroll = () => {
    this.update();
  }

  onMouseEnter = () => {
    this.setState({
      hover: true,
    });
  }

  onMouseLeave = () => {
    this.setState({
      hover: false,
    });
  }

  onVideoEmbedAdPlay = () => {
    const { videoEmbed } = this.props;

    if (videoEmbed.onAdPlay) {
      videoEmbed.onAdPlay();
    }

    this.enabled = true;

    this.setState({
      adIsPlaying: true,
    });
  }

  onVideoEmbedAdPause = () => {
    const { videoEmbed } = this.props;

    if (videoEmbed.onAdPause) {
      videoEmbed.onAdPause();
    }

    if (!this.outOfView) {
      this.enabled = false;
    }

    this.setState({
      adIsPlaying: false,
    });
  }

  onVideoEmbedPlaying = () => {
    const { videoEmbed } = this.props;

    if (videoEmbed.onPlaying) {
      videoEmbed.onPlaying();
    }

    this.enabled = true;

    this.setState({
      adIsPlaying: false,
    });

    this.update();
  }

  onVideoEmbedPause = () => {
    const { videoEmbed } = this.props;

    if (videoEmbed.onPause) {
      videoEmbed.onPause();
    }

    if (!this.outOfView) {
      this.enabled = false;
    }
  }

  onVideoEmbedAdStarted = () => {
    const { videoEmbed } = this.props;

    if (videoEmbed.onAdStarted) {
      videoEmbed.onAdStarted();
    }

    this.enabled = true;

    this.setState({
      adIsPlaying: true,
    });

    this.update();
  }

  onVideoEmbedMutedOverlayVisible = () => {
    this.setState({
      mutedOverlayVisible: true,
    });
  }

  onVideoEmbedMutedOverlayHidden = () => {
    this.setState({
      mutedOverlayVisible: false,
    });
  }

  onClickCloseButton = () => {
    this.videoEmbed.pause();
    this.enabled = false;
    this.update();
  }

  play = () => {
    this.videoEmbed.play();
  }

  isAboveViewport = () => {
    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = bounds.height / 2;
    return bounds.top < -(halfContainerHeight);
  }

  isBelowViewport = () => {
    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = bounds.height / 2;
    const windowHeight = window.innerHeight;
    return bounds.top > (windowHeight - halfContainerHeight);
  }

  update = () => {
    const { whenAboveViewport, whenBelowViewport } = this.props;

    if (
      this.enabled &&
      (
        (whenAboveViewport && this.isAboveViewport()) ||
        (whenBelowViewport && this.isBelowViewport())
      )
    ) {
      this.outOfView = true;
      clearInterval(this.inViewTimeoutId);
      this.inViewTimeoutId = null;

      if (!this.outOfViewTimeoutId) {
        this.setState({
          outOfView: true,
        });

        this.outOfViewTimeoutId = setTimeout(() => {
          this.setState({
            fixedToWindow: true,
            poppedOut: true,
          });

          this.outOfViewTimeoutId = null;
        }, 200);
      }
    } else {
      this.outOfView = false;
      clearInterval(this.outOfViewTimeoutId);
      this.outOfViewTimeoutId = null;

      if (!this.inViewTimeoutId) {
        this.setState({
          poppedOut: false,
        });

        this.inViewTimeoutId = setTimeout(() => {
          this.setState({
            fixedToWindow: false,
            outOfView: false,
          });

          this.inViewTimeoutId = null;
        }, 200);
      }
    }
  }

  render() {
    const {
      videoEmbed,
      mobile,
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
              (hover || mobile) &&
              !adIsPlaying &&
              !mutedOverlayVisible ? { opacity: 1, top: 0 } : {}
              ),
            ]}
          >
            <button
              style={styles.closeButton}
              onClick={this.onClickCloseButton}
            >
              <Close width={16} height={16} />
            </button>
          </div>

          <VideoEmbed
            ref={(ref) => { this.videoEmbed = ref; }}
            {...videoEmbed}
            mobile={mobile}
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
  whenAboveViewport: PropTypes.bool,
  whenBelowViewport: PropTypes.bool,
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
  mobile: PropTypes.bool,
  style: propTypes.style,
};

VideoPopout.defaultProps = {
  whenAboveViewport: true,
  whenBelowViewport: true,
  videoEmbed: {},
};

export default radium(VideoPopout);
