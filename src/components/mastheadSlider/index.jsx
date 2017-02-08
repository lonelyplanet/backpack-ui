import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles, { rules } from "./styles";
import { ChevronRight, ChevronLeft } from "../icon";

class MastheadSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
      playing: true,
    };
  }

  renderSlide(slide, index) {
    return (
      <div key={index} style={styles.slide}>{slide}</div>
    );
  }

  render() {
    const { slides, settings } = this.props;

    return (
      <div className="MastheadSlider">
        <Style
          scopeSelector=".MastheadSlider"
          rules={rules}
        />
        <Slider
          {...settings}
          nextArrow={<button><ChevronRight {...styles.icon} /></button>}
          prevArrow={<button><ChevronLeft {...styles.icon} /></button>}
        >
          {slides.map(this.renderSlide)}
        </Slider>

      </div>
    );
  }
}


MastheadSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node),
  settings: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
),

};

MastheadSlider.defaultProps = {
  // React Slick settings
  settings: {
    dots: true,
    dotsClass: "slick-dots container",
    touchThreshold: 10,
    pauseOnHover: false,
    autoplaySpeed: 7000,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "24px",
    fade: false,
    cssEase: "linear",
    arrows: true,
    swipe: true,
    responsive: [{
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: false,
      },
    }],
  },
};

export default radium(MastheadSlider);
