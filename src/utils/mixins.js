import colors from "../styles/colors";
import timing from "../styles/timing";
import { rgba } from "./color";

/**
 * Adds outline styles
 * @param  {Number} offset Outline offset amount
 * @return {Object}        CSS styles
 */
function outline(offset = 2) {
  return typeof offset === "number" && {
    outline: "1px lightgray dotted",
    outlineOffset: `${offset}px`,
  };
}

/**
 * Hide only visually, but have available for screen readers
 * @return {Object} CSS styles
 */
function visuallyHidden(focusable) {
  const focusableStyles = {
    clip: "auto",
    clipPath: "none",
    height: "auto",
    margin: 0,
    overflow: "visible",
    position: "static",
    whiteSpace: "inherit",
    width: "auto",
  };

  return Object.assign({}, {
    border: 0,
    clipPath: "inset(50%)",
    display: "inline-block",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    whiteSpace: "nowrap",
    width: "1px",
  }, focusable === "focusable" ? {
    ":active": focusableStyles,
    ":focus": focusableStyles,
  } : {});
}

/**
 * Creates a blue hyperlink; for use with inline styles via Radium
 * @return {Object} CSS styles
 */
function blueLink() {
  return {
    color: colors.linkPrimary,
    textDecoration: "none",
    transition: `color ${timing.fast} ease-in-out`,

    ":hover": {
      color: colors.linkPrimaryHover,
    },

    ":active": {
      color: colors.linkPrimaryHover,
    },

    ":focus": Object.assign({}, outline(), {
      color: colors.linkPrimaryHover,
    }),
  };
}

/**
 * Creates a nicely underlined hyperlink
 * @param  {String} linkColor Link color
 * @return {Object}           CSS styles object
 */
function underlinedLink(linkColor = colors.textPrimary) {
  const underlineOffset = 2;
  const underlineWeight = 1;
  const backgroundColor = colors.bgPrimary;
  const underlineColor = rgba(linkColor, 0.4);

  return {
    color: linkColor,
    position: "relative",
    textDecoration: "none",
    transition: `color ${timing.fast} ease`,

    // Draw the underline with a background gradient
    backgroundImage: `linear-gradient(
      to top,
      transparent,
      transparent ${underlineOffset}px,
      ${underlineColor} ${underlineOffset}px,
      ${underlineColor} ${(underlineOffset + underlineWeight)}px,
      transparent ${(underlineOffset + underlineWeight)}px
    )`,

    // Create breaks in the underline
    textShadow: `-1px -1px 0 ${backgroundColor},
      1px -1px 0 ${backgroundColor},
      -1px 1px 0 ${backgroundColor},
      1px 1px 0 ${backgroundColor}`,
  };
}

export {
  outline,
  visuallyHidden,
  blueLink,
  underlinedLink,
};
