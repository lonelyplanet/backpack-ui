import React, { PropTypes } from "react";
import { Style } from "radium";

// Helpers for nested links
// Some components (such as the Cards) need the entire outer wrapper
// to be clickable but also have a nest link that needs to have
// seperate functionality when clicked. Use These components
// in place of <a> tags

export const OuterLink = ({ href, onClick, children, className, style }) => {
  const handleOuterClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div
      className={className}
      onClick={handleOuterClick}
    >
      <Style
        scopeSelector={`.${className}`}
        rules={style}
      />
      {children}
    </div>
  );
};

export const InnerLink = ({ onClick, children, className, style }) => {
  const handleInnerClick = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div
      className={className}
      onClick={handleInnerClick}
    >
      <Style
        scopeSelector={`.${className}`}
        rules={style}
      />
      {children}
    </div>
  );
};

OuterLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

InnerLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};
