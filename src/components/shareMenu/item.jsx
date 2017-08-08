import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import upperFirst from "lodash/upperFirst";
import styles from "./styles";
import iconFromString from "../../utils/icon";

const _ = { upperFirst };

const ShareMenuItem = ({ network, href, label, onClick }) => (
  <a
    className="ShareMenu-item"
    style={styles.item.base}
    data-network={network}
    onClick={onClick}
    href={href}
  >
    {iconFromString(_.upperFirst(network), {
      height: "16px",
      width: "16px",
    })}

    <span style={styles.item.label}>
      {label}
    </span>
  </a>
);

ShareMenuItem.propTypes = {
  network: PropTypes.oneOf([
    "twitter",
    "facebook",
    "email",
  ]).isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ShareMenuItem.defaultProps = {
  onClick: null,
};

export default radium(ShareMenuItem);
