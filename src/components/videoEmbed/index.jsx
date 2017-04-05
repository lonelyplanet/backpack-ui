import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import { color, media } from "../../../settings.json";

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
  ".video-js .vjs-overlay-bottom": {
    left: "0px",
    width: "100%",
    marginLeft: "0px",
    maxWidth: "100% !important",
  },
  ".video-js .vjs-overlay-top-left": {
    top: "0px",
    left: "0px",
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
    this.player.on("playing", this.onPlayerPlaying.bind(this));
    this.player.on("ended", this.onPlayerEnded.bind(this));
    this.player.on("ads-ad-started", this.onAdStarted.bind(this));
  }

  onPlayerReady() {
    this.loadVideo(this.props.videoId);
  }

  onPlayerPlaying() {
    this.enableVideoOverlays();
    this.loadVideo(this.props.videoId);
  }

  onPlayerEnded() {
    if (this.props.onEnded) {
      this.props.onEnded();
    }
  }

  onCueChange() {
    const tt = this.player.textTracks()[0];
    const activeCue = tt.activeCues[0];
    if (!activeCue || activeCue.text !== "CODE") {
      return;
    }

    console.log("HIT CUE! =>", document.getElementsByClassName("vjs-overlay")[0].innerHTML);
  }

  onAdStarted() {
    this.disableVideoOverlays();
  }

  getPlayerVideoClassName() {
    return `VideoEmbed-video-${this.id}`;
  }

  getPlayerScriptId() {
    return `VideoEmbed-initialize-${this.id}`;
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

  isAdRunning() {
    return this.player && this.player.ads.state === "ad-playback";
  }

  isReady() {
    return this.player && this.player.isReady_;
  }

  isVideoLoaded(videoId) {
    return this.player && this.player.mediainfo && this.player.mediainfo.id === videoId;
  }

  loadVideo(videoId) {
    if (!this.isReady()) {
      return;
    }

    const { autoplay } = this.props;

    if (this.isVideoLoaded(videoId)) {
      if (autoplay) {
        this.player.play();
      }
    } else {
      this.player.catalog.getVideo(videoId, (error, video) => {
        if (!error) {
          this.player.catalog.load(video);

          const tt = this.player.textTracks()[0];
          tt.off("cuechange");
          tt.on("cuechange", this.onCueChange.bind(this));

          this.configureOverlays();

          if (autoplay) {
            this.player.play();
          }
        }
      });
    }
  }

  configureOverlays() {
    const tt = this.player.textTracks()[0];

    const overlays = tt.cues_.filter(c => c.text === "CODE").map((c) => {
      const cue = c.originalCuePoint;

      let overlayHTML = `<div style=\"background-color:red;color:black;\">`;
      overlayHTML += "<div>name: " + cue.name + "</div>";
      overlayHTML += "<div>metadata: " + cue.metadata + "</div>";
      overlayHTML += "</div>";

      const defaultEnd = cue.startTime + 15;
      const end = defaultEnd < cue.endTime ? defaultEnd : cue.endTime;

      return {
        content: overlayHTML,
        align: "bottom",
        start: cue.startTime,
        end,
      };
    });

    overlays.push({
      content: `<div style=\"margin-top:10px;line-height:21px;font-weight:normal;vertical-align:middle;background-color:rgba(0,0,0,0.8);color:#e6e6e6;font-size:11px;font-family:arial,sans-serif;padding:6px 24px;\">Advertisement</div>`,
      align: "top-left",
      start: "ads-ad-started",
      end: "playing",
    });

    overlays.push({
      content: `<img class=\"${this.getPlayerVideoClassName()}-overlay\" src=\"https://s3.amazonaws.com/static-asset/backpack-ui/videoembed.lp-logo.png\" />`,
      align: "top-right",
      start: 0,
      end: "ended",
    });

    this.player.overlay({
        content: "",
        overlays: overlays,
        showBackground: false,
        attachToControlBar: false,
        debug: false,
    });
  }

  _setDisplayByClassName(className, displayValue) {
    const elements = document.getElementsByClassName(className);
    [].forEach.call(elements, el => el.style.display = displayValue);
  }

  disableVideoOverlays() {
    this._setDisplayByClassName(`${this.getPlayerVideoClassName()}-overlay`, "none");
  }

  enableVideoOverlays() {
    this._setDisplayByClassName(`${this.getPlayerVideoClassName()}-overlay`, "block");
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
  override: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

export default radium(VideoEmbed);
