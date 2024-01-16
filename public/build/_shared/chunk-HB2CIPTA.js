import {
  DatePickerInput
} from "/build/_shared/chunk-FB5U22CE.js";
import {
  CustomModal
} from "/build/_shared/chunk-ADOTIUEJ.js";
import {
  hasLength,
  isEmail,
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
  PasswordInput,
  Select,
  SimpleGrid,
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

// app/presentation/components/Form/PenggunaForm.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Form/PenggunaForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Form/PenggunaForm.tsx"
  );
  import.meta.hot.lastModified = "1705421999922.0103";
}
function PenggunaForm() {
  _s();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useTypedActionData();
  const loaderData = useTypedLoaderData();
  const submit = useSubmit();
  const isSubmitting = navigation.state !== "idle";
  const {
    id = "",
    address = "",
    birthday = null,
    email = "",
    fullName = "",
    hp = "",
    level = "ADMIN",
    status = "1"
  } = loaderData?.data || {};
  const initialValues = {
    password: "",
    address,
    birthday,
    email,
    fullName,
    level,
    status: status.toString(),
    hp
  };
  const form = useForm({
    initialValues,
    validate: {
      ...id ? null : {
        password: hasLength({
          min: 6
        }, "Minimal 6 karakter")
      },
      birthday: isNotEmpty("Tanggal lahir tidak boleh kosong"),
      email: isEmail("Email tidak valid"),
      fullName: isNotEmpty("Nama tidak boleh kosong"),
      level: isNotEmpty("Level tidak boleh kosong"),
      status: isNotEmpty("Status tidak boleh kosong"),
      hp: matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Hp tidak valid")
    }
  });
  const onClose = () => {
    navigate("..");
  };
  const onSubmit = (values) => {
    if (values?.password?.trim()?.length === 0)
      delete values.password;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomModal, { size: "lg", onClose, title: "Pengguna", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: form.onSubmit(onSubmit), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleGrid, { cols: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { "data-autofocus": true, label: "Nama lengkap", withAsterisk: true, ...form.getInputProps("fullName") }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePickerInput, { label: "Tanggal lahir", withAsterisk: true, ...form.getInputProps("birthday") }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { label: "HP", withAsterisk: true, ...form.getInputProps("hp") }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 104,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Level", data: [{
        label: "ADMIN",
        value: "ADMIN"
      }, {
        label: "KEPALA GUDANG",
        value: "HEAD_WH"
      }], ...form.getInputProps("level"), withAsterisk: true }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Status", data: [{
        label: "AKTIF",
        value: "1"
      }, {
        label: "NON AKTIF",
        value: "0"
      }], ...form.getInputProps("status"), withAsterisk: true }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 112,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { label: "Email", withAsterisk: true, ...form.getInputProps("email") }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { withAsterisk: id ? false : true, ...form.getInputProps("password"), label: "Password", description: id ? "kosongkan jika tidak ingin ubah password" : "" }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Form/PenggunaForm.tsx",
      lineNumber: 101,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { label: "Alamat", ...form.getInputProps("address"), mt: "md" }, void 0, false, {
      fileName: "app/presentation/components/Form/PenggunaForm.tsx",
      lineNumber: 122,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { justify: "flex-end", mt: "md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, loading: isSubmitting, children: "Simpan" }, void 0, false, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Form/PenggunaForm.tsx",
      lineNumber: 123,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/presentation/components/Form/PenggunaForm.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/PenggunaForm.tsx",
    lineNumber: 99,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/presentation/components/Form/PenggunaForm.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s(PenggunaForm, "D1XdMRoT8fdbUQsW9HNPnoXauJg=", false, function() {
  return [useNavigate, useNavigation, useTypedActionData, useTypedLoaderData, useSubmit, useForm];
});
_c = PenggunaForm;
var _c;
$RefreshReg$(_c, "PenggunaForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PenggunaForm
};
//# sourceMappingURL=/build/_shared/chunk-HB2CIPTA.js.map
