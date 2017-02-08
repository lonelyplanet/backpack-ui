import { zIndex, media } from "../../../settings.json";

export const rules = {
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
//
// export const dotStyles = {
// /* Dots */
//   ".slick-dotted.slick-slider": {
//     marginBottom: "30px",
//   },
//
//   ".slick-dots":
//   {
//     position: "absolute",
//     bottom: "-25px",
//
//     display: "block",
//
//     width: "100%",
//     padding: 0,
//     margin: 0,
//
//     listStyle: "none",
//
//     textAlign: "center",
//   },
//   ".slick-dots li":
//   {
//     position: "relative",
//
//     display: "inline-block",
//
//     width: 20,
//     height: 20,
//     margin: "0px 5px",
//     padding: 0,
//
//     cursor: "pointer",
//   },
//   ".slick-dots li button":
//   {
//     fontSize: 0,
//     lineHeight: 0,
//
//     display: "block",
//
//     width: 20,
//     height: 20,
//     padding: 5,
//
//     cursor: "pointer",
//
//     color: "transparent",
//     border: 0,
//     outline: "none",
//     background: "transparent",
//   },
//   ".slick-dots li button:hover":
//   {
//     outline: "none",
//   },
//   ".slick-dots li button:hover:before":
//   {
//     opacity: 1,
//   },
//   ".slick-dots li button:before":
//   {
//     fontFamily: "slick",
//     fontSize: 6,
//     lineHeight: 20,
//     position: "absolute",
//     top: 0,
//     left: 0,
//
//     width: 20,
//     height: 20,
//
//     content: "•",
//     textAlign: "center",
//
//     opacity: 0.25,
//     color: color.black,
//
//   },
//   ".slick-dots li.slick-active button:before":
//   {
//     opacity: 0.75,
//     color: color.black,
//   },
// };
const styles = {
  slide: {
    display: "block",
    height: "100vh",
    position: "absolute",
  },
};

export default styles;
