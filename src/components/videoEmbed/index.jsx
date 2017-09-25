import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import { media } from "../../../settings.json";

const _ = { get, uniqueId };

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
  ".vjs-overlay-bottom": {
    left: "0px",
    width: "100%",
    marginLeft: "0px",
    maxWidth: "100% !important",
  },
  ".vjs-overlay-top-left": {
    top: "0px",
    left: "0px",
  },
  ".vjs-overlay-top-right": {
    maxWidth: "100% !important",
    width: "100%",
    textAlign: "right",
  },
  ".VideoEmbed-ad-overlay": {
    marginTop: "8px",
    lineHeight: "21px",
    fontWeight: "normal",
    verticalAlign: "middle",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "#e6e6e6",
    fontSize: "11px",
    fontFamily: "arial,sans-serif",
    padding: "6px 24px",
  },
  ".VideoEmbed-lowerthird-overlay": {
    position: "relative",
    paddingBottom: "56.25%", /* 16:9 */
    height: 0,
  },
  ".VideoEmbed-lowerthird-overlay>div": {
    width: "100% !important",
    height: "100% !important",
  },
  ".VideoEmbed-lowerthird-overlay iframe": {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  ".vjs-error .vjs-error-display": {
    display: "none",
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

    this.id = _.uniqueId();
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

    if (nextVideoId !== this.props.videoId && !this.isAdRunning()) {
      this.loadVideo(nextVideoId);
    }
  }

  shouldComponentUpdate() { // eslint-disable-line class-methods-use-this
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

    // We don't show the controls until the player is instantiated
    // or else the controls show briefly without the brightcove theme applied.
    this.player.controls(true);

    this.player.ready(this.onPlayerReady.bind(this));
    this.player.on("loadstart", this.onPlayerLoadStart.bind(this));
    this.player.on("error", this.onPlayerError.bind(this));
    this.player.on("playing", this.onPlayerPlaying.bind(this));
    this.player.on("ended", this.onPlayerEnded.bind(this));
    this.player.on("ads-ad-started", this.onAdStarted.bind(this));
    this.player.on("ads-ad-ended", this.onAdEnded.bind(this));
  }

  onPlayerReady() {
    // We load our video as soon as the player is instantiated and ready
    this.loadVideo(this.props.videoId);
  }

  onPlayerLoadStart() {
    const tt = this.player.textTracks()[0];
    if (tt) {
      tt.oncuechange = this.onPlayerCueChange.bind(this);
    }

    this.configureOverlays();

    if (this.props.autoplay) {
      this.player.play();
    }
  }

  onPlayerError() {
    // If the current video errors (ex. a timeout), we can recover by just attempting
    // to load/play the video again.
    this.loadVideo(this.props.videoId);
  }

  onPlayerPlaying() {
    // When an ad ends, the "playing" event or the "ads-ad-ended" event may be fired.
    // so we make sure to disable the "ad overlay" when any of these events fire.
    this.disableAdOverlay();

    // If videoId was set while an ad was playing, and the user skips the ad,
    // the onAdEnded() handler will not be run.  This makes sure we load the new video.
    this.loadVideo(this.props.videoId);
  }

  onAdStarted() {
    this.enableAdOverlay();
  }

  onAdEnded() {
    // When an ad ends, the "playing" event or the "ads-ad-ended" event may be fired.
    // so we make sure to disable the "ad overlay" when any of these events fire.
    this.disableAdOverlay();

    // If videoId was set while an ad was playing, and the
    // ad ends (without being skipped), make sure to load the new video.
    this.loadVideo(this.props.videoId);
  }

  onPlayerEnded() {
    if (this.props.onEnded) {
      this.props.onEnded();
    }
  }

  onPlayerCueChange() {
    const tt = this.player.textTracks()[0];
    const activeCue = tt.activeCues[0];
    if (!activeCue || activeCue.text !== "CODE") {
      return;
    }

    const cue = activeCue.originalCuePoint;

    const overlayElementId = `ad-lowerthird-${this.id}-${cue.id}`;
    const element = document.getElementById(overlayElementId);

    if (!element) {
      return;
    }

    let cueIndex = null;

    this.getCues().forEach((c, i) => {
      if (c.originalCuePoint.id === cue.id) {
        cueIndex = i;
      }
    });

    if (cueIndex === null) {
      return;
    }

    if (this.props.onCueChange) {
      this.props.onCueChange(cue, cueIndex, overlayElementId);
    }
  }

  getCues() {
    if (!this.player) {
      return [];
    }

    const tt = this.player.textTracks()[0];
    if (!tt) {
      return [];
    }

    let index = 0;
    const cues = [];
    while (index < tt.cues.length) {
      const cue = tt.cues[index];
      if (cue.text === "CODE") {
        cues.push(cue);
      }
      index += 1;
    }

    return cues;
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

  enableAdOverlay() {
    const adOverlay = document.getElementById(this.getAdOverlayId());
    if (adOverlay) {
      adOverlay.style.display = "inline-block";
    }
  }

  disableAdOverlay() {
    const adOverlay = document.getElementById(this.getAdOverlayId());
    if (adOverlay) {
      adOverlay.style.display = "none";
    }
  }

  isVideoLoaded(videoId) {
    return this.player && this.player.mediainfo && this.player.mediainfo.id === videoId;
  }

  loadVideo(videoId) {
    if (!this.isReady()) {
      return;
    }

    if (this.isVideoLoaded(videoId)) {
      if (this.props.autoplay) {
        this.player.play();
      }
    } else {
      this.player.catalog.getVideo(videoId, (error, video) => {
        if (!error) {
          this.player.catalog.load(video);
          // wait for 'loadstart' event
        }
      });
    }
  }

  isReady() {
    return this.player && this.player.isReady_;
  }

  isAdRunning() {
    return this.player && this.player.ads.state === "ad-playback";
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

  configureOverlays() {
    const overlays = this.getCues().map((c) => {
      const cue = c.originalCuePoint;

      const defaultEnd = cue.startTime + 15;
      const end = defaultEnd < cue.endTime ? defaultEnd : cue.endTime;

      return {
        content: `<div id="ad-lowerthird-${this.id}-${cue.id}" class="VideoEmbed-lowerthird-overlay" />`,
        align: "bottom",
        start: cue.startTime,
        end,
      };
    });

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
        />
      </div>
    );
  }
}

VideoEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  onEnded: PropTypes.func,
  onCueChange: PropTypes.func,
  override: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

export default radium(VideoEmbed);
