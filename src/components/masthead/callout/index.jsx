import React, { PropTypes } from "react";
import radium from "radium";
import Heading from "../../../components/heading";
import { color, media } from "../../../../settings.json";
import Button from "../../../components/button";

const styles = {
  container: {
    base: {
      position: "relative",
      maxWidth: "100%",
      marginTop: "-15rem",
    },
    centered: {
      textAlign: "center",
    },
  },
  link: {
    color: color.white,
    cursor: "pointer",
  },
  subheading: {
    fontSize: "14px",
    textTransform: "uppercase",
  },
  category: {
    fontSize: 11,
    cursor: "pointer",
  },
  heading: {
    color: color.white,
    fontSize: "64px",
    letterSpacing: "0",
    [`@media (min-width: ${media.min["600"]})`]: {
      letterSpacing: "-0.56px",
      fontSize: "calc(34px + 3vw)",
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

const Callout = ({ type, headline, callToAction, centered }) => (
  <div style={[styles.container.base, centered && styles.container.centered]} >
    <a href={callToAction.link} style={[styles.link, styles.subheading]} dangerouslySetInnerHTML={{ __html: type }}>
    </a>
    <Heading
      level={1}
      size="huge"
      weight="thick"
      override={styles.heading}
    >
      <a href={callToAction.link} style={styles.link} >{headline}</a>
    </Heading>
    <div style={styles.callout}>
      <Button rounded href={callToAction.link} >
        {callToAction.text}
      </Button>
    </div>
  </div>
);

Callout.propTypes = {
  type: PropTypes.string,
  headline: PropTypes.string,
  callToAction: PropTypes.object,
  centered: PropTypes.bool,
};


export default radium(Callout);
