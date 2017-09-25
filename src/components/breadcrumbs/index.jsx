import React from "react";
import PropTypes from "prop-types";
import radium from "radium";
import capitalize from "lodash/capitalize";
import colors from "../../styles/colors";
import { fontSizeBodySmall, fontWeightRegular } from "../../styles/typography";
import Icon from "../icon";
import { blueLink } from "../../utils/mixins";
import schema from "../../utils/schema";
import font from "../../utils/font";
import { rgba } from "../../utils/color";
import propTypes from "../../utils/propTypes";

const _ = { capitalize };

const styles = {
  container: {
    color: rgba(colors.textPrimary, 0.56),
    fontFamily: font("benton"),
    fontSize: `${fontSizeBodySmall}px`,
    fontWeight: fontWeightRegular,
    lineHeight: 1,
  },

  item: {
    padded: {
      marginRight: `${10 / fontSizeBodySmall}em`,
    },
  },

  anchor: {
    base: blueLink(),

    padded: {
      marginRight: `${10 / fontSizeBodySmall}em`,
    },
  },
};

const listMicroData = schema({
  itemType: "BreadcrumbList",
});

const itemMicroData = schema({
  itemProp: "itemListElement",
  itemType: "ListItem",
});

function linkMicroData(link) {
  if (link && link.type) {
    return schema({
      itemProp: "item",
      itemType: _.capitalize(link.type),
    });
  }

  return schema({
    itemProp: "item",
    itemType: "Thing",
  });
}

function Breadcrumbs({ links, style }) {
  const items = links.map((link, index) => (
    <span
      className="Breadcrumbs-item"
      style={[index !== links.length - 1 && styles.item.padded]}
      key={link.href}
      {...itemMicroData}
    >
      <a
        style={[
          styles.anchor.base,
          index < links.length - 1 && styles.anchor.padded,
        ]}
        href={`//www.lonelyplanet.com${link.href}`}
        key={link.href}
        {...linkMicroData(link)}
      >
        <span itemProp="name">{link.title}</span>
      </a>

      {index < links.length - 1 &&
        <Icon.ChevronRight
          width={`${6 / fontSizeBodySmall}em`}
          height={`${6 / fontSizeBodySmall}em`}
        />
      }

      <meta itemProp="position" content={index + 1} />
    </span>
  ));

  return (
    <nav
      className="Breadcrumbs"
      style={[styles.container, style]}
      {...listMicroData}
    >
      {items}
    </nav>
  );
}

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
  style: propTypes.style,
};

export default radium(Breadcrumbs);
