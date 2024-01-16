import {
  require_node
} from "/build/_shared/chunk-TMJLOEVS.js";
import {
  hasLength,
  isEmail,
  useForm
} from "/build/_shared/chunk-6GUGFI3G.js";
import {
  notifications
} from "/build/_shared/chunk-J4BNWPQD.js";
import {
  require_login
} from "/build/_shared/chunk-TIURHWID.js";
import {
  Button,
  Paper,
  PasswordInput,
  TextInput,
  Title
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  useActionData,
  useLoaderData,
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// empty-module:~/session.server
var require_session = __commonJS({
  "empty-module:~/session.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_auth.login.tsx
var import_node = __toESM(require_node(), 1);
var import_login = __toESM(require_login(), 1);
var import_session = __toESM(require_session(), 1);
var import_react2 = __toESM(require_react(), 1);

// app/presentation/styles/AuthenticationImage.module.css
var AuthenticationImage_module_default = { "wrapper": "AuthenticationImage-module__wrapper__uPohY", "form": "AuthenticationImage-module__form__nmr-z", "title": "AuthenticationImage-module__title__6hrgv" };

// app/routes/_auth.login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.login.tsx"
  );
}
function AuthPage() {
  _s();
  const navigation = useNavigation();
  const submit = useSubmit();
  const actionData = useActionData();
  const loaderData = useLoaderData();
  const isSubmitting = navigation.state !== "idle";
  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    },
    validate: {
      email: isEmail("Email tidak valid"),
      password: hasLength({
        min: 2
      }, "Password minimal 6 karakter")
    }
  });
  const onSubmit = (values) => {
    submit(values, {
      method: "POST"
    });
  };
  (0, import_react2.useEffect)(() => {
    let message;
    if (actionData) {
      message = actionData.message;
    }
    if (loaderData) {
      message = loaderData.error;
    }
    if (message) {
      notifications.show({
        title: "Gagal",
        message,
        autoClose: 5e3,
        color: "red"
      });
    }
  }, [actionData, loaderData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: AuthenticationImage_module_default.wrapper, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, { className: AuthenticationImage_module_default.form, radius: 0, p: 30, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { order: 2, className: AuthenticationImage_module_default.title, ta: "center", mt: "md", mb: 50, children: "Selamat datang di Apptik" }, void 0, false, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 73,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: form.onSubmit(onSubmit), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { ...form.getInputProps("email"), label: "Email", placeholder: "hello@gmail.com", size: "md" }, void 0, false, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 77,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { label: "Password", placeholder: "password", mt: "md", size: "md", ...form.getInputProps("password") }, void 0, false, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 79,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, mt: "xl", size: "md", type: "submit", disabled: isSubmitting, loading: isSubmitting, children: "Login" }, void 0, false, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 81,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 72,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s(AuthPage, "RBSO+Q/LRZCPK+FwAhSMPGBo4JQ=", false, function() {
  return [useNavigation, useSubmit, useActionData, useLoaderData, useForm];
});
_c = AuthPage;
var _c;
$RefreshReg$(_c, "AuthPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AuthPage as default
};
//# sourceMappingURL=/build/routes/_auth.login-FD5MV5W4.js.map
