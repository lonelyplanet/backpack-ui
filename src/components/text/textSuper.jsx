import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "./textHeading";
import { textSuper } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

function TextSuper({ children, style }) {
  return (
    <Heading
      level={1}
      style={[textSuper(), style]}
    >
      {children}
    </Heading>
  );
}

TextSuper.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(TextSuper);
