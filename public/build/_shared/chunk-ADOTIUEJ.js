import {
  Modal
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-GE3GTWYK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/presentation/components/Modal/Modal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Modal/Modal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Modal/Modal.tsx"
  );
  import.meta.hot.lastModified = "1704104403113.6545";
}
function CustomModal({
  title,
  children,
  onClose,
  size = "md"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { centered: true, opened: true, onClose, title, overlayProps: {
    backgroundOpacity: 0.55,
    blur: 3
  }, closeOnClickOutside: false, size, children }, void 0, false, {
    fileName: "app/presentation/components/Modal/Modal.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = CustomModal;
var _c;
$RefreshReg$(_c, "CustomModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CustomModal
};
//# sourceMappingURL=/build/_shared/chunk-ADOTIUEJ.js.map
