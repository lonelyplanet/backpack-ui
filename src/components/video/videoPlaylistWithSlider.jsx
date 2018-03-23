import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Container from "../container";
import ThumbnailList from "../thumbnailList";
import ThumbnailListItem from "../thumbnailListItem";
import VideoPopout from "./videoPopout";
import { VideoEmbed, VideoInfo, VideoPlaylist } from "./";
import CardShelfVideoSlider from "../cardShelfVideoSlider";
import CardVideo from "../cardVideo";
import duration from "../../utils/time";
import media from "../../styles/mq";
import spacing from "../../styles/spacing";
import propTypes from "../../utils/propTypes";

const styles = {
  playlistContainer: {
    [`@media (max-width: ${media.max["720"]})`]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  sliderContainer: {
    display: "none",
    marginTop: spacing.gutter,

    [`@media (min-width: ${media.min["560"]}) and (max-width: ${media.max["960"]})`]: {
      display: "block",
    },
  },

  listContainer: {
    display: "block",
    marginTop: spacing.gutter,

    [`@media (min-width: ${media.min["560"]})`]: {
      display: "none",
    },
  },
};

class VideoPlaylistWithSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: props.video,
      autoplay: props.autoplay,
      enableVideoInfo: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const videoIds = (this.props.videos || []).map(v => v.id).sort();
    const nextVideoIds = (nextProps.videos || []).map(v => v.id).sort();
    if (
      (videoIds.length !== nextVideoIds.length) ||
      (videoIds.filter((v, i) => v.id !== nextVideoIds[i].id).length !== 0)
    ) {
      // Assume a new playlist has been loaded and state should reset
      this.setState({
        video: nextProps.video,
        enableVideoInfo: false,
      });
    }
  }

  onLoadVideo = (video, autoplay) => {
    const { onLoadVideo } = this.props;
    if (onLoadVideo) {
      onLoadVideo(video, autoplay);
    }

    if (autoplay) {
      this.play(video);
    } else {
      this.setState({
        video,
        autoplay,
        enableVideoInfo: false,
      });
    }
  }

  onClickVideo = (video) => {
    this.play(video);
  }

  getInitialVideo = () => {
    const { video, videos } = this.props;
    return videos && videos.length > 0 ? videos[0] : video;
  }

  play = (video) => {
    const isInitialVideo = video.id === this.getInitialVideo().id;

    this.setState({
      video,
      autoplay: !isInitialVideo ? true : this.state.autoplay,
      enableVideoInfo: !isInitialVideo ? true : this.state.enableVideoInfo,
    });
  }

  render() {
    const {
      videos,
      visibleVideosDesktop,
      visibleVideosMobile,
      videoPopout,
      videoEmbed,
      heading,
      sliderHeading,
      hideList,
      mobile,
      showVideoInfo,
      followVideoUrls,
      style,
    } = this.props;

    const { video, autoplay, enableVideoInfo } = this.state;

    return (
      <div className="VideoPlaylistWithSlider" style={style}>
        {videos && videos.length > 0 &&
          <div>
            <Container style={styles.playlistContainer}>
              <VideoPlaylist
                heading={heading}
                mobile={mobile}
                video={video}
                videos={videos}
                hideList={hideList}
                visibleVideos={visibleVideosDesktop}
                autoplay={autoplay}
                onLoadVideo={this.onLoadVideo}
                videoPopout={videoPopout}
                videoEmbed={videoEmbed}
              />
            </Container>

            {showVideoInfo && enableVideoInfo &&
              <Container>
                <VideoInfo
                  video={video}
                  fadeIn
                />
              </Container>
            }

            {!hideList && (
              <div>
                <div style={styles.sliderContainer}>
                  <Container>
                    <CardShelfVideoSlider
                      heading={sliderHeading || heading}
                      mobile={mobile}
                      spacing="compact"
                    >
                      {videos.slice(0, visibleVideosDesktop).map((v) => (
                        <CardVideo
                          key={v.id}
                          heading={v.name}
                          runtime={v.duration}
                          imageSrc={v.cardImage}
                          href={followVideoUrls && v.url}
                          onClick={!followVideoUrls && (() => this.onClickVideo(v))}
                          layout="tile"
                          spacing="compact"
                          mobile={mobile}
                          actionIcon={v.cardActionIcon}
                          onClickActionIcon={v.cardOnClickActionIcon}
                        />
                      ))}
                    </CardShelfVideoSlider>
                  </Container>
                </div>

                <div style={styles.listContainer}>
                  <Container>
                    <ThumbnailList heading={sliderHeading || heading}>
                      {videos.slice(0, visibleVideosMobile).map((v) => (
                        <ThumbnailListItem
                          key={v.id}
                          title={v.name}
                          href={followVideoUrls && v.url}
                          onClick={!followVideoUrls && (() => this.onClickVideo(v))}
                          imagePath={v.thumbnailImage}
                          subtitle={[duration(v.duration)]}
                          lineClamp={false}
                        />
                      ))}
                    </ThumbnailList>
                  </Container>
                </div>
              </div>
            )}

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
  url: PropTypes.string,
  duration: PropTypes.number,
  host: PropTypes.string,
  director: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string, // recommended dimensions: 915x515
  cardImage: PropTypes.string, // recommended dimensions: 430x250
  thumbnailImage: PropTypes.string, // recommended dimensions: 160x90
  cardActionIcon: PropTypes.string,
  cardOnClickActionIcon: PropTypes.func,
};

VideoPlaylistWithSlider.propTypes = {
  video: PropTypes.shape(videoShape),
  videos: PropTypes.arrayOf(PropTypes.shape(videoShape)).isRequired,
  heading: PropTypes.string.isRequired,
  sliderHeading: PropTypes.string,
  visibleVideosDesktop: PropTypes.number.isRequired,
  visibleVideosMobile: PropTypes.number.isRequired,
  hideList: PropTypes.bool,
  autoplay: PropTypes.bool,
  videoPopout: PropTypes.shape(VideoPopout.propTypes),
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
  onLoadVideo: PropTypes.func,
  mobile: PropTypes.bool,
  showVideoInfo: PropTypes.bool,
  followVideoUrls: PropTypes.bool,
  style: propTypes.style,
};

VideoPlaylistWithSlider.defaultProps = {
  heading: "Featured videos",
  visibleVideosDesktop: 12,
  visibleVideosMobile: 4,
};

export default radium(VideoPlaylistWithSlider);
