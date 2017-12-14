import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import media from "../../styles/mq";
import CardShelf from "../cardShelf/cardShelf";
import Heading from "../heading";
import Link from "../link";
import MoreLink from "../moreLink";
import { fontSizeHeading6, fontWeightRegular } from "../../styles/typography";
import timing from "../../styles/timing";
import { lighten } from "../../utils/color";
import colors from "../../styles/colors";
import IconButton from "../iconButton";
import Slider from "../slider";
import propTypes from "../../utils/propTypes";

const arrowBackgroundColor = {
  light: colors.bgPrimary,
  dark: "rgb(43, 53, 66)",
};

const styles = {
  container: {
    maxWidth: "100%",
  },

  header: {
    position: "relative",
    marginBottom: "19px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",

    [`@media (max-width: ${media.max["480"]})`]: {
      marginBottom: "12px",
    },

    [`@media (max-width: ${media.max["360"]})`]: {
      marginBottom: "10px",
    },
  },

  heading: {
    default: {
      fontSize: fontSizeHeading6,
      fontWeight: fontWeightRegular,
      display: "inline-block",
      lineHeight: "26px",

      [`@media (max-width: ${media.max["720"]})`]: {
        flexGrow: 1,
      },
    },

    light: {
      color: colors.textPrimary,
    },
    dark: {
      color: colors.textOverlay,
    },
  },

  paginatorButton: {
    default: {
      position: "relative",
      top: "-30px",
      width: "4.4444em",
      height: "4.4444em",
      fontSize: "9px",
      cursor: "inherit",
      ":focus": {
        outline: 0,
      },

      [`@media (max-width: ${media.max["480"]})`]: {
        display: "none",
      },
    },
    light: {
      color: "rgb(44, 54, 67)",
    },
    dark: {
      color: "rgb(228, 228, 228)",
    },
    next: {
      right: "2.2222em",
    },
    prev: {
      left: "-2.2222em",
    },
  },

  moreLink: {
    fontWeight: 400,
    position: "absolute",
    right: 0,
    bottom: "7px",

    [`@media (max-width: ${media.max["720"]})`]: {
      display: "none",
    },
  },

  bottomMoreLink: {
    backgroundColor: colors.linkPrimary,
    color: colors.textOverlay,
    fontWeight: 400,
    paddingBottom: "1.2em",
    paddingTop: "1.3em",
    paddingRight: "2em",
    paddingLeft: "2em",
    borderRadius: "100px",
    transition: `background-color ${timing.default} ease-in-out`,

    ":hover": {
      backgroundColor: lighten(colors.linkPrimary, 7),
      color: colors.textOverlay,
    },
    ":active": {
      backgroundColor: lighten(colors.linkPrimary, 7),
      color: colors.textOverlay,
    },
    ":focus": {
      backgroundColor: lighten(colors.linkPrimary, 7),
      color: colors.textOverlay,
    },
    marginBottom: "8px",
    display: "none",

    [`@media (max-width: ${media.max["720"]})`]: {
      display: "inline-block",
    },

  },

  adSlot: {
    paddingLeft: "20px",
    paddingBottom: "7px",

    [`@media (max-width: ${media.max["720"]})`]: {
      marginLeft: "auto",
    },
  },
};

class CardShelfVideoSlider extends React.Component {

  getHeadingComponent() {
    const { heading, theme } = this.props;

    return (
      <Heading
        level={2}
        override={{
          ...styles.heading.default,
          ...styles.heading[theme],
        }}
      >
        { heading }
      </Heading>
    );
  }

  render() {
    const {
      children,
      mobile,
      heading,
      href,
      adSlot,
      theme,
      sliderCoverupColor,
      style,
    } = this.props;

    return (
      <CardShelf
        className="CardShelfVideoSlider"
        style={[
          styles.container,
          style,
        ]}
      >

        <header style={styles.header}>
          {heading && href &&
            <Link to={href}>{this.getHeadingComponent()}</Link>
          }
          {heading && !href && this.getHeadingComponent() }

          {adSlot &&
            <div style={styles.adSlot}>
              { adSlot }
            </div>
          }

          {href &&
            <Link to={href}>
              <MoreLink
                style={styles.moreLink}
                size="small"
                caps
              >
                View all
              </MoreLink>
            </Link>
          }
        </header>

        <div
          style={[
            styles.slider,
          ]}
        >
          <Slider
            coverupColor={sliderCoverupColor}
            slidesToShow={4}
            infinite={false}
            nextArrow={
              <IconButton
                iconName="ChevronRight"
                label="Next"
                shadow
                style={[
                  styles.paginatorButton.default,
                  styles.paginatorButton[theme],
                  styles.paginatorButton.next,
                  { display: mobile ? "none" : "flex" },
                ]}
                backgroundColor={arrowBackgroundColor[theme]}
              />
            }
            prevArrow={
              <IconButton
                iconName="ChevronLeft"
                label="Previous"
                shadow
                style={[
                  styles.paginatorButton.default,
                  styles.paginatorButton[theme],
                  styles.paginatorButton.prev,
                  { display: mobile ? "none" : "flex" },
                ]}
                backgroundColor={arrowBackgroundColor[theme]}
              />
            }
          >
            {React.Children.map(children.slice(0, mobile ? 4 : children.length), (child, i) => (
              <div key={i}>
                {child}
              </div>
            ))}
          </Slider>

        </div>

        {href &&
          <Link to={href}>
            <MoreLink
              style={styles.bottomMoreLink}
              size="small"
              caps
            >
              View all
            </MoreLink>
          </Link>
        }

      </CardShelf>
    );
  }
}

CardShelfVideoSlider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  mobile: PropTypes.bool,
  heading: PropTypes.string,
  href: PropTypes.string,
  adSlot: PropTypes.element,
  theme: PropTypes.oneOf([
    "light",
    "dark",
  ]),
  sliderCoverupColor: PropTypes.string.isRequired,
  style: propTypes.style,
};

CardShelfVideoSlider.defaultProps = {
  theme: "light",
  sliderCoverupColor: colors.bgPrimary,
};

export default radium(CardShelfVideoSlider);
