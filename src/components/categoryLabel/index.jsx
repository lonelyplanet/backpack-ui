import React from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import { color } from "../../../settings.json";
import font from "../../utils/font";

const CategoryLabel = styled.span`
  color: ${color.titleGray};
  display: inline-block;
  font-family: ${font("benton")};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06px;
  line-height: 1;
  overflow: hidden;
  text-transform: uppercase;
`;

CategoryLabel.defaultProps = {
  className: "CategoryLabel",
};

export default CategoryLabel;
