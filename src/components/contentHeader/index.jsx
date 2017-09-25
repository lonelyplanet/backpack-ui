import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import assign from "object-assign";
import settings from "../../../settings.json";
import Heading from "../heading";
import MoreLink from "../moreLink";
import { gutter } from "../../utils/grid";

const styles = {
  container: {
    base: {},

    border: {
      bottom: {
        borderBottom: `.1rem solid ${settings.color.gray}`,
        paddingBottom: ".7rem",
        marginBottom: gutter("static"),
      },

      top: {
        borderTop: `.1rem solid ${settings.color.gray}`,
        paddingTop: ".7rem",
        marginTop: gutter("static"),
      },
    },
  },

  heading: {
    base: {
      float: "left",
    },
  },

  link: {
    base: {
      float: "right",
    },
  },
};

function ContentHeader({ title, heading, border, moreLink }) {
  const style = {
    container: [styles.container.base],
  };

  if (border) {
    style.container.push(styles.container.border[border]);
  }

  const hasLink = moreLink && moreLink.href && moreLink.children;

  const headerClassName = hasLink ?
    "ContentHeader clearfix" :
    "ContentHeader";

  const headingStyle = assign({}, hasLink && styles.heading.base, heading.override);

  return (
    <header
      className={headerClassName}
      style={style.container}
    >
      <Heading {...heading} override={headingStyle}>
        {title}
      </Heading>

      {hasLink &&
        <MoreLink {...moreLink} style={styles.link.base} caps />
      }
    </header>
  );
}

ContentHeader.propTypes = {
  /**
   * Title of the content widget
   */
  title: PropTypes.string.isRequired,

  /**
   * Options for Heading component
   */
  heading: PropTypes.shape(Heading.propTypes).isRequired,

  /**
   * Adds a border to the header
   */
  border: PropTypes.oneOf([
    "",
    "top",
    "bottom",
  ]),

  /**
   * Options for MoreLink component
   */
  moreLink: PropTypes.shape(MoreLink.propTypes),
};

ContentHeader.defaultProps = {
  title: "",

  heading: {},

  border: "",

  moreLink: {},
};

ContentHeader.styles = styles;

export default radium(ContentHeader);
