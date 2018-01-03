import React from "react";
import radium from "radium";

import colors from "../../styles/colors";
import mq from "../../styles/mq";
import propTypes from "../../utils/propTypes";
import Heading from "../heading";
import Button from "../button";
import Link from "../link";
import { ClockOutline } from "../icon";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    [`@media (min-width: ${mq.min[768]})`]: {
      position: "relative",
      transform: "translateY(0)",
    },
  },
  icon: {
    color: colors.accentGray,
    marginBottom: "16px",
    fontSize: "34px",
  },
  content: {
    textAlign: "center",
  },
  headline: {
    marginBottom: "16px",
    fontSize: "18px",
  },
  text: {
    fontSize: "14px",
    color: colors.textSecondary,
    marginBottom: "72px",
  },
};


const WatchLaterEmptyList = ({ style }) => (
  <div style={[styles.container, style]} className="WatchLaterEmptyList">
    <ClockOutline style={styles.icon} />
    <div style={styles.content}>
      <Heading
        level={3}
        size="medium"
        weight="thick"
        override={styles.headline}
      >
        Add some videos
      </Heading>

      <p style={styles.text}>
        Find interesting videos and save them for later.
      </p>

      <Link to={"/video/v"}>
        <Button rounded>Browse Channels</Button>
      </Link>
    </div>
  </div>
);

WatchLaterEmptyList.propTypes = {
  style: propTypes.style,
};

export default radium(WatchLaterEmptyList);
