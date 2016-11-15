import { color, components, timing, zIndex } from "../../../settings.json";
import Flyout from "../flyout";
import { rgb } from "../../utils/color";

const flyoutPopupStyles = Flyout.styles.type.mapPopup;

const styles = {
  container: {
    base: {
      position: "relative",
      width: 628,
      height: 400,
      zIndex: zIndex.default,
    },

    fill: {
      height: "100%",
      width: "100%",
    },
  },

  map: {
    base: {
      height: "100%",
      width: "100%",
    },
  },

  popupBanner: {
    container: {
      base: {
        backgroundColor: color.white,
        fontSize: "16px",
        height: "80px",
        left: 0,
        paddingTop: `${17 / 16}em`,
        position: "absolute",
        textAlign: "center",
        top: components.header.heightMobile,
        transition: `transform ${timing.fast}`,
        width: "100%",
        zIndex: zIndex.videoOverlayClose + 1,
      },

      hidden: {
        transform: "translateY(-130px)",
      },

      visible: {
        boxShadow: `40px 2px 20px rgba(${rgb(color.black)}, 0.1),
          -40px 2px 20px rgba(${rgb(color.black)}, 0.1)`,
        transform: "translateY(-50px)",
      },
    },

    anchor: {
      base: {
        display: "block",
      },
    },

    name: {
      base: {
        color: color.darkGray,
        fontSize: "1em",
        fontWeight: 600,
      },
    },

    subtype: {
      base: {
        color: "#c2ced4",
        fontSize: `${12 / 16}em`,
        fontWeight: 600,
        marginTop: `${4 / 16}em`,
        textTransform: "uppercase",
      },
    },
  },

  attribution: {
    container: {
      base: {
        bottom: `${2 / 10}em`,
        fontSize: "10px",
        position: "absolute",
        right: `${8 / 10}em`,
      },
    },

    button: {
      base: {
        backgroundColor: "transparent",
        color: color.featureCopy,
        fontSize: "1em",
        fontWeight: 600,
        textDecoration: "underline",
      },
    },

    content: {
      base: {
        backgroundColor: "rgba(255, 255, 255, .8)",
        bottom: `${20 / 9}em`,
        fontSize: `${9 / 10}em`,
        padding: `${5 / 9}em ${5 / 9}em ${3 / 9}em`,
        position: "absolute",
        right: 0,
        textAlign: "right",
        transition: `opacity ${timing.fast},
          visibility ${timing.fast},
          transform ${timing.fast}`,
        width: `${200 / 9}em`,
      },

      hidden: {
        opacity: 0,
        transform: "translateY(5px)",
        visibility: "hidden",
      },

      visible: {
        opacity: 1,
        transform: "translateY(0)",
        visibility: "visible",
      },
    },
  },
};

const scopedStyles = {
  ".leaflet-popup-content-wrapper": flyoutPopupStyles.container,

  ".leaflet-popup-content": {
    margin: 0,
    lineHeight: "inherit",
  },

  ".leaflet-popup-tip": flyoutPopupStyles.arrow,

  ".leaflet-marker-icon": {
    borderRadius: "100%",
    textAlign: "center",
    transition: `backgroundColor ${timing.fast},
      color ${timing.fast},
      height ${timing.fast},
      transform ${timing.fast},
      margin ${timing.fast},
      padding ${timing.fast},
      width ${timing.fast}`,
  },

  ".leaflet-marker-icon .svg-icon": {
    pointerEvents: "none",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    verticalAlign: "top",
    display: "inline-block",
    fill: color.white,
    height: "1em",
    width: "1em",
  },

  ".leaflet-popup-pane": {
    pointerEvents: "none",
  },
};

const markerStyles = {};

function markerStylesMixin(markerColor, mode, state) {
  if (state === "active") {
    return {
      backgroundColor: color.white,
      borderColor: color.white,
      boxShadow: `0 0 5px rgba(${rgb(color.black)}, .25)`,
      color: markerColor,
      fontSize: "32px",
    };
  }

  return {
    backgroundColor: markerColor,
    borderColor: `rgba(${rgb(color.black)}, .12)`,
    borderStyle: "solid",
    borderWidth: mode === "explore" ? "2px" : "1px",
    boxShadow: `0 1px 5px rgba(${rgb(color.black)}, .25)`,
    color: color.white,
    fontSize: mode === "explore" ? "16px" : "12px",
    lineHeight: 1,
  };
}

const markerColors = {
  eat: color.poiEat,
  drink: color.poiDrink,
  play: color.poiPlay,
  see: color.poiSee,
  shop: color.poiShop,
  sleep: color.poiSleep,
  transport: color.poiTransport,
  default: color.poiDefault,
  center: color.blue,
};

export { styles, scopedStyles, markerStyles, markerColors, markerStylesMixin };
