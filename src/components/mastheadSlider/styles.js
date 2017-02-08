import { color, zIndex } from "../../../settings.json";

export const rules = {
  ".slick-dots": {
    marginRight: "auto",
    marginLeft: "auto",
    height: "34px",
    textAlign: "center",
    top: "-75px",
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
  ".slick-prev": {
    left: "52px",
    zIndex: zIndex.middle + 1,
  },
  ".slick-next": {
    right: "52px",
    zIndex: zIndex.middle + 1,
  },
  ".slick-arrow:before": {
    content: "",
    display: "none",
  },
};

const styles = {
  slide: {
    display: "block",
    height: "100vh",
    position: "absolute",
  },
  icon: {
    fill: color.white,
    width: "21px",
    height: "21px",
  },
};

export default styles;
