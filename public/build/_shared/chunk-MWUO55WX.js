import {
  IconFileDownload
} from "/build/_shared/chunk-PN4YPUV5.js";
import {
  Button,
  Tooltip
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  Link
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

// app/presentation/components/Button/ButtonDownload.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Button/ButtonDownload.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Button/ButtonDownload.tsx"
  );
  import.meta.hot.lastModified = "1704818387160.6804";
}
function ButtonDownload({
  url
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { label: "Download", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: url, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconFileDownload, { size: 16 }, void 0, false, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 30,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 28,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = ButtonDownload;
var _c;
$RefreshReg$(_c, "ButtonDownload");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ButtonDownload
};
//# sourceMappingURL=/build/_shared/chunk-MWUO55WX.js.map
