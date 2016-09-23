import React from "react";
import { Style } from "radium";
import { color, media } from "rizzo-next/sass/settings.json";
import ContentBlock from "../contentBlock";
import Icon from "../icon";
import Profile from "../profile";
import { rgb } from "../../utils/color";
import { gutter, span, add, percentage } from "../../utils/grid";

const mq = `${667 * 0.0625}em`;

const maxWidth = add([span(7, "static"), gutter("static")], "static");

const scopedStyles = {
  ".Icon": {
    fontSize: "3rem",
  },

  mediaQueries: {
    [`(min-width: ${mq})`]: {
      ".Icon": {
        fontSize: "4rem",
      },
    },

    [`(max-width: ${media.max["768"]})`]: {
      ".Narrative-content": {
        borderTop: `1px solid ${color.gray}`,
        marginTop: "2rem",
        paddingTop: "2.5rem",
      },

      ".Narrative-aside": {
        textAlign: "center",
      },

      ".Narrative-profile": {
        borderBottom: `1px solid ${color.gray}`,
        paddingBottom: gutter("static"),
      },
    },

    [`(min-width: ${media.min["768"]})`]: {
      ".Narrative-content": {
        borderLeft: `2px solid rgba(${rgb(color.blue)}, .4)`,
        float: "left",
        paddingLeft: gutter("static"),
        width: percentage(add([span(6, "static"), gutter("static")], "static"), maxWidth),
      },

      ".Narrative-aside": {
        float: "left",
        width: percentage(span(1, "static"), maxWidth),
      },

      ".Narrative-profile": {
        borderTop: `1px solid ${color.gray}`,
        clear: "left",
        marginTop: "4.2rem",
        position: "relative",
        width: "100%",
      },

      ".Narrative-profile::before": {
        backgroundColor: color.white,
        content: "''",
        display: "block",
        height: "calc(100% + 2.2rem)",
        left: "-3.2rem",
        position: "absolute",
        top: "-2.2rem",
        width: ".2rem",
      },
    },
  },
};

/**
 * Intro narrative for POI
 */
function Narrative({ heading, htmlContent, author }) {
  return (
    <div className="Narrative">
      <Style
        scopeSelector=".Narrative"
        rules={scopedStyles}
      />

      <aside className="Narrative-aside">
        <Icon
          name="lp-diamond"
          color="blue"
        />
      </aside>

      <div className="Narrative-content">
        <ContentBlock
          heading={heading}
          htmlContent={htmlContent}
        />
        {author &&
          <div className="Narrative-profile">
            <Profile
              name={author.name}
              title={author.title}
              avatar={author.avatar}
              profileUrl={author.url}
              orientation="horizontal"
              size="small"
            />
          </div>
        }
      </div>
    </div>
  );
}

Narrative.propTypes = {
  /**
   * Title of the narrative
   */
  heading: React.PropTypes.string.isRequired,

  /**
   * HTML formatted content
   */
  htmlContent: React.PropTypes.string.isRequired,

  /**
   * Author object
   */
  author: React.PropTypes.object,
};

Narrative.defaultProps = {
  heading: "",

  htmlContent: "",

  author: null,
};

Narrative.styles = scopedStyles;

export default Narrative;
