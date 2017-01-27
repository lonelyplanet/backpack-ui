import React from "react";
import radium, { Style } from "radium";
import Heading from "../heading";
import Price from "../price";
import styles from "./styles";
import { Play, Clock } from "../icon";

const Card = ({
  title,
  description,
  price,
  image,
  link,
  index,
}) => (
  <div className="Card--wrapper" style={index === 2 ? { margin: 0, paddingBottom: 0, borderBottom: 0 } : {}}>
    <Style
      scopeSelector=".Card--wrapper"
      rules={styles.card}
    />
    <a href={link} className="Card">
      <div
        className="Card--image"
        style={[styles.cardImageBackground, { backgroundImage: `url(${image})` }]}
      >
        <div style={styles.imageGradient} />
        <div style={styles.centerIcon}>
            <Play
              width="30px"
              height="30px"
            />
        </div>
        <div style={styles.bubble}>
          <p>32 min</p>
        </div>
      </div>
      <div className="Card--description" style={styles.description}>
        <span
          className="Card--tour-description"
          style={styles.tourDescription}
        >
          {[].concat(description).join(` ${String.fromCharCode("8226")} `)}
          <Clock
            width="25px"
            height="25px"
          />
        </span>
        <Heading
          level={2}
          weight="thick"
          override={styles.heading}
        >
          {title}
        </Heading>
        {price && price.sale &&
          <p style={styles.saleConatainer}> was
            <span style={styles.price.sale}>${price.sale}</span>
          </p>
        }
        {price &&
        <div style={styles.price}>
          <Price
            amount={price.regular}
            emphasized
          />
        </div>
        }
      </div>
    </a>
  </div>
);


Card.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.arrayOf(React.PropTypes.string),
  price: React.PropTypes.shape({
    sale: React.PropTypes.number,
    regular: React.PropTypes.number,
  }),
  image: React.PropTypes.string,
  link: React.PropTypes.string,
  index: React.PropTypes.number,
};

export default radium(Card);
