import React from "react";
import PropTypes from "prop-types";
import { validReactAttributes } from "../../utils/validReactAttributes";

const Status = {
  PENDING: "pending",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
};

export default class ImageLoader extends React.Component {
  static propTypes = {
    wrapper: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    preloader: PropTypes.func,
    src: PropTypes.string,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    children: PropTypes.node,
    imgProps: PropTypes.shape({}),
  };

  static defaultProps = {
    wrapper: React.createFactory("span"),
  };

  constructor(props) {
    super(props);
    this.state = { status: props.src ? Status.LOADING : Status.PENDING };
  }

  componentDidMount() {
    if (this.state.status === Status.LOADING) {
      this.createLoader();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({
        status: nextProps.src ? Status.LOADING : Status.PENDING,
      });
    }
  }

  componentDidUpdate() {
    if (this.state.status === Status.LOADING && !this.img) {
      this.createLoader();
    }
  }

  componentWillUnmount() {
    this.destroyLoader();
  }

  getClassName() {
    let className = `imageloader ${this.state.status}`;
    if (this.props.className) className = `${className} ${this.props.className}`;
    return className;
  }

  createLoader() {
    this.destroyLoader(); // We can only have one loader at a time.

    this.img = new Image();
    this.img.onload = this.handleLoad.bind(this);
    this.img.onerror = this.handleError.bind(this);
    this.img.src = this.props.src;
  }

  destroyLoader() {
    if (this.img) {
      this.img.onload = null;
      this.img.onerror = null;
      this.img = null;
    }
  }

  handleLoad(event) {
    this.destroyLoader();
    this.setState({ status: Status.LOADED });

    if (this.props.onLoad) this.props.onLoad(event);
  }

  handleError(error) {
    this.destroyLoader();
    this.setState({ status: Status.FAILED });

    if (this.props.onError) this.props.onError(error);
  }

  renderImg() {
    const { src, imgProps } = this.props;
    const props = { src };

    for (const k in imgProps) { // eslint-disable-line
      if (imgProps.hasOwnProperty(k)) { // eslint-disable-line
        props[k] = imgProps[k];
      }
    }

    const sanitizedProps = validReactAttributes(props);

    return <img alt="Loader" {...sanitizedProps} />;
  }

  render() {
    const wrapperProps = {
      className: this.getClassName(),
    };

    if (this.props.style) {
      wrapperProps.style = this.props.style;
    }

    const wrapperArgs = [wrapperProps];

    switch (this.state.status) {
      case Status.LOADED:
        wrapperArgs.push(this.renderImg());
        break;

      case Status.FAILED:
        if (this.props.children) wrapperArgs.push(this.props.children);
        break;

      default:
        if (this.props.preloader) wrapperArgs.push(this.props.preloader());
        break;
    }

    return this.props.wrapper(...wrapperArgs);
  }
}
