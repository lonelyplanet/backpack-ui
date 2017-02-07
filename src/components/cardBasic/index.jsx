import React, { PropTypes } from "react";
import radium from "radium";
import {
  Card,
  CardImage,
  CardText,
  CardDescription,
  CardAnchor,
} from "../card";

const CardBasic = ({
  href,
  imageSrc,
  heading,
  bullets,
  style,
}) => (
  <Card style={style}>
    <CardImage
      href={href}
      src={imageSrc}
    />

    <CardText>
      <CardAnchor href={href}>
        <CardDescription
          heading={heading}
          bullets={bullets}
        />
      </CardAnchor>
    </CardText>
  </Card>
);

CardBasic.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardBasic);
