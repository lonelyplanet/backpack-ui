import { color, media } from "../../../settings.json";

const styles = {
  base: {
    width: "100%",
    backgroundColor: color.titleGray,
    color: color.white,
    left: 0,
    overflow: "hidden",
    position: "relative",
    top: 0,
    zIndex: 6,
    height: "80vh"
  },
  full: {
    [`@media (min-width: ${media.min["720"]})`]: {
      height: "100vh",
    },
  },
  isUnderGlobalHeader: {
    marginTop: "-5rem",
    [`@media (min-width: ${media.min["720"]})`]: {
      marginTop: "-13rem",
    },
  },
};

export default styles;
