import {
  SupplierForm
} from "/build/_shared/chunk-5HYSACAG.js";
import {
  require_supplier
} from "/build/_shared/chunk-MCQZOWTR.js";
import "/build/_shared/chunk-ADOTIUEJ.js";
import "/build/_shared/chunk-6GUGFI3G.js";
import "/build/_shared/chunk-J4BNWPQD.js";
import "/build/_shared/chunk-LIHYYZCT.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
import {
  require_login
} from "/build/_shared/chunk-TIURHWID.js";
import "/build/_shared/chunk-FKWJBNZD.js";
import "/build/_shared/chunk-3GYVE5CM.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-GE3GTWYK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/_app.supplier.tambah/index.tsx
var import_login = __toESM(require_login(), 1);
var import_supplier = __toESM(require_supplier(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_app.supplier.tambah/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_app.supplier.tambah/index.tsx"
  );
  import.meta.hot.lastModified = "1705419528321.3777";
}
function TambahSupplier() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SupplierForm, {}, void 0, false, {
    fileName: "app/routes/_app.supplier.tambah/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = TambahSupplier;
var meta = () => {
  return [{
    title: "Tambah supplier"
  }];
};
var _c;
$RefreshReg$(_c, "TambahSupplier");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TambahSupplier as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.supplier.tambah-MQSHXIDN.js.map
