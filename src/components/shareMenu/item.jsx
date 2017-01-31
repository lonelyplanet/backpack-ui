import React from "react";
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
  network: React.PropTypes.oneOf([
    "twitter",
    "facebook",
    "email",
  ]).isRequired,
  href: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

ShareMenuItem.defaultProps = {
  onClick: null,
};

export default radium(ShareMenuItem);
