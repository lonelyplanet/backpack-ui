import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Heading from "../heading";
import ItalicText from "../italicText";
import IconButton from "../iconButton";
import VideoEmbed from "../videoEmbed";
import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import formatDuration from "../../utils/time";
import media from "../../styles/mq";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  content: {
    height: "100%",
    color: colors.textOverlay,
  },

  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },

  textContainer: {
    position: "relative",
    zIndex: (zIndex.default + 1),
    padding: "38px 32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
    left: "0px",
    bottom: "0px",

    [`@media (max-width: ${media.max["720"]})`]: {
      padding: "38px 29px",
    },

    [`@media (max-width: ${media.max["480"]})`]: {
      padding: "30px 18px",
    },
  },

  heading: {
    color: colors.textOverlay,
    fontSize: "32px",
    paddingBottom: "22px",
    lineHeight: 1.1,

    [`@media (max-width: ${media.max["600"]})`]: {
      fontSize: "26px",
    },

    [`@media (max-width: ${media.max["480"]})`]: {
      paddingBottom: "13px",
      fontSize: "22px",
      lineHeight: 1.2,
    },
  },

  description: {
    marginBottom: "28px",
    fontSize: "16px",
    overflow: "hidden",

    [`@media (max-width: ${media.max["840"]})`]: {
      display: "none",
    },
  },

  adSlot: {
    position: "absolute",
    marginRight: "32px",
    marginTop: "38px",
    top: 0,
    right: 0,
    zIndex: (zIndex.default + 2),
  },

  graphicContainer: {
    padding: "38px 32px",
    position: "absolute",
    zIndex: (zIndex.default + 1),
    display: "flex",
    flexDirection: "column",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  graphic: {
    maxWidth: "90%",
    marginBottom: "14px",
  },

  graphicTitle: {
    color: colors.textOverlay,
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    marginBottom: "8px",
  },

  graphicPlayButtonContainer: {
    marginTop: "14px",
  },

  duration: {
    float: "right",
    lineHeight: "56px",
    fontSize: "16px",
    color: colors.textOverlay,
  },

  playButton: {
    paddingLeft: "6px",
    fontSize: "28px",
  },
};

const getPlayButton = () => (
  <IconButton
    hoverBackgroundScale={1.15}
    shadow
    iconName="Play"
    style={styles.playButton}
    size={56}
    hoverColor={colors.textOverlay}
    hoverBackgroundColor={colors.linkPrimary}
    label="Play"
    transitionDuration="300ms"
  />
);

class FeaturedVideo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({ hovering: true });
  }

  onMouseLeave() {
    this.setState({ hovering: false });
  }

  getStrippedDescription() {
    const { description } = this.props;

    if (!description || description.trim().length === 0) {
      return "";
    }

    let shortDescription = description;

    const endOfSentence = description.indexOf(". ");
    const firstComma = description.indexOf(", ");

    let index = null;
    if (endOfSentence !== -1) {
      index = endOfSentence;
    }
    if (firstComma !== -1 && ((index === null) || (index && firstComma < endOfSentence))) {
      index = firstComma;
    }

    if (index) {
      shortDescription = `${description.substr(0, index)}...`;
    }

    // strip HTML tags before returning
    return shortDescription.replace(/<\/?[^>]+(>|$)/g, "");
  }

  render() {
    const {
      videoId,
      title,
      description,
      duration,
      image,
      graphic,
      adSlot,
      hoverEffects,
      mobile,
      videoEmbed,
      style,
    } = this.props;

    const { hovering } = this.state;

    return (
      <div
        className="FeaturedVideo"
        style={[
          styles.container,
          { backgroundImage: image ? `url("${image}")` : "none" },
          style,
        ]}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >

        {videoId && !mobile &&
          <div style={styles.backgroundVideo}>
            <VideoEmbed
              {...videoEmbed}
              videoId={videoId}
              playerName="background"
              cover
              autoplay
              muted
              loop
              controls={false}
              visible={!hoverEffects || hovering}
              visibleWhileNotPlaying={false}
              previewMode
            />
          </div>
        }

        <div style={styles.backdrop} />

        {!graphic &&
          <div style={styles.adSlot}>{adSlot}</div>
        }

        <div style={styles.content}>
          {graphic &&
            <div style={styles.graphicContainer}>
              <img src={graphic} style={styles.graphic} alt={title} />

              {!adSlot &&
                <ItalicText style={styles.graphicTitle}>
                  { title }
                </ItalicText>
              }
              { adSlot }

              <div style={styles.graphicPlayButtonContainer}>
                { getPlayButton() }
              </div>
            </div>
          }

          {!graphic &&
            <div style={styles.textContainer}>
              <Heading level={2} weight="thick" override={styles.heading}>
                {title}
              </Heading>

              {description &&
                <div style={styles.description}>
                  {this.getStrippedDescription()}
                </div>
              }

              <div>
                { getPlayButton() }
                <div style={styles.duration}>
                  {formatDuration(duration)}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

FeaturedVideo.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  image: PropTypes.string,
  graphic: PropTypes.string,
  adSlot: PropTypes.element,
  hoverEffects: PropTypes.bool,
  mobile: PropTypes.bool,
  videoEmbed: PropTypes.shape({
    ...VideoEmbed.propTypes,
    videoId: PropTypes.string,
  }),
  style: propTypes.style,
};

FeaturedVideo.defaultProps = {
  mobile: false,
};

export default radium(FeaturedVideo);
