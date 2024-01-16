import {
  SelectAsync
} from "/build/_shared/chunk-72OE7WZ6.js";
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
  useTypedActionData,
  useTypedLoaderData
} from "/build/_shared/chunk-LIHYYZCT.js";
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
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-GE3GTWYK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/presentation/components/Form/ObatForm.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Form/ObatForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Form/ObatForm.tsx"
  );
  import.meta.hot.lastModified = "1704536457020.818";
}
function ObatForm() {
  _s();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useTypedActionData();
  const loaderData = useTypedLoaderData();
  const submit = useSubmit();
  const isSubmitting = navigation.state !== "idle";
  const {
    code = "",
    name = "",
    buyPrice = "",
    sellPrice = "",
    stock = "",
    id = null,
    unitId = "",
    unitName = ""
  } = loaderData?.data || {};
  const initialValues = {
    code,
    name,
    buyPrice,
    sellPrice,
    ...id ? null : {
      stock
    },
    unitId
  };
  const form = useForm({
    initialValues,
    validate: {
      code: isNotEmpty("Kode tidak boleh kosong"),
      name: isNotEmpty("Nama tidak boleh kosong"),
      buyPrice: isInRange({
        min: 1
      }, "Harga tidak boleh 0"),
      sellPrice: isInRange({
        min: 1
      }, "Harga tidak boleh 0"),
      unitId: isNotEmpty("Satuan tidak boleh kosong"),
      ...id ? null : {
        stock: isNotEmpty("Stok tidak boleh kosong")
      }
    }
  });
  const onClose = () => {
    navigate("..");
  };
  const onSubmit = (values) => {
    const method = id ? "patch" : "post";
    const action = id ? "." : "../tambah";
    submit(values, {
      method,
      action
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { "data-autofocus": true, label: "Kode", withAsterisk: true, ...form.getInputProps("code") }, void 0, false, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { label: "Nama", withAsterisk: true, ...form.getInputProps("name") }, void 0, false, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    !id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberInput, { label: "Stok", withAsterisk: true, min: 0, ...form.getInputProps("stock") }, void 0, false, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 104,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberInput, { label: "Harga Beli", withAsterisk: true, decimalScale: 2, ...form.getInputProps("buyPrice") }, void 0, false, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberInput, { label: "Harga Jual", withAsterisk: true, decimalScale: 2, ...form.getInputProps("sellPrice") }, void 0, false, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectAsync, { valueKey: "id", labelKey: "name", label: "Satuan", isError: form.errors.unitId, actionUrl: "/satuan", onChange: (e) => form.setValues({
      unitId: e.id
    }), defaultValue: {
      id: unitId,
      name: unitName
    } }, void 0, false, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { justify: "flex-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: onClose, variant: "transparent", color: "red", children: "Batal" }, void 0, false, {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 114,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, loading: isSubmitting, children: "Simpan" }, void 0, false, {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 117,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 101,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 99,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s(ObatForm, "D1XdMRoT8fdbUQsW9HNPnoXauJg=", false, function() {
  return [useNavigate, useNavigation, useTypedActionData, useTypedLoaderData, useSubmit, useForm];
});
_c = ObatForm;
var _c;
$RefreshReg$(_c, "ObatForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ObatForm
};
//# sourceMappingURL=/build/_shared/chunk-JBCBDQ4E.js.map
