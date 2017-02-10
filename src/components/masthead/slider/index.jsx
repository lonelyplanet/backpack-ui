import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import Slider from "react-slick";
// import TabNavigation from "../TabNavigation";
import styles, { rules } from "./styles";

class MastheadSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
      playing: true,
    };

    this.handleAfterChange = this.handleAfterChange.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.bindSliderNode = this.bindSliderNode.bind(this);
  }

  handleAfterChange(slideIndex) {
    this.setSlideIndex(slideIndex);
  }

  setSlideIndex(slideIndex) {
    this.setState({ slideIndex });
  }

  handleTabClick(slideIndex) {
    this.slider.slickGoTo(slideIndex);
    this.setState({ slideIndex, playing: false });
  }

  bindSliderNode(node) {
    this.slider = node;
  }

  renderSlide(slide, index) {
    return (
      <div key={index} style={styles.slide}>{slide}</div>
    );
  }

  render() {
    const { slides, navigation, settings } = this.props;
    const { slideIndex, playing } = this.state;

    return (
      <div className="MastheadSlider">
        <Style
          scopeSelector=".MastheadSlider"
          rules={rules}
        />
        <Slider
          {...settings}
          ref={this.bindSliderNode}
          afterChange={this.handleAfterChange}
          autoplay={playing}
        >
          {slides.map(this.renderSlide)}
        </Slider>
      </div>
    );
  }
}
/*
<div style={styles.navContainer}>
  <TabNavigation
    tabs={navigation}
    index={slideIndex}
    onChange={this.handleTabClick}
  />
</div>
*/
MastheadSlider.propTypes = {
  slides: PropTypes.array,
  navigation: PropTypes.array,
  settings: PropTypes.object,
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
};

export default radium(MastheadSlider);
