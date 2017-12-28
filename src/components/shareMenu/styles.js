import colors from "../../styles/colors";
import { timing } from "../../../settings.json";
import font from "../../utils/font";

const styles = {
  container: {
    base: {
      display: "inline-block",
      fontFamily: font("benton"),
      position: "relative",
    },

    alignment: {
      center: {
        float: "none",
      },
    },
  },

  options: {
    base: {
      backfaceVisibility: "hidden",
      display: "inline-block",
      position: "absolute",
      transition: `opacity ${timing.default},
        transform ${timing.default},
        visibility ${timing.default}`,
      width: "200px",
    },

    position: {
      above: {
        bottom: "38px",
        left: "50%",
      },
      below: {
        left: "50%",
        top: "38px",
      },
      left: {
        right: "38px",
        top: "50%",
      },
      right: {
        left: "38px",
        top: "50%",
      },
    },

    state: {
      hidden: {
        base: {
          opacity: 0,
          visibility: "hidden",
        },

        position: {
          above: {
            transform: "translate(-50%, -10px)",
          },
          below: {
            transform: "translate(-50%, 10px)",
          },
          left: {
            transform: "translate(-10px, -50%)",
          },
          right: {
            transform: "translate(10px, -50%)",
          },
        },
      },
      visible: {
        base: {
          opacity: 1,
          pointerEvents: "all",
          visibility: "visible",
        },

        position: {
          above: {
            transform: "translate(-50%, 0)",
          },
          below: {
            transform: "translate(-50%, 0)",
          },
          left: {
            transform: "translate(0, -50%)",
          },
          right: {
            transform: "translate(0, -50%)",
          },
        },
      },
    },
  },

  item: {
    base: {
      backgroundColor: "transparent",
      color: colors.textPrimary,
      display: "block",
      fontSize: "13px",
      paddingBottom: "4px",
      paddingTop: "6px",
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },

    label: {
      paddingLeft: "6px",
      verticalAlign: "-2px",
    },
  },
};

export default styles;
