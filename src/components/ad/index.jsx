import React from "react";
import PropTypes from "prop-types";
import radium, { Style } from "radium";
import cn from "classnames";

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
      backgroundColor: colors.borderPrimary,
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

function Ad({ id, framed, className, style }) {
  const AdUnit = (
    <div
      className={cn("Ad", className)}
      id={id}
      style={[
        styles.ad.default,
        framed && styles.ad.framed,
        style && style,
      ]}
    />
  );

  if (framed) {
    return (
      <article className="Ad-wrap clearfix">
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
      </article>
    );
  }

  return AdUnit;
}

Ad.propTypes = {
  id: PropTypes.string.isRequired,
  framed: PropTypes.bool,
  className: PropTypes.string,
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
