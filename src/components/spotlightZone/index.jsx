import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import settings from "../../../settings.json";
import colors from "../../styles/colors";
import { rgba } from "../../utils/color";
import font from "../../utils/font";
import { gutter, percentage } from "../../utils/grid";
import Link from "../link";
import Heading from "../heading";
import { Play } from "../icon";
import Container from "../container";

const styles = {
  container: {
    fontFamily: font("benton"),
    position: "relative",
    backgroundColor: colors.bgOverlay,
    color: colors.bgPrimary,

    [`@media (min-width: ${settings.media.min["960"]})`]: {
      display: "flex",
      maxHeight: "100vh",
      minHeight: "665px",
    },
  },

  background: {
    position: "absolute",
    filter: "grayscale(100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    opacity: 0.4,
    zIndex: settings.zIndex.default,
    top: 0,
    left: 0,
    right: 0,
  },

  backgroundOverlay: {
    backgroundColor: rgba(colors.bgOverlay, 0.38),
    bottom: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: percentage("598px", "1510px"),
    zIndex: settings.zIndex.default,

    [`@media (max-width: ${settings.media.max["960"]})`]: {
      display: "none",
    },
  },

  content: {
    zIndex: (settings.zIndex.default + 1),

    [`@media (min-width: ${settings.media.min["960"]})`]: {
      display: "flex",
      alignItems: "center",
    },
  },

  leftContent: {
    [`@media (max-width: ${settings.media.max["480"]})`]: {
      marginLeft: `-${gutter("static", 1, 0.5)}`,
      marginRight: `-${gutter("static", 1, 0.5)}`,
      paddingLeft: gutter("static", 1, 0.5),
      paddingRight: gutter("static", 1, 0.5),
    },

    [`@media (min-width: ${settings.media.min["480"]}) and (max-width: ${settings.media.max["960"]})`]: {
      marginLeft: `-${gutter("static")}`,
      marginRight: `-${gutter("static")}`,
      paddingLeft: gutter("static"),
      paddingRight: gutter("static"),
    },

    [`@media (max-width: ${settings.media.max["600"]})`]: {
      paddingBottom: "32px",
      paddingTop: "34px",
    },

    [`@media (min-width: ${settings.media.min["600"]}) and (max-width: ${settings.media.max["960"]})`]: {
      paddingBottom: "82px",
      paddingTop: "84px",
    },

    [`@media (max-width: ${settings.media.max["960"]})`]: {
      backgroundColor: rgba(colors.bgOverlay, 0.38),
    },

    [`@media (min-width: ${settings.media.min["960"]})`]: {
      marginRight: "84px",
      marginTop: "25px",
      paddingRight: "50px",
    },
  },

  rightContent: {
    [`@media (max-width: ${settings.media.max["600"]})`]: {
      paddingBottom: "38px",
      paddingTop: "32px",
    },

    [`@media (min-width: ${settings.media.min["600"]}) and (max-width: ${settings.media.max["960"]})`]: {
      paddingBottom: "88px",
      paddingTop: "82px",
    },

    [`@media (min-width: ${settings.media.min["960"]})`]: {
      flex: "0 0 auto",
      width: percentage("718px", settings.grid.container),
    },
  },

  zone: {
    fontSize: "16px",
    top: "32px",
    position: "absolute",
    fontWeight: settings.typography.fontWeightSemibold,
    lineHeight: 1,

    [`@media (min-width: ${settings.media.min["600"]})`]: {
      fontSize: "24px",
      top: "64px",
    },

    [`@media (min-width: ${settings.media.min["960"]})`]: {
      top: "80px",
    },
  },

  title: {
    color: colors.bgPrimary,
    fontSize: "20px",
    lineHeight: (24 / 20),

    [`@media (max-width: ${settings.media.max["600"]})`]: {
      marginTop: "8px",
    },

    [`@media (min-width: ${settings.media.min["600"]})`]: {
      fontSize: "40px",
      lineHeight: (48 / 40),
      marginTop: "10px",
    },
  },

  category: {
    color: colors.bgPrimary,
    fontSize: "11px",
    lineHeight: 1,

    [`@media (max-width: ${settings.media.max["600"]})`]: {
      marginTop: "76px",
    },

    [`@media (min-width: ${settings.media.min["600"]}) and (max-width: ${settings.media.max["960"]})`]: {
      marginTop: "147px",
    },

    [`@media (min-width: ${settings.media.min["600"]})`]: {
      fontSize: "16px",
    },
  },

  paragraph: {
    fontSize: "12px",
    fontWeight: 300,
    lineHeight: (20 / 12),
    marginBottom: 0,
    marginTop: 0,

    [`@media (max-width: ${settings.media.max["600"]})`]: {
      marginTop: "18px",
    },

    [`@media (min-width: ${settings.media.min["600"]})`]: {
      fontSize: "16px",
      lineHeight: (28 / 16),
      marginTop: "25px",
    },
  },

  divider: {
    borderColor: rgba(colors.accentGray, 0.27),
    width: "50%",
    display: "inline-block",
    borderStyle: "solid",
    borderTopWidth: 0,
    marginBottom: "25px",
    marginTop: "32px",

    [`@media (min-width: ${settings.media.min["600"]})`]: {
      marginTop: "27px",
    },
  },

  link: {
    position: "relative",
    display: "inline-block",
  },

  image: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: `0 12px 34px 0 ${rgba(colors.shadowPrimary, 0.12)},
      inset 0 1px 3px 0 ${rgba(colors.shadowPrimary, 0.5)}`,
    border: `1px solid ${rgba(colors.bgPrimary, 0.2)}`,
  },

  imageOverlay: {
    backgroundColor: rgba(colors.bgOverlay, 0.16),
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: `background-color ${settings.timing.default} ease`,
  },

  playIcon: {
    color: colors.bgPrimary,
    height: "21px",
    width: "21px",
  },
};

const css = `
  .SpotlightZone a:hover .SpotlightZone-imageOverlay {
    background-color: ${rgba(colors.bgOverlay, 0.06)} !important;
  }
`;

function markup(htmlContent) {
  return {
    __html: htmlContent,
  };
}

const SpotlightZone = ({
  zone,
  category,
  title,
  paragraph,
  href,
  imageUrl,
  backgroundImageUrl,
  adSlot,
  style,
}) => (
  <div
    className="SpotlightZone"
    style={[styles.container, style]}
  >
    <style dangerouslySetInnerHTML={markup(css)} />

    <Container style={styles.content}>
      <div style={styles.leftContent}>
        <div style={styles.zone}>
          {zone}
        </div>

        <div style={styles.category}>
          {category}
        </div>

        <Heading
          level={2}
          tracking="tight"
          weight="thin"
          override={styles.title}
        >
          {title}
        </Heading>

        <p
          style={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />

        {adSlot && <hr style={styles.divider} /> }
        {adSlot}
      </div>

      <div style={styles.rightContent}>
        <Link to={href} style={styles.link}>
          <img
            style={styles.image}
            src={imageUrl}
            alt=""
          />

          <div
            className="SpotlightZone-imageOverlay"
            style={styles.imageOverlay}
          >
            <Play style={styles.playIcon} />
          </div>
        </Link>
      </div>
    </Container>

    <div
      style={[
        styles.background,
        { backgroundImage: `url("${backgroundImageUrl}")` },
      ]}
      aria-hidden="true"
    />
    <div style={styles.backgroundOverlay} />
  </div>
);

SpotlightZone.propTypes = {
  zone: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
  adSlot: PropTypes.element,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

SpotlightZone.defaultProps = {
  zone: "",
  category: "",
  title: "",
  paragraph: "",
  href: "",
  imageUrl: "",
  backgroundImageUrl: "",
};

SpotlightZone.styles = styles;

export default radium(SpotlightZone);
