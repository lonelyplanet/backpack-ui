import React from "react";
import { StyleRoot } from "radium";
import "leaflet/dist/leaflet.css";
import { storiesOf, action } from "@kadira/storybook";
import { withKnobs, text, boolean, number, array, object, select } from "@kadira/storybook-addon-knobs";
import data from "./data.json";
import Colors from "./Colors";
import Amenities from "../src/components/amenities";
import ArticlePaginationItem from "../src/components/articlePaginationItem";
import ArticlePaginationNav from "../src/components/articlePaginationNav";
import ArticlePreview from "../src/components/articlePreview";
import Author from "../src/components/author";
import AuthorName from "../src/components/authorName";
// Availability
import Bookmark from "../src/components/bookmark";
import Breadcrumbs from "../src/components/breadcrumbs";
import Button from "../src/components/button";
import Calendar from "../src/components/calendar";
import Callout from "../src/components/callout";
import CalloutLink from "../src/components/calloutLink";
import CategoryLabel from "../src/components/categoryLabel";
import CategoryLabelLink from "../src/components/categoryLabelLink";
import Checkbox from "../src/components/form/checkbox";
import Container from "../src/components/container";
// ContactBar
// ContentBlock
// ContentHeader
// ContentSectionList
// Decoration
import DotLoader from "../src/components/dotLoader";
import Dropdown from "../src/components/dropdown";
import EditLink from "../src/components/editLink";
import ExpandButton from "../src/components/expandButton";
import FeaturedArticle from "../src/components/featuredArticle";
import Flyout from "../src/components/flyout";
import GridColumn from "../src/components/gridColumn";
import GridRow from "../src/components/gridRow";
import Heading from "../src/components/heading";
import Icons from "./icons";
import IconButton from "../src/components/iconButton";
import IconCallout from "../src/components/iconCallout";
import IconCalloutGroup from "../src/components/iconCalloutGroup";
import ImageCarousel from "../src/components/imageCarousel";
// ImageGallery
import ImageHero from "../src/components/imageHero";
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
import Logo from "../src/components/logo";
import MapMarker from "../src/components/mapMarker";
// MobileToolbar
// Modal
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
import Placeholder from "../src/components/placeholder";
import PoiPaginator from "../src/components/poiPaginator";
// Price
import Profile from "../src/components/profile";
import PromotedGuidebook from "../src/components/promotedGuidebook";
import ProviderLogo from "../src/components/providerLogo";
import Rating from "../src/components/rating";
import RecommendedArticles from "../src/components/recommendedArticles";
import RelatedTour from "../src/components/relatedTour";
import ReviewedBadge from "../src/components/reviewedBadge";
import SectionalNav from "../src/components/sectionalNav";
import Select from "../src/components/form/select";
import ShareMenu from "../src/components/shareMenu";
import SocialIconButton from "../src/components/socialIconButton";
import SocialShare from "../src/components/socialShare";
import SocialShareContainer from "../src/components/socialShareContainer";

// SidebarSection
import SightsListItem from "../src/components/sightsListItem";
import SponsorLabel from "../src/components/sponsorLabel";
import StaticMap from "../src/components/staticMap";
import Strapline from "../src/components/strapline";
import Tag from "../src/components/tag";
import TagList from "../src/components/tagList";
// Takeover
import Timestamp from "../src/components/timestamp";
import Tooltip from "../src/components/tooltip";
import TourItinerary from "../src/components/tourItinerary";
import TravelAlert from "../src/components/travelAlert";
import TypeSelector from "../src/components/typeSelector";

storiesOf("Styles", module)
  .addDecorator(withKnobs)
  .add("Colors", () => (
    <Colors />
  ));

storiesOf("Iconography", module)
  .addDecorator(withKnobs)
  .add("Icons", () => (
    <Icons />
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

storiesOf("Article pagination item", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ArticlePaginationItem
      headline={text("Title", "Ireland is set to have the world’s largest redwood forest outside of California")}
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
  ));

storiesOf("Article pagination nav", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <ArticlePaginationNav
      previousArticle={object("Previous article", {
        headline: "Ireland is set to have the world’s largest redwood forest outside of California",
        image: "https://s3.amazonaws.com/static-asset/backpack-ui/article-image.jpg",
        imageAlt: "Redwood forest in Ireland",
        href: "/",
        category: "Wildlife and nature",
      })}
      nextArticle={object("Next article", {
        headline: "See the gorgeous street art along Glasgow’s city centre mural center",
        image: "https://s3.amazonaws.com/static-asset/backpack-ui/article-image-alt.jpg",
        imageAlt: "Street art on the side of a building",
        href: "/",
        category: "Art and culture",
      })}
    />
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

storiesOf("Bookmark", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Bookmark />
  ));

storiesOf("Breadcrumbs", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Breadcrumbs
      links={data.breadcrumbs.links}
    />
  ));

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Primary", () => (
    <Button
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

storiesOf("Category label", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <CategoryLabel>
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
      value="5 star hotel"
      id="check"
      checked
    />
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
          avatar: "",
          url: "",
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
      <Newsletter />
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

storiesOf("Profile", module)
  .addDecorator(withKnobs)
  .add("Large, vertical", () => (
    <StyleRoot>
      <Profile
        name="Jane Doe"
        title="Lonely Planet Writer"
        avatar="//assets.staticlp.com/profiles/users/placeholders/large.png"
        profileUrl=""
        size="large"
        orientation="vertical"
      />
    </StyleRoot>
  ))
  .add("Small, horizontal", () => (
    <StyleRoot>
      <Profile
        name="Jane Doe"
        title="Lonely Planet Writer"
        avatar="//assets.staticlp.com/profiles/users/placeholders/large.png"
        profileUrl=""
        size="small"
        orientation="horizontal"
      />
    </StyleRoot>
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

storiesOf("Recommended articles", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <StyleRoot>
      <RecommendedArticles>
        <ArticlePreview
          title="New York’s most iconic buildings reimagined on deserted streets"
          paragraph={`A new exhibition in New York of the city’s most iconic
            buildings shows them in a new light, with the bustle of modern life
            stripped out. Photographer`}
          image="http://placehold.it/410x230"
          href="/"
          category="Art and culture"
          categoryHref="/"
        />

        <ArticlePreview
          title="Pull up a seat for David Attenborough’s Planet Earth II"
          paragraph={`Ten years after the BBC series, Planet Earth, captivated a
            global audience of over half a billion people, Planet Earth II is
            coming to our TV screens, narrated once`}
          image="http://placehold.it/410x230"
          href="/"
          category="Wildlife and nature"
          categoryHref="/"
        />
      </RecommendedArticles>
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

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Select options={array("Options", ["USA", "France", "Spain"])} />
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

storiesOf("Tag", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Tag
      label={text("Text", "The Americas")}
      slug={text("URL slug", "/americas")}
    />
  ));

storiesOf("Tag list", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <TagList
      tags={[
        { label: "The Americas", slug: "/americas" },
        { label: "World", slug: "/world" },
        { label: "Asia & the Pacific", slug: "/asia-pacific" },
        { label: "Europe", slug: "/europe" },
        { label: "Middle East & Africa", slug: "/middle-east-africa" },
        { label: "Editor's pick", slug: "/editors-pick" },
      ]}
    />
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
          { item: "Acitivities", slug: "#" },
          { item: "Tours", slug: "#" },
          { item: "Articles", slug: "#" },
          { item: "News", slug: "#" },
        ]}
      />
    </StyleRoot>
  ));
