import React from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import font from "../../utils/font";
import { color } from "../../../settings.json";

const AuthorName = styled.div`
  color: ${color.titleGray};
  font-family: ${font("benton")};
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

AuthorName.defaultProps = {
  className: "AuthorName",
  itemProp: "author",
};

export default AuthorName;
