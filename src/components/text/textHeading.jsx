import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import {
  textHeading1,
  textHeading2,
  textHeading3,
  textHeading4,
  textHeading5,
  textHeading6,
} from "../../utils/typography";
import propTypes from "../../utils/propTypes";

function Heading({
  children,
  level,
  size,
  weight,
  style,
}) {
  const Element = `h${level}`;

  const styles = {
    1: textHeading1(weight),
    2: textHeading2(weight),
    3: textHeading3(weight),
    4: textHeading4(weight),
    5: textHeading5(weight),
    6: textHeading6(weight),
  };

  return (
    <Element
      style={[
        {
          color: colors.textPrimary,
          marginTop: 0,
          marginBottom: 0,
        },
        styles[size],
        style,
      ]}
    >
      {children}
    </Element>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: propTypes.heading,
  size: propTypes.heading,
  weight: propTypes.fontWeight,
  style: propTypes.style,
};

Heading.defaultProps = {
  level: 2,
  size: 2,
  weight: "book",
};

export default radium(Heading);
