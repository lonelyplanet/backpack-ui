# Toast

Toasts provide brief feedback about an operation through a message at the bottom or top of the screen.

There are four types of toasts; `alert`, `error`, `neutral` or `success`.

### Usage

Toasts should contain a very short message related to the operation performed.

The length of time that a toast appears on screen must be controlled by the app where the toast appears using state and a `setTimeout` method.

Only one toast may be displayed at a time.

An `onClick` method can be passed as a prop to dismiss the toast. It is not recommended that this method be used for any other type of action since the toast does not use a focusable element. This should be treated as an enhancement and not as way to get the user to perform an action on the toast.

### Behavior

Depending on the value of the `direction` prop, toasts may animate downwards or upwards from the top or bottom edge of the screen, respectively.

### Placement

Toasts use the highest z-index value `10000` and thus appear above all other elements on screen.

### Specs

* Width: `272px`
* Height: `40px`
* Font size: `11px`
* Line height: `13px`
* Horizontal padding: `24px`
* Spacing from top or bottom edge of screen: `24px`
* Animation duration: `200ms`

### Properties

* `children`: Message text as a string
* `type`: Controls the color and icon of the toast; can be one of `alert`, `error`, `neutral` or `success`
* `direction`: Controls where the toast appears and how it animates into view; can be one of `top` or `bottom`
* `visible`: Boolean property to control whether or not the toast is visible or hidden
* `affixed`: Boolean property that applies styles which will horizontally center and affix the toast to either the top or bottom of the window, depending on the value of `direction`
* `onClick`: Method called to dismiss the toast when it is clicked
* `style`: An object or array of styles to override the component’s given styles; ideally only used for positioning if `affixed` is not sufficient

### Code example

```jsx
<Toast
  type="success"
  direction="bottom"
  visible={this.state.visible}
  affixed
>
  Successfully logged in
</Toast>
```
