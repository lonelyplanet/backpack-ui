import React from "react";
import PropTypes from "prop-types";
import assign from "object-assign";

import colors from "../../styles/colors";
import font from "../../utils/font";
import CategoryLabelLink from "../categoryLabelLink";
import Heading from "../heading";
import createQAHook from "../../utils/createQAHook";
import { createPromotionClickEvent, dataLayerPush } from "../../utils/analytics";

const markup = html => ({ __html: html });

function ArticlePreview({
  title,
  paragraph,
  image,
  imageAlt,
  href,
  category,
  categoryHref,
  trackEventId,
  trackEventName,
  trackEventPosition,
  qaHook,
}) {
  const styles = {
    container: {
      fontFamily: font("benton"),
      color: colors.textPrimary,
      maxWidth: "410px",
    },

    imageContainer: {
      margin: 0,
    },

    textContainer: {
      marginTop: "22px",
    },

    anchor: {
      color: "inherit",
      display: "block",
      textDecoration: "none",
    },

    heading: {
      fontSize: "24px",
      lineHeight: (32 / 24),
    },

    paragraph: {
      color: "#576576",
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: (28 / 16),
      marginBottom: 0,
      marginTop: "13px",
    },

    image: {
      display: "block",
      maxWidth: "100%",
    },
  };

  return (
    <article className="ArticlePreview" style={styles.container}>
      <figure className="ArticlePreview-image" style={styles.imageContainer}>
        <a
          href={href}
          style={styles.anchor}
          data-qa={qaHook ? "article-preview-image-link" : null}
          onClick={() => {
            dataLayerPush(
              createPromotionClickEvent({
                id: trackEventId,
                name: trackEventName,
                creative: "article preview image",
                position: trackEventPosition,
              }),
            );
          }}
        >
          <img src={image} alt={imageAlt} style={styles.image} />
        </a>
      </figure>

      <div className="ArticlePreview-text" style={styles.textContainer}>
        <CategoryLabelLink href={categoryHref}>{category}</CategoryLabelLink>
        <a
          href={href}
          style={assign({}, styles.anchor, { marginTop: "12px" })}
          data-qa={qaHook ? createQAHook(title, "article-preview-text", "link") : null}
          onClick={() => {
            dataLayerPush(
              createPromotionClickEvent({
                id: trackEventId,
                name: trackEventName,
                creative: "article preview text",
                position: trackEventPosition,
              }),
            );
          }}
        >
          <Heading
            weight="thick"
            override={styles.heading}
          >
            {title}
          </Heading>

          <p
            style={styles.paragraph}
            dangerouslySetInnerHTML={markup(paragraph)}
          />
        </a>
      </div>
    </article>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  href: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categoryHref: PropTypes.string.isRequired,
  trackEventId: PropTypes.string,
  trackEventName: PropTypes.string,
  trackEventPosition: PropTypes.string,
  qaHook: PropTypes.bool,
};

ArticlePreview.defaultProps = {
  imageAlt: "",
  trackEventId: "article preview",
  trackEventName: "article preview click",
  trackEventPosition: "article preview",
  qaHook: false,
};

export default ArticlePreview;
