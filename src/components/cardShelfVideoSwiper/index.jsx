import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import assign from "object-assign";
import Slider from "react-slick";
import { grid, media, timing, zIndex } from "../../../settings.json";
import { percentage } from "../../utils/grid";
import {
  CardShelf,
  CardShelfHeader,
} from "../cardShelf";
import CardVideo from "../cardVideo";
import TileVideo from "../tileVideo";
import TileVideoPoster from "../tileVideoPoster";
import PaginatorButton from "../paginatorButton";

const styles = {
  slider: {
    [`@media (max-width: ${media.max["480"]})`]: {
      // marginLeft: "-15px",
      // marginRight: "-15px",
      // paddingLeft: "15px",
      // paddingRight: "15px",
      // width: "calc(100% + 15px + 15px)",
    },

    [`@media (min-width: ${media.min["480"]}) and (max-width: ${media.max["768"]})`]: {
      // marginLeft: "-30px",
      // marginRight: "-30px",
      // paddingLeft: "30px",
      // paddingRight: "30px",
      // width: "calc(100% + 30px + 30px)",
    },

    [`@media (max-width: ${media.max["768"]})`]: {
      marginBottom: "-30px",
      marginTop: "-15px",
      // overflowX: "auto",
      // overflowY: "hidden",
      paddingBottom: "30px",
      paddingTop: "15px",
      // "-webkit-overflow-scrolling": "touch",
    },

    [`@media (min-width: ${media.min["1410"]})`]: {
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
    [`@media (max-width: ${media.max["480"]})`]: {
      marginLeft: "-15px",
      marginRight: "-15px",
      width: "calc(100% + 15px + 15px)",
    },

    [`@media (min-width: ${media.min["480"]}) and (max-width: ${media.max["768"]})`]: {
      marginLeft: "-30px",
      marginRight: "-30px",
      width: "calc(100% + 30px + 30px)",
    },

    [`@media (max-width: ${media.max["768"]})`]: {
      height: "252px",
      overflow: "hidden",
    },
  },

  sliderInner: {
    [`@media (max-width: ${media.max["480"]})`]: {
      paddingLeft: "15px",
      paddingRight: "15px",
    },

    [`@media (min-width: ${media.min["480"]}) and (max-width: ${media.max["768"]})`]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },

    [`@media (max-width: ${media.max["768"]})`]: {
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
    width: `${percentage("412px", grid.container)} !important`,
    maxWidth: "412px",
    minWidth: "216px",
    flex: "1 0 auto",
  },

  ".slick-slide:not(.slick-active)": {
    pointerEvents: "none",
  },

  ".slick-slide + .slick-slide": {
    marginLeft: "27px",
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
    [`(max-width: ${media.max["768"]})`]: {
      ".slick-slide + .slick-slide": {
        marginLeft: "14px",
      },

      // ".slick-slide:last-of-type::after": {
      //   content: "``",
      //   display: "block",
      //   backgroundColor: "red",
      //   width: "30px",
      //   // marginRight: "30px",
      // },

      ".PaginatorButton": {
        display: "none !important",
      },
    },

    [`(min-width: ${media.min["768"]})`]: {
      ".slick-slide": {
        opacity: 0,
      },

      ".slick-active": {
        opacity: 1,
      },
    },
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

        <div style={[styles.slider, styles.sliderOuter]}>
          <div style={[styles.slider, styles.sliderInner]}>
            <Style
              scopeSelector=".CardShelf--video"
              rules={assign(
                {},
                scopedStyles,
                slidesVisible === 3 && {
                  ".slick-slide + .slick-slide": {
                    marginLeft: "27px",
                  },
                },
                slidesVisible === 4 && {
                  ".slick-slide + .slick-slide": {
                    marginLeft: "43px",
                  },
                },
              )}
            />

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
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== CardVideo || child.type !== TileVideo || child.type !== TileVideoPoster) {
        error = new Error(`${componentName} children should be of type "CardVideo", "TileVideo" or "TileVideoPoster".`);
      }
    });

    return error;
  },
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
    ]),
  ),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
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
