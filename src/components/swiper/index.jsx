import React, { Component, PropTypes } from "react";
import radium from "radium";
import Swiper from "react-id-swiper";
import assign from "object-assign";
import { zIndex } from "../../../settings.json";
import PaginatorButton from "../paginatorButton";

// Make sure to import
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css">
// in the app

class SwiperContainer extends Component {
  static markup(htmlContent) {
    return {
      __html: htmlContent,
    };
  }

  static getButtonStyles(direction) {
    const buttonStyles = {
      position: "absolute",
      top: "188px",
      zIndex: zIndex.middle,
    };

    buttonStyles[direction] = "30px";

    return buttonStyles;
  }

  constructor(props) {
    super(props);

    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.swiper = null;

    this.state = {
      isBeginning: true,
      isEnd: false,
    };
  }

  goToNextSlide() {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  goToPrevSlide() {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  }

  render() {
    const {
      children,
      swiperOptions,
      swiperStyles,
      hasPagination,
      style,
    } = this.props;

    const options = {
      runCallbacksOnInit: true,
      onInit: (swiper) => {
        this.swiper = swiper;
      },
      onTransitionStart: (swiper) => {
        this.setState({
          isBeginning: swiper.isBeginning,
          isEnd: swiper.isEnd,
        });
      },
    };

    return (
      <div className="Swiper" style={style}>
        <style dangerouslySetInnerHTML={SwiperContainer.markup(swiperStyles)} />

        <Swiper {...assign({}, swiperOptions, options)}>
          {children}
        </Swiper>

        {hasPagination && !this.state.isBeginning &&
          <PaginatorButton
            direction="left"
            onClick={this.goToPrevSlide}
            style={SwiperContainer.getButtonStyles("left")}
          />
        }

        {hasPagination && !this.state.isEnd &&
          <PaginatorButton
            direction="right"
            onClick={this.goToNextSlide}
            style={SwiperContainer.getButtonStyles("right")}
          />
        }
      </div>
    );
  }
}

SwiperContainer.propTypes = {
  children: PropTypes.node.isRequired,
  swiperOptions: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  swiperStyles: PropTypes.string,
  hasPagination: PropTypes.bool,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

SwiperContainer.defaultProps = {
  hasPagination: false,
};

export default radium(SwiperContainer);
