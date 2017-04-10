import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import { rgba } from "../../utils/color";
import { fontSizeBodySmall, fontWeightMedium } from "../../styles/typography";
import { textBodySmall } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const fontSize = fontSizeBodySmall;

const hoverStyles = {
  default: {
    backgroundColor: rgba(colors.accentGray, 0.15),
  },

  selected: {
    backgroundColor: colors.textPrimary,
  },
};

const styles = {
  default: Object.assign({}, textBodySmall(), {
    backgroundColor: colors.bgPrimary,
    borderColor: rgba(colors.accentGray, 0.42),
    borderStyle: "solid",
    borderWidth: `${1 / fontSize}em`,
    borderRadius: `${32 / fontSize}em`,
    color: colors.textPrimary,
    display: "inline-block",
    fontWeight: fontWeightMedium,
    lineHeight: 1,
    padding: `${9 / fontSize}em ${25 / fontSize}em ${7 / fontSize}em`,
    textDecoration: "none",
    textOverflow: "ellipsis",
    transition: `background-color ${timing.fast}`,
    whiteSpace: "nowrap",
  }),

  defaultHover: {
    ":hover": hoverStyles.default,
    ":active": hoverStyles.default,
    ":focus": hoverStyles.default,
  },

  selected: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textPrimary,
    color: colors.bgPrimary,

    ":hover": hoverStyles.selected,
    ":active": hoverStyles.selected,
    ":focus": hoverStyles.selected,
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
