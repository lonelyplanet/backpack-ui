import React from "react";

/* Helpers for nested links */
// Some components (such as the Cards) need the entire outer wrapper
// to be clickable but also have a nest link that needs to have
// seperate functionality when clicked. Use These components
// in place of <a> tags

export const OuterLink = ({ href, onClick, children, className }) => {
  const handleOuterClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className={className} onClick={handleOuterClick}>
      {children}
    </div>
  );
};

export const InnerLink = ({ onClick, children, className }) => {
  const handleInnerClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div className={className} onClick={handleInnerClick}>
      {children}
    </div>
  );
};

OuterLink.propTypes = {
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

InnerLink.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};
