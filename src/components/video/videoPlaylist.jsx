import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import ThumbnailListItem from "../thumbnailListItem";
import { VideoEmbed, VideoFeatured, VideoPopout } from "../video";
import colors from "../../styles/colors";
import media from "../../styles/mq";
import {
  fontWeightLight,
  fontSizeHeading7,
  lineHeightHeading7,
} from "../../styles/typography";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import duration from "../../utils/time";
import propTypes from "../../utils/propTypes";

const darkBackgroundColor = "#1f1f1f";
const darkBorderColor = "#2b2b2b";

const styles = {
  container: {
    display: "flex",
  },

  playlistVideoContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
  },

  playlistVideo: {
    flexGrow: 1,
    overflow: "hidden",
    position: "relative",
  },

  featuredVideoContainer: {
    border: 0,
    cursor: "pointer",
    height: "100%",
    left: 0,
    outline: 0,
    position: "absolute",
    textAlign: "left",
    top: 0,
    transition: `opacity ${timing.default} ease`,
    width: "100%",
    zIndex: zIndex.default,
  },

  playlistContainer: {
    flexShrink: 0,
    height: "auto",
    position: "relative",
    right: 0,
    top: 0,
    width: "370px",

    [`@media (max-width: ${media.max["960"]})`]: {
      display: "none",
    },
  },

  playlistInner: {
    backgroundColor: darkBackgroundColor,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },

  playlistHeader: {
    backgroundColor: darkBackgroundColor,
    borderColor: darkBorderColor,
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: "1px",
    borderLeftWidth: 0,
    color: colors.textOverlay,
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: fontWeightLight,
    letterSpacing: "1.5px",
    lineHeight: lineHeightHeading7,
    padding: "8px 16px",
    textAlign: "center",
  },

  playlistItems: {
    overflowY: "auto",
  },

  thumbnailListItem: {
    default: {
      backgroundColor: darkBackgroundColor,
      borderColor: darkBorderColor,
      borderStyle: "solid",
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: "1px",
      borderLeftWidth: 0,
      cursor: "pointer",
      paddingBottom: "8px",
      paddingLeft: "8px",
      paddingTop: "8px",
      transition: `background-color ${timing.fast} linear, border-color ${timing.fast} linear`,
    },

    active: {
      backgroundColor: colors.linkPrimary,
      borderColor: colors.linkPrimary,
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
  }

  componentDidMount() {
    this.updateChildStyles();
    this.childContainer.addEventListener("scroll", this.onScroll);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.onWindowResize);
    }

    if (this.state.video && this.props.onLoadVideo) {
      this.props.onLoadVideo(this.state.video);
    }
  }

  componentWillReceiveProps(nextProps) {
    const videoId = this.props.video && this.props.video.id;
    const nextVideoId = nextProps.video && nextProps.video.id;

    if (nextVideoId && videoId !== nextVideoId) {
      this.loadVideo({
        video: nextProps.video,
        play: this.state.play,
      });
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onWindowResize);
    }
  }

  onWindowResize = () => {
    this.updateChildStyles();
  }

  onScroll = () => {
    this.updateChildStyles();
  }

  onEnded = () => {
    const { videoEmbed } = this.props;

    if (videoEmbed && videoEmbed.onEnded) {
      videoEmbed.onEnded();
    }

    this.loadVideo({
      video: this.getNextVideo(),
      play: true,
    });
  }

  onPlaySuccess = () => {
    this.hideFeaturedVideo();
  }

  onClickFeaturedVideo = () => {
    this.hideFeaturedVideo();
    this.videoPopout.play();

    this.setState({
      play: true,
    });
  }

  onClickThumbnailVideo = (video) => {
    if (video.id !== this.state.video.id) {
      this.loadVideo({
        video,
        play: true,
      });
    }
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

    this.setState({
      childStyles,
    });
  }

  hideFeaturedVideo() {
    this.featuredVideoContainer.style.opacity = 0;

    setTimeout(() => {
      this.featuredVideoContainer.style.display = "none";
    }, 400);
  }

  loadVideo = ({ video, play }) => {
    this.hideFeaturedVideo();

    this.setState({
      video,
      play,
    }, () => {
      if (play) {
        this.videoPopout.play();
      }
    });

    if (this.props.onLoadVideo) {
      this.props.onLoadVideo(video);
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

    /* eslint-disable jsx-a11y/no-static-element-interactions */
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
                  <VideoFeatured
                    title={initialVideo.name}
                    description={initialVideo.description}
                    duration={initialVideo.duration}
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
                  {heading}
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
                        onClick={() => this.onClickThumbnailVideo(v)}
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
  image: PropTypes.string, // recommended dimensions: 915x515
  thumbnailImage: PropTypes.string, // recommended dimensions: 160x90
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
