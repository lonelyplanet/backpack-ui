import React from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import { color, timing } from "../../../settings.json";

const DefaultLink = styled.a`
  color: ${color.blue};
  text-decoration: none;
  transition: color ${timing.fast} ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #4699d9;
  }

  &:focus {
    outline: 1px lightgray dotted;
    outline-offset: 2px;
  }
`;

export default DefaultLink;
