# Auth

Auth components can be combined to create the UI for logging into
lonelyplanet.com. Some components are just wrappers of other components
with some extra styling (i.e., `AuthDisclaimer`, `AuthEmailLink`). These
components serve a very specific purpose and therefore shouldn't be used
on their own.

### Example usage

```jsx
<AuthContainer hasLogo>
  <AuthMessage>
    Organize your research & unlock
    tools like bookmarking.
  </AuthMessage>

  <AuthSocialButtons
    actions={authActions()}
  />

  <AuthEmailLink
    onClick={(event) => {
      event.preventDefault();
      authActions().passwordless();
    }}
  />

  <AuthDisclaimer> ... </AuthDisclaimer>
</AuthContainer>
```
