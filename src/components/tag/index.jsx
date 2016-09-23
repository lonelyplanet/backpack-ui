import React from "react";
import radium from "radium";
import { color, timing } from "rizzo-next/sass/settings.json";
import { rgb } from "../../utils/color";

const tagColor = "#e1eaf0";

const hoverStyles = {
  base: {
    backgroundColor: `rgba(${rgb(tagColor)}, .3)`,
  },

  selected: {
    backgroundColor: tagColor,
  },
};

const styles = {
  base: {
    border: `${1 / 12}em solid ${tagColor}`,
    borderRadius: `${17 / 12}em`,
    color: color.darkGray,
    display: "inline-block",
    fontSize: "12px",
    lineHeight: 1,
    padding: `${12 / 12}em ${25 / 12}em ${8 / 12}em`,
    textOverflow: "ellipsis",
    transition: `background-color ${timing.default}`,
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": hoverStyles.base,
  },

  selected: {
    backgroundColor: tagColor,

    ":hover": hoverStyles.selected,
    ":active": hoverStyles.selected,
    ":focus": hoverStyles.selected,
  },
};

/**
 * Tag component
 * @usage
 * <Tag label="Europe" slug="/europe" />
 */
function Tag({ label, slug, selected }) {
  const style = [styles.base];

  if (selected) {
    style.push(styles.selected);
  }

  return (
    <a
      className="Tag"
      style={style}
      href={slug}
    >
      {label}
    </a>
  );
}

Tag.propTypes = {
  /**
   * Text label which is the tag name
   */
  label: React.PropTypes.string.isRequired,

  /**
   * Slug URL of the tag
   */
  slug: React.PropTypes.string.isRequired,

  /**
   * Should the tag appear to have been selected
   */
  selected: React.PropTypes.bool,
};

Tag.defaultProps = {
  label: "",

  slug: "",

  selected: false,
};

Tag.styles = styles;

export default radium(Tag);
