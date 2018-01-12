import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Container from "../container";
import ThumbnailList from "../thumbnailList";
import ThumbnailListItem from "../thumbnailListItem";
import { VideoEmbed, VideoInfo, VideoPlaylist } from "../video";
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
      enableVideoInfo: false,
    };

    this.newPlaylist = true;
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
      this.newPlaylist = true;
    }
  }

  onLoadVideo = (video) => {
    this.setState({ video });
    if (!this.newPlaylist) {
      this.setState({ enableVideoInfo: true });
    }
    this.newPlaylist = false;
  }

  onClickVideo = (video) => {
    this.setState({ video });
  }

  render() {
    const {
      videos,
      visibleVideosDesktop,
      visibleVideosMobile,
      autoplay,
      videoEmbed,
      heading,
      sliderHeading,
      mobile,
      showVideoInfo,
      followVideoUrls,
      style,
    } = this.props;

    const { video, enableVideoInfo } = this.state;

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
                visibleVideos={visibleVideosDesktop}
                autoplay={autoplay}
                onLoadVideo={this.onLoadVideo}
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
  autoplay: PropTypes.bool,
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
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
