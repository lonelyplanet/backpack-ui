import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import propTypes from "../../utils/propTypes";
import Container from "../container";

const TabPanel = (props) => (
  <div
    className="TabPanel"
    style={props.style}
    role="tabpanel"
    {...props}
  >
    <Container>
      {props.children}
    </Container>
  </div>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  style: propTypes.style,
};

export default radium(TabPanel);
