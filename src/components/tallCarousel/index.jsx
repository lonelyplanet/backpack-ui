import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import Slider from "react-slick";
import PaginatorButton from "../paginatorButton";
import TallSlide from "./components/TallSlide";
import styles from "./styles";

const TallCarousel = ({ slides, settings }) => {
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
        prevArrow={renderPaginator("left")}
        nextArrow={renderPaginator("right")}
      >
        {slides.map(TallSlide)}
      </Slider>
    </div>
  );
};

TallCarousel.propTypes = {
  slides: PropTypes.array,
  settings: PropTypes.object,
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
