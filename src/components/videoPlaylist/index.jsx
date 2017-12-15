import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import { color } from "../../../settings.json";
import VideoEmbed from "../videoEmbed";
import ThumbnailListItem from "../thumbnailListItem";
import VideoPopout from "../videoPopout";
import FeaturedVideo from "../featuredVideo";
import colors from "../../styles/colors";
import media from "../../styles/mq";
import timing from "../../styles/timing";
import duration from "../../utils/time";
import propTypes from "../../utils/propTypes";

const darkBackgroundColor = "#1f1f1f";
const darkBorderColor = "#2b2b2b";

const styles = {
  container: {
    display: "flex",
  },

  playlistVideoContainer: {
    width: "100%",
    position: "relative",
    display: "flex",
  },

  playlistVideo: {
    position: "relative",
    overflow: "hidden",
    flexGrow: 1,
  },

  featuredVideoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    cursor: "pointer",
    zIndex: 1,
    textAlign: "left",
    border: 0,
    outline: 0,
    transition: `opacity ${timing.default} ease`,
  },

  playlistContainer: {
    height: "100%",
    width: "370px",
    position: "relative",
    right: 0,
    top: 0,
    flexShrink: 0,

    [`@media (max-width: ${media.max["960"]})`]: {
      display: "none",
    },
  },

  playlistInner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: darkBackgroundColor,
  },

  playlistHeader: {
    color: colors.textOverlay,
    fontSize: "14px",
    fontWeight: 300,
    letterSpacing: "1.5px",
    lineHeight: "14px",
    padding: "14px 18px",
    textAlign: "center",
    borderStyle: "solid",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    borderTopWidth: "0px",
    borderColor: darkBorderColor,
    backgroundColor: darkBackgroundColor,
  },

  playlistItems: {
    overflowY: "auto",
  },

  thumbnailListItem: {
    default: {
      cursor: "pointer",
      borderColor: darkBorderColor,
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingLeft: "8px",
      backgroundColor: darkBackgroundColor,
      borderStyle: "solid",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderBottomWidth: "1px",
      borderTopWidth: "0px",
      transition: `background-color ${timing.fast} linear, border-color ${timing.fast} linear`,
    },
    active: {
      backgroundColor: color.blue,
      borderColor: color.blue,
    },
  },
};

class VideoPlaylist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      video: this.getInitialVideo(),
      play: props.autoplay,
      childStyles: {},
    };

    this.videoPopout = null;
    this.featuredVideoContainer = null;
    this.childContainer = null;
    this.childRefs = {};

    this.onPlaySuccess = this.onPlaySuccess.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.onClickFeaturedVideo = this.onClickFeaturedVideo.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.loadVideo = this.loadVideo.bind(this);
  }

  componentDidMount() {
    this.updateChildStyles();
    this.childContainer.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize() {
    this.updateChildStyles();
  }

  onScroll() {
    this.updateChildStyles();
  }

  onEnded() {
    const { videoEmbed } = this.props;
    if (videoEmbed && videoEmbed.onEnded) {
      videoEmbed.onEnded();
    }

    this.loadVideo(this.getNextVideo());
  }

  onPlaySuccess() {
    this.hideFeaturedVideo();
  }

  onClickFeaturedVideo() {
    this.hideFeaturedVideo();
    this.videoPopout.play();
  }

  getInitialVideo() {
    const { video, videos } = this.props;
    return !video && videos && videos.length ? videos[0] : video;
  }

  getNextVideo() {
    const { videos } = this.props;
    const { video } = this.state;

    const videoIndex = videos.findIndex(v => video && v.id === video.id);

    let nextVideo = videos && videos.length ? videos[0] : null;
    if (videos && videoIndex + 1 < videos.length) {
      nextVideo = videos[videoIndex + 1];
    }

    return nextVideo;
  }

  updateChildStyles() {
    if (!this.childContainer) {
      return;
    }

    const playlistTop = this.childContainer.getBoundingClientRect().top;
    const playlistHeight = this.childContainer.clientHeight;

    const childStyles = {};
    Object.keys(this.childRefs).forEach((key) => {
      const ref = this.childRefs[key];
      const refTop = ref.getBoundingClientRect().top;
      const refHeight = ref.clientHeight;

      if (!Object.keys(childStyles).includes(key)) {
        childStyles[key] = {};
      }

      if (!playlistHeight) {
        childStyles[key].opacity = 0;
      } else {
        childStyles[key].opacity = ((playlistTop + playlistHeight) - refTop);
        childStyles[key].opacity /= refHeight;
      }
    });

    this.setState({ childStyles });
  }

  hideFeaturedVideo() {
    this.featuredVideoContainer.style.opacity = 0;
    setTimeout(() => {
      this.featuredVideoContainer.style.display = "none";
    }, 400);
  }

  loadVideo(newVideo) {
    this.hideFeaturedVideo();
    this.setState({ video: newVideo, play: true });

    if (this.props.onLoadVideo) {
      this.props.onLoadVideo(newVideo);
    }
  }

  render() {
    const {
      heading,
      videos,
      visibleVideos,
      videoEmbed,
      mobile,
      style,
    } = this.props;

    const { video, play, childStyles } = this.state;

    const initialVideo = this.getInitialVideo();

    return (
      <div
        className="VideoPlaylist"
        style={[
          styles.container,
          style,
        ]}
      >
        {video && videos && videos.length > 0 &&
          <div style={styles.playlistVideoContainer}>
            <div style={styles.playlistVideo}>
              <div
                role="button"
                ref={(ref) => { this.featuredVideoContainer = ref; }}
                style={styles.featuredVideoContainer}
                onClick={this.onClickFeaturedVideo}
              >
                {initialVideo &&
                  <FeaturedVideo
                    title={initialVideo.name}
                    description={initialVideo.description}
                    runtime={initialVideo.duration}
                    image={initialVideo.image}
                    mobile={mobile}
                  />
                }
              </div>
              <VideoPopout
                ref={(videoPopout) => { this.videoPopout = videoPopout; }}
                videoEmbed={{
                  videoId: video.id,
                  ...videoEmbed,
                  autoplay: play,
                  onEnded: this.onEnded,
                  mobile,
                  onPlaySuccess: this.onPlaySuccess,
                }}
              />
            </div>
            <div style={styles.playlistContainer}>
              <Style
                scopeSelector=".VideoPlaylist"
                rules={{
                  ".ListItem-thumbnail .Heading": {
                    fontWeight: "400 !important",
                  },
                  "::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgb(180, 190, 196)",
                  },
                  "::-webkit-scrollbar": {
                    width: "4px",
                  },
                }}
              />
              <div style={styles.playlistInner}>
                <div style={styles.playlistHeader}>
                  { heading }
                </div>
                <div
                  ref={(childContainer) => { this.childContainer = childContainer; }}
                  style={styles.playlistItems}
                >
                  {videos.slice(0, visibleVideos || videos.length).map((v, i) => (
                    <div
                      key={v.id}
                      ref={(ref) => { this.childRefs[v.id] = ref; }}
                    >
                      <ThumbnailListItem
                        title={v.name}
                        onClick={
                          video && v.id !== video.id ? () => this.loadVideo(videos[i]) : () => {}
                        }
                        imagePath={v.thumbnailImage}
                        subtitle={[duration(v.duration)]}
                        theme="dark"
                        imageIcon={(v.id === video.id && "Play") || null}
                        imageIconLabel="Play"
                        lineClamp={false}
                        style={[
                          styles.thumbnailListItem.default,
                          v.id === video.id ? styles.thumbnailListItem.active : {},
                          i === (
                            (visibleVideos || videos.length) - 1 ? { borderBottomWidth: 0 } : {}
                          ),
                          childStyles[v.id],
                        ]}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const videoShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,

  /* recommended dimensions: 915x515 */
  image: PropTypes.string,

  /* recommended dimensions: 160x90 */
  thumbnailImage: PropTypes.string,
  duration: PropTypes.number,
};

VideoPlaylist.propTypes = {
  heading: PropTypes.string.isRequired,
  video: PropTypes.shape(videoShape),
  videos: PropTypes.arrayOf(PropTypes.shape(videoShape)),
  visibleVideos: PropTypes.number,
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
  autoplay: PropTypes.bool,
  onLoadVideo: PropTypes.func,
  mobile: PropTypes.bool,
  style: propTypes.style,
};

VideoPlaylist.defaultProps = {
  heading: "Featured videos",
  videoEmbed: {},
  mobile: false,
};

export default radium(VideoPlaylist);
