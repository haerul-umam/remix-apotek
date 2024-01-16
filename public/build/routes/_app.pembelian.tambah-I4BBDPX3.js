import {
  require_pembelian
} from "/build/_shared/chunk-CY2NIO2S.js";
import {
  SelectAsync
} from "/build/_shared/chunk-72OE7WZ6.js";
import {
  DatePickerInput
} from "/build/_shared/chunk-FB5U22CE.js";
import {
  CustomModal
} from "/build/_shared/chunk-ADOTIUEJ.js";
import {
  isInRange,
  isNotEmpty,
  useForm
} from "/build/_shared/chunk-6GUGFI3G.js";
import {
  notifications
} from "/build/_shared/chunk-J4BNWPQD.js";
import {
  useTypedActionData
} from "/build/_shared/chunk-LIHYYZCT.js";
import "/build/_shared/chunk-WQFJ2CRD.js";
import {
  require_login
} from "/build/_shared/chunk-TIURHWID.js";
import {
  Button,
  Group,
  NumberInput,
  Stack,
  TextInput
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  useNavigate,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-3GYVE5CM.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-GE3GTWYK.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/presentation/components/Form/PembelianForm.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Form/PembelianForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Form/PembelianForm.tsx"
  );
  import.meta.hot.lastModified = "1704559824862.1924";
}
function PembelianForm() {
  _s();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useTypedActionData();
  const submit = useSubmit();
  const isSubmitting = navigation.state !== "idle";
  const initialValues = {
    invoice: "",
    medicineId: null,
    supplierId: null,
    date: null,
    total: 0,
    quantity: 0
  };
  const form = useForm({
    initialValues,
    validate: {
      invoice: isNotEmpty("Faktur tidak boleh kosong"),
      medicineId: isNotEmpty("Obat tidak boleh kosong"),
      supplierId: isNotEmpty("Supplier tidak boleh kosong"),
      date: isNotEmpty("Tanggal tidak boleh kosong"),
      total: isInRange({
        min: 1
      }, "Total tidak boleh kosong"),
      quantity: isInRange({
        min: 1
      }, "Kuantitas tidak boleh kosong")
    }
  });
  const onClose = () => {
    navigate("..");
  };
  const onSubmit = (values) => {
    const date = new Date(values.date).toLocaleDateString("en-CA");
    submit({
      ...values,
      date
    }, {
      method: "post",
      action: "../tambah"
    });
  };
  (0, import_react2.useEffect)(() => {
    if (!actionData)
      return;
    if (actionData?.message) {
      const failed = actionData?.status > 300;
      notifications.show({
        title: failed ? "Gagal" : "Sukses",
        message: actionData.message,
        autoClose: 5e3,
        color: failed ? "red" : "blue"
      });
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomModal, { onClose, title: "Satuan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: form.onSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { gap: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { "data-autofocus": true, label: "No Faktur", withAsterisk: true, ...form.getInputProps("invoice") }, void 0, false, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePickerInput, { label: "Tanggal", withAsterisk: true, ...form.getInputProps("date") }, void 0, false, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectAsync, { valueKey: "id", labelKey: "name", label: "Supplier", isError: form.errors.supplierId, actionUrl: "/supplier", onChange: (e) => form.setValues({
      supplierId: e.id
    }) }, void 0, false, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectAsync, { valueKey: "id", labelKey: "name", label: "Obat", isError: form.errors.medicineId, actionUrl: "/obat", onChange: (e) => form.setValues({
      medicineId: e.id
    }) }, void 0, false, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberInput, { label: "Kuantitas", withAsterisk: true, min: 1, ...form.getInputProps("quantity") }, void 0, false, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberInput, { label: "Total", withAsterisk: true, ...form.getInputProps("total"), min: 1 }, void 0, false, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { justify: "flex-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, false, {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 102,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, loading: isSubmitting, children: "Simpan" }, void 0, false, {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 105,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 90,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 88,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
}
_s(PembelianForm, "z5Mw+VurHZ8Awg8/PfwwJWDQCrY=", false, function() {
  return [useNavigate, useNavigation, useTypedActionData, useSubmit, useForm];
});
_c = PembelianForm;
var _c;
$RefreshReg$(_c, "PembelianForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_app.pembelian.tambah/index.tsx
var import_pembelian = __toESM(require_pembelian(), 1);
var import_login = __toESM(require_login(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_app.pembelian.tambah/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_app.pembelian.tambah/index.tsx"
  );
  import.meta.hot.lastModified = "1705419399405.3252";
}
function TambahPembelian() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PembelianForm, {}, void 0, false, {
    fileName: "app/routes/_app.pembelian.tambah/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = TambahPembelian;
var meta = () => {
  return [{
    title: "Tambah pembelian"
  }];
};
var _c2;
$RefreshReg$(_c2, "TambahPembelian");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TambahPembelian as default,
  meta
};
//# sourceMappingURL=/build/routes/_app.pembelian.tambah-I4BBDPX3.js.map
