import { fonts } from "../styles";

/**
 * Return a font stack
 * @param  {String} family The name of the font family; one of "benton", "miller"
 * @return {String}        Font stack
 */
export default function font(family) {
  const fontFamily = fonts[family];
  if (!fontFamily) return "";
  return fontFamily.join(", ");
}
