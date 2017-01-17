/* eslint-disable no-unused-vars */
import React, { PropTypes } from "react";
import styled from "styled-components";
import font from "../../utils/font";
import { color } from "../../../settings.json";
import Author from "../author";
import Timestamp from "../timestamp";

const AuthorContainer = styled.div`
  &::before {
    background-color: ${color.red}
    content: "";
    display: block;
    height: 2px;
    margin-bottom: 27px;
    width: 48px;
  }

  .Author {
    display: block;
  }

  .Timestamp {
    display: block;
    margin-top: 25px;
  }
`;

const NewsArticleAuthor = ({ name, title, absoluteTime, relativeTime, ...props }) => (
  <AuthorContainer {...props}>
    <Author name={name} title={title} />

    <Timestamp dateTime={absoluteTime}>
      {relativeTime}
    </Timestamp>
  </AuthorContainer>
);

NewsArticleAuthor.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  absoluteTime: PropTypes.string,
  relativeTime: PropTypes.string,
};

NewsArticleAuthor.defaultProps = {
  className: "NewsArticleAuthor",
};

export default NewsArticleAuthor;
