import React from "react";
import { color, media } from "rizzo-next/sass/settings.json";
import radium, { Style } from "radium";
import Heading from "../heading";
import Lede from "../lede";
import font from "../../utils/font";
import { gutter, add, subtract } from "../../utils/grid";
import { rgb } from "../../utils/color";

const pMargin = subtract([gutter("static"), ".2rem"], "static");
const ulMargin = gutter("static", 12, 2);

const scopedStyles = {
  "ContentBlock-text": {
    p: {
      marginBottom: pMargin,
    },

    ul: {
      marginBottom: pMargin,
      marginLeft: ulMargin,
    },

    ol: {
      marginBottom: pMargin,
      marginLeft: ulMargin,
    },

    "p:not(:first-child)": {
      marginTop: pMargin,
    },

    "ul:not(:first-child)": {
      marginTop: pMargin,
    },

    "ol:not(:first-child)": {
      marginTop: pMargin,
    },
  },
};

const styles = {
  container: {
    partnerDescription: {
      marginBottom: pMargin,
    },

    lpReview: {
      marginBottom: "3.7rem",

      [`@media (min-width: ${media.min["768"]})`]: {
        marginBottom: "9rem",
      },

      [`@media (min-width: ${media.min["1080"]})`]: {
        borderLeft: `2px solid rgba(${rgb(color.blue)}, .4)`,
        paddingLeft: gutter("static"),
        marginLeft: subtract(["-.2rem", gutter("static")], "static"),
        width: `calc(100% + ${add([".2rem", gutter("static")], "static")})`,
      },
    },
  },

  text: {
    base: {
      fontFamily: font("miller"),
      fontSize: "1.6rem",
      lineHeight: (25 / 16),

      [`@media (min-width: ${media.min["600"]})`]: {
        fontSize: "2rem",
        lineHeight: (36 / 20),
      },
    },
  },
};

/**
 * Content block component
 */
function ContentBlock({ heading, lede, htmlContent, type }) {
  const headingImportance = type ? "low" : "normal";
  const headingWeight = type ? "thin" : "normal";

  function markup() {
    return {
      __html: htmlContent,
    };
  }

  return (
    <div
      className="ContentBlock"
      style={[
        type === "partnerDescription" && styles.container.partnerDescription,
        type === "lpReview" && styles.container.lpReview,
      ]}
    >
      <Style
        scopeSelector=".ContentBlock-text"
        rules={scopedStyles["ContentBlock-text"]}
      />

      {heading &&
        <Heading
          level={3}
          size="medium"
          weight={headingWeight}
          importance={headingImportance}
        >
          {heading}
        </Heading>
      }

      {lede &&
        <Lede
          content={lede}
        />
      }

      <div
        className="ContentBlock-text"
        dangerouslySetInnerHTML={markup()}
        style={styles.text.base}
      />
    </div>
  );
}

ContentBlock.propTypes = {
  /**
   * Heading
   */
  heading: React.PropTypes.string.isRequired,

  /**
   * Introduction content
   */
  lede: React.PropTypes.string,

  /**
   * HTML formatted content
   */
  htmlContent: React.PropTypes.string.isRequired,

  /**
   * Type of content
   */
  type: React.PropTypes.oneOf([
    "",
    "lpReview",
    "partnerDescription",
  ]),
};

ContentBlock.defaultProps = {
  heading: "",

  lede: "",

  htmlContent: "",

  type: "",
};

export default radium(ContentBlock);
