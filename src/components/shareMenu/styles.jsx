import settings from "rizzo-next/sass/settings.json";

const styles = {
  container: {
    base: {
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
      transition: `opacity ${settings.timing.default},
        transform ${settings.timing.default},
        visibility ${settings.timing.default}`,
      width: "20rem",
    },

    position: {
      above: {
        bottom: "3.8rem",
        left: "50%",
      },
      below: {
        left: "50%",
        top: "3.8rem",
      },
      left: {
        right: "3.8rem",
        top: "50%",
      },
      right: {
        left: "3.8rem",
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
            transform: "translate(-50%, -1rem)",
          },
          below: {
            transform: "translate(-50%, 1rem)",
          },
          left: {
            transform: "translate(-1rem, -50%)",
          },
          right: {
            transform: "translate(1rem, -50%)",
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
      color: settings.color.text,
      display: "block",
      fontSize: "1.3rem",
      paddingBottom: ".4rem",
      paddingTop: ".6rem",
      textAlign: "left",
      width: "100%",
    },

    label: {
      paddingLeft: ".6rem",
      verticalAlign: "-.2rem",
    },
  },
};

export default styles;
