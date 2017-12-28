import { rgba } from "../utils/color";

// Background colors
const bgPrimary = "#fff";
const bgSecondary = "#f4fbfe";
const bgOverlay = "#000";
const bgDark = rgba("#000", 0.96);

// Link colors
const linkPrimary = "#297cbb";
const linkPrimaryHover = rgba(linkPrimary, 0.7);

// Border colors
const borderPrimary = "#e4e4e4";

// Text colors
const textPrimary = "#2c3643";
const textSecondary = rgba(textPrimary, 0.7);
const textOverlay = "#fff";

// Shadow colors
const shadowPrimary = "#000";

// Accent colors
const accentBlue = "#88bde7";
const accentGray = "#b6c3ca";
const accentGreen = "#16c98d";
const accentOrange = "#ff882e";
const accentPink = "#ff6e8d";
const accentPurple = "#9d69c9";
const accentRed = "#da0909";
const accentYellow = "#ffc83f";

// UI colors
const uiGreen = "#44db5e";

// Social colors
const socialFacebook = "#3a5999";
const socialFacebookMessenger = "#1472fb";
const socialPinterest = "#cb2027";
const socialGoogleBlue = "#557ebf";
const socialGoogleGreen = "#36a852";
const socialGoogleYellow = "#f9bc15";
const socialGoogleRed = "#ea4535";
const socialReddit = "#fc4220";
const socialTwitter = "#1da1f2";
const socialWhatsapp = "#28eb76";

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
const poiEat = "#00ca8b";
const poiPlay = "#ffc92a";
const poiSee = "#f8324d";

export default {
  bgPrimary,
  bgSecondary,
  bgOverlay,
  bgDark,

  linkPrimary,
  linkPrimaryHover,

  borderPrimary,

  textPrimary,
  textSecondary,
  textOverlay,

  shadowPrimary,

  accentBlue,
  accentGray,
  accentGreen,
  accentOrange,
  accentPink,
  accentPurple,
  accentRed,
  accentYellow,

  uiGreen,

  poiGreen,
  poiBlue,
  poiYellow,
  poiRed,
  poiPink,
  poiPurple,
  poiGray,
  poiDefault,
  poiEat,
  poiPlay,
  poiSee,

  socialFacebook,
  socialFacebookMessenger,
  socialGoogleBlue,
  socialGoogleGreen,
  socialGoogleYellow,
  socialGoogleRed,
  socialPinterest,
  socialReddit,
  socialTwitter,
  socialWhatsapp,
};
