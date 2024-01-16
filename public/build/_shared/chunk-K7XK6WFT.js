import {
  IconSearch
} from "/build/_shared/chunk-PN4YPUV5.js";
import {
  CloseButton,
  Input
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  Form,
  Link,
  useSearchParams
} from "/build/_shared/chunk-3GYVE5CM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-GE3GTWYK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/presentation/components/Input/InputSearch.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Input/InputSearch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Input/InputSearch.tsx"
  );
  import.meta.hot.lastModified = "1704535115114.9338";
}
function InputSearch(props) {
  _s();
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("search");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "?page=1&", method: "get", style: {
    width: "25%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { ...props, defaultValue: querySearch || "", type: "text", placeholder: "cari", rightSectionPointerEvents: "all", leftSectionPointerEvents: "all", name: "search", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconSearch, { size: 16 }, void 0, false, {
    fileName: "app/presentation/components/Input/InputSearch.tsx",
    lineNumber: 32,
    columnNumber: 176
  }, this), rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseButton, { "aria-label": "Clear input", style: {
    display: querySearch ? void 0 : "none"
  } }, void 0, false, {
    fileName: "app/presentation/components/Input/InputSearch.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Input/InputSearch.tsx",
    lineNumber: 32,
    columnNumber: 216
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Input/InputSearch.tsx",
    lineNumber: 32,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Input/InputSearch.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(InputSearch, "HWxNQEGJGSlsPJ3ubBB3081mtng=", false, function() {
  return [useSearchParams];
});
_c = InputSearch;
var _c;
$RefreshReg$(_c, "InputSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  InputSearch
};
//# sourceMappingURL=/build/_shared/chunk-K7XK6WFT.js.map
