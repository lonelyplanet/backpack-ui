import React, { PropTypes } from "react";
import radium from "radium";
import {
  Card,
  CardImage,
  CardText,
  CardDescriptionPoster,
  CardAnchor,
} from "../card";

const styles = {
  container: {
    maxWidth: "290px",
  },

  anchor: {
    paddingBottom: "4px",
    paddingTop: "27px",
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
        <CardDescriptionPoster
          heading={heading}
          description={description}
        />
      </CardAnchor>
    </CardText>
  </Card>
);

TileVideoPoster.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(TileVideoPoster);
