import React, { PropTypes } from "react";
import { color, zIndex } from "../../../settings.json";
import HeroImageContainer from "../heroImageContainer";
import GradientOverlay from "../gradientOverlay";

const styles = {
  title: {
    color: color.white,
    zIndex: zIndex.middle,
  },
};

const SlideTall = (item, index) => (
  <a
    className="TallCarousel-slide"
    href={item.link}
    key={index}
  >
    <HeroImageContainer imagePath={item.image}>
      <GradientOverlay />

      <p style={styles.title}>
        {item.type}
      </p>
    </HeroImageContainer>
  </a>
);

SlideTall.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default SlideTall;
