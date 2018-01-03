import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";

import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";
import ArticlePaginationItem from "../articlePaginationItem";

const ArticlePaginationNav = ({ previousArticle, nextArticle, style }) => (
  <div
    className="ArticlePaginationNav"
    style={[{ overflow: "hidden" }, style]}
  >
    <Style
      scopeSelector=".ArticlePaginationNav"
      rules={{
        mediaQueries: {
          [`(min-width: ${mq.min[768]})`]: {
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
