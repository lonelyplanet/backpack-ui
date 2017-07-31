# Click outside

Enhance a React component with a Higher Order Component that provides click outside detection.

### Usage

The component that you wish to enhance with click outside detection must:

1. have a method named `handleClickOutside`
2. require a prop named `innerRef` that is a function; this prop will be passed in by the HOC

See example.jsx for an example of a component that is wrapped with clickOutside.
