import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import {
  fontSizeHeading6,
  lineHeightHeading6,
  fontWeightRegular,
} from "../../styles/typography";
import colors from "../../styles/colors";
import media from "../../styles/mq";
import Heading from "../../components/heading";
import propTypes from "../../utils/propTypes";

const styles = {
  heading: {
    default: {
      fontSize: fontSizeHeading6,
      fontWeight: fontWeightRegular,
      display: "inline-block",
      lineHeight: lineHeightHeading6,
      marginBottom: "8px",

      [`@media (max-width: ${media.max["480"]})`]: {
        marginBottom: "0px",
      },
    },
    light: {
      color: colors.textPrimary,
    },
    dark: {
      color: colors.textOverlay,
    },
  },

  child: {
    default: {
      paddingBottom: "16px",
      paddingTop: "16px",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
    },
    light: {
      borderBottomColor: "rgb(228, 228, 228)",
    },
    dark: {
      borderBottomColor: "#474747",
    },
  },
};

const ThumbnailList = ({
  heading,
  children,
  theme,
  style,
}) => (
  <div
    className="ThumbnailList"
    style={style}
  >
    {heading &&
      <header>
        <Heading
          level={2}
          override={{
            ...styles.heading.default,
            ...styles.heading[theme],
          }}
        >
          { heading }
        </Heading>
      </header>
    }

    {React.Children.map(children, (child, index) => (
      <div
        style={[
          styles.child.default,
          styles.child[theme],
          index === children.length - 1 ? { borderBottomWidth: "0px" } : {},
        ]}
      >
        { child }
      </div>
    ))}
  </div>
);

ThumbnailList.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  theme: PropTypes.oneOf(["light", "dark"]),
  style: propTypes.style,
};

ThumbnailList.defaultProps = {
  theme: "light",
};

export default radium(ThumbnailList);
