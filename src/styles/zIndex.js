export const values = {
  auto: "auto",
  below: -1,
  default: 1,
  popup: 4000,
  dialog: 5000,
  dropdown: 6000,
  overlay: 7000,
  menu: 8000,
  modal: 9000,
  toast: 10000,
};

// TODO: Deprecate legacy z-index values
const deprecated = {
  slideshowSlide: 3,
  middle: 10,
  top: 20,
  globalHeader: 100,
  mapHolderOpen: 200,
  videoOverlayClose: 1000,
};

export default Object.assign({}, values, deprecated);
