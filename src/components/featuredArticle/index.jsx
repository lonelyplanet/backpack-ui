import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import mq from "../../styles/mq";
import spacing from "../../styles/spacing";
import zIndex from "../../styles/zIndex";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import { add, gutter, span } from "../../utils/grid";
import propTypes from "../../utils/propTypes";
import Container from "../container";
import FeaturedCallout from "../featuredCallout";
import FeaturedSectionHeading from "../featuredSectionHeading";
import GradientOverlay from "../gradientOverlay";
import HeroImageContainer from "../heroImageContainer";

const styles = {
  container: {
    default: {
      fontFamily: font("benton"),
      height: "100vh",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",

      [`@media (max-width: ${mq.max[720]})`]: {
        maxHeight: "592px",
      },
    },

    constrained: {
      height: "80vh",
      maxHeight: "720px",
      maxWidth: `${dimensions.maxWidth}px`,
      minHeight: "592px",

      [`@media (max-width: ${mq.max[720]})`]: {
        maxHeight: "none",
      },
    },
  },

  sectionHeading: {
    marginTop: "56px",
    textShadow: `0 0 130px rgba(${rgb(colors.shadowPrimary)}, .5)`,
  },

  callout: {
    bottom: "76px",
    left: 0,
    position: "absolute",
    right: 0,
    width: "100%",

    [`@media (max-width: ${mq.max[480]})`]: {
      paddingLeft: `${spacing.gutterHalf}px`,
      paddingRight: `${spacing.gutterHalf}px`,
    },

    [`@media (min-width: ${mq.min[1024]})`]: {
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
      [`(min-width: ${mq.min[720]})`]: {
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
          zIndex: (zIndex.default + 1),
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
