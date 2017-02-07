import React, { PropTypes } from "react";
import radium, { Style } from "radium";
import { rgba } from "../../utils/color";
import { color, timing, zIndex } from "../../../settings.json";

const cardHoverStyles = {
  boxShadow: `0 28px 81px -7px ${rgba(color.black, 0.44)}`,
  transform: "perspective(1px) scale(1.03)",
  zIndex: (zIndex.top - 1),
};

const tileHoverStyles = {
  ".Card-image": {
    transform: "translateY(-2px)",
  },

  ".Heading": {
    color: `${color.blue} !important`,
  },
};

const styles = {
  base: {
    maxWidth: "412px",
    position: "relative",
  },

  card: {
    boxShadow: `0 12px 34px 0 ${rgba(color.black, 0.11)}`,
    transition: `box-shadow ${timing.default} ease-in-out,
      transform ${timing.default} ease-in-out`,

    ":hover": cardHoverStyles,
    ":active": cardHoverStyles,
    ":focus": cardHoverStyles,
  },
};

const Card = ({
  children,
  layout,
  className,
  style,
}) => (
  <div
    className={className}
    style={[
      styles.base,
      layout !== "tile" && styles.card,
      style,
    ]}
  >
    {layout === "tile" &&
      <Style
        scopeSelector={`.${className}:hover`}
        rules={tileHoverStyles}
      />
    }

    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(["tile", "card"]),
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Card.defaultProps = {
  layout: "card",
  className: "Card",
};

export default radium(Card);
