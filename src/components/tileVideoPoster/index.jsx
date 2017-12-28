import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import { timing } from "../../../settings.json";
import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";
import {
  Card,
  CardAnchor,
  CardDescription,
  CardImage,
  CardText,
} from "../card";
import Heading from "../heading";

const mqSmall = `@media (max-width: ${mq.max["768"]})`;

const styles = {
  container: {
    maxWidth: "300px",
  },

  anchor: {
    paddingBottom: "4px",
    paddingTop: "27px",

    [mqSmall]: {
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

    [mqSmall]: {
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
