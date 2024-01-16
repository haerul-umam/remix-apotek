import {
  IconBuildingFactory2,
  IconChevronDown,
  IconChevronRight,
  IconGauge,
  IconLogout,
  IconPackage,
  IconPill,
  IconReportAnalytics,
  IconShoppingBag,
  IconShoppingCart,
  IconUser
} from "/build/_shared/chunk-PN4YPUV5.js";
import {
  require_login
} from "/build/_shared/chunk-TIURHWID.js";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Collapse,
  Group,
  Menu,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
  useDisclosure
} from "/build/_shared/chunk-FKWJBNZD.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useNavigate
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

// app/presentation/components/Sidebar/NavbarLinksGroup.tsx
var import_react = __toESM(require_react(), 1);

// app/presentation/components/Sidebar/NavbarLinksGroup.module.css
var NavbarLinksGroup_module_default = { "control": "NavbarLinksGroup-module__control__t-YWe", "link": "NavbarLinksGroup-module__link__pmxSf", "chevron": "NavbarLinksGroup-module__chevron__IEwyd" };

// app/presentation/components/Sidebar/NavbarLinksGroup.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Sidebar/NavbarLinksGroup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Sidebar/NavbarLinksGroup.tsx"
  );
}
function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link
}) {
  _s();
  const navigate = useNavigate();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = (0, import_react.useState)(initiallyOpened || false);
  const goTo = () => {
    if (link === "#")
      return;
    navigate(link);
  };
  const items = (hasLinks ? links : []).map((link2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: NavbarLinksGroup_module_default.link, to: link2.link, children: link2.label }, link2.label, false, {
    fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
    lineNumber: 42,
    columnNumber: 53
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnstyledButton, { onClick: () => setOpened((o) => !o), className: NavbarLinksGroup_module_default.control, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { onClick: goTo, justify: "space-between", gap: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style: {
        display: "flex",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeIcon, { variant: "light", size: 30, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { style: {
          width: rem(18),
          height: rem(18)
        } }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
          lineNumber: 54,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { ml: "md", children: label }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
        lineNumber: 49,
        columnNumber: 6
      }, this),
      hasLinks && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconChevronRight, { className: NavbarLinksGroup_module_default.chevron, stroke: 1.5, style: {
        width: rem(16),
        height: rem(16),
        transform: opened ? "rotate(-90deg)" : "none"
      } }, void 0, false, {
        fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
        lineNumber: 61,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this),
    hasLinks ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapse, { in: opened, children: items }, void 0, false, {
      fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
      lineNumber: 70,
      columnNumber: 16
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(LinksGroup, "TgjmNi35Y61FoldhR+Wos2TjdxQ=", false, function() {
  return [useNavigate];
});
_c = LinksGroup;
var _c;
$RefreshReg$(_c, "LinksGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/presentation/components/Sidebar/Sidebar.module.css
var Sidebar_module_default = { "links": "Sidebar-module__links__kpX44", "linksInner": "Sidebar-module__linksInner__FbjjM", "footer": "Sidebar-module__footer__lfI7d" };

// app/presentation/components/Sidebar/Sidebar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/presentation/components/Sidebar/Sidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/presentation/components/Sidebar/Sidebar.tsx"
  );
}
var dataLinks = [{
  link: "/",
  label: "Dashboard",
  icon: IconGauge
}, {
  link: "/obat",
  label: "Obat",
  icon: IconPill,
  level: "ADMIN"
}, {
  link: "/penjualan",
  label: "Penjualan",
  icon: IconShoppingCart,
  level: "ADMIN"
}, {
  link: "/pembelian",
  label: "Pembelian",
  icon: IconShoppingBag,
  level: "ADMIN"
}, {
  link: "/supplier",
  label: "Supplier",
  icon: IconBuildingFactory2,
  level: "ADMIN"
}, {
  link: "/satuan",
  label: "Satuan",
  icon: IconPackage,
  level: "ADMIN"
}, {
  link: "/pengguna",
  label: "Pengguna",
  icon: IconUser,
  level: "HEAD_WH"
}, {
  label: "Laporan",
  icon: IconReportAnalytics,
  links: [{
    label: "Obat",
    link: "/laporan-obat"
  }, {
    label: "Pembelian",
    link: "/laporan-pembelian"
  }, {
    label: "Penjualan",
    link: "/laporan-penjualan"
  }],
  link: "#",
  level: "HEAD_WH"
}];
function SideBar({
  children
}) {
  _s2();
  const [opened, {
    toggle
  }] = useDisclosure();
  const data = useLoaderData();
  const links = dataLinks.reduce((filteredArray, item) => {
    if (data.level === "SUPER") {
      filteredArray.push(/* @__PURE__ */ (0, import_react4.createElement)(LinksGroup, { ...item, key: item.label }));
      return filteredArray;
    }
    if (item?.level === data.level) {
      filteredArray.push(/* @__PURE__ */ (0, import_react4.createElement)(LinksGroup, { ...item, key: item.label }));
    }
    if (!item?.level) {
      filteredArray.push(/* @__PURE__ */ (0, import_react4.createElement)(LinksGroup, { ...item, key: item.label }));
    }
    return filteredArray;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppShell, { styles: {
    main: {
      transition: "padding-left 450ms ease",
      background: "#ffff"
    },
    navbar: {
      overflow: "hidden",
      transition: "all 350ms ease, min-width 350ms ease",
      left: opened ? 0 : -300
    },
    header: {
      background: "var(--mantine-color-gray-0)",
      border: "none"
    }
  }, navbar: {
    width: opened ? 300 : 0,
    breakpoint: "sm",
    collapsed: {
      mobile: !opened,
      desktop: !opened
    }
  }, header: {
    height: 60
  }, padding: "md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppShell.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Group, { h: "100%", px: "md", display: "flex", justify: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Burger, { opened, onClick: toggle, size: "sm" }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: "gradient", gradient: {
          from: "indigo",
          to: "grape",
          deg: 156
        }, fw: 600, children: "APOTEK POS" }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 128,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
        lineNumber: 126,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, { trigger: "hover", openDelay: 100, closeDelay: 400, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu.Target, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: data.fullName }, void 0, false, {
            fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
            lineNumber: 140,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconChevronDown, { size: "1rem" }, void 0, false, {
            fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
            lineNumber: 141,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 139,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 138,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu.Dropdown, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu.Item, { color: "red", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconLogout, { style: {
          width: rem(14),
          height: rem(14)
        } }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 145,
          columnNumber: 44
        }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", action: "logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "transparent", c: "red", type: "submit", children: "Logout" }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 152,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 151,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 145,
          columnNumber: 8
        }, this) }, void 0, false, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 144,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
        lineNumber: 137,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
      lineNumber: 125,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
      lineNumber: 124,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppShell.Navbar, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollArea, { className: Sidebar_module_default.links, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: Sidebar_module_default.linksInner, children: links }, void 0, false, {
      fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
      lineNumber: 163,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
      lineNumber: 162,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
      lineNumber: 161,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppShell.Main, { children }, void 0, false, {
      fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
      lineNumber: 166,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s2(SideBar, "3g1357meUZWKpUSFD0+QOBzSGIY=", false, function() {
  return [useDisclosure, useLoaderData];
});
_c2 = SideBar;
var _c2;
$RefreshReg$(_c2, "SideBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_app/route.tsx
var import_login = __toESM(require_login(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_app/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_app/route.tsx"
  );
  import.meta.hot.lastModified = "1705327236746.8157";
}
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SideBar, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_app/route.tsx",
    lineNumber: 26,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_app/route.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = AppLayout;
var _c3;
$RefreshReg$(_c3, "AppLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AppLayout as default
};
//# sourceMappingURL=/build/routes/_app-ZE5UWM22.js.map
