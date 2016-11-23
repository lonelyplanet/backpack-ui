/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { media } from "../../../settings.json";

// @TODO: Replace grid settings with unitless values in settings.json
const containerWidth = 1290;
const gutterWidth = 30;
const maxWidth = (containerWidth + (gutterWidth * 4));
const mediaQuery = `${(maxWidth * 0.625)}em`;

const Container = styled.div`
  max-width: ${containerWidth}px;
  margin-left: auto;
  margin-right: auto;

  &:after {
    content: " ";
    display: block;
    clear: both;
  }

  @media (max-width: ${media.max[480]}) {
    padding-left: ${(gutterWidth / 2)}px;
    padding-right: ${(gutterWidth / 2)}px;
  }

  @media (min-width: ${media.min[480]}) {
    margin-left: ${gutterWidth}px;
    margin-right: ${gutterWidth}px;
  }

  @media (min-width: ${media.min[1080]}) {
    margin-left: ${(gutterWidth * 2)}px;
    margin-right: ${(gutterWidth * 2)}px;
  }

  @media(min-width: ${mediaQuery}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Container;
