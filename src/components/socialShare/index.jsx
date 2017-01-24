import React, { PropTypes } from "react";
import Heading from "../heading";
import SocialIconButton from "../socialIconButton";

const styles = {
  container: {
    marginTop: "22px",
  },

  button: {
    marginLeft: "16px",
  },
};

const SocialShare = ({ networks, onClick, headingText }) => (
  <div className="SocialShare" role="complementary">
    {headingText &&
      <Heading size="tiny" weight="thick" level={5} caps>
        {headingText}
      </Heading>
    }

    <div style={headingText ? styles.container : {}}>
      {Object.keys(networks).map((network, index) => (
        <SocialIconButton
          network={networks[network].name}
          href={networks[network].href}
          aria-label={networks[network].label}
          onClick={onClick}
          key={index}
          style={index !== 0 ? styles.button : {}}
        />
      ))}
    </div>
  </div>
);

SocialShare.propTypes = {
  networks: PropTypes.objectOf(PropTypes.object),
  onClick: PropTypes.func,
  headingText: PropTypes.string,
};

SocialShare.defaultProps = {
  networks: null,
  onClick: null,
  headingText: null,
};

export default SocialShare;
