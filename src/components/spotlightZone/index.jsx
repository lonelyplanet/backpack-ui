import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Heading from "../heading";
import Container from "../container";
import VideoPopout from "../video/videoPopout";
import VideoEmbed from "../video/videoEmbed";
import mq from "../../styles/mq";
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
  fontWeightLight,
  fontWeightMedium,
} from "../../styles/typography";
import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import zIndex from "../../styles/zIndex";
import font from "../../utils/font";
import { percentage, gutter } from "../../utils/grid";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    backgroundColor: "#1f1f1f",
    color: colors.bgPrimary,
    display: "flex",
    fontFamily: font("benton"),
    position: "relative",
  },

  background: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(100%)",
    height: "100%",
    left: 0,
    opacity: 0.4,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: zIndex.default,
  },

  content: {
    display: "flex",
    paddingBottom: gutter("static"),
    paddingTop: gutter("static"),
    width: "100%",
    zIndex: (zIndex.default + 1),

    [`@media (max-width: ${mq.max["960"]})`]: {
      flexDirection: "column",
    },

    [`@media (min-width: ${mq.min["960"]})`]: {
      paddingBottom: "60px",
      paddingTop: "56px",
    },
  },

  leftContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    position: "relative",

    [`@media (min-width: ${mq.min["960"]})`]: {
      paddingRight: "80px",
    },
  },

  rightContent: {
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    justifyContent: "center",

    [`@media (max-width: ${mq.max["480"]})`]: {
      paddingTop: gutter("static", 1, 0.5),
    },

    [`@media (min-width: ${mq.min["480"]}) and (max-width: ${mq.max["960"]})`]: {
      paddingTop: gutter("static"),
    },

    [`@media (min-width: ${mq.min["960"]})`]: {
      width: percentage("718px", `${dimensions.maxWidth}px`),
    },
  },

  leftContentTop: {
    paddingBottom: gutter("static"),
  },

  leftContentMiddle: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",

    [`@media (min-width: ${mq.min["720"]}) and (max-width: ${mq.max["960"]})`]: {
      flexDirection: "row",
      justifyContent: "flex-start",
      paddingBottom: 0,
    },

    [`@media (min-width: ${mq.min["960"]})`]: {
      paddingBottom: "60px",
    },
  },

  adSlot: {
    float: "right",

    [`@media (min-width: ${mq.min["960"]})`]: {
      float: "none",
      paddingBottom: "8px",
      paddingTop: "32px",
    },
  },

  zone: {
    display: "inline-block",
    fontSize: "18px",
    fontWeight: fontWeightMedium,
    left: 0,
    lineHeight: lineHeightHeading6,
    position: "relative",
    top: 0,

    [`@media (min-width: ${mq.min["720"]})`]: {
      fontSize: `${fontSizeHeading6}px`,
    },
  },

  title: {
    color: colors.textOverlay,
    fontSize: `${fontSizeHeading3}px`,
    lineHeight: lineHeightHeading3,

    [`@media (min-width: ${mq.min["720"]}) and (max-width: ${mq.max["960"]})`]: {
      fontSize: `${fontSizeHeading4}px`,
      lineHeight: lineHeightHeading4,
      paddingRight: "20px",
      width: "50%",
    },

    [`@media (max-width: ${mq.max["720"]})`]: {
      fontSize: `${fontSizeHeading5}px`,
      lineHeight: lineHeightHeading5,
    },
  },

  paragraph: {
    fontSize: `${fontSizeBodyArticleSmall}px`,
    fontWeight: fontWeightLight,
    lineHeight: lineHeightBodyArticleSmall,
    marginTop: "24px",

    [`@media (min-width: ${mq.min["720"]}) and (max-width: ${mq.max["960"]})`]: {
      marginTop: 0,
      paddingLeft: "20px",
      width: "50%",
    },

    [`@media (max-width: ${mq.max["720"]})`]: {
      fontSize: `${fontSizeBodySmall}px`,
      lineHeight: lineHeightBodySmall,
      marginTop: "12px",
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
            {zone}
          </div>

          <div style={styles.adSlot}>
            {adSlot}
          </div>
        </div>

        <div style={styles.leftContentMiddle}>
          <Heading
            level={2}
            tracking="tight"
            weight="thin"
            override={styles.title}
          >
            {title}
          </Heading>

          <p
            style={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      </div>

      <div style={styles.rightContent}>
        <VideoPopout
          videoEmbed={videoEmbed}
          style={{ height: "auto" }}
        />
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
