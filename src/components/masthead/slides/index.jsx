import React, { PropTypes } from "react";
import radium from "radium";
import Container from "../../container";
import Image from "../image";
import Callout from "../callout";
import GradientOverlay from "../../gradientOverlay";
import { media, zIndex } from "../../../../settings.json";

const styles = {
  base: {
    width: "100%",
    height: "100%",
    transform: "translateZ(0)",
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
};

const Slide = ({ slide }) => (
  <div className="Slide" style={styles.base}>
    <Image imagePath={slide.image} />
    <GradientOverlay gradientType="leftCorner" color={slide.gradientColor} />
    <Container
      style={{
        height: "100%",
        // position: "relative",
        maxWidth: "129rem",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        left: "0",
        position: "absolute",
        right: "0",
        top: "0",
        width: "auto",
        zIndex: "10",
      }}
    >
      <div style={styles.leftBottom}>
        <Callout {...slide} centered />
      </div>

      {slide.adPosition &&
        <div
          id={`home-sponsor-advert-${slide.adPosition}`}
          style={styles.rightBottom}
        />
      }
    </Container>
  </div>
);


Slide.propTypes = {
  slide: PropTypes.object,
};

export default radium(Slide);
