import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import radium from "radium";
import font from "../../utils/font";
import propTypes from "../../utils/propTypes";
import Icon from "../icon";

const styles = {
  container: {
    display: "flex",
    fontFamily: font("miller"),
    fontSize: "18px",
    fontStyle: "italic",
  },

  icon: {
    fontSize: `${24 / 18}em`,
    marginRight: `${4 / 18}em`,
  },
};

const ReviewedBadge = ({ className, style, qaHook }) => (
  <div
    className={cn("ReviewedBadge", className)}
    style={[styles.container, style]}
    title="Lonely Planet reviewed"
    data-qa={qaHook ? "reviewed-badge-div" : null}
  >
    <Icon.DiamondLogo
      label="Lonely Planet"
      style={styles.icon}
    />
    Reviewed
  </div>
);

ReviewedBadge.propTypes = {
  className: PropTypes.string,
  style: propTypes.style,
  qaHook: PropTypes.bool,
};

ReviewedBadge.defaultProps = {
  qaHook: false,
};

export default radium(ReviewedBadge);
