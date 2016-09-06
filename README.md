# CUI Icons

Version 1.0


## Description

Icon Library for Core Covisint UI Functionality

The CUI Icon library has curated a select set of icons that have specific meaning and purpose through the CUI visual language.  These icons have been curated and prepared for use as SVG icons and tested across the variety of devices and browsers supported by the framework.

Additionally, you'll find the entire font-awesome library is available for use as SVG format as well.

## Usage
It is _super_ easy to use any of the icons in the library in your CUI project.  You can simply use the [cui-icon](/docs/packages/cui-ng/directives/cui-icon.md) directive!

Or, just replace #covisint-logo with the name of your svg and set viewBox to your svg's size.

```html
<svg class="cui-header__svg-logo" viewBox="0 0 640 124"><use xlink:href="node_modules/@covisint/cui-icons/dist/logos/logos-out.svg#covisint-logo"></use></svg>
```

## Contributing
Adding Icons to the Covisint UI Icon Library

1. Add your icons to `src/resources/logos` or `src/resource/icons` depending on what type of icon you're adding.
2. Jenkins will run `node generateSvgList.js` and `grunt build` which will compile all the icons into 2 different output files - `dist/icons/icons-out.svg` and `dist/logos/logos-out.svg`. These will be availabe to consumers of this library (`bower install --save cui-icons`).

### Notes:

* Your icons will need to follow a certain syntax to be accepted by the build task:
  1. No hardcoded fills (or it won't be customizable with css)
  2. All the paths should be wrapped in a group with an id equal to its filename. (everything outside of that group will be ignored)
