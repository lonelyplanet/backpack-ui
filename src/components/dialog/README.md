# Dialog

Dialogs contain text and buttons focused on a specific task. They
inform users about critical information, require users to make decisions
or involve multiple tasks.

### Example usage

View the story to see an example on how to control the Dialog with state.

```jsx
  <Dialog
    title="Terms of Service"
    isOpen={isOpen}
    onClose={onClose}
    modal
    centered
    hasOverlay
    actions={[
      <Button
        size="small"
        onClick={onAgree}
        rounded
      >
        I agree
      </Button>,
      <Button
        size="small"
        onClick={onClose}
        color="gray"
        rounded
        border
      >
        I don’t agree
      </Button>,
    ]}
  >
    In order to use Lonely Planet, you must agree to the Terms of
    Service and also read the Privacy Policy and Cookie Policy. For
    more info, please see FAQ.
  </Dialog>
```
