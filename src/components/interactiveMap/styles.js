import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import Flyout from "../flyout";
import { rgb } from "../../utils/color";

const flyoutPopupStyles = Flyout.styles.type.mapPopup;

const styles = {
  container: {
    base: {
      maxWidth: "100%",
      position: "relative",
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
        backgroundColor: colors.bgPrimary,
        fontSize: "16px",
        height: "80px",
        left: 0,
        paddingTop: `${17 / 16}em`,
        position: "absolute",
        textAlign: "center",
        top: `${dimensions.headerHeightMobile}px`,
        transition: `transform ${timing.fast}`,
        width: "100%",
        zIndex: zIndex.videoOverlayClose + 1,
      },

      hidden: {
        transform: "translateY(-130px)",
      },

      visible: {
        boxShadow: `40px 2px 20px rgba(${rgb(colors.shadowPrimary)}, 0.1),
          -40px 2px 20px rgba(${rgb(colors.shadowPrimary)}, 0.1)`,
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
        color: colors.textPrimary,
        fontSize: "1em",
        fontWeight: 600,
      },
    },

    subtype: {
      base: {
        color: colors.accentGray,
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
        color: colors.textSecondary,
        fontSize: "1em",
        fontWeight: 600,
        textDecoration: "underline",
      },
    },

    content: {
      base: {
        backgroundColor: `rgba(${rgb(colors.bgPrimary)}, .8)`,
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
    fill: colors.bgPrimary,
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
      backgroundColor: colors.bgPrimary,
      borderColor: colors.bgPrimary,
      boxShadow: `0 0 5px rgba(${rgb(colors.shadowPrimary)}, .25)`,
      color: markerColor,
      fontSize: "32px",
    };
  }

  return {
    backgroundColor: markerColor,
    borderColor: `rgba(${rgb(colors.shadowPrimary)}, .12)`,
    borderStyle: "solid",
    borderWidth: mode === "explore" ? "2px" : "1px",
    boxShadow: `0 1px 5px rgba(${rgb(colors.shadowPrimary)}, .25)`,
    color: colors.bgPrimary,
    fontSize: mode === "explore" ? "16px" : "12px",
    lineHeight: 1,
  };
}

const markerColors = {
  eat: colors.poiEat,
  drink: colors.accentBlue,
  play: colors.poiPlay,
  see: colors.poiSee,
  shop: colors.accentPink,
  sleep: colors.accentPurple,
  transport: colors.accentGray,
  default: colors.poiDefault,
  center: colors.linkPrimary,
};

export {
  styles,
  scopedStyles,
  markerStyles,
  markerColors,
  markerStylesMixin,
};
