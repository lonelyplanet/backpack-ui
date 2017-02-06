import React, { PropTypes } from "react";
import styled, { css } from "styled-components";
import radium from "radium";
import Heading from "../heading";
import Price from "../price";
import { OuterLink, InnerLink } from "../nestedLink";
import { iconFromString } from "../../utils/icon";
import { rgba } from "../../utils/color";
import { color, timing, typography, zIndex } from "../../../settings.json";

const formatBulletList = (description) => [].concat(description).join(String.fromCharCode("8226"));

const baseHoverStyles = (fullBleed) => {
  if (fullBleed) {
    return css`
      .CardImageContainer {
        transition: transform ${timing.default} ease-in-out;
        transform: translateY(-2px);
      }
      .Heading {
        color: ${color.blue} !important;
      }
    `;
  }

  return css`
    z-index: ${zIndex.top - 1};
    transform: perspective(1px) scale(1.03);
    box-shadow: 0px 28px 81px -7px ${rgba(color.black, 0.44)};
  `;
};

const styles = {
  cardBase: {
    cursor: "pointer",
    maxWidth: "409px",
    transition: `box-shadow ${timing.default} ease-in-out,
      transform ${timing.default} ease-in-out`,

    // &:hover {
    //   ${({ theme }) => baseHoverStyles(theme.fullBleed)}
    // }
  },

  imageContainer: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "224px",
    position: "relative",
    transition: `transform ${timing.default} ease-in-out`,
  },

  bubbleText: {
    backgroundColor: rgba(color.black, 0.24),
    borderRadius: "44px",
    bottom: "8px",
    color: color.white,
    fontSize: "14px",
    padding: "5px 15px",
    position: "absolute",
    right: "16px",
    weight: typography.fontWeightMedium,
  },

  bottomLeft: {
    bottom: "8px",
    left: "22px",
    position: "absolute",
  },

  iconContainer: {
    color: color.white,
  },

  salePrice: {
    color: color.subtitleGray,
    fontSize: "11px",
    paddingBottom: "8px",
    paddingLeft: "5px",
    textTransform: "uppercase",
  },

  crossThrough: {
    textDecoration: "line-through",
  },

  cardBullets: {
    alignItems: "center",
    color: color.subtitleGray,
    display: "flex",
    fontSize: "11px",
    justifyContent: "space-between",
    letterSpacing: "0.4px",
    marginBottom: "8px",
    textTransform: "uppercase",
  },

  descriptionIconContainer: {
    transition: `transform ${timing.default} ease-in-out`,

    ":hover": {
      color: color.blue,
      transform: "scale(1.2)",
    },
  },

  cardContent: {
    // padding: ${({ theme }) => (theme.fullBleed ? "32px 0 42px" : "32px 24px 42px")},
  },
};

const Card = ({
  link,
  title,
  image,
  imageIcon,
  imageIconProps,
  imageBubbleText,
  description,
  descriptionIcon,
  descriptionIconProps,
  onDescriptionIconClick,
  price,
  theme,
}) => (
  <OuterLink
    style={[
      styles.cardBase,
      theme.minHeight && { minHeight: theme.minHeight },
      !theme.fullBleed && { boxShadow: `0 12px 34px 0 ${rgba(color.black, 0.11)}` },
    ]}
    href={link}
  >
    <div
      className="CardImageContainer"
      style={[
        styles.imageContainer,
        { backgroundImage: `url(${image})` },
      ]}
    >
      {imageIcon &&
        <div
          className="ImageIconContainer"
          style={[
            styles.bottomLeft,
            styles.iconContainer,
          ]}
        >
          {iconFromString(imageIcon, imageIconProps)}
        </div>
      }

      {imageBubbleText &&
        <div className="ImageBubbleText" style={styles.bubbleText}>
          {imageBubbleText}
        </div>
      }
    </div>

    <div className="CardContent" style={styles.cardContent}>
      <div className="CardBullets" style={styles.cardBullets}>
        {formatBulletList(description)}
        {descriptionIcon &&
          <InnerLink
            style={styles.descriptionIconContainer}
            onClick={onDescriptionIconClick}
          >
            {iconFromString(descriptionIcon, descriptionIconProps)}
          </InnerLink>
        }
      </div>

      <Heading
        level={2}
        weight="thin"
        override={{ lineHeight: 1.33 }}
      >
        {title}
      </Heading>

      {price &&
        <div
          className="CardPrice-container"
          style={styles.bottomLeft}
        >
          {price.sale &&
            <span className="SalePrice" style={styles.salePrice}>
              was <span style={styles.crossThrough}>${price.regular}</span>
            </span>
          }

          <Price
            amount={price.sale || price.regular}
            emphasized
          />
        </div>
      }
    </div>
  </OuterLink>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageIcon: PropTypes.string,
  imageIconProps: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  imageBubbleText: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  descriptionIcon: PropTypes.string,
  descriptionIconProps: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  onDescriptionIconClick: PropTypes.func,
  price: PropTypes.shape({
    sale: PropTypes.number,
    regular: PropTypes.number,
  }),
  theme: PropTypes.shape({
    fullBleed: PropTypes.bool,
    minHeight: PropTypes.string,
  }),
};

Card.defaultProps = {
  theme: {
    fullBleed: false,
    minHeight: "auto",
  },
  imageIconProps: {
    width: 20,
    height: 20,
  },
  descriptionIconProps: {
    width: 24,
    height: 24,
  },
};

export default radium(Card);
