import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import Slider from "react-slick";
import styles from "./styles";

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
      <div key={index} >{slide}</div>
    );
  }

  render() {
    const { slides, settings } = this.props;

    return (
      <div className="MastheadSlider">
        <Style
          scopeSelector=".MastheadSlider"
          rules={styles}
        />
        <Slider
          {...settings}
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
    dots: false,
    dotsClass: "slick-dots container",
    touchThreshold: 10,
    pauseOnHover: false,
    autoplaySpeed: 7000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    fade: true,
    cssEase: "linear",
    arrows: false,
    swipe: false,
    responsive: [{
      breakpoint: 720,
      settings: {
        speed: 250,
        touchThreshold: 10,
        autoplay: false,
        dots: true,
        swipe: true,
        fade: false,
      },
    }],
  },
  afterChange: null,
};

export default radium(MastheadSlider);
