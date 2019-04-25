import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Heading from "./textHeading";
import { textSuper } from "../../utils/typography";
import propTypes from "../../utils/propTypes";
import { validReactAttributes } from "../../utils/validReactAttributes";

const TextSuper = (props) => (
  <Heading
    {...validReactAttributes(props)}
    level={1}
    style={[textSuper(), props.style]}
  >
    {props.children}
  </Heading>
);

TextSuper.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(TextSuper);
