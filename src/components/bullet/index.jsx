import React, { PropTypes } from "react";

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

const Bullet = ({ space, color }) => (
  <span
    style={{ color }}
    aria-hidden="true"
    dangerouslySetInnerHTML={markup(content[space])}
  />
);

Bullet.propTypes = {
  space: PropTypes.oneOf([
    "none",
    "before",
    "after",
    "both",
  ]),
  color: PropTypes.string,
};

Bullet.defaultProps = {
  space: "none",
};

export default Bullet;
