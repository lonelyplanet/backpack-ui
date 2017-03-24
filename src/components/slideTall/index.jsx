import React, { PropTypes } from "react";
import Link from "../link";
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
  <Link
    className="TallCarousel-slide"
    to={item.link}
    key={index}
  >
    <HeroImageContainer imagePath={item.image}>
      <GradientOverlay />

      <p style={styles.title}>
        {item.type}
      </p>
    </HeroImageContainer>
  </Link>
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
