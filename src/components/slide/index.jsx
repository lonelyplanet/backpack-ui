import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import { typography, zIndex } from "../../../settings.json";
import colors from "../../styles/colors";
import mq from "../../styles/mq";
import { rgb } from "../../utils/color";
import iconFromString from "../../utils/icon";
import propTypes from "../../utils/propTypes";
import BulletDescription from "../bulletDescription";
import Button from "../button";
import Container from "../container";
import GradientOverlay from "../gradientOverlay";
import Heading from "../heading";
import HeroImageContainer from "../heroImageContainer";
import Link from "../link";

const styles = {
  base: {
    width: "100%",
    height: "100%",
    transform: "translateZ(0)",
  },
  link: {
    color: colors.bgPrimary,
    cursor: "pointer",
  },
  bullets: {
    color: colors.bgPrimary,
    fontSize: "14px",
    marginBottom: "24px",
    fontWeight: typography.fontWeightBold,
    [`@media (min-width: ${mq.min["720"]})`]: {
      marginBottom: "32px",
    },
  },
  adContainer: {
    marginBottom: "20px",
  },
  heading: {
    color: colors.bgPrimary,
    fontSize: "32px",
    letterSpacing: "0",
    marginBottom: "16px",
    [`@media (min-width: ${mq.min["600"]})`]: {
      letterSpacing: "-0.56px",
      fontSize: "calc(11px + 5vw)",
    },
    [`@media (min-width: ${mq.min["720"]})`]: {
      fontSize: "60px",
      marginBottom: "20px",
    },
    [`@media (min-width: ${mq.min["840"]})`]: {
      fontSize: "68px",
    },
  },
  graphic: {
    maxWidth: "100%",
    marginBottom: "14px",
  },
  button: {
    paddingRight: "30px",
    paddingLeft: "30px",
    marginTop: "16px",
    icon: {
      fontSize: "18px",
      marginRight: "16px",
    },
    [`@media (min-width: ${mq.min["720"]})`]: {
      paddingRight: "46px",
      paddingLeft: "46px",
      marginTop: "20px",
    },
  },
  fullOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: `rgba(${rgb(colors.bgOverlay)}, 0.3)`,
  },
  position: {
    center: {
      display: "flex",
      width: "100%",
      position: "relative",
      zIndex: zIndex.slideshowSlide,
      textAlign: "center",
      margin: "0 auto",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [`@media (min-width: ${mq.min["720"]})`]: {
        width: "68%",
      },
      [`@media (min-width: ${mq.min["1290"]})`]: {
        width: "50%",
      },
    },
    leftBottom: {
      bottom: "5.5em",
      zIndex: zIndex.slideshowSlide,
      [`@media (min-width: ${mq.min["720"]})`]: {
        bottom: "11em",
      },
    },
    rightBottom: {
      position: "absolute",
      bottom: "20px",
      padding: 10,
      right: 0,
      zIndex: zIndex.slideshowSlide,

      [`@media (max-width: ${mq.max["480"]})`]: {
        right: "-33px",
      },

      [`@media (min-width: ${mq.min["480"]}) and (max-width: ${mq.max["768"]})`]: {
        right: "-48px",
      },

      [`@media (max-width: ${mq.max["768"]})`]: {
        transform: "scale(.7)",
      },

      [`@media (min-width: ${mq.min["720"]})`]: {
        bottom: "8.2em",
      },
    },
  },
};

const Slide = ({
  image,
  description,
  fullOverlay,
  fullOverlayStyles,
  headline,
  graphic,
  adPosition,
  gradientColor,
  position,
  callToAction,
}) => (
  <div className="Slide" style={styles.base}>
    <HeroImageContainer imagePath={image} />
    <GradientOverlay gradientType="leftCorner" color={gradientColor} />
    {fullOverlay &&
      <div
        className="FullOverlay"
        style={[styles.fullOverlay, fullOverlayStyles && fullOverlayStyles]}
      />
    }
    <Container
      style={{
        height: "100%",
      }}
    >
      <div style={styles.position[position]}>
        {description &&
          <BulletDescription
            description={description}
            style={styles.bullets}
          />
        }

        <Heading
          level={1}
          size="huge"
          weight="thick"
          override={styles.heading}
        >
          <Link to={callToAction.link} onClick={callToAction.onClick} style={styles.link} >
            {graphic &&
              <img src={graphic} style={styles.graphic} alt={headline} />
            }
            {!graphic && headline}
          </Link>
        </Heading>

        {adPosition &&
          <div
            id={adPosition}
            style={styles.adContainer}
          />
        }

        <Link to={callToAction.link}>
          <Button
            rounded
            color={callToAction.theme}
            border={callToAction.border}
            size="large"
            customStyles={styles.button}
            onClick={callToAction.onClick}
          >
            {callToAction.icon &&
              iconFromString(callToAction.icon, { style: styles.button.icon })
            }
            {callToAction.text}
          </Button>
        </Link>
      </div>
    </Container>
  </div>
);


Slide.propTypes = {
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  graphic: PropTypes.string,
  callToAction: PropTypes.shape({
    text: PropTypes.string,
    theme: PropTypes.string,
    border: PropTypes.bool,
    link: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
  description: PropTypes.arrayOf(
    PropTypes.string,
  ),
  fullOverlay: PropTypes.bool,
  fullOverlayStyles: propTypes.style,
  adPosition: PropTypes.string,
  gradientColor: PropTypes.string,
  position: PropTypes.string,
};

Slide.defaultProps = {
  description: [],
  gradientColor: colors.bgOverlay,
  position: "center",
};

export default radium(Slide);
