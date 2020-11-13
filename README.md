![](https://travis-ci.org/lonelyplanet/backpack-ui.svg?branch=master)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# backpack-ui

Every adventurer needs a set of tools to take along the way! Backpack is the Lonely Planet toolset that we use to build front end
apps.

## Project status

Backpack-ui is a legacy project, now in maintenance mode. In most cases, you should choose a different library.

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
  .add("Default", () => <ComponentName />)
  .add("Some variation", () => <ComponentName prop="value" />);
```

### Notes

- Don't do `import foo from "lodash";`. Makes the bundles asplode.

### Contributing

Please read the [guidelines](https://github.com/lonelyplanet/backpack-ui/blob/master/CONTRIBUTING.md) for contributing before making a pull request.
