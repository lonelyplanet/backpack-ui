import React from "react";
import styles from "./styles.json";
import {
  textSuper,
  textHeading1,
  textHeading2,
  textHeading3,
  textHeading4,
  textHeading5,
  textHeading6,
  textBodyArticle,
  textBodySmall,
  textAccent,
  textUppercase,
} from "../src/utils/typography";

function Typography() {
  return (
    <div style={styles.main}>
      <h1>Typography</h1>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Super</small></div>
        <div style={textSuper()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 1</small></div>
        <div style={textHeading1()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 2</small></div>
        <div style={textHeading2()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 3</small></div>
        <div style={textHeading3()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 4</small></div>
        <div style={textHeading4()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 5</small></div>
        <div style={textHeading5()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 6</small></div>
        <div style={textHeading6()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Body article</small></div>
        <div style={textBodyArticle()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit
          enim ut metus feugiat, vitae pharetra massa aliquet.
        </div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Body small</small></div>
        <div style={textBodySmall()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit
          enim ut metus feugiat, vitae pharetra massa aliquet.
        </div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Accent</small></div>
        <div style={textAccent()}>
          Lorem ipsum dolor sit amet
        </div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Uppercase</small></div>
        <div style={textUppercase()}>
          Sectional navigation
        </div>
      </div>

      <br /><br />
    </div>
  );
}

export default Typography;
