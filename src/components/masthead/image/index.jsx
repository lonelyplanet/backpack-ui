import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import { media } from "../../../../settings.json";
import styles from "./styles";

const HeroImageContainer = ({ children, imagePath, style }) => (
  <div
    className="HeroImageContainer"
    style={[styles.image, {
      backgroundImage: `url(${imagePath})`,
    }, style]}
  >
    <Style
      scopeSelector=".HeroImageContainer"
      rules={{
        ".FeaturedSectionHeading": {
          position: "absolute",
          left: 0,
          right: 0,
          top: "3.2rem",
        },

        mediaQueries: {
          [`(min-width: ${media.min["720"]})`]: {
            ".FeaturedSectionHeading": {
              top: "5.6rem",
            },
          },
        },
      }}
    />

    {children}
  </div>
);

HeroImageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  imagePath: PropTypes.string,
  style: PropTypes.object,
};

export default radium(HeroImageContainer);
