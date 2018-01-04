import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";
import {
  Card,
  CardAnchor,
  CardBullets,
  CardHeading,
  CardImage,
  CardText,
} from "../card";
import {
  fontSizeHeading7,
  fontSizeBodySmall,
  lineHeightBodySmall,
} from "../../styles/typography";
import IconButton from "../iconButton";
import mq from "../../styles/mq";
import colors from "../../styles/colors";
import duration from "../../utils/time";
import timing from "../../styles/timing";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    maxWidth: "100%",
    minWidth: 0,
  },

  image: {
    position: "relative",
  },

  overlay: {
    default: {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%",
    },

    desktop: {
      backgroundColor: rgba(colors.bgOverlay, 0.25),
      opacity: 0,
      transition: `opacity ${timing.fast} ease`,
    },

    mobile: {
      backgroundImage: `linear-gradient(-180deg, ${rgba(colors.bgOverlay, 0)} 53%, ${rgba(colors.bgOverlay, 0.8)} 99%)`,
    },
  },

  overlayContent: {
    default: {
      height: "100%",
      left: 0,
      position: "relative",
      top: "10px",
      transition: `top ${timing.fast} ease`,
      width: "100%",
    },

    mobile: {
      top: 0,
    },
  },

  button: {
    bottom: "16px",
    fontSize: `${fontSizeHeading7}px`,
    position: "absolute",

    [`@media (max-width: ${mq.max["360"]})`]: {
      bottom: "9px",
      left: "10px",
    },
  },

  playButton: {
    left: "16px",
    paddingLeft: "4px",
  },

  actionButton: {
    right: "16px",
  },

  duration: {
    default: {
      color: colors.textOverlay,
      fontSize: `${fontSizeBodySmall}px`,
      lineHeight: lineHeightBodySmall,
      position: "absolute",
      right: "16px",

      [`@media (max-width: ${mq.max["360"]})`]: {
        right: "10px",
      },
    },

    topAligned: {
      top: "16px",

      [`@media (max-width: ${mq.max["360"]})`]: {
        top: "9px",
      },
    },

    bottomAligned: {
      bottom: "21px",

      [`@media (max-width: ${mq.max["360"]})`]: {
        bottom: "14px",
      },
    },
  },
};

const CardVideo = ({
  href,
  imageSrc,
  aspectRatio,
  actionIcon,
  actionIconLabel,
  runtime,
  heading,
  bullets,
  onClick,
  layout,
  theme,
  spacing,
  className,
  mobile,
  style,
}) => (
  <Card
    className={cn("Card--video", className)}
    layout={layout}
    theme={theme}
    style={[
      styles.container,
      style,
    ]}
  >
    <CardImage
      href={href}
      src={imageSrc}
      aspectRatio={aspectRatio}
      opacity={1}
      style={styles.image}
    >
      <div
        className="Card--video--overlay"
        style={[
          styles.overlay.default,
          styles.overlay[mobile ? "mobile" : "desktop"],
        ]}
      >
        <Style
          scopeSelector=".Card--video:hover"
          rules={{
            ".Card--video--overlay": {
              opacity: "1 !important",
            },
            ".Card--video--overlayContent": {
              top: "0 !important",
            },
          }}
        />

        <div
          className="Card--video--overlayContent"
          style={[
            styles.overlayContent.default,
            mobile && styles.overlayContent.mobile,
          ]}
        >
          <IconButton
            hoverBackgroundScale={1.2}
            shadow
            iconName="Play"
            label="Play"
            style={[styles.button, styles.playButton]}
            size={32}
            hoverColor={colors.textOverlay}
            hoverBackgroundColor={colors.linkPrimary}
            transitionDuration={timing.fast}
          />

          {onClick &&
            <IconButton
              hoverBackgroundScale={1.2}
              shadow
              iconName={actionIcon}
              label={actionIconLabel}
              onClick={onClick}
              style={[styles.button, styles.actionButton]}
              size={32}
              hoverColor={colors.textOverlay}
              hoverBackgroundColor={colors.linkPrimary}
              transitionDuration={timing.fast}
            />
          }

          {typeof runtime === "number" &&
            <div
              style={[
                styles.duration.default,
                styles.duration[mobile || !onClick ? "bottomAligned" : "topAligned"],
              ]}
            >
              {duration(runtime)}
            </div>
          }
        </div>
      </div>
    </CardImage>

    <CardText>
      <CardAnchor
        href={href}
        layout={layout}
        spacing={spacing}
      >
        {bullets && bullets.length > 0 &&
          <CardBullets
            bullets={bullets}
            spacing={spacing}
          />
        }

        <CardHeading
          theme={theme}
          spacing={spacing}
          style={{
            paddingLeft: "1px",
            paddingRight: "1px",
          }}
        >
          {heading}
        </CardHeading>
      </CardAnchor>
    </CardText>
  </Card>
);

CardVideo.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf([
    "video",
    "poster",
  ]),
  runtime: PropTypes.number,
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string),
  layout: PropTypes.oneOf([
    "card",
    "tile",
  ]),
  theme: PropTypes.oneOf([
    "light",
    "dark",
  ]),
  spacing: PropTypes.oneOf([
    "normal",
    "compact",
  ]),
  actionIcon: PropTypes.string,
  actionIconLabel: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  mobile: PropTypes.bool,
  style: propTypes.style,
};

CardVideo.defaultProps = {
  aspectRatio: "video",
  actionIcon: "ClockOutline",
  actionIconLabel: "Watch Later",
  layout: "card",
  theme: "light",
  spacing: "normal",
  mobile: false,
};

export default radium(CardVideo);
