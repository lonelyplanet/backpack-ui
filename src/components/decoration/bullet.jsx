import React from "react";

function Bullet({ space, color }) {
  const content = {
    before: "&#160;&#8226;",
    after: "&#8226;&#160;",
    both: "&#160;&#8226;&#160;",
    none: "&#8226;",
  };

  function markup(htmlContent) {
    return {
      __html: htmlContent,
    };
  }

  return (
    <span
      style={{ color }}
      aria-hidden="true"
      dangerouslySetInnerHTML={markup(content[space])}
    />
  );
}

Bullet.propTypes = {
  /**
   * Where a space should be placed
   */
  space: React.PropTypes.oneOf([
    "none",
    "before",
    "after",
    "both",
  ]),

  /**
   * CSS color value
   */
  color: React.PropTypes.string,
};

Bullet.defaultProps = {
  space: "none",

  color: "",
};

export default Bullet;
