import React, { Component } from "react";

const clickOutside = (WrappedComponent) => {
  class HigherOrderComponent extends Component {
    constructor(props) {
      super(props);

      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
      if (typeof this.innerRef === "undefined") {
        console.warn("Incorrect or missing ref on enhanced component; ref must use props.innerRef"); // eslint-disable-line no-console
      }

      if (typeof window !== "undefined") {
        window.addEventListener("click", this.handleClickOutside, false);
      }
    }

    componentWillUnmount() {
      if (typeof window !== "undefined") {
        window.removeEventListener("click", this.handleClickOutside, false);
      }
    }

    handleClickOutside(event) {
      const target = event.target;
      const isPassedFunction = typeof this.outerRef.handleClickOutside === "function";
      const notTarget = !this.innerRef || !this.innerRef.contains(target);

      if (notTarget && isPassedFunction) {
        this.outerRef.handleClickOutside(event);
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          innerRef={node => (this.innerRef = node)}
          ref={node => (this.outerRef = node)}
        />
      );
    }
  }

  return HigherOrderComponent;
};

export default clickOutside;
