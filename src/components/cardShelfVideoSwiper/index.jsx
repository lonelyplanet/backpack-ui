import React, { PropTypes } from "react";
import radium from "radium";
import { grid, timing } from "../../../settings.json";
import {
  CardShelf,
  CardShelfHeader,
} from "../cardShelf";
import CardVideo from "../cardVideo";
import SwiperContainer from "../swiper";

const styles = {
  swiper: {
    width: "calc(100% + 100px)",
    padding: "30px 50px 80px",
    marginTop: "-30px",
    marginLeft: "-50px",
    overflow: "hidden",
    position: "relative",
  },
};

const swiperOptions = {
  spaceBetween: 27,
  slidesPerView: 3,
  width: 1290,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
};

const swiperStyles = `
  .swiper-slide {
    opacity: 0;
    transition: opacity ${timing.default} ease;
  }

  .swiper-slide:not(.swiper-slide-visible) {
    pointer-events: none;
  }

  .swiper-slide-visible {
    opacity: 1;
  }

  .swiper-container {
    height: 100%;
    max-width: ${grid.container};
    overflow: visible;
    position: relative;
    width: 100%;
  }
`;

const CardShelfVideoSwiper = ({ children, heading, href, style }) => (
  <CardShelf
    className="CardShelf--video"
    style={style}
  >
    {heading &&
      <CardShelfHeader
        heading={heading}
        href={href}
      />
    }

    <SwiperContainer
      swiperOptions={swiperOptions}
      swiperStyles={swiperStyles}
      style={styles.swiper}
      hasPagination
    >
      {children}
    </SwiperContainer>
  </CardShelf>
);

CardShelfVideoSwiper.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== CardVideo) {
        error = new Error(`${componentName} children should be of type "CardVideo".`);
      }
    });

    return error;
  },
  heading: PropTypes.string,
  href: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardShelfVideoSwiper);
