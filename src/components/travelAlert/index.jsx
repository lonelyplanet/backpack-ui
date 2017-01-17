import React, { PropTypes } from "react";
import styled from "styled-components";
import { color } from "../../../settings.json";
import font from "../../utils/font";
import { rgb } from "../../utils/color";
import Container from "../container";

const OuterContainer = styled.div`
  background-color: ${color.orange};
  box-sizing: border-box;
  color: ${color.titleGray};
  font-family: ${font("benton")};
  font-size: 14px;
  padding: 20px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: underline;
  }

  a:focus {
    outline: 1px rgba(${rgb(color.black)}, .3) dotted;
    outline-offset: 2px;
  }
`;

const TravelAlert = ({ children, ...props }) => (
  <OuterContainer {...props}>
    <Container>{children}</Container>
  </OuterContainer>
);

TravelAlert.propTypes = {
  children: PropTypes.node.isRequired,
};

TravelAlert.defaultProps = {
  className: "TravelAlert",
};

export default TravelAlert;
