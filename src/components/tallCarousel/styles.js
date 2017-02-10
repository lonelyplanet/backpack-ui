import { color, typography, timing, media, zIndex } from "../../../settings.json";
import { rgb } from "../../utils/color";

const styles = {
  width: "120%",
  marginLeft: "-17%",
  ".TallCarousel-slide": {
    display: "block",
    color: color.white,
    maxHeight: 520,
    height: "69vw",
    position: "relative",
  },
  ".TallCarousel-slide > div": {
    width: "99%",
    margin: "0 auto",
  },
  ".TallCarousel-slide p": {
    position: "absolute",
    fontWeight: typography.fontWeightBold,
    letterSpacing: "-0.08px",
    fontSize: "1.2rem",
    bottom: "1.6rem",
    left: "1.6rem",
  },
  ".slick-list": {
    overflow: "visible",
  },
  mediaQueries: {
    [`(min-width: ${media.min["600"]})`]: {
      marginLeft: " -10%",
      ".TallCarousel-slide": {
        height: "50vw",
      },
    },
    [`(max-width: ${media.max["840"]})`]: {
      overflow: "hidden",
    },
    [`(min-width: ${media.min["840"]})`]: {
      width: "100%",
      marginLeft: "0",
      ".TallCarousel-slide": {
        height: "38vw",
      },
      ".TallCarousel-slide > div": {
        width: "100%",
        margin: "initial",
      },
      ".TallCarousel-slide p": {
        fontSize: "1.6rem",
        bottom: "2.4rem",
        left: "3.2rem",
      },
      ".slick-list": {
        overflow: "hidden",
        padding: "60px 0 110px",
        marginTop: -60,
        marginBottom: -110,
      },
      ".slick-slide": {
        boxShadow: "none",
        zIndex: zIndex.middle,
        transition: `box-shadow ${timing.default} ease, transform ${timing.default} ease, z-index ${timing.default} ease`,
      },
      ".PaginatorButton": {
        zIndex: zIndex.top,
      },
      ".slick-slide:hover": {
        zIndex: zIndex.top - 1,
        transform: "scale(1.03)",
        boxShadow: `0px 28px 81px -7px rgba(${rgb(color.black)}, 0.44)`,
      },
    },
  },
};

export default styles;
