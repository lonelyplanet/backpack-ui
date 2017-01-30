import React, { PropTypes } from "react";
import styled from "styled-components";
import { media } from "../../../settings.json";
import ArticlePaginationItem from "../articlePaginationItem";

const Container = styled.div`
  overflow: hidden;

  .ArticlePaginationItem {
    @media (min-width: ${media.min["768"]}) {
      float: left;
      width: 50%;
    }
  }
`;

const ArticlePaginationNav = ({ previousArticle, nextArticle, ...props }) => (
  <Container {...props}>
    <ArticlePaginationItem
      headline={previousArticle.headline}
      image={previousArticle.image}
      imageAlt={previousArticle.imageAlt}
      href={previousArticle.href}
      category={previousArticle.category}
      page="previous"
    />

    <ArticlePaginationItem
      headline={nextArticle.headline}
      image={nextArticle.image}
      imageAlt={nextArticle.imageAlt}
      href={nextArticle.href}
      category={nextArticle.category}
      page="next"
    />
  </Container>
);

ArticlePaginationNav.propTypes = {
  previousArticle: PropTypes.shape(ArticlePaginationItem.propTypes).isRequired,
  nextArticle: PropTypes.shape(ArticlePaginationItem.propTypes).isRequired,
};

ArticlePaginationNav.defaultProps = {
  className: "ArticlePaginationNav",
};

export default ArticlePaginationNav;
