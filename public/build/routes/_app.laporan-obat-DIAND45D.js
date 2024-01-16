import {
  InputSearch
} from "/build/_shared/chunk-K7XK6WFT.js";
import {
  require_obat
} from "/build/_shared/chunk-DM2RFF4X.js";
import {
  ButtonDownload
} from "/build/_shared/chunk-MWUO55WX.js";
import {
  rupiah
} from "/build/_shared/chunk-UR2JVBTH.js";
import {
  require_helper
} from "/build/_shared/chunk-V4SLZUJ4.js";
import {
  CustomTable
} from "/build/_shared/chunk-RIBNF5H3.js";
import "/build/_shared/chunk-PN4YPUV5.js";
import {
  useTypedLoaderData
} from "/build/_shared/chunk-LIHYYZCT.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
import {
  require_login
} from "/build/_shared/chunk-TIURHWID.js";
import {
  Group,
  Table
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  Outlet
} from "/build/_shared/chunk-3GYVE5CM.js";
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

// app/routes/_app.laporan-obat/index.tsx
var import_helper = __toESM(require_helper(), 1);
var import_obat = __toESM(require_obat(), 1);
var import_login = __toESM(require_login(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_app.laporan-obat/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_app.laporan-obat/index.tsx"
  );
  import.meta.hot.lastModified = "1705419228238.5437";
}
var meta = () => {
  return [{
    title: "Laporan Obat"
  }];
};
function LaporanObat() {
  _s();
  const loader = useTypedLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_app.laporan-obat/index.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputSearch, {}, void 0, false, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 44,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonDownload, { url: `/report-excel?data=obat` }, void 0, false, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 45,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.laporan-obat/index.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomTable, { mt: "sm", totalPagination: loader?.data?.pagination.pageCount || 0, header: ["Kode", "Obat", "Beli", "Jual", "Stok"], children: loader?.data?.data?.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Tr, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.code }, void 0, false, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 49,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.name }, void 0, false, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 50,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: rupiah(data.buyPrice) }, void 0, false, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 51,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: rupiah(data.sellPrice) }, void 0, false, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 52,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.stock }, void 0, false, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 53,
          columnNumber: 8
        }, this)
      ] }, data.id, true, {
        fileName: "app/routes/_app.laporan-obat/index.tsx",
        lineNumber: 48,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/_app.laporan-obat/index.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.laporan-obat/index.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.laporan-obat/index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(LaporanObat, "VvFnez8ddGTtMs3HXYDTOuvC6wg=", false, function() {
  return [useTypedLoaderData];
});
_c = LaporanObat;
var _c;
$RefreshReg$(_c, "LaporanObat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LaporanObat as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.laporan-obat-DIAND45D.js.map
