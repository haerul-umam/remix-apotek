import {
  CustomModal
} from "/build/_shared/chunk-ADOTIUEJ.js";
import {
  isNotEmpty,
  matches,
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
  Stack,
  TextInput,
  Textarea
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

// app/presentation/components/Form/SupplierForm.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Form/SupplierForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Form/SupplierForm.tsx"
  );
  import.meta.hot.lastModified = "1703428037000";
}
function SupplierForm() {
  _s();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useTypedActionData();
  const loaderData = useTypedLoaderData();
  const submit = useSubmit();
  const detailData = loaderData?.data;
  const isSubmitting = navigation.state !== "idle";
  const initialValues = {
    name: detailData?.name || "",
    hp: detailData?.hp || "",
    address: detailData?.address || ""
  };
  const form = useForm({
    initialValues,
    validate: {
      name: isNotEmpty("Nama tidak boleh kosong"),
      hp: matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Telpon tidak valid"),
      address: (value) => value && value?.trim()?.length > 255 ? "Alamat maksimal 255 karakter" : null
    }
  });
  const onClose = () => {
    navigate("..");
  };
  const onSubmit = (values) => {
    const method = detailData?.id ? "patch" : "post";
    const action = detailData?.id ? "." : "../tambah";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomModal, { onClose, title: "Supplier", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: form.onSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { gap: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { "data-autofocus": true, label: "Nama", withAsterisk: true, ...form.getInputProps("name") }, void 0, false, {
      fileName: "app/presentation/components/Form/SupplierForm.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { label: "Telpon", withAsterisk: true, ...form.getInputProps("hp") }, void 0, false, {
      fileName: "app/presentation/components/Form/SupplierForm.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { label: "Alamat", ...form.getInputProps("address") }, void 0, false, {
      fileName: "app/presentation/components/Form/SupplierForm.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { justify: "flex-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, false, {
        fileName: "app/presentation/components/Form/SupplierForm.tsx",
        lineNumber: 82,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, loading: isSubmitting, children: "Simpan" }, void 0, false, {
        fileName: "app/presentation/components/Form/SupplierForm.tsx",
        lineNumber: 85,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Form/SupplierForm.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 77,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 75,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(SupplierForm, "D1XdMRoT8fdbUQsW9HNPnoXauJg=", false, function() {
  return [useNavigate, useNavigation, useTypedActionData, useTypedLoaderData, useSubmit, useForm];
});
_c = SupplierForm;
var _c;
$RefreshReg$(_c, "SupplierForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SupplierForm
};
//# sourceMappingURL=/build/_shared/chunk-5HYSACAG.js.map
