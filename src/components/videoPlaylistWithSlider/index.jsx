import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Container from "../container";
import ThumbnailList from "../thumbnailList";
import ThumbnailListItem from "../thumbnailListItem";
import VideoPlaylist from "../videoPlaylist";
import VideoInfo from "../videoInfo";
import VideoEmbed from "../videoEmbed";
import CardShelfVideoSlider from "../cardShelfVideoSlider";
import CardVideo from "../cardVideo";
import duration from "../../utils/time";
import media from "../../styles/mq";
import propTypes from "../../utils/propTypes";

const styles = {
  playlistContainer: {
    [`@media (max-width: ${media.max["720"]})`]: {
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  sliderContainer: {
    display: "none",
    marginTop: "30px",

    [`@media (min-width: ${media.min["560"]}) and (max-width: ${media.max["960"]})`]: {
      display: "block",
    },
  },

  listContainer: {
    display: "none",
    marginTop: "30px",

    [`@media (max-width: ${media.max["560"]})`]: {
      display: "block",
    },
  },
};

class VideoPlaylistWithSlider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      /*
        Initial video is not set as "active" so that the VideoInfo component
        doesn't initially render -- this is as designed.
      */
      activeVideo: null,
    };

    this.onPlaylistLoadVideo = this.onPlaylistLoadVideo.bind(this);
  }

  onPlaylistLoadVideo(video) {
    this.setState({ activeVideo: video });
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
      style,
    } = this.props;

    const { activeVideo } = this.state;

    return (
      <div className="VideoPlaylistWithSlider" style={style}>
        {videos && videos.length > 0 &&
          <div>
            <Container style={styles.playlistContainer}>
              <VideoPlaylist
                heading={heading}
                mobile={mobile}
                videos={videos}
                visibleVideos={visibleVideosDesktop}
                autoplay={autoplay}
                onLoadVideo={this.onPlaylistLoadVideo}
                videoEmbed={videoEmbed}
              />
            </Container>
            {showVideoInfo &&
              <Container>
                <VideoInfo
                  visible={activeVideo}
                  video={activeVideo}
                />
              </Container>
            }
            <div style={styles.sliderContainer}>
              <Container>
                <CardShelfVideoSlider
                  heading={sliderHeading || heading}
                  mobile={mobile}
                >
                  {videos.slice(0, visibleVideosDesktop).map((video) => (
                    <CardVideo
                      key={video.id}
                      heading={video.name}
                      runtime={video.duration}
                      imageSrc={video.cardImage}
                      href={video.url}
                      layout="tile"
                      spacing="compact"
                      mobile={mobile}
                      actionIcon={video.cardActionIcon}
                      onClick={video.cardOnClick}
                    />
                  ))}
                </CardShelfVideoSlider>
              </Container>
            </div>
            <div style={styles.listContainer}>
              <Container>
                <ThumbnailList heading={sliderHeading || heading}>
                  {videos.slice(0, visibleVideosMobile).map((video) => (
                    <ThumbnailListItem
                      key={video.id}
                      title={video.name}
                      href={video.url}
                      imagePath={video.thumbnailImage}
                      subtitle={[duration(video.duration)]}
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

  /* recommended dimensions: 915x515 */
  image: PropTypes.string,

  /* recommended dimensions: 430x250 */
  cardImage: PropTypes.string,

  /* recommended dimensions: 160x90 */
  thumbnailImage: PropTypes.string,

  cardActionIcon: PropTypes.string,
  cardOnClick: PropTypes.func,
};

VideoPlaylistWithSlider.propTypes = {
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
  style: propTypes.style,
};

VideoPlaylistWithSlider.defaultProps = {
  heading: "Featured videos",
  visibleVideosDesktop: 12,
  visibleVideosMobile: 4,
};

export default radium(VideoPlaylistWithSlider);
