import {
  InputDateRange,
  useDateRangeParamsInvalid
} from "/build/_shared/chunk-RVANRUO7.js";
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
  require_pembelian
} from "/build/_shared/chunk-CY2NIO2S.js";
import "/build/_shared/chunk-FB5U22CE.js";
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

// app/routes/_app.laporan-pembelian/index.tsx
var import_helper = __toESM(require_helper(), 1);
var import_pembelian = __toESM(require_pembelian(), 1);
var import_login = __toESM(require_login(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_app.laporan-pembelian/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_app.laporan-pembelian/index.tsx"
  );
  import.meta.hot.lastModified = "1705419332582.4167";
}
var meta = () => {
  return [{
    title: "Laporan Pembelian"
  }];
};
function LaporanPembelian() {
  _s();
  const loader = useTypedLoaderData();
  const {
    errorElement,
    start,
    end
  } = useDateRangeParamsInvalid();
  if (errorElement)
    return errorElement;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_app.laporan-pembelian/index.tsx",
      lineNumber: 49,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputDateRange, { my: "sm" }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 52,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonDownload, { url: `/report-excel?data=pembelian&start=${start}&end=${end}` }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 53,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.laporan-pembelian/index.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomTable, { mt: "sm", totalPagination: loader?.data?.pagination.pageCount || 0, header: ["No Faktur", "Obat", "Supplier", "Tanggal", "Kuantitas", "Total"], children: loader?.data?.data?.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Tr, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.invoice }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 57,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.medicineName }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 58,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.supplierName }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 59,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.date.toISOString().split("T")[0] }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 60,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.quantity }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 61,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: rupiah(data.total) }, void 0, false, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 62,
          columnNumber: 8
        }, this)
      ] }, data.id, true, {
        fileName: "app/routes/_app.laporan-pembelian/index.tsx",
        lineNumber: 56,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/_app.laporan-pembelian/index.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.laporan-pembelian/index.tsx",
      lineNumber: 50,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.laporan-pembelian/index.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(LaporanPembelian, "H7omMrUpVq0Uxi63I6WhFxntPFU=", false, function() {
  return [useTypedLoaderData, useDateRangeParamsInvalid];
});
_c = LaporanPembelian;
var _c;
$RefreshReg$(_c, "LaporanPembelian");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LaporanPembelian as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.laporan-pembelian-VLTWO4AZ.js.map
