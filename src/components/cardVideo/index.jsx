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
import IconButton from "../iconButton";
import media from "../../styles/mq";
import colors from "../../styles/colors";
import duration from "../../utils/time";
import timing from "../../styles/timing";
import propTypes from "../../utils/propTypes";

const styles = {
  container: {
    maxWidth: "100%",
  },

  image: {
    position: "relative",
  },

  overlay: {
    default: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    desktop: {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      opacity: 0,
      transition: `opacity ${timing.fast} ease`,
      ":hover": {
        opacity: 1,
      },
    },
    mobile: {
      backgroundImage: "linear-gradient(-180deg, rgba(0, 0, 0, 0) 53%, rgba(0, 0, 0, 0.8) 99%)",
    },
  },

  overlayContent: {
    default: {
      position: "relative",
      top: "10px",
      left: "0px",
      width: "100%",
      height: "100%",
      transition: `top ${timing.fast} ease`,
    },
    mobile: {
      top: "0px",
    },
  },

  playButton: {
    bottom: "16px",
    left: "16px",
    position: "absolute",
    paddingLeft: "4px",
    fontSize: "16px",
    [`@media (max-width: ${media.max["360"]})`]: {
      bottom: "9px",
      left: "10px",
    },
  },

  actionButton: {
    bottom: "16px",
    right: "16px",
    position: "absolute",
    fontSize: "16px",
    [`@media (max-width: ${media.max["360"]})`]: {
      bottom: "9px",
      right: "10px",
    },
  },

  duration: {
    default: {
      fontSize: "14px",
      color: colors.textOverlay,
      position: "absolute",
      right: "16px",
      [`@media (max-width: ${media.max["360"]})`]: {
        right: "10px",
      },
    },
    topAligned: {
      top: "16px",
      [`@media (max-width: ${media.max["360"]})`]: {
        top: "9px",
      },
    },
    bottomAligned: {
      bottom: "21px",
      [`@media (max-width: ${media.max["360"]})`]: {
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
          scopeSelector=".Card--video--overlay:hover"
          rules={{
            ".Card--video--overlaycontent": {
              top: "0px !important",
            },
          }}
        />

        <div
          className="Card--video--overlaycontent"
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
            style={styles.playButton}
            size={32}
            hoverColor={colors.textOverlay}
            hoverBackgroundColor={colors.linkPrimary}
            transitionDuration="300ms"
          />

          {onClick &&
            <IconButton
              hoverBackgroundScale={1.2}
              shadow
              iconName={actionIcon}
              label={actionIconLabel}
              onClick={onClick}
              style={styles.actionButton}
              size={32}
              hoverColor={colors.textOverlay}
              hoverBackgroundColor={colors.linkPrimary}
              transitionDuration="300ms"
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
          <CardBullets bullets={bullets} spacing={spacing} />
        }

        <CardHeading
          theme={theme}
          spacing={spacing}
          style={{ paddingLeft: "1px", paddingRight: "1px" }}
        >
          { heading }
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
  layout: "card",
  theme: "light",
  spacing: "normal",
  mobile: false,
};

export default radium(CardVideo);
