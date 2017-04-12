import { rgba } from "../utils/color";

// Background colors
const bgPrimary = "#fff";
const bgSecondary = "#f4fbfe";
const bgOverlay = "#000";

// Link colors
const linkPrimary = "#297cbb";
const linkPrimaryHover = rgba(linkPrimary, 0.7);

// Border colors
const borderPrimary = "#e4e4e4";

// Text colors
const textPrimary = "#2c3643";
const textSecondary = rgba(textPrimary, 0.7);

// Accent colors
const accentBlue = "#88bde7";
const accentGray = "#b6c3ca";
const accentGreen = "#16c98d";
const accentOrange = "#ff882e";
const accentPink = "#ff6e8d";
const accentPurple = "#9d69c9";
const accentRed = "#da0909";
const accentYellow = "#ffc83f";

// POI colors
// These are deprecated and will be removed in the next major release
const poiGreen = accentGreen;
const poiBlue = accentBlue;
const poiYellow = accentYellow;
const poiRed = accentRed;
const poiPink = accentPink;
const poiPurple = accentPurple;
const poiGray = accentGray;
const poiDefault = "#a8a9ae";

// Social colors
const socialFacebook = "#3a5999";
const socialFacebookMessenger = "#1472fb";
const socialPinterest = "#cb2027";
const socialReddit = "#fc4220";

export default {
  bgPrimary,
  bgSecondary,
  bgOverlay,

  linkPrimary,
  linkPrimaryHover,

  borderPrimary,

  textPrimary,
  textSecondary,

  accentBlue,
  accentGray,
  accentGreen,
  accentOrange,
  accentPink,
  accentPurple,
  accentRed,
  accentYellow,

  poiGreen,
  poiBlue,
  poiYellow,
  poiRed,
  poiPink,
  poiPurple,
  poiGray,
  poiDefault,

  socialFacebook,
  socialFacebookMessenger,
  socialPinterest,
  socialReddit,
};
