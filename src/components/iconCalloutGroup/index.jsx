import React from "react";
import radium, { Style } from "radium";

import colors from "../../styles/colors";
import dimensions from "../../styles/dimensions";
import mq from "../../styles/mq";
import { gutter } from "../../utils/grid";
import IconCallout from "../iconCallout";

const styles = {
  container: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: `${dimensions.maxWidth}px`,

    [`@media (max-width: ${mq.max[960]})`]: {
      flexWrap: "wrap",
    },
  },
};

const scopedStyles = {
  mediaQueries: {
    [`(max-width: ${mq.max[480]})`]: {
      ".IconCallout-icon": {
        fontSize: "71px !important",
      },

      ".Heading": {
        fontSize: "14px !important",
        marginTop: "13px !important",
      },

      ".IconCallout-copy": {
        display: "none !important",
      },

      ".MoreLink": {
        display: "none !important",
      },
    },

    [`(min-width: ${mq.min[480]}) and (max-width: ${mq.max[960]})`]: {
      ".IconCallout-icon": {
        fontSize: "80px !important",
      },
    },

    [`(min-width: ${mq.min[480]}) and (max-width: ${mq.max[960]})`]: {
      ".IconCallout a": {
        width: "80% !important",
      },
    },

    [`(max-width: ${mq.max[960]})`]: {
      ".IconCallout": {
        flex: "1 1 calc(100% / 2)",
        maxWidth: "none !important",
      },

      ".IconCallout:last-child": {
        marginTop: "82px !important",
      },

      ".IconCallout:nth-last-child(2)": {
        marginTop: "82px !important",
      },
    },

    [`(min-width: ${mq.min[960]})`]: {
      ".IconCallout": {
        marginLeft: `calc(${gutter("static")} / 2) !important`,
        marginRight: `calc(${gutter("static")} / 2) !important`,
      },
    },
  },

  // Ideally, the anchor styles would exist within IconCallout, but we don't
  // want to repeat the <Style> block for each IconCallout

  ".IconCallout a:hover .IconCallout-icon": {
    transform: "translateY(-5px)",
  },

  ".IconCallout a:hover .Heading": {
    color: `${colors.linkPrimary} !important`,
  },
};

function IconCalloutGroup({ children }) {
  return (
    <div className="IconCalloutGroup" style={styles.container}>
      <Style
        scopeSelector=".IconCalloutGroup"
        rules={scopedStyles}
      />

      {children}
    </div>
  );
}

IconCalloutGroup.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== IconCallout) {
        error = new Error(`${componentName} children should be of type "IconCallout".`);
      }

      if (child.type === IconCallout && React.Children.count.length > 4) {
        error = new Error(`${componentName} should have no more than 4 children.`);
      }
    });

    return error;
  },
};

export default radium(IconCalloutGroup);
