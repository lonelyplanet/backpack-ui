import React from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import font from "../../utils/font";
import { color } from "../../../settings.json";

const ItalicText = styled.div`
  color: ${color.subtitleGray};
  font-family: ${font("miller")};
  font-size: 14px;
  font-style: italic;
  line-height: 1;
`;

ItalicText.defaultProps = {
  className: "ItalicText",
};

export default ItalicText;
