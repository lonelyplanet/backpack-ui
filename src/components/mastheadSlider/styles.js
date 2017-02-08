import { media, zIndex } from "../../../settings.json";

export const styles = {
  ".slick-dots": {
    height: "34px",
    textAlign: "left",
    width: "49%",
    bottom: "1.6rem",
  },
  ".slick-dots li": {
    width: "1.2rem",
  },
  ".slick-dots li:first-of-type": {
    marginLeft: 0,
  },
  ".slick-track": {
    position: "relative",
    height: "100vh",
  },
  ".slick-slide": {
    zIndex: zIndex.default,
    position: "relative !important",
  },
  ".slick-slide.slick-active": {
    zIndex: zIndex.middle,
    position: "relative !important",
  },
  ".slick-slide img": {
    maxWidth: "10rem",
  },
  ".slick-dots button:before": {
    opacity: 1,
    fontSize: "1rem",
    color: "rgba(255,255,255, 0.37)",
  },
  ".slick-dots .slick-active button:before": {
    opacity: 1,
    color: "rgba(255,255,255, 1)",
  },
  mediaQueries: {
    [`(max-width: ${media.max["720"]})`]: {
      ".slick-track": {
        overflow: "hidden !important",
      },
    },

    [`(min-width: ${media.min["720"]})`]: {
      ".slick-track": {
        width: "100% !important",
      },

      ".slick-slide": {
        position: "absolute !important",
        top: "0 !important",
        left: "0 !important",
        float: "none",
        width: "100% !important",
      },
    },
  },
};

export default styles;
