import React, { PropTypes } from "react";
import radium from "radium";
import { color, timing, media, zIndex } from "../../../settings.json";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import Heading from "../heading";
import CalloutLink from "../calloutLink";
import HideAtBreakpoint from "../hideAtBreakpoint";
import CategoryLabel from "../categoryLabel";

const styles = {
  container: {
    color: color.white,
    fontFamily: font("benton"),
    width: "70%",
    zIndex: zIndex.slideshowSlide,

    [`@media (min-width: ${media.min["720"]})`]: {
      width: "65%",
    },
  },

  smallCaps: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "-0.06px",
    textTransform: "uppercase",
  },

  category: {
    paddingBottom: "8px",
    transition: `padding-bottom ${timing.fast} ease-in-out`,

    [`@media (min-width: ${media.min["480"]})`]: {
      paddingBottom: "16px",
    },
  },

  title: {
    color: color.white,
    fontSize: "28px",
    fontWeight: 600,
    letterSpacing: "-0.56px",
    lineHeight: (34 / 28),
    textShadow: `0 0 130px rgba(${rgb(color.black)}, 0.5)`,

    [`@media (min-width: ${media.min["720"]})`]: {
      fontSize: "calc(11px + 3vw)",
      paddingBottom: "32px",
    },

    [`@media (min-width: ${media.min["1200"]})`]: {
      fontSize: "56px",
    },
  },

  titleLink: {
    color: "inherit",
    textDecoration: "none",
  },

  smallFormat: {
    base: {
      bottom: "56px",
      width: "90%",

      [`@media (min-width: ${media.min["720"]})`]: {
        width: "70%",
      },
    },

    title: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: (36 / 24),
      paddingBottom: 0,

      [`@media (min-width: ${media.min["480"]})`]: {
        fontSize: "calc(20px + 1vw)",
        lineHeight: 1.2,
      },

      [`@media (min-width: ${media.min["1200"]})`]: {
        fontSize: "32px",
        lineHeight: (40 / 32),
      },
    },
  },
};

const FeaturedCallout = ({
  category,
  title,
  titleWeight,
  showLink,
  link,
  smallFormat,
  hideLinkBreakpoint,
  width,
  style,
}) => (
  <div
    className="FeaturedCallout"
    style={[
      styles.container,
      smallFormat && styles.smallFormat.base,
      width && { width },
      style,
    ]}
  >
    {category &&
      <CategoryLabel>{category}</CategoryLabel>
    }

    <Heading
      level={1}
      weight="thick"
      override={[
        styles.title,
        smallFormat && styles.smallFormat.title,
        { fontWeight: titleWeight },
      ]}
    >
      <a href={link.href} style={styles.titleLink}>
        {title}
      </a>
    </Heading>

    {showLink && (hideLinkBreakpoint ?
      <HideAtBreakpoint breakpoint={hideLinkBreakpoint}>
        <CalloutLink href={link.href}>
          {link.text}
        </CalloutLink>
      </HideAtBreakpoint> :
      <CalloutLink href={link.href}>
        {link.text}
      </CalloutLink>
    )}
  </div>
);

FeaturedCallout.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  titleWeight: PropTypes.number,
  showLink: PropTypes.bool,
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
  smallFormat: PropTypes.bool,
  width: PropTypes.string,
  hideLinkBreakpoint: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object]),
};

FeaturedCallout.defaultProps = {
  showLink: true,
  titleWeight: 600,
  smallFormat: false,
  style: null,
};

export default radium(FeaturedCallout);
