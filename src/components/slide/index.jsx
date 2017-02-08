import React, { PropTypes } from "react";
import radium from "radium";
import Container from "../container";
import Heading from "../heading";
import HeroImageContainer from "../heroImageContainer";
import GradientOverlay from "../gradientOverlay";
import BulletDescription from "../bulletDescription";
import Button from "../button";
import iconFromString from "../../utils/icon";
import { color, media, typography, zIndex } from "../../../settings.json";

const styles = {
  base: {
    border: "2px solid white",
    width: "100%",
    height: "100%",
    transform: "translateZ(0)",
  },
  link: {
    color: color.white,
    cursor: "pointer",
  },
  bullets: {
    color: color.white,
    fontSize: "14px",
    marginBottom: "32px",
    fontWeight: typography.fontWeightBold,
  },
  adContainer: {
    marginBottom: "56px",
  },
  heading: {
    color: color.white,
    fontSize: "32px",
    letterSpacing: "0",
    marginBottom: "40px",
    [`@media (min-width: ${media.min["600"]})`]: {
      letterSpacing: "-0.56px",
      fontSize: "calc(11px + 3vw)",
    },
    [`@media (min-width: ${media.min["1430"]})`]: {
      fontSize: "64px",
    },
  },
  button: {
    paddingRight: "46px",
    paddingLeft: "46px",
    icon: {
      fontSize: "18px",
      marginRight: "16px",
    },
  },
  position: {
    center: {
      display: "flex",
      width: "50%",
      position: "relative",
      zIndex: zIndex.slideshowSlide,
      textAlign: "center",
      margin: "0 auto",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    leftBottom: {
      // position: "absolute",
      bottom: "5.5em",
      zIndex: zIndex.slideshowSlide,
      [`@media (min-width: ${media.min["720"]})`]: {
        bottom: "11em",
      },
    },
    rightBottom: {
      position: "absolute",
      bottom: "2rem",
      padding: 10,
      right: 0,
      zIndex: zIndex.slideshowSlide,

      [`@media (max-width: ${media.max["480"]})`]: {
        right: "-33px",
      },

      [`@media (min-width: ${media.min["480"]}) and (max-width: ${media.max["768"]})`]: {
        right: "-48px",
      },

      [`@media (max-width: ${media.max["768"]})`]: {
        transform: "scale(.7)",
      },

      [`@media (min-width: ${media.min["720"]})`]: {
        bottom: "8.2em",
      },
    },
  },
};

const Slide = ({ slide }) => (
  <div className="Slide" style={styles.base}>
    <HeroImageContainer imagePath={slide.image} />
    <GradientOverlay gradientType="leftCorner" color={slide.gradientColor} />
    <Container
      style={{
        height: "100%",
      }}
    >
      <div style={styles.position.center}>
        <BulletDescription
          description={["On the Road", "E.03"]}
          style={styles.bullets}
        />
        <Heading
          level={1}
          size="huge"
          weight="thick"
          override={styles.heading}
        >
          <a href="/test" style={styles.link} >
          Lonely Planet dives into Berlin</a>
        </Heading>

        {slide.adPosition &&
          <div
            id={`video-home-sponsor-advert-${slide.adPosition}`}
            sstyle={styles.adContainer}
          />
        }
        <Button
          rounded
          size="large"
          customStyles={styles.button}
        >
          {iconFromString("Play", { style: styles.button.icon })}
          Play
        </Button>
      </div>
    </Container>
  </div>
);


Slide.propTypes = {
  slide: PropTypes.object,
};

export default radium(Slide);
