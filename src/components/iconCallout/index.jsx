import React from "react";
import PropTypes from "prop-types";

import colors from "../../styles/colors";
import font from "../../utils/font";
import timing from "../../styles/timing";
import { add, span, gutter } from "../../utils/grid";
import iconFromString from "../../utils/icon";
import Icon from "../icon";
import Heading from "../heading";
import createQAHook from "../../utils/createQAHook";

const containerMaxWidth = add([span(2, "static"), gutter("static")], "static");

const styles = {
  container: {
    display: "flex",
    flexGrow: 1,
    fontFamily: font("benton"),
    justifyContent: "center",
    maxWidth: containerMaxWidth,
    textAlign: "center",
  },

  anchor: {
    display: "block",
    textDecoration: "none",
  },

  icon: {
    color: colors.linkPrimary,
    fontSize: "96px",
    transition: `transform ${timing.default} ease-in-out`,
  },

  heading: {
    fontSize: "20px",
    marginTop: "33px",
    transition: `color ${timing.default} ease-in-out`,
  },

  copy: {
    color: colors.textSecondary,
    fontSize: "16px",
    lineHeight: (24 / 16),
    marginBottom: "23px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "11px",
  },
};

function IconCallout({ iconName, title, copy, url, qaHook }) {
  return (
    <div className="IconCallout" style={styles.container}>
      <a href={url} style={styles.anchor} data-testid={qaHook ? createQAHook(title, "callout", "link") : null}>
        {iconFromString(iconName, {
          style: styles.icon,
          ariaHidden: true,
          className: "IconCallout-icon",
        })}

        <Heading
          level={3}
          weight="thick"
          override={styles.heading}
        >
          {title}
        </Heading>

        <p
          className="IconCallout-copy"
          style={styles.copy}
        >
          {copy}
        </p>
      </a>
    </div>
  );
}

IconCallout.propTypes = {
  iconName: PropTypes.oneOf(Object.keys(Icon)).isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  qaHook: PropTypes.bool,
};

IconCallout.defaultProps = {
  qaHook: false,
};

export default IconCallout;
