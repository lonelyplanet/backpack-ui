import React, { Component } from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Heading from "../heading";
import ItalicText from "../italicText";
import IconButton from "../iconButton";
import { VideoEmbed } from "../video";
import colors from "../../styles/colors";
import {
  fontSizeHeading4,
  lineHeightHeading4,
  fontSizeHeading5,
  lineHeightHeading5,
  fontSizeHeading6,
  lineHeightHeading6,
  fontSizeHeading7,
  lineHeightHeading7,
} from "../../styles/typography";
import zIndex from "../../styles/zIndex";
import mq from "../../styles/mq";
import formatDuration from "../../utils/time";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    position: "relative",
    width: "100%",
  },

  content: {
    color: colors.textOverlay,
    height: "100%",
  },

  backgroundVideo: {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },

  backdrop: {
    backgroundColor: rgba(colors.bgOverlay, 0.15),
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },

  textContainer: {
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-end",
    left: 0,
    padding: "32px 16px",
    position: "relative",
    zIndex: (zIndex.default + 1),

    [`@media (min-width: ${mq.min["480"]})`]: {
      padding: "40px 32px",
    },
  },

  heading: {
    color: colors.textOverlay,
    fontSize: `${fontSizeHeading6}px`,
    lineHeight: lineHeightHeading6,
    paddingBottom: "12px",

    [`@media (min-width: ${mq.min["480"]})`]: {
      fontSize: `${fontSizeHeading5}px`,
      lineHeight: lineHeightHeading5,
    },

    [`@media (min-width: ${mq.min["600"]})`]: {
      fontSize: `${fontSizeHeading4}px`,
      lineHeight: lineHeightHeading4,
      paddingBottom: "24px",
    },
  },

  description: {
    fontSize: `${fontSizeHeading7}px`,
    marginBottom: "24px",
    overflow: "hidden",

    [`@media (max-width: ${mq.max["840"]})`]: {
      display: "none",
    },
  },

  adSlot: {
    marginRight: "32px",
    marginTop: "40px",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: (zIndex.default + 2),
  },

  graphicContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    padding: "40px 32px",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: (zIndex.default + 1),
  },

  graphic: {
    marginBottom: "16px",
    maxWidth: "90%",
  },

  graphicTitle: {
    color: colors.textOverlay,
    fontSize: `${fontSizeHeading7}px`,
    lineHeight: lineHeightHeading7,
    marginBottom: "8px",
    textAlign: "center",
  },

  graphicPlayButtonContainer: {
    marginTop: "16px",
  },

  duration: {
    color: colors.textOverlay,
    float: "right",
    fontSize: `${fontSizeHeading7}px`,
    lineHeight: (56 / fontSizeHeading7),
  },

  playButton: {
    fontSize: `${fontSizeHeading4}px`,
    paddingLeft: "8px",
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

class VideoFeatured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };
  }

  onMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  }

  onMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  }

  getStrippedDescription = () => {
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
      shortDescription = `${description.substr(0, index)}…`;
    }

    // Strip HTML tags before returning
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
        className="VideoFeatured"
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
                {getPlayButton()}
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
                {getPlayButton()}

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

VideoFeatured.propTypes = {
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

VideoFeatured.defaultProps = {
  mobile: false,
};

export default radium(VideoFeatured);
