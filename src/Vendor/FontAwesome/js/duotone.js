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
    "angle-double-left": [448, 512, [], "f100", ["M224 239l135.61-136a23.78 23.78 0 0 1 33.8 0L416 125.64a23.94 23.94 0 0 1 0 33.89l-96.16 96.37L416 352.27a23.94 23.94 0 0 1 0 33.89L393.53 409a23.78 23.78 0 0 1-33.8 0L224.12 273a23.94 23.94 0 0 1-.1-34z", "M32.11 239l135.55-136a23.77 23.77 0 0 1 33.79 0L224 125.74a23.94 23.94 0 0 1 0 33.89L127.89 256l96 96.47a23.94 23.94 0 0 1 0 33.89L201.35 409a23.77 23.77 0 0 1-33.79 0L32 273a24 24 0 0 1 .11-34z"]],
    "angle-double-right": [448, 512, [], "f101", ["M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z", "M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"]],
    "angle-up": [320, 512, [], "f106", ["M63.52 351.84a23.94 23.94 0 0 1-33.85 0L7.05 329.33l-.18-.18a23.77 23.77 0 0 1 .18-33.61l96.42-96.15L160 255.86z", "M313.13 295.81l-.18-.17L177 160.11a24 24 0 0 0-34-.11l-39.51 39.39L256.33 352a23.94 23.94 0 0 0 33.85 0L313 329.43a23.78 23.78 0 0 0 .13-33.62z"]],
    "brackets-curly": [576, 512, [], "f7ea", ["M566.64 233.37a32 32 0 0 1 0 45.25l-45.25 45.25a32 32 0 0 0-9.39 22.64V384a96 96 0 0 1-96 96h-48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h48a32 32 0 0 0 32-32v-37.48a96 96 0 0 1 28.13-67.89L498.76 256l-22.62-22.62A96 96 0 0 1 448 165.47V128a32 32 0 0 0-32-32h-48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h48a96 96 0 0 1 96 96v37.48a32 32 0 0 0 9.38 22.65l45.25 45.24z", "M208 32h-48a96 96 0 0 0-96 96v37.48a32.12 32.12 0 0 1-9.38 22.65L9.38 233.37a32 32 0 0 0 0 45.25l45.25 45.25A32.05 32.05 0 0 1 64 346.51V384a96 96 0 0 0 96 96h48a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-48a32 32 0 0 1-32-32v-37.48a96 96 0 0 0-28.13-67.89L77.26 256l22.63-22.63A96 96 0 0 0 128 165.48V128a32 32 0 0 1 32-32h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"]],
    "circle": [512, 512, [], "f111", ["M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z", "M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z"]],
    "envelope": [512, 512, [], "f0e0", ["M256.47 352h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V400a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V183.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52zM464 64H48a48 48 0 0 0-48 48v19a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4 23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131v-19a48 48 0 0 0-48-48z", "M512 131v52.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V131a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.69 12.12 49.75 41.4 72.93 41.4h.94c23.18 0 56.24-29.28 72.93-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131z"]],
    "file-download": [384, 512, [], "f56d", ["M384 128H272a16 16 0 0 1-16-16V0H24A23.94 23.94 0 0 0 0 23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0 24-23.88V128zm-83.55 219.36L204 443.06a17.06 17.06 0 0 1-24 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36z", "M377 105L279.1 7a24 24 0 0 0-17-7H256v112a16 16 0 0 0 16 16h112v-6.1a23.9 23.9 0 0 0-7-16.9zm-87.82 215H224v-80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v80H94.82c-14.28 0-21.4 17.29-11.24 27.36l96.42 95.7a17.06 17.06 0 0 0 24 0l96.45-95.7c10.13-10.07 3.01-27.36-11.27-27.36z"]],
    "graduation-cap": [640, 512, [], "f19d", ["M323.07 175.7L118.8 215.6a48.1 48.1 0 0 0-38.74 44.73 32 32 0 0 1 2.21 53.94l25.4 114.26A16 16 0 0 1 92 448H35.94a16 16 0 0 1-15.61-19.47l25.39-114.27a32 32 0 0 1 2.33-54 80.16 80.16 0 0 1 64.62-76.07l204.26-39.89a16 16 0 1 1 6.14 31.4z", "M622.33 198.8l-279 85.7a80 80 0 0 1-46.79 0L99.67 224a47.84 47.84 0 0 1 19.13-8.39l204.27-39.9a16 16 0 1 0-6.14-31.4l-204.26 39.88a79.87 79.87 0 0 0-47.57 29.18l-47.44-14.58c-23.54-7.23-23.54-38.36 0-45.59L296.6 67.5a79.92 79.92 0 0 1 46.8 0l278.93 85.7c23.55 7.24 23.55 38.36 0 45.6zM352.79 315.09a111.94 111.94 0 0 1-65.59 0l-145-44.55L128 384c0 35.35 86 64 192 64s192-28.65 192-64l-14.19-113.47z"]],
    "map-marker": [384, 512, [], "f041", ["M384 192c0 77.41-27 99-172.27 309.67a24 24 0 0 1-39.46 0C27 291 0 269.41 0 192 0 86 86 0 192 0s192 86 192 192z", ""]],
    "plane-alt": [576, 512, [], "f3de", ["M197.2 200.4c-32.6 1 150.5-.4 150.5-.4l-38.6-72H324a12 12 0 0 0 12-12V76a12 12 0 0 0-12-12h-49.2L243.5 5.7A12.18 12.18 0 0 0 233.3 0h-57.8a11.94 11.94 0 0 0-11.6 15zm0 111.2L163.9 497a12 12 0 0 0 11.6 15h57.8a12 12 0 0 0 10.2-5.7l31.3-58.3H324a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12h-14.9l38.6-72s-183.1-1.4-150.5-.4z", "M576 256c0 30.9-46.6 56-104 56l-274.8-.4a755.21 755.21 0 0 1-89.9-7.8l-39.8 66.4a12.08 12.08 0 0 1-10.3 5.8H14.6a12 12 0 0 1-11.7-14.4l16.5-82.8C6.9 271.9 0 264.1 0 256s6.9-15.9 19.4-22.8L2.8 150.4A12 12 0 0 1 14.6 136h42.6a12.08 12.08 0 0 1 10.3 5.8l39.8 66.4a755.21 755.21 0 0 1 89.9-7.8L472 200c57.4 0 104 25.1 104 56z"]],
    "tools": [512, 512, [], "f7d9", ["M193.8 227.7L18.74 402.76a64 64 0 0 0 90.5 90.5l148.88-148.88a75.36 75.36 0 0 1 6.58-45.78zM64 472a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm443.73-362.9a12 12 0 0 0-20.12-5.51L413.25 178l-67.88-11.31-11.31-67.93 74.36-74.36a12 12 0 0 0-5.66-20.16 143.92 143.92 0 0 0-136.58 37.93c-39.64 39.64-50.55 97.1-34.05 147.2l-4.43 4.43 70.9 70.9a74.25 74.25 0 0 1 85.4 13.9l7.21 7.21a141.74 141.74 0 0 0 78.61-40 143.94 143.94 0 0 0 37.91-136.71z", "M501.1 395.7a37.36 37.36 0 0 1 0 52.7l-52.7 52.7a37.18 37.18 0 0 1-52.58.12l-.12-.12L278.6 384c-23.1-23.1-27.5-57.6-13.9-85.4L158.1 192H96L0 64 64 0l128 96v62.1l106.6 106.6a74.25 74.25 0 0 1 85.4 13.9z"]]
  };

  bunker(function () {
    defineIcons('fad', icons);
  });

}());
