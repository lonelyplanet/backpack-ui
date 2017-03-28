import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import { media } from "../../../settings.json";
import ArticlePaginationItem from "../articlePaginationItem";
import propTypes from "../../utils/propTypes";

const ArticlePaginationNav = ({ previousArticle, nextArticle, style }) => (
  <div
    className="ArticlePaginationNav"
    style={[{ overflow: "hidden" }, style]}
  >
    <Style
      scopeSelector=".ArticlePaginationNav"
      rules={{
        mediaQueries: {
          [`(min-width: ${media.min["768"]})`]: {
            ".ArticlePaginationItem": {
              float: "left",
              width: "50%",
            },
          },
        },
      }}
    />

    <ArticlePaginationItem
      title={previousArticle.title}
      image={previousArticle.image}
      imageAlt={previousArticle.imageAlt}
      href={previousArticle.href}
      category={previousArticle.category}
      page="previous"
    />

    <ArticlePaginationItem
      title={nextArticle.title}
      image={nextArticle.image}
      imageAlt={nextArticle.imageAlt}
      href={nextArticle.href}
      category={nextArticle.category}
      page="next"
    />
  </div>
);

ArticlePaginationNav.propTypes = {
  previousArticle: PropTypes.shape(ArticlePaginationItem.propTypes).isRequired,
  nextArticle: PropTypes.shape(ArticlePaginationItem.propTypes).isRequired,
  style: propTypes.style,
};

export default radium(ArticlePaginationNav);
