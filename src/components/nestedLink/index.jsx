import React, { PropTypes } from "react";
import cn from "classnames";
import { Style } from "radium";

// Helpers for nested links
// Some components (such as the Cards) need the entire outer wrapper
// to be clickable but also have a nest link that needs to have
// seperate functionality when clicked. Use These components
// in place of <a> tags

export const OuterLink = ({ href, onClick, children, className, element, style }) => {
  const handleOuterClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      window.location.href = href;
    }
  };

  const Element = element;

  return (
    <Element
      className={cn("OuterLink", className)}
      style={{ display: "block" }}
      onClick={element === "div" && handleOuterClick}
      href={element === "a" && href}
    >
      <Style
        scopeSelector=".OuterLink"
        rules={style}
      />
      {children}
    </Element>
  );
};

export const InnerLink = ({ onClick, children, className, style }) => {
  const handleInnerClick = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div
      className={cn("InnerLink", className)}
      onClick={handleInnerClick}
    >
      <Style
        scopeSelector=".InnerLink"
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
  element: PropTypes.oneOf(["a", "div"]),
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

OuterLink.defaultProps = {
  element: "a",
};
