# Avatar marker

The `AvatarMarker` component displays the logged-in user’s avatar next to their name and links to the user’s public profile page when clicked. Its primary use case is for the mobile global navigation menu.

### Example usage

```jsx
  <AvatarMarker
    href={profile.url}
    src={profile.avatar}
    username={profile.name}
  />
```
