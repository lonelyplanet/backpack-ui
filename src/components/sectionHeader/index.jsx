import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import Measure from "react-measure";
import { Heading } from "../text";
import colors from "../../styles/colors";
import { fontSizeHeading2 } from "../../styles/typography";
import propTypes from "../../utils/propTypes";

const styles = {
  heading: {
    textAlign: "center",
  },

  divider: {
    display: "block",
    height: "2px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: `${16 / fontSizeHeading2}em`,
    width: `${32 / fontSizeHeading2}em`,
  },

  theme: {
    default: {
      divider: {
        backgroundColor: colors.accentRed,
      },
    },

    light: {
      divider: {
        backgroundColor: "currentColor",
      },

      heading: {
        color: colors.textOverlay,
      },
    },
  },
};

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: -1,
      },
    };
  }

  render() {
    const { width } = this.state.dimensions;
    const { children, theme, style } = this.props;

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({
            dimensions: contentRect.bounds,
          });
        }}
      >
        {({ measureRef }) => (
          <Heading
            className="SectionHeader"
            innerRef={measureRef}
            weight="regular"
            level={2}
            size={width < 600 ? 4 : 2}
            style={[
              styles.heading,
              styles.theme[theme].heading,
              style,
            ]}
          >
            {children}

            <span
              style={[
                styles.divider,
                styles.theme[theme].divider,
              ]}
            />
          </Heading>
        )}
      </Measure>
    );
  }
}

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([
    "default",
    "light",
  ]),
  style: propTypes.style,
};

SectionHeader.defaultProps = {
  theme: "default",
};

export default radium(SectionHeader);
