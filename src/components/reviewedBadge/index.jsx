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

const ReviewedBadge = ({ className, style, qahook }) => (
  <div
    className={cn("ReviewedBadge", className)}
    style={[styles.container, style]}
    title="Lonely Planet reviewed"
    data-qa={qahook ? "reviewed-badge-div" : null}
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
  qahook: PropTypes.bool,
};

ReviewedBadge.defaultProps = {
  qahook: false,
};

export default radium(ReviewedBadge);
