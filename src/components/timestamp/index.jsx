import React from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import font from "../../utils/font";
import { color } from "../../../settings.json";

const Timestamp = styled.time`
  color: ${color.subtitleGray};
  font-family: ${font("benton")};
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

Timestamp.defaultProps = {
  className: "Timestamp",
};

export default Timestamp;
