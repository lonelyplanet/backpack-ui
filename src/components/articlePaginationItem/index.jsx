import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import { media, timing, zIndex } from "../../../settings.json";
import colors from "../../styles/colors";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import CategoryLabel from "../categoryLabel";
import Heading from "../heading";
import { ArrowLeftAlternate, ArrowRightAlternate } from "../icon";

const styles = {
  anchor: {
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    color: colors.bgPrimary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: "420px",
    minHeight: "320px",
    overflow: "hidden",
    padding: `30px ${(60 / 1290) * 100}%`,
    position: "relative",
    textAlign: "center",
    textDecoration: "none",

    [`@media (min-width: ${media.min["960"]})`]: {
      minHeight: "420px",
    },

    ":focus": {
      outline: "1px lightgray dotted",
      outlineOffset: "2px",
    },
  },

  container: {
    position: "relative",
    maxWidth: "520px",
    zIndex: (zIndex.default + 1),
  },

  fauxButton: {
    border: `1px solid rgba(${rgb(colors.bgPrimary)}, .3)`,
    borderRadius: "32px",
    display: "inline-block",
    fontFamily: font("benton"),
    fontSize: "11px",
    fontWeight: 500,
    lineHeight: 1,
    marginTop: "17px",
    padding: "10px 16px 9px",
    textTransform: "uppercase",

    [`@media (min-width: ${media.min["480"]})`]: {
      marginTop: "23px",
    },
  },

  image: {
    display: "block",
    height: "100%",
    left: 0,
    objectFit: "cover",
    opacity: 0.4,
    position: "absolute",
    top: 0,
    transition: `opacity ${timing.slow} ease-in-out,
      transform ${timing.slow} ease-in-out`,
    width: "100%",
    zIndex: zIndex.default,
  },
};

const css = `
  .ArticlePaginationItem:hover img,
  .ArticlePaginationItem:active img,
  .ArticlePaginationItem:focus img {
    opacity: 0.2;
    transform: scale(1.05);
  }

  .ArticlePaginationItem .Heading {
    font-size: 32px !important;
  }

  @media (min-width: ${media.min["960"]}) {
    .ArticlePaginationItem .Heading {
      font-size: 40px !important;
      line-height: ${(46 / 40)} !important;
      margin-top: 7px !important;
    }
  }
`;

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const ArticlePaginationItem = ({ title, href, image, imageAlt, category, page, style }) => (
  <a className="ArticlePaginationItem" href={href} style={[styles.anchor, style]}>
    <style dangerouslySetInnerHTML={markup(css)} />

    <div style={styles.container}>
      {category &&
        <CategoryLabel style={{ color: colors.bgPrimary }}>
          {category}
        </CategoryLabel>
      }

      <Heading
        level={3}
        tracking="tight"
        weight="thick"
        override={{
          color: colors.bgPrimary,
          fontSize: "20px",
          lineHeight: (28 / 20),
          marginTop: "2px",
        }}
      >
        {title}
      </Heading>

      {page === "previous" &&
        <div style={styles.fauxButton}>
          <ArrowLeftAlternate
            style={{
              fontSize: "16px",
              marginBottom: "-2px",
              marginRight: "7px",
              marginTop: "-4px",
            }}
          />
          Previous
        </div>
      }

      {page === "next" &&
        <div style={styles.fauxButton}>
          Next
          <ArrowRightAlternate
            style={{
              fontSize: "16px",
              marginBottom: "-2px",
              marginLeft: "7px",
              marginTop: "-4px",
            }}
          />
        </div>
      }
    </div>

    <img
      style={styles.image}
      src={image}
      alt={imageAlt}
    />
  </a>
);

ArticlePaginationItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.oneOf(["previous", "next"]),
  style: PropTypes.objectOf(PropTypes.object),
};

export default radium(ArticlePaginationItem);
