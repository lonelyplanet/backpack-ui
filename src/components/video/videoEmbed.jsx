import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import VideoUpNext from "./videoUpNext";
import mq from "../../styles/mq";
import timing from "../../styles/timing";
import colors from "../../styles/colors";
import { fontSizeHeading8, fontWeightRegular } from "../../styles/typography";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const _ = { get, uniqueId };

const bcPlayerIds = {
  default: "default",
  background: "BJputewob",
  bestintravel: "HkJcclwoZ",
  destination: "HkPdqeDiZ",
  eed: "rJtMIpi7M",
  home: "HJe5vuWSVG",
  interest: "S1gCMqoEG",
  jnto: "Bkg3o1opuz",
};

const cueDuration = 15;

const styles = {
  container: {
    default: {
      height: "100%",
      opacity: 0,
      overflow: "hidden",
      paddingBottom: `${(9 / 16) * 100}%`,
      position: "relative",
      transition: `opacity ${timing.slow} ease`,
      width: "100%",
    },

    visible: {
      opacity: 1,
    },

    cover: {
      paddingBottom: 0,
    },
  },

  video: {
    default: {
      bottom: 0,
      height: "100%",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%",
    },

    cover: {
      bottom: "unset", // TODO: No IE 11 support
      height: "auto",
      left: "50%",
      minHeight: "100%",
      minWidth: "100%",
      overflow: "hidden",
      right: "unset", // TODO: No IE 11 support
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "auto",
    },
  },

  mutedOverlay: {
    alignItems: "center",
    color: colors.textOverlay,
    display: "flex",
    fontSize: "80px",
    height: "100%",
    justifyContent: "center",
    left: 0,
    opacity: 0,
    position: "absolute",
    top: 0,
    transition: `opacity ${timing.fast} ease`,
    width: "100%",

    ":hover": {
      opacity: 1,
    },
  },

  nextVideo: {
    bottom: "60px",
    position: "absolute",
    right: 0,
  },
};

const scopedStyles = {
  ".video-js": {
    backgroundColor: colors.bgOverlay,
    overflow: "visible",
  },

  ".vjs-control-bar": {
    transition: `transform ${timing.fast} ease !important`,
  },

  ".vjs-button:hover, .vjs-button:active, .vjs-button:focus": {
    backgroundImage: `radial-gradient(circle at center, ${rgba(colors.bgPrimary, 0.18)} 0%, ${rgba(colors.bgPrimary, 0)} 70%)`,
    textShadow: "none !important",
  },

  ".vjs-overlay-right": {
    maxWidth: "none !important",
    right: 0,
  },

  ".vjs-overlay-bottom": {
    left: 0,
    marginLeft: 0,
    maxWidth: "none !important",
    width: "100%",
  },

  ".vjs-overlay-top-left": {
    left: 0,
    top: 0,
  },

  ".vjs-overlay-top-right": {
    maxWidth: "100% !important",
    textAlign: "right",
    width: "100%",
  },

  ".vjs-error .vjs-error-display": {
    display: "none",
  },

  ".VideoEmbed-ad-overlay": {
    backgroundColor: rgba(colors.bgOverlay, 0.55),
    color: "#e6e6e6",
    fontSize: `${fontSizeHeading8}px`,
    fontWeight: fontWeightRegular,
    lineHeight: "21px",
    marginTop: "8px",
    padding: "6px 24px",
    verticalAlign: "middle",
  },

  ".VideoEmbed-lowerthird-overlay": {
    height: 0,
    paddingBottom: `${(9 / 16) * 100}%`,
    position: "relative",
  },

  ".VideoEmbed-lowerthird-overlay > div": {
    height: "100% !important",
    width: "100% !important",
  },

  ".VideoEmbed-lowerthird-overlay iframe": {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },

  ".VideoEmbed-muted-overlay .vjs-icon-volume-high": {
    backgroundColor: rgba(colors.bgPrimary, 0.45),
    border: 0,
    borderRadius: "50%",
    color: colors.textOverlay,
    cursor: "pointer",
    height: "120px",
    textAlign: "center",
    textShadow: `0 1px 6px ${rgba(colors.bgOverlay, 0.5)}`,
    transition: `text-shadow ${timing.fast} ease, background-color ${timing.fast} ease`,
    width: "120px",
  },

  ".VideoEmbed-muted-overlay .vjs-icon-volume-high:hover, .VideoEmbed-muted-overlay .vjs-icon-volume-high:active, .VideoEmbed-muted-overlay .vjs-icon-volume-high:focus": {
    backgroundColor: rgba(colors.bgOverlay, 0.55),
    textShadow: `0 1px 9px ${rgba(colors.bgOverlay, 0.7)}`,
  },

  mediaQueries: {
    [`(max-width: ${mq.max[480]})`]: {
      ".vjs-big-play-button": {
        transform: "scale(.7)",
      },
    },
  },
};

class VideoEmbed extends Component {
  constructor(props) {
    super(props);

    this.id = _.uniqueId();
    this.accountId = "5104226627001";
    this.playerId = bcPlayerIds[props.playerName];
    this.embedId = "default";

    this.cueEndTime = null;
    this.previewStartTime = props.previewStartTime;
    this.previewEndTime = props.previewEndTime;
    this.container = null;
    this.player = null;

    this.playWhenInView = props.playWhenInView;
    this.inView = this.isInView();

    this.activeCues = [];

    this.originalOverlays = [];

    this.showCaptions = false;
    this.showMutedOverlay = false;

    this.state = {
      hover: false,
      playing: false,
      nextVideoVisible: false,
      nextVideoFits: true,
      showMutedOverlay: false,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onPlayerCueEnd = this.onPlayerCueEnd.bind(this);
    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.onClickMutedOverlay = this.onClickMutedOverlay.bind(this);
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.onWindowScroll);
    }

    this.setupPlayer();
  }

  componentDidUpdate(prevProps) {
    this.updatePlayerProps();

    if (
      ((prevProps.videoId !== this.props.videoId) ||
      (!prevProps.autoplay && this.props.autoplay)) &&
      (!this.isAdRunning())
    ) {
      this.loadVideo(this.props.videoId);
    }
  }

  componentWillUnmount() {
    this.tearDownPlayer();

    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.onWindowScroll);
    }
  }

  onWindowScroll() {
    const inView = this.isInView();

    if (!this.inView && inView) {
      this.onInView();
    }

    this.inView = inView;
  }

  onInView() {
    if (this.player && this.playWhenInView) {
      this.playWhenInView = false;
      this.showMutedOverlay = true;
      this.showCaptions = true;
      this.player.muted(true);
      this.play();
    }
  }

  onLoadSetupScript() {
    const videoElement = document.getElementsByClassName(this.getPlayerVideoClassName())[0];

    if (!videoElement) {
      return;
    }

    this.player = window.videojs(videoElement);

    this.updatePlayerProps();

    this.player.ready(this.onPlayerReady.bind(this));
    this.player.on("loadstart", this.onPlayerLoadStart.bind(this));
    this.player.on("error", this.onPlayerError.bind(this));
    this.player.on("waiting", this.onPlayerWaiting.bind(this));
    this.player.on("playing", this.onPlayerPlaying.bind(this));
    this.player.on("pause", this.onPlayerPause.bind(this));
    this.player.on("timeupdate", this.onPlayerTimeUpdate.bind(this));
    this.player.on("ended", this.onPlayerEnded.bind(this));
    this.player.on("ads-ad-started", this.onAdStarted.bind(this));
    this.player.on("ads-ad-ended", this.onAdEnded.bind(this));
    this.player.on("ads-play", this.onAdPlay.bind(this));
    this.player.on("ads-pause", this.onAdPause.bind(this));
  }

  onPlayerReady() {
    this.originalOverlays = (this.player.overlays_ || []).map(overlay => overlay.options_);
    this.loadVideo(this.props.videoId);
  }

  onPlayerLoadStart() {
    this.getTextTracks().forEach((tt) => {
      tt.oncuechange = this.onPlayerCueChange.bind(this);
    });

    this.setPreviewBounds();
    this.renderPixel();
    this.configureOverlays();

    if (this.props.autoplay) {
      this.play();
    } else if (this.isInView() && this.playWhenInView) {
      this.playWhenInView = false;
      this.showMutedOverlay = true;
      this.showCaptions = true;
      this.player.muted(true);
      this.play();
    }
  }

  onPlayerWaiting() {
    this.setState({
      playing: false,
    });
  }

  onPlayerError() {
    this.setState({
      playing: false,
    });

    /**
     * If the current video errors (ex. a timeout), we can recover by
     * just attempting to load/play the video again.
     */
    this.loadVideo(this.props.videoId);
  }

  onPlayerPlaying() {
    this.setState({
      playing: true,
    });

    if (this.showCaptions) {
      this.enableCaptions();
    }

    if (this.showMutedOverlay) {
      this.enableMutedOverlay();
    }

    /**
     * When an ad ends, the "playing" event or the "ads-ad-ended" event
     * may be fired. so we make sure to disable the "ad overlay" when
     * any of these events fire.
     */
    this.disableAdOverlay();

    if (!this.props.hideNextVideoOnCuePoint || !this.cueEndTime) {
      this.setState({
        nextVideoVisible: true,
      });
    }

    /**
     * If videoId was set while an ad was playing, and the user skips
     * the ad, the onAdEnded() handler will not be run.  This makes sure
     * we load the new video.
     */
    this.loadVideo(this.props.videoId);

    if (this.props.onPlaying) {
      this.props.onPlaying();
    }
  }

  onPlayerPause() {
    this.setState({
      playing: false,
    });

    if (this.props.onPause) {
      this.props.onPause();
    }
  }

  onPlayerTimeUpdate() {
    const currentTime = this.player.currentTime();

    if (this.cueEndTime && this.cueEndTime < currentTime) {
      this.cueEndTime = null;
      this.onPlayerCueEnd();
    }

    /**
     * If we're in "preview mode" and video playback has progressed to a
     * point outside of the preview time window, rewind the video to the
     * preview start time.
     */
    if (this.props.previewMode) {
      const beforeStartTime = (
        this.previewStartTime !== null &&
        this.previewStartTime > currentTime
      );
      const afterEndTime = (
        this.previewEndTime !== null &&
        this.previewEndTime <= currentTime
      );
      if (
        this.previewStartTime !== null &&
        this.previewEndTime !== null &&
        (beforeStartTime || afterEndTime)
      ) {
        this.player.currentTime(this.previewStartTime);
      }
    }
  }

  onAdStarted() {
    this.setState({
      playing: true,
    });

    if (this.showCaptions) {
      this.enableCaptions();
    }

   /**
    * Ads aren't programmatically unmutable in most cases so don't cover
    * the ad and don't make the user think they can unmute it using our
    * overlay.
    */
    this.disableMutedOverlay();

    this.enableAdOverlay();

    if (this.props.onAdStarted) {
      this.props.onAdStarted();
    }
  }

  onAdEnded() {
    this.setState({
      playing: false,
    });

    /**
     * When an ad ends, the "playing" event or the "ads-ad-ended" event
     * may be fired, so we make sure to disable the "ad overlay" when
     * any of these events fire.
     */
    this.disableAdOverlay();

    /**
     * If videoId was set while an ad was playing, and the ad ends
     * (without being skipped), make sure to load the new video.
     */
    this.loadVideo(this.props.videoId);
  }

  onPlayerEnded() {
    this.setState({
      playing: false,
    });

    if (this.props.onEnded) {
      this.props.onEnded();
    }
  }

  onAdPlay() {
    this.setState({
      playing: true,
    });

    if (this.props.onAdPlay) {
      this.props.onAdPlay();
    }
  }

  onAdPause() {
    this.setState({
      playing: false,
    });

    if (this.props.onAdPause) {
      this.props.onAdPause();
    }
  }

  onPlayerCueChange() {
    const activeCues = this.getActiveCues();
    const cuePointCue = activeCues.find(c => c.text === "CODE" && c.originalCuePoint);

    if (cuePointCue) {
      const cue = cuePointCue.originalCuePoint;
      const x = this.activeCues.find(c => c.originalCuePoint && c.originalCuePoint.id === cue.id);

      if (!x) {
        this.onPlayerCuePoint(cue);
      }
    }

    this.activeCues = activeCues;
  }

  onPlayerCuePoint(cue) {
    const overlayElementId = `ad-lowerthird-${this.id}-${cue.id}`;
    const element = document.getElementById(overlayElementId);

    if (!element) {
      return;
    }

    const cueIndex = this.player.mediainfo.cuePoints.findIndex(c => c.id === cue.id);

    if (cueIndex === -1) {
      return;
    }

    this.cueEndTime = (this.player.currentTime() + cueDuration);

    if (this.props.hideNextVideoOnCuePoint) {
      this.setState({
        nextVideoVisible: false,
      });
    }

    if (this.props.onCuePoint) {
      this.props.onCuePoint(cue, cueIndex, overlayElementId);
    }
  }

  onPlayerCueEnd() {
    this.setState({
      nextVideoVisible: true,
    });
  }

  onMouseEnter() {
    this.setState({
      hover: true,
      nextVideoFits: this.container && this.container.clientWidth >= 450,
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  onClickMutedOverlay() {
    if (!this.player) {
      return;
    }

    this.showCaptions = false;
    this.showMutedOverlay = false;
    this.disableCaptions();
    this.disableMutedOverlay();
    this.player.muted(false);
    this.play();
  }

  getTextTracks() {
    if (!this.player) {
      return [];
    }

    const textTracks = this.player.textTracks();
    return [...Array(textTracks.length).keys()].map(i => textTracks[i]);
  }

  getActiveCues() {
    const activeCues = [];

    this.getTextTracks().forEach((tt) => {
      [...Array(tt.activeCues ? tt.activeCues.length : 0).keys()].forEach((j) => {
        activeCues.push(tt.activeCues[j]);
      });
    });

    return activeCues;
  }

  getPlayerVideoClassName() {
    return `VideoEmbed-video-${this.id}`;
  }

  getPlayerScriptId() {
    return `VideoEmbed-initialize-${this.id}`;
  }

  getAdOverlayId() {
    return `ad-overlay-${this.id}`;
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

  setPreviewBounds() {
    this.previewStartTime = this.props.previewStartTime;
    this.previewEndTime = this.props.previewEndTime;

    this.player.mediainfo.cuePoints.forEach((cuePoint) => {
      if (cuePoint.name === "preview start") {
        this.previewStartTime = cuePoint.time;
      } else if (cuePoint.name === "preview end") {
        this.previewEndTime = cuePoint.time;
      }
    });

    // Make sure our initial playback point is the preview start point
    if (this.props.previewMode && this.previewStartTime !== null && this.previewEndTime !== null) {
      this.player.currentTime(this.previewStartTime);
    }
  }

  updatePlayerProps() {
    if (!this.player) {
      return;
    }

    const {
      controls,
      muted,
      loop,
    } = this.props;

    this.player.controls(controls);
    this.player.muted(muted);
    this.player.loop(loop);
  }

  loadVideo(videoId) {
    if (!this.isReady()) {
      return;
    }

    if (this.isVideoLoaded(videoId)) {
      if (this.props.autoplay) {
        this.play();
      }
    } else {
      /**
       * Hide the "next video" preview whenever we tell the player to
       * load a new video. Basically just to reset things.
       */
      this.setState({
        nextVideoVisible: false,
      });

      this.player.catalog.getVideo(videoId, (error, video) => {
        if (!error) {
          this.player.catalog.load(video);
          // Wait for 'loadstart' event
        }
      });
    }
  }

  isReady() {
    return this.player && this.player.isReady_;
  }

  isAdRunning() {
    return this.player && this.player.ads && this.player.ads.state === "ad-playback";
  }

  play() {
    const { previewMode } = this.props;
    let { onPlayError, onPlaySuccess } = this.props;

    onPlayError = onPlayError || (() => {});
    onPlaySuccess = onPlaySuccess || (() => {});

    if (!this.player) {
      return;
    }

    if (previewMode && (this.previewStartTime === null || this.previewEndTime === null)) {
      return;
    }

    const promise = this.player.play();

    if (promise) {
      let failed = false;

      promise.catch(reason => {
        const safariAbortError = reason.name === "AbortError" && !reason.code;
        const notAllowedError = reason.name === "NotAllowedError";
        failed = safariAbortError || notAllowedError;

        if (failed) {
          onPlayError();
        } else {
          onPlaySuccess();
        }
      }).then(() => {
        if (!failed) {
          onPlaySuccess();
        }
      });
    } else {
      onPlaySuccess();
    }
  }

  pause() {
    if (this.player) {
      this.player.pause();
    }
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

  isVideoLoaded(videoId) {
    return this.player && this.player.mediainfo && this.player.mediainfo.id === videoId;
  }

  enableMutedOverlay() {
    if (!this.player || this.props.mobile) {
      return;
    }

    this.setState({
      showMutedOverlay: true,
    });

    this.player.controls(false);

    if (this.props.onMutedOverlayVisible) {
      this.props.onMutedOverlayVisible();
    }
  }

  disableMutedOverlay() {
    if (!this.player) {
      return;
    }

    this.setState({
      showMutedOverlay: false,
    });

    this.player.controls(true);

    if (this.props.onMutedOverlayHidden) {
      this.props.onMutedOverlayHidden();
    }
  }

  enableCaptions() {
    if (!this.player || !this.container) {
      return;
    }

    const controls = this.player.controls();
    const enableCaptionsButton = this.container.querySelector(".vjs-captions-menu-item");
    if (enableCaptionsButton) {
      if (controls) {
        this.player.controls(false);
      }

      enableCaptionsButton.click();

      if (controls) {
        this.player.controls(true);
      }
    }
  }

  disableCaptions() {
    if (!this.player || !this.container) {
      return;
    }

    const controls = this.player.controls();
    const enableCaptionsButton = this.container.querySelector(".vjs-captions-menu-item");
    if (enableCaptionsButton) {
      const disableCaptionsButton = enableCaptionsButton.previousElementSibling;

      if (disableCaptionsButton) {
        if (controls) {
          this.player.controls(false);
        }

        disableCaptionsButton.click();

        if (controls) {
          this.player.controls(true);
        }
      }
    }
  }

  enableAdOverlay() {
    const adOverlay = typeof document !== "undefined" ?
      document.getElementById(this.getAdOverlayId()) :
      null;

    if (adOverlay) {
      adOverlay.style.display = "inline-block";
    }
  }

  disableAdOverlay() {
    const adOverlay = typeof document !== "undefined" ?
      document.getElementById(this.getAdOverlayId()) :
      null;

    if (adOverlay) {
      adOverlay.style.display = "none";
    }
  }

  isAboveViewport() {
    if (!this.container) {
      return false;
    }

    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = (bounds.height / 2);

    return bounds.top < -(halfContainerHeight);
  }

  isBelowViewport() {
    if (!this.container) {
      return false;
    }

    const bounds = this.container.getBoundingClientRect();
    const halfContainerHeight = (bounds.height / 2);
    const windowHeight = window.innerHeight;

    return bounds.top > (windowHeight - halfContainerHeight);
  }

  isInView() {
    return !this.isAboveViewport() && !this.isBelowViewport();
  }

  configureOverlays() {
    if (!this.player || !this.player.overlay) {
      return;
    }

    const overlayCuePoints = this.player.mediainfo.cuePoints
      .filter((cuePoint) => cuePoint.type === "CODE")
      .filter((cuePoint) => cuePoint.name !== "preview start" && cuePoint.name !== "preview end");

    const overlays = this.originalOverlays.concat(overlayCuePoints.map((cuePoint) => {
      const defaultEnd = cuePoint.startTime + cueDuration;
      const end = defaultEnd < cuePoint.endTime ? defaultEnd : cuePoint.endTime;

      return {
        content: `<div id="ad-lowerthird-${this.id}-${cuePoint.id}" class="VideoEmbed-lowerthird-overlay" />`,
        align: "bottom",
        start: cuePoint.startTime,
        end,
      };
    }));

    overlays.push({
      content: `<div id="${this.getAdOverlayId()}" class="VideoEmbed-ad-overlay">Advertisement</div>`,
      align: "top-left",
      start: "ads-ad-started",
      end: "playing",
    });

    this.player.overlay({
      content: "",
      overlays,
      showBackground: false,
      attachToControlBar: true,
      debug: false,
    });
  }

  renderPixel() {
    if (!this.container || !this.player || !this.player.mediainfo) {
      return;
    }

    const customFields = this.player.mediainfo.customFields;

    if (customFields && customFields.pixel) {
      const pixel = customFields.pixel.replace(/\[timestamp\]/g, (new Date()).getTime());
      const div = document.createElement("div");
      div.innerHTML = pixel;
      this.container.appendChild(div);
    }
  }

  render() {
    const {
      cover,
      visible,
      visibleWhileNotPlaying,
      playsInline,
      style,
      nextVideo,
    } = this.props;

    const {
      nextVideoVisible,
      nextVideoFits,
      hover,
      playing,
      showMutedOverlay,
    } = this.state;

    return (
      <div
        className="VideoEmbed"
        ref={(container) => { this.container = container; }}
        style={[
          styles.container.default,
          cover && styles.container.cover,
          (visible && (visibleWhileNotPlaying || playing)) && styles.container.visible,
          style,
        ]}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Style
          scopeSelector=".VideoEmbed"
          rules={scopedStyles}
        />

        <video
          style={[
            styles.video.default,
            cover && styles.video.cover,
          ]}
          data-account={this.accountId}
          data-player={this.playerId}
          data-embed={this.embedId}
          className={`video-js ${this.getPlayerVideoClassName()}`}
          playsInline={playsInline}
        />

        <div>
          {showMutedOverlay &&
            <div className="VideoEmbed-muted-overlay" style={styles.mutedOverlay}>
              <button
                className="vjs-icon-volume-high"
                onClick={this.onClickMutedOverlay}
              />
            </div>
          }
        </div>

        {nextVideo &&
          <VideoUpNext
            {...nextVideo}
            visible={hover && nextVideoVisible && nextVideoFits}
            style={styles.nextVideo}
          />
        }
      </div>
    );
  }
}

VideoEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
  playerName: PropTypes.oneOf([
    "default",
    "background",
    "bestintravel",
    "destination",
    "eed",
    "home",
    "interest",
  ]),
  nextVideo: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    href: PropTypes.string,
  }),
  hideNextVideoOnCuePoint: PropTypes.bool,
  autoplay: PropTypes.bool,
  cover: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  visible: PropTypes.bool,
  visibleWhileNotPlaying: PropTypes.bool,
  previewMode: PropTypes.bool,
  previewStartTime: PropTypes.number,
  previewEndTime: PropTypes.number,
  playWhenInView: PropTypes.bool,
  playsInline: PropTypes.bool,
  mobile: PropTypes.bool,
  onAdStarted: PropTypes.func,
  onAdPlay: PropTypes.func,
  onAdPause: PropTypes.func,
  onPlaySuccess: PropTypes.func,
  onPlayError: PropTypes.func,
  onPlaying: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onCuePoint: PropTypes.func,
  onMutedOverlayVisible: PropTypes.func,
  onMutedOverlayHidden: PropTypes.func,
  style: propTypes.style,
};

VideoEmbed.defaultProps = {
  playerName: "default",
  controls: true,
  visible: true,
  visibleWhileNotPlaying: true,
  hideNextVideoOnCuePoint: true,
  previewStartTime: null,
  previewEndTime: null,
};

export default radium(VideoEmbed);
