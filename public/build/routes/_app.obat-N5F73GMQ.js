import {
  ActionButtons,
  ButtonAdd
} from "/build/_shared/chunk-6QVH6ZDZ.js";
import {
  InputSearch
} from "/build/_shared/chunk-K7XK6WFT.js";
import {
  require_obat
} from "/build/_shared/chunk-DM2RFF4X.js";
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
  Outlet,
  useFetcher,
  useNavigate
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

// app/routes/_app.obat/index.tsx
var import_obat = __toESM(require_obat(), 1);
var import_helper = __toESM(require_helper(), 1);
var import_login = __toESM(require_login(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_app.obat/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_app.obat/index.tsx"
  );
  import.meta.hot.lastModified = "1705419340678.2332";
}
var meta = () => {
  return [{
    title: "Data Obat"
  }, {
    content: "Master obat"
  }];
};
function ObatPage() {
  _s();
  const loader = useTypedLoaderData();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const onUpdate = (id) => navigate(`/obat/${id}`);
  const onDelete = (id) => fetcher.submit(null, {
    action: `/obat/${id}`,
    method: "DELETE"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_app.obat/index.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { justify: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonAdd, { label: "Tambah Obat", goTo: "tambah" }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 54,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputSearch, { mb: "sm" }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 55,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_app.obat/index.tsx",
        lineNumber: 53,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomTable, { totalPagination: loader?.data?.pagination.pageCount || 0, header: ["Kode", "Obat", "Beli", "Jual", "Stok"], renderActionHeader: true, children: loader?.data?.data?.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Tr, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.code }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 59,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.name }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 60,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: rupiah(data.buyPrice) }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 61,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: rupiah(data.sellPrice) }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 62,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data.stock }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 63,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionButtons, { onUpdate: () => onUpdate(data.id), onDelete: () => onDelete(data.id) }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 64,
          columnNumber: 8
        }, this)
      ] }, data.id, true, {
        fileName: "app/routes/_app.obat/index.tsx",
        lineNumber: 58,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/_app.obat/index.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_app.obat/index.tsx",
      lineNumber: 52,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_app.obat/index.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(ObatPage, "xeuYrHMmvJi6W+nXXw8ZVXI+64s=", false, function() {
  return [useTypedLoaderData, useNavigate, useFetcher];
});
_c = ObatPage;
var _c;
$RefreshReg$(_c, "ObatPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ObatPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.obat-N5F73GMQ.js.map
