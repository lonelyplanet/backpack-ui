import React from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import { color } from "../../../settings.json";
import CategoryLabel from "../categoryLabel";

const SponsorLabel = styled(CategoryLabel)`
  color: ${color.crusta};
`;

SponsorLabel.defaultProps = {
  children: "Sponsored",
  className: "SponsorLabel",
};

export default SponsorLabel;
