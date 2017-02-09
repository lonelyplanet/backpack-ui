import React, { PropTypes } from "react";
import radium from "radium";
import {
  Card,
  CardImage,
  CardText,
  CardDescription,
  CardAnchor,
} from "../card";
import Price from "../price";

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
        <CardDescription
          heading={heading}
          bullets={bullets}
        />

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
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

export default radium(CardPrice);
