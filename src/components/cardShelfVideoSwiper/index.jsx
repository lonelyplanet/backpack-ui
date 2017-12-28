import React, { Component } from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import Slider from "react-slick";

import { grid, timing, zIndex } from "../../../settings.json";
import mq from "../../styles/mq";
import { percentage } from "../../utils/grid";
import propTypes from "../../utils/propTypes";
import {
  CardShelf,
  CardShelfHeader,
} from "../cardShelf";
import PaginatorButton from "../paginatorButton";

const styles = {
  slider: {
    [`@media (max-width: ${mq.max["768"]})`]: {
      marginBottom: "-30px",
      marginTop: "-15px",
      paddingBottom: "30px",
      paddingTop: "15px",
    },

    [`@media (min-width: ${mq.min["768"]})`]: {
      width: "calc(100% + 100px)",
      padding: "30px 50px 80px",
      marginTop: "-30px",
      marginLeft: "-50px",
      marginBottom: "-80px",
      overflow: "hidden",
      position: "relative",
    },
  },

  sliderOuter: {
    default: {
      [`@media (max-width: ${mq.max["480"]})`]: {
        marginLeft: "-15px",
        marginRight: "-15px",
        width: "calc(100% + 15px + 15px)",
      },

      [`@media (min-width: ${mq.min["480"]}) and (max-width: ${mq.max["768"]})`]: {
        marginLeft: "-30px",
        marginRight: "-30px",
        width: "calc(100% + 30px + 30px)",
      },
    },

    threeSlides: {
      [`@media (max-width: ${mq.max["768"]})`]: {
        height: "252px",
        overflow: "hidden",
      },
    },

    fourSlides: {
      [`@media (max-width: ${mq.max["768"]})`]: {
        height: "400px",
        overflow: "hidden",
      },
    },
  },

  sliderInner: {
    [`@media (max-width: ${mq.max["480"]})`]: {
      paddingLeft: "15px",
      paddingRight: "15px",
    },

    [`@media (min-width: ${mq.min["480"]}) and (max-width: ${mq.max["768"]})`]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },

    [`@media (max-width: ${mq.max["768"]})`]: {
      overflowX: "auto",
      overflowY: "hidden",
      "-webkit-overflow-scrolling": "touch",
    },
  },
};

const scopedStyles = {
  ".slick-list": {
    overflow: "visible",
    position: "relative",
    width: "100%",
    maxWidth: grid.container,
  },

  ".slick-track": {
    display: "flex",
    width: "100% !important",
  },

  ".slick-slide": {
    transition: `opacity ${timing.default} ease`,
    float: "none !important",
    height: "auto",
    width: `${percentage("410px", grid.container)} !important`,
    maxWidth: "410px",
    minWidth: "216px",
    flex: "1 0 auto",
  },

  ".slick-arrow": {
    display: "none !important",
  },

  ".PaginatorButton": {
    position: "absolute",
    top: percentage("188px", "362px"),
    zIndex: zIndex.middle,
  },

  ".PaginatorButton:first-of-type": {
    left: "-20px",
  },

  ".PaginatorButton:last-of-type": {
    right: "-20px",
  },

  ".Card--video": {
    height: "100% !important",
    width: "100% !important",
  },

  mediaQueries: {
    [`(max-width: ${mq.max["768"]})`]: {
      ".slick-slide + .slick-slide": {
        marginLeft: "15px",
      },

      ".PaginatorButton": {
        display: "none !important",
      },
    },

    [`(min-width: ${mq.min["768"]})`]: {
      ".slick-slide:not(.slick-active)": {
        opacity: 0,
        pointerEvents: "none",
      },
    },

    [`(min-width: ${mq.min["768"]}) and (max-width: ${mq.max["1410"]})`]: {
      ".slick-slide + .slick-slide": {
        marginLeft: percentage("30px", grid.container),
      },
    },

    [`(min-width: ${mq.min["1410"]})`]: {
      ".slick-slide + .slick-slide": {
        marginLeft: "30px",
      },
    },
  },
};

const threeSlides = {
  ".slick-slide": {
    width: `${percentage("410px", grid.container)} !important`,
    maxWidth: "410px",
  },

  ".PaginatorButton": {
    top: percentage("188px", "362px"),
  },
};

const fourSlides = {
  ".slick-slide": {
    width: `${percentage("300px", grid.container)} !important`,
    maxWidth: "300px",
  },

  ".PaginatorButton": {
    top: percentage("169px", "493px"),
  },
};

class CardShelfVideoSwiper extends Component {
  static getPagination(direction) {
    return <PaginatorButton direction={direction} />;
  }

  constructor(props) {
    super(props);

    this.state = {
      nextPagination: false,
      prevPagination: false,
    };

    this.slideRefs = [];
    this.hasEnoughSlides = this.hasEnoughSlides.bind(this);
    this.checkAcitveSlide = this.checkAcitveSlide.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
  }

  componentDidMount() {
    this.renderPagination();
  }

  checkAcitveSlide(index) {
    return this.slideRefs[index] && this.slideRefs[index].classList.contains("slick-active");
  }

  hasEnoughSlides() {
    return this.props.children.length >= this.props.slidesVisible;
  }

  renderPagination() {
    const { children } = this.props;

    if (this.hasEnoughSlides()) {
      this.setState({
        prevPagination: !this.checkAcitveSlide(0),
        nextPagination: !this.checkAcitveSlide(children.length - 1),
      });
    }
  }

  render() {
    const {
      children,
      heading,
      href,
      slidesVisible,
      sliderOptions,
      style,
    } = this.props;

    return (
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

        <div
          style={[
            styles.slider,
            styles.sliderOuter.default,
            slidesVisible === 3 && styles.sliderOuter.threeSlides,
            slidesVisible === 4 && styles.sliderOuter.fourSlides,
          ]}
        >
          <div style={[styles.slider, styles.sliderInner]}>
            <Style
              scopeSelector=".CardShelf--video"
              rules={scopedStyles}
            />
            {slidesVisible === 3 &&
              <Style
                scopeSelector=".CardShelf--video"
                rules={threeSlides}
              />
            }
            {slidesVisible === 4 &&
              <Style
                scopeSelector=".CardShelf--video"
                rules={fourSlides}
              />
            }

            <Slider
              {...sliderOptions}
              afterChange={this.renderPagination}
              slidesToShow={slidesVisible}
              nextArrow={this.state.nextPagination && CardShelfVideoSwiper.getPagination("right")}
              prevArrow={this.state.prevPagination && CardShelfVideoSwiper.getPagination("left")}
            >
              {React.Children.map(children, (child, i) => (
                <div
                  key={i}
                  ref={node => (this.slideRefs[i] = node)}
                >
                  {child}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </CardShelf>
    );
  }
}

CardShelfVideoSwiper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  heading: PropTypes.string,
  href: PropTypes.string,
  slidesVisible: PropTypes.oneOf([3, 4]),
  sliderOptions: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.element,
      PropTypes.object,
      PropTypes.array,
    ]),
  ),
  style: propTypes.style,
};

CardShelfVideoSwiper.defaultProps = {
  slidesVisible: 3,
  sliderOptions: {
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
    swipe: false,
    speed: 400,
    responsive: [
      {
        breakpoint: 0,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: false,
          slidesToScroll: 1,
          variableWidth: true,
          swipe: false,
          speed: 400,
        },
      },
    ],
  },
};

export default radium(CardShelfVideoSwiper);
