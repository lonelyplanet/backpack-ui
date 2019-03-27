import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import colors from "../../styles/colors";
import CategoryLabelLink from "../categoryLabelLink";
import Menu from "./menu";
import propTypes from "../../utils/propTypes";
import { Heading } from "../text";

const styles = {
  container: {
    maxWidth: "100%",
    minWidth: 0,
    position: "relative",
    backgroundColor: colors.borderPrimary,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "10px",
  },

  border: {
    backgroundColor: `${colors.borderPrimary}`,
    width: "80%",
    margin: "10px auto 2px",
  },

  menu: {
    right: "8px",
    bottom: "8px",
    position: "absolute",
  },
};

const imageSizes = {
  portrait: {
    width: "192px",
    height: "288px",
  },
  landscape: {
    width: "361px",
    height: "288px",
  },
};

const CardBook = ({
  imageSrc,
  aspectRatio,
  title,
  subtitle,
  shopLinkText,
  shopLinkUrl,
  style,
  hideBorder,
  ...menuProps
}) => (
  <div style={[{ width: `${imageSizes[aspectRatio].width}` }, style]}>
    <div
      style={[
        styles.container,
        { backgroundImage: `url(${imageSrc})`,
          height: `${imageSizes[aspectRatio].height}` },
      ]}
    >
      <div style={styles.menu}>
        <Menu {...menuProps} />
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <Heading
        size={6}
        level={2}
      >
        {title}
      </Heading>
      {subtitle &&
        <Heading
          size={8}
          level={2}
          style={{ color: colors.textSecondary }}
        >
          {subtitle}
        </Heading>
      }
      {!hideBorder && <hr style={styles.border} />}
      {shopLinkUrl && shopLinkText &&
        <CategoryLabelLink href={shopLinkUrl}>
          {shopLinkText}
        </CategoryLabelLink>
      }
    </div>
  </div>
);

CardBook.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  shopLinkUrl: PropTypes.string,
  shopLinkText: PropTypes.string,
  aspectRatio: PropTypes.oneOf([
    "portrait",
    "landscape",
  ]),
  hideShareButton: PropTypes.bool,
  hideBorder: PropTypes.bool,
  style: propTypes.style,
};

CardBook.defaultProps = {
  aspectRatio: "portrait",
  hideShareButton: false,
  hideBorder: false,
};

export default radium(CardBook);
