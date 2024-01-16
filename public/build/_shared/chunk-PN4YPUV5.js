import {
  require_prop_types
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// node_modules/@tabler/icons-react/dist/esm/createReactComponent.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/@tabler/icons-react/dist/esm/createReactComponent.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var createReactComponent = (iconName, iconNamePascal, iconNode) => {
  const Component = (0, import_react.forwardRef)(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, stroke = 2, children } = _b, rest = __objRest(_b, ["color", "size", "stroke", "children"]);
      return (0, import_react.createElement)(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: stroke,
          className: `tabler-icon tabler-icon-${iconName}`
        }), rest),
        [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...children || []]
      );
    }
  );
  Component.propTypes = {
    color: import_prop_types.default.string,
    size: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
    stroke: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
  };
  Component.displayName = `${iconNamePascal}`;
  return Component;
};

// node_modules/@tabler/icons-react/dist/esm/icons/IconCashOff.js
var IconCashOff = createReactComponent("cash-off", "IconCashOff", [
  [
    "path",
    {
      d: "M13 9h6a2 2 0 0 1 2 2v6m-2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M12.582 12.59a2 2 0 0 0 2.83 2.826", key: "svg-1" }],
  [
    "path",
    {
      d: "M17 9v-2a2 2 0 0 0 -2 -2h-6m-4 0a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2",
      key: "svg-2"
    }
  ],
  ["path", { d: "M3 3l18 18", key: "svg-3" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconCash.js
var IconCash = createReactComponent("cash", "IconCash", [
  [
    "path",
    {
      d: "M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }],
  [
    "path",
    {
      d: "M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2",
      key: "svg-2"
    }
  ]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconPill.js
var IconPill = createReactComponent("pill", "IconPill", [
  [
    "path",
    {
      d: "M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7",
      key: "svg-0"
    }
  ],
  ["path", { d: "M8.5 8.5l7 7", key: "svg-1" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconBuildingFactory2.js
var IconBuildingFactory2 = createReactComponent(
  "building-factory-2",
  "IconBuildingFactory2",
  [
    ["path", { d: "M3 21h18", key: "svg-0" }],
    ["path", { d: "M5 21v-12l5 4v-4l5 4h4", key: "svg-1" }],
    [
      "path",
      {
        d: "M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582",
        key: "svg-2"
      }
    ],
    ["path", { d: "M9 17h1", key: "svg-3" }],
    ["path", { d: "M14 17h1", key: "svg-4" }]
  ]
);

// node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.js
var IconChevronDown = createReactComponent("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.js
var IconChevronRight = createReactComponent("chevron-right", "IconChevronRight", [
  ["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.js
var IconEdit = createReactComponent("edit", "IconEdit", [
  [
    "path",
    {
      d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",
      key: "svg-0"
    }
  ],
  [
    "path",
    {
      d: "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M16 5l3 3", key: "svg-2" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconFileDownload.js
var IconFileDownload = createReactComponent("file-download", "IconFileDownload", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M12 17v-6", key: "svg-2" }],
  ["path", { d: "M9.5 14.5l2.5 2.5l2.5 -2.5", key: "svg-3" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconGauge.js
var IconGauge = createReactComponent("gauge", "IconGauge", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M13.41 10.59l2.59 -2.59", key: "svg-2" }],
  ["path", { d: "M7 12a5 5 0 0 1 5 -5", key: "svg-3" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconInfoCircle.js
var IconInfoCircle = createReactComponent("info-circle", "IconInfoCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 9h.01", key: "svg-1" }],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconLogout.js
var IconLogout = createReactComponent("logout", "IconLogout", [
  [
    "path",
    {
      d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12h12l-3 -3", key: "svg-1" }],
  ["path", { d: "M18 15l3 -3", key: "svg-2" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconPackage.js
var IconPackage = createReactComponent("package", "IconPackage", [
  ["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }],
  ["path", { d: "M12 12l8 -4.5", key: "svg-1" }],
  ["path", { d: "M12 12l0 9", key: "svg-2" }],
  ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }],
  ["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.js
var IconPlus = createReactComponent("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconReportAnalytics.js
var IconReportAnalytics = createReactComponent("report-analytics", "IconReportAnalytics", [
  [
    "path",
    {
      d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2",
      key: "svg-0"
    }
  ],
  [
    "path",
    {
      d: "M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M9 17v-5", key: "svg-2" }],
  ["path", { d: "M12 17v-1", key: "svg-3" }],
  ["path", { d: "M15 17v-3", key: "svg-4" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.js
var IconSearch = createReactComponent("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconShoppingBag.js
var IconShoppingBag = createReactComponent("shopping-bag", "IconShoppingBag", [
  [
    "path",
    {
      d: "M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 11v-5a3 3 0 0 1 6 0v5", key: "svg-1" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconShoppingCart.js
var IconShoppingCart = createReactComponent("shopping-cart", "IconShoppingCart", [
  ["path", { d: "M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
  ["path", { d: "M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }],
  ["path", { d: "M17 17h-11v-14h-2", key: "svg-2" }],
  ["path", { d: "M6 5l14 1l-1 7h-13", key: "svg-3" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.js
var IconTrash = createReactComponent("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]);

// node_modules/@tabler/icons-react/dist/esm/icons/IconUser.js
var IconUser = createReactComponent("user", "IconUser", [
  ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
  ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]
]);

export {
  IconBuildingFactory2,
  IconCashOff,
  IconCash,
  IconChevronDown,
  IconChevronRight,
  IconEdit,
  IconFileDownload,
  IconGauge,
  IconInfoCircle,
  IconLogout,
  IconPackage,
  IconPill,
  IconPlus,
  IconReportAnalytics,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
  IconTrash,
  IconUser
};
//# sourceMappingURL=/build/_shared/chunk-PN4YPUV5.js.map
