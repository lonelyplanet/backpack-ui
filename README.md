![](https://travis-ci.org/lonelyplanet/backpack-ui.svg?branch=master)

# backpack-ui
Every adventurer needs a set of tools to take along the way! Backpack is the Lonely Planet toolset that we use to build front end
apps.

### Installation

```shell
npm install backpack-ui --save
```

### Usage

```js
import Button from "backpack-ui/dist/components/button";
```

### Develop components with Storybook

```shell
npm run storybook
```

Open http://localhost:6006/ in your favorite web browser.

Then import your component(s) into stories/index.jsx and render them like so:

```js
storiesOf("Some component name", module)
  .add("Default", () => (
    <ComponentName />
  ))
  .add("Some variation", () => (
    <ComponentName prop="value" />
  ));
```

### Contributing

Please read the [guidelines](https://github.com/lonelyplanet/backpack-ui/blob/master/CONTRIBUTING.md) for contributing before making a pull request.
