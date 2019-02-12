import React from "react";
import PropTypes from "prop-types";
import { StyleRoot } from "radium";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-photoswipe/lib/photoswipe.css";
import "rc-slider/assets/index.css";
import "react-dates/lib/css/_datepicker.css";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object,
  select,
  color,
  date,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import moment from "moment";
import data from "./data.json";
import Center from "./center";
import Colors from "./Colors";
import DesignTokens from "./designTokens";
import Fonts from "./fonts";
import Typography from "./typography";
import {
  Accordion,
  AccordionItem,
} from "../src/components/accordion";
import Ad from "../src/components/ad";
import AlbumThumbnailImage from "../src/components/albumThumbnailImage";
import Amenities from "../src/components/amenities";
import ArticleAuthor from "../src/components/articleAuthor";
import ArticlePaginationItem from "../src/components/articlePaginationItem";
import ArticlePaginationNav from "../src/components/articlePaginationNav";
import ArticlePreview from "../src/components/articlePreview";
import Author from "../src/components/author";
import AuthorName from "../src/components/authorName";
import Avatar from "../src/components/avatar";
import AvatarMarker from "../src/components/avatarMarker";
import AvatarUpload from "../src/components/avatarUpload";
import BookmarkButton from "../src/components/bookmarkButton";
import BookmarkButtonAlt from "../src/components/bookmarkButtonAlt";
import BookmarkListAuthor from "../src/components/bookmarkListAuthor";
import BookmarkListHeader from "../src/components/bookmarkListHeader";
import BookmarkListMenu from "../src/components/bookmarkListMenu";
import BookmarkListMenuOption from "../src/components/bookmarkListMenu/option.jsx";
import Breadcrumbs from "../src/components/breadcrumbs";
import BulletDescription from "../src/components/bulletDescription";
import Button from "../src/components/button";
import Calendar from "../src/components/calendar";
import Callout from "../src/components/callout";
import CalloutLink from "../src/components/calloutLink";
import CardBasic from "../src/components/cardBasic";
import CardPrice from "../src/components/cardPrice";
import CardShelfVideo from "../src/components/cardShelfVideo";
import CardShelfVideoSlider from "../src/components/cardShelfVideoSlider";
import CardShelfVideoSwiper from "../src/components/cardShelfVideoSwiper";
import CardVideo from "../src/components/cardVideo";
import CardBook from "../src/components/cardBook";
import CategoryLabel from "../src/components/categoryLabel";
import CategoryLabelLink from "../src/components/categoryLabelLink";
import Checkbox from "../src/components/checkbox";
import Container from "../src/components/container";
import ContentHeader from "../src/components/contentHeader";
import DateRange, { DeveloperNote as DateRangeDeveloperNote} from "../src/components/form/daterange";
import Dialog from "../src/components/dialog";
import DisclaimerText from "../src/components/disclaimerText";
import DotLoader from "../src/components/dotLoader";
import Dropdown from "../src/components/dropdown";
import EditLink from "../src/components/editLink";
import ErrorMessages from "../src/components/form/errorMessages";
import ExpandButton from "../src/components/expandButton";
import FeaturedArticle from "../src/components/featuredArticle";
import Flag from "../src/components/flag";
import { FlightSearchWidget, NoFlightResults } from "../src/components/flightSearchWidget";
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
import ImageHero from "../src/components/imageHero";
import Input from "../src/components/input";
import FormInput from "../src/components/form/input";
import IconRevealButton from "../src/components/iconRevealButton";
import InteractiveMap from "../src/components/interactiveMap";
import ItalicText from "../src/components/italicText";
import Lede from "../src/components/lede";
import ListButton from "../src/components/listButton";
import ListItemBookmark from "../src/components/listItemBookmark";
import ListItemBookmarkEntry from "../src/components/listItemBookmarkEntry";
import ListItemNews from "../src/components/listItemNews";
import Loading from "../src/components/loading";
import LocationLabel from "../src/components/locationLabel";
import Logo from "../src/components/logo";
import MapMarker from "../src/components/mapMarker";
import Masthead from "../src/components/masthead";
import MastheadSlider from "../src/components/mastheadSlider";
import Modal from "../src/components/modal";
import ModalLogIn from "../src/components/modalLogIn";
import MoreLink from "../src/components/moreLink";
import {
  MultiStep,
  MultiStepWrapper,
} from "../src/components/multiStep";
import MultiStepLogin from "../src/components/multiStep/multiStepLogin";
import Narrative from "../src/components/narrative";
import {
  Navigation,
  NavigationTab,
} from "../src/components/navigation";
import NewsArticleAuthor from "../src/components/newsArticleAuthor";
import NewsList from "../src/components/newsList";
import Newsletter from "../src/components/newsletter";
import NoResults from "../src/components/noResults";
import NumberList from "../src/components/numberList";
import NumberMarker from "../src/components/numberMarker";
import PageHeader from "../src/components/pageHeader";
import PaginatorButton from "../src/components/paginatorButton";
import PhotoGallery from "../src/components/photoGallery";
import Placeholder from "../src/components/placeholder";
import PoiPaginator from "../src/components/poiPaginator";
import PriceRangeLabel from "../src/components/priceRangeLabel";
import ProfileHeader from "../src/components/profileHeader";
import PromotedGuidebook from "../src/components/promotedGuidebook";
import ProviderLogo from "../src/components/providerLogo";
import Rating from "../src/components/rating";
import Range from "../src/components/form/range";
import RecommendedArticles from "../src/components/recommendedArticles";
import RelatedTour from "../src/components/relatedTour";
import ReviewedBadge from "../src/components/reviewedBadge";
import ScrollIndicator from "../src/components/scrollIndicator";
import SectionalNav from "../src/components/sectionalNav";
import SectionHeader from "../src/components/sectionHeader";
import Select from "../src/components/form/select";
import {
  SettingBlockSection,
  SettingBlockListItemWrapper,
} from "../src/components/settingBlock";
import SettingBlockCheckbox from "../src/components/settingBlockCheckbox";
import SettingBlockAction from "../src/components/settingBlockAction";
import SettingBlockAccordion from "../src/components/settingBlockAccordion";
import SettingBlockTextArea from "../src/components/settingBlockTextArea";
import SettingBlockInput from "../src/components/settingBlockInput";
import FormTextArea from "../src/components/form/textarea";
import ToggleController from "../src/utils/toggleController";
import ShareMenu from "../src/components/shareMenu";
import ShareSettings from "../src/components/shareMenu/shareSettings";
import Slide from "../src/components/slide";
import SocialIconButton from "../src/components/socialIconButton";
import SocialLoginButton from "../src/components/socialLoginButton";
import SocialShare from "../src/components/socialShare";
import SocialShareContainer from "../src/components/socialShareContainer";
import SightsListItem from "../src/components/sightsListItem";
import SponsorLabel from "../src/components/sponsorLabel";
import SpotlightZone from "../src/components/spotlightZone";
import StaticMap from "../src/components/staticMap";
import Strapline from "../src/components/strapline";
import Switch from "../src/components/switch";
import TabbedNav from "../src/components/tabbedNav";
import {
  Tabs,
  Tab,
} from "../src/components/tabs";
import Tag from "../src/components/tag";
import TagList from "../src/components/tagList";
import TallCarousel from "../src/components/tallCarousel";
import {
  TextAccent,
  TextBodyArticle,
  TextBodySmall,
  TextHeading,
  TextSuper,
  TextUppercase,
} from "../src/components/text";
import TextBubble from "../src/components/textBubble";
import Textarea from "../src/components/textarea";
import ThumbnailList from "../src/components/thumbnailList";
import ThumbnailListItem from "../src/components/thumbnailListItem";
import TileGrid from "../src/components/tileGrid";
import TileVideo from "../src/components/tileVideo";
import TileVideoPoster from "../src/components/tileVideoPoster";
import Timestamp from "../src/components/timestamp";
import Toast from "../src/components/toast";
import Tooltip from "../src/components/tooltip";
import TourItinerary from "../src/components/tourItinerary";
import TravelAlert from "../src/components/travelAlert";
import {
  Typeahead,
  TypeaheadTokenizer,
} from "../src/components/typeahead";
import TypeSelector from "../src/components/typeSelector";
import {
  VideoEmbed,
  VideoFeatured,
  VideoInfo,
  VideoPlaylist,
  VideoPlaylistWithSlider,
  VideoPopout,
  VideoSlider,
  VideoUpNext,
} from "../src/components/video";
import WatchLaterModal from "../src/components/watchLater/watchLaterModal";
import colorTokens from "../src/styles/colors";

class ModalWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.function,
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

storiesOf("Styles", module)
  .addDecorator(withKnobs)
  .add("Design tokens", () => (
    <DesignTokens />
  ))
  .add("Colors", () => (
    <Colors />
  ))
  .add("Fonts", () => (
    <Fonts />
  ))
  .add("Typography", () => (
    <Typography />
  ))
  .add("Icons", () => (
    <Icons />
  ));

storiesOf("Ads", module)
  .addDecorator(withKnobs)
  .add("Ad", () => (
    <StyleRoot>
      <Center>
        <Ad
          id={text("ID", "backpackAdIdentifier")}
          framed={boolean("Framed", false)}
          className={text("Class Name", "")}
        />
      </Center>
    </StyleRoot>
  ))
  .add("Ad Wrapper", () => (
    <StyleRoot>
      <Center>
        <Ad
          id={text("ID", "backpackAdIdentifier")}
          framed={boolean("Framed", true)}
          className={text("Class Name", "")}
        >
          <div>Add Children to the Ad to use the Ad Component as a Wrapper.</div>
        </Ad>
      </Center>
    </StyleRoot>
  ));

storiesOf("Authors", module)
  .addDecorator(withKnobs)
  .add("Article author", () => (
    <ArticleAuthor
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      avatarSrc={text("Avatar image URL", data.avatar.default)}
      orientation={select("Orientation", {
        vertical: "Vertical",
        horizontal: "Horizontal",
      }, "vertical")}
    />
  ))
  .add("Author", () => (
    <Author
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      alignment={select("Alignment", ["left", "center", "right"], "left")}
    />
  ))
  .add("Bookmark list author", () => (
    <BookmarkListAuthor
      href={text("URL", "/")}
      imageSrc={text("Image source", data.avatar.default)}
    >
      {text("Name", "Alex Butler")}
    </BookmarkListAuthor>
  ))
  .add("News article author", () => (
    <NewsArticleAuthor
      name={text("Name", "Alex Butler")}
      title={text("Title", "Global news reporter")}
      absoluteTime={text("Absolute time", "2017-01-17")}
      relativeTime={text("Relative time", "3 days ago")}
      theme={select("Theme", ["light", "dark"], "light")}
    />
  ));

storiesOf("Avatars", module)
  .addDecorator(withKnobs)
  .add("Avatar", () => (
    <Avatar
      src={text("Image source", data.avatar.rizzo)}
      alt={text("Alternate text", "Rizzo")}
      size={select("Size", [24, 40, 48, 80, 104], 80)}
      href={text("URL", "")}
    />
  ))
  .add("Avatar marker (similar to bookmark list author)", () => (
    <AvatarMarker
      href={text("URL", "/profile")}
      src={text("Avatar URL", "http://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png")}
      username={text("Username", "Rizzo the Rat")}
    />
  ));

storiesOf("Buttons", module)
  .addDecorator(withKnobs)

  // Button
  .add("Button - primary", () => (
    <Center backgroundColor="white">
      <Button
        color={select("Color", ["blue", "white", "gray", "red", "transparent"], "blue")}
        size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
        border={boolean("Border", true)}
        disabled={boolean("Disabled", false)}
        full={boolean("Full width", false)}
        rounded={boolean("Rounded", false)}
        onClick={action("clicked")}
        qaHook={text("qaHook", "QA hook")}
      >
        {text("Text", "Hello Button")}
      </Button>
    </Center>
  ))
  .add("Button - secondary", () => (
    <Center backgroundColor="white">
      <Button
        color="white"
        size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
        border={boolean("Border", true)}
        disabled={boolean("Disabled", false)}
        full={boolean("Full width", false)}
        rounded={boolean("Rounded", false)}
        onClick={action("clicked")}
        qaHook={text("qaHook", "QA hook")}
      >
        {text("Text", "Hello Button")}
      </Button>
    </Center>
  ))

  // Bookmark button
  .add("Bookmark button - default", () => (
    <Center backgroundColor="white">
      <BookmarkButton
        id={text("ID", null)}
        className={text("Classname", null)}
        onClick={action("Bookmark clicked")}
        marked={boolean("Marked", false)}
      />
    </Center>
  ))
  .add("Bookmark button - alternate", () => (
    <Center backgroundColor="white">
      <BookmarkButtonAlt
        id={text("ID", null)}
        className={text("Classname", null)}
        onClick={action("Bookmark clicked")}
        marked={boolean("Marked", false)}
      />
    </Center>
  ))
  .add("Bookmark button - custom button", () => (
    <Center backgroundColor="white">
      <BookmarkButton
        id={text("ID", null)}
        className={text("Classname", null)}
        onClick={action("Bookmark clicked")}
        marked={boolean("Marked", false)}
        button={
          <Button
            color="gray"
            size="small"
            border
            rounded
            customStyles={{
              alignItems: "center",
              display: "inline-flex",
              paddingBottom: "0.5em",
              paddingLeft: "1.3em",
              paddingRight: "1.3em",
              paddingTop: "0.7em",
              textTransform: "capitalize",
            }}
          >
            {true ?
              <Icon.BookmarkActive
                style={{
                  height: "16px",
                  marginBottom: "3px",
                  marginRight: "4px",
                  width: "auto",
                }}
              /> :
              <Icon.Bookmark
                style={{
                  height: "16px",
                  width: "auto",
                  marginRight: "4px",
                  marginBottom: "3px",
                }}
              />
            }
            Save
          </Button>
        }
      />
    </Center>
  ))

  // Expand button
  .add("Expand button", () => (
    <ExpandButton label={text("Label", "Open")} />
  ))

  //  Icon button
  .add("Icon button", () => (
    <Center backgroundColor="white">
      <IconButton
        iconName={select("Icon name", [
          "Bookmark",
          "BookmarkActive",
          "BookmarkAlt",
          "BookmarkAltActive",
          "ChevronLeft",
          "ChevronRight",
          "ClockOutline",
          "Ellipsis",
          "Play",
          "Share",
        ], "Share")}
        label={text("Label", "Share this")}
        id={text("ID", null)}
        className={text("Classname", null)}
        href={text("href", null)}
        onClick={action("onClick action")}
        size={select("Size", [32, 40, 56], 32)}
        owns={text("Aria owns", null)}
        backgroundColor={text("Background color", null)}
        hoverBackgroundColor={text("Hover background color", null)}
        hoverBackgroundScale={number("Hover background scale", null)}
        color={text("Color", null)}
        hoverColor={text("Hover color", null)}
        border={boolean("Border", false)}
        borderWidth={text("Border width", "1px")}
        borderColor={text("Border color", "currentColor")}
        shadow={boolean("Shadow", false)}
        transitionDuration={text("Transition duration", "400ms")}
      />
    </Center>
  ))

  // Icon reveal button
  .add("Icon reveal button", () => (
    <StyleRoot>
      <Center>
        <IconRevealButton
          id={text("ID", null)}
          icon={<Icon.Share />}
          label={text("Label", "Label")}
          className={text("Classname", null)}
          onClick={action("Bookmark clicked")}
        />
      </Center>
    </StyleRoot>
  ))

  // List button
  .add("List button", () => (
    <Center>
      <ListButton
        id={text("ID", null)}
        className={text("Classname", null)}
        onClick={action("List Button clicked")}
        icon={select("Icon", [
          "Bookmark",
          "BookmarkActive",
          "BookmarkAlt",
          "BookmarkAltActive",
          "Ellipsis",
          "Map",
        ], "Ellipsis")}
      />
    </Center>
  ))

  // Paginator button
  .add("Paginator button", () => (
    <PaginatorButton
      direction={select("Arrow direction", ["up", "down", "left", "right"], "up")}
      arrow={select("Arrow style", ["chevron", "triangle"], "chevron")}
      size={select("Size", ["medium", "small"], "medium")}
      shadow={select("Shadow", ["loose", "tight"], "loose")}
      color={select("Color", ["", "blue"], "")}
      onClick={action("PaginatorButton clicked")}
    />
  ))

  // Social icon button
  .add("Social icon button - Email", () => (
    <SocialIconButton
      href="mailto:?subject=&body="
      onClick={action("Email clicked")}
      network="email"
    />
  ))
  .add("Social icon button - Facebook", () => (
    <SocialIconButton
      href="https://www.facebook.com/sharer/sharer.php?u="
      onClick={action("Facebook clicked")}
      network="facebook"
    />
  ))
  .add("Social icon button - Facebook Messenger", () => (
    <SocialIconButton
      href="fb-messenger://share/?link="
      onClick={action("Facebook Messenger clicked")}
      network="facebookMessenger"
    />
  ))
  .add("Social icon button - Reddit", () => (
    <SocialIconButton
      href="http://www.reddit.com/submit/?url="
      onClick={action("Reddit clicked")}
      network="reddit"
    />
  ))
  .add("Social icon button - Twitter", () => (
    <SocialIconButton
      href="https://twitter.com/intent/tweet?text=&url=&via="
      onClick={action("Twitter clicked")}
      network="twitter"
    />
  ))
  .add("Social icon button - WeChat", () => (
    <SocialIconButton
      onClick={action("WeChat clicked")}
      network="weChat"
    />
  ))

  // Social login button
  .add("Social login button", () => (
    <SocialLoginButton
      iconName={select("Icon Name", [
        "FacebookBlockColor",
        "GoogleColor",
        "TwitterColor",
      ], "FacebookBlockColor")}
      onClick={action("Handle Log In")}
    >
      {text("Text", "Continue with Facebook")}
    </SocialLoginButton>
  ))

  // Tag
  .add("Tag - anchor", () => (
    <Tag
      href={text("URL", "#")}
      selected={boolean("Selected", false)}
    >
      {text("Text", "The Americas")}
    </Tag>
  ))
  .add("Tag - button", () => (
    <Tag
      onClick={action("Tag clicked")}
      selected={boolean("Selected", false)}
    >
      {text("Text", "The Americas")}
    </Tag>
  ))
  .add("Tag - no click", () => (
    <Tag selected={boolean("Selected", false)}>
      {text("Text", "The Americas")}
    </Tag>
  ));

storiesOf("Callouts", module)
  .addDecorator(withKnobs)
  .add("Callout - book", () => (
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
  .add("Callout - activity", () => (
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
  ))
  .add("Icon callout", () => (
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

storiesOf("Cards", module)
  .addDecorator(withKnobs)
  .add("Card - basic", () => (
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
  .add("Card - video", () => (
    <StyleRoot>
      <div style={{ width: "400px", padding: "32px" }}>
        <CardVideo
          heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
          bullets={array("Bullets", ["On The Road", "E.01"])}
          runtime={number("Video runtime", 129365)}
          mobile={boolean("Mobile", false)}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          href={text("URL", "#")}
          layout={select("Layout", ["card", "tile"], "card")}
          theme={select("Theme", ["light", "dark"], "light")}
          spacing={select("Spacing", ["normal", "compact"], "normal")}
          aspectRatio={select("Aspect ratio", ["video", "poster"], "video")}
        />
      </div>
    </StyleRoot>
  ))
  .add("Card - book", () => (
    <StyleRoot>
      <div style={{ width: "500px", padding: "32px" }}>
        <CardBook
          title={text("Title", "Book or activity title")}
          subtitle={text("Subtitle", "Ages 0-0")}
          shopLinkText={text("Link text", "Associated bookshop link")}
          shopLinkUrl={text("Link url", "https://www.lonelyplanet.com")}
          imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
          aspectRatio={select("Aspect ratio", ["portrait", "landscape"], "portrait")}
          previewLink="https://www.lonelyplanet.com"
          downloadLink="https://www.lonelyplanet.com"
          shareText="test"
          shareUrl="https://www.lonelyplanet.com"
          hideShareButton={boolean("Hide share button", false)}
          hideBorder={boolean("Hide border", false)}
        />
      </div>
    </StyleRoot>
  ))
  .add("Card - price", () => (
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

storiesOf("Carousels", module)
  .addDecorator(withKnobs)
  .add("Image carousel", () => (
    <ImageCarousel
      images={[
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-1.770x430.jpg",
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-2.770x430.jpg",
        "https://s3.amazonaws.com/static-asset/backpack-ui/scotland-3.770x430.jpg",
      ]}
      imageSize={[770, 430]}
      index={null}
    />
  ))
  .add("Masthead slider", () => {
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
      graphic: "https://s3.amazonaws.com/static-asset/op-video-sync/assets/gopro_graphic_test.png",
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
  })
  .add("Tall Carousel", () => (
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

storiesOf("Controls", module)
  .addDecorator(withKnobs)
  .add("Avatar upload", () => (
    <AvatarUpload
      src={text("Image source", data.avatar.rizzo)}
    />
  ))
  .add("Calendar", () => (
    <Calendar />
  ))
  .add("Checkbox", () => (
    <Checkbox
      value={text("Value", "Some value")}
      id={text("ID", "check")}
      name={text("Name", "check")}
      label={text("Label", "Checkbox")}
      checked={boolean("Checked", true)}
      rounded={boolean("Rounded", false)}
      removeBorder={boolean("Remove border", false)}
      size={select("Size", [16, 24, 32], 16)}
      onClick={action(event)}
    />
  ))
  .add("Date range - without selection", () => (
    <React.Fragment>
      <DateRange
        id="testDateRange"
        numberOfMonths={number("Number of Months", 1)}
        startDatePlaceholderText={text("Start Date Placeholder", "Check-in")}
        endDatePlaceholderText={text("End Date Placeholder", "Check-out")}
        startDate={object("Start Date", null)}
        endDate={object("End Date", null)}
        lastSelectableDate={object("Last selectable date", moment().add(365, "days"))}
        noBorder={boolean("noBorder", false)}
        withFullScreenPortal={boolean("withFullScreenPortal", false)}
        soldOut={boolean("soldOut", false)}
        onDatesChange={action(event)}
        onFocusChange={action(event)}
      />
      <DateRangeDeveloperNote />
    </React.Fragment>
  ))
  .add("Date range - with just startDate selected", () => (
    <React.Fragment>
      <DateRange
        id="testDateRange"
        numberOfMonths={number("Number of Months", 1)}
        startDatePlaceholderText={text("Start Date Placeholder", "Check-in")}
        endDatePlaceholderText={text("End Date Placeholder", "Check-out")}
        startDate={object("Start Date", moment().add(1, "days"))}
        endDate={object("End Date", null)}
        noBorder={boolean("noBorder", false)}
        withFullScreenPortal={boolean("withFullScreenPortal", false)}
        soldOut={boolean("soldOut", false)}
        onDatesChange={action(event)}
        onFocusChange={action(event)}
      />
      <DateRangeDeveloperNote />
    </React.Fragment>
  ))
  .add("Date range - with selection", () => (
    <React.Fragment>
      <DateRange
        id="testDateRange"
        numberOfMonths={number("Number of Months", 1)}
        startDatePlaceholderText={text("Start Date Placeholder", "Check-in")}
        endDatePlaceholderText={text("End Date Placeholder", "Check-out")}
        startDate={object("Start Date", moment().add(35, "days"))}
        endDate={object("End Date", moment().add(36, "days"))}
        noBorder={boolean("noBorder", false)}
        withFullScreenPortal={boolean("withFullScreenPortal", false)}
        soldOut={boolean("soldOut", false)}
        onDatesChange={action(event)}
        onFocusChange={action(event)}
      />
      <DateRangeDeveloperNote />
    </React.Fragment>
  ))
  .add("Dropdown", () => (
    <Dropdown
      options={array("Options", ["AUD", "EUR", "GBP", "USD"])}
      defaultValue={text("Default value", "USD")}
      onChange={action(event)}
    />
  ))
  .add("Input", () => (
    <Center backgroundColor="white">
      <Input />
    </Center>
  ))
  .add("Range", () => (
    <Center backgroundColor="white" grow>
      <Range
        onAfterChange={action(event)}
        min={0}
        max={10}
        defaultValue={[0, 10]}
        label="Range control"
      />
    </Center>
  ))
  .add("Range - price", () => (
    <Center backgroundColor="white" grow>
      <Range
        onAfterChange={action(event)}
        min={0}
        max={10}
        defaultValue={[0, 10]}
        label="Range control"
        price
      />
    </Center>
  ))
  .add("Range - time", () => (
    <Center backgroundColor="white" grow>
      <Range
        onAfterChange={action(event)}
        min={0}
        max={10}
        defaultValue={[0, 10]}
        label="Range control"
        time
      />
    </Center>
  ))
  .add("Select - array of string", () => (
    <Center backgroundColor="white">
      <Select
        id={text("ID", "select-control")}
        options={array("Options", ["USA", "France", "Spain"])}
        label={text("Label", "Select label")}
        name={text("Name", "select-control")}
        defaultValue={text("Value", "")}
        required={boolean("Required", false)}
        size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
        theme={select("Theme", ["base", "light", "dark", "inputGroup"], "base")}
        noBorder={boolean("No border?", false)}
        style={{}}
        onChange={action(event)}
      />
    </Center>
  ))
  .add("Select - array of object", () => (
    <Center backgroundColor="white">
      <Select
        id={text("ID", "select-control")}
        options={array("Options", [
          { label: "USA", value: "usa" },
          { label: "France", value: "france" },
          { label: "Spain", value: "spain" },
        ])}
        label={text("Label", "Select label")}
        name={text("Name", "select-control")}
        defaultValue={text("Value", "")}
        required={boolean("Required", false)}
        size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
        theme={select("Theme", ["base", "light", "dark", "inputGroup"], "base")}
        noBorder={boolean("No border?", false)}
        style={{}}
        onChange={action(event)}
      />
    </Center>
  ))
  .add("Switch", () => (
    <Center backgroundColor="white">
      <Switch
        id={text("ID", "privacy-control")}
        name={text("Name", "privacy_control")}
        className={text("Classname", null)}
        value={text("Value", "private")}
        checked={boolean("Checked", false)}
        onClick={action("Switch toggled")}
      />
    </Center>
  ))
  .add("Textarea - default", () => (
    <Center backgroundColor="white">
      <Textarea />
    </Center>
  ))
  .add("Textarea - autogrow", () => (
    <Center backgroundColor="white">
      <Textarea
        maxLines={number("Maximum lines", 3)}
        disableEnter={boolean("Disable enter", false)}
        autogrow
      />
    </Center>
  ))
  .add("Typeahead - default", () => (
    <Typeahead
      options={data.typeaheadPlaces}
      placeholder="Select a place to go"
    />
  ))
  .add("Typeahead - tokenizer", () => (
    <TypeaheadTokenizer
      options={data.travelInterests}
      placeholder="Select your travel interests"
    />
  ));

storiesOf("Images", module)
  .addDecorator(withKnobs)
  .add("Album thumbnail image - default", () => (
    <Center>
      <AlbumThumbnailImage />
    </Center>
  ))
  .add("Album thumbnail image - plus icon", () => (
    <Center>
      <AlbumThumbnailImage icon="Plus" />
    </Center>
  ))
  .add("Album thumbnail image - image", () => (
    <Center>
      <AlbumThumbnailImage
        src={text("Source", "https://lonelyplanetwp.imgix.net/2017/07/GettyImages-647005142_high_1-360ee8e327d5.jpg?crop=entropy&fit=crop&h=96&sharp=10&vib=20&w=104")}
        alt={text("Alternate text", "")}
      />
    </Center>
  ))
  .add("Image hero", () => (
    <ImageHero
      image={text("Image URL", "https://s3.amazonaws.com/static-asset/backpack-ui/ImageHero.770x430.jpg")}
      imageSize={array("Size", [770, 430])}
    />
  ))
  .add("Placeholder", () => (
    <Placeholder title={text("Title", "The best place in the world")} />
  ));

storiesOf("Links", module)
  .addDecorator(withKnobs)
  .add("Callout link - default", () => (
    <CalloutLink href="/">
      {text("Text", "More recommendations")}
    </CalloutLink>
  ))
  .add("Callout link - overlay", () => (
    <div style={{ backgroundColor: "#000", padding: "20px" }}>
      <CalloutLink href="/" overlay>
        {text("Text", "More recommendations")}
      </CalloutLink>
    </div>
  ))
  .add("Edit link", () => (
    <EditLink url={text("URL", "/")} />
  ))
  .add("More link - anchor", () => (
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
  .add("More link - button", () => (
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
  .add("More link - span", () => (
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

storiesOf("List items", module)
  .addDecorator(withKnobs)
  .add("List item - bookmark - default", () => (
    <StyleRoot>
      <ListItemBookmark
        name={text("Name", "Favorites")}
        thumbnail={text("Thumbnail", "")}
        entriesCount={5}
        visibility={select("Visibility", ["Private", "Public"], "Private")}
        large={boolean("Large", false)}
        hideDetail={boolean("Hide details", false)}
      />
    </StyleRoot>
  ))
  .add("List item - bookmark - with onClick event", () => (
    <StyleRoot>
      <ListItemBookmark
        name={text("Name", "Places to see in Nashville")}
        onClick={action("List item clicked")}
        checked={boolean("Checked", false)}
        thumbnail={text("Thumbnail", "")}
        entriesCount={5}
        visibility={select("Visibility", ["Private", "Public"], "Private")}
        large={boolean("Large", false)}
        hideDetail={boolean("Hide details", false)}
      />
    </StyleRoot>
  ))
  .add("List item - bookmark - as “add item” button", () => (
    <StyleRoot>
      <ListItemBookmark
        name={text("Name", "New item")}
        onClick={action("Add item clicked")}
        large={boolean("Large", false)}
        hideDetail={boolean("Hide details", true)}
        addItem={boolean("Add item UI", true)}
      />
    </StyleRoot>
  ))
  .add("List item - bookmark entry", () => (
    <StyleRoot>
      <ListItemBookmarkEntry
        name={text("Name", "POI Name")}
        category={text("Category", "Category")}
        city={text("City", "City")}
        priceRange={select("Range", ["$", "$$", "$$$"], "$")}
        topChoice={boolean("Top choice", false)}
        note={text("Note", "This is where a nice little note goes.")}
        large={boolean("Large", false)}
      />
    </StyleRoot>
  ))
  .add("List item - news", () => (
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
  ))
  .add("Sights list item - default", () => (
    <SightsListItem
      slug="/path/to/item"
      title="Zimbabwe"
      subtitle="Southern Africa"
      markerNumber={1}
    />
  ))
  .add("Sights list item - with Image", () => (
    <SightsListItem
      slug="/path/to/item"
      title="Zimbabwe"
      subtitle="Southern Africa"
      imgPath="https://s3.amazonaws.com/static-asset/backpack-ui/south-pole.80x60.jpg"
      markerNumber={1}
    />
  ));

storiesOf("Lists", module)
  .addDecorator(withKnobs)
  .add("News list - default", () => (
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
  .add("News list - small list items", () => (
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
  ))
  .add("Number list", () => (
    <NumberList list={data.numberList} />
  ));

storiesOf("Labels", module)
  .addDecorator(withKnobs)
  .add("Category label - default", () => (
    <CategoryLabel
      light={boolean("Light", false)}
    >
      {text("Text", "Art and culture")}
    </CategoryLabel>
  ))
  .add("Category label - link", () => (
    <CategoryLabelLink href={text("URL", "/")}>
      {text("Text", "Art and culture")}
    </CategoryLabelLink>
  ))
  .add("Flag", () => (
    <Flag>{text("Text", "Private")}</Flag>
  ))
  .add("Location label", () => (
    <LocationLabel>Ottawa, ON</LocationLabel>
  ))
  .add("Number marker", () => (
    <NumberMarker number={number("Number", 4)} />
  ))
  .add("Reviewed badge", () => (
    <ReviewedBadge />
  ))
  .add("Sponsor label", () => (
    <SponsorLabel>
      {text("Text", "Sponsored")}
    </SponsorLabel>
  ))
  .add("Text bubble", () => (
    <TextBubble>{text("Text", "44 mins")}</TextBubble>
  ));

storiesOf("Loaders", module)
  .addDecorator(withKnobs)
  .add("Loading", () => (
    <StyleRoot>
      <Center backgroundColor="white">
        <Loading />
      </Center>
    </StyleRoot>
  ))
  .add("Dot loader", () => (
    <StyleRoot>
      <Center backgroundColor="white">
        <DotLoader inline={boolean("Inline", false)} />
      </Center>
    </StyleRoot>
  ));

storiesOf("Flights Widget", module)
  .addDecorator(withKnobs)
  .add("Flight search widget", () => (
    <FlightSearchWidget
      depart={{
        airportCode: "BNA",
        city: "Nashville",
      }}
      arrive={{
        airportCode: "LAX",
        city: "Los Angeles",
      }}
      price={{
        amount: 600,
        currency: "USD",
      }}
      onClick={action("Flight search widget")}
    />
  ))
  .add("No Flight Results", () => (
    <StyleRoot>
      <NoFlightResults
        link={text("Url", "#")}
        destinationName={text("Destination Name")}
        children={text("Message", "We couldn't find any matching flights")}
      />
    </StyleRoot >
  ));

storiesOf("Lockups", module)
  .addDecorator(withKnobs)
  .add("Accordion", () => (
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
  ))
  .add("Article preview", () => (
    <ArticlePreview
      title={text("Title", "New York’s most iconic buildings reimagined on deserted streets")}
      paragraph={text("Paragraph", "A new exhibition in New York of the city’s most &ldquo;iconic&rdquo; buildings shows them in a new light, with the bustle of modern life stripped out. Photographer")}
      image={text("Image URL", "http://placehold.it/410x230")}
      imageAlt={text("Image Alt Text", "A new exhibition in New York of the city’s most iconic buildings.")}
      href={text("URL", "/")}
      category={text("Category name", "Art and culture")}
      categoryHref={text("Category URL", "/")}
      trackEventId={text("Tracking event id")}
      trackEventName={text("Tracking event name")}
      trackEventPosition={text("Tracking event position")}
    />
  ))
  .add("Bookmark list header", () => (
    <StyleRoot>
      <BookmarkListHeader
        profileHref={text("Profile URL", "/profile")}
        avatarSrc={text("Avatar URL", "http://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png")}
        username={text("Username", "Rizzo the Rat")}
        name={text("Title", "Europe Summer Highlights")}
        entriesCount={5}
        visibility={select("Visibility", ["Private", "Public"], "Private")}
      />
    </StyleRoot>
  ))
  .add("Breadcrumbs", () => (
    <Breadcrumbs
      links={data.breadcrumbs.links}
    />
  ))
  .add("Content header", () => (
    <ContentHeader
      title="Title"
      border="bottom"
    />
  ))
  .add("Featured article - default", () => (
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
  .add("Featured article - constrained", () => (
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
  ))
  .add("Icon callout group", () => (
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
  ))
  .add("Masthead", () => (
    <StyleRoot>
      <Masthead />
    </StyleRoot>
  ))
  .add("Page header", () => (
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
        stars={number("Stars", 0)}
      />
    </StyleRoot>
  ))
  .add("POI paginator", () => (
    <PoiPaginator
      title={text("Title", "Bademiya")}
      type={text("Type", "Fusion restaurant")}
      neighborhood={text("Neighborhood", "Hofburg")}
      place={text("Place", "Vienna")}
      topChoice={boolean("Top choice", false)}
    />
  ))
  .add("Profile header - default", () => (
    <ProfileHeader
      avatarSrc={text("Avatar URL", "https://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png")}
      name={text("Name", "Rizzo the Rat")}
      location={text("Location", "Ottawa, Ontario")}
      website={text("Website URL", "https://www.lonelyplanet.com")}
      intro={text("Introduction", `The very basic core of a woman’s living spirit is
        her passion for adventure. The joy of life comes from our encounters with new
        experiences, and hence there is no greater joy than to have an endlessly changing
        horizon.`)}
      interests={array("Interests", [
        "Family",
        "Shopping",
        "Adventure",
        "Art and architecture",
        "Food",
      ])}
      alignment={select("Alignment", {
        left: "Left",
        center: "Center",
      }, "center")}
    />
  ))
  .add("Profile header - with Markdown", () => (
    <ProfileHeader
      avatarSrc={text("Avatar URL", "https://img2.wikia.nocookie.net/__cb20111018235020/muppet/images/thumb/1/14/Rizzo11.png/300px-Rizzo11.png")}
      name={text("Name", "Rizzo the Rat")}
      location={text("Location", "Ottawa, Ontario")}
      website={text("Website URL", "https://www.lonelyplanet.com")}
      intro={text("Introduction", "# Heading \n* List item 1 \n* List item 2 \n* List item 3 \nThe very basic core of a woman’s living spirit is her passion for adventure. \n### Heading \nThe joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon.")}
      interests={array("Interests", [
        "Family",
        "Shopping",
        "Adventure",
        "Art and architecture",
        "Food",
      ])}
      alignment={select("Alignment", {
        left: "Left",
        center: "Center",
      }, "center")}
    />
  ))
  .add("Promoted guidebook", () => (
    <StyleRoot>
      <PromotedGuidebook
        title={text("Title", "Egypt travel guide")}
        url={text("URL", "https://shop.lonelyplanet.com/egypt/egypt-travel-guide-12/")}
        imageUrl={text("Image URL", "https://media.lonelyplanet.com/shop/images/9919-Egypt_travel_guide_-_12th_edition_Large.jpg")}
        price={object("Price", {
          usd: "27.99",
        })}
        description={text("Description", `In spite of political, financial and social
          turmoil, Egyptians remain  proud and defiant and are as
          welcoming as ever to visitors to their land.`)}
      />
    </StyleRoot>
  ))
  .add("Related tour", () => (
    <StyleRoot>
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
    </StyleRoot>
  ))
  .add("Section header - default", () => (
    <StyleRoot>
      <Center grow>
        <SectionHeader theme={select("Theme", ["default", "light"], "default")}>
          {text("title", "Top experiences in Vietnam")}
        </SectionHeader>
      </Center>
    </StyleRoot>
  ))
  .add("Section header - light", () => (
    <StyleRoot>
      <Center backgroundColor={colorTokens.textPrimary} grow>
        <SectionHeader theme={select("Theme", ["default", "light"], "light")}>
          {text("title", "Top experiences in Vietnam")}
        </SectionHeader>
      </Center>
    </StyleRoot>
  ))
  .add("Social share - using SocialShareContainer", () => (
    <SocialShareContainer
      text={text("Text", "Animal islands: seven places where creatures rule")}
      url={text("URL", "https://www.lonelyplanet.com/asia/travel-tips-and-articles/animal-islands-seven-places-where-creatures-rule")}
      headingText={text("Heading text", "Share this article:")}
    >
      {SocialShare}
    </SocialShareContainer>
  ))
  .add("Social share - using ShareSettings", () => (
    <Center backgroundColor="white">
      <StyleRoot>
        <ShareSettings
          shareContent={{
            text: "Animal islands: seven places where creatures rule",
            url: "https://www.lonelyplanet.com/asia/travel-tips-and-articles/animal-islands-seven-places-where-creatures-rule",
            description: "Wildlife watching is a tricky business. Days can be spent fruitlessly scanning the savannah for lions or holed up in a hide hoping to catch a glimpse of a rare bird. But for travellers with limited time (or patience), there are places where animals are not just easy to spot, they are impossible to miss.",
            twitterContent: "Wildlife watching is a tricky business @lonelyplanet http://lptravel.to",
            image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/01/GettyImages-467445351_medium-1.jpg",
            via: "lonelyplanet",
            weChatQr: text("WeChat QR URL", "https://s3.amazonaws.com/static-asset/marketing/2018/BIA/weChatQrCode.png"),
          }}
        >
          {(socialActions, socialUrls) => (
            <div>
              <SocialIconButton
                network="twitter"
                href={socialUrls.twitter}
                onClick={(event) => {
                  socialActions.twitter();
                  event.preventDefault();
                }}
                style={{ margin: "0 8px" }}
              />

              <SocialIconButton
                network="facebook"
                href={socialUrls.facebook}
                onClick={(event) => {
                  socialActions.facebook();
                  event.preventDefault();
                }}
                style={{ margin: "0 8px" }}
              />

              <SocialIconButton
                network="pinterest"
                href={socialUrls.pinterest}
                onClick={(event) => {
                  socialActions.pinterest();
                  event.preventDefault();
                }}
                style={{ margin: "0 8px" }}
              />

              <SocialIconButton
                network="reddit"
                href={socialUrls.reddit}
                onClick={(event) => {
                  socialActions.reddit();
                  event.preventDefault();
                }}
                style={{ margin: "0 8px" }}
              />

              <SocialIconButton
                network="email"
                href={socialUrls.email}
                onClick={(event) => {
                  socialActions.email();
                  event.preventDefault();
                }}
                style={{ margin: "0 8px" }}
              />

              <SocialIconButton
                network="facebookMessenger"
                href={socialUrls.facebookMessenger}
                onClick={(event) => {
                  socialActions.facebookMessenger();
                  event.preventDefault();
                }}
                style={{ margin: "0 8px" }}
              />

              <SocialIconButton
                network="whatsapp"
                href={socialUrls.whatsapp}
                onClick={(event) => {
                  socialActions.whatsapp();
                  event.preventDefault();
                }}
                style={{ margin: "0 8px" }}
              />

              <ModalWrapper>
                {(isOpen, toggle) => (
                  <span>
                    <SocialIconButton
                      network="weChat"
                      onClick={(event) => {
                        toggle();
                        event.preventDefault();
                      }}
                      style={{ margin: "0 8px" }}
                    />

                    <Modal
                      isOpen={!isOpen}
                      leftAction={toggle}
                      leftActionContent={<Icon.Close width={24} height={24} />}
                      closeModal={toggle}
                      title="WeChat Share"
                      contentStyle={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      style={{
                        content: {
                          bottom: "auto",
                          height: "auto",
                          width: "248px",
                        }
                      }}
                      showTitle
                      disableContentPadding
                    >
                      <img src={socialUrls.weChat} alt="weChat" />
                    </Modal>
                  </span>
                )}
              </ModalWrapper>
            </div>
          )}
        </ShareSettings>
      </StyleRoot>
    </Center>
  ))
  .add("Tag list", () => (
    <TagList limit={number("Limit", 3)}>
      <Tag href="#" selected>All</Tag>
      <Tag href="#">The Americas</Tag>
      <Tag href="#">World</Tag>
      <Tag href="#">Asia & the Pacific</Tag>
      <Tag href="#">Europe</Tag>
      <Tag href="#">Middle East & Africa</Tag>
    </TagList>
  ));

storiesOf("Logos", module)
  .addDecorator(withKnobs)
  .add("Logo", () => (
    <Center backgroundColor="white">
      <Logo
        className={text("className", "")}
        color={select("color", ["blue", "gray", "white"], "blue")}
        href={text("href", "/")}
      />
    </Center>
  ))
  .add("Provider logo", () => (
    <ProviderLogo
      provider={select("Provider", {
        bdc: "booking.com",
        hostelworld: "Hostelworld",
        opentable: "OpenTable",
        gadventures: "G Adventures",
        viator: "Viator",
        worldNomads: "World Nomads",
      }, "bdc")}
    />
  ));

storiesOf("Maps", module)
  .addDecorator(withKnobs)
  .add("Interactive Map", () => (
    <InteractiveMap
      places={[
        { title: "Zimbabwe", lat: -19.015438, long: 29.154857 },
        { title: "Rio De Janeiro", lat: -22.906847, long: -43.172896 },
        { title: "Wahiki Island", lat: -36.801924, long: 175.108015 },
      ]}
    />
  ))
  .add("Map marker", () => (
    <MapMarker
      poiType={select("Type", {
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
  ))
  .add("Static map", () => (
    <StaticMap
      location="-86.8595257,35.93225029999999"
      size="278x90"
      zoom="5"
    />
  ));

storiesOf("Messaging", module)
  .addDecorator(withKnobs)
  .add("Error messages", () => (
    <ErrorMessages
      messages={array("List of Errors", ["This field is required"])}
    />
  ))
  .add("Toast - default", () => (
    <Center grow>
      <Toast
        type={select("Type", {
          error: "Error",
          info: "Info",
          success: "Success",
          warning: "Warning",
        }, "success")}
        direction={select("Animate from", {
          bottom: "Bottom",
          top: "Top",
        }, "bottom")}
        title={text("Title", "")}
        visible={boolean("Visible", true)}
        affixed={boolean("Affixed", false)}
        onClose={action("Function to dismiss toast")}
      >
        {text("Message", "Toast message displayed here. It can span multiple lines.")}
      </Toast>
    </Center>
  ))
  .add("Toast - with onClick action", () => (
    <Center grow>
      <Toast
        type={select("Type", {
          error: "Error",
          info: "Info",
          success: "Success",
          warning: "Warning",
        }, "success")}
        direction={select("Animate from", {
          bottom: "Bottom",
          top: "Top",
        }, "bottom")}
        title={text("Title", "")}
        visible={boolean("Visible", true)}
        affixed={boolean("Affixed", false)}
        onClick={action("Some action")}
        buttonLabel="Action"
      >
        {text("Message", "Toast message displayed here. It can span multiple lines.")}
      </Toast>
    </Center>
  ))
  .add("Toast - with URL link action", () => (
    <Center grow>
      <Toast
        type={select("Type", {
          error: "Error",
          info: "Info",
          success: "Success",
          warning: "Warning",
        }, "success")}
        direction={select("Animate from", {
          bottom: "Bottom",
          top: "Top",
        }, "bottom")}
        title={text("Title", "")}
        visible={boolean("Visible", true)}
        affixed={boolean("Affixed", false)}
        url={text("Link URL", "https://www.lonelyplanet.com")}
        buttonLabel="Link Out"
      >
        {text("Message", "Toast message displayed here. It can span multiple lines.")}
      </Toast>
    </Center>
  ))
  .add("Travel alert", () => (
    <TravelAlert>
      {text("Text", "The US Center for Disease Control <a href=\"http://www.cdc.gov/zika/geo/active-countries.html\">has issued a travel alert suggesting that pregnant women postpone travel to the Bahamas due to the presence of the zika virus</a>.")}
    </TravelAlert>
  ));

storiesOf("Navigation", module)
  .addDecorator(withKnobs)
  .add("Navigation", () => (
    <Navigation height={number("Height", 80)} sticky={boolean("Sticky", false)}>
      <NavigationTab qaHook={text("qaHook", "Experiences")} active={boolean("Active", true)} onClick={action("Experiences tab clicked")}>
        {text("Text", "Experiences")}
      </NavigationTab>
      <NavigationTab qaHook={text("qaHook", "Map")} onClick={action("Map tab clicked")}>Map</NavigationTab>
      <NavigationTab qaHook={text("qaHook", "Articles")} onClick={action("Articles tab clicked")}>Articles</NavigationTab>
      <NavigationTab qaHook={text("qaHook", "Interests")} onClick={action("Interests tab clicked")}>Interests</NavigationTab>
      <NavigationTab qaHook={text("qaHook", "Books")} onClick={action("Books tab clicked")}>Books</NavigationTab>
      <NavigationTab qaHook={text("qaHook", "Adventures")} onClick={action("Adventures tab clicked")}>Adventures</NavigationTab>
    </Navigation>
  ))
  .add("Sectional nav", () => (
    <div>
      <StyleRoot>
        <SectionalNav
          items={[
            "Experiences",
            "Articles",
            "Products",
            "Destinations",
            "Tours",
          ]}
          linkToOffset={-100}
        />
        <div>
          <ContentHeader
            title="Other content"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio vel quam scelerisque efficitur. Nullam vehicula ligula id eleifend sollicitudin. Pellentesque quis leo justo. Integer pretium metus eu nunc tempus, vel sollicitudin nibh ullamcorper. Integer ornare varius sapien, cursus maximus dui sodales ac. Sed non sapien sit amet metus tempus congue. In hac habitasse platea dictumst. Phasellus quis laoreet tortor, id ultricies mi. Proin ac arcu consequat, tempor purus quis, volutpat est. Vestibulum justo arcu, vestibulum vitae felis a, blandit interdum purus. Donec purus nisl, pellentesque ac mollis et, rhoncus et ante. In imperdiet eu augue ac lobortis. Etiam tortor ipsum, porttitor non ipsum ac, ornare pulvinar ligula. Proin rhoncus sodales gravida. In a posuere lectus.</p><p>In vel nulla a sapien tempus fermentum. Ut tincidunt mauris erat, id sollicitudin ipsum pulvinar eu. Curabitur at dignissim neque. Fusce vel purus nulla. Etiam ultrices interdum rhoncus. Morbi mattis sapien a odio lacinia sollicitudin. Donec pellentesque et mi eget ultricies. Quisque auctor efficitur ullamcorper. Aliquam quis blandit odio. Etiam non eleifend eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin purus quam, mollis at ante luctus, facilisis sagittis felis. Pellentesque vel odio nec dolor lobortis tincidunt nec vitae arcu. Sed pulvinar tristique velit, id aliquam nibh rhoncus vel. Nulla lectus urna, vehicula non enim nec, elementum congue augue.</p><p>In hac habitasse platea dictumst. Praesent maximus, dui a sodales dapibus, massa lorem volutpat nibh, sed placerat urna dolor eu lacus. Sed pellentesque bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a varius massa. Proin non eros in quam mollis volutpat. Vestibulum massa libero, fringilla non fermentum non, consequat quis ante. Nullam viverra faucibus vestibulum. Aliquam sit amet orci libero. Vestibulum venenatis quam porttitor vehicula hendrerit. Aenean porttitor lorem ut lobortis venenatis. Sed sit amet ultricies nisi. Quisque ultrices mi tincidunt auctor fermentum. Sed eu velit at leo vehicula dignissim.</p>
        </div>
        <div id="Experiences">
          <ContentHeader
            title="Experiences"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio vel quam scelerisque efficitur. Nullam vehicula ligula id eleifend sollicitudin. Pellentesque quis leo justo. Integer pretium metus eu nunc tempus, vel sollicitudin nibh ullamcorper. Integer ornare varius sapien, cursus maximus dui sodales ac. Sed non sapien sit amet metus tempus congue. In hac habitasse platea dictumst. Phasellus quis laoreet tortor, id ultricies mi. Proin ac arcu consequat, tempor purus quis, volutpat est. Vestibulum justo arcu, vestibulum vitae felis a, blandit interdum purus. Donec purus nisl, pellentesque ac mollis et, rhoncus et ante. In imperdiet eu augue ac lobortis. Etiam tortor ipsum, porttitor non ipsum ac, ornare pulvinar ligula. Proin rhoncus sodales gravida. In a posuere lectus.</p><p>In vel nulla a sapien tempus fermentum. Ut tincidunt mauris erat, id sollicitudin ipsum pulvinar eu. Curabitur at dignissim neque. Fusce vel purus nulla. Etiam ultrices interdum rhoncus. Morbi mattis sapien a odio lacinia sollicitudin. Donec pellentesque et mi eget ultricies. Quisque auctor efficitur ullamcorper. Aliquam quis blandit odio. Etiam non eleifend eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin purus quam, mollis at ante luctus, facilisis sagittis felis. Pellentesque vel odio nec dolor lobortis tincidunt nec vitae arcu. Sed pulvinar tristique velit, id aliquam nibh rhoncus vel. Nulla lectus urna, vehicula non enim nec, elementum congue augue.</p><p>In hac habitasse platea dictumst. Praesent maximus, dui a sodales dapibus, massa lorem volutpat nibh, sed placerat urna dolor eu lacus. Sed pellentesque bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a varius massa. Proin non eros in quam mollis volutpat. Vestibulum massa libero, fringilla non fermentum non, consequat quis ante. Nullam viverra faucibus vestibulum. Aliquam sit amet orci libero. Vestibulum venenatis quam porttitor vehicula hendrerit. Aenean porttitor lorem ut lobortis venenatis. Sed sit amet ultricies nisi. Quisque ultrices mi tincidunt auctor fermentum. Sed eu velit at leo vehicula dignissim.</p>
        </div>
        <div id="Articles">
          <ContentHeader
            title="Articles"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio vel quam scelerisque efficitur. Nullam vehicula ligula id eleifend sollicitudin. Pellentesque quis leo justo. Integer pretium metus eu nunc tempus, vel sollicitudin nibh ullamcorper. Integer ornare varius sapien, cursus maximus dui sodales ac. Sed non sapien sit amet metus tempus congue. In hac habitasse platea dictumst. Phasellus quis laoreet tortor, id ultricies mi. Proin ac arcu consequat, tempor purus quis, volutpat est. Vestibulum justo arcu, vestibulum vitae felis a, blandit interdum purus. Donec purus nisl, pellentesque ac mollis et, rhoncus et ante. In imperdiet eu augue ac lobortis. Etiam tortor ipsum, porttitor non ipsum ac, ornare pulvinar ligula. Proin rhoncus sodales gravida. In a posuere lectus.</p><p>In vel nulla a sapien tempus fermentum. Ut tincidunt mauris erat, id sollicitudin ipsum pulvinar eu. Curabitur at dignissim neque. Fusce vel purus nulla. Etiam ultrices interdum rhoncus. Morbi mattis sapien a odio lacinia sollicitudin. Donec pellentesque et mi eget ultricies. Quisque auctor efficitur ullamcorper. Aliquam quis blandit odio. Etiam non eleifend eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin purus quam, mollis at ante luctus, facilisis sagittis felis. Pellentesque vel odio nec dolor lobortis tincidunt nec vitae arcu. Sed pulvinar tristique velit, id aliquam nibh rhoncus vel. Nulla lectus urna, vehicula non enim nec, elementum congue augue.</p><p>In hac habitasse platea dictumst. Praesent maximus, dui a sodales dapibus, massa lorem volutpat nibh, sed placerat urna dolor eu lacus. Sed pellentesque bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a varius massa. Proin non eros in quam mollis volutpat. Vestibulum massa libero, fringilla non fermentum non, consequat quis ante. Nullam viverra faucibus vestibulum. Aliquam sit amet orci libero. Vestibulum venenatis quam porttitor vehicula hendrerit. Aenean porttitor lorem ut lobortis venenatis. Sed sit amet ultricies nisi. Quisque ultrices mi tincidunt auctor fermentum. Sed eu velit at leo vehicula dignissim.</p>
        </div>
        <div id="Products">
          <ContentHeader
            title="Products"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio vel quam scelerisque efficitur. Nullam vehicula ligula id eleifend sollicitudin. Pellentesque quis leo justo. Integer pretium metus eu nunc tempus, vel sollicitudin nibh ullamcorper. Integer ornare varius sapien, cursus maximus dui sodales ac. Sed non sapien sit amet metus tempus congue. In hac habitasse platea dictumst. Phasellus quis laoreet tortor, id ultricies mi. Proin ac arcu consequat, tempor purus quis, volutpat est. Vestibulum justo arcu, vestibulum vitae felis a, blandit interdum purus. Donec purus nisl, pellentesque ac mollis et, rhoncus et ante. In imperdiet eu augue ac lobortis. Etiam tortor ipsum, porttitor non ipsum ac, ornare pulvinar ligula. Proin rhoncus sodales gravida. In a posuere lectus.</p><p>In vel nulla a sapien tempus fermentum. Ut tincidunt mauris erat, id sollicitudin ipsum pulvinar eu. Curabitur at dignissim neque. Fusce vel purus nulla. Etiam ultrices interdum rhoncus. Morbi mattis sapien a odio lacinia sollicitudin. Donec pellentesque et mi eget ultricies. Quisque auctor efficitur ullamcorper. Aliquam quis blandit odio. Etiam non eleifend eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin purus quam, mollis at ante luctus, facilisis sagittis felis. Pellentesque vel odio nec dolor lobortis tincidunt nec vitae arcu. Sed pulvinar tristique velit, id aliquam nibh rhoncus vel. Nulla lectus urna, vehicula non enim nec, elementum congue augue.</p><p>In hac habitasse platea dictumst. Praesent maximus, dui a sodales dapibus, massa lorem volutpat nibh, sed placerat urna dolor eu lacus. Sed pellentesque bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a varius massa. Proin non eros in quam mollis volutpat. Vestibulum massa libero, fringilla non fermentum non, consequat quis ante. Nullam viverra faucibus vestibulum. Aliquam sit amet orci libero. Vestibulum venenatis quam porttitor vehicula hendrerit. Aenean porttitor lorem ut lobortis venenatis. Sed sit amet ultricies nisi. Quisque ultrices mi tincidunt auctor fermentum. Sed eu velit at leo vehicula dignissim.</p>
        </div>
        <div id="Destinations">
          <ContentHeader
            title="Destinations"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio vel quam scelerisque efficitur. Nullam vehicula ligula id eleifend sollicitudin. Pellentesque quis leo justo. Integer pretium metus eu nunc tempus, vel sollicitudin nibh ullamcorper. Integer ornare varius sapien, cursus maximus dui sodales ac. Sed non sapien sit amet metus tempus congue. In hac habitasse platea dictumst. Phasellus quis laoreet tortor, id ultricies mi. Proin ac arcu consequat, tempor purus quis, volutpat est. Vestibulum justo arcu, vestibulum vitae felis a, blandit interdum purus. Donec purus nisl, pellentesque ac mollis et, rhoncus et ante. In imperdiet eu augue ac lobortis. Etiam tortor ipsum, porttitor non ipsum ac, ornare pulvinar ligula. Proin rhoncus sodales gravida. In a posuere lectus.</p><p>In vel nulla a sapien tempus fermentum. Ut tincidunt mauris erat, id sollicitudin ipsum pulvinar eu. Curabitur at dignissim neque. Fusce vel purus nulla. Etiam ultrices interdum rhoncus. Morbi mattis sapien a odio lacinia sollicitudin. Donec pellentesque et mi eget ultricies. Quisque auctor efficitur ullamcorper. Aliquam quis blandit odio. Etiam non eleifend eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin purus quam, mollis at ante luctus, facilisis sagittis felis. Pellentesque vel odio nec dolor lobortis tincidunt nec vitae arcu. Sed pulvinar tristique velit, id aliquam nibh rhoncus vel. Nulla lectus urna, vehicula non enim nec, elementum congue augue.</p><p>In hac habitasse platea dictumst. Praesent maximus, dui a sodales dapibus, massa lorem volutpat nibh, sed placerat urna dolor eu lacus. Sed pellentesque bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a varius massa. Proin non eros in quam mollis volutpat. Vestibulum massa libero, fringilla non fermentum non, consequat quis ante. Nullam viverra faucibus vestibulum. Aliquam sit amet orci libero. Vestibulum venenatis quam porttitor vehicula hendrerit. Aenean porttitor lorem ut lobortis venenatis. Sed sit amet ultricies nisi. Quisque ultrices mi tincidunt auctor fermentum. Sed eu velit at leo vehicula dignissim.</p>
        </div>
        <div id="Tours">
          <ContentHeader
            title="Tours"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio vel quam scelerisque efficitur. Nullam vehicula ligula id eleifend sollicitudin. Pellentesque quis leo justo. Integer pretium metus eu nunc tempus, vel sollicitudin nibh ullamcorper. Integer ornare varius sapien, cursus maximus dui sodales ac. Sed non sapien sit amet metus tempus congue. In hac habitasse platea dictumst. Phasellus quis laoreet tortor, id ultricies mi. Proin ac arcu consequat, tempor purus quis, volutpat est. Vestibulum justo arcu, vestibulum vitae felis a, blandit interdum purus. Donec purus nisl, pellentesque ac mollis et, rhoncus et ante. In imperdiet eu augue ac lobortis. Etiam tortor ipsum, porttitor non ipsum ac, ornare pulvinar ligula. Proin rhoncus sodales gravida. In a posuere lectus.</p><p>In vel nulla a sapien tempus fermentum. Ut tincidunt mauris erat, id sollicitudin ipsum pulvinar eu. Curabitur at dignissim neque. Fusce vel purus nulla. Etiam ultrices interdum rhoncus. Morbi mattis sapien a odio lacinia sollicitudin. Donec pellentesque et mi eget ultricies. Quisque auctor efficitur ullamcorper. Aliquam quis blandit odio. Etiam non eleifend eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin purus quam, mollis at ante luctus, facilisis sagittis felis. Pellentesque vel odio nec dolor lobortis tincidunt nec vitae arcu. Sed pulvinar tristique velit, id aliquam nibh rhoncus vel. Nulla lectus urna, vehicula non enim nec, elementum congue augue.</p><p>In hac habitasse platea dictumst. Praesent maximus, dui a sodales dapibus, massa lorem volutpat nibh, sed placerat urna dolor eu lacus. Sed pellentesque bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a varius massa. Proin non eros in quam mollis volutpat. Vestibulum massa libero, fringilla non fermentum non, consequat quis ante. Nullam viverra faucibus vestibulum. Aliquam sit amet orci libero. Vestibulum venenatis quam porttitor vehicula hendrerit. Aenean porttitor lorem ut lobortis venenatis. Sed sit amet ultricies nisi. Quisque ultrices mi tincidunt auctor fermentum. Sed eu velit at leo vehicula dignissim.</p>
        </div>
        <div>
          <ContentHeader
            title="Other content"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies odio vel quam scelerisque efficitur. Nullam vehicula ligula id eleifend sollicitudin. Pellentesque quis leo justo. Integer pretium metus eu nunc tempus, vel sollicitudin nibh ullamcorper. Integer ornare varius sapien, cursus maximus dui sodales ac. Sed non sapien sit amet metus tempus congue. In hac habitasse platea dictumst. Phasellus quis laoreet tortor, id ultricies mi. Proin ac arcu consequat, tempor purus quis, volutpat est. Vestibulum justo arcu, vestibulum vitae felis a, blandit interdum purus. Donec purus nisl, pellentesque ac mollis et, rhoncus et ante. In imperdiet eu augue ac lobortis. Etiam tortor ipsum, porttitor non ipsum ac, ornare pulvinar ligula. Proin rhoncus sodales gravida. In a posuere lectus.</p><p>In vel nulla a sapien tempus fermentum. Ut tincidunt mauris erat, id sollicitudin ipsum pulvinar eu. Curabitur at dignissim neque. Fusce vel purus nulla. Etiam ultrices interdum rhoncus. Morbi mattis sapien a odio lacinia sollicitudin. Donec pellentesque et mi eget ultricies. Quisque auctor efficitur ullamcorper. Aliquam quis blandit odio. Etiam non eleifend eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin purus quam, mollis at ante luctus, facilisis sagittis felis. Pellentesque vel odio nec dolor lobortis tincidunt nec vitae arcu. Sed pulvinar tristique velit, id aliquam nibh rhoncus vel. Nulla lectus urna, vehicula non enim nec, elementum congue augue.</p><p>In hac habitasse platea dictumst. Praesent maximus, dui a sodales dapibus, massa lorem volutpat nibh, sed placerat urna dolor eu lacus. Sed pellentesque bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a varius massa. Proin non eros in quam mollis volutpat. Vestibulum massa libero, fringilla non fermentum non, consequat quis ante. Nullam viverra faucibus vestibulum. Aliquam sit amet orci libero. Vestibulum venenatis quam porttitor vehicula hendrerit. Aenean porttitor lorem ut lobortis venenatis. Sed sit amet ultricies nisi. Quisque ultrices mi tincidunt auctor fermentum. Sed eu velit at leo vehicula dignissim.</p>
        </div>
      </StyleRoot>
    </div>
  ))
  .add("Tabbed nav", () => (
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
  ))
  .add("Tabs", () => (
    <Tabs
      id="tabbedNavigation"
      navigationHeight={number("Navigation height", 80)}
      navigationSticky={boolean("Sticky navigation", false)}
    >
      <Tab label="Experiences" active>Experiences tab content</Tab>
      <Tab label="Map">Map tab content</Tab>
      <Tab label="Articles">Articles tab content</Tab>
      <Tab label="Interests">Interests tab content</Tab>
      <Tab label="Books">Books tab content</Tab>
      <Tab label="Adventures">Adventures tab content</Tab>
    </Tabs>
  ));

storiesOf("Popovers", module)
  .addDecorator(withKnobs)
  .add("Bookmark list menu", () => (
    <Center>
      <BookmarkListMenu
        iconName={select("Icon name", ["Ellipsis", "Share"], "Ellipsis")}
        iconLabel={text("Icon label", "View list options")}
        reveal={boolean("Reveal", false)}
      >
        <BookmarkListMenuOption onClick={action("Edit click")}>Edit list</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Add click")}>Add new places</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Reorder click")}>Reorder places</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Share click")}>Share on Twitter</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Share click")}>Share on Facebook</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Copy click")}>Copy link</BookmarkListMenuOption>
      </BookmarkListMenu>
    </Center>
  ))
  .add("Bookmark list menu (custom button)", () => (
    <Center>
      <BookmarkListMenu
        button={
          <Button
            rounded
            border
            color="gray"
            size="small"
            qaHook="qa hook"
            customStyles={{
              alignItems: "center",
              display: "inline-flex",
              paddingBottom: "0.5em",
              paddingLeft: "1.3em",
              paddingRight: "1.3em",
              paddingTop: "0.7em",
              textTransform: "capitalize",
            }}
          >
            <Icon.Share
              style={{
                height: "16px",
                marginBottom: "3px",
                marginRight: "4px",
                width: "auto",
              }}
            />
            Share
          </Button>
        }
      >
        <BookmarkListMenuOption onClick={action("Edit click")}>Edit list</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Add click")}>Add new places</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Reorder click")}>Reorder places</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Share click")}>Share on Twitter</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Share click")}>Share on Facebook</BookmarkListMenuOption>
        <BookmarkListMenuOption onClick={action("Copy click")}>Copy link</BookmarkListMenuOption>
      </BookmarkListMenu>
    </Center>
  ))
  .add("Dialog", () => (
    <StyleRoot>
      <ModalWrapper>
        {(isOpen, toggle) => (
          <div>
            <button onClick={toggle}>Toggle Dialog</button>

            <Dialog
              id="storybookDialog"
              title={text("Title", "Are you sure?")}
              isOpen={isOpen}
              onClose={toggle}
              modal={boolean("Modal", true)}
              centered={boolean("Centered", true)}
              hasOverlay={boolean("Overlay", true)}
              actions={[
                <Button
                  size="small"
                  qaHook="qa hook"
                  onClick={action("✌🏼")}
                  rounded
                >
                  Yes, delete my account
                </Button>,
                <Button
                  size="small"
                  qaHook="qa hook"
                  onClick={toggle}
                  color="gray"
                  rounded
                  border
                >
                  Cancel
                </Button>,
              ]}
            >
              Deleting your account will result in the loss of all content,
              including collections and profile information, forever.
            </Dialog>
          </div>
        )}
      </ModalWrapper>
    </StyleRoot>
  ))
  .add("Flyout", () => (
    <Flyout
      children={text("Text", "I believe I can fly…")}
      size={select("Size", ["small", "medium"], "small")}
      shadow={select("Shadow", ["small", "large"], "small")}
      arrow={select("Arrow direction", ["up", "down", "left", "right"], "down")}
      arrowPosition={select("Arrow alignment", ["", "left", "right"], "")}
      removePadding={boolean("Remove padding", false)}
      fill={boolean("Fill", false)}
    />
  ))
  .add("Modal", () => (
    <StyleRoot>
      <ModalWrapper>
        {(isOpen, toggle) => (
          <div>
            <button onClick={toggle}>Toggle Modal</button>
            <Modal
              isOpen={isOpen}
              rightAction={action("clicked the left")}
              rightActionContent={<p>Test</p>}
              leftAction={toggle}
              leftActionContent={<Icon.Close width={24} height={24} />}
              closeModal={toggle}
              title={text("Header Text", "Header Text")}
            >
              <div>
                <h2>Some Content</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequuntur
                  alias amet repellat quis veritatis dignissimos. Veniam adipisci qui facere culpa
                  accusamus ducimus eum rem, amet, fugit, quasi, optio aut?
                </p>
              </div>
            </Modal>
          </div>
        )}
      </ModalWrapper>
    </StyleRoot>
  ))
  .add("Modal - log in", () => (
    <StyleRoot>
      <ModalWrapper>
        {(isOpen, toggle) => (
          <ModalLogIn
            isOpen={isOpen}
            onClose={toggle}
          />
        )}
      </ModalWrapper>
    </StyleRoot>
  ))
  .add("Modal - watch later", () => (
    <StyleRoot>
      <ModalWrapper>
        {(isOpen, toggle) => (
          <WatchLaterModal
            loggedIn={boolean("Logged in", false)}
            isOpen={isOpen}
            onClose={toggle}
            videos={[]}
            removeVideo={action("Remove Video")}
            authMessage={text("Auth Message", "Organize your research & unlock tools like bookmarking.")}
          />
        )}
      </ModalWrapper>
    </StyleRoot>
  ))
  .add("Share menu", () => (
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
  ))
  .add("Tooltip", () => (
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
  ))
  .add("Type selector", () => (
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

storiesOf("Text", module)
  .addDecorator(withKnobs)
  .add("Accent", () => (
    <TextAccent>
      {text("Text", "Lorem ipsum dolor sit amet")}
    </TextAccent>
  ))
  .add("Author name", () => (
    <AuthorName>
      {text("Name", "Alex Butler")}
    </AuthorName>
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
  .add("Bullet description", () => (
    <BulletDescription
      description={["Item 1", "Item 2"]}
    />
  ))
  .add("Disclaimer text", () => (
    <DisclaimerText>
      {text("Text", `To use Lonely Planet you must have cookies enabled. If you
        sign up with Twitter or Facebook, we’ll start you off with a network by
        automatically importing profile imformation. Also, we’ll never post to
        Twitter or Facebook without your permission. For more info, please see
        <a href="/">FAQ</a>.`
      )}
    </DisclaimerText>
  ))
  .add("Heading", () => (
    <TextHeading
      level={select("Level", [1, 2, 3, 4, 5, 6], 2)}
      size={select("Size", [1, 2, 3, 4, 5, 6, 7, 8], 2)}
      weight={select("Weight", {
        light: "Light",
        regular: "Regular",
        medium: "Medium",
      }, "regular")}
    >
      {text("Text", "Lorem ipsum")}
    </TextHeading>
  ))
  .add("Italic text", () => (
    <ItalicText>{text("Text", "Global news reporter")}</ItalicText>
  ))
  .add("Lede", () => (
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
  ))
  .add("Strapline", () => (
    <Strapline>
      {text("Text", "Strapline text")}
    </Strapline>
  ))
  .add("Super", () => (
    <TextSuper>
      {text("Text", "Lorem ipsum")}
    </TextSuper>
  ))
  .add("Timestamp", () => (
    <Timestamp
      dateTime={text("Absolute time", "2017-01-17")}
    >
      {text("Relative time", "3 days ago")}
    </Timestamp>
  ))
  .add("Uppercase", () => (
    <TextUppercase>
      {text("Text", "Lorem ipsum")}
    </TextUppercase>
  ));

storiesOf("Video components", module)
  .addDecorator(withKnobs)
  .add("Featured video - default", () => (
    <StyleRoot>
      <div style={{ width: "600px", height: "350px" }}>
        <VideoFeatured
          videoId={text("Video ID", "5363317250001")}
          title={text("Title", "Introducing Italy")}
          description={text("Description", "Welcome to <b>italy</b>. <i>Come explore</i>.")}
          duration={number("Duration", 30000)}
          image="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=430&h=250&fit=crop"
          hoverEffects={boolean("Hover effects", false)}
          mobile={boolean("Mobile", false)}
          videoEmbed={{
            previewStartTime: 10,
            previewEndTime: 13,
          }}
        />
      </div>
    </StyleRoot>
  ))
  .add("Featured video - graphic", () => (
    <StyleRoot>
      <div style={{ width: "600px", height: "350px" }}>
        <VideoFeatured
          videoId={text("Video ID", "5363317250001")}
          title={text("Title", "Introducing Italy")}
          image="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=430&h=250&fit=crop"
          graphic="https://lonelyplanetstatic.imgix.net/op-video-sync/assets/logo_bestintravel.svg"
          hoverEffects={boolean("Hover effects", false)}
          mobile={boolean("Mobile", false)}
        />
      </div>
    </StyleRoot>
  ))
  .add("Spotlight zone", () => (
    <StyleRoot>
      <SpotlightZone
        zone={text("Zone", "Series spotlight")}
        title={text("Title", "Gaudi, Part 1")}
        paragraph={text("Paragraph", "Explore the architecture capital of Varcelona with Christa Larwood and witness Antoni Gaudi's beautiful work.")}
        backgroundImageUrl={text("Background Image URL", "https://s3.amazonaws.com/op-video-sync-dev/poster-5299039063001-a-gorgeous-day-in-the-life-of-cuba-20170130-182935.jpg")}
        videoEmbed={{
          videoId: "5615400588001",
        }}
      />
    </StyleRoot>
  ))
  .add("Thumbnail list - light", () => (
    <StyleRoot>
      <ThumbnailList
        heading={text("Title", "Featured videos")}
        theme="light"
      >
        <ThumbnailListItem
          title="List item 1"
          theme="light"
          imagePath="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90"
        />
        <ThumbnailListItem
          title="List item 2"
          theme="light"
          imagePath="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90"
        />
        <ThumbnailListItem
          title="List item 3"
          theme="light"
          imagePath="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90"
        />
      </ThumbnailList>
    </StyleRoot>
  ))
  .add("Thumbnail list - dark", () => (
    <StyleRoot>
      <div style={{ backgroundColor: "#1f1f1f" }}>
        <ThumbnailList
          heading={text("Title", "Featured videos")}
          theme="dark"
        >
          <ThumbnailListItem
            title="List item 1"
            theme="dark"
            imagePath="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90"
          />
          <ThumbnailListItem
            title="List item 2"
            theme="dark"
            imagePath="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90"
          />
          <ThumbnailListItem
            title="List item 3"
            theme="dark"
            imagePath="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90"
          />
        </ThumbnailList>
      </div>
    </StyleRoot>
  ))
  .add("Thumbnail list item", () => (
    <StyleRoot>
      <ThumbnailListItem
        title={text("Title", "The shop")}
        subtitle={array("Subtitle", ["Item 3", "Item 4"])}
        lineClamp={number("Line Clamp", 1)}
        runtime={number("Video runtime", 129365)}
        imagePath={text("Image path", "https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FYXJ0YW5kY3VsdHVyZS5qcGdTYXQgRGVjIDE3IDIwMTYgMjE6MDA6MDUgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=180")}
        status={text("Status", "Status")}
        description={array("Description", ["Item 1", "Item 2"])}
        descriptionIcon={text("Description icon", "Clock")}
        descriptionIconLabel={text("Description icon label", "Watch later")}
        onDescriptionIconClick={action("Action for icon")}
        imageIcon={text("Image icon", "Play")}
        imageIconLabel={text("Image icon label", "Play")}
        theme={select("Theme", ["light", "dark", "active"], "light")}
      />
    </StyleRoot>
  ))
  .add("Video card shelf - default", () => (
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
            style={{ width: "400px" }}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/GettyImages-509196834_high-ba0228a2190f.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout={select("Layout", ["card", "tile"], "card")}
            style={{ width: "400px" }}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/LPT0414_063-2225e4dcf106.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout={select("Layout", ["card", "tile"], "card")}
            style={{ width: "400px" }}
          />
        </CardShelfVideo>
      </div>
    </StyleRoot>
  ))
  .add("Video card shelf - swiper", () => (
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
  ))
  .add("Video card shelf - slider", () => (
    <StyleRoot>
      <div style={{ padding: "32px" }}>
        <CardShelfVideoSlider
          heading="Food and drink"
          href="/"
          theme={select("Theme", ["light", "dark"], "light")}
          spacing={select("Spacing", ["normal", "compact"], "compact")}
        >
          <CardVideo
            heading={text("Heading", "High Sierra ")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "//media.gadventures.com/media-server/cache/a6/2c/a62ca9f86982dd950319138334e7248b.jpg")}
            href={text("URL", "#")}
            layout="tile"
            theme={select("Theme", ["light", "dark"], "light")}
            spacing={select("Spacing", ["normal", "compact"], "compact")}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/GettyImages-509196834_high-ba0228a2190f.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="tile"
            theme={select("Theme", ["light", "dark"], "light")}
            spacing={select("Spacing", ["normal", "compact"], "compact")}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/LPT0414_063-2225e4dcf106.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="tile"
            theme={select("Theme", ["light", "dark"], "light")}
            spacing={select("Spacing", ["normal", "compact"], "compact")}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/09/GettyImages-578179271_full-e3d250fd7575.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="tile"
            theme={select("Theme", ["light", "dark"], "light")}
            spacing={select("Spacing", ["normal", "compact"], "compact")}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/Myanmar-11146662b740.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="tile"
            theme={select("Theme", ["light", "dark"], "light")}
            spacing={select("Spacing", ["normal", "compact"], "compact")}
          />

          <CardVideo
            heading={text("Heading", "High Sierra routes with Ken Walker Smith")}
            bullets={array("Bullets", ["On The Road", "E.01"])}
            runtime={number("Video runtime", 129365)}
            onClick={action("Watch this video later")}
            imageSrc={text("Image source", "https://lonelyplanetwp.imgix.net/2016/10/Antigua-f670d2806c69.jpg?fit=min&q=40&sharp=10&vib=20&w=1470")}
            href={text("URL", "#")}
            layout="tile"
            theme={select("Theme", ["light", "dark"], "light")}
            spacing={select("Spacing", ["normal", "compact"], "compact")}
          />
        </CardShelfVideoSlider>
      </div>
    </StyleRoot>
  ))
  .add("Video embed - default", () => (
    <StyleRoot>
      <div style={{ maxHeight: "100%", height: "400px" }}>
        <VideoEmbed
          videoId={select("Video ID", [
            "5363317250001",
            "5203602613001",
            "5615400588001"],
            "5363317250001")
          }
          playerName={select("Player name", [
            "default",
            "background",
            "test"],
            "default")
          }
          autoplay={boolean("Autoplay", false)}
          cover={boolean("Cover", false)}
          controls={boolean("Controls", true)}
          muted={boolean("Muted", false)}
          playsInline={boolean("Plays inline", false)}
          loop={boolean("Loop", false)}
          visible={boolean("Visible", true)}
          visibleWhileNotPlaying={boolean("Visible while not playing", true)}
          previewMode={boolean("Preview mode", false)}
          previewStartTime={number("Preview start time", 0)}
          previewEndTime={number("Preview end time", 5)}
        />
      </div>
    </StyleRoot>
  ))
  .add("Video embed - play when in view", () => (
    <StyleRoot>
      <div style={{ height: "2000px" }}>
        <i style={{ position: "fixed", fontSize: "12px" }}>
          Scroll down to see state changes
        </i>
        <VideoEmbed
          style={{ position: "relative", top: "800px", height: "300px" }}
          videoId="5363317250001"
          playWhenInView
        />
      </div>
    </StyleRoot>
  ))
  .add("Video info - light", () => (
    <StyleRoot>
      <VideoInfo
        fadeIn={boolean("Fade in", true)}
        theme="light"
        mobile={boolean("Mobile", false)}
        headingLevel={number("Heading level", 2)}
        video={{
          name: "Ask Lonely Planet: how to escape the Middle East?",
          description: "Want to see the Syria wilderness?<br /><i>Ready to go? Check out <a href=\"http://shop.lonelyplanet.com/iceland/icelands-ring-road-trips-1/\">Ring Road road trips</a>.</i>",
          url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
          host: "Tom Hall and Oliver Smith",
          director: "Macca Sheriffi",
          year: "2017",
          relatedChannels: [
            {
              name: "Adventure Travel",
              url: "https://www.lonelyplanet.com/video/adventure/v/cha/1",
            },
            {
              name: "Best in Travel 2018",
              url: "https://www.lonelyplanet.com/video/best-in-travel-2018/v/cha/10",
            },
          ],
        }}
      />
    </StyleRoot>
  ))
  .add("Video info - dark", () => (
    <StyleRoot>
      <div style={{ backgroundColor: "#1f1f1f" }}>
        <VideoInfo
          fadeIn={boolean("Fade in", true)}
          theme="dark"
          mobile={boolean("Mobile", false)}
          headingLevel={number("Heading level", 2)}
          video={{
            name: "Ask Lonely Planet: how to escape the Middle East?",
            description: "Want to see the Syria wilderness?<br /><i>Ready to go? Check out <a href=\"http://shop.lonelyplanet.com/iceland/icelands-ring-road-trips-1/\">Ring Road road trips</a>.</i>",
            url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
            host: "Tom Hall and Oliver Smith",
            director: "Macca Sheriffi",
            year: "2017",
            relatedChannels: [
              {
                name: "Adventure Travel",
                url: "https://www.lonelyplanet.com/video/adventure/v/cha/1",
              },
              {
                name: "Best in Travel 2018",
                url: "https://www.lonelyplanet.com/video/best-in-travel-2018/v/cha/10",
              },
            ],
          }}
        />
      </div>
    </StyleRoot>
  ))
  .add("Video playlist - default", () => (
    <StyleRoot>
      <VideoPlaylist
        heading={text("Heading", "Featured videos")}
        theme={select("Theme", ["light", "dark"], "light")}
        autoplay={boolean("Autoplay", false)}
        hideList={boolean("Hide list", false)}
        showFeaturedVideoCover={boolean("Show featured video cover", false)}
        mobile={boolean("Mobile", false)}
        onLoadVideo={(video, autoplay) => { console.log("onLoadVideo:", video, autoplay); }}
        videos={[
          {
            id: "5615400608001",
            name: "Video name 1",
            description: "Video description 1",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 10000,
          },
          {
            id: "5743221896001",
            name: "Video name 2",
            description: "Video description 2",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 20000,
          },
          {
            id: "5615400608002",
            name: "Video name 3",
            description: "Video description 3",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 30000,
          },
          {
            id: "5743221896003",
            name: "Video name 4",
            description: "Video description 4",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 40000,
          },
          {
            id: "5615400608004",
            name: "Video name 5",
            description: "Video description 5",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 50000,
          },
          {
            id: "5743221896005",
            name: "Video name 6",
            description: "Video description 6",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 60000,
          },
        ]}
      />
    </StyleRoot>
  ))
  .add("Video playlist - slider", () => (
    <StyleRoot>
      <VideoPlaylistWithSlider
        heading={text("Heading", "Featured videos")}
        theme={select("Theme", ["light", "dark"], "light")}
        sliderHeading={text("Slider heading", "Featured")}
        visibleVideosDesktop={number("Visible videos (desktop)", 6)}
        visibleVideosMobile={number("Visible videos (mobile)", 4)}
        hideList={boolean("Hide list", false)}
        autoplay={boolean("Autoplay", false)}
        showVideoInfo={boolean("Show video info", true)}
        showFeaturedVideoCover={boolean("Show featured video cover", false)}
        mobile={boolean("Mobile", false)}
        onLoadVideo={(video, autoplay) => { console.log("onLoadVideo:", video, autoplay); }}
        videos={[
          {
            id: "5615400608001",
            name: "Video name 1",
            description: "Video description 1",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            cardImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 10000,
            url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
            host: "Tom Hall and Oliver Smith 1",
            director: "Macca Sheriffi 1",
            year: "2017",
            cardActionIcon: "ClockOutline",
          },
          {
            id: "5743221896001",
            name: "Video name 2",
            description: "Video description 2",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            cardImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 20000,
            url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
            host: "Tom Hall and Oliver Smith 2",
            director: "Macca Sheriffi 2",
            year: "2017",
            cardActionIcon: "ClockOutline",
          },
          {
            id: "5615400608002",
            name: "Video name 3",
            description: "Video description 3",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            cardImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 30000,
            url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
            host: "Tom Hall and Oliver Smith 3",
            director: "Macca Sheriffi 3",
            year: "2017",
            cardActionIcon: "ClockOutline",
          },
          {
            id: "5743221896003",
            name: "Video name 4",
            description: "Video description 4",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            cardImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 40000,
            url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
            host: "Tom Hall and Oliver Smith 4",
            director: "Macca Sheriffi 4",
            year: "2017",
            cardActionIcon: "ClockOutline",
          },
          {
            id: "5615400608004",
            name: "Video name 5",
            description: "Video description 5",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            cardImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 50000,
            url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
            host: "Tom Hall and Oliver Smith 5",
            director: "Macca Sheriffi 5",
            year: "2017",
            cardActionIcon: "ClockOutline",
          },
          {
            id: "5743221896005",
            name: "Video name 6",
            description: "Video description 6",
            image: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            cardImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=915&h=515",
            thumbnailImage: "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=160&h=90",
            duration: 60000,
            url: "/video/here-and-now-hong-kong-dragon-boat-festival/v/vid/310",
            host: "Tom Hall and Oliver Smith 6",
            director: "Macca Sheriffi 6",
            year: "2017",
            cardActionIcon: "ClockOutline",
          },
        ]}
      />
    </StyleRoot>
  ))
  .add("Video popout", () => (
    <StyleRoot>
      <div style={{ height: "2000px" }}>
        <i style={{ position: "fixed", fontSize: "12px" }}>
          scroll down to see state changes
        </i>
        <VideoPopout
          style={{ position: "relative", top: "800px", height: "300px" }}
          whenAboveViewport={boolean("When above viewport", true)}
          whenBelowViewport={boolean("When below viewport", true)}
          mobile={boolean("Mobile", false)}
          showCloseButton={boolean("Show close button", true)}
          videoEmbed={{
            videoId: "5615445675001",
            autoplay: true,
            muted: true,
            loop: true,
          }}
        />
      </div>
    </StyleRoot>
  ))
  .add("Video slider", () => {
    const styles = {
      container: {
        padding: "20px",
      },
      arrow: {
        default: {
          backgroundColor: "#1e7bcc",
          color: "white",
          paddingLeft: "6px",
          position: "relative",
          width: "20px",
        },
        next: {
          right: "20px",
        },
      },
      slide: {
        backgroundColor: "black",
        color: "white",
      },
    };
    return (
      <StyleRoot>
        <div style={styles.container}>
          <VideoSlider
            mqSlidesToShow={number("Slides to show (using media queries)", 4, {
              range: true,
              min: 1,
              max: 4,
              step: 1,
            })}
            slidesToShow={number("Slides to show")}
            cellSpacing={number("Cell spacing")}
            infinite={boolean("Infinite", false)}
            draggable={boolean("Draggable", false)}
            autoplay={boolean("Autoplay", false)}
            autoplaySpeed={number("Autoplay speed", 5000)}
            pauseOnHover={boolean("Pause on hover", true)}
            arrows={boolean("Arrows", true)}
          >
            <div key="1" style={styles.slide}>Slide 1</div>
            <div key="2" style={styles.slide}>Slide 2</div>
            <div key="3" style={styles.slide}>Slide 3</div>
            <div key="4" style={styles.slide}>Slide 4</div>
            <div key="5" style={styles.slide}>Slide 5</div>
            <div key="6" style={styles.slide}>Slide 6</div>
          </VideoSlider>
        </div>
      </StyleRoot>
    );
  })
  .add("Video tile", () => (
    <StyleRoot>
      <div style={{ padding: "32px", width: "400px" }}>
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
  ))
  .add("Video tile grid - default", () => (
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
  .add("Video tile grid - swiper", () => (
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
  ))
  .add("Video up next", () => (
    <StyleRoot>
      <VideoUpNext
        title={text("Title", "Lonely Planet's best destinations to visit in 2018")}
        image="https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=430&h=250&fit=crop"
        href="https://www.lonelyplanet.com/video/lonely-planets-best-destinations-to-visit-in-2018/v/vid/542"
        visible={boolean("Visible", true)}
      />
    </StyleRoot>
  ));

storiesOf("Widgets", module)
  .addDecorator(withKnobs)
  .add("Multi-step", () => (
    <MultiStepWrapper totalSteps={4}>
      {(currentStep, goToNextStep, goToPreviousStep, setCurrentStep) => (
        <MultiStep currentStep={currentStep}>
          <div>
            <h1>Step {currentStep}</h1>
            <Button qaHook="qa hook" size="tiny" onClick={goToNextStep}>Next step</Button>
            <Button qaHook="qa hook" size="tiny" onClick={() => { setCurrentStep(4); }}>Jump to step 4</Button>
          </div>

          <div>
            <h1>Step {currentStep}</h1>
            <Button qaHook="qa hook" size="tiny" onClick={goToPreviousStep}>Previous step</Button>
            <Button qaHook="qa hook" size="tiny" onClick={goToNextStep}>Next step</Button>
          </div>

          <div>
            <h1>Step {currentStep}</h1>
            <Button qaHook="qa hook" size="tiny" onClick={goToPreviousStep}>Previous step</Button>
            <Button qaHook="qa hook" size="tiny" onClick={goToNextStep}>Next step</Button>
          </div>

          <div>
            <h1>Step {currentStep}</h1>
            <Button qaHook="qa hook" size="tiny" onClick={goToPreviousStep}>Previous step</Button>
            <Button qaHook="qa hook" size="tiny" onClick={() => { setCurrentStep(1); }}>Jump to step 1</Button>
          </div>
        </MultiStep>
      )}
    </MultiStepWrapper>
  ))
  .add("Newsletter", () => (
    <StyleRoot>
      <Newsletter
        title={text("Title", "Sign up for our weekly newsletter")}
        subtitle={text("Subtitle", "Get more travel inspiration, tips and exclusive offers sent straight to your inbox")}
        placeholder={text("Input placeholder text", "Enter email")}
        cta={text("Button text", "Sign up")}
        hasOptin={boolean("Has Opt In", true)}
        confirmation={object("Confirmation data", {
          title: "Thanks for signing up!",
          text: "We just sent a confirmation email to",
        })}
        signup={object("Signup data", {
          vars: "newsletter[LP_Editorial_Newsletter]",
          email_template: "Welcome email",
          source: "homepage",
        })}
        endpoint={process.env.NODE_ENV === "development" ?
          "http://localhost:8080/newsletter" :
          "https://www.lonelyplanet.com/newsletter"
        }
        captchaSiteKey={text("Captcha API Key", "")}
      />
    </StyleRoot>
  ))
  .add("Photo gallery", () => (
    <PhotoGallery
      photos={[
        {
          src: "https://lonelyplanetwp.imgix.net/2016/10/Trinidad-6666420241af.jpg?w=1500&h=1000&fit=crop",
          w: 1500,
          h: 1000,
          title: "A radiant blue-chinned sapphire hummingbird perched in a branch in Trinidad © ArenFrancis",
        },
        {
          src: "https://lonelyplanetwp.imgix.net/2016/10/Iguazu-falls-86198db70380.jpg?w=1500&h=1000&fit=crop",
          w: 1500,
          h: 1000,
          title: "Get an eyeful of Brazil's Iguazu Falls © Michael Runkel / Getty Images",
        },
        {
          src: "https://lonelyplanetwp.imgix.net/2016/10/Panda-f1ebbbd0fe6b.jpg?w=1500&h=1000&fit=crop",
          w: 1500,
          h: 1000,
          title: "A giant panda cub at the Chengdu Giant Panda Breeding Research Base in Sichuan © Feng Wei Photography / Getty Images",
        },
        {
          src: "https://lonelyplanetwp.imgix.net/2016/10/Shere-Khan-848929cc2677.jpg?w=1500&h=1000&fit=crop",
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

storiesOf("App-specific", module)
  .addDecorator(withKnobs)
  .add("Amenities - 2-column, single list", () => (
    <Amenities
      columns={number("Columns", 2)}
      listType="single"
      items={data.amenities.singleList}
    />
  ))
  .add("Amenities - 3-column, grouped list", () => (
    <Amenities
      columns={number("Columns", 3)}
      listType="grouped"
      items={data.amenities.groupedList}
    />
  ))
  .add("Article pagination item", () => (
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
  ))
  .add("Article pagination nav", () => (
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
  ))
  .add("Multi-step login", () => (
    <MultiStepWrapper totalSteps={4}>
      {(currentStep, goToNextStep, goToPreviousStep, setCurrentStep) => {
        return (
          <MultiStepLogin
            currentStep={currentStep}
            setStep={setCurrentStep}
            authActions={{
              facebook: () => {},
              twitter: () => {},
              google: () => {},
              passwordless: () => {},
              password: 'some-action',
            }}
            showLogo
            doneAction={() => { }}
          />
        )
      }}
    </MultiStepWrapper>
  ))
  .add("No results", () => (
    <NoResults onReset={action(event)} />
  ))
  .add("Price range", () => (
    <PriceRangeLabel
      value={select("Range", ["$", "$$", "$$$"], "$$")}
    />
  ))
  .add("Rating - icon", () => (
    <Rating
      amount={select("Amount", [
        0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,
      ], 3.5)}
      max={5}
      icon
    />
  ))
  .add("Rating - text", () => (
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
  ))
  .add("Recommended articles", () => (
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
  ))
  .add("Scroll Indicator", () => (
    <ScrollIndicator
      color={color("Color", "#000")}
    />
  ))
  .add("Setting block - text input", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <SettingBlockInput
        error={boolean("Error", false)}
        title={text("Title", "Name")}
        name={text("Name", "name")}
        id={text("ID", "name")}
        subtitle={text("Subtitle", "Publicly displayed in your profile")}
        placeholder={text("Placeholder", "Enter full name")}
      />
    </div>
  ))
  .add("Setting block - textarea", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <SettingBlockTextArea
        error={boolean("Error", false)}
        title={text("Textarea Title", "Intro")}
        subtitle={text("Textarea Subtitle", "")}
        id={text("ID", "testerTime")}
        name={text("Name", "testerTime")}
        placeholder="Add an intro"
      />
    </div>
  ))
  .add("Setting block - checkbox button", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <ToggleController active={boolean("Checked", false)}>
        {(active, toggle) => (
          <SettingBlockCheckbox
            error={boolean("Error", false)}
            title={text("Title", "Lonely Planet Kids newsletter")}
            subtitle={text("Subtitle", "")}
            checked={active}
            onClick={toggle}
            type={select("Type", ["checkbox", "radio"], "checkbox")}
            description={text("Description", "hand-picked selection of family travel articles, fun activity sheets and competitions")}
          />
        )}
      </ToggleController>
    </div>
  ))
  .add("Setting block - action button", () => (
    <div
      style={{
        padding: "16px 24px",
      }}
    >
      <SettingBlockAction
        error={boolean("Error", false)}
        title={text("Title", "Delete Account")}
        actionText={text("Action Text", "Delete Account")}
        subtitle={text("Subtitle", "")}
        onClick={action("DeleteAcount")}
        description={text("Description", "Think twice! All your stuff will be deleted.")}
      />
    </div>
  ))
  .add("Setting block - accordion", () => (
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
  .add("Setting block - setting list", () => (
    <div
      style={{
        paddingTop: "16px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <SettingBlockSection heading={text("Section Heading", "Personal")}>
        <SettingBlockListItemWrapper>
          <SettingBlockInput
            error={boolean("Error", false)}
            title={text("Title", "Name")}
            name={text("Name", "name")}
            subtitle={text("Subtitle", "Publicly displayed in your profile")}
            placeholder={text("Placeholder", "Enter full name")}
          />
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <SettingBlockTextArea
            error={boolean("Error", false)}
            title={text("Textarea Title", "Intro")}
            subtitle={text("Textarea Subtitle", "")}
            id={text("Id", "tester3")}
            name={text("Name", "tester3")}
            placeholder="Add an intro"
          />
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
              <SettingBlockCheckbox
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
      </SettingBlockSection>
      <SettingBlockSection heading="Another Section">
        <SettingBlockListItemWrapper>
          <SettingBlockInput
            error={boolean("Error", false)}
            title={text("Title", "Name")}
            name={text("Name", "tester4")}
            subtitle={text("Subtitle", "Publicly displayed in your profile")}
            placeholder={text("Placeholder", "Enter full name")}
          />
        </SettingBlockListItemWrapper>
        <SettingBlockListItemWrapper>
          <SettingBlockTextArea
            error={boolean("Error", false)}
            title={text("Textarea Title", "Intro")}
            subtitle={text("Textarea Subtitle", "")}
            id={text("Id", "tester1")}
            name={text("Name", "tester5")}
            placeholder="Add an intro"
          />
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
              <SettingBlockCheckbox
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
      </SettingBlockSection>
    </div>
  ))
  .add("Tour itinerary", () => (
    <TourItinerary
      itinerary={data.tour.itinerary}
      link="/"
    />
  ));

storiesOf("Deprecated", module)
  .addDecorator(withKnobs)
  .add("Form input - deprecated", () => (
    <FormInput
      placeholder={text("Placeholder", "johndoe@gmail.com")}
      error={boolean("Has Error", false)}
      theme={select("Input Theme", ["base", "light", "dark", "float", "inputGroup"], "base")}
    />
  ))
  .add("Form textarea - deprecated", () => (
    <FormTextArea
      placeholder={text("Placeholder", "johndoe@gmail.com")}
      error={boolean("Has Error", false)}
      theme={select("Input Theme", ["base", "light", "dark", "float", "inputGroup"], "base")}
      autogrow={boolean("Autogrow", false)}
    />
  ))
  .add("Grid - deprecated", () => (
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
  ))
  .add("Heading - deprecated", () => (
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
  ))
  .add("Narrative - deprecated", () => (
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
