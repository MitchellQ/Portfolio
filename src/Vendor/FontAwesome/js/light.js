/*!
 * Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      fn();
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "angle-double-left": [320, 512, [], "f100", "M153.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L192.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L153 264.5c-4.6-4.7-4.6-12.3.1-17zm-128 17l117.8 116c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L64.7 256l102.2-100.4c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L25 247.5c-4.6 4.7-4.6 12.3.1 17z"],
    "angle-double-right": [320, 512, [], "f101", "M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z"],
    "angle-up": [256, 512, [], "f106", "M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z"],
    "brackets-curly": [576, 512, [], "f7ea", "M571.31 244.69l-45.25-45.25A48 48 0 0 1 512 165.49V80a48 48 0 0 0-48-48h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a16 16 0 0 1 16 16v85.48a80 80 0 0 0 23.44 56.58L537.38 256l-33.94 33.94A80 80 0 0 0 480 346.52V432a16 16 0 0 1-16 16h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a48 48 0 0 0 48-48v-85.49a48 48 0 0 1 14.06-33.95l45.25-45.25a16 16 0 0 0 0-22.62zM184 32h-72a48 48 0 0 0-48 48v85.49a48 48 0 0 1-14.06 33.95L4.69 244.69a16 16 0 0 0 0 22.62l45.25 45.25A48 48 0 0 1 64 346.51V432a48 48 0 0 0 48 48h72a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-72a16 16 0 0 1-16-16v-85.48a80 80 0 0 0-23.44-56.58L38.62 256l33.94-33.94A80 80 0 0 0 96 165.48V80a16 16 0 0 1 16-16h72a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8z"],
    "circle": [512, 512, [], "f111", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"],
    "envelope": [512, 512, [], "f0e0", "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"],
    "file-download": [384, 512, [], "f56d", "M369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zm95.98 431.42c0 8.8-7.2 16-16 16H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01zM208 216c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v88.02h-52.66c-11 0-20.59 6.41-25 16.72-4.5 10.52-2.38 22.62 5.44 30.81l68.12 71.78c5.34 5.59 12.47 8.69 20.09 8.69s14.75-3.09 20.09-8.7l68.12-71.75c7.81-8.2 9.94-20.31 5.44-30.83-4.41-10.31-14-16.72-25-16.72H208V216zm42.84 120.02l-58.84 62-58.84-62h117.68z"],
    "graduation-cap": [640, 512, [], "f19d", "M612.16 153.99l-265-85.68c-17.81-5.75-36.5-5.75-54.31 0l-265 85.68C10.94 159.46 0 174.38 0 192s10.94 32.54 27.84 38.01l29.71 9.6c-3.3 6.18-5.74 12.83-7.33 19.8C39.53 264.59 32 275.32 32 288c0 12.73 7.57 23.52 18.33 28.67L32.28 428.53C30.67 438.52 36.19 448 43.62 448h40.75c7.43 0 12.96-9.48 11.34-19.47L77.67 316.67C88.43 311.52 96 300.73 96 288c0-10.6-5.49-19.54-13.43-25.37 1.49-4.66 3.8-8.86 6.57-12.81l53.47 17.29L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.61-116.89L612.16 230c16.9-5.46 27.84-20.38 27.84-38s-10.94-32.54-27.84-38.01zM479.48 381.86C468.72 393.19 414.04 416 320 416c-94.04 0-148.72-22.81-159.48-34.14l13.09-104.73 119.24 38.55c2.6.84 25.72 9.23 54.31 0l119.24-38.55 13.08 104.73zm122.8-182.28l-265 85.68c-11.31 3.66-23.25 3.66-34.56 0l-175.67-56.8 195.89-36.74c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.7-10.16-14.39-18.66-12.77l-203.78 38.2c-12.4 2.32-23.51 7.65-33.08 14.83l-42.49-13.74c-7.85-2.55-7.46-12.74 0-15.15l265-85.68c15.1-4.88 27.84-2.17 34.56 0l265 85.68c7.39 2.39 7.91 12.6.01 15.16z"],
    "map-marker": [384, 512, [], "f041", "M192 0C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"],
    "plane-alt": [576, 512, [], "f3de", "M462.5 192.319H353.904l-33.695-64.33c6.53-.113 11.79-5.433 11.79-11.99V76c0-6.627-5.373-12-12-12h-33.307l-26.298-50.208C255.257 4.858 245.982 0 236.714 0h-54.175c-17.549 0-30.473 16.313-26.563 33.331l27.989 160.119c-20.696 1.057-40.83 2.827-58.722 5.169l-31.987-57.441-.259-.447c-4.896-8.161-13.85-13.23-23.366-13.23H29.723c-17.213 0-30.09 15.749-26.721 32.594l13.41 67.052C5.51 235.553 0 245.225 0 256.001c0 10.775 5.51 20.447 16.412 28.854l-13.41 67.049c-3.375 16.877 9.542 32.597 26.722 32.595l39.911-.001c9.516-.002 18.467-5.072 23.362-13.23l32.245-57.887c17.892 2.342 38.025 4.112 58.723 5.169l-27.989 160.119C152.064 495.694 164.999 512 182.539 512h54.175c9.003 0 18.012-4.512 23.456-13.372L286.689 448H320c6.627 0 12-5.373 12-12v-40c0-6.558-5.262-11.878-11.793-11.99l33.697-64.332 108.596.002c48.364 0 113.5-16.362 113.5-63.68 0-47.602-65.772-63.681-113.5-63.681zm0 95.361l-128.441-.001L233.849 480h-45.621l33.588-192.14c-45.335-1.352-67.17-2.232-113.778-9.356l-41.205 73.994-31.315.001L55 256.001 35.517 159.5h31.315l41.206 73.996c46.89-7.168 68.859-8.017 113.777-9.356L188.228 32h45.621l100.21 192.319H462.5c32.513 0 81.5 10.7 81.5 31.681 0 23.203-56.152 31.68-81.5 31.68z"],
    "tools": [512, 512, [], "f7d9", "M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"]
  };

  bunker(function () {
    defineIcons('fal', icons);
  });

}());
