import { color, media, timing } from "../../../settings.json";
import { lighten, darken, rgb } from "../../utils/color";
import { outline } from "../../utils/mixins";

const icons = {
  triangle: {
    base: encodeURIComponent(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${color.darkGray}"><path d="M32 6.857h-32l16 18.286z"></path></svg>`),
    light: encodeURIComponent(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${color.white}"><path d="M32 6.857h-32l16 18.286z"></path></svg>`),
  },
};

const styles = {
  base: {
    appearance: "none",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: ".1rem",
    height: "auto",
    outline: 0,
    transition: `border-color ${timing.fast}, color ${timing.fast}`,
    width: "100%",
  },

  size: {
    tiny: {
      fontSize: "11px",
      padding: `${7 / 11}em ${7 / 11}em ${3 / 11}em`,
    },
    small: {
      fontSize: "11px",
      padding: `1em 1em ${7 / 11}em`,
    },
    medium: {
      fontSize: "13px",
      padding: `${15 / 13}em ${15 / 13}em ${11 / 13}em`,
    },
    large: {
      fontSize: "15px",
      padding: `${19 / 15}em ${19 / 15}em 1em`,
    },
    huge: {
      fontSize: "16px",
      padding: `${23 / 16}em ${20 / 16}em ${19 / 16}em`,
    },
  },

  theme: {
    base: {
      backgroundColor: color.white,
      borderColor: darken(color.white, 17),
      color: color.darkGray,

      ":focus": {
        borderColor: darken(color.gray, 20),
      },
    },
    light: {
      backgroundColor: "transparent",
      borderColor: `rgba(${rgb(color.white)}, .44)`,
      color: color.white,

      ":focus": {
        borderColor: `rgba(${rgb(color.white)}, .66)`,
      },
    },
    dark: {
      backgroundColor: color.white,
      borderColor: darken(color.white, 17),
      color: `rgba(${rgb(color.titleGray)}, .72)`,

      ":focus": {
        borderColor: darken(color.gray, 20),
      },
    },
    inputGroup: {
      backgroundColor: color.white,
      borderColor: "transparent",
      borderRadius: 0,
      borderWidth: 0,
      color: color.darkGray,

      ":focus": {
        borderColor: color.white,
      },
    },
    float: {
      fontSize: "16px",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      backgroundColor: "transparent",
      boxShadow: "none",
      paddingTop: "16px",
      paddingBottom: "16px",
      paddingLeft: 0,
      borderBottom: 0,
      // ":focus": outline(),
      // error: {
      //   borderBottom: `1px solid ${color.red}`,
      // },
    },
  },

  element: {
    input: {
      base: {},
      size: {
        tiny: {},
        small: {},
        medium: {},
        large: {},
        huge: {},
      },
      theme: {
        base: {},
        light: {},
        dark: {},
        inputGroup: {
          padding: "4rem 2rem 1.3rem",

          [`@media (min-width: ${media.min["768"]})`]: {
            padding: "3.5rem 1.5rem 1rem",
          },
        },
      },
    },
    dateInput: {
      base: {
        cursor: "text",
        userSelect: "none",

        ":focus": {
          borderColor: "currentColor",
          color: color.blue,
        },
      },
      theme: {
        base: {
          ":focus": {
            borderColor: darken(color.white, 17),
          },
        },
        light: {
          ":focus": {
            borderColor: `rgba(${rgb(color.white)}, .44)`,
          },
        },
        dark: {
          ":focus": {
            borderColor: darken(color.white, 17),
          },
        },
        inputGroup: {
          ":focus": {
            borderColor: "transparent",
          },
        },
      },
    },
    select: {
      base: {
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
      },
      size: {
        tiny: {
          backgroundPosition: "calc(100% - .7rem) center",
          backgroundSize: ".6rem",
        },
        small: {
          backgroundPosition: "calc(100% - 1.1rem) center",
          backgroundSize: ".8rem",
        },
        medium: {
          backgroundPosition: "calc(100% - 1.5rem) center",
          backgroundSize: ".8rem",
        },
        large: {
          backgroundPosition: "calc(100% - 1.9rem) center",
          backgroundSize: "1rem",
        },
        huge: {
          backgroundPosition: "calc(100% - 2.3rem) center",
          backgroundSize: "1.2rem",
        },
      },
      theme: {
        base: {
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.triangle.base}")`,
        },
        light: {
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.triangle.light}")`,
        },
        dark: {
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.triangle.base}")`,
        },
        inputGroup: {
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${icons.triangle.base}")`,
          backgroundPosition: "calc(100% - 2rem) 4.5rem",
          padding: "4rem 2rem 1.3rem",

          [`@media (min-width: ${media.min["768"]})`]: {
            backgroundPosition: "calc(100% - 2rem) 3.5rem",
            padding: "3.5rem 1.5rem 1rem",
          },
        },
      },
    },
    textarea: {
      base: {},
      size: {
        tiny: {},
        small: {},
        medium: {},
        large: {},
        huge: {},
      },
      theme: {
        base: {},
        light: {},
        dark: {},
        inputGroup: {},
      },
    },
    numberInput: {
      container: {
        base: {
          position: "relative",
        },
      },

      button: {
        base: {
          backgroundColor: color.white,
          borderLeft: ".1rem solid",
          borderLeftColor: darken(color.white, 17),
          color: color.blue,
          display: "block",
          height: "calc(100% - .2rem)",
          position: "absolute",
          top: ".1rem",
          transition: `color ${timing.default}`,

          ":hover": {
            color: lighten(color.blue, 7),
          },
          ":focus": {
            color: lighten(color.blue, 7),
          },
          ":active": {
            color: lighten(color.blue, 7),
          },
        },

        size: {
          tiny: {
            fontSize: "1.1rem",
            width: "2.5rem",
          },
          small: {
            fontSize: "1.3rem",
            width: "3.3rem",
          },
          medium: {
            fontSize: "1.5rem",
            width: "4.4rem",
          },
          large: {
            fontSize: "2.2rem",
            width: "5.4rem",
          },
          huge: {
            fontSize: "2.2rem",
            width: "6.2rem",
          },
        },

        plus: {
          size: {
            tiny: {
              right: "2.6rem",
            },
            small: {
              right: "3.4rem",
            },
            medium: {
              right: "4.5rem",
            },
            large: {
              right: "5.5rem",
            },
            huge: {
              right: "6.3rem",
            },
          },
        },

        minus: {
          right: ".1rem",
        },
      },
    },
  },

  state: {
    alert: {},
    error: {},
    info: {},
    success: {},
  },

  fill: {
    display: "block",
    width: "100%",
  },

  noBorder: {
    borderWidth: 0,
  },
};

export default styles;
