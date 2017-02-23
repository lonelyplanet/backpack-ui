import React, { PropTypes } from "react";
import radium from "radium";
import { color, timing } from "../../../settings.json";
import { rgba } from "../../utils/color";
import font from "../../utils/font";

const baseFontSize = 12;

const hoverStyles = {
  default: {
    backgroundColor: rgba(color.detailHeaderSmall, 0.2),
  },

  selected: {
    backgroundColor: color.darkGray,
  },
};

const styles = {
  default: {
    backgroundColor: color.white,
    borderColor: color.detailHeaderSmall,
    borderStyle: "solid",
    borderWidth: `${1 / baseFontSize}em`,
    borderRadius: `${16 / baseFontSize}em`,
    color: color.darkGray,
    display: "inline-block",
    fontFamily: font("benton"),
    fontSize: `${baseFontSize}px`,
    lineHeight: 1,
    padding: `${10 / baseFontSize}em ${25 / baseFontSize}em ${8 / baseFontSize}em`,
    textDecoration: "none",
    textOverflow: "ellipsis",
    transition: `background-color ${timing.fast}`,
    whiteSpace: "nowrap",
  },

  defaultHover: {
    ":hover": hoverStyles.default,
    ":active": hoverStyles.default,
    ":focus": hoverStyles.default,
  },

  selected: {
    backgroundColor: color.darkGray,
    borderColor: color.darkGray,
    color: color.white,

    ":hover": hoverStyles.selected,
    ":active": hoverStyles.selected,
    ":focus": hoverStyles.selected,
  },
};

function Tag({ children, href, onClick, selected, style }) {
  const Element = href ? "a" : "button";

  return (
    <Element
      className="Tag"
      style={[
        styles.default,
        selected && styles.selected,
        (href || onClick) && styles.defaultHover,
        (href || onClick) ? { cursor: "pointer" } : { cursor: "default" },
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
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Tag.defaultProps = {
  selected: false,
};

export default radium(Tag);
