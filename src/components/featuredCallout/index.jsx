import React from "react";
import PropTypes from "prop-types";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import timing from "../../styles/timing";
import zIndex from "../../styles/zIndex";
import { rgb } from "../../utils/color";
import font from "../../utils/font";
import createQAHook from "../../utils/createQAHook";
import CalloutLink from "../calloutLink";
import CategoryLabel from "../categoryLabel";
import Heading from "../heading";
import HideAtBreakpoint from "../hideAtBreakpoint";

const styles = {
  container: {
    color: colors.bgPrimary,
    fontFamily: font("benton"),
    position: "relative",
    width: "70%",
    zIndex: zIndex.slideshowSlide,

    [`@media (min-width: ${mq.min[720]})`]: {
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

    [`@media (min-width: ${mq.min[480]})`]: {
      paddingBottom: "16px",
    },
  },

  title: {
    color: colors.bgPrimary,
    fontSize: "28px",
    fontWeight: 600,
    letterSpacing: "-0.75px",
    lineHeight: (34 / 28),
    marginTop: "5px",
    textShadow: `0 0 130px rgba(${rgb(colors.shadowPrimary)}, 0.5)`,

    [`@media (min-width: ${mq.min[720]})`]: {
      fontSize: "calc(11px + 3vw)",
      marginBottom: "42px",
    },

    [`@media (min-width: ${mq.min[1200]})`]: {
      fontSize: "56px",
      lineHeight: (64 / 56),
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

      [`@media (min-width: ${mq.min[720]})`]: {
        width: "70%",
      },
    },

    title: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: (36 / 24),
      paddingBottom: 0,

      [`@media (min-width: ${mq.min[480]})`]: {
        fontSize: "calc(20px + 1vw)",
        lineHeight: 1.2,
      },

      [`@media (min-width: ${mq.min[1200]})`]: {
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
  style,
}) => (
  <div
    className="FeaturedCallout"
    style={[
      styles.container,
      smallFormat && styles.smallFormat.base,
      style,
    ]}
  >
    {category &&
      <CategoryLabel style={{ color: colors.bgPrimary }}>{category}</CategoryLabel>
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
      <a href={link.href} data-qa={createQAHook(title, "feature-callout", "link")} style={styles.titleLink}>
        {title}
      </a>
    </Heading>

    {showLink && (hideLinkBreakpoint ?
      <HideAtBreakpoint breakpoint={hideLinkBreakpoint}>
        <CalloutLink href={link.href} overlay>
          {link.text}
        </CalloutLink>
      </HideAtBreakpoint> :
      <CalloutLink href={link.href} overlay>
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
