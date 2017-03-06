import React from "react";
import Heading from "../heading";
import Button from "../button";
import { ClockOutline } from "../icon";
import { color } from "../../../settings.json";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: color.detailHeaderSmall,
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
    color: color.articlesBlurb,
    marginBottom: "72px",
  },
};


const EmptyVideoList = () => (
  <div style={styles.container}>
    <div style={styles.icon}>
      <ClockOutline />
    </div>
    <div style={styles.content}>
      <Heading
        level={3}
        size="medium"
        weight="thick"
        override={styles.headline}
      >
        Add Some Videos
      </Heading>
      <p style={styles.text}>Find interesting videos and save them to your Watch List.</p>
      <Button rounded>Browse Channels</Button>
    </div>
  </div>
);

export default EmptyVideoList;
