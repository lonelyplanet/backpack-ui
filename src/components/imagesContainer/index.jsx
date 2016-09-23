import React, { Component, PropTypes } from "react";
import Portal from "react-portal";
import uniq from "lodash/uniqBy";
import ImageCarousel from "../imageCarousel";
import ImageGallery from "../imageGallery";
import ImageHero from "../imageHero";

const _ = { uniq };

const propTypes = {
  /**
   * Array of images
   */
  images: PropTypes.array.isRequired,

  /**
   * Array of width, height
   */
  carouselSize: PropTypes.array.isRequired,

  /**
   * Whether or not the layout is mobile
   */
  mobile: PropTypes.bool,
};

const defaultProps = {
  images: [],

  carouselSize: [770, 430],

  mobile: false,
};

class ImagesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isOpen: false,
    };

    [
      "toggleGallery",
      "parseImages",
      "afterChange",
      "returnImageHero",
      "returnImageGallery",
      "returnImageCarousel",
    ].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });
  }

  toggleGallery() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  parseImages(images) {
    const carouselImages = [];
    const galleryImages = [];

    const domain = images[0].split("//")[1].split(".imgix.net")[0];

    const gallerySizes = {
      lpviator: [674, 446],
      lpgadventures: [770, 385],
      lpbookingcom: [500, 333],
      lphostelworld: [800, 422],
      lonelyplanetimages: [1024, 768],
    };

    _.uniq(images).forEach((image) => {
      carouselImages.push(image);

      galleryImages.push({
        src: image,
        thumbnail: image,
        w: gallerySizes[domain] ? gallerySizes[domain][0] : "",
        h: gallerySizes[domain] ? gallerySizes[domain][1] : "",
        title: "",
      });
    });

    return { carouselImages, galleryImages };
  }

  afterChange(newIndex) {
    this.setState({
      index: newIndex,
    });
  }

  returnImageHero(images) {
    return (
      <ImageHero
        image={images[0]}
        imageSize={this.props.carouselSize}
      />
    );
  }

  returnImageGallery() {
    return (
      <Portal
        className="ImageGallery-portal"
        key="ImageGallery"
        style={{ height: 0, width: 0 }}
        isOpened
      >
        <ImageGallery
          isOpen={this.state.isOpen}
          images={this.parseImages(this.props.images).galleryImages}
          options={{
            index: this.state.index,
            history: false,
            counterEl: false,
          }}
          onClose={this.toggleGallery}
        />
      </Portal>
    );
  }

  returnImageCarousel(images) {
    const { carouselSize, mobile } = this.props;

    return (
      <div className="ImageCarousel-container" style={mobile ? { overflow: "hidden" } : {}}>
        <ImageCarousel
          images={images}
          index={this.state.index}
          onExpand={!mobile && this.toggleGallery}
          afterChange={this.afterChange}
          imageSize={carouselSize}
          hideNavigation={mobile}
          lazyLoad
        />

        {!mobile && this.returnImageGallery()}
      </div>
    );
  }

  render() {
    const parsedImages = this.parseImages(this.props.images).carouselImages;

    const component = parsedImages.length > 1 ?
      this.returnImageCarousel(parsedImages) :
      this.returnImageHero(parsedImages);

    return (
      <div className="ImagesContainer">
        {component}
      </div>
    );
  }
}

ImagesContainer.propTypes = propTypes;
ImagesContainer.defaultProps = defaultProps;

export default ImagesContainer;
