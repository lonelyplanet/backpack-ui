import React, { PropTypes } from "react";
import radium from "radium";
import {
  Card,
  CardAnchor,
  CardBullets,
  CardHeading,
  CardImage,
  CardText,
} from "../card";
import Price from "../price";
import propTypes from "../../utils/propTypes";

const CardPrice = ({
  href,
  imageSrc,
  heading,
  bullets,
  price,
  style,
}) => (
  <Card
    className="Card--price"
    style={[style, { minHeight: "535px" }]}
  >
    <CardImage
      href={href}
      src={imageSrc}
    />

    <CardText>
      <CardAnchor
        href={href}
        style={{ minHeight: "303px" }}
      >
        {bullets && bullets.length > 0 &&
          <CardBullets bullets={bullets} />
        }

        <CardHeading>
          {heading}
        </CardHeading>

        {price &&
          <Price
            amount={price.regular}
            discountedAmount={price.sale}
            style={{ bottom: "27px", position: "absolute" }}
            parent="card"
            emphasized
          />
        }
      </CardAnchor>
    </CardText>
  </Card>
);

CardPrice.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.shape({
    sale: PropTypes.number,
    regular: PropTypes.number,
  }).isRequired,
  style: propTypes.style,
};

export default radium(CardPrice);
