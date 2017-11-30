import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import {
  textHeading1,
  textHeading2,
  textHeading3,
  textHeading4,
  textHeading5,
  textHeading6,
  textHeading7,
  textHeading8,
} from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const Heading = ({
  children,
  level,
  size,
  weight,
  innerRef,
  className,
  id,
  style,
}) => {
  const Element = `h${level}`;

  const styles = {
    1: textHeading1(weight),
    2: textHeading2(weight),
    3: textHeading3(weight),
    4: textHeading4(weight),
    5: textHeading5(weight),
    6: textHeading6(weight),
    7: textHeading7(weight),
    8: textHeading8(weight),
  };

  return (
    <Element
      className={className}
      id={id}
      ref={innerRef}
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
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: propTypes.heading,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  weight: propTypes.fontWeight,
  innerRef: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  style: propTypes.style,
};

Heading.defaultProps = {
  level: 2,
  size: 2,
  weight: "regular",
  innerRef: null,
  className: null,
  id: null,
  style: null,
};

export default radium(Heading);
