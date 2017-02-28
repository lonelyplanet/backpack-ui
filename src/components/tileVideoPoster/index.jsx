import React, { PropTypes } from "react";
import radium from "radium";
import {
  Card,
  CardAnchor,
  CardDescription,
  CardImage,
  CardText,
} from "../card";
import Heading from "../heading";
import { media, timing } from "../../../settings.json";
import propTypes from "../../utils/propTypes";

const mq = `@media (max-width: ${media.max["768"]})`;

const styles = {
  container: {
    maxWidth: "300px",
  },

  anchor: {
    paddingBottom: "4px",
    paddingTop: "27px",

    [mq]: {
      paddingBottom: "4px",
      paddingTop: "19px",
    },
  },

  heading: {
    display: "-webkit-box",
    fontSize: "20px",
    lineHeight: (28 / 20),
    maxHeight: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: `color ${timing.fast} ease-in-out`,
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,

    [mq]: {
      fontSize: "14px",
      lineHeight: (18 / 14),
      maxHeight: "36px",
    },
  },
};

const TileVideoPoster = ({
  href,
  imageSrc,
  heading,
  description,
  style,
}) => (
  <Card
    layout="tile"
    style={[styles.container, style]}
  >
    <CardImage
      href={href}
      src={imageSrc}
      aspectRatio="poster"
    />

    <CardText>
      <CardAnchor
        href={href}
        layout="tile"
        style={styles.anchor}
      >
        <Heading
          level={3}
          weight="thick"
          override={styles.heading}
        >
          {heading}
        </Heading>

        {description &&
          <CardDescription>
            {description}
          </CardDescription>
        }
      </CardAnchor>
    </CardText>
  </Card>
);

TileVideoPoster.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  style: propTypes.style,
};

export default radium(TileVideoPoster);
