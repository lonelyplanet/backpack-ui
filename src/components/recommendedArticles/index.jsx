import React from "react";
import radium, { Style } from "radium";
import { media } from "../../../settings.json";
import { gutter } from "../../utils/grid";
import Heading from "../heading";
import CalloutLink from "../calloutLink";
import ArticlePreview from "../articlePreview";

function RecommendedArticles({ title, calloutLink, calloutTitle, children }) {
  const styles = {
    container: {
    },

    childrenContainer: {
      marginTop: "43px",

      [`@media (min-width: ${media.min["600"]})`]: {
        display: "flex",
      },
    },

    heading: {
      fontSize: "28px",
      fontWeight: 100,
      lineHeight: 1,
    },

    footer: {
      marginTop: "39px",
    },
  };

  return (
    <section className="RecommendedArticles" style={styles.container}>
      <Style
        scopeSelector=".RecommendedArticles"
        rules={{
          mediaQueries: {
            [`(max-width: ${media.max["600"]})`]: {
              ".ArticlePreview + .ArticlePreview": {
                marginTop: gutter("static"),
              },
            },

            [`(min-width: ${media.min["600"]})`]: {
              ".ArticlePreview + .ArticlePreview": {
                marginLeft: gutter("static"),
              },
            },
          },
        }}
      />

      {title &&
      <header>
        <Heading
          level={2}
          weight="thin"
          override={styles.heading}
        >
          {title}
        </Heading>
      </header>
      }

      <div style={styles.childrenContainer}>
        {children}
      </div>

      {calloutTitle && calloutLink &&
      <footer style={styles.footer}>
        <CalloutLink href={calloutLink}>
          {calloutTitle}
        </CalloutLink>
      </footer>
      }
    </section>
  );
}

RecommendedArticles.propTypes = {
  title: React.PropTypes.string,
  calloutLink: React.PropTypes.string,
  calloutTitle: React.PropTypes.string,
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== ArticlePreview) {
        error = new Error(`${componentName} children should be of type "ArticlePreview".`);
      }

      if (child.type === ArticlePreview && React.Children.count.length > 2) {
        error = new Error(`${componentName} should have no more than 2 children.`);
      }
    });

    return error;
  },
};
RecommendedArticles.defaultProps = {
  title: "",
  calloutLink: "",
  calloutTitle: "",
};

export default radium(RecommendedArticles);
