import React from "react";
import { StyleRoot } from "radium";
import "leaflet/dist/leaflet.css";
import { storiesOf, action } from "@kadira/storybook";
import data from "./data.json";
import Colors from "./Colors";
import Amenities from "../src/components/amenities";
// Availability
import Bookmark from "../src/components/bookmark";
import Breadcrumbs from "../src/components/breadcrumbs";
import Button from "../src/components/button";
import Calendar from "../src/components/calendar";
import Callout from "../src/components/callout";
import Checkbox from "../src/components/form/checkbox";
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
import Heading from "../src/components/heading";
import Icons from "./icons";
import IconButton from "../src/components/iconButton";
import IconCallout from "../src/components/iconCallout";
import IconCalloutGroup from "../src/components/iconCalloutGroup";
import ImageCarousel from "../src/components/imageCarousel";
// ImageGallery
import ImageHero from "../src/components/imageHero";
import InteractiveMap from "../src/components/interactiveMap";

// LastUpdated
import Lede from "../src/components/lede";
// ListItem
// ListItemBookable
// ListItemImage
import ListItemNews from "../src/components/listItemNews";
// ListItemWireframe
// Loading
// Location
import MapMarker from "../src/components/mapMarker";
// MobileToolbar
// Modal
import MoreLink from "../src/components/moreLink";
import Narrative from "../src/components/narrative";
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
import RelatedTour from "../src/components/relatedTour";
import ReviewedBadge from "../src/components/reviewedBadge";
import SectionalNav from "../src/components/sectionalNav";
import Select from "../src/components/form/select";
import ShareMenu from "../src/components/shareMenu";
// SidebarSection
import SightsListItem from "../src/components/sightsListItem";
import StaticMap from "../src/components/staticMap";
import Strapline from "../src/components/strapline";
import Tag from "../src/components/tag";
import TagList from "../src/components/tagList";
// Takeover
import Tooltip from "../src/components/tooltip";
import TourItinerary from "../src/components/tourItinerary";
import TypeSelector from "../src/components/typeSelector";

storiesOf("Styles", module)
  .add("Colors", () => (
    <Colors />
  ));

storiesOf("Iconography", module)
  .add("Icons", () => (
    <Icons />
  ));

storiesOf("Amenities", module)
  .add("2-column, single list", () => (
    <Amenities
      columns={2}
      listType="single"
      items={data.amenities.singleList}
    />
  ))
  .add("3-column, grouped list", () => (
    <Amenities
      columns={3}
      listType="grouped"
      items={data.amenities.groupedList}
    />
  ));

storiesOf("Bookmark", module)
  .add("Default", () => (
    <Bookmark />
  ));

storiesOf("Breadcrumbs", module)
  .add("Default", () => (
    <Breadcrumbs
      links={data.breadcrumbs.links}
      listType="single"
      items={data.amenities.singleList}
    />
  ));

storiesOf("Button", module)
  .add("Primary", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Primary, rounded", () => (
    <Button rounded onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Primary, tiny", () => (
    <Button size="tiny" onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Primary, small", () => (
    <Button size="small" onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Primary, large", () => (
    <Button size="large" onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Primary, huge", () => (
    <Button size="huge" onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Primary, disabled", () => (
    <Button disabled onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Primary, full width", () => (
    <Button full onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Secondary", () => (
    <Button color="white" onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Secondary, border", () => (
    <Button color="white" border onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Secondary, rounded border", () => (
    <Button color="white" rounded border onClick={action("clicked")}>Hello Button</Button>
  ));

storiesOf("Calendar", module)
  .add("Default", () => (
    <Calendar />
  ));

storiesOf("Callout", module)
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

storiesOf("Checkbox", module)
  .add("Default", () => (
    <Checkbox
      value="5 star hotel"
      id="check"
      checked
    />
  ));

storiesOf("Dot loader", module)
  .add("Default", () => (
    <StyleRoot>
      <DotLoader inline={false} />
    </StyleRoot>
  ));

storiesOf("Dropdown", module)
  .add("Default", () => (
    <Dropdown
      options={["AUD", "EUR", "GBP", "USD"]}
      defaultValue="USD"
      onChange={action(event)}
    />
  ));

storiesOf("Edit link", module)
  .add("Default", () => (
    <EditLink url="/" />
  ));

storiesOf("Expand button", module)
  .add("Default", () => (
    <ExpandButton label="Open" />
  ));

storiesOf("Featured article", module)
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
  ));

storiesOf("Flyout", module)
  .add("Small", () => (
    <Flyout children="I believe I can fly…" />
  ))
  .add("Medium", () => (
    <Flyout children="I believe I can fly…" size="medium" arrow="right" />
  ))
  .add("Fill", () => (
    <Flyout children="I believe I can fly…" fill />
  ));

storiesOf("Heading", module)
  .add("Tiny", () => (
    <Heading size="tiny">Tiny heading</Heading>
  ))
  .add("Small", () => (
    <Heading size="small">Small heading</Heading>
  ))
  .add("Medium (default)", () => (
    <Heading>Medium heading</Heading>
  ))
  .add("Large", () => (
    <Heading size="large">Large heading</Heading>
  ))
  .add("Huge", () => (
    <Heading size="huge">Huge heading</Heading>
  ))
  .add("Thick", () => (
    <Heading weight="thick">Thick heading</Heading>
  ))
  .add("Thin", () => (
    <Heading weight="thin">Thin heading</Heading>
  ))
  .add("Alert importance", () => (
    <Heading importance="alert">Alert importance heading</Heading>
  ))
  .add("High importance", () => (
    <Heading importance="high">High importance heading</Heading>
  ))
  .add("Low importance", () => (
    <Heading importance="low">Low importance heading</Heading>
  ))
  .add("Tight tracking", () => (
    <Heading tracking="tight">Tight tracking heading</Heading>
  ))
  .add("Loose tracking", () => (
    <Heading tracking="loose">Loose tracking heading</Heading>
  ))
  .add("Capitalized", () => (
    <Heading caps>Capitalized heading</Heading>
  ));

storiesOf("Icon button", module)
  .add("Default", () => (
    <IconButton
      icon="share"
      label="Share this"
    />
  ));

storiesOf("Icon callout", module)
  .add("Default", () => (
    <IconCallout
      iconName="SurvivalMoney"
      title="Money and costs"
      copy="Budgets, currency rates and on-the-ground costs"
      link={{
        label: "Go see this thing",
        href: "/",
      }}
    />
  ));

storiesOf("Icon callout group", module)
  .add("Default", () => (
    <StyleRoot>
      <IconCalloutGroup>
        <IconCallout
          iconName="SurvivalVisa"
          title="Visas"
          copy="Dull but essential passport paperwork and entry info"
          link={{
            label: "Go see this thing",
            href: "/",
          }}
        />

        <IconCallout
          iconName="SurvivalUmbrella"
          title="Best time to go"
          copy="Hit the ground at the right time"
          link={{
            label: "Go see this thing",
            href: "/",
          }}
        />

        <IconCallout
          iconName="SurvivalMoney"
          title="Money and costs"
          copy="Budgets, currency rates and on-the-ground costs"
          link={{
            label: "Go see this thing",
            href: "/",
          }}
        />

        <IconCallout
          iconName="SurvivalHealth"
          title="Health"
          copy="Keep safe and well on the open road"
          link={{
            label: "Go see this thing",
            href: "/",
          }}
        />
      </IconCalloutGroup>
    </StyleRoot>
  ));

storiesOf("Image carousel", module)
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
  .add("Default", () => (
    <ImageHero
      image="https://s3.amazonaws.com/static-asset/backpack-ui/ImageHero.770x430.jpg"
      imageSize={[770, 430]}
    />
  ));

storiesOf("Interactive Map", module)
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

storiesOf("Lede", module)
  .add("Default", () => (
    <Lede
      content={`Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id
        est laborum`}
    />
  ));

storiesOf("List item (news)", module)
  .add("Default", () => (
    <StyleRoot>
      <ListItemNews
        title="Ireland is set to have the world’s largest redwood forest outside of California"
        category="Europe"
        categoryLink="/"
        link="/"
        thumbnail="http://placehold.it/110x110"
      />
    </StyleRoot>
  ))
  .add("Sponsored", () => (
    <StyleRoot>
      <ListItemNews
        title="Ireland is set to have the world’s largest redwood forest outside of California"
        category="Europe"
        categoryLink="/"
        link="/"
        thumbnail="http://placehold.it/110x110"
        isSponsored
      />
    </StyleRoot>
  ));

storiesOf("Map marker", module)
  .add("Sights", () => (
    <MapMarker
      poiType="sights"
      size={128}
      hideShadow
    />
  ))
  .add("Sights inverse", () => (
    <MapMarker
      poiType="sights"
      size={128}
      inverse
    />
  ));

storiesOf("More link", module)
  .add("Anchor", () => (
    <MoreLink
      href="/"
      children="View all tours"
    />
  ))
  .add("Button", () => (
    <MoreLink
      onClick={action("MoreLink clicked")}
      children="View all tours"
    />
  ))
  .add("Span", () => (
    <MoreLink
      isNested
      children="View all tours"
    />
  ))
  .add("Small", () => (
    <MoreLink
      href="/"
      children="View all tours"
      size="small"
    />
  ))
  .add("Caps", () => (
    <MoreLink
      href="/"
      children="View all tours"
      caps
    />
  ))
  .add("Hide icon", () => (
    <MoreLink
      href="/"
      children="View all tours"
      hideIcon
    />
  ))
  .add("Arrow up", () => (
    <MoreLink
      href="/"
      children="View all tours"
      arrowDirection="up"
    />
  ))
  .add("Arrow down", () => (
    <MoreLink
      href="/"
      children="View all tours"
      arrowDirection="down"
    />
  ))
  .add("Arrow left", () => (
    <MoreLink
      href="/"
      children="View all tours"
      arrowDirection="left"
    />
  ));

storiesOf("Narrative", module)
  .add("Default", () => (
    <StyleRoot>
      <Narrative
        heading="Walking into the Sacher is like turning back the clocks 100 years."
        htmlContent={`<p>The reception, with its dark-wood panelling, deep red shades
          and heavy gold chandelier, is reminiscent of an expensive fin de siècle
          bordello. The smallest rooms are surprisingly large and suites are truly
          palatial. Junior suites/doubles cost from €480 to €1350.</p>
          <p>As well as extras like original oil paintings throughout and a tiny
          cube of the hotel’s famous Sacher Torte on arrival, there's a hi-tech
          spa complex, with herbal sauna, ice fountain and fitness room.</p>`}
        author={{
          name: "Tim Plaum",
          title: "Lonely Planet Editor",
          avatar: "",
          url: "",
        }}
      />
    </StyleRoot>
  ));

storiesOf("Newsletter", module)
  .add("Default", () => (
    <StyleRoot>
      <Newsletter />
    </StyleRoot>
  ));

storiesOf("No results", module)
  .add("Default", () => (
    <NoResults onReset={action(event)} />
  ));

storiesOf("Number list", module)
  .add("Default", () => (
    <NumberList list={data.numberList} />
  ));

storiesOf("Number marker", module)
  .add("Default", () => (
    <NumberMarker number={4} />
  ));

storiesOf("Placeholder", module)
  .add("Default", () => (
    <Placeholder title="The best place in the world" />
  ));

storiesOf("POI Paginator", module)
  .add("Default", () => (
    <PoiPaginator
      title="Bademiya"
      type="Fusion restaurant"
      neighborhood="Hofburg"
      place="Vienna"
      topChoice
    />
  ));

storiesOf("Profile", module)
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
  .add("default", () => (
    <StyleRoot>
      <PromotedGuidebook
        title="Egypt travel guide"
        url="http://shop.lonelyplanet.com/egypt/egypt-travel-guide-12/"
        imageUrl="http://media.lonelyplanet.com/shop/images/9919-Egypt_travel_guide_-_12th_edition_Large.jpg"
        price={{
          usd: "27.99",
        }}
        description={`In spite of political, financial and social
          turmoil, Egyptians remain  proud and defiant and are as
          welcoming as ever to visitors to their land.`}
      />
    </StyleRoot>
  ));

storiesOf("Provider logo", module)
  .add("booking.com", () => (
    <ProviderLogo provider="bdc" />
  ))
  .add("Hostelworld", () => (
    <ProviderLogo provider="hostelworld" />
  ))
  .add("OpenTable", () => (
    <ProviderLogo provider="opentable" />
  ))
  .add("G Adventures", () => (
    <ProviderLogo provider="gadventures" />
  ))
  .add("Viator", () => (
    <ProviderLogo provider="viator" />
  ));

storiesOf("Rating", module)
  .add("Icon", () => (
    <Rating
      amount={3.5}
      max={5}
      icon
    />
  ))
  .add("Text", () => (
    <Rating
      provider="bdc"
      amount={8}
      max={10}
      description="Great"
    />
  ));

storiesOf("Page header", module)
  .add("Default", () => (
    <StyleRoot>
      <PageHeader
        heading="Ryman Auditorium"
        title="Nashville sights"
        titleHref="/"
        topChoice
        type="Historic building"
        place="Nashville"
        alignment="center"
      />
    </StyleRoot>
  ));

storiesOf("Paginator button", module)
  .add("Up (default)", () => (
    <PaginatorButton
      direction="up"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Down", () => (
    <PaginatorButton
      direction="down"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Left", () => (
    <PaginatorButton
      direction="left"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Right", () => (
    <PaginatorButton
      direction="right"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Medium (default)", () => (
    <PaginatorButton
      size="medium"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Small", () => (
    <PaginatorButton
      size="small"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Loose shadow (default)", () => (
    <PaginatorButton
      shadow="loose"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Tight shadow", () => (
    <PaginatorButton
      shadow="tight"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Chevron arrow (default)", () => (
    <PaginatorButton
      arrow="chevron"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Triangle arrow", () => (
    <PaginatorButton
      arrow="triangle"
      onClick={action("PaginatorButton clicked")}
    />
  ))
  .add("Blue arrow", () => (
    <PaginatorButton
      color="blue"
      onClick={action("PaginatorButton clicked")}
    />
  ));

storiesOf("Related tour", module)
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
  .add("Default", () => (
    <ReviewedBadge />
  ));

storiesOf("Sectional nav", module)
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
  .add("Default", () => (
    <Select options={["USA", "France", "Spain"]} />
  ));

storiesOf("Sights List Item", module)
  .add("Default", () => (
    <SightsListItem
      slug="/path/to/item"
      title="Zimbabwe"
      subtitle="SOUTHERN AFRICA"
      markerNumber={1}
    />
  )).add("With Image", () => (
    <SightsListItem
      slug="/path/to/item"
      title="Zimbabwe"
      subtitle="SOUTHERN AFRICA"
      imgPath="https://s3.amazonaws.com/static-asset/backpack-ui/south-pole.80x60.jpg"
      markerNumber={1}
    />
  ));

storiesOf("Share menu", module)
  .add("Default", () => (
    <ShareMenu
      text="Text"
      url="http://www.lonelyplanet.com/"
      mobile={false}
    />
  ));

storiesOf("Static map", module)
  .add("Default", () => (
    <StaticMap
      location="-86.8595257,35.93225029999999"
      size="278x90"
    />
  ));

storiesOf("Strapline", module)
  .add("Default", () => (
    <Strapline>
      Strapline text
    </Strapline>
  ));

storiesOf("Tag", module)
  .add("Default", () => (
    <Tag
      label="The Americas"
      slug="/americas"
    />
  ));

storiesOf("Tag list", module)
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


storiesOf("Tooltip", module)
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
  .add("Default", () => (
    <TourItinerary
      itinerary={data.tour.itinerary}
      link="/"
    />
  ));

storiesOf("Type selector", module)
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
