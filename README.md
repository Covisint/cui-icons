# Cui-Icons
Icon Library for Core Covisint UI Functionality

## Adding Icons to the Covisint UI Icon Library

1. Add your icons to `src/resources/logos` or `src/resource/icons` depending on what type of icon you're adding.
2. Jenkins will run `node generateSvgList.js` and `grunt build` which will compile all the icons into 2 different output files - `dist/icons/icons-out.svg` and `dist/logos/logos-out.svg`. These will be availabe to consumers of this library (`bower install --save cui-icons`).

### Notes:

* Your icons will need to follow a certain syntax to be accepted by the build task:
  1. No hardcoded fills (or it won't be customizable with css)
  2. All the paths should be wrapped in a group with an id equal to its filename. (everything outside of that group will be ignored)

## Usage
  
  Replace #covisint-logo with the name of your svg and set viewBox to your svg's size.

```html
<svg class="cui-header__svg-logo" viewBox="0 0 640 124"><use xlink:href="bower_components/cui-icons/dist/logos/logos-out.svg#covisint-logo"></use></svg>
```
