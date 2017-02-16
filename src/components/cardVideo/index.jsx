import React, { PropTypes } from "react";
import radium from "radium";
import cn from "classnames";
import {
  Card,
  CardImage,
  CardText,
  CardAnchor,
  CardActionIcon,
} from "../card";
import TextBubble from "../textBubble";
import Heading from "../heading";
import BulletDescription from "../bulletDescription";
import { Play as PlayIcon, ClockOutline as ClockIcon } from "../icon";
import { color, media } from "../../../settings.json";
import { duration } from "../../utils/time";
import { rgba } from "../../utils/color";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  container: {
    maxWidth: "412px",
    minWidth: "216px",

    [mq]: {
      boxShadow: `0 0 20px ${rgba(color.black, 0.12)}`,
    },
  },

  playIcon: {
    bottom: "17px",
    color: color.white,
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

  bullets: {
    marginBottom: "9px",

    [mq]: {
      fontSize: "9px",
      marginBottom: "6px",
    },
  },

  heading: {
    fontSize: "24px",
    lineHeight: (32 / 24),

    [mq]: {
      fontSize: "14px",
      lineHeight: (18 / 14),
    },
  },

  anchor: {
    [mq]: {
      paddingBottom: "11px",
      paddingLeft: "11px",
      paddingRight: "40px",
      paddingTop: "19px",
    },
  },
};

const CardVideo = ({
  href,
  imageSrc,
  aspectRatio,
  runtime,
  heading,
  bullets,
  onClick,
  layout,
  className,
  runtimeUnit,
  style,
}) => (
  <Card
    className={cn("Card--video", className)}
    layout={layout}
    style={[styles.container, style]}
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

      {runtime &&
        <TextBubble style={styles.textBubble}>
          {duration(runtime, runtimeUnit)}
        </TextBubble>
      }
    </CardImage>

    <CardText>
      <CardAnchor
        href={href}
        layout={layout}
        style={styles.anchor}
      >
        {bullets &&
          <BulletDescription
            description={bullets}
            style={styles.bullets}
          />
        }

        <BulletDescription
          description={["bullets", "bullets"]}
          style={styles.bullets}
        />

        <Heading
          level={3}
          weight="thin"
          override={styles.heading}
        >
          {heading}
        </Heading>
      </CardAnchor>

      {onClick &&
        <CardActionIcon
          style={[
            styles.action,
            layout === "tile" && { right: "3px" },
          ]}
          onClick={onClick}
        >
          <ClockIcon label="Watch later" />
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
  ]).isRequired,
  runtime: PropTypes.number.isRequired,
  runtimeUnit: PropTypes.oneOf([
    "seconds",
    "milliseconds",
  ]),
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  layout: PropTypes.oneOf([
    "card",
    "tile",
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

CardVideo.defaultProps = {
  aspectRatio: "video",
  layout: "card",
};

export default radium(CardVideo);
