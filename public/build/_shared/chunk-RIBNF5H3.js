import {
  IconInfoCircle
} from "/build/_shared/chunk-PN4YPUV5.js";
import {
  useTypedLoaderData
} from "/build/_shared/chunk-LIHYYZCT.js";
import {
  Alert,
  Box,
  LoadingOverlay,
  Pagination,
  Table
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  useNavigate,
  useNavigation,
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

// app/presentation/components/Table/Table.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Table/Table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Table/Table.tsx"
  );
  import.meta.hot.lastModified = "1705325834688.3";
}
function CustomTable({
  header,
  rows,
  children,
  totalPagination,
  renderActionHeader,
  ...other
}) {
  _s();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    state
  } = useNavigation();
  const loader = useTypedLoaderData();
  const isLoading = state === "loading";
  const queryPage = +(searchParams.get("page") || 0);
  const page = queryPage > 0 ? queryPage : 1;
  const movePagination = (value) => navigate(`?page=${value}`);
  const Rows = rows ? rows.map((element) => {
    const td = Object.values(element).map((data, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Td, { children: data }, idx, false, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 47,
      columnNumber: 58
    }, this));
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Tr, { children: td }, JSON.stringify(element), false, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 48,
      columnNumber: 12
    }, this);
  }) : null;
  const Header = header.map((head) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Th, { children: head }, head, false, {
    fileName: "app/presentation/components/Table/Table.tsx",
    lineNumber: 50,
    columnNumber: 37
  }, this));
  if (!(Array.isArray(children) && children.length || Rows) && !totalPagination && loader.status < 300) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { variant: "outline", color: "blue", title: "Data Tabel", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconInfoCircle, {}, void 0, false, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 52,
      columnNumber: 75
    }, this), children: "Data tidak ditemukan, silahkan tambahkan atau filter data." }, void 0, false, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 52,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { pos: "relative", ...other, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingOverlay, { visible: isLoading, zIndex: 100, overlayProps: {
      radius: "sm",
      blur: 2
    } }, void 0, false, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 57,
      columnNumber: 4
    }, this),
    loader.status > 300 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { variant: "light", color: "blue", title: "Data obat", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconInfoCircle, {}, void 0, false, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 61,
      columnNumber: 87
    }, this), children: loader?.message || "Gagal mendapatkan data" }, void 0, false, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 61,
      columnNumber: 27
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { withTableBorder: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Thead, { bg: "cyan.6", c: "#ffff", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Tr, { children: [
          Header,
          renderActionHeader ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Th, { style: {
            textAlign: "center"
          }, children: "Aksi" }, void 0, false, {
            fileName: "app/presentation/components/Table/Table.tsx",
            lineNumber: 68,
            columnNumber: 31
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 66,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 65,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table.Tbody, { children: children || Rows }, void 0, false, {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/presentation/components/Table/Table.tsx",
        lineNumber: 64,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pagination, { value: +page, onChange: movePagination, total: totalPagination, size: "sm", mt: "sm", style: {
        justifyContent: "flex-end",
        display: "flex"
      } }, void 0, false, {
        fileName: "app/presentation/components/Table/Table.tsx",
        lineNumber: 75,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 63,
      columnNumber: 16
    }, this)
  ] }, void 0, true, {
    fileName: "app/presentation/components/Table/Table.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(CustomTable, "djp+0dpbyAzK8TBLASoywVQ6J7k=", false, function() {
  return [useSearchParams, useNavigate, useNavigation, useTypedLoaderData];
});
_c = CustomTable;
var _c;
$RefreshReg$(_c, "CustomTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CustomTable
};
//# sourceMappingURL=/build/_shared/chunk-RIBNF5H3.js.map
