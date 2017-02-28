import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import {
  CardShelf,
  CardShelfContent,
  CardShelfHeader,
} from "../cardShelf";
import CardVideo from "../cardVideo";
import propTypes from "../../utils/propTypes";

const scopedStyles = {
  ".Card": {
    flex: "0 0 auto",
    width: "100%",
  },

  ".Card + .Card": {
    marginLeft: "30px",
  },
};

const CardShelfVideo = ({ children, heading, href, style }) => (
  <CardShelf
    className="CardShelf--video"
    style={style}
  >
    <Style
      scopeSelector=".CardShelf--video"
      rules={scopedStyles}
    />

    {heading &&
      <CardShelfHeader
        heading={heading}
        href={href}
      />
    }

    <CardShelfContent>
      {children}
    </CardShelfContent>
  </CardShelf>
);

CardShelfVideo.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== CardVideo) {
        error = new Error(`${componentName} children should be of type "CardVideo".`);
      }
    });

    return error;
  },
  heading: PropTypes.string,
  href: PropTypes.string,
  style: propTypes.style,
};

export default radium(CardShelfVideo);
