import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import Slider from "react-slick";
import { color, media, zIndex } from "../../../settings.json";
import { rgb } from "../../utils/color";

export const rules = {
  ".slick-dots": {
    marginRight: "auto",
    marginLeft: "auto",
    height: "34px",
    position: "absolute",
    textAlign: "center",
    right: 0,
    left: 0,
    bottom: "32px",
  },
  ".slick-dots li": {
    width: "12px",
  },
  ".slick-dots li:first-of-type": {
    marginLeft: 0,
  },
  ".slick-track": {
    position: "relative",
  },
  ".slick-slide": {
    zIndex: zIndex.default,
    position: "relative !important",
    width: "100%",
  },
  ".slick-slide.slick-active": {
    zIndex: zIndex.middle,
    position: "relative !important",
  },
  ".slick-slide img": {
    maxWidth: "100px",
  },
  ".slick-dots button:before": {
    opacity: 1,
    fontSize: "10px",
    color: `rgba(${rgb(color.white)}, 0.37)`,
  },
  ".slick-dots .slick-active button:before": {
    opacity: 1,
    color: `rgba(${rgb(color.white)}, 1)`,
  },
  ".slick-prev": {
    left: "52px",
    zIndex: zIndex.middle + 1,
  },
  ".slick-next": {
    right: "52px",
    zIndex: zIndex.middle + 1,
  },
  ".slick-arrow:before": {
    content: "",
    display: "none",
  },
  ".slick-slider": { display: "none" },
  ".slick-slider.slick-initialized,.slick-slide:first-child": { display: "block" },
};

const styles = {
  slide: {
    minHeight: "400px",
    width: "100%",
    position: "absolute",
    [`@media (min-width: ${media.min["720"]})`]: {
      minHeight: "800px",
    },
  },
  // REM units being used to match what is currently in rizz-next
  isUnderGlobalHeader: {
    marginTop: "-5rem",
    [`@media (min-width: ${media.min["720"]})`]: {
      marginTop: "-13rem",
    },
  },
};


class MastheadSlider extends Component {
  constructor(props) {
    super(props);

    this.renderSlide = this.renderSlide.bind(this);
  }

  renderSlide(slide, index) {
    return (
      <div key={index} style={[styles.slide, { height: this.props.height }]}>{slide}</div>
    );
  }

  render() {
    const { slides, settings, customSettings, isUnderGlobalHeader } = this.props;

    return (
      <div
        className="MastheadSlider"
        style={[isUnderGlobalHeader && styles.isUnderGlobalHeader, {
          height: this.props.height,
          overflowY: "hidden",
        }]}
      >
        <Style
          scopeSelector=".MastheadSlider"
          rules={
            rules
          }
        />
        <Slider
          {...settings}
          {...customSettings}
        >
          {slides.map(this.renderSlide)}
        </Slider>

      </div>
    );
  }
}

MastheadSlider.propTypes = {
  isUnderGlobalHeader: PropTypes.bool,
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
  ])),
  customSettings: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ])),
};

MastheadSlider.defaultProps = {
  // React Slick settings
  height: "100vh",
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
