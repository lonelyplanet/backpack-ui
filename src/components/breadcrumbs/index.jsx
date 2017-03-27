import React from "react";
import radium from "radium";
import capitalize from "lodash/capitalize";
import colors from "../../styles/colors";
import { fontSizeBodySmall, fontWeightBook } from "../../styles/typography";
import Icon from "../icon";
import { blueLink } from "../../utils/mixins";
import schema from "../../utils/schema";
import font from "../../utils/font";
import { rgba } from "../../utils/color";

const _ = { capitalize };

const styles = {
  container: {
    base: {
      color: rgba(colors.textPrimary, 0.56),
      fontFamily: font("benton"),
      fontSize: `${fontSizeBodySmall}px`,
      fontWeight: fontWeightBook,
      lineHeight: 1,
    },
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

function Breadcrumbs({ links }) {
  const items = links.map((link, index) => (
    <span
      className="Breadcrumbs-item"
      style={[index !== links.length - 1 && styles.item.padded]}
      key={index}
      {...itemMicroData}
    >
      <a
        style={[
          styles.anchor.base,
          index < links.length - 1 && styles.anchor.padded,
        ]}
        href={`//www.lonelyplanet.com${link.href}`}
        key={index}
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
      style={styles.container.base}
      {...listMicroData}
    >
      {items}
    </nav>
  );
}

Breadcrumbs.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      href: React.PropTypes.string,
      type: React.PropTypes.string,
    }),
  ).isRequired,
};

Breadcrumbs.styles = styles;

export default radium(Breadcrumbs);
