import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import { fontSizeHeading4, fontSizeHeading5 } from "../../styles/typography";
import { outline } from "../../utils/mixins";
import colors from "../../styles/colors";
import timing from "../../styles/timing";
import Icon from "../icon";

const styles = {
  alignItems: "center",
  backgroundColor: colors.bgPrimary,
  border: 0,
  borderRadius: "50%",
  boxShadow: `rgba(0, 0, 0, 0.1) 0 ${5 / fontSizeHeading5}em ${5 / fontSizeHeading5}em`,
  color: colors.textSecondary,
  cursor: "pointer",
  display: "inline-flex",
  fontSize: `${fontSizeHeading5}px`,
  height: `${(54 / fontSizeHeading5)}em`,
  justifyContent: "center",
  lineHeight: 1,
  padding: 0,
  transition: `color ${timing.default}`,
  width: `${(54 / fontSizeHeading5)}em`,

  ":focus": outline(),
};

const iconProps = {
  label: "Bookmark",
  style: {
    color: colors.textPrimary,
    display: "block",
  },
};

const ListButton = ({
  onClick,
  size,
  marked,
  icon,
  markedIcon,
  style,
}) => {
  const IconType = Icon[marked ? markedIcon : icon];

  return (
    <button
      className="ListButton"
      style={[
        styles,
        size === "large" && { fontSize: `${fontSizeHeading4}px` },
        style,
      ]}
      onClick={onClick}
    >
      <IconType {...iconProps} />
    </button>
  );
};

ListButton.propTypes = {
  onClick: PropTypes.func.isRequireed,
  size: PropTypes.oneOf(["", "large"]),
  marked: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(Icon)).isRequired,
  markedIcon: PropTypes.oneOf(Object.keys(Icon)),
  style: PropTypes.objectOf(PropTypes.object),
};

ListButton.defaultProps = {
  icon: "BookmarkOutline",
};

export default radium(ListButton);
