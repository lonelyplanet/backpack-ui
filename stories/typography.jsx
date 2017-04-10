import React from "react";
import styles from "./styles.json";
import {
  fontSizeSuper,
  fontSizeHeading1,
  fontSizeHeading2,
  fontSizeHeading3,
  fontSizeHeading4,
  fontSizeHeading5,
  fontSizeHeading6,
  fontSizeHeading7,
  fontSizeBodyArticle,
  fontSizeBodySmall,
  fontSizeAccent,
  fontSizeUppercase,
} from "../src/styles/typography";

import {
  textSuper,
  textHeading1,
  textHeading2,
  textHeading3,
  textHeading4,
  textHeading5,
  textHeading6,
  textHeading7,
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
        <div style={styles.smallText}><small>Super ({fontSizeSuper})</small></div>
        <div style={textSuper()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 1 ({fontSizeHeading1})</small></div>
        <div style={textHeading1()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 2 ({fontSizeHeading2})</small></div>
        <div style={textHeading2()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 3 ({fontSizeHeading3})</small></div>
        <div style={textHeading3()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 4 ({fontSizeHeading4})</small></div>
        <div style={textHeading4()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 5 ({fontSizeHeading5})</small></div>
        <div style={textHeading5()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 6 ({fontSizeHeading6})</small></div>
        <div style={textHeading6()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Heading 7 ({fontSizeHeading7})</small></div>
        <div style={textHeading7()}>Top experiences in Asia</div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Body article ({fontSizeBodyArticle})</small></div>
        <div style={textBodyArticle()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit
          enim ut metus feugiat, vitae pharetra massa aliquet.
        </div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Body small ({fontSizeBodySmall})</small></div>
        <div style={textBodySmall()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          mauris sit amet massa interdum bibendum. Ut ac ex leo. Cras blandit
          enim ut metus feugiat, vitae pharetra massa aliquet.
        </div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Accent ({fontSizeAccent})</small></div>
        <div style={textAccent()}>
          Lorem ipsum dolor sit amet
        </div>
      </div>

      <br /><br />

      <div>
        <div style={styles.smallText}><small>Uppercase ({fontSizeUppercase})</small></div>
        <div style={textUppercase()}>
          Sectional navigation
        </div>
      </div>

      <br /><br />
    </div>
  );
}

export default Typography;
