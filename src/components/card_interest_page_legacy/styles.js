import { color, timing, zIndex, media } from "../../../settings.json";
import { rgb } from "../../utils/color";

export default {
  card: {
    borderBottom: 0,
    paddingBottom: 0,
    marginBottom: 0,
    mediaQueries: {
      [`(max-width: ${media.max["960"]})`]: {
        borderBottom: `1px solid ${color.borderColor}`,
        paddingBottom: "4rem",
        marginBottom: "4rem",
        ".Card": {
          display: "flex",
        },
        ".Card--image": {
          width: "8rem",
          height: "10.4rem",
          margin: "0 2.4rem 0 1.6rem",
        },
        ".Card--description": {
          width: "60%",
        },
        ".Heading": {
          fontSize: "1.6rem!important",
          order: -1,
          marginBottom: "1rem!important",
        },
        ".Price": {
          fontSize: "24px!important",
        },
        ".Card--sale-price": {
          display: "none",
        },
        ".Card--tour-description": {
          color: "#586575",
          marginBottom: "1rem",
        },
      },
      [`(min-width: ${media.min["960"]})`]: {
        marginRight: "1.6rem",
        width: "33%",
        ".Card": {
          display: "flex",
          maxWidth: "40.9rem",
          boxShadow: `0 12px 34px 0 rgba(${rgb(color.black)}, 0.11)`,
          minHeight: "53.5rem",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: `transform ${timing.default} ease, box-shadow ${timing.default} ease`,
        },
        ".Card:hover": {
          zIndex: zIndex.top - 1,
          transform: "perspective(1px) scale(1.03)",
          boxShadow: `0px 28px 81px -7px rgba(${rgb(color.black)}, 0.44)`,
        },
        ".Card--image": {
          width: "auto",
          minHeight: "22.4rem",
          margin: 0,
        },
        ".Card--description": {
          padding: "3.2rem",
          flexGrow: 2,
        },
        ".Heading": {
          fontSize: "2.0rem!important",
          flexGrow: 2,
        },
        ".Card--tour-description": {
          color: color.subtitleGray,
          textTransform: "uppercase",
          marginBottom: "1.8rem",
        },
      },
      [`(min-width: ${media.min["768"]})`]: {
        ".Heading": {
          fontSize: "2.4rem!important",
        },
      },
    },
  },
  cardImageBackground: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  heading: {
    lineHeight: 1.33,
  },
  tourDescription: {
    fontSize: "11px",
    letterSpacing: "0.4px",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  saleConatainer: {
    color: color.subtitleGray,
    textTransform: "uppercase",
    fontSize: 11,
    paddingBottom: 8,
  },
  price: {
    display: "flex",
    alignItems: "center",
    sale: {
      textDecoration: "line-through",
      paddingLeft: "5px",
    },
  },
};
