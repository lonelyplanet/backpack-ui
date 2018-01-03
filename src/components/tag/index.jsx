import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { fontSizeBodySmall, fontWeightMedium } from "../../styles/typography";
import { rgba } from "../../utils/color";
import { outline } from "../../utils/mixins";
import propTypes from "../../utils/propTypes";
import { textBodySmall } from "../../utils/typography";

const fontSize = fontSizeBodySmall;

const hoverStyles = {
  default: {
    backgroundColor: rgba(colors.borderPrimary, 0.15),
  },

  selected: {
    backgroundColor: colors.textPrimary,
  },
};

const styles = {
  default: Object.assign({}, {
    backgroundColor: colors.bgPrimary,
    borderColor: colors.borderPrimary,
    borderStyle: "solid",
    borderWidth: `${1 / fontSize}em`,
    borderRadius: `${32 / fontSize}em`,
    color: colors.textPrimary,
    display: "inline-block",
    maxHeight: "32px",
    padding: `${9 / fontSize}em ${25 / fontSize}em ${7 / fontSize}em`,
    textDecoration: "none",
    textOverflow: "ellipsis",
    transition: `background-color ${timing.fast}`,
    whiteSpace: "nowrap",
  }, textBodySmall(), {
    fontWeight: fontWeightMedium,
    lineHeight: 1,
  }),

  defaultHover: {
    ":hover": hoverStyles.default,
    ":active": hoverStyles.default,
    ":focus": Object.assign({}, hoverStyles.default, outline()),
  },

  selected: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textPrimary,
    color: colors.textOverlay,

    ":hover": hoverStyles.selected,
    ":active": hoverStyles.selected,
    ":focus": Object.assign({}, hoverStyles.selected, outline()),
  },
};

function Tag({ children, href, onClick, selected, style }) {
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
};

Tag.defaultProps = {
  selected: false,
};

export default radium(Tag);
