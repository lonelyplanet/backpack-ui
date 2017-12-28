import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import cn from "classnames";

import { media } from "../../../settings.json";
import colors from "../../styles/colors";
import iconFromString from "../../utils/icon";
import propTypes from "../../utils/propTypes";
import duration from "../../utils/time";
import {
  Card,
  CardActionIcon,
  CardAnchor,
  CardBullets,
  CardHeading,
  CardImage,
  CardText,
} from "../card";
import TextBubble from "../textBubble";
import { Play as PlayIcon } from "../icon";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  playIcon: {
    bottom: "17px",
    color: colors.bgPrimary,
    fontSize: "20px",
    left: "24px",
    position: "absolute",

    [mq]: {
      bottom: "12px",
      fontSize: "12px",
      left: "11px",
    },
  },

  icon: {
    verticalAlign: "bottom",
  },

  textBubble: {
    bottom: "9px",
    minWidth: "76px",
    position: "absolute",
    right: "10px",

    [mq]: {
      bottom: "6px",
      fontSize: "9px",
      minWidth: "53px",
      paddingBottom: "5px",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingTop: "7px",
      right: "5px",
    },
  },

  action: {
    position: "absolute",
    right: "22px",
    top: "25px",

    [mq]: {
      fontSize: "12px",
      right: "9px",
      top: "12px",
    },
  },
};

const CardVideo = ({
  href,
  imageSrc,
  aspectRatio,
  actionIcon,
  runtime,
  heading,
  bullets,
  onClick,
  layout,
  className,
  style,
}) => (
  <Card
    className={cn("Card--video", className)}
    layout={layout}
    style={style}
  >
    <CardImage
      href={href}
      src={imageSrc}
      aspectRatio={aspectRatio}
      opacity={0.8}
    >
      <div
        className="PlayIcon"
        style={styles.playIcon}
      >
        <PlayIcon style={styles.icon} />
      </div>

      {typeof runtime === "number" &&
        <TextBubble style={styles.textBubble}>
          {duration(runtime)}
        </TextBubble>
      }
    </CardImage>

    <CardText>
      <CardAnchor
        href={href}
        layout={layout}
        style={styles.anchor}
      >
        {bullets && bullets.length > 0 &&
          <CardBullets bullets={bullets} />
        }

        <CardHeading>
          {heading}
        </CardHeading>
      </CardAnchor>

      {onClick &&
        <CardActionIcon
          style={[
            styles.action,
            layout === "tile" && { right: "3px" },
          ]}
          onClick={onClick}
        >
          {iconFromString(actionIcon)}
        </CardActionIcon>
      }
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
  actionIcon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: propTypes.style,
};

CardVideo.defaultProps = {
  aspectRatio: "video",
  actionIcon: "ClockOutline",
  layout: "card",
};

export default radium(CardVideo);
