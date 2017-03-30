import font from "./font";
import {
  fontWeightLight,
  fontWeightBook,
  fontWeightMedium,
  fontSizeSuper,
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading3,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeBodyArticle,
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
  lineHeightBodyArticle,
  lineHeightBodySmall,
  lineHeightAccent,
  lineHeightUppercase,
} from "../styles/typography";

const weights = {
  light: fontWeightLight,
  book: fontWeightBook,
  medium: fontWeightMedium,
};

export function textSuper() {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeSuper}px`,
    fontWeight: fontWeightMedium,
    lineHeight: lineHeightSuper,
  };
}

export function textHeading1(weight = "book") {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading1}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading1,
  };
}

export function textHeading2(weight = "book") {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading2}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading2,
  };
}

export function textHeading3(weight = "book") {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading3}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading3,
  };
}

export function textHeading4(weight = "book") {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading4}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading4,
  };
}

export function textHeading5(weight = "book") {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading5}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading5,
  };
}

export function textHeading6(weight = "book") {
  return {
    fontFamily: font("benton"),
    fontSize: `${fontSizeHeading6}px`,
    fontWeight: weights[weight],
    lineHeight: lineHeightHeading6,
  };
}

export function textBodyArticle() {
  return {
    fontFamily: font("miller"),
    fontSize: `${fontSizeBodyArticle}px`,
    lineHeight: lineHeightBodyArticle,
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
