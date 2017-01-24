import settings from "../../../settings.json";
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
      display: "inline-block",
    },

  },

  item: {
    base: {
      backgroundColor: settings.color.facebook,
      color: settings.color.white,
      display: "inline-block",
      margin: "20px 16px 20px 0",
      height:"40px",
      width:"40px",
      textAlign: "center",
      textDecoration: "none",
      borderRadius: "100px",
      lineHeight: "40px",
      ":hover": { opacity: ".7" },
      twitter: {
        backgroundColor: settings.color.twitter,

      },
      facebook: {
        backgroundColor: settings.color.facebook,

      },
      email: {
        backgroundColor: settings.color.darkGray,

      }
    },

  },
};

export default styles;
