import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import cn from "classnames";
import { color, media } from "../../../settings.json";

const styles = {
  ad: {
    default: {
      backgroundColor: color.darkGray,
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      textAlign: "center",
      width: "100%",
    },

    framed: {
      backgroundColor: "#f6f6f6",
      paddingBottom: "24px",
      paddingTop: "24px",

      [`@media (min-width: ${media.min["960"]})`]: {
        paddingTop: "24px",
        paddingBottom: "24px",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
    },
  },

  label: {
    default: {
      color: "#586575",
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
      <div className="Ad-wrap clearfix">
        <Style
          scopeSelector=".Ad-wrap"
          rules={{
            [`#${id}:before`]: styles.label.default,

            mediaQueries: {
              [`(min-width: ${media.min["960"]})`]: {
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
