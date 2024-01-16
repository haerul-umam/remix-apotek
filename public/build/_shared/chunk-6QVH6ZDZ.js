import {
  IconEdit,
  IconPlus,
  IconTrash
} from "/build/_shared/chunk-PN4YPUV5.js";
import {
  Button,
  Group,
  Menu,
  Tooltip
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  useNavigate
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

// app/presentation/components/Button/ButtonAdd.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Button/ButtonAdd.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Button/ButtonAdd.tsx"
  );
  import.meta.hot.lastModified = "1702826951000";
}
function ButtonAdd({
  label,
  goTo
}) {
  _s();
  const navigation = useNavigate();
  const onClick = () => navigation(goTo);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { mb: "md", rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconPlus, {}, void 0, false, {
    fileName: "app/presentation/components/Button/ButtonAdd.tsx",
    lineNumber: 32,
    columnNumber: 40
  }, this), onClick, children: label }, void 0, false, {
    fileName: "app/presentation/components/Button/ButtonAdd.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(ButtonAdd, "7sZc5EvTsFMSo4mPTlyGC/0+rew=", false, function() {
  return [useNavigate];
});
_c = ButtonAdd;
var _c;
$RefreshReg$(_c, "ButtonAdd");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/presentation/components/Button/ActionButtons.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Button/ActionButtons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Button/ActionButtons.tsx"
  );
  import.meta.hot.lastModified = "1704295800086.699";
}
function ActionButtons({
  onDelete,
  onUpdate
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Group, { gap: 5, justify: "center", children: [
    onUpdate && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { label: "Ubah", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "xs", variant: "light", onClick: onUpdate, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconEdit, { size: 12 }, void 0, false, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 29,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    onDelete && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, { shadow: "sm", width: 200, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { label: "Hapus", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { size: "xs", variant: "light", color: "red", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconTrash, { size: 12 }, void 0, false, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 36,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 34,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu.Dropdown, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu.Label, { children: "Yakin untuk menghapus ?" }, void 0, false, {
          fileName: "app/presentation/components/Button/ActionButtons.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu.Item, { onClick: onDelete, color: "red", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconTrash, {}, void 0, false, {
          fileName: "app/presentation/components/Button/ActionButtons.tsx",
          lineNumber: 43,
          columnNumber: 62
        }, this), children: "Ya hapus!" }, void 0, false, {
          fileName: "app/presentation/components/Button/ActionButtons.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 41,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/presentation/components/Button/ActionButtons.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = ActionButtons;
var _c2;
$RefreshReg$(_c2, "ActionButtons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ButtonAdd,
  ActionButtons
};
//# sourceMappingURL=/build/_shared/chunk-6QVH6ZDZ.js.map
