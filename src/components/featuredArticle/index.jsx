import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import settings from "../../../settings.json";
import { rgb } from "../../utils/color";
import { add, gutter, span } from "../../utils/grid";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";
import Container from "../container";
import HeroImageContainer from "../heroImageContainer";
import GradientOverlay from "../gradientOverlay";
import FeaturedCallout from "../featuredCallout";
import FeaturedSectionHeading from "../featuredSectionHeading";

const styles = {
  container: {
    default: {
      fontFamily: font("benton"),
      height: "100vh",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",

      [`@media (max-width: ${settings.media.max["720"]})`]: {
        maxHeight: "592px",
      },
    },

    constrained: {
      height: "80vh",
      maxHeight: "720px",
      maxWidth: settings.default.maxWidth,
      minHeight: "592px",

      [`@media (max-width: ${settings.media.max["720"]})`]: {
        maxHeight: "none",
      },
    },
  },

  sectionHeading: {
    marginTop: "56px",
    textShadow: `0 0 130px rgba(${rgb(settings.color.black)}, .5)`,
  },

  callout: {
    bottom: "76px",
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",

    [`@media (max-width: ${settings.media.max["480"]})`]: {
      paddingLeft: settings.default.spacing,
      paddingRight: settings.default.spacing,
    },

    [`@media (min-width: ${settings.media.min["1024"]})`]: {
      marginLeft: add([span(1), gutter()]),
      marginRight: add([span(1), gutter()]),
      width: span(10),
    },
  },

  scoped: {
    ".FeaturedSectionHeading": {
      left: 0,
      position: "absolute",
      right: 0,
      top: "32px",
    },

    mediaQueries: {
      [`(min-width: ${settings.media.min["720"]})`]: {
        ".FeaturedSectionHeading": {
          top: "56px",
        },
      },
    },
  },
};

const FeaturedArticle = ({ article, constrained, style }) => (
  <div
    className="FeaturedArticle"
    style={[
      styles.container.default,
      constrained && styles.container.constrained,
      style,
    ]}
  >
    <Style
      scopeSelector=".FeaturedArticle"
      rules={styles.scoped}
    />

    <HeroImageContainer imagePath={article.image}>
      <Container
        style={{
          height: "100%",
          position: "relative",
          zIndex: (settings.zIndex.default + 1),
        }}
      >
        {article.sectionHeading &&
          <FeaturedSectionHeading style={styles.sectionHeading}>
            {article.sectionHeading}
          </FeaturedSectionHeading>
        }

        <div
          className="FeaturedArticle-callout"
          style={styles.callout}
        >
          <FeaturedCallout
            {...article}
            hideLinkBreakpoint={720}
          />
        </div>
      </Container>

      <GradientOverlay gradientType="leftCorner" />
    </HeroImageContainer>
  </div>
);

FeaturedArticle.propTypes = {
  article: PropTypes.shape({
    sectionHeading: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  }).isRequired,
  constrained: PropTypes.bool,
  style: propTypes.style,
};

FeaturedArticle.defaultProps = {
  constrained: false,
};

export default radium(FeaturedArticle);
