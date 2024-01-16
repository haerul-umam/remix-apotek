import {
  PenggunaForm
} from "/build/_shared/chunk-HB2CIPTA.js";
import {
  require_user
} from "/build/_shared/chunk-TUYE7RHD.js";
import "/build/_shared/chunk-FB5U22CE.js";
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

// app/routes/_app.pengguna.tambah/index.tsx
var import_user = __toESM(require_user(), 1);
var import_login = __toESM(require_login(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_app.pengguna.tambah/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_app.pengguna.tambah/index.tsx"
  );
  import.meta.hot.lastModified = "1705419434753.0938";
}
function TambahPengguna() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PenggunaForm, {}, void 0, false, {
    fileName: "app/routes/_app.pengguna.tambah/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = TambahPengguna;
var meta = () => {
  return [{
    title: "Tambah pengguna"
  }];
};
var _c;
$RefreshReg$(_c, "TambahPengguna");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TambahPengguna as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.pengguna.tambah-XXCXREUH.js.map
