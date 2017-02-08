import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "backpack-ui/dist/components/heading";
import { color, media } from "backpack-ui/settings.json";
import CalloutLink from "../CalloutLink";
import CategoryLabel from "../CategoryLabel";

const styles = {
  container: {
    width: "80%",
    [`@media (min-width: ${media.min["600"]})`]: {
      width: "65%",
    },
  },
  link: {
    color: color.white,
    cursor: "pointer",
  },
  category: {
    fontSize: 11,
    cursor: "pointer",
  },
  heading: {
    color: color.white,
    fontSize: "32px",
    letterSpacing: "0",
    [`@media (min-width: ${media.min["600"]})`]: {
      letterSpacing: "-0.56px",
      fontSize: "calc(11px + 3vw)",
    },
    [`@media (min-width: ${media.min["1430"]})`]: {
      fontSize: "64px",
    },
  },
  callout: {
    marginTop: "2.4rem",
    cursor: "pointer",
    [`@media (min-width: ${media.min["600"]})`]: {
      marginTop: "4.2rem",
    },
  },
  icon: {
    marginLeft: ".5em",
    position: "relative",
    top: `${-2 / 13}em`,
    verticalAlign: "baseline",
  },
};

const MastheadCallout = ({ type, headline, callToAction }) => (
  <div style={styles.container} >
    <a href={callToAction.link} style={styles.link}>
      <CategoryLabel text={type} />
    </a>
    <Heading
      level={1}
      size="huge"
      weight="thick"
      override={styles.heading}
    >
      <a href={callToAction.link} style={styles.link} >{headline}</a>
    </Heading>
    <CalloutLink text={callToAction.text} href={callToAction.link} style={styles.callout} />

  </div>
);

MastheadCallout.propTypes = {
  type: PropTypes.string,
  headline: PropTypes.string,
  callToAction: PropTypes.object,
};


export default radium(MastheadCallout);
