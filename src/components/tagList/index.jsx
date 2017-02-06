import React, { PropTypes } from "react";
import radium from "radium";
import Tag from "../tag";

const rowHeight = 40;

const styles = {
  container: {
    overflow: "hidden",
  },

  tag: {
    marginBottom: "8px",
    marginRight: "8px",
  },
};

/**
 * TagList component
 * @usage
 * <TagList tags={[
 *   { label: "The Americas", slug: "/americas" },
 *   { label: "World", slug: "/world" },
 *   { label: "Europe", slug: "/europe" },
 * ]} />
 */
const TagList = ({ tags, rows, style }) => (
  <div
    className="TagList"
    style={[
      styles.container,
      { maxHeight: `${rowHeight * rows}px` },
      style,
    ]}
  >
    {tags.map((tag, i) => (
      <Tag
        label={tag.label}
        slug={tag.slug}
        style={styles.tag}
        selected={tag.selected}
        key={i}
      />
    ))}
  </div>
);

TagList.propTypes = {
  /**
   * An array of tags to display
   */
  tags: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    slug: PropTypes.string,
    selected: PropTypes.bool,
  })).isRequired,

  /**
   * Maximum number of rows of tags to display
   */
  rows: PropTypes.number,

  /**
   * Style object
   */
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

TagList.defaultProps = {
  tags: [],
  rows: 3,
};

export default radium(TagList);
