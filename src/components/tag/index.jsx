import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeBodySmall, fontWeightRegular } from "../../styles/typography";
import { rgba } from "../../utils/color";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import { textBodySmall } from "../../utils/typography";
import createQAHook from "../../utils/createQAHook";

const fontSize = fontSizeBodySmall;

const hoverStyles = {
  default: {
    backgroundColor: rgba(colors.borderPrimary, 0.15),
  },

  selected: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.borderPrimary,
  },
};

const styles = {
  default: Object.assign({}, {
    backgroundColor: colors.bgPrimary,
    borderColor: colors.borderLight,
    borderStyle: "solid",
    borderWidth: `${1 / fontSize}em`,
    borderRadius: `${32 / fontSize}em`,
    color: colors.textLight,
    fontSize: "20px",
    display: "inline-block",
    letterSpacing: 0,
    maxHeight: "30px",
    padding: `${8 / fontSize}em ${20 / fontSize}em`,
    textDecoration: "none",
    textOverflow: "ellipsis",
    transition: `background-color ${timing.fast}`,
    whiteSpace: "nowrap",
  }, textBodySmall(), {
    lineHeight: "15px",
    fontWeight: fontWeightRegular,
  }),

  defaultHover: {
    ":hover": hoverStyles.default,
    ":active": hoverStyles.default,
    ":focus": Object.assign({}, hoverStyles.default, outline()),
  },

  selected: {
    backgroundColor: hoverStyles.selected.backgroundColor,
    borderColor: hoverStyles.selected.backgroundColor,
    color: colors.textOverlay,

    ":hover": hoverStyles.selected,
    ":active": hoverStyles.selected,
    ":focus": Object.assign({}, hoverStyles.selected, outline()),
  },
};

function Tag({ children, href, onClick, selected, style, qaHook }) {
  let Element = "span";
  if (href) Element = "a";
  if (onClick) Element = "button";

  return (
    <Element
      className="Tag"
      style={[
        styles.default,
        (href || onClick) && styles.defaultHover,
        (href || onClick) ? { cursor: "pointer" } : { cursor: "default" },
        selected && styles.selected,
        style,
      ]}
      href={href}
      onClick={onClick}
      data-qa={qaHook ? createQAHook(children, "tag", Element === "a" ? "link" : Element) : null}
    >
      {children}
    </Element>
  );
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  style: propTypes.style,
  qaHook: PropTypes.bool,
};

Tag.defaultProps = {
  selected: false,
  qaHook: false,
};

export default radium(Tag);
