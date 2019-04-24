import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import font from "../../utils/font";
import { blueLink, underlinedLink } from "../../utils/mixins";
import createQAHook from "../../utils/createQAHook";
import Heading from "../heading";

const baseFontSize = 20;
const pMargin = `${28 / baseFontSize}em`;
const ulMargin = `${60 / baseFontSize}em`;

const scopedStyles = {
  "ContentBlock-text": {
    a: underlinedLink(),
    "a:hover": underlinedLink(colors.linkPrimary),
    "a:active": underlinedLink(colors.linkPrimary),
    "a:focus": underlinedLink(colors.linkPrimary),

    strong: {
      fontWeight: "normal",
    },

    p: {
      marginBottom: pMargin,
      marginTop: pMargin,
    },

    ul: {
      marginBottom: pMargin,
      marginLeft: ulMargin,
      marginTop: pMargin,
    },

    ol: {
      marginBottom: pMargin,
      marginLeft: ulMargin,
      marginTop: pMargin,
    },
  },
};

const styles = {
  container: {
    base: {
      fontSize: `${baseFontSize}px`,
    },
  },

  header: {
    base: {
      marginBottom: `${18 / baseFontSize}em`,
    },
  },

  link: {
    container: {
      base: {
        fontSize: "11px", // Pixel value because it should always be 11px
        lineHeight: 1,
        marginBottom: 0,
        marginTop: `${8 / baseFontSize}em`, // Using baseFontSize here instead of 11px because it should be sized relative to container
      },
    },

    anchor: {
      base: blueLink(),
    },
  },

  text: {
    base: {
      fontFamily: font("miller"),
      fontSize: "1em",
      lineHeight: (36 / 20),
    },
  },
};

/**
 * Content block component
 */
function ContentBlock({ heading, headerLink, htmlContent, qahook }) {
  function markup() {
    return {
      __html: htmlContent,
    };
  }

  return (
    <section
      className="ContentBlock"
      style={styles.container.base}
    >
      <Style
        scopeSelector=".ContentBlock-text"
        rules={scopedStyles["ContentBlock-text"]}
      />

      {heading &&
        <header className="ContentBlock-header" style={styles.header.base}>
          <Heading
            level={3}
            size="small"
            weight="thick"
            caps
          >
            {heading}
          </Heading>

          {headerLink && headerLink.label && headerLink.href &&
            <p style={styles.link.container.base}>
              <a style={styles.link.anchor.base} data-qa={qahook ? createQAHook(headerLink.label, "header", "link") : null} href={headerLink.href} >
                {headerLink.label}
              </a>
            </p>
          }
        </header>
      }

      <div
        className="ContentBlock-text"
        dangerouslySetInnerHTML={markup()}
        style={styles.text.base}
      />
    </section>
  );
}

ContentBlock.propTypes = {
  /**
   * Heading to describe the section
   */
  heading: PropTypes.string,

  /**
   * A link that will be placed under the heading
   */
  headerLink: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),

  /**
   * HTML formatted content
   */
  htmlContent: PropTypes.string.isRequired,

  /**
   * QA Hook
   */
  qahook: PropTypes.bool,
};

ContentBlock.defaultProps = {
  heading: "",

  headerLink: null,

  htmlContent: "",

  qahook: null,
};

export default radium(ContentBlock);
