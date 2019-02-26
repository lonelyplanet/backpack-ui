import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";
import createQAHook from "../../utils/createQAHook";
import colors from "../../styles/colors";
import mq from "../../styles/mq";

const styles = {
  ad: {
    default: {
      backgroundColor: colors.textPrimary,
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      textAlign: "center",
    },

    framed: {
      backgroundColor: "#f6f6f6",
      paddingBottom: "24px",
      paddingTop: "24px",

      [`@media (min-width: ${mq.min[960]})`]: {
        paddingTop: "30px",
      },
    },
  },

  label: {
    default: {
      color: colors.textSecondary,
      content: "'Advertisement'",
      display: "block",
      fontSize: "8px",
      lineHeight: 1,
      left: 0,
      letterSpacing: ".5px",
      opacity: 0.57,
      position: "absolute",
      textAlign: "center",
      textTransform: "uppercase",
      top: "10px",
      width: "100%",
    },

    desktop: {
      top: "14px",
    },
  },
};

function Ad({ id, framed, className, style, children }) {
  const AdUnit = (
    <div
      className={cn("Ad", className)}
      id={id}
      data-qa={createQAHook(id, cn("Ad", className), "ad")}
      style={[
        styles.ad.default,
        framed && styles.ad.framed,
        style && style,
      ]}
    >{children}</div>
  );

  if (framed) {
    return (
      <div className="Ad-wrap clearfix">
        <Style
          scopeSelector=".Ad-wrap"
          rules={{
            [`#${id}:before`]: styles.label.default,

            mediaQueries: {
              [`(min-width: ${mq.min[960]})`]: {
                [`#${id}:before`]: styles.label.desktop,
              },
            },
          }}
        />

        {AdUnit}
      </div>
    );
  }

  return AdUnit;
}

Ad.propTypes = {
  id: PropTypes.string.isRequired,
  framed: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Ad.defaultProps = {
  framed: false,
};

export default radium(Ad);
