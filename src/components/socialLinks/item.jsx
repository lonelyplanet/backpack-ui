import React from "react";
import radium from "radium";
import upperFirst from "lodash/upperFirst";
import styles from "./styles";
import Icon from "../icon";

const _ = { upperFirst };

function ShareMenuItem({ network, href, label, onClick }) {
  const NetworkIcon = React.createElement(Icon[_.upperFirst(network)], {
    height: "16px",
    width: "16px",
  });

  // const style = {
  //   base: [styles.item.base],
  //   options: [styles.options.base],
  // };
  const style = [
    styles.item.base,
    network && styles.item.base[network]
  ]

  return (
    <a
      className="SocialLink-item"
      style={style}
      data-network={network}
      onClick={onClick}
      href={href}
    >
      {NetworkIcon}
    </a>
  );
}

ShareMenuItem.propTypes = {
  /**
   * Slugified name of the sharable network
   */
  network: React.PropTypes.oneOf([
    "twitter",
    "facebook",
    "email",
  ]).isRequired,

  /**
   * URL of network's share method
   */
  href: React.PropTypes.string.isRequired,

  /**
   * Text label to show next to icon
   */
  label: React.PropTypes.string.isRequired,

  /**
   * Function to run when button is clicked
   */
  onClick: React.PropTypes.func,
};

ShareMenuItem.defaultProps = {
  network: "",

  href: "",

  label: "",

  onClick: null,
};

export default radium(ShareMenuItem);
