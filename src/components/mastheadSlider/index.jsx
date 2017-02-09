import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import Slider from "react-slick";
import styles, { rules } from "./styles";
// import { ChevronRight, ChevronLeft } from "../icon";

class MastheadSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
      playing: true,
    };

    this.renderSlide = this.renderSlide.bind(this);
  }

  renderSlide(slide, index) {
    return (
      <div key={index} style={[styles.slide, { height: this.props.height }]}>{slide}</div>
    );
  }

  render() {
    const { slides, settings, height } = this.props;

    return (
      <div className="MastheadSlider">
        <Style
          scopeSelector=".MastheadSlider"
          rules={
            Object.assign({}, rules, { height })
          }
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
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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
  height: "80vh",
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
    // centerMode: true,
    // centerPadding: "24px",
    fade: false,
    cssEase: "linear",
    arrows: true,
    swipe: true,
    // nextArrow: <button><ChevronRight {...styles.icon} /></button>,
    // prevArrow: <button><ChevronLeft {...styles.icon} /></button>,
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
