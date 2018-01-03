import React from "react";
import PropTypes from "prop-types";
import Link from "../link";

import colors from "../../styles/colors";
import zIndex from "../../styles/zIndex";
import GradientOverlay from "../gradientOverlay";
import HeroImageContainer from "../heroImageContainer";

const styles = {
  title: {
    color: colors.bgPrimary,
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
