import font from "./font";
import mq from "../styles/mq";
import {
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontSizeSuper,
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading3,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeHeading8,
  fontSizeBodyArticle,
  fontSizeBodyArticleSmall,
  fontSizeBodySmall,
  fontSizeAccent,
  fontSizeUppercase,
  lineHeightSuper,
  lineHeightHeading1,
  lineHeightHeading2,
  lineHeightHeading3,
  lineHeightHeading4,
  lineHeightHeading5,
  lineHeightHeading6,
  lineHeightHeading7,
  lineHeightHeading8,
  lineHeightBodyArticle,
  lineHeightBodyArticleSmall,
  lineHeightBodySmall,
  lineHeightAccent,
  lineHeightUppercase,
} from "../styles/typography";

const weights = {
  light: fontWeightLight,
  regular: fontWeightRegular,
  medium: fontWeightMedium,
  book: fontWeightRegular, // Book is deprecated and will be removed in the next major release
};

export function responsive(minFontSize, maxFontSize, minWidth = 480, maxWidth = 1024) {
  return {
    fontSize: `${minFontSize}px`,

    [`@media (min-width: ${mq.min[minWidth]}) and (max-width: ${mq.max[maxWidth]})`]: {
      fontSize: `calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * (100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))`,
    },

    [`@media (min-width: ${mq.min[maxWidth]})`]: {
      fontSize: `${maxFontSize}px`,
    },
  };
}

export function textSuper() {
  const minFontSize = fontSizeHeading2;
  const maxFontSize = fontSizeSuper;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeSuper}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightSuper,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading1(weight = "regular") {
  const minFontSize = fontSizeHeading3;
  const maxFontSize = fontSizeHeading1;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading1}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading1,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading2(weight = "regular") {
  const minFontSize = fontSizeHeading4;
  const maxFontSize = fontSizeHeading2;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading2}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading2,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading3(weight = "regular") {
  const minFontSize = fontSizeHeading5;
  const maxFontSize = fontSizeHeading3;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading3}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading3,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading4(weight = "regular") {
  const minFontSize = fontSizeHeading6;
  const maxFontSize = fontSizeHeading4;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading4}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading4,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading5(weight = "regular") {
  const minFontSize = fontSizeHeading7;
  const maxFontSize = fontSizeHeading5;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading5}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading5,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading6(weight = "regular") {
  const minFontSize = fontSizeHeading7 - 2; // 14
  const maxFontSize = fontSizeHeading6;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading6}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading6,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading7(weight = "regular") {
  const minFontSize = fontSizeHeading7 - 4; // 12
  const maxFontSize = fontSizeHeading7;

  return Object.assign({}, {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading7}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading7,
  }, responsive(minFontSize, maxFontSize));
}

export function textHeading8(weight = "regular") {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading8}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading8,
  };
}

export function textBodyArticle() {
  const minFontSize = fontSizeBodyArticleSmall;
  const maxFontSize = fontSizeBodyArticle;

  return Object.assign({}, {
    fontFamily: font("miller"),
    fontSize: `${fontSizeBodyArticle}px`,
    lineHeight: lineHeightBodyArticle,
  }, responsive(minFontSize, maxFontSize));
}

export function textBodyArticleSmall() {
  return {
    fontFamily: font("miller"),
    fontSize: `${fontSizeBodyArticleSmall}px`,
    lineHeight: lineHeightBodyArticleSmall,
  };
}

export function textBodySmall() {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeBodySmall}px`,
    lineHeight: lineHeightBodySmall,
  };
}

export function textAccent() {
  return {
    fontFamily: font("miller"),
    fontSize: `${fontSizeAccent}px`,
    fontStyle: "italic",
    lineHeight: lineHeightAccent,
  };
}

export function textUppercase() {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeUppercase}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightUppercase,
    textTransform: "uppercase",
  };
}
