import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import Slider from "react-slick";
import PaginatorButton from "../paginatorButton";
import SlideTall from "../slideTall";
import { color, typography, timing, media, zIndex } from "../../../settings.json";
import { rgb } from "../../utils/color";

const styles = {
  width: "120%",
  marginLeft: "-17%",
  ".TallCarousel-slide": {
    display: "block",
    color: color.white,
    maxHeight: "520px",
    height: "69vw",
    position: "relative",
  },
  ".TallCarousel-slide > div": {
    width: "99%",
    margin: "0 auto",
  },
  ".TallCarousel-slide p": {
    position: "absolute",
    fontWeight: typography.fontWeightBold,
    letterSpacing: "-0.08px",
    fontSize: "12px",
    bottom: "16px",
    left: "16[x]",
  },
  ".slick-list": {
    overflow: "visible",
  },
  mediaQueries: {
    [`(min-width: ${media.min["600"]})`]: {
      marginLeft: " -10%",
      ".TallCarousel-slide": {
        height: "50vw",
      },
    },
    [`(max-width: ${media.max["840"]})`]: {
      overflow: "hidden",
    },
    [`(min-width: ${media.min["840"]})`]: {
      width: "100%",
      marginLeft: "0",
      ".TallCarousel-slide": {
        height: "38vw",
      },
      ".TallCarousel-slide > div": {
        width: "100%",
        margin: "initial",
      },
      ".TallCarousel-slide p": {
        fontSize: "16px",
        bottom: "24px",
        left: "32px",
      },
      ".slick-list": {
        overflow: "hidden",
        padding: "60px 0 110px",
        marginTop: "-60px",
        marginBottom: "-110px",
      },
      ".slick-slide": {
        boxShadow: "none",
        zIndex: zIndex.middle,
        transition: `box-shadow ${timing.default} ease, transform ${timing.default} ease, z-index ${timing.default} ease`,
      },
      ".PaginatorButton": {
        zIndex: zIndex.top,
      },
      ".slick-slide:hover": {
        zIndex: zIndex.top - 1,
        transform: "scale(1.03)",
        boxShadow: `0px 28px 81px -7px rgba(${rgb(color.black)}, 0.44)`,
      },
    },
  },
};


const TallCarousel = ({ slides, settings, customSettings }) => {
  const renderPaginator = (direction) => (
    <PaginatorButton
      direction={direction}
      align="vertical"
      offset
    />
  );

  return (
    <div className="TallCarousel">
      <Style
        scopeSelector=".TallCarousel"
        rules={styles}
      />
      <Slider
        {...settings}
        {...customSettings}
        prevArrow={renderPaginator("left")}
        nextArrow={renderPaginator("right")}
      >
        {slides.map(SlideTall)}
      </Slider>
    </div>
  );
};

TallCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
  settings: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])),
  customSettings: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ])),
};

TallCarousel.defaultProps = {
  // React Slick settings
  settings: {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: false,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        centerMode: true,
        arrows: false,
        infinite: true,
        draggable: true,
      },
    }, {
      breakpoint: 840,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        centerMode: true,
        arrows: false,
        infinite: true,
        draggable: true,
      },
    }],
  },
};

export default radium(TallCarousel);
