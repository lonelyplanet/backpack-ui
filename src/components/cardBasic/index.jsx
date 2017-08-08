import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  Card,
  CardAnchor,
  CardBullets,
  CardHeading,
  CardImage,
  CardText,
} from "../card";
import propTypes from "../../utils/propTypes";

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
        {bullets && bullets.length > 0 &&
          <CardBullets bullets={bullets} />
        }

        <CardHeading>
          {heading}
        </CardHeading>
      </CardAnchor>
    </CardText>
  </Card>
);

CardBasic.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: propTypes.style,
};

export default radium(CardBasic);
