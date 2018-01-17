import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import CardShelf from "../cardShelf/cardShelf";
import Heading from "../heading";
import Link from "../link";
import MoreLink from "../moreLink";
import { VideoSlider } from "../video";
import {
  fontSizeHeading6,
  lineHeightHeading6,
  fontWeightRegular,
} from "../../styles/typography";
import timing from "../../styles/timing";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import { lighten } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const arrowBackgroundColor = {
  light: colors.bgPrimary,
  dark: colors.textPrimary,
};

const styles = {
  container: {
    maxWidth: "100%",
  },

  header: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    marginBottom: "8px",
    position: "relative",

    [`@media (min-width: ${mq.min["360"]})`]: {
      marginBottom: "16px",
    },
  },

  heading: {
    default: {
      display: "inline-block",
      fontSize: `${fontSizeHeading6}px`,
      fontWeight: fontWeightRegular,
      lineHeight: lineHeightHeading6,

      [`@media (max-width: ${mq.max["720"]})`]: {
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

  arrow: {
    default: {
      [`@media (max-width: ${mq.max["480"]})`]: {
        display: "none",
      },
    },

    light: {
      color: colors.textPrimary,
    },

    dark: {
      color: colors.borderPrimary,
    },

    normal: {
      top: "-38px",

      [`@media (min-width: ${mq.min["768"]})`]: {
        top: "-68px",
      },
    },

    compact: {
      top: "-32px",

      [`@media (min-width: ${mq.min["768"]})`]: {
        top: "-34px",
      },
    },
  },

  moreLink: {
    bottom: "8px",
    fontWeight: fontWeightRegular,
    position: "absolute",
    right: 0,

    [`@media (max-width: ${mq.max["720"]})`]: {
      display: "none",
    },
  },

  bottomMoreLink: {
    backgroundColor: colors.linkPrimary,
    borderRadius: "100px",
    color: colors.textOverlay,
    display: "inline-block",
    fontWeight: fontWeightRegular,
    marginBottom: "8px",
    padding: "1.3em 2em 1.2em",
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

    [`@media (min-width: ${mq.min["720"]})`]: {
      display: "none",
    },
  },

  adSlot: {
    paddingBottom: "8px",
    paddingLeft: "20px",

    [`@media (max-width: ${mq.max["720"]})`]: {
      marginLeft: "auto",
    },
  },
};

class CardShelfVideoSlider extends React.Component {
  getHeadingComponent = () => {
    const { heading, theme } = this.props;

    return (
      <Heading
        level={2}
        override={{
          ...styles.heading.default,
          ...styles.heading[theme],
        }}
      >
        {heading}
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
      spacing,
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
            <Link to={href}>
              {this.getHeadingComponent()}
            </Link>
          }

          {heading && !href && this.getHeadingComponent()}

          {adSlot &&
            <div style={styles.adSlot}>
              {adSlot}
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

        <div style={styles.slider}>
          <VideoSlider
            slidesToShow={4}
            infinite={false}
            arrows={!mobile}
            arrowProps={{
              backgroundColor: arrowBackgroundColor[theme],
              style: [
                styles.arrow.default,
                styles.arrow[theme],
                styles.arrow[spacing],
              ],
            }}
          >
            {React.Children.map(children.slice(0, mobile ? 4 : children.length), (child, i) => (
              <div key={i}>
                {child}
              </div>
            ))}
          </VideoSlider>
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
  spacing: PropTypes.oneOf([
    "normal",
    "compact",
  ]),
  style: propTypes.style,
};

CardShelfVideoSlider.defaultProps = {
  theme: "light",
  spacing: "normal",
};

export default radium(CardShelfVideoSlider);
