import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import font from "../../utils/font";
import Heading from "../heading";
import Container from "../container";
import VideoPopout from "../videoPopout";
import VideoEmbed from "../videoEmbed";
import media from "../../styles/mq";
import zIndex from "../../styles/zIndex";
import { percentage, gutter } from "../../utils/grid";
import {
  fontSizeHeading3,
  lineHeightHeading3,
  fontSizeHeading4,
  lineHeightHeading4,
  fontSizeHeading5,
  lineHeightHeading5,
  fontSizeHeading6,
  lineHeightHeading6,
  fontSizeBodyArticleSmall,
  lineHeightBodyArticleSmall,
  fontSizeBodySmall,
  lineHeightBodySmall,
} from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    display: "flex",
    fontFamily: font("benton"),
    position: "relative",
    backgroundColor: "#1f1f1f",
    color: "white",
  },

  background: {
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(100%)",
    width: "100%",
    height: "100%",
    opacity: 0.4,
    zIndex: zIndex.default,
    top: 0,
    left: 0,
    right: 0,
  },

  content: {
    zIndex: (zIndex.default + 1),
    width: "100%",
    paddingTop: "56px",
    paddingBottom: "60px",
    display: "flex",

    [`@media (max-width: ${media.max["960"]})`]: {
      paddingBottom: gutter("static"),
      paddingTop: gutter("static"),
      flexDirection: "column",
    },
  },

  leftContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    [`@media (min-width: ${media.min["960"]})`]: {
      paddingRight: "80px",
    },
  },

  rightContent: {
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    [`@media (max-width: ${media.max["480"]})`]: {
      paddingTop: gutter("static", 1, 0.5),
    },

    [`@media (min-width: ${media.min["480"]}) and (max-width: ${media.max["960"]})`]: {
      paddingTop: gutter("static"),
    },

    [`@media (min-width: ${media.min["960"]})`]: {
      width: percentage("718px", "1290px"),
    },
  },

  leftContentTop: {
    paddingBottom: gutter("static"),
  },

  leftContentMiddle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,

    [`@media (min-width: ${media.min["720"]}) and (max-width: ${media.max["960"]})`]: {
      flexDirection: "row",
      justifyContent: "flex-start",
      paddingBottom: "0px",
    },

    [`@media (min-width: ${media.min["960"]})`]: {
      paddingBottom: "60px",
    },
  },

  adSlot: {
    float: "right",

    [`@media (min-width: ${media.min["960"]})`]: {
      float: "none",
      paddingTop: "30px",
      paddingBottom: "8px",
    },
  },

  zone: {
    fontSize: fontSizeHeading6,
    lineHeight: lineHeightHeading6,
    position: "relative",
    top: 0,
    left: 0,
    display: "inline-block",
    fontWeight: 600,

    [`@media (max-width: ${media.max["720"]})`]: {
      fontSize: "18px",
    },
  },

  title: {
    color: "white",
    fontSize: fontSizeHeading3,
    lineHeight: lineHeightHeading3,

    [`@media (min-width: ${media.min["720"]}) and (max-width: ${media.max["960"]})`]: {
      width: "50%",
      paddingRight: "20px",
      fontSize: fontSizeHeading4,
      lineHeight: lineHeightHeading4,
    },

    [`@media (max-width: ${media.max["720"]})`]: {
      fontSize: fontSizeHeading5,
      lineHeight: lineHeightHeading5,
    },
  },

  paragraph: {
    fontSize: fontSizeBodyArticleSmall,
    fontWeight: 300,
    lineHeight: lineHeightBodyArticleSmall,
    marginTop: "24px",

    [`@media (min-width: ${media.min["720"]}) and (max-width: ${media.max["960"]})`]: {
      width: "50%",
      marginTop: "0px",
      paddingLeft: "20px",
    },

    [`@media (max-width: ${media.max["720"]})`]: {
      marginTop: "12px",
      fontSize: fontSizeBodySmall,
      lineHeight: lineHeightBodySmall,
    },
  },
};

const SpotlightZone = ({
  zone,
  title,
  paragraph,
  videoEmbed,
  backgroundImageUrl,
  adSlot,
  style,
}) => (
  <div
    className="SpotlightZone"
    style={[styles.container, style]}
  >
    <Container style={styles.content}>
      <div style={styles.leftContent}>
        <div style={styles.leftContentTop}>
          <div style={styles.zone}>
            { zone }
          </div>

          <div style={styles.adSlot}>
            { adSlot }
          </div>
        </div>

        <div style={styles.leftContentMiddle}>
          <Heading
            level={2}
            tracking="tight"
            weight="thin"
            override={styles.title}
          >
            { title }
          </Heading>

          <p
            style={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>

      </div>

      <div style={styles.rightContent}>
        <VideoPopout videoEmbed={videoEmbed} style={{ height: "auto" }} />
      </div>
    </Container>

    <div
      style={[
        styles.background,
        { backgroundImage: backgroundImageUrl ? `url("${backgroundImageUrl}")` : "none" },
      ]}
      aria-hidden="true"
    />
  </div>
);

SpotlightZone.propTypes = {
  zone: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  videoEmbed: PropTypes.shape(VideoEmbed.propTypes).isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
  adSlot: PropTypes.element,
  style: propTypes.style,
};

SpotlightZone.defaultProps = {
  zone: "",
  title: "",
  paragraph: "",
  backgroundImageUrl: "",
};

export default radium(SpotlightZone);
