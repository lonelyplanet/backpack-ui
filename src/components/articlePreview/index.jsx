import React from "react";
import PropTypes from "prop-types";
import assign from "object-assign";
import { color } from "../../../settings.json";
import font from "../../utils/font";
import CategoryLabelLink from "../categoryLabelLink";
import Heading from "../heading";

function ArticlePreview({ title, paragraph, image, href, category, categoryHref }) {
  const styles = {
    container: {
      fontFamily: font("benton"),
      color: color.titleGray,
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
        <a href={href} style={styles.anchor}>
          <img src={image} alt="" style={styles.image} />
        </a>
      </figure>

      <div className="ArticlePreview-text" style={styles.textContainer}>
        <CategoryLabelLink href={categoryHref}>{category}</CategoryLabelLink>
        <a href={href} style={assign({}, styles.anchor, { marginTop: "12px" })}>
          <Heading
            weight="thick"
            override={styles.heading}
          >
            {title}
          </Heading>

          <p style={styles.paragraph}>
            {paragraph}
          </p>
        </a>
      </div>
    </article>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  categoryHref: PropTypes.string.isRequired,
};

export default ArticlePreview;
