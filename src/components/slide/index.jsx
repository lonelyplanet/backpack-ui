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
    marginBottom: "24px",
    fontWeight: typography.fontWeightBold,
    [`@media (min-width: ${media.min["720"]})`]: {
      marginBottom: "32px",
    },
  },
  adContainer: {
    marginBottom: "36px",
    [`@media (min-width: ${media.min["720"]})`]: {
      marginBottom: "56px",
    },
  },
  heading: {
    color: color.white,
    fontSize: "32px",
    letterSpacing: "0",
    marginBottom: "32px",
    [`@media (min-width: ${media.min["600"]})`]: {
      letterSpacing: "-0.56px",
      fontSize: "calc(11px + 5vw)",
    },
    [`@media (min-width: ${media.min["720"]})`]: {
      marginBottom: "40px",
    },
    [`@media (min-width: ${media.min["840"]})`]: {
      marginBottom: "40px",
      fontSize: "68px",
    },
  },
  button: {
    paddingRight: "30px",
    paddingLeft: "30px",
    icon: {
      fontSize: "18px",
      marginRight: "16px",
    },
    [`@media (min-width: ${media.min["720"]})`]: {
      paddingRight: "46px",
      paddingLeft: "46px",
    },
  },
  position: {
    center: {
      display: "flex",
      width: "100%",
      position: "relative",
      zIndex: zIndex.slideshowSlide,
      textAlign: "center",
      margin: "0 auto",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [`@media (min-width: ${media.min["720"]})`]: {
        width: "50%",
      },
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
      bottom: "20px",
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

const Slide = ({
  image,
  description,
  headline,
  adPosition,
  gradientColor,
  position,
  callToAction,
}) => (
  <div className="Slide" style={styles.base}>
    <HeroImageContainer imagePath={image} />
    <GradientOverlay gradientType="leftCorner" color={gradientColor} />
    <Container
      style={{
        height: "100%",
      }}
    >
      <div style={styles.position[position]}>
        {description &&
          <BulletDescription
            description={description}
            style={styles.bullets}
          />
        }
        <Heading
          level={1}
          size="huge"
          weight="thick"
          override={styles.heading}
        >
          <a href={callToAction.link} style={styles.link} >
            {headline}
          </a>
        </Heading>

        {adPosition &&
          <div
            id={`video-home-sponsor-advert-${adPosition}`}
            style={styles.adContainer}
          />
        }
        <Button
          rounded
          color={callToAction.theme}
          href={callToAction.link}
          size="large"
          customStyles={styles.button}
        >
          {callToAction.icon &&
            iconFromString(callToAction.icon, { style: styles.button.icon })
          }
          {callToAction.text}
        </Button>
      </div>
    </Container>
  </div>
);


Slide.propTypes = {
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  callToAction: PropTypes.shape({
    text: PropTypes.string,
    theme: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  description: PropTypes.arrayOf(
    PropTypes.string,
  ),
  adPosition: PropTypes.string,
  gradientColor: PropTypes.string,
  position: PropTypes.string,
};

Slide.defaultProps = {
  description: [],
  gradientColor: color.black,
  position: "center",
};

export default radium(Slide);
