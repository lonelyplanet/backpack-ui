import React from "react";
import { StyleRoot } from "radium";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-photoswipe/lib/photoswipe.css";
import { storiesOf, action } from "@kadira/storybook";
import { withKnobs, text, boolean, number, array, object, select, color } from "@kadira/storybook-addon-knobs";
import { color as bpColor } from "../settings.json";
import colors from "../src/styles/colors";
import data from "./data.json";
import Colors from "./Colors";
import Fonts from "./fonts";
import Typography from "./typography";
import { Accordion, AccordionItem } from "../src/components/accordion";
import Amenities from "../src/components/amenities";
import ArticleAuthor from "../src/components/articleAuthor";
import ArticlePaginationItem from "../src/components/articlePaginationItem";
import ArticlePaginationNav from "../src/components/articlePaginationNav";
import ArticlePreview from "../src/components/articlePreview";
import Author from "../src/components/author";
import AuthorName from "../src/components/authorName";
import Avatar from "../src/components/avatar";
import AvatarUpload from "../src/components/avatarUpload";
// Availability
import Bookmark from "../src/components/bookmark";
import Breadcrumbs from "../src/components/breadcrumbs";
import BulletDescription from "../src/components/bulletDescription";
import Button from "../src/components/button";
import Calendar from "../src/components/calendar";
import Callout from "../src/components/callout";
import CalloutLink from "../src/components/calloutLink";
import CardBasic from "../src/components/cardBasic";
import CardPrice from "../src/components/cardPrice";
import CardShelfVideo from "../src/components/cardShelfVideo";
import CardShelfVideoSwiper from "../src/components/cardShelfVideoSwiper";
import CardVideo from "../src/components/cardVideo";
import CategoryLabel from "../src/components/categoryLabel";
import CategoryLabelLink from "../src/components/categoryLabelLink";
import Checkbox from "../src/components/checkbox";
import Container from "../src/components/container";
// ContactBar
// ContentBlock
import ContentHeader from "../src/components/contentHeader";
// ContentSectionList
// Decoration
import DisclaimerText from "../src/components/disclaimerText";
import DotLoader from "../src/components/dotLoader";
import Dropdown from "../src/components/dropdown";
import EditLink from "../src/components/editLink";
import ErrorMessages from "../src/components/form/errorMessages";
import ExpandButton from "../src/components/expandButton";
import FeaturedArticle from "../src/components/featuredArticle";
import Flyout from "../src/components/flyout";
import GridColumn from "../src/components/gridColumn";
import GridRow from "../src/components/gridRow";
import Heading from "../src/components/heading";
import Icons from "./icons";
import Icon from "../src/components/icon";
import IconButton from "../src/components/iconButton";
import IconCallout from "../src/components/iconCallout";
import IconCalloutGroup from "../src/components/iconCalloutGroup";
import ImageCarousel from "../src/components/imageCarousel";
// ImageGallery
import ImageHero from "../src/components/imageHero";
import Input from "../src/components/form/input";
import InteractiveMap from "../src/components/interactiveMap";
import ItalicText from "../src/components/italicText";
// LastUpdated
import Lede from "../src/components/lede";
// ListItem
// ListItemBookable
// ListItemImage
import ListItemNews from "../src/components/listItemNews";
// ListItemWireframe
// Loading
// Location
import LocationLabel from "../src/components/locationLabel";
import Logo from "../src/components/logo";
import MapMarker from "../src/components/mapMarker";
import Masthead from "../src/components/masthead";
import MastheadSlider from "../src/components/mastheadSlider";
// MobileToolbar
import Modal from "../src/components/modal";
import MoreLink from "../src/components/moreLink";
import Narrative from "../src/components/narrative";
import NewsArticleAuthor from "../src/components/newsArticleAuthor";
import NewsList from "../src/components/newsList";
import Newsletter from "../src/components/newsletter";
import NoResults from "../src/components/noResults";
import NumberList from "../src/components/numberList";
import NumberMarker from "../src/components/numberMarker";
// Overlay
import PageHeader from "../src/components/pageHeader";
import PaginatorButton from "../src/components/paginatorButton";
import PhotoGallery from "../src/components/photoGallery";
import Placeholder from "../src/components/placeholder";
import PoiPaginator from "../src/components/poiPaginator";
// Price
import PromotedGuidebook from "../src/components/promotedGuidebook";
import ProviderLogo from "../src/components/providerLogo";
import Rating from "../src/components/rating";
import RecommendedArticles from "../src/components/recommendedArticles";
import RelatedTour from "../src/components/relatedTour";
import ReviewedBadge from "../src/components/reviewedBadge";
import ScrollIndicator from "../src/components/scrollIndicator";
import SectionalNav from "../src/components/sectionalNav";
import SectionHeader from "../src/components/sectionHeader";
import Select from "../src/components/form/select";
import SettingBlock, {
    SettingSection,
    SettingBlockButton,
    SettingBlockAccordion,
    ToggleController,
  } from "../src/components/settingBlock";

import ShareMenu from "../src/components/shareMenu";
import Slide from "../src/components/slide";
import SocialIconButton from "../src/components/socialIconButton";
import SocialLoginButton from "../src/components/socialLoginButton";
import SocialShare from "../src/components/socialShare";
import SocialShareContainer from "../src/components/socialShareContainer";

// SidebarSection
import SightsListItem from "../src/components/sightsListItem";
import SponsorLabel from "../src/components/sponsorLabel";
import SpotlightZone from "../src/components/spotlightZone";
import StaticMap from "../src/components/staticMap";
import Strapline from "../src/components/strapline";
import TabbedNav from "../src/components/tabbedNav";
import Tag from "../src/components/tag";
import TagList from "../src/components/tagList";
// Takeover
import TallCarousel from "../src/components/tallCarousel";
<<<<<<< HEAD
import { TextAccent, TextBodyArticle, TextBodySmall, TextHeading, TextSuper, TextUppercase } from "../src/components/text";
=======
import TextArea from "../src/components/form/textarea";
import { TextAccent, TextBodyArticle, TextBodySmall, TextHeading, TextUppercase } from "../src/components/text";
>>>>>>> feat: add base for user settings component
import TextBubble from "../src/components/textBubble";
import ThumbnailListItem from "../src/components/thumbnailListItem";
import TileGrid from "../src/components/tileGrid";
import TileVideo from "../src/components/tileVideo";
import TileVideoPoster from "../src/components/tileVideoPoster";
import Timestamp from "../src/components/timestamp";
import Toast from "../src/components/toast";
import Tooltip from "../src/components/tooltip";
import TourItinerary from "../src/components/tourItinerary";
import TravelAlert from "../src/components/travelAlert";
import TypeSelector from "../src/components/typeSelector";
import UserProfileHeader from "../src/components/userProfileHeader";
import WatchLaterModal from "../src/components/watchLater/watchLaterModal";
import VideoEmbed from "../src/components/videoEmbed";

storiesOf("Styles", module)
  .addDecorator(withKnobs)
  .add("Colors", () => (
    <Colors />
  ))
  .add("Fonts", () => (
    <Fonts />
  ))
  .add("Typography", () => (
    <Typography />
  ));

storiesOf("Iconography", module)
  .addDecorator(withKnobs)
  .add("Icons", () => (
    <Icons />
  ));

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <Accordion id="storyAccordion">
        <AccordionItem
          heading="Things to do in Asia"
          content={
            <TileGrid>
              <TileVideo
                className="Tile"
                heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
                bullets={array("Bullets", ["On The Road", "E.01"])}
                runtime={number("Video runtime", 129365)}
                onClick={action("Watch this video later")}
                imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
                href={text("URL", "#")}
              />

              <TileVideo
                className="Tile"
                heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
                bullets={array("Bullets", ["On The Road", "E.01"])}
                runtime={number("Video runtime", 129365)}
                onClick={action("Watch this video later")}
                imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/GettyImages-509196834_high-ba0228a2190f.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
                href={text("URL", "#")}
              />

              <TileVideo
                className="Tile"
                heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
                bullets={array("Bullets", ["On The Road", "E.01"])}
                runtime={number("Video runtime", 129365)}
                onClick={action("Watch this video later")}
                imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/LPT0414_063-2225e4dcf106.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
                href={text("URL", "#")}
              />
            </TileGrid>
          }
          expanded
        />

        <AccordionItem
          heading="Places to eat in Tokyo"
          content={
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          }
        />

        <AccordionItem
          heading="Adventures in Bombay"
          content={
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          }
        />
      </Accordion>
    </StyleRoot>
  ));

storiesOf("Amenities", module)
  .addDecorator(withKnobs)
  .add("2-column, single list", () => (
    <Amenities
      columns={number("Columns", 2)}
      listType="single"
      items={data.amenities.singleList}
    />
  ))
  .add("3-column, grouped list", () => (
    <Amenities
      columns={number("Columns", 3)}
      listType="grouped"
      items={data.amenities.groupedList}
    />
  ));

storiesOf("Article author", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ArticleAuthor
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      avatarSrc={text("Avatar image URL", data.avatar.default)}
      orientation={select("Orientation", {
        vertical: "Vertical",
        horizontal: "Horizontal",
      }, "vertical")}
    />
  ));

storiesOf("Article pagination item", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <ArticlePaginationItem
        title={text("Title", "Ireland is set to have the world’s largest redwood forest outside of California")}
        image={text("Image URL", "https://s3.amazonaws.com/static-asset/backpack-ui/article-image.jpg")}
        imageAlt={text("Image alternate text", "Redwood forest in Ireland")}
        href={text("URL", "/")}
        category={text("Category name", "Wildlife and nature")}
        page={select("Page", {
          previous: "Previous",
          next: "Next",
        }, "previous")}
        style={{ maxWidth: "50%" }}
      />
    </StyleRoot>
  ));

storiesOf("Article pagination nav", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <ArticlePaginationNav
        previousArticle={object("Previous article", {
          title: "Ireland is set to have the world’s largest redwood forest outside of California",
          image: "https://s3.amazonaws.com/static-asset/backpack-ui/article-image.jpg",
          imageAlt: "Redwood forest in Ireland",
          href: "/",
          category: "Wildlife and nature",
        })}
        nextArticle={object("Next article", {
          title: "See the gorgeous street art along Glasgow’s city centre mural center",
          image: "https://s3.amazonaws.com/static-asset/backpack-ui/article-image-alt.jpg",
          imageAlt: "Street art on the side of a building",
          href: "/",
          category: "Art and culture",
        })}
      />
    </StyleRoot>
  ));

storiesOf("Article preview", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ArticlePreview
      title={text("Title", "New York’s most iconic buildings reimagined on deserted streets")}
      paragraph={text("Paragraph", "A new exhibition in New York of the city’s most iconic buildings shows them in a new light, with the bustle of modern life stripped out. Photographer")}
      image={text("Image URL", "http://placehold.it/410x230")}
      href={text("URL", "/")}
      category={text("Category name", "Art and culture")}
      categoryHref={text("Category URL", "/")}
    />
  ));

storiesOf("Author", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Author
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      alignment={select("Alignment", ["left", "center", "right"], "left")}
    />
  ));

storiesOf("Author name", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <AuthorName>
      {text("Name", "Alex Butler")}
    </AuthorName>
  ));

storiesOf("Avatar", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Avatar
      src={text("Image source", data.avatar.rizzo)}
      alt={text("Alternate text", "Rizzo")}
      size={select("Size", [25, 40, 70], 70)}
      href={text("URL", "")}
    />
  ));

storiesOf("Avatar upload", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <AvatarUpload
      src={text("Image source", data.avatar.rizzo)}
    />
  ));

storiesOf("Bookmark", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Bookmark
      onClick={action("Bookmark clicked")}
      size={select("Size", ["", "large"], "")}
      marked={boolean("Marked", false)}
    />
  ));

storiesOf("Breadcrumbs", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Breadcrumbs
      links={data.breadcrumbs.links}
    />
  ));

storiesOf("Bullet Description", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <BulletDescription
      description={["Item 1", "Item 2"]}
    />
  ));

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Primary", () => (
    <Button
      color={select("Color", ["blue", "white", "transparent"], "blue")}
      size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
      disabled={boolean("Disabled", false)}
      full={boolean("Full width", false)}
      rounded={boolean("Rounded", false)}
      onClick={action("clicked")}
    >
      {text("Text", "Hello Button")}
    </Button>
  ))
  .add("Secondary", () => (
    <Button
      color="white"
      size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
      border={boolean("Border", true)}
      disabled={boolean("Disabled", false)}
      full={boolean("Full width", false)}
      rounded={boolean("Rounded", false)}
      onClick={action("clicked")}
    >
      {text("Text", "Hello Button")}
    </Button>
  ));

storiesOf("Calendar", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Calendar />
  ));

storiesOf("Callout", module)
  .addDecorator(withKnobs)
  .add("Book", () => (
    <StyleRoot>
      <Callout
        type="book"
        align="center"
        heading="Lonely Planet’s Best in Travel 2016"
        slug="/"
        price={{
          currency: "USD",
          amount: 21.99,
        }}
        description={`Be an in-the-know traveler this year with Lonely
          Planet’s collection of the hottest trends, destinations,
          journeys.`}
        image="http://dummyimage.com/132x168/4d494d/686a82.gif"
      />
    </StyleRoot>
  ))
  .add("Activity", () => (
    <StyleRoot>
      <Callout
        type="activity"
        heading="Cycle Linz to Vienna"
        slug="/"
        price={{
          currency: "USD",
          amount: 50,
        }}
        image="http://dummyimage.com/300x158/4d494d/686a82.gif"
        category="Food and drink"
      />
    </StyleRoot>
  ));

storiesOf("Callout link", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <CalloutLink href="/">
      {text("Text", "More recommendations")}
    </CalloutLink>
  ))
  .add("Overlay", () => (
    <div style={{ backgroundColor: "#000", padding: "20px" }}>
      <CalloutLink href="/" overlay>
        {text("Text", "More recommendations")}
      </CalloutLink>
    </div>
  ));

storiesOf("Cards", module)
  .addDecorator(withKnobs)
  .add("Basic card", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <CardBasic
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["Card things", "More Card Things"])}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          href={text("URL", "#")}
        />
      </div>
    </StyleRoot>
  ))
  .add("Video card", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <CardVideo
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          href={text("URL", "#")}
        />
      </div>
    </StyleRoot>
  ))
  .add("Price card", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <CardPrice
          heading={text("Heading", "End of the Earth")}
          bullets={array("Bullets", ["15 Days", "Buenos Aires to Buenos Aires"])}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          href={text("URL", "#")}
          price={{
            regular: 3999,
            sale: 3399,
          }}
        />
      </div>
    </StyleRoot>
  ));

storiesOf("Category label", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <CategoryLabel
      light={boolean("Light", false)}
    >
      {text("Text", "Art and culture")}
    </CategoryLabel>
  ));

storiesOf("Category label link", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <CategoryLabelLink href={text("URL", "/")}>
      {text("Text", "Art and culture")}
    </CategoryLabelLink>
  ));

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Checkbox
      value={text("Value", "Some value")}
      id={text("ID", "check")}
      name={text("Name", "check")}
      label={text("Label", "Checkbox")}
      checked={boolean("Checked", true)}
      rounded={boolean("Rounded", false)}
      size={select("Size", [16, 24, 32], 16)}
      onClick={action(event)}
    />
  ));

storiesOf("Content Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ContentHeader
      title="Title"
      border="bottom"
    />
    ));

storiesOf("Disclaimer text", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <DisclaimerText>
      {text("Text", `To use Lonely Planet you must have cookies enabled. If you
        sign up with Twitter or Facebook, we’ll start you off with a network by
        automatically importing profile imformation. Also, we’ll never post to
        Twitter or Facebook without your permission. For more info, please see
        <a href="/">FAQ</a>.`
      )}
    </DisclaimerText>
  ));

storiesOf("Dot loader", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <DotLoader inline={boolean("Inline", false)} />
    </StyleRoot>
  ));

storiesOf("Dropdown", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Dropdown
      options={array("Options", ["AUD", "EUR", "GBP", "USD"])}
      defaultValue={text("Default value", "USD")}
      onChange={action(event)}
    />
  ));

storiesOf("Edit link", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <EditLink url={text("URL", "/")} />
  ));

storiesOf("Expand button", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ExpandButton label={text("Label", "Open")} />
  ));


storiesOf("Form", module)
  .addDecorator(withKnobs)
  .add("Input", () => (
    <Input
      placeholder={text("Placeholder", "johndoe@gmail.com")}
      error={boolean("Has Error", false)}
      theme={select("Input Theme", ["base", "light", "dark", "float", "inputGroup"], "base")}
    />
  ))
  .add("ErrorMessages", () => (
    <ErrorMessages
      messages={array("List of Errors", ["This field is required"])}
    />
  ));

storiesOf("Featured article", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <FeaturedArticle
        article={{
          sectionHeading: "Tips and articles",
          category: "Featured story",
          image: "https://lonelyplanetimages.imgix.net/mastheads/48119366.jpg?sharp=10&vib=20&w=2000",
          title: "Station to station: The best train journeys you’ve never heard of",
          link: {
            text: "Read article",
            href: "/link/to/article",
          },
        }}
      />
    </StyleRoot>
  ))
  .add("Constrained", () => (
    <StyleRoot>
      <FeaturedArticle
        constrained
        article={{
          category: "Featured story",
          image: "https://lonelyplanetimages.imgix.net/mastheads/48119366.jpg?sharp=10&vib=20&w=2000",
          title: "Station to station: The best train journeys you’ve never heard of",
          link: {
            text: "Read article",
            href: "/link/to/article",
          },
        }}
      />
    </StyleRoot>
  ));

storiesOf("Flyout", module)
  .addDecorator(withKnobs)
  .add("Small", () => (
    <Flyout
      children={text("Text", "I believe I can fly…")}
      size={select("Size", ["small", "medium"], "small")}
      shadow={select("Shadow", ["small", "large"], "small")}
      arrow={select("Arrow direction", ["up", "down", "left", "right"], "down")}
      removePadding={boolean("Remove padding", false)}
      fill={boolean("Fill", false)}
    />
  ));

storiesOf("Grid", module)
  .addDecorator(withKnobs)
  .add("12 column", () => (
    <StyleRoot>
      <Container>
        <GridRow>
          <GridColumn sm={1} style={{ backgroundColor: "#eee" }}>sm=1</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={2} style={{ backgroundColor: "#eee" }}>sm=2</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={3} style={{ backgroundColor: "#eee" }}>sm=3</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={4} style={{ backgroundColor: "#eee" }}>sm=4</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={5} style={{ backgroundColor: "#eee" }}>sm=5</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={6} style={{ backgroundColor: "#eee" }}>sm=6</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={7} style={{ backgroundColor: "#eee" }}>sm=7</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={8} style={{ backgroundColor: "#eee" }}>sm=8</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={9} style={{ backgroundColor: "#eee" }}>sm=9</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={10} style={{ backgroundColor: "#eee" }}>sm=10</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={11} style={{ backgroundColor: "#eee" }}>sm=11</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={12} style={{ backgroundColor: "#eee" }}>sm=12</GridColumn>
        </GridRow>
      </Container>
      <br /><br />
      <Container style={{ textAlign: "right" }}>
        <GridRow>
          <GridColumn sm={1} smShift={11} style={{ backgroundColor: "#eee" }}>sm=1, smShift=11</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={2} smShift={10} style={{ backgroundColor: "#eee" }}>sm=2, smShift=10</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={3} smShift={9} style={{ backgroundColor: "#eee" }}>sm=3, smShift=9</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={4} smShift={8} style={{ backgroundColor: "#eee" }}>sm=4, smShift=8</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={5} smShift={7} style={{ backgroundColor: "#eee" }}>sm=5, smShift=7</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={6} smShift={6} style={{ backgroundColor: "#eee" }}>sm=6, smShift=6</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={7} smShift={5} style={{ backgroundColor: "#eee" }}>sm=7, smShift=5</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={8} smShift={4} style={{ backgroundColor: "#eee" }}>sm=8, smShift=4</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={9} smShift={3} style={{ backgroundColor: "#eee" }}>sm=9, smShift=3</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={10} smShift={2} style={{ backgroundColor: "#eee" }}>sm=10, smShift=2</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={11} smShift={1} style={{ backgroundColor: "#eee" }}>sm=11, smShift=1</GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn sm={12} style={{ backgroundColor: "#eee" }}>sm=12</GridColumn>
        </GridRow>
      </Container>
    </StyleRoot>
  ));

storiesOf("Heading", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Heading
      level={select("Level", [1, 2, 3, 4, 5, 6], 2)}
      size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
      weight={select("Weight", ["thin", "normal", "thick"], "normal")}
      importance={select("Importance", ["low", "normal", "high", "alert"], "normal")}
      tracking={select("Tracking", ["loose", "normal", "tight"], "normal")}
      caps={boolean("Capitalized", false)}
    >
      {text("Text", "Heading text")}
    </Heading>
  ));

storiesOf("Icon button", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <IconButton
      icon="share"
      label="Share this"
    />
  ));

storiesOf("Icon callout", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <IconCallout
      iconName={select("Icon name", {
        SurvivalAirplane: "Airplane",
        SurvivalBear: "Bear",
        SurvivalBed: "Bed",
        SurvivalBookPencil: "Book / pencil",
        SurvivalCar: "Car",
        SurvivalHealth: "Health",
        SurvivalLamp: "Lamp",
        SurvivalLgbt: "LGBT",
        SurvivalMoney: "Money",
        SurvivalPassport: "Passport",
        SurvivalSafety: "Safety",
        SurvivalSpeechBubbles: "Speech bubbles",
        SurvivalSuitcase: "Suitcase",
        SurvivalUmbrella: "Umbrella",
        SurvivalVespa: "Vespa",
        SurvivalVisa: "Visa",
        SurvivalWheelchair: "Wheelchair",
      }, "SurvivalMoney")}
      title={text("Title", "Money and costs")}
      copy={text("Copy", "Budgets, currency rates and on-the-ground costs")}
    />
  ));

storiesOf("Icon callout group", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <IconCalloutGroup>
        <IconCallout
          iconName="SurvivalVisa"
          title="Visas"
          copy="Dull but essential passport paperwork and entry info"
        />

        <IconCallout
          iconName="SurvivalUmbrella"
          title="Best time to go"
          copy="Hit the ground at the right time"
        />

        <IconCallout
          iconName="SurvivalMoney"
          title="Money and costs"
          copy="Budgets, currency rates and on-the-ground costs"
        />

        <IconCallout
          iconName="SurvivalHealth"
          title="Health"
          copy="Keep safe and well on the open road"
        />
      </IconCalloutGroup>
    </StyleRoot>
  ));

storiesOf("Image carousel", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ImageCarousel
      images={[
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-1.770x430.jpg",
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-2.770x430.jpg",
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-3.770x430.jpg",
      ]}
      imageSize={[770, 430]}
      index={null}
    />
  ));

storiesOf("Image hero", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ImageHero
      image={text("Image URL", "https://s3.amazonaws.com/static-asset/backpack-ui/ImageHero.770x430.jpg")}
      imageSize={array("Size", [770, 430])}
    />
  ));

storiesOf("Interactive Map", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <InteractiveMap
      places={[
        {
          title: "Zimbabwe",
          lat: -19.015438,
          long: 29.154857,
        },
        {
          title: "Rio De Janeiro",
          lat: -22.906847,
          long: -43.172896,
        },
        {
          title: "Wahiki Island",
          lat: -36.801924,
          long: 175.108015,
        },
      ]
      }
    />
  ));

storiesOf("Italic text", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ItalicText>{text("Text", "Global news reporter")}</ItalicText>
  ));

storiesOf("Lede", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Lede
      content={text("Text", `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id
        est laborum`)}
    />
  ));

storiesOf("List item (news)", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <ListItemNews
        title={text("Title", "Ireland is set to have the world’s largest redwood forest outside of California")}
        category={text("Category", "Europe")}
        categoryLink={text("Category URL", "/")}
        link={text("URL", "/")}
        thumbnail={text("Image URL", "http://placehold.it/110x110")}
        size={select("Size", ["small", "medium"], "medium")}
        isSponsored={boolean("Sponsored", false)}
      />
    </StyleRoot>
  ));

storiesOf("Location label", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <LocationLabel>Ottawa, ON</LocationLabel>
  ));

storiesOf("Logo", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <div style={{ display: "inline-block", padding: "20px" }}>
      <Logo
        color={select("Color", ["blue", "gray", "white"], "blue")}
      />
    </div>
  ));

storiesOf("Map marker", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <MapMarker
      poiType={select("Type", {
        // center: "Center",
        activities: "Activities",
        drinking_nightlife: "Drinking and nightlife",
        eating: "Eating",
        entertainment: "Entertainment",
        festivals_events: "Festivals and events",
        info: "Information",
        restaurants: "Restaurants",
        shopping: "Shopping",
        sights: "Sights",
        sleeping: "Sleeping",
        tours: "Tours",
        transport: "Transportation",
      },
      "sights")}
      size={number("Size", 128)}
      hideShadow={boolean("Hide shadow", false)}
      inverse={boolean("Inverse", false)}
    />
  ));

storiesOf("Masthead", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <Masthead />
    </StyleRoot>
  ))
  .add("With Slider", () => {
    const items = [{
      adPosition: "",
      image: "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtNjA3Njk2MTAzX2Z1bGwuanBnV2VkIEZlYiAwMSAyMDE3IDA5OjAxOjU1IEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500",
      type: "Featured article",
      headline: "Honeymoon hacks: a guide for newly-weds abroad",
      description: ["Item 1", "Item 2"],
      callToAction: {
        text: "Happily Ever After",
        icon: "Play",
        link: "https://www.lonelyplanet.com/travel-tips-and-articles/honeymoon-survival-the-ultimate-guide-for-newlyweds-abroad",
      },
      id: 3,
    }, {
      adPosition: "",
      tabTitle: "Sicily’s best coastal hikes",
      image: "https://lonelyplanetstatic.imgix.net/copilot/images/R2V0dHlJbWFnZXMtNDY3NTY3MjI4X3N1cGVyLTc1YzEyMjJjOGNhOC5qcGdUdWUgSmFuIDMxIDIwMTcgMTA6NDA6MzUgR01UKzAwMDAgKFVUQyk%3D.jpg?q=40&sharp=10&w=2500",
      type: "FEATURED ARTICLE",
      headline: "Sicily’s best coastal hikes",
      description: "",
      callToAction: {
        text: "Isles for Miles",
        icon: "Play",
        link: "https://www.lonelyplanet.com/italy/sicily/aeolian-islands/travel-tips-and-articles/sicilys-best-coastal-hikes",
      },
      id: 1,
    }, {
      adPosition: "",
      tabTitle: "Architecture for travellers: a novice's guide",
      image: "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtNTM0NzUzNjQ1X3N1cGVyLmpwZ01vbiBKYW4gMzAgMjAxNyAwOTo0MToyOSBHTVQrMDAwMCAoVVRDKQ%3D%3D.jpg?q=40&sharp=10&w=2500",
      type: "FEATURED ARTICLE",
      headline: "Architecture for travellers: a novice's guide",
      description: "",
      callToAction: {
        text: "Play",
        icon: "Play",
        link: "https://www.lonelyplanet.com/travel-tips-and-articles/architecture-for-travellers-a-novices-guide",
      },
      id: 4,
    }];
    const slides = items.map((item, index) => <Slide key={index} {...item} />);
    return (
      <StyleRoot>
        <MastheadSlider
          height={text("Masthead Height", "100vh")}
          slides={slides}
        />
      </StyleRoot>
    );
  });


class ModalWrapper extends React.Component {
  static propTypes = {
    children: React.PropTypes.function,
  }

  state = {
    open: true,
  }


  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return this.props.children(this.state.open, this.toggleOpen.bind(this));
  }
}

const watchLaterVideos = [
  {
    id: 1,
    heading: "Test Heading",
    bullets: ["On the Road", "Ep1"],
    runtime: 30000,
    imageSrc: "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtMTQ2OTUyMjI2X2hpZ2guanBnU3VuIEZlYiAyNiAyMDE3IDE0OjMxOjIwIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&h=520&w=697",
    href: "/test",
  },
  {
    id: 2,
    heading: "Test Heading",
    bullets: ["On the Road", "Ep2"],
    runtime: 30000,
    imageSrc: "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtMTQ2OTUyMjI2X2hpZ2guanBnU3VuIEZlYiAyNiAyMDE3IDE0OjMxOjIwIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&h=520&w=697",
    href: "/test",
  },
  {
    id: 3,
    heading: "Test Heading",
    bullets: ["On the Road", "Ep3"],
    runtime: 30000,
    imageSrc: "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FR2V0dHlJbWFnZXMtMTQ2OTUyMjI2X2hpZ2guanBnU3VuIEZlYiAyNiAyMDE3IDE0OjMxOjIwIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&h=520&w=697",
    href: "/test",
  },
];

storiesOf("Modal", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <ModalWrapper>
        {(isOpen, toggle) => (
          <div>
            <button onClick={toggle}>Toggle Modal</button>
            <Modal
              isOpen={isOpen}
              rightAction={() => console.log("clicked the left")}
              rightActionContent={<p>Test</p>}
              leftAction={toggle}
              leftActionContent={<Icon.Close width={24} height={24} />}
              closeModal={toggle}
              title={text("Header Text", "Header Text")}
            >
              <div>
                <h2>Some Content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequuntur alias amet repellat quis veritatis dignissimos. Veniam adipisci qui facere culpa accusamus ducimus eum rem, amet, fugit, quasi, optio aut?</p>
              </div>
            </Modal>
          </div>
        )}
      </ModalWrapper>
    </StyleRoot>
  )).add("Watch Later", () => (
    <StyleRoot>
      <ModalWrapper>
        {(isOpen, toggle) => (
          <WatchLaterModal
            loggedIn={boolean("Logged in", false)}
            isOpen={isOpen}
            onClose={toggle}
            // videos={watchLaterVideos}
            videos={[]}
            removeVideo={action("Remove Video")}
            authMessage={text("Auth Message", "Organize your research & unlock tools like bookmarking.")}
          />
        )}
      </ModalWrapper>
    </StyleRoot>
  ));

storiesOf("More link", module)
  .addDecorator(withKnobs)
  .add("Anchor", () => (
    <MoreLink
      href={text("URL", "/")}
      size={select("Size", ["", "small"], "")}
      caps={boolean("Capitalized", false)}
      hideIcon={boolean("Hide icon", false)}
      arrowDirection={select("Arrow diretion", ["up", "down", "left", "right"], "right")}
    >
      {text("Text", "View all tours")}
    </MoreLink>
  ))
  .add("Button", () => (
    <MoreLink
      onClick={action("MoreLink clicked")}
      size={select("Size", ["", "small"], "")}
      caps={boolean("Capitalized", false)}
      hideIcon={boolean("Hide icon", false)}
      arrowDirection={select("Arrow diretion", ["up", "down", "left", "right"], "right")}
    >
      {text("Text", "View all tours")}
    </MoreLink>
  ))
  .add("Span", () => (
    <MoreLink
      isNested
      size={select("Size", ["", "small"], "")}
      caps={boolean("Capitalized", false)}
      hideIcon={boolean("Hide icon", false)}
      arrowDirection={select("Arrow diretion", ["up", "down", "left", "right"], "right")}
    >
      {text("Text", "View all tours")}
    </MoreLink>
  ));

storiesOf("Narrative", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <Narrative
        heading={text("Heading", "Walking into the Sacher is like turning back the clocks 100 years.")}
        htmlContent={text("HTML content", `<p>The reception, with its dark-wood panelling, deep red shades
          and heavy gold chandelier, is reminiscent of an expensive fin de siècle
          bordello. The smallest rooms are surprisingly large and suites are truly
          palatial. Junior suites/doubles cost from €480 to €1350.</p>
          <p>As well as extras like original oil paintings throughout and a tiny
          cube of the hotel’s famous Sacher Torte on arrival, there's a hi-tech
          spa complex, with herbal sauna, ice fountain and fitness room.</p>`)}
        author={object("Author", {
          name: "Tim Plaum",
          title: "Lonely Planet Editor",
          avatarSrc: "",
          href: "",
        })}
      />
    </StyleRoot>
  ));

storiesOf("News article author", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <NewsArticleAuthor
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      absoluteTime={text("Absolute time", "2017-01-17")}
      relativeTime={text("Relative time", "3 days ago")}
      theme={select("Theme", ["light", "dark"], "light")}
    />
  ));

storiesOf("News list", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <NewsList
        newsItems={[{
          title: "Whales migration patterns passed down from mother to child",
          category: "The World",
          categoryLink: "/path/to/category",
          description: `Life has a languid quality in the stunning landscapes of
            the Upper Peninsula (called the UP by visitors, and its residents are
            known as Yoopers). Americans`,
          link: "/path/to/full/article",
          thumbnail: "https://lonelyplanetwp.imgix.net/2016/08/Hubud-657aa84af2b1.jpg?w=110&h=110&fit=crop&q=50&auto=enhance&crop=entropy",
        }, {
          title: `Watch this adorable Kangaroo invade a family's campervan and
            then return with her friends`,
          category: "Asia & the pacific",
          categoryLink: "/path/to/category",
          description: `Life has a languid quality in the stunning landscapes of
            the Upper Peninsula (called the UP by visitors, and its residents are
            known as Yoopers). Americans`,
          link: "/path/to/full/article",
          thumbnail: "https://lonelyplanetwp.imgix.net/2016/08/Hubud-657aa84af2b1.jpg?w=110&h=110&fit=crop&q=50&auto=enhance&crop=entropy",
        }]}
      />
    </StyleRoot>
  ))
  .add("Small list items", () => (
    <StyleRoot>
      <NewsList
        newsItems={[{
          title: "Whales migration patterns passed down from mother to child",
          category: "The World",
          categoryLink: "/path/to/category",
          description: `Life has a languid quality in the stunning landscapes of
            the Upper Peninsula (called the UP by visitors, and its residents are
            known as Yoopers). Americans`,
          link: "/path/to/full/article",
          thumbnail: "https://lonelyplanetwp.imgix.net/2016/08/Hubud-657aa84af2b1.jpg?w=110&h=110&fit=crop&q=50&auto=enhance&crop=entropy",
          size: "small",
        }, {
          title: `Watch this adorable Kangaroo invade a family's campervan and
            then return with her friends`,
          category: "Asia & the pacific",
          categoryLink: "/path/to/category",
          description: `Life has a languid quality in the stunning landscapes of
            the Upper Peninsula (called the UP by visitors, and its residents are
            known as Yoopers). Americans`,
          link: "/path/to/full/article",
          thumbnail: "https://lonelyplanetwp.imgix.net/2016/08/Hubud-657aa84af2b1.jpg?w=110&h=110&fit=crop&q=50&auto=enhance&crop=entropy",
          size: "small",
        }]}
      />
    </StyleRoot>
  ));

storiesOf("Newsletter", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <Newsletter
        title={text("Title", "Sign up for our weekly newsletter")}
        subtitle={text("Subtitle", "Get more travel inspiration, tips and exclusive offers sent straight to your inbox")}
        placeholder={text("Input placeholder text", "Enter email")}
        cta={text("Button text", "Sign up")}
        confirmation={object("Confirmation data", {
          title: "Thank you for signing up!",
          text: "We’ll send a confirmation email to",
        })}
        signup={object("Signup data", {
          vars: "sailthru[vars][sf_LP_Editorial_Newsletter]",
          email_template: "Welcome email",
          source: "homepage",
        })}
      />
    </StyleRoot>
  ));

storiesOf("No results", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <NoResults onReset={action(event)} />
  ));

storiesOf("Number list", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <NumberList list={data.numberList} />
  ));

storiesOf("Number marker", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <NumberMarker number={number("Number", 4)} />
  ));

storiesOf("Page header", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <PageHeader
        heading={text("Title", "Ryman Auditorium")}
        title={text("Category", "Nashville sights")}
        titleHref={text("Category URL", "/")}
        type={text("Type", "Historic building")}
        place={text("Place", "Nashville")}
        alignment={select("Alignment", ["", "center"], "center")}
        topChoice={boolean("Top choice", false)}
        contained={boolean("Contained", false)}
        bookmark={boolean("Bookmark", false)}
        stars={number("Stars", 0)}
      />
    </StyleRoot>
  ));

storiesOf("Paginator button", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <PaginatorButton
      direction={select("Arrow direction", ["up", "down", "left", "right"], "up")}
      arrow={select("Arrow style", ["chevron", "triangle"], "chevron")}
      size={select("Size", ["medium", "small"], "medium")}
      shadow={select("Shadow", ["loose", "tight"], "loose")}
      color={select("Color", ["", "blue"], "")}
      onClick={action("PaginatorButton clicked")}
    />
  ));

storiesOf("Photo gallery", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <PhotoGallery
      photos={[
        {
          src: "//lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/10/Trinidad-6666420241af.jpg",
          w: 1500,
          h: 1000,
          title: "A radiant blue-chinned sapphire hummingbird perched in a branch in Trinidad © ArenFrancis",
        },
        {
          src: "//lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/10/Iguazu-falls-86198db70380.jpg",
          w: 1500,
          h: 1000,
          title: "Get an eyeful of Brazil's Iguazu Falls © Michael Runkel / Getty Images",
        },
        {
          src: "//lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/10/Panda-f1ebbbd0fe6b.jpg",
          w: 1500,
          h: 1691,
          title: "A giant panda cub at the Chengdu Giant Panda Breeding Research Base in Sichuan © Feng Wei Photography / Getty Images",
        },
        {
          src: "//lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/10/Shere-Khan-848929cc2677.jpg",
          w: 1500,
          h: 1000,
          title: "Stalk the forests of Madhya Pradesh for a chance of spotting Shere Khan © Andrew Parkinson / Getty Images",
        },
      ]}
      options={{
        pinchToClose: false,
        closeOnScroll: false,
        closeOnVerticalDrag: false,
        escKey: false,
        arrowKeys: true,
        history: false,
      }}
      isOpen
    />
  ));

storiesOf("Placeholder", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Placeholder title={text("Title", "The best place in the world")} />
  ));

storiesOf("POI Paginator", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <PoiPaginator
      title={text("Title", "Bademiya")}
      type={text("Type", "Fusion restaurant")}
      neighborhood={text("Neighborhood", "Hofburg")}
      place={text("Place", "Vienna")}
      topChoice={boolean("Top choice", false)}
    />
  ));

storiesOf("Promoted guidebook", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <StyleRoot>
      <PromotedGuidebook
        title={text("Title", "Egypt travel guide")}
        url={text("URL", "http://shop.lonelyplanet.com/egypt/egypt-travel-guide-12/")}
        imageUrl={text("Image URL", "http://media.lonelyplanet.com/shop/images/9919-Egypt_travel_guide_-_12th_edition_Large.jpg")}
        price={object("Price", {
          usd: "27.99",
        })}
        description={text("Description", `In spite of political, financial and social
          turmoil, Egyptians remain  proud and defiant and are as
          welcoming as ever to visitors to their land.`)}
      />
    </StyleRoot>
  ));

storiesOf("Provider logo", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ProviderLogo
      provider={select("Provider", {
        bdc: "booking.com",
        hostelworld: "Hostelworld",
        opentable: "OpenTable",
        gadventures: "G Adventures",
        viator: "Viator",
      }, "bdc")}
    />
  ));

storiesOf("Rating", module)
  .addDecorator(withKnobs)
  .add("Icon", () => (
    <Rating
      amount={select("Amount", [
        0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,
      ], 3.5)}
      max={5}
      icon
    />
  ))
  .add("Text", () => (
    <Rating
      provider={select("Provider", {
        bdc: "booking.com",
        hostelworld: "Hostelworld",
        opentable: "OpenTable",
        gadventures: "G Adventures",
        viator: "Viator",
      }, "bdc")}
      amount={number("Amount", 8)}
      max={number("Maximum amount", 10)}
      description={text("Description", "Great")}
    />
  ));

storiesOf("Recommended articles", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <RecommendedArticles
        heading={text("heading", "Recommended articles")}
        calloutLabel={text("Callout label", "More recommendations")}
        calloutHref={text("Callout URL", "/category/recommended")}
        articles={array("Articles", [
          {
            title: "New York’s most iconic buildings reimagined on deserted streets",
            paragraph: `A new exhibition in New York of the city’s most iconic
              buildings shows them in a new light, with the bustle of modern life
              stripped out. Photographer`,
            image: "http://placehold.it/410x230",
            href: "/",
            category: "Art and culture",
            categoryHref: "/",
          },
          {
            title: "Pull up a seat for David Attenborough’s Planet Earth II",
            paragraph: `Ten years after the BBC series, Planet Earth, captivated a
              global audience of over half a billion people, Planet Earth II is
              coming to our TV screens, narrated once`,
            image: "http://placehold.it/410x230",
            href: "/",
            category: "Wildlife and nature",
            categoryHref: "/",
          },
        ])}
      />
    </StyleRoot>
  ));

storiesOf("Related tour", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <RelatedTour
      title="Vienna City by Bike and Boat"
      slug="/#"
      image="http://dummyimage.com/630x284/4d494d/686a82.gif"
      price={{
        currency: "USD",
        amount: 2595,
      }}
      tripLength="14 days"
      destination="Kochi to Kolkata"
      reviews={8}
    />
  ));

storiesOf("Reviewed badge", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ReviewedBadge />
  ));

storiesOf("Scroll Indicator", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ScrollIndicator
      color={color("Color", "#000")}
    />
  ));

storiesOf("Sectional nav", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <SectionalNav
        items={[
          "Experiences",
          "Articles",
          "Products",
          "Destinations",
          "Tours",
          "Inspiration",
          "Books",
          "Adventures",
          "Interests",
        ]}
        active="Articles"
        linkToOffset={0}
      />
    </StyleRoot>
  ));

storiesOf("Section Header", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <SectionHeader theme={select("Theme", ["default", "light"], "default")}>
        {text("title", "Top experiences in Vietnam")}
      </SectionHeader>
    </StyleRoot>
  ));

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Select options={array("Options", ["USA", "France", "Spain"])} />
  ));

const SettingBlockListItemWrapper = (props) => (
  <div
    style={{
      marginBottom: "8px",
    }}
  >
    {props.children}
  </div>
);

storiesOf("Setting Block", module)
  .addDecorator(withKnobs)
  .add("Text Input Setting", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <SettingBlock
        error={boolean("Error", false)}
        title={text("Title", "Name")}
        subtitle={text("Subtitle", "Publicly displayed in your profile")}
      >
        <Input
          theme="float"
          placeholder={text("Placeholder", "Enter full name")}
        />
      </SettingBlock>
    </div>
  ))
  .add("Textarea Setting", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <SettingBlock
        error={boolean("Error", false)}
        title={text("Title", "Name")}
        subtitle={text("Subtitle", "")}
      >
        <TextArea
          theme="float"
          rows={2}
        />
      </SettingBlock>
    </div>
  ))
  .add("Check Button Setting", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <ToggleController active={boolean("Checked", false)}>
        {(active, toggle) => (
          <SettingBlockButton
            error={boolean("Error", false)}
            title={text("Title", "Lonely Planet Kids newsletter")}
            subtitle={text("Subtitle", "")}
            checked={active}
            onClick={toggle}
            description={text("Description", "hand-picked selection of family travel articles, fun activity sheets and competitions")}
          />
        )}
      </ToggleController>
    </div>
  ))
  .add("Tag List Setting", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <ToggleController active={boolean("Expanded", false)}>
        {(expanded, toggle) => (
          <SettingBlockAccordion
            error={boolean("Error", false)}
            title={text("Title", "Travel interests")}
            subtitle={text("Subtitle", "")}
            expanded={expanded}
            onClick={toggle}
            description={text("Description", "Manage your tags")}
          >
            <TagList>
              <Tag href="#" selected>All</Tag>
              <Tag href="#">The Americas</Tag>
              <Tag href="#">World</Tag>
              <Tag href="#">Asia & the Pacific</Tag>
              <Tag href="#">Europe</Tag>
              <Tag href="#">Middle East & Africa</Tag>
              <Tag href="#">Editor’s pick</Tag>
            </TagList>
          </SettingBlockAccordion>
        )}
      </ToggleController>
    </div>
  ))
  .add("Setting List", () => (
    <div
      style={{
        paddingTop: "16px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <SettingSection heading={text("Section Heading", "Personal")}>
        <SettingBlockListItemWrapper>
          <SettingBlock
            error={boolean("Error", false)}
            title={text("Input Title", "Name")}
            subtitle={text("Input Subtitle", "Publicly displayed in your profile")}
          >
            <Input
              theme="float"
              placeholder={text("Input Placeholder", "Enter full name")}
            />
          </SettingBlock>
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <SettingBlock
            error={boolean("Error", false)}
            title={text("Textarea Title", "Intro")}
            subtitle={text("Textarea Subtitle", "")}
          >
            <TextArea
              theme="float"
              rows={2}
            />
          </SettingBlock>
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <ToggleController active={boolean("Expanded", false)}>
            {(expanded, toggle) => (
              <SettingBlockAccordion
                error={boolean("Error", false)}
                title={text("Accordion Title", "Travel interests")}
                subtitle={text("Accordion Subtitle", "Choose 3 or more")}
                expanded={expanded}
                onClick={toggle}
                description={text("Accordion Description", "")}
              >
                <TagList>
                  <Tag href="#" selected>All</Tag>
                  <Tag href="#">The Americas</Tag>
                  <Tag href="#">World</Tag>
                  <Tag href="#">Asia & the Pacific</Tag>
                  <Tag href="#">Europe</Tag>
                  <Tag href="#">Middle East & Africa</Tag>
                  <Tag href="#">Editor’s pick</Tag>
                </TagList>
              </SettingBlockAccordion>
            )}
          </ToggleController>
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <ToggleController active={boolean("Checked", false)}>
            {(active, toggle) => (
              <SettingBlockButton
                error={boolean("Error", false)}
                title={text("Button Title", "Travel news daily")}
                subtitle={text("Button Subtitle", "")}
                checked={active}
                onClick={toggle}
                description={text("Button Description", "hand-picked selection of family travel articles, fun activity sheets and competitions")}
              />
            )}
          </ToggleController>
        </SettingBlockListItemWrapper>
      </SettingSection>
      <SettingSection heading="Another Section">
        <SettingBlockListItemWrapper>
          <SettingBlock
            error={boolean("Error", false)}
            title={text("Input Title", "Name")}
            subtitle={text("Input Subtitle", "Publicly displayed in your profile")}
          >
            <Input
              theme="float"
              placeholder={text("Input Placeholder", "Enter full name")}
            />
          </SettingBlock>
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <SettingBlock
            error={boolean("Error", false)}
            title={text("Textarea Title", "Intro")}
            subtitle={text("Textarea Subtitle", "")}
          >
            <TextArea
              theme="float"
              rows={2}
            />
          </SettingBlock>
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <ToggleController active={boolean("Expanded", false)}>
            {(expanded, toggle) => (
              <SettingBlockAccordion
                error={boolean("Error", false)}
                title={text("Accordion Title", "Travel interests")}
                subtitle={text("Accordion Subtitle", "Choose 3 or more")}
                expanded={expanded}
                onClick={toggle}
                description={text("Accordion Description", "")}
              >
                <TagList>
                  <Tag href="#" selected>All</Tag>
                  <Tag href="#">The Americas</Tag>
                  <Tag href="#">World</Tag>
                  <Tag href="#">Asia & the Pacific</Tag>
                  <Tag href="#">Europe</Tag>
                  <Tag href="#">Middle East & Africa</Tag>
                  <Tag href="#">Editor’s pick</Tag>
                </TagList>
              </SettingBlockAccordion>
            )}
          </ToggleController>
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <ToggleController active={boolean("Checked", false)}>
            {(active, toggle) => (
              <SettingBlockButton
                error={boolean("Error", false)}
                title={text("Button Title", "Twitter")}
                subtitle={text("Button Subtitle", "")}
                checked={active}
                onClick={toggle}
                description={text("Button Description", "Find interesting people you follow")}
              />
            )}
          </ToggleController>
        </SettingBlockListItemWrapper>
      </SettingSection>
    </div>
  ));

storiesOf("Sights List Item", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <SightsListItem
      slug="/path/to/item"
      title="Zimbabwe"
      subtitle="Southern Africa"
      markerNumber={1}
    />
  )).add("With Image", () => (
    <SightsListItem
      slug="/path/to/item"
      title="Zimbabwe"
      subtitle="Southern Africa"
      imgPath="https://s3.amazonaws.com/static-asset/backpack-ui/south-pole.80x60.jpg"
      markerNumber={1}
    />
  ));

storiesOf("Share menu", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <div style={{ padding: "100px 300px" }}>
      <SocialShareContainer
        text={text("Text", "Animal islands: seven places where creatures rule")}
        url={text("URL", "https://www.lonelyplanet.com/asia/travel-tips-and-articles/animal-islands-seven-places-where-creatures-rule")}
        menuPosition={select("Menu position", ["bottom", "left"], "bottom")}
        hide={["facebookMessenger", "reddit"]}
      >
        {ShareMenu}
      </SocialShareContainer>
    </div>
  ));

storiesOf("Video card shelf", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <CardShelfVideo heading="Food and drink" href="/">
          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            layout={select("Layout", ["card", "tile"], "card")}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/GettyImages-509196834_high-ba0228a2190f.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout={select("Layout", ["card", "tile"], "card")}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/LPT0414_063-2225e4dcf106.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout={select("Layout", ["card", "tile"], "card")}
          />
        </CardShelfVideo>
      </div>
    </StyleRoot>
  )).add("Swiper", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <CardShelfVideoSwiper heading="Food and drink" href="/">
          <CardVideo
            heading={text("Heading", "High Sierra ")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            layout="card"
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/GettyImages-509196834_high-ba0228a2190f.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="card"
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/LPT0414_063-2225e4dcf106.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="card"
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/GettyImages-578179271_full-e3d250fd7575.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="card"
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/Myanmar-11146662b740.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="card"
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/Antigua-f670d2806c69.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="card"
          />
        </CardShelfVideoSwiper>
      </div>
    </StyleRoot>
  ));

storiesOf("Social icon button", module)
  .addDecorator(withKnobs)
  .add("Email", () => (
    <SocialIconButton
      href="mailto:?subject=&body="
      onClick={action("Email clicked")}
      network="email"
    />
  ))
  .add("Facebook", () => (
    <SocialIconButton
      href="https://www.facebook.com/sharer/sharer.php?u="
      onClick={action("Facebook clicked")}
      network="facebook"
    />
  ))
  .add("Facebook Messenger", () => (
    <SocialIconButton
      href="fb-messenger://share/?link="
      onClick={action("Facebook Messenger clicked")}
      network="facebookMessenger"
    />
  ))
  .add("Reddit", () => (
    <SocialIconButton
      href="http://www.reddit.com/submit/?url="
      onClick={action("Reddit clicked")}
      network="reddit"
    />
  ))
  .add("Twitter", () => (
    <SocialIconButton
      href="https://twitter.com/intent/tweet?text=&url=&via="
      onClick={action("Twitter clicked")}
      network="twitter"
    />
  ));

storiesOf("Social Login Button", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <SocialLoginButton
      iconName={select("Icon Name", Object.keys(Icon), "FacebookBlock")}
      iconColor={color("Icon Color", bpColor.facebook)}
      onClick={action("Handle Login")}
    >{text("Text", "Continue with Facebook")}</SocialLoginButton>
  ));

storiesOf("Social share", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <SocialShareContainer
      text={text("Text", "Animal islands: seven places where creatures rule")}
      url={text("URL", "https://www.lonelyplanet.com/asia/travel-tips-and-articles/animal-islands-seven-places-where-creatures-rule")}
      headingText={text("Heading text", "Share this article:")}
    >
      {SocialShare}
    </SocialShareContainer>
  ));

storiesOf("Sponsor label", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <SponsorLabel>
      {text("Text", "Sponsored")}
    </SponsorLabel>
  ));

storiesOf("Spotlight zone", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <SpotlightZone
        zone={text("Zone", "Series spotlight")}
        category={text("Category", "On The Road")}
        title={text("Title", "Gaudi, Part 1")}
        paragraph={text("Paragraph", "Explore the architecture capital of Varcelona with Christa Larwood and witness Antoni Gaudi's beautiful work.")}
        href={text("Href", "http://www.google.com")}
        imageUrl={text("Image URL", "https://s3.amazonaws.com/op-video-sync-dev/poster-5299039063001-a-gorgeous-day-in-the-life-of-cuba-20170130-182935.jpg")}
        backgroundImageUrl={text("Background Image URL", "https://s3.amazonaws.com/op-video-sync-dev/poster-5299039063001-a-gorgeous-day-in-the-life-of-cuba-20170130-182935.jpg")}
      />
    </StyleRoot>
  ));

storiesOf("Static map", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StaticMap
      location="-86.8595257,35.93225029999999"
      size="278x90"
    />
  ));

storiesOf("Strapline", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Strapline>
      {text("Text", "Strapline text")}
    </Strapline>
  ));

storiesOf("Tabbed nav", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <TabbedNav
        items={[
          "Latest",
          "Europe",
          "Asia",
          "Australia & the Pacific",
          "North America",
          "Central & South America",
          "Middle East & Africa",
          "World",
        ]}
        active="Latest"
        onClick={action("Tab clicked")}
      />
    </StyleRoot>
  ));

storiesOf("Tag", module)
  .addDecorator(withKnobs)
  .add("Anchor", () => (
    <Tag
      href={text("URL", "#")}
      selected={boolean("Selected", false)}
    >
      {text("Text", "The Americas")}
    </Tag>
  ))
  .add("Button", () => (
    <Tag
      onClick={action("Tag clicked")}
      selected={boolean("Selected", false)}
    >
      {text("Text", "The Americas")}
    </Tag>
  ))
  .add("No click", () => (
    <Tag selected={boolean("Selected", false)}>
      {text("Text", "The Americas")}
    </Tag>
  ));

storiesOf("Tag list", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <TagList>
      <Tag href="#" selected>All</Tag>
      <Tag href="#">The Americas</Tag>
      <Tag href="#">World</Tag>
      <Tag href="#">Asia & the Pacific</Tag>
      <Tag href="#">Europe</Tag>
      <Tag href="#">Middle East & Africa</Tag>
      <Tag href="#">Editor’s pick</Tag>
    </TagList>
  ));

storiesOf("Tall Carousel", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <TallCarousel
      slides={[{
        type: "Backpacking",
        link: "/link/to/interests",
        image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/94232973a6a367b54ea29dbb3a708cff-europe.jpg?h=768&sharp=10&vib=20",
      }, {
        type: "Nature & wildlife",
        link: "/link/to/interest",
        image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/a795bb0b47f601ea3538da736067452c-africa.jpg?h=768&sharp=10&vib=20",
      }, {
        type: "Romance",
        link: "/link/to/interest",
        image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/35147e2699667519619575ba272f60e1-europe.jpg?h=768&sharp=10&vib=20",
      }, {
        type: "Adventure",
        link: "/link/to/interest",
        image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/57c5143d7297c21181c522eee9e3b05e-europe.jpg?h=768&sharp=10&vib=20",
      }]}
    />
  ));

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .add("Accent", () => (
    <TextAccent>
      {text("Text", "Lorem ipsum dolor sit amet")}
    </TextAccent>
  ))
  .add("Body article", () => (
    <TextBodyArticle>
      {text("Text", `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean sed
        mauris sit amet massa interdum bibendum.
        Ut ac ex leo. Cras blandit enim ut metus
        feugiat, vitae pharetra massa aliquet.`)}
    </TextBodyArticle>
  ))
  .add("Body small", () => (
    <TextBodySmall>
      {text("Text", `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean sed
        mauris sit amet massa interdum bibendum.
        Ut ac ex leo. Cras blandit enim ut metus
        feugiat, vitae pharetra massa aliquet.`)}
    </TextBodySmall>
  ))
  .add("Heading", () => (
    <TextHeading
      level={select("Level", [1, 2, 3, 4, 5, 6], 2)}
      size={select("Size", [1, 2, 3, 4, 5, 6, 7], 2)}
      weight={select("Weight", {
        light: "Light",
        book: "Book",
        medium: "Medium",
      }, "book")}
    >
      {text("Text", "Lorem ipsum")}
    </TextHeading>
  ))
  .add("Super", () => (
    <TextSuper>
      {text("Text", "Lorem ipsum")}
    </TextSuper>
  ))
  .add("Uppercase", () => (
    <TextUppercase>
      {text("Text", "Lorem ipsum")}
    </TextUppercase>
  ));

storiesOf("Text bubble", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <TextBubble>{text("Text", "44 mins")}</TextBubble>
  ));

storiesOf("Thumbnail list item", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ThumbnailListItem
      title={text("Title", "The shop")}
      runtime={number("Video runtime", 129365)}
      imagePath={text("Image path", "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FYXJ0YW5kY3VsdHVyZS5qcGdTYXQgRGVjIDE3IDIwMTYgMjE6MDA6MDUgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=180")}
      description={array("Description", ["Item 1", "Item 2"])}
      descriptionIcon={text("Icon name", "Clock")}
      descriptionIconLabel={text("Icon name", "Watch later")}
      onDescriptionIconClick={action("Action for icon")}
      theme={select("Theme", ["light", "dark"], "light")}
    />
  ));

storiesOf("Tiles", module)
  .addDecorator(withKnobs)
  .add("Video tile", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <TileVideo
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          href={text("URL", "#")}
        />
      </div>
    </StyleRoot>
  ))
  .add("Video poster tile", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <TileVideoPoster
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          href={text("URL", "#")}
          description={text("Year", "2016")}
        />
      </div>
    </StyleRoot>
  ));

storiesOf("Video tile grid", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <TileGrid>
        <TileVideo
          className="Tile"
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          href={text("URL", "#")}
        />

        <TileVideo
          className="Tile"
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/GettyImages-509196834_high-ba0228a2190f.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
          href={text("URL", "#")}
        />

        <TileVideo
          className="Tile"
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/LPT0414_063-2225e4dcf106.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
          href={text("URL", "#")}
        />

        <TileVideo
          className="Tile"
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/GettyImages-578179271_full-e3d250fd7575.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
          href={text("URL", "#")}
        />

        <TileVideo
          className="Tile"
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/Myanmar-11146662b740.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
          href={text("URL", "#")}
        />

        <TileVideo
          className="Tile"
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          onClick={action("Watch this video later")}
          imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/Antigua-f670d2806c69.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
          href={text("URL", "#")}
        />
      </TileGrid>
    </StyleRoot>
  ))
  .add("Swiper", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <CardShelfVideoSwiper heading="Food and drink" href="/" slidesVisible={4}>
          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />

          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />

          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />

          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />

          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />

          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />

          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />

          <TileVideoPoster
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            description={text("Year", "2016")}
          />
        </CardShelfVideoSwiper>
      </div>
    </StyleRoot>
  ));

storiesOf("Timestamp", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Timestamp
      dateTime={text("Absolute time", "2017-01-17")}
    >
      {text("Relative time", "3 days ago")}
    </Timestamp>
  ));

storiesOf("Toast", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Toast
      color={select("Color", Object.keys(colors), "accentGreen")}
      icon={select("Icon", Object.keys(Icon), "Checkmark")}
      visible={boolean("Visible", true)}
      direction={select("Direction", {
        top: "Top",
        bottom: "Bottom",
      }, "bottom")}
    >
      {text("Text", "Added to Watch Later")}
    </Toast>
  ));

storiesOf("Tooltip", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Tooltip
      label="Mouseover me"
      flyout={{
        arrow: "down",
        size: "medium",
        removePadding: false,
        shadow: "large",
        style: {
          bottom: "40px",
          left: 0,
          position: "absolute",
        },
      }}
    >
      Tooltip content
    </Tooltip>
  ));

storiesOf("Tour itinerary", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <TourItinerary
      itinerary={data.tour.itinerary}
      link="/"
    />
  ));

storiesOf("Travel alert", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <TravelAlert>
      {text("Text", `The US Center for Disease Control <a href="http://www.cdc.gov/zika/geo/active-countries.html">has issued a travel alert suggesting that pregnant women postpone travel to the Bahamas due to the presence of the zika virus</a>.`)}
    </TravelAlert>
  ));

storiesOf("Type selector", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <TypeSelector
        title="Activities"
        menuItems={[
          { item: "Hotels", slug: "#" },
          { item: "Restaurants", slug: "#" },
          { item: "Sights", slug: "#" },
          { item: "Entertainment", slug: "#" },
          { item: "Activities", slug: "#" },
          { item: "Tours", slug: "#" },
          { item: "Articles", slug: "#" },
          { item: "News", slug: "#" },
        ]}
      />
    </StyleRoot>
  ));

storiesOf("User profile header", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <UserProfileHeader
      avatarSrc={data.avatar.rizzo}
      name="Rizzo the Rat"
      subtitle="By air, land and sea"
      location="Ottawa, ON"
    />
  ));

storiesOf("Video embed", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <VideoEmbed
        videoId={select("Video ID", ["5363317250001", "5184494924001"], "5363317250001")}
        autoplay={boolean("Autoplay", false)}
      />
    </StyleRoot>
  ));
