import React, { PropTypes } from "react";
import styled from "styled-components";
import AuthorName from "../authorName";
import ItalicText from "../italicText";

const AuthorContainer = styled.div`
  display: inline-block;
  text-align: ${(props) => props.alignment};

  .ItalicText {
    margin-top: 8px;
  }
`;

const Author = ({ alignment, name, title, ...props }) => (
  <AuthorContainer alignment={alignment} {...props}>
    <AuthorName>{name}</AuthorName>
    <ItalicText>{title}</ItalicText>
  </AuthorContainer>
);

Author.propTypes = {
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  name: PropTypes.string,
  title: PropTypes.string,
};

Author.defaultProps = {
  className: "Author",
  alignment: "left",
};

export default Author;
