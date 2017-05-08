# Log in modal

The `ModalLogIn` component displays the necessary information and controls to help users log in via Facebook, Google, Twitter or email. This component provides an easy way to render the log in controls within a modal by combining the [Modal](https://github.com/lonelyplanet/backpack-ui/blob/master/src/components/modal/index.jsx) and [SocialAuth](https://github.com/lonelyplanet/backpack-ui/blob/master/src/components/modalContent/modalContentSocialAuth.jsx) components rather than having to import them both and render them manually.

### Example usage

```jsx
  <ModalLogIn
    isOpen={this.state.isOpen}
    onClose={this.props.onClose}
  />
```
