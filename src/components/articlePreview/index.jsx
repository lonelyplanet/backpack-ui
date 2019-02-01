import React from "react";
import PropTypes from "prop-types";
import assign from "object-assign";

import { analytics, EventNames, AnalyticsEvent } from "@lonelyplanet/lp-analytics";
import colors from "../../styles/colors";
import font from "../../utils/font";
import CategoryLabelLink from "../categoryLabelLink";
import Heading from "../heading";

const markup = html => ({ __html: html });

function ArticlePreview({
  title,
  paragraph,
  image,
  imageAlt,
  href,
  category,
  categoryHref,
  trackEventName,
  trackEventPosition,
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
    <AnalyticsEvent
      render={({ track }) => (
        <article className="ArticlePreview" style={styles.container}>
          <figure className="ArticlePreview-image" style={styles.imageContainer}>
            <a
              href={href}
              style={styles.anchor}
              onClick={() => {
                track({
                  [analytics.eventName]: EventNames.promotionClick,
                  ecommerce: {
                    promoClick: {
                      promotions: [
                        {
                          name: trackEventName,
                          creative: "article preview image",
                          position: trackEventPosition,
                        },
                      ],
                    },
                  },
                });
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
              onClick={() => {
                track({
                  [analytics.eventName]: EventNames.promotionClick,
                  ecommerce: {
                    promoClick: {
                      promotions: [
                        {
                          name: trackEventName,
                          creative: "article preview text",
                          position: trackEventPosition,
                        },
                      ],
                    },
                  },
                });
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
      )}
    />
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
  trackEventName: PropTypes.string,
  trackEventPosition: PropTypes.string,
};

ArticlePreview.defaultProps = {
  imageAlt: "",
  trackEventName: "article preview click",
  trackEventPosition: "article preview",
};

export default ArticlePreview;
