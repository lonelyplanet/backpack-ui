import React from "react";
import radium, { Style } from "radium";
import Tag from "../tag";

/**
 * TagList component
 * @usage
 * <TagList tags={[
 *   { label: "The Americas", slug: "/americas" },
 *   { label: "World", slug: "/world" },
 *   { label: "Europe", slug: "/europe" },
 * ]} />
 */
function TagList({ tags, rows }) {
  const rowHeight = 44;

  const styles = {
    container: {
      base: {
        maxHeight: `${rowHeight * rows}px`,
        overflow: "hidden",
      },
    },
  };

  const Tags = tags.map((tag, i) => (
    <Tag
      label={tag.label}
      slug={tag.slug}
      selected={tag.selected}
      key={i}
    />
  ));

  return (
    <div
      className="TagList"
      style={styles.container.base}
    >
      <Style
        scopeSelector=".TagList"
        rules={{
          ".Tag": {
            marginBottom: "10px",
            marginRight: "6px",
          },
        }}
      />

      <Tag
        label="All"
        slug="/"
        selected
      />
      {Tags}
    </div>
  );
}

TagList.propTypes = {
  /**
   * An array of tags to display
   */
  tags: React.PropTypes.array.isRequired,

  /**
   * Maximum number of rows of tags to display
   */
  rows: React.PropTypes.number,
};

TagList.defaultProps = {
  tags: [],

  rows: 3,
};

export default radium(TagList);
