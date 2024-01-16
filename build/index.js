var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
import "dayjs/locale/id.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "@remix-run/react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-JJVIJCBP.css";

// app/root.tsx
import { Notifications } from "@mantine/notifications";

// app/presentation/components/Error/ErrorBoundary.tsx
import { Button, Flex, Text, Title } from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function ErrorBoundaryPage(props) {
  let navigate = useNavigate(), gohome = () => navigate("..");
  return /* @__PURE__ */ jsxDEV2(
    Flex,
    {
      h: "100vh",
      justify: "center",
      align: "center",
      direction: "column",
      gap: "lg",
      children: [
        /* @__PURE__ */ jsxDEV2(Title, { children: props.title }, void 0, !1, {
          fileName: "app/presentation/components/Error/ErrorBoundary.tsx",
          lineNumber: 20,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV2(Text, { c: "gray", size: "lg", children: props.message }, void 0, !1, {
          fileName: "app/presentation/components/Error/ErrorBoundary.tsx",
          lineNumber: 21,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV2(Button, { variant: "subtle", size: "md", onClick: gohome, children: "Kembali" }, void 0, !1, {
          fileName: "app/presentation/components/Error/ErrorBoundary.tsx",
          lineNumber: 24,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/presentation/components/Error/ErrorBoundary.tsx",
      lineNumber: 13,
      columnNumber: 3
    },
    this
  );
}

// app/root.tsx
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import { DatesProvider } from "@mantine/dates";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV3(Document, { children: /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3(ColorSchemeScript, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(MantineProvider, { children: [
        /* @__PURE__ */ jsxDEV3(Notifications, { position: "top-right", zIndex: 1e3 }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 58,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV3(DatesProvider, { settings: { locale: "id" }, children }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 59,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
var meta = () => [
  { title: "Aplikasi apotek" },
  { name: "description", content: "aplikasi pos apotek" }
];
function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? /* @__PURE__ */ jsxDEV3(Document, { children: /* @__PURE__ */ jsxDEV3(
    ErrorBoundaryPage,
    {
      title: "Terjadi kesalahan respon server, mungkin kamu tersesat",
      message: error.data
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 82,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ jsxDEV3(Document, { children: /* @__PURE__ */ jsxDEV3(
    ErrorBoundaryPage,
    {
      title: "Terjadi kesalahan, silahkan coba beberapa saat kembali",
      message: error.message
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 91,
      columnNumber: 5
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV3(Document, { children: /* @__PURE__ */ jsxDEV3(ErrorBoundaryPage, { title: "Error occurred !", message: "Unkown error" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this);
}

// app/routes/_app.laporan-pembelian/index.tsx
var app_exports = {};
__export(app_exports, {
  default: () => LaporanPembelian,
  loader: () => loader,
  meta: () => meta2
});
import z4 from "zod";

// app/presentation/components/Table/Table.tsx
import {
  Alert,
  Box,
  LoadingOverlay,
  Pagination,
  Table
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { useNavigate as useNavigate2, useNavigation, useSearchParams } from "@remix-run/react";
import { useTypedLoaderData } from "remix-typedjson";
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function CustomTable({
  header,
  rows,
  children,
  totalPagination,
  renderActionHeader,
  ...other
}) {
  let [searchParams] = useSearchParams(), navigate = useNavigate2(), { state } = useNavigation(), loader18 = useTypedLoaderData(), isLoading = state === "loading", queryPage = +(searchParams.get("page") || 0), page = queryPage > 0 ? queryPage : 1, movePagination = (value) => navigate(`?page=${value}`), Rows = rows ? rows.map((element) => {
    let td = Object.values(element).map((data, idx) => /* @__PURE__ */ jsxDEV4(Table.Td, { children: data }, idx, !1, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 43,
      columnNumber: 6
    }, this));
    return /* @__PURE__ */ jsxDEV4(Table.Tr, { children: td }, JSON.stringify(element), !1, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 45,
      columnNumber: 12
    }, this);
  }) : null, Header = header.map((head) => /* @__PURE__ */ jsxDEV4(Table.Th, { children: head }, head, !1, {
    fileName: "app/presentation/components/Table/Table.tsx",
    lineNumber: 48,
    columnNumber: 38
  }, this));
  return !(Array.isArray(children) && children.length || Rows) && !totalPagination && loader18.status < 300 ? /* @__PURE__ */ jsxDEV4(
    Alert,
    {
      variant: "outline",
      color: "blue",
      title: "Data Tabel",
      icon: /* @__PURE__ */ jsxDEV4(IconInfoCircle, {}, void 0, !1, {
        fileName: "app/presentation/components/Table/Table.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      children: "Data tidak ditemukan, silahkan tambahkan atau filter data."
    },
    void 0,
    !1,
    {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 56,
      columnNumber: 4
    },
    this
  ) : /* @__PURE__ */ jsxDEV4(Box, { pos: "relative", ...other, children: [
    /* @__PURE__ */ jsxDEV4(
      LoadingOverlay,
      {
        visible: isLoading,
        zIndex: 100,
        overlayProps: { radius: "sm", blur: 2 }
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Table/Table.tsx",
        lineNumber: 69,
        columnNumber: 4
      },
      this
    ),
    loader18.status > 300 ? /* @__PURE__ */ jsxDEV4(
      Alert,
      {
        variant: "light",
        color: "blue",
        title: "Data obat",
        icon: /* @__PURE__ */ jsxDEV4(IconInfoCircle, {}, void 0, !1, {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 79,
          columnNumber: 12
        }, this),
        children: loader18?.message || "Gagal mendapatkan data"
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Table/Table.tsx",
        lineNumber: 75,
        columnNumber: 5
      },
      this
    ) : /* @__PURE__ */ jsxDEV4(Fragment, { children: [
      /* @__PURE__ */ jsxDEV4(Table, { withTableBorder: !0, children: [
        /* @__PURE__ */ jsxDEV4(Table.Thead, { bg: "cyan.6", c: "#ffff", children: /* @__PURE__ */ jsxDEV4(Table.Tr, { children: [
          Header,
          renderActionHeader ? /* @__PURE__ */ jsxDEV4(Table.Th, { style: { textAlign: "center" }, children: "Aksi" }, void 0, !1, {
            fileName: "app/presentation/components/Table/Table.tsx",
            lineNumber: 90,
            columnNumber: 10
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 87,
          columnNumber: 8
        }, this) }, void 0, !1, {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 86,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV4(Table.Tbody, { children: children || Rows }, void 0, !1, {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 94,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/presentation/components/Table/Table.tsx",
        lineNumber: 85,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV4(
        Pagination,
        {
          value: +page,
          onChange: movePagination,
          total: totalPagination,
          size: "sm",
          mt: "sm",
          style: {
            justifyContent: "flex-end",
            display: "flex"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Table/Table.tsx",
          lineNumber: 96,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Table/Table.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Table/Table.tsx",
    lineNumber: 68,
    columnNumber: 3
  }, this);
}

// app/presentation/components/Input/InputDateRange.tsx
import { DatePickerInput } from "@mantine/dates";
import { useNavigate as useNavigate3 } from "@remix-run/react";

// app/utils/_helper.ts
function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}
function formatDate(date) {
  return date.toLocaleDateString("en-CA");
}

// app/presentation/components/Input/InputDateRange.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function InputDateRange({
  start,
  end,
  onChange,
  ...other
}) {
  let navigate = useNavigate3(), maxdays = 60, inputDate = start ? new Date(start) : /* @__PURE__ */ new Date(), futureDate = new Date(inputDate), pastDate = new Date(inputDate);
  return futureDate.setDate(inputDate.getDate() + maxdays), pastDate.setDate(inputDate.getDate() - maxdays), /* @__PURE__ */ jsxDEV5(
    DatePickerInput,
    {
      ...other,
      allowSingleDateInRange: !0,
      type: "range",
      onChange: onChange || ((value) => {
        let [start2, end2] = value;
        start2 && end2 && navigate(
          `?start=${formatDate(new Date(start2))}&end=${formatDate(new Date(end2))}`
        );
      }),
      ...start && end ? { defaultValue: [start, end] } : null,
      maxDate: futureDate,
      minDate: pastDate,
      style: { width: "25%" },
      placeholder: "Tanggal"
    },
    void 0,
    !1,
    {
      fileName: "app/presentation/components/Input/InputDateRange.tsx",
      lineNumber: 38,
      columnNumber: 3
    },
    this
  );
}

// app/presentation/components/Button/ButtonDownload.tsx
import { Button as Button2, Tooltip } from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconFileDownload } from "@tabler/icons-react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function ButtonDownload({ url }) {
  return /* @__PURE__ */ jsxDEV6(Tooltip, { label: "Download", children: /* @__PURE__ */ jsxDEV6(Link, { to: url, target: "_blank", children: /* @__PURE__ */ jsxDEV6(Button2, { size: "sm", children: /* @__PURE__ */ jsxDEV6(IconFileDownload, { size: 16 }, void 0, !1, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 10,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 8,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Button/ButtonDownload.tsx",
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

// app/utils/_helper.server.ts
function prepareSearch(url) {
  let searchParams = new URL(url).searchParams, queryString = searchParams.get("search")?.toUpperCase() || "", queryPage = +(searchParams.get("page") || 0), page = queryPage > 0 ? queryPage - 1 : 0, start = searchParams.get("start"), end = searchParams.get("end");
  return { page, queryString, start, end };
}

// app/services/pembelian.server.ts
import { z } from "zod";
import { zfd } from "zod-form-data";

// app/utils/prisma.server.ts
import { PrismaClient } from "@prisma/client";
var prisma;
global.__db || (global.__db = new PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/_helper/constant.ts
var errorMessage = {
  default: "Terjadi kesalahan, silahkan coba sesaat lagi."
};

// app/services/pembelian.server.ts
import exceljs from "exceljs";
var createPembelianDto = zfd.formData({
  invoice: zfd.text(z.string().toUpperCase()),
  medicineId: zfd.numeric(z.coerce.number()),
  supplierId: zfd.numeric(z.coerce.number()),
  quantity: zfd.numeric(z.coerce.number().min(0)),
  total: zfd.numeric(z.coerce.number().positive()),
  date: zfd.text(z.coerce.date())
}), createPembelian = async (createPembelianDto2) => {
  try {
    let { medicineId, supplierId, date, quantity, invoice } = createPembelianDto2;
    if (await prisma.purchase.findFirst({
      where: { invoice }
    }))
      return {
        data: null,
        message: "No faktur sudah terdaftar",
        status: 400
      };
    let med = await prisma.medicine.findUnique({
      where: { id: +medicineId, isDeleted: 0 }
    });
    if (!med)
      return {
        data: null,
        message: `Obat dengan id ${medicineId} tidak terdaftar`,
        status: 404
      };
    let supplier = await prisma.supplier.findUnique({
      where: { id: supplierId, isDeleted: 0 }
    });
    if (!supplier)
      return {
        data: null,
        message: `Supplier dengan id ${supplierId} tidak terdaftar`,
        status: 404
      };
    let [data] = await prisma.$transaction([
      prisma.purchase.create({
        data: {
          ...createPembelianDto2,
          date: new Date(date),
          supplierName: supplier.name,
          medicineName: med.name
        }
      }),
      prisma.medicine.update({
        data: { stock: med.stock + quantity },
        where: { id: medicineId }
      })
    ]);
    return { data, message: "Berhasil tambah pembelian", status: 201 };
  } catch {
    throw new Error(errorMessage.default);
  }
}, deletePembelian = async (id) => {
  try {
    let purchase = await prisma.purchase.findUnique({
      where: { id }
    });
    if (!purchase)
      return {
        data: null,
        message: `Pembelian dengan id ${id} tidak terdaftar`,
        status: 404
      };
    let medicine = await prisma.medicine.findUnique({
      where: { id: purchase.medicineId }
    }), [data] = await prisma.$transaction([
      prisma.purchase.delete({
        where: { id }
      }),
      prisma.medicine.update({
        data: { stock: medicine.stock - purchase.quantity },
        where: { id: purchase.medicineId }
      })
    ]);
    return { data, message: "Berhasil hapus pembelian", status: 200 };
  } catch {
    throw new Error(errorMessage.default);
  }
}, findAllPembelian = async (query) => {
  let { page = 0, search, start, end } = query, limit = 10;
  try {
    let where = {};
    search && (where.invoice = {
      startsWith: `%${search.toUpperCase()}`
    }), start && end && (where.date = {
      gte: new Date(start),
      lte: new Date(end)
    });
    let [purchases, totalCount] = await prisma.$transaction([
      prisma.purchase.findMany({ where, skip: page * limit, take: limit }),
      prisma.purchase.count({ where })
    ]), pageCount = Math.ceil(totalCount / limit);
    return !purchases.length && query?.search ? {
      data: null,
      message: "Data yang kamu cari tidak tersedia",
      status: 404
    } : {
      data: { data: purchases.map((purchase) => ({
        ...purchase,
        total: parseFloat(purchase.total)
      })), pagination: { totalCount, page, pageCount } },
      status: 200
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, exportPembelian = async (query) => {
  try {
    let { start = /* @__PURE__ */ new Date(), end = /* @__PURE__ */ new Date() } = query, sales = (await prisma.purchase.findMany({
      where: { date: { gte: new Date(start), lte: new Date(end) } }
    })).map((sale) => ({
      ...sale,
      date: sale.date.toLocaleDateString("en-CA"),
      total: parseFloat(sale.total)
    })), wb = new exceljs.Workbook(), sheet = wb.addWorksheet("Penjualan"), columns = [
      { key: "invoice", header: "No Nota" },
      { key: "medicineName", header: "Obat" },
      { key: "date", header: "Tanggal" },
      { key: "supplierName", header: "Supplier" },
      { key: "quantity", header: "Kuantitas" },
      { key: "total", header: "Total" }
    ];
    return sheet.columns = columns, sheet.addRows(sales), sheet.getRow(1).eachCell((cell) => {
      let c = cell;
      c.font = { bold: !0 };
    }), sheet.columns.forEach((column) => {
      let maxLength = 0;
      column?.eachCell({ includeEmpty: !0 }, (cell) => {
        let columnLength = cell.value ? cell.value.toString().length : 10;
        columnLength > maxLength && (maxLength = columnLength);
      });
      let padding = 2;
      column.width = maxLength < 10 ? 10 : maxLength + padding;
    }), await wb.xlsx.writeBuffer();
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/routes/_app.laporan-pembelian/index.tsx
import { typedjson, useTypedLoaderData as useTypedLoaderData2 } from "remix-typedjson";
import { Outlet as Outlet2 } from "@remix-run/react";
import { Group, Table as Table2 } from "@mantine/core";

// app/hooks/useDateRangeParamsCheck.tsx
import z2 from "zod";
import { useSearchParams as useSearchParams2 } from "@remix-run/react";
import { Alert as Alert2 } from "@mantine/core";
import { IconInfoCircle as IconInfoCircle2 } from "@tabler/icons-react";
import { Fragment as Fragment2, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function useDateRangeParamsInvalid() {
  let [searchParams] = useSearchParams2(), start = searchParams.get("start"), end = searchParams.get("end"), stringToDate = z2.coerce.date(), errorElement = null;
  return (!stringToDate.safeParse(start).success || !stringToDate.safeParse(end).success) && (errorElement = /* @__PURE__ */ jsxDEV7(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV7(InputDateRange, {}, void 0, !1, {
      fileName: "app/hooks/useDateRangeParamsCheck.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV7(
      Alert2,
      {
        variant: "light",
        color: "red",
        title: "Request tidak valid",
        icon: /* @__PURE__ */ jsxDEV7(IconInfoCircle2, {}, void 0, !1, {
          fileName: "app/hooks/useDateRangeParamsCheck.tsx",
          lineNumber: 24,
          columnNumber: 12
        }, this),
        mt: "sm",
        children: "Data tanggal tidak sesuai format, gunakan format YYYY-MM-DD !"
      },
      void 0,
      !1,
      {
        fileName: "app/hooks/useDateRangeParamsCheck.tsx",
        lineNumber: 20,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/hooks/useDateRangeParamsCheck.tsx",
    lineNumber: 18,
    columnNumber: 4
  }, this)), { start, end, errorElement };
}

// app/services/login.server.ts
import bcrypt from "bcryptjs";
import { z as z3 } from "zod";
import { zfd as zfd2 } from "zod-form-data";

// app/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
var { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 30 * 24 * 60 * 60,
    sameSite: "lax",
    secrets: [process.env.SECURE_SECRET],
    secure: !1
  }
});

// app/services/login.server.ts
import { redirect } from "@remix-run/node";
var loginDto = zfd2.formData({
  email: zfd2.text(z3.string().email()),
  password: zfd2.text(z3.string().min(6))
}), createUserSession = async (userId, redirectPath) => {
  let session = await getSession();
  return session.set("userId", userId), redirect(redirectPath, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, destroyUserSession = async (request) => {
  let session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, getUserFromSession = async (request) => {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  if (!userId)
    throw redirect("/login");
  let user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user)
    throw destroyUserSession(request);
  let { id, level, fullName, isDeleted, status } = user;
  return { id, level, fullName, isDeleted, status };
}, requireUserSession = async (request, level) => {
  let user = await getUserFromSession(request);
  if (!user)
    throw redirect("/login");
  if (level && user.level !== "SUPER" && user.level !== level)
    throw redirect("/");
  if (user.isDeleted || !user.status) {
    let session = await getSession(request.headers.get("Cookie"));
    throw redirect("/login", {
      headers: {
        "Set-Cookie": await destroySession(session)
      }
    });
  }
  return user;
}, createFlashErrorSession = async (message, redirectPath) => {
  let session = await getSession();
  return session.flash("error", message), redirect(redirectPath, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, login = async (loginDto2) => {
  try {
    let { email, password: plainText } = loginDto2, exist = await prisma.user.findUnique({
      where: { email }
    });
    return !bcrypt.compareSync(
      plainText,
      exist?.password || ""
    ) || !exist ? createFlashErrorSession("Pengguna atau password salah", "/login") : exist.isDeleted || !exist.status ? createFlashErrorSession("Pengguna sudah tidak aktif", "/login") : createUserSession(exist.id, "/");
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/routes/_app.laporan-pembelian/index.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta2 = () => [{ title: "Laporan Pembelian" }];
function LaporanPembelian() {
  let loader18 = useTypedLoaderData2(), { errorElement, start, end } = useDateRangeParamsInvalid();
  return errorElement || /* @__PURE__ */ jsxDEV8(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV8(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/_app.laporan-pembelian/index.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV8("main", { children: [
      /* @__PURE__ */ jsxDEV8(Group, { children: [
        /* @__PURE__ */ jsxDEV8(InputDateRange, { my: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 29,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV8(
          ButtonDownload,
          {
            url: `/report-excel?data=pembelian&start=${start}&end=${end}`
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_app.laporan-pembelian/index.tsx",
            lineNumber: 30,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_app.laporan-pembelian/index.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV8(
        CustomTable,
        {
          mt: "sm",
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: [
            "No Faktur",
            "Obat",
            "Supplier",
            "Tanggal",
            "Kuantitas",
            "Total"
          ],
          children: loader18?.data?.data?.map((data) => /* @__PURE__ */ jsxDEV8(Table2.Tr, { children: [
            /* @__PURE__ */ jsxDEV8(Table2.Td, { children: data.invoice }, void 0, !1, {
              fileName: "app/routes/_app.laporan-pembelian/index.tsx",
              lineNumber: 48,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV8(Table2.Td, { children: data.medicineName }, void 0, !1, {
              fileName: "app/routes/_app.laporan-pembelian/index.tsx",
              lineNumber: 49,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV8(Table2.Td, { children: data.supplierName }, void 0, !1, {
              fileName: "app/routes/_app.laporan-pembelian/index.tsx",
              lineNumber: 50,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV8(Table2.Td, { children: data.date.toISOString().split("T")[0] }, void 0, !1, {
              fileName: "app/routes/_app.laporan-pembelian/index.tsx",
              lineNumber: 51,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV8(Table2.Td, { children: data.quantity }, void 0, !1, {
              fileName: "app/routes/_app.laporan-pembelian/index.tsx",
              lineNumber: 52,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV8(Table2.Td, { children: rupiah(data.total) }, void 0, !1, {
              fileName: "app/routes/_app.laporan-pembelian/index.tsx",
              lineNumber: 53,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.laporan-pembelian/index.tsx",
            lineNumber: 47,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.laporan-pembelian/index.tsx",
          lineNumber: 34,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.laporan-pembelian/index.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.laporan-pembelian/index.tsx",
    lineNumber: 25,
    columnNumber: 3
  }, this);
}
var loader = async ({ request }) => {
  await requireUserSession(request, "HEAD_WH");
  let { page, queryString: search, start, end } = prepareSearch(request.url), stringToDate = z4.coerce.date();
  if (!stringToDate.safeParse(start).success || !stringToDate.safeParse(end).success)
    return typedjson({ data: null, message: "Invalid date" }, { status: 400 });
  let now = /* @__PURE__ */ new Date(), startDate = start ? new Date(start) : now, endDate = end ? new Date(end) : now, data = await findAllPembelian({
    page,
    search,
    start: startDate.toLocaleDateString("en-CA"),
    end: endDate.toLocaleDateString("en-CA")
  });
  return typedjson(data);
};

// app/routes/_app.laporan-penjualan/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  default: () => LaporanPenjualan,
  loader: () => loader2,
  meta: () => meta3
});
import z6 from "zod";
import { typedjson as typedjson2, useTypedLoaderData as useTypedLoaderData3 } from "remix-typedjson";
import { Outlet as Outlet3 } from "@remix-run/react";
import { Group as Group2, Table as Table3 } from "@mantine/core";

// app/services/penjualan.server.ts
import exceljs2 from "exceljs";
import { z as z5 } from "zod";
import { zfd as zfd3 } from "zod-form-data";
var createPenjualanDto = zfd3.formData({
  medicineId: zfd3.numeric(z5.coerce.number()),
  quantity: zfd3.numeric(z5.coerce.number().min(0)),
  total: zfd3.numeric(z5.coerce.number().positive()),
  date: zfd3.text(z5.coerce.date())
}), createPenjualan = async (createPembelianDto2) => {
  try {
    let { medicineId, date, quantity } = createPembelianDto2, med = await prisma.medicine.findUnique({
      where: { id: +medicineId, isDeleted: 0 }
    });
    if (!med)
      return {
        data: null,
        message: `Obat dengan id ${medicineId} tidak terdaftar`,
        status: 404
      };
    if (!med.stock)
      return {
        data: null,
        message: `Obat ${med.name} kehabisan stock`,
        status: 400
      };
    let timestamp = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), [data] = await prisma.$transaction([
      prisma.sale.create({
        data: {
          ...createPembelianDto2,
          date: new Date(date),
          medicineName: med.name,
          invoice: `${timestamp}`
        }
      }),
      prisma.medicine.update({
        data: { stock: med.stock - quantity },
        where: { id: medicineId }
      })
    ]);
    return { data, message: "Berhasil tambah penjualan", status: 201 };
  } catch {
    throw new Error(errorMessage.default);
  }
}, deletePenjualan = async (id) => {
  try {
    let sale = await prisma.sale.findUnique({
      where: { id }
    });
    if (!sale)
      return {
        data: null,
        message: `Penjualan dengan id ${id} tidak terdaftar`,
        status: 404
      };
    let medicine = await prisma.medicine.findUnique({
      where: { id: sale.medicineId }
    }), [data] = await prisma.$transaction([
      prisma.sale.delete({
        where: { id }
      }),
      prisma.medicine.update({
        data: { stock: medicine.stock + sale.quantity },
        where: { id: sale.medicineId }
      })
    ]);
    return { data, message: "Berhasil hapus penjualan", status: 200 };
  } catch {
    throw new Error(errorMessage.default);
  }
}, exportPenjualan = async (query) => {
  try {
    let { start = /* @__PURE__ */ new Date(), end = /* @__PURE__ */ new Date() } = query, sales = (await prisma.sale.findMany({
      where: { date: { gte: new Date(start), lte: new Date(end) } }
    })).map((sale) => ({
      ...sale,
      date: sale.date.toLocaleDateString("en-CA"),
      total: parseFloat(sale.total)
    })), wb = new exceljs2.Workbook(), sheet = wb.addWorksheet("Penjualan"), columns = [
      { key: "invoice", header: "No Nota" },
      { key: "medicineName", header: "Obat" },
      { key: "date", header: "Tanggal" },
      { key: "quantity", header: "Kuantitas" },
      { key: "total", header: "Total" }
    ];
    return sheet.columns = columns, sheet.addRows(sales), sheet.getRow(1).eachCell((cell) => {
      let c = cell;
      c.font = { bold: !0 };
    }), sheet.columns.forEach((column) => {
      let maxLength = 0;
      column?.eachCell({ includeEmpty: !0 }, (cell) => {
        let columnLength = cell.value ? cell.value.toString().length : 10;
        columnLength > maxLength && (maxLength = columnLength);
      });
      let padding = 2;
      column.width = maxLength < 10 ? 10 : maxLength + padding;
    }), await wb.xlsx.writeBuffer();
  } catch {
    throw new Error(errorMessage.default);
  }
}, findAllPenjualan = async (query) => {
  let { page = 0, search, start, end } = query, limit = 10;
  try {
    let where = {};
    search && (where.invoice = {
      startsWith: `%${search.toUpperCase()}`
    }), start && end && (where.date = {
      gte: new Date(start),
      lte: new Date(end)
    });
    let [sales, totalCount] = await prisma.$transaction([
      prisma.sale.findMany({ where, skip: page * limit, take: limit }),
      prisma.sale.count({ where })
    ]), pageCount = Math.ceil(totalCount / limit);
    return !sales.length && query?.search ? {
      data: null,
      message: "Data yang kamu cari tidak tersedia",
      status: 404
    } : {
      data: { data: sales.map((sale) => ({
        ...sale,
        total: parseFloat(sale.total)
      })), pagination: { totalCount, page, pageCount } },
      status: 200
    };
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/routes/_app.laporan-penjualan/index.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta3 = () => [{ title: "Laporan Penjualan" }];
function LaporanPenjualan() {
  let loader18 = useTypedLoaderData3(), { errorElement, start, end } = useDateRangeParamsInvalid();
  return errorElement || /* @__PURE__ */ jsxDEV9(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV9(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/_app.laporan-penjualan/index.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV9("main", { children: [
      /* @__PURE__ */ jsxDEV9(Group2, { children: [
        /* @__PURE__ */ jsxDEV9(InputDateRange, { my: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.laporan-penjualan/index.tsx",
          lineNumber: 29,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV9(
          ButtonDownload,
          {
            url: `/report-excel?data=penjualan&start=${start}&end=${end}`
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_app.laporan-penjualan/index.tsx",
            lineNumber: 30,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_app.laporan-penjualan/index.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV9(
        CustomTable,
        {
          mt: "sm",
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: ["No Nota", "Obat", "Tanggal", "Kuantitas", "Total"],
          children: loader18?.data?.data?.map((data) => /* @__PURE__ */ jsxDEV9(Table3.Tr, { children: [
            /* @__PURE__ */ jsxDEV9(Table3.Td, { children: data.invoice }, void 0, !1, {
              fileName: "app/routes/_app.laporan-penjualan/index.tsx",
              lineNumber: 41,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV9(Table3.Td, { children: data.medicineName }, void 0, !1, {
              fileName: "app/routes/_app.laporan-penjualan/index.tsx",
              lineNumber: 42,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV9(Table3.Td, { children: data.date.toISOString().split("T")[0] }, void 0, !1, {
              fileName: "app/routes/_app.laporan-penjualan/index.tsx",
              lineNumber: 43,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV9(Table3.Td, { children: data.quantity }, void 0, !1, {
              fileName: "app/routes/_app.laporan-penjualan/index.tsx",
              lineNumber: 44,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV9(Table3.Td, { children: rupiah(data.total) }, void 0, !1, {
              fileName: "app/routes/_app.laporan-penjualan/index.tsx",
              lineNumber: 45,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.laporan-penjualan/index.tsx",
            lineNumber: 40,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.laporan-penjualan/index.tsx",
          lineNumber: 34,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.laporan-penjualan/index.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.laporan-penjualan/index.tsx",
    lineNumber: 25,
    columnNumber: 3
  }, this);
}
var loader2 = async ({ request }) => {
  await requireUserSession(request, "HEAD_WH");
  let { page, queryString: search, start, end } = prepareSearch(request.url), stringToDate = z6.coerce.date();
  if (!stringToDate.safeParse(start).success || !stringToDate.safeParse(end).success)
    return typedjson2({ data: null, message: "Invalid date" }, { status: 400 });
  let now = /* @__PURE__ */ new Date(), startDate = start ? new Date(start) : now, endDate = end ? new Date(end) : now, data = await findAllPenjualan({
    page,
    search,
    start: startDate.toLocaleDateString("en-CA"),
    end: endDate.toLocaleDateString("en-CA")
  });
  return typedjson2(data);
};

// app/routes/_app.pembelian.tambah/index.tsx
var app_pembelian_exports = {};
__export(app_pembelian_exports, {
  action: () => action,
  default: () => TambahPembelian,
  meta: () => meta4
});

// app/presentation/components/Form/PembelianForm.tsx
import { Button as Button3, Group as Group3, NumberInput, Stack, TextInput } from "@mantine/core";
import { DatePickerInput as DatePickerInput2 } from "@mantine/dates";
import { useForm, isNotEmpty, isInRange } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useNavigate as useNavigate4, useNavigation as useNavigation2, useSubmit } from "@remix-run/react";
import { useEffect as useEffect2 } from "react";
import { useTypedActionData } from "remix-typedjson";

// app/presentation/components/Modal/Modal.tsx
import { Modal } from "@mantine/core";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function CustomModal({ title, children, onClose, size = "md" }) {
  return /* @__PURE__ */ jsxDEV10(
    Modal,
    {
      centered: !0,
      opened: !0,
      onClose,
      title,
      overlayProps: {
        backgroundOpacity: 0.55,
        blur: 3
      },
      closeOnClickOutside: !1,
      size,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/presentation/components/Modal/Modal.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}

// app/presentation/components/Input/SelectAsync.tsx
import Select from "react-select/async";
import debounce from "lodash.debounce";

// app/hooks/useFetcherPromise.tsx
import { useEffect, useRef } from "react";
import { useTypedFetcher } from "remix-typedjson";
function useFetcherPromise() {
  let fetcher = useTypedFetcher(), deferredRef = useRef(), submit = (...args) => (deferredRef.current = new Deferred(), fetcher.submit(...args), deferredRef.current.promise);
  return useEffect(() => {
    fetcher.state === "idle" && (deferredRef.current?.resolve(fetcher.data), deferredRef.current = void 0);
  }, [fetcher.state, fetcher.data]), { ...fetcher, submit };
}
var Deferred = class {
  _promise;
  /**
   * Resolves the promise with given value.
   */
  resolve;
  /**
   * Reject the promise with given reason.
   */
  reject;
  /**
   * Get the underlying promise that can be awaited.
   */
  get promise() {
    return this._promise;
  }
  constructor() {
    this._promise = new Promise((resolve, reject) => {
      this.resolve = resolve, this.reject = reject;
    }), Object.freeze(this);
  }
};

// app/presentation/components/Input/SelectAsync.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function SelectAsync({
  onChange,
  isError,
  valueKey,
  labelKey,
  label,
  actionUrl,
  fetchOptions,
  ...other
}) {
  let fetcher = useFetcherPromise(), fetchDebounce = debounce((inputText, cb) => {
    fetcher.submit({ search: inputText }, { method: "GET", action: actionUrl }).then((res) => {
      res.data ? cb(res.data.data) : cb([]);
    });
  }, 1e3);
  return /* @__PURE__ */ jsxDEV11("div", { className: "mantine-InputWrapper-root", children: [
    /* @__PURE__ */ jsxDEV11(
      "label",
      {
        className: "m-8fdc1311 mantine-InputWrapper-label mantine-TextInput-label",
        "data-required": "true",
        children: [
          label,
          /* @__PURE__ */ jsxDEV11(
            "span",
            {
              className: "m-78a94662 mantine-InputWrapper-required mantine-TextInput-required",
              "aria-hidden": "true",
              children: [
                " ",
                "*"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/presentation/components/Input/SelectAsync.tsx",
              lineNumber: 46,
              columnNumber: 5
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/presentation/components/Input/SelectAsync.tsx",
        lineNumber: 41,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11(
      Select,
      {
        styles: {
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: isError ? "red" : "var(--mantine-color-gray-4)",
            height: "calc(2.25rem*var(--mantine-scale))",
            minHeight: "calc(2.25rem*var(--mantine-scale))",
            borderWidth: "0.3px",
            "&:hover": {}
          })
        },
        placeholder: "",
        menuPlacement: "top",
        noOptionsMessage: () => /* @__PURE__ */ jsxDEV11("span", { style: { fontSize: "13px" }, children: "Tidak ada data, silahkan ketik untuk mencari." }, void 0, !1, {
          fileName: "app/presentation/components/Input/SelectAsync.tsx",
          lineNumber: 69,
          columnNumber: 7
        }, this),
        loadOptions: fetchOptions ?? fetchDebounce,
        getOptionLabel: (opt) => opt[labelKey],
        getOptionValue: (opt) => opt[valueKey],
        onChange,
        ...other
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Input/SelectAsync.tsx",
        lineNumber: 55,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/presentation/components/Input/SelectAsync.tsx",
      lineNumber: 54,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Input/SelectAsync.tsx",
    lineNumber: 40,
    columnNumber: 3
  }, this);
}

// app/presentation/components/Form/PembelianForm.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function PembelianForm() {
  let navigate = useNavigate4(), navigation = useNavigation2(), actionData = useTypedActionData(), submit = useSubmit(), isSubmitting = navigation.state !== "idle", form = useForm({
    initialValues: {
      invoice: "",
      medicineId: null,
      supplierId: null,
      date: null,
      total: 0,
      quantity: 0
    },
    validate: {
      invoice: isNotEmpty("Faktur tidak boleh kosong"),
      medicineId: isNotEmpty("Obat tidak boleh kosong"),
      supplierId: isNotEmpty("Supplier tidak boleh kosong"),
      date: isNotEmpty("Tanggal tidak boleh kosong"),
      total: isInRange({ min: 1 }, "Total tidak boleh kosong"),
      quantity: isInRange({ min: 1 }, "Kuantitas tidak boleh kosong")
    }
  }), onClose = () => {
    navigate("..");
  }, onSubmit = (values) => {
    let date = new Date(values.date).toLocaleDateString("en-CA");
    submit(
      { ...values, date },
      {
        method: "post",
        action: "../tambah"
      }
    );
  };
  return useEffect2(() => {
    if (actionData && actionData?.message) {
      let failed = actionData?.status > 300;
      notifications.show({
        title: failed ? "Gagal" : "Sukses",
        message: actionData.message,
        autoClose: 5e3,
        color: failed ? "red" : "blue"
      });
    }
  }, [actionData]), /* @__PURE__ */ jsxDEV12(Fragment5, { children: /* @__PURE__ */ jsxDEV12(CustomModal, { onClose, title: "Satuan", children: /* @__PURE__ */ jsxDEV12("form", { onSubmit: form.onSubmit(onSubmit), children: /* @__PURE__ */ jsxDEV12(Stack, { gap: "sm", children: [
    /* @__PURE__ */ jsxDEV12(
      TextInput,
      {
        "data-autofocus": !0,
        label: "No Faktur",
        withAsterisk: !0,
        ...form.getInputProps("invoice")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      DatePickerInput2,
      {
        label: "Tanggal",
        withAsterisk: !0,
        ...form.getInputProps("date")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      SelectAsync,
      {
        valueKey: "id",
        labelKey: "name",
        label: "Supplier",
        isError: form.errors.supplierId,
        actionUrl: "/supplier",
        onChange: (e) => form.setValues({ supplierId: e.id })
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 84,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      SelectAsync,
      {
        valueKey: "id",
        labelKey: "name",
        label: "Obat",
        isError: form.errors.medicineId,
        actionUrl: "/obat",
        onChange: (e) => form.setValues({ medicineId: e.id })
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 92,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      NumberInput,
      {
        label: "Kuantitas",
        withAsterisk: !0,
        min: 1,
        ...form.getInputProps("quantity")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 100,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      NumberInput,
      {
        label: "Total",
        withAsterisk: !0,
        ...form.getInputProps("total"),
        min: 1
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(Group3, { justify: "flex-end", children: [
      /* @__PURE__ */ jsxDEV12(Button3, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, !1, {
        fileName: "app/presentation/components/Form/PembelianForm.tsx",
        lineNumber: 113,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV12(
        Button3,
        {
          type: "submit",
          disabled: isSubmitting,
          loading: isSubmitting,
          children: "Simpan"
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PembelianForm.tsx",
          lineNumber: 116,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Form/PembelianForm.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 72,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 70,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PembelianForm.tsx",
    lineNumber: 69,
    columnNumber: 3
  }, this);
}

// app/routes/_app.pembelian.tambah/index.tsx
import { typedjson as typedjson3 } from "remix-typedjson";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function TambahPembelian() {
  return /* @__PURE__ */ jsxDEV13(PembelianForm, {}, void 0, !1, {
    fileName: "app/routes/_app.pembelian.tambah/index.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
var action = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  try {
    let formData = await request.formData(), schema = createPembelianDto.safeParse(formData);
    if (!schema.success)
      return typedjson3(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let result = await createPembelian(schema.data);
    return typedjson3(result, { status: result.status });
  } catch (error) {
    throw error;
  }
}, meta4 = () => [{ title: "Tambah pembelian" }];

// app/routes/_app.penjualan.tambah/index.tsx
var app_penjualan_exports = {};
__export(app_penjualan_exports, {
  action: () => action2,
  default: () => TambahPenjualan,
  meta: () => meta5
});

// app/presentation/components/Form/PenjualanForm.tsx
import { Button as Button4, Group as Group4, NumberInput as NumberInput2, Stack as Stack2 } from "@mantine/core";
import { DatePickerInput as DatePickerInput3 } from "@mantine/dates";
import { useForm as useForm2, isNotEmpty as isNotEmpty2, isInRange as isInRange2 } from "@mantine/form";
import { notifications as notifications2 } from "@mantine/notifications";
import { useNavigate as useNavigate5, useNavigation as useNavigation3, useSubmit as useSubmit2 } from "@remix-run/react";
import { useEffect as useEffect3 } from "react";
import { useTypedActionData as useTypedActionData2 } from "remix-typedjson";
import { Fragment as Fragment6, jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function PenjualanForm() {
  let navigate = useNavigate5(), navigation = useNavigation3(), actionData = useTypedActionData2(), submit = useSubmit2(), isSubmitting = navigation.state !== "idle", form = useForm2({
    initialValues: {
      medicineId: "",
      date: null,
      total: 0,
      quantity: 0,
      // for helper only deleted when submit
      price: 0,
      stock: 0
    },
    validate: {
      medicineId: isNotEmpty2("Obat tidak boleh kosong"),
      date: isNotEmpty2("Tanggal tidak boleh kosong"),
      total: isInRange2({ min: 1 }, "Total tidak boleh kosong"),
      quantity: isInRange2({ min: 1 }, "Kuantitas tidak boleh kosong")
    }
  }), onClose = () => {
    navigate("..");
  }, handleSelect = (e) => {
    let setQty = 0;
    form.values.quantity > e.stock && (setQty = e.stock), form.setValues({
      medicineId: e.id,
      price: e.sellPrice,
      stock: e.stock,
      ...setQty ? { quantity: setQty } : null
    });
  }, onSubmit = (values) => {
    delete values.price, delete values.stock, submit(values, {
      method: "post",
      action: "../tambah"
    });
  };
  return useEffect3(() => {
    if (actionData && actionData?.message) {
      let failed = actionData?.status > 300;
      notifications2.show({
        title: failed ? "Gagal" : "Sukses",
        message: actionData.message,
        autoClose: 5e3,
        color: failed ? "red" : "blue"
      });
    }
  }, [actionData]), useEffect3(() => {
    form.values.price && form.setFieldValue("total", form.values.price * form.values.quantity);
  }, [form.values.price, form.values.quantity]), /* @__PURE__ */ jsxDEV14(Fragment6, { children: /* @__PURE__ */ jsxDEV14(CustomModal, { onClose, title: "Satuan", children: /* @__PURE__ */ jsxDEV14("form", { onSubmit: form.onSubmit(onSubmit), children: /* @__PURE__ */ jsxDEV14(Stack2, { gap: "sm", children: [
    /* @__PURE__ */ jsxDEV14(
      DatePickerInput3,
      {
        label: "Tanggal",
        withAsterisk: !0,
        ...form.getInputProps("date")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PenjualanForm.tsx",
        lineNumber: 89,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14(
      SelectAsync,
      {
        valueKey: "id",
        labelKey: "name",
        label: "Obat",
        isError: form.errors.medicineId,
        actionUrl: "/obat",
        onChange: handleSelect
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PenjualanForm.tsx",
        lineNumber: 94,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14(
      NumberInput2,
      {
        label: "Kuantitas",
        withAsterisk: !0,
        min: 1,
        ...form.values.stock ? { max: form.values.stock } : null,
        ...form.getInputProps("quantity")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PenjualanForm.tsx",
        lineNumber: 102,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14(
      NumberInput2,
      {
        label: "Total",
        withAsterisk: !0,
        ...form.getInputProps("total"),
        min: 1
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/PenjualanForm.tsx",
        lineNumber: 109,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14(Group4, { justify: "flex-end", children: [
      /* @__PURE__ */ jsxDEV14(Button4, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, !1, {
        fileName: "app/presentation/components/Form/PenjualanForm.tsx",
        lineNumber: 116,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV14(
        Button4,
        {
          type: "submit",
          disabled: isSubmitting,
          loading: isSubmitting,
          children: "Simpan"
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenjualanForm.tsx",
          lineNumber: 119,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Form/PenjualanForm.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Form/PenjualanForm.tsx",
    lineNumber: 88,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PenjualanForm.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PenjualanForm.tsx",
    lineNumber: 86,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PenjualanForm.tsx",
    lineNumber: 85,
    columnNumber: 3
  }, this);
}

// app/routes/_app.penjualan.tambah/index.tsx
import { typedjson as typedjson4 } from "remix-typedjson";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function TambahPenjualan() {
  return /* @__PURE__ */ jsxDEV15(PenjualanForm, {}, void 0, !1, {
    fileName: "app/routes/_app.penjualan.tambah/index.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
var action2 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  try {
    let formData = await request.formData(), schema = createPenjualanDto.safeParse(formData);
    if (!schema.success)
      return typedjson4(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let result = await createPenjualan(schema.data);
    return typedjson4(result, { status: result.status });
  } catch (error) {
    throw error;
  }
}, meta5 = () => [{ title: "Tambah penjualan" }];

// app/routes/_app.pengguna.tambah/index.tsx
var app_pengguna_exports = {};
__export(app_pengguna_exports, {
  action: () => action3,
  default: () => TambahPengguna,
  meta: () => meta6
});

// app/presentation/components/Form/PenggunaForm.tsx
import {
  Button as Button5,
  Group as Group5,
  PasswordInput,
  Select as Select2,
  SimpleGrid,
  TextInput as TextInput2,
  Textarea
} from "@mantine/core";
import {
  useForm as useForm3,
  isNotEmpty as isNotEmpty3,
  matches,
  isEmail,
  hasLength
} from "@mantine/form";
import { notifications as notifications3 } from "@mantine/notifications";
import { useNavigate as useNavigate6, useNavigation as useNavigation4, useSubmit as useSubmit3 } from "@remix-run/react";
import { useEffect as useEffect4 } from "react";
import { useTypedActionData as useTypedActionData3, useTypedLoaderData as useTypedLoaderData4 } from "remix-typedjson";
import { DatePickerInput as DatePickerInput4 } from "@mantine/dates";
import { Fragment as Fragment7, jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function PenggunaForm() {
  let navigate = useNavigate6(), navigation = useNavigation4(), actionData = useTypedActionData3(), loaderData = useTypedLoaderData4(), submit = useSubmit3(), isSubmitting = navigation.state !== "idle", {
    id = "",
    address = "",
    birthday = null,
    email = "",
    fullName = "",
    hp = "",
    level = "ADMIN",
    status = "1"
  } = loaderData?.data || {}, initialValues = {
    password: "",
    address,
    birthday,
    email,
    fullName,
    level,
    status: status.toString(),
    hp
  }, form = useForm3({
    initialValues,
    validate: {
      ...id ? null : { password: hasLength({ min: 6 }, "Minimal 6 karakter") },
      birthday: isNotEmpty3("Tanggal lahir tidak boleh kosong"),
      email: isEmail("Email tidak valid"),
      fullName: isNotEmpty3("Nama tidak boleh kosong"),
      level: isNotEmpty3("Level tidak boleh kosong"),
      status: isNotEmpty3("Status tidak boleh kosong"),
      hp: matches(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
        "Hp tidak valid"
      )
    }
  }), onClose = () => {
    navigate("..");
  }, onSubmit = (values) => {
    values?.password?.trim()?.length === 0 && delete values.password, submit(values, {
      method: id ? "patch" : "post",
      action: id ? "." : "../tambah"
    });
  };
  return useEffect4(() => {
    if (actionData && actionData?.message) {
      let failed = actionData?.status > 300;
      notifications3.show({
        title: failed ? "Gagal" : "Sukses",
        message: actionData.message,
        autoClose: 5e3,
        color: failed ? "red" : "blue"
      });
    }
  }, [actionData]), /* @__PURE__ */ jsxDEV16(Fragment7, { children: /* @__PURE__ */ jsxDEV16(CustomModal, { size: "lg", onClose, title: "Pengguna", children: /* @__PURE__ */ jsxDEV16("form", { onSubmit: form.onSubmit(onSubmit), children: [
    /* @__PURE__ */ jsxDEV16(SimpleGrid, { cols: 2, children: [
      /* @__PURE__ */ jsxDEV16(
        TextInput2,
        {
          "data-autofocus": !0,
          label: "Nama lengkap",
          withAsterisk: !0,
          ...form.getInputProps("fullName")
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenggunaForm.tsx",
          lineNumber: 102,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        DatePickerInput4,
        {
          label: "Tanggal lahir",
          withAsterisk: !0,
          ...form.getInputProps("birthday")
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenggunaForm.tsx",
          lineNumber: 108,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(TextInput2, { label: "HP", withAsterisk: !0, ...form.getInputProps("hp") }, void 0, !1, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 113,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV16(
        Select2,
        {
          label: "Level",
          data: [
            { label: "ADMIN", value: "ADMIN" },
            { label: "KEPALA GUDANG", value: "HEAD_WH" }
          ],
          ...form.getInputProps("level"),
          withAsterisk: !0
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenggunaForm.tsx",
          lineNumber: 114,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        Select2,
        {
          label: "Status",
          data: [
            { label: "AKTIF", value: "1" },
            { label: "NON AKTIF", value: "0" }
          ],
          ...form.getInputProps("status"),
          withAsterisk: !0
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenggunaForm.tsx",
          lineNumber: 123,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        TextInput2,
        {
          label: "Email",
          withAsterisk: !0,
          ...form.getInputProps("email")
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenggunaForm.tsx",
          lineNumber: 132,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV16(
        PasswordInput,
        {
          withAsterisk: !id,
          ...form.getInputProps("password"),
          label: "Password",
          description: id ? "kosongkan jika tidak ingin ubah password" : ""
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenggunaForm.tsx",
          lineNumber: 137,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Form/PenggunaForm.tsx",
      lineNumber: 101,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV16(Textarea, { label: "Alamat", ...form.getInputProps("address"), mt: "md" }, void 0, !1, {
      fileName: "app/presentation/components/Form/PenggunaForm.tsx",
      lineNumber: 144,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV16(Group5, { justify: "flex-end", mt: "md", children: [
      /* @__PURE__ */ jsxDEV16(Button5, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, !1, {
        fileName: "app/presentation/components/Form/PenggunaForm.tsx",
        lineNumber: 146,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV16(
        Button5,
        {
          type: "submit",
          disabled: isSubmitting,
          loading: isSubmitting,
          children: "Simpan"
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/PenggunaForm.tsx",
          lineNumber: 149,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Form/PenggunaForm.tsx",
      lineNumber: 145,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Form/PenggunaForm.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PenggunaForm.tsx",
    lineNumber: 99,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/PenggunaForm.tsx",
    lineNumber: 98,
    columnNumber: 3
  }, this);
}

// app/routes/_app.pengguna.tambah/index.tsx
import { typedjson as typedjson5 } from "remix-typedjson";

// app/services/user.server.ts
import { z as z7 } from "zod";
import { zfd as zfd4 } from "zod-form-data";

// app/utils/constant.ts
var phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

// app/services/user.server.ts
import { Level } from "@prisma/client";
import bcrypt2 from "bcryptjs";
var createUserDto = zfd4.formData({
  fullName: zfd4.text(z7.string().toUpperCase()),
  password: zfd4.text(z7.string().min(6)),
  email: zfd4.text(z7.string().email()),
  status: zfd4.numeric(z7.coerce.number().min(0).max(1)),
  hp: zfd4.text(z7.string().regex(phoneRegex, "Invalid phone number")),
  address: zfd4.text(z7.string().optional()).optional(),
  level: zfd4.text(z7.nativeEnum(Level)),
  birthday: zfd4.text(z7.coerce.date())
}), userUpdateDto = zfd4.formData({
  fullName: zfd4.text(z7.string().toUpperCase()).optional(),
  password: zfd4.text(z7.string().min(6)).optional(),
  email: zfd4.text(z7.string().email()),
  status: zfd4.numeric(z7.coerce.number().min(0).max(1)),
  hp: zfd4.text(z7.string().regex(phoneRegex, "Invalid phone number")),
  address: zfd4.text(z7.string().optional()).optional(),
  level: zfd4.text(z7.nativeEnum(Level)),
  birthday: zfd4.text(z7.coerce.date())
}), createUser = async (dto) => {
  try {
    let { email, hp, status, birthday, password: plainText } = dto, exist = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { hp }]
      },
      select: { hp: !0, email: !0 }
    });
    exist && Object.keys(exist).forEach((key) => {
      if (exist[key] === dto[key])
        return {
          data: null,
          message: `Data ${dto[key]} sudah terdaftar`,
          status: 400
        };
    });
    let salt = bcrypt2.genSaltSync(10), password = bcrypt2.hashSync(plainText, salt);
    return { data: await prisma.user.create({
      data: {
        ...dto,
        password,
        status: +status,
        birthday: new Date(birthday)
      },
      select: {
        id: !0
      }
    }), message: "Berhasil tambah pengguna", status: 201 };
  } catch {
    throw new Error(errorMessage.default);
  }
}, findAllUser = async (query, level) => {
  let page = query?.page || 0, limit = 10;
  try {
    let where = {
      isDeleted: 0
    };
    query?.search && (where.OR = [
      {
        fullName: {
          startsWith: `%${query.search.toUpperCase()}`
        }
      },
      {
        email: {
          startsWith: `%${query.search}`
        }
      },
      {
        hp: {
          startsWith: `%${query.search}`
        }
      }
    ]), level !== "SUPER" && (where.level = { not: "SUPER" });
    let [data, totalCount] = await prisma.$transaction([
      prisma.user.findMany({
        where,
        skip: page * limit,
        take: limit,
        select: {
          id: !0,
          fullName: !0,
          email: !0,
          hp: !0,
          level: !0,
          status: !0
        }
      }),
      prisma.user.count({ where })
    ]), pageCount = Math.ceil(totalCount / limit);
    return !data.length && query?.search ? {
      data: null,
      message: "Data yang kamu cari tidak tersedia",
      status: 404
    } : {
      data: { data, pagination: { totalCount, page, pageCount } },
      status: 200
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, findOneUser = async (id) => {
  try {
    let data = await prisma.user.findUnique({
      where: { id, isDeleted: 0 }
    });
    if (!data)
      return {
        data: null,
        message: `Pengguna dengan id ${id} tidak terdaftar`,
        status: 404
      };
    let { password, ...exludePassword } = data;
    return {
      data: exludePassword,
      status: 200,
      message: "Sukses"
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, updateUser = async (dto, id) => {
  try {
    let { email, hp, password, birthday, status } = dto, exist = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { hp }],
        NOT: {
          id
        }
      },
      select: { hp: !0, email: !0 }
    });
    exist && Object.keys(exist).forEach((key) => {
      if (exist[key] === dto[key])
        return {
          data: null,
          message: `Data ${dto[key]} sudah terdaftar`,
          status: 400
        };
    });
    let passwordHased;
    if (password) {
      let salt = bcrypt2.genSaltSync(10);
      passwordHased = bcrypt2.hashSync(password, salt);
    }
    return { data: await prisma.user.update({
      data: {
        ...dto,
        ...passwordHased ? { password: passwordHased } : null,
        birthday: new Date(birthday),
        status: +status
      },
      select: {
        id: !0
      },
      where: { id }
    }), message: "Berhasil ubah pengguna", status: 200 };
  } catch {
    throw new Error(errorMessage.default);
  }
}, deleteUser = async (id) => {
  try {
    return await prisma.user.findUnique({ where: { id } }) ? { data: await prisma.user.update({
      data: { isDeleted: 1 },
      where: { id }
    }), status: 200, message: "Berhasil hapus pengguna" } : {
      data: null,
      message: `Pengguna dengan id ${id} tidak terdaftar`,
      status: 404
    };
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/routes/_app.pengguna.tambah/index.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function TambahPengguna() {
  return /* @__PURE__ */ jsxDEV17(PenggunaForm, {}, void 0, !1, {
    fileName: "app/routes/_app.pengguna.tambah/index.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var action3 = async ({ request }) => {
  await requireUserSession(request, "HEAD_WH");
  try {
    let formData = await request.formData(), schema = createUserDto.safeParse(formData);
    if (!schema.success)
      return typedjson5(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let result = await createUser(schema.data);
    return typedjson5(result, { status: result.status });
  } catch (error) {
    throw error;
  }
}, meta6 = () => [{ title: "Tambah pengguna" }];

// app/routes/_app.supplier.tambah/index.tsx
var app_supplier_exports = {};
__export(app_supplier_exports, {
  action: () => action4,
  default: () => TambahSupplier,
  meta: () => meta7
});
import { typedjson as typedjson6 } from "remix-typedjson";

// app/presentation/components/Form/SupplierForm.tsx
import { Button as Button6, Group as Group6, Stack as Stack3, TextInput as TextInput3, Textarea as Textarea2 } from "@mantine/core";
import { useForm as useForm4, isNotEmpty as isNotEmpty4, matches as matches2 } from "@mantine/form";
import { notifications as notifications4 } from "@mantine/notifications";
import { useNavigate as useNavigate7, useNavigation as useNavigation5, useSubmit as useSubmit4 } from "@remix-run/react";
import { useEffect as useEffect5 } from "react";
import { useTypedActionData as useTypedActionData4, useTypedLoaderData as useTypedLoaderData5 } from "remix-typedjson";
import { Fragment as Fragment8, jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function SupplierForm() {
  let navigate = useNavigate7(), navigation = useNavigation5(), actionData = useTypedActionData4(), loaderData = useTypedLoaderData5(), submit = useSubmit4(), detailData = loaderData?.data, isSubmitting = navigation.state !== "idle", initialValues = {
    name: detailData?.name || "",
    hp: detailData?.hp || "",
    address: detailData?.address || ""
  }, form = useForm4({
    initialValues,
    validate: {
      name: isNotEmpty4("Nama tidak boleh kosong"),
      hp: matches2(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
        "Telpon tidak valid"
      ),
      address: (value) => value && value?.trim()?.length > 255 ? "Alamat maksimal 255 karakter" : null
    }
  }), onClose = () => {
    navigate("..");
  }, onSubmit = (values) => {
    let method = detailData?.id ? "patch" : "post", action15 = detailData?.id ? "." : "../tambah";
    submit(values, {
      method,
      action: action15
    });
  };
  return useEffect5(() => {
    if (actionData && actionData?.message) {
      let failed = actionData?.status > 300;
      notifications4.show({
        title: failed ? "Gagal" : "Sukses",
        message: actionData.message,
        autoClose: 5e3,
        color: failed ? "red" : "blue"
      });
    }
  }, [actionData]), /* @__PURE__ */ jsxDEV18(Fragment8, { children: /* @__PURE__ */ jsxDEV18(CustomModal, { onClose, title: "Supplier", children: /* @__PURE__ */ jsxDEV18("form", { onSubmit: form.onSubmit(onSubmit), children: /* @__PURE__ */ jsxDEV18(Stack3, { gap: "sm", children: [
    /* @__PURE__ */ jsxDEV18(
      TextInput3,
      {
        "data-autofocus": !0,
        label: "Nama",
        withAsterisk: !0,
        ...form.getInputProps("name")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/SupplierForm.tsx",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV18(
      TextInput3,
      {
        label: "Telpon",
        withAsterisk: !0,
        ...form.getInputProps("hp")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/SupplierForm.tsx",
        lineNumber: 76,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV18(Textarea2, { label: "Alamat", ...form.getInputProps("address") }, void 0, !1, {
      fileName: "app/presentation/components/Form/SupplierForm.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(Group6, { justify: "flex-end", children: [
      /* @__PURE__ */ jsxDEV18(Button6, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, !1, {
        fileName: "app/presentation/components/Form/SupplierForm.tsx",
        lineNumber: 83,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV18(
        Button6,
        {
          type: "submit",
          disabled: isSubmitting,
          loading: isSubmitting,
          children: "Simpan"
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/SupplierForm.tsx",
          lineNumber: 86,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Form/SupplierForm.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 69,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 67,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/SupplierForm.tsx",
    lineNumber: 66,
    columnNumber: 3
  }, this);
}

// app/services/supplier.server.ts
import { z as z8 } from "zod";
import { zfd as zfd5 } from "zod-form-data";
var createSupplierDto = zfd5.formData({
  name: zfd5.text(z8.string().toUpperCase()),
  hp: zfd5.text(z8.string().regex(phoneRegex, "Invalid phone number")),
  address: zfd5.text(z8.string().optional()).optional()
}), updateSupplierDto = zfd5.formData({
  name: zfd5.text(z8.string().toUpperCase()).optional(),
  hp: zfd5.text(z8.string().regex(phoneRegex, "Invalid phone number")).optional(),
  address: zfd5.text(z8.string()).optional()
}), findAllSupplier = async (query) => {
  let page = query?.page || 0, limit = 10;
  try {
    let where = { isDeleted: 0 };
    query?.search && (where.name = {
      startsWith: `%${query.search.toUpperCase()}`
    });
    let [data, totalCount] = await prisma.$transaction([
      prisma.supplier.findMany({ where, skip: page * limit, take: limit }),
      prisma.supplier.count({ where })
    ]), pageCount = Math.ceil(totalCount / limit);
    return !data.length && query?.search ? {
      data: null,
      message: "Data yang kamu cari tidak tersedia",
      status: 404
    } : {
      data: { data, pagination: { totalCount, page, pageCount } },
      status: 200
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, findOneSupplier = async (id) => {
  try {
    let data = await prisma.supplier.findUnique({
      where: { id, isDeleted: 0 }
    });
    return data ? { data, status: 200, message: "Sukses" } : {
      data: null,
      message: `Supplier dengan id ${id} tidak terdaftar`,
      status: 404
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, createSupllier = async (createDto) => {
  try {
    let { hp } = createDto;
    return hp && await prisma.supplier.findFirst({
      where: { hp }
    }) ? {
      data: null,
      message: `Supplier dengan hp ${hp} sudah terdaftar`,
      status: 400
    } : { data: await prisma.supplier.create({
      data: { ...createDto, hp }
    }), status: 201, message: "Berhasil tambah supplier" };
  } catch {
    throw new Error(errorMessage.default);
  }
}, updateSupplier = async (updateDto, id) => {
  try {
    let { hp } = updateDto;
    if (hp) {
      let exist = await prisma.supplier.findFirst({
        where: { hp }
      });
      if (exist && exist.id !== id)
        return {
          data: null,
          message: `Supplier dengan telpon ${hp} sudah terdaftar`,
          status: 400
        };
    }
    return { data: await prisma.supplier.update({
      data: { ...updateDto, hp },
      where: { id }
    }), status: 200, message: "Berhasil ubah supplier" };
  } catch {
    throw new Error(errorMessage.default);
  }
}, deleteSupplier = async (id) => {
  try {
    return await prisma.supplier.findUnique({ where: { id } }) ? { data: await prisma.supplier.update({
      data: { isDeleted: 1 },
      where: { id }
    }), status: 200, message: "Berhasil hapus supplier" } : {
      data: null,
      message: `Supplier dengan id ${id} tidak terdaftar`,
      status: 404
    };
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/routes/_app.supplier.tambah/index.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function TambahSupplier() {
  return /* @__PURE__ */ jsxDEV19(SupplierForm, {}, void 0, !1, {
    fileName: "app/routes/_app.supplier.tambah/index.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var meta7 = () => [{ title: "Tambah supplier" }], action4 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  try {
    let formData = await request.formData(), schema = createSupplierDto.safeParse(formData);
    if (!schema.success)
      return typedjson6(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let result = await createSupllier(schema.data);
    return typedjson6(result, { status: result.status });
  } catch (error) {
    throw error;
  }
};

// app/routes/_app.pembelian.$id/index.tsx
var app_pembelian_exports2 = {};
__export(app_pembelian_exports2, {
  action: () => action5
});
import { typedjson as typedjson7 } from "remix-typedjson";
var action5 = async ({ request, params }) => {
  await requireUserSession(request, "ADMIN");
  let { method } = request, id = params.id;
  if (method === "DELETE") {
    let data = await deletePembelian(+id);
    return typedjson7(data, { status: data.status });
  }
  throw new Response("Method not allowed", { status: 404 });
};

// app/routes/_app.penjualan.$id/index.tsx
var app_penjualan_exports2 = {};
__export(app_penjualan_exports2, {
  action: () => action6
});
import { typedjson as typedjson8 } from "remix-typedjson";
var action6 = async ({ request, params }) => {
  await requireUserSession(request, "ADMIN");
  let { method } = request, id = params.id;
  if (method === "DELETE") {
    let data = await deletePenjualan(+id);
    return typedjson8(data, { status: data.status });
  }
  throw new Response("Method not allowed", { status: 404 });
};

// app/routes/_app.satuan.tambah/index.tsx
var app_satuan_exports = {};
__export(app_satuan_exports, {
  action: () => action7,
  default: () => TambahSatuan,
  meta: () => meta8
});

// app/presentation/components/Form/SatuanForm.tsx
import { Button as Button7, Group as Group7, Stack as Stack4, TextInput as TextInput4 } from "@mantine/core";
import { useForm as useForm5, isNotEmpty as isNotEmpty5 } from "@mantine/form";
import { notifications as notifications5 } from "@mantine/notifications";
import { useNavigate as useNavigate8, useNavigation as useNavigation6, useSubmit as useSubmit5 } from "@remix-run/react";
import { useEffect as useEffect6 } from "react";
import { useTypedActionData as useTypedActionData5, useTypedLoaderData as useTypedLoaderData6 } from "remix-typedjson";
import { Fragment as Fragment9, jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function SatuanForm() {
  let navigate = useNavigate8(), navigation = useNavigation6(), actionData = useTypedActionData5(), loaderData = useTypedLoaderData6(), submit = useSubmit5(), detailData = loaderData?.data, isSubmitting = navigation.state !== "idle", initialValues = {
    name: detailData?.name || ""
  }, form = useForm5({
    initialValues,
    validate: {
      name: isNotEmpty5("Nama tidak boleh kosong")
    }
  }), onClose = () => {
    navigate("..");
  }, onSubmit = (values) => {
    let method = detailData?.id ? "patch" : "post", action15 = detailData?.id ? "." : "../tambah";
    submit(values, {
      method,
      action: action15
    });
  };
  return useEffect6(() => {
    if (actionData && actionData?.message) {
      let failed = actionData?.status > 300;
      notifications5.show({
        title: failed ? "Gagal" : "Sukses",
        message: actionData.message,
        autoClose: 5e3,
        color: failed ? "red" : "blue"
      });
    }
  }, [actionData]), /* @__PURE__ */ jsxDEV20(Fragment9, { children: /* @__PURE__ */ jsxDEV20(CustomModal, { onClose, title: "Satuan", children: /* @__PURE__ */ jsxDEV20("form", { onSubmit: form.onSubmit(onSubmit), children: /* @__PURE__ */ jsxDEV20(Stack4, { gap: "sm", children: [
    /* @__PURE__ */ jsxDEV20(
      TextInput4,
      {
        "data-autofocus": !0,
        label: "Nama",
        withAsterisk: !0,
        ...form.getInputProps("name")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/SatuanForm.tsx",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV20(Group7, { justify: "flex-end", children: [
      /* @__PURE__ */ jsxDEV20(Button7, { onClick: onClose, variant: "transparent", color: "red", children: "Tutup" }, void 0, !1, {
        fileName: "app/presentation/components/Form/SatuanForm.tsx",
        lineNumber: 67,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV20(
        Button7,
        {
          type: "submit",
          disabled: isSubmitting,
          loading: isSubmitting,
          children: "Simpan"
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/SatuanForm.tsx",
          lineNumber: 70,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Form/SatuanForm.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Form/SatuanForm.tsx",
    lineNumber: 59,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/SatuanForm.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/SatuanForm.tsx",
    lineNumber: 57,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/SatuanForm.tsx",
    lineNumber: 56,
    columnNumber: 3
  }, this);
}

// app/routes/_app.satuan.tambah/index.tsx
import { typedjson as typedjson9 } from "remix-typedjson";

// app/services/satuan.server.ts
import { z as z9 } from "zod";
import { zfd as zfd6 } from "zod-form-data";
var createSatuanDto = zfd6.formData({
  name: zfd6.text(z9.string().toUpperCase())
}), updateSatuanDto = zfd6.formData({
  name: zfd6.text(z9.string().toUpperCase()).optional()
}), findAllSatuan = async (query) => {
  let page = query?.page || 0, limit = 10;
  try {
    let where = { isDeleted: 0 };
    query?.search && (where.name = {
      startsWith: `%${query.search.toUpperCase()}`
    });
    let [data, totalCount] = await prisma.$transaction([
      prisma.unit.findMany({ where, skip: page * limit, take: limit }),
      prisma.unit.count({ where })
    ]), pageCount = Math.ceil(totalCount / limit);
    return !data.length && query?.search ? {
      data: null,
      message: "Data yang kamu cari tidak tersedia",
      status: 404
    } : {
      data: { data, pagination: { totalCount, page, pageCount } },
      status: 200
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, findOneSatuan = async (id) => {
  try {
    let data = await prisma.unit.findUnique({ where: { id, isDeleted: 0 } });
    return data ? { data, status: 200, message: "Sukses" } : {
      data: null,
      message: `Satuan dengan id ${id} tidak terdaftar`,
      status: 404
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, createSatuan = async (createDto) => {
  try {
    let { name } = createDto, exist = await prisma.unit.findFirst({
      where: { name }
    });
    return exist ? exist.isDeleted ? { data: await prisma.unit.update({
      data: { isDeleted: 0 },
      where: { id: exist.id }
    }), status: 201, message: "Berhasil tambah satuan" } : {
      data: null,
      message: `Satuan dengan nama ${name} sudah terdaftar`,
      status: 400
    } : { data: await prisma.unit.create({
      data: { name }
    }), status: 201, message: "Berhasil tambah satuan" };
  } catch {
    throw new Error(errorMessage.default);
  }
}, updateSatuan = async (updateDto, id) => {
  try {
    let { name } = updateDto;
    return name && await prisma.unit.findFirst({
      where: { name }
    }) ? {
      data: null,
      message: `Satuan dengan nama ${name} sudah terdaftar`,
      status: 400
    } : { data: await prisma.unit.update({
      data: { ...name ? { name } : null },
      where: { id }
    }), status: 201, message: "Berhasil ubah satuan" };
  } catch {
    throw new Error(errorMessage.default);
  }
}, deleteSatuan = async (id) => {
  try {
    return await prisma.unit.findUnique({ where: { id } }) ? { data: await prisma.unit.update({
      data: { isDeleted: 1 },
      where: { id }
    }), status: 200, message: "Berhasil hapus satuan" } : {
      data: null,
      message: `Satuan dengan id ${id} tidak terdaftar`,
      status: 404
    };
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/routes/_app.satuan.tambah/index.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function TambahSatuan() {
  return /* @__PURE__ */ jsxDEV21(SatuanForm, {}, void 0, !1, {
    fileName: "app/routes/_app.satuan.tambah/index.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var action7 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  try {
    let formData = await request.formData(), schema = createSatuanDto.safeParse(formData);
    if (!schema.success)
      return typedjson9(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let result = await createSatuan(schema.data);
    return typedjson9(result, { status: result.status });
  } catch (error) {
    throw error;
  }
}, meta8 = () => [{ title: "Tambah satuan" }];

// app/routes/_app.laporan-obat/index.tsx
var app_exports3 = {};
__export(app_exports3, {
  default: () => LaporanObat,
  loader: () => loader3,
  meta: () => meta9
});
import { typedjson as typedjson10, useTypedLoaderData as useTypedLoaderData7 } from "remix-typedjson";
import { Outlet as Outlet4 } from "@remix-run/react";
import { Group as Group8, Table as Table4 } from "@mantine/core";

// app/services/obat.server.ts
import { z as z10 } from "zod";
import { zfd as zfd7 } from "zod-form-data";
import exceljs3 from "exceljs";
var createObatDto = zfd7.formData({
  code: zfd7.text(z10.string().toUpperCase()),
  name: zfd7.text(z10.string().toUpperCase()),
  stock: zfd7.numeric(z10.coerce.number().min(0)),
  buyPrice: zfd7.numeric(z10.coerce.number().positive()),
  sellPrice: zfd7.numeric(z10.coerce.number().positive()),
  unitId: zfd7.numeric(z10.coerce.number().positive())
}), updateObatDto = zfd7.formData({
  code: zfd7.text(z10.string().toUpperCase()).optional(),
  name: zfd7.text(z10.string().toUpperCase()).optional(),
  buyPrice: zfd7.numeric(z10.coerce.number().positive()).optional(),
  sellPrice: zfd7.numeric(z10.coerce.number().positive()).optional(),
  unitId: zfd7.numeric(z10.coerce.number().positive()).optional()
}), createObat = async (createDto) => {
  try {
    let { code, unitId } = createDto, unit = await prisma.unit.findUnique({
      where: { id: unitId }
    });
    return unit ? await prisma.medicine.findUnique({
      where: { code }
    }) ? { data: null, message: "Kode obat telah terdaftar", status: 400 } : { data: await prisma.medicine.create({
      data: {
        ...createDto,
        unitName: unit.name
      }
    }), status: 201, message: "Berhasil tambah obat" } : { data: null, message: "Satuan tidak tersedia", status: 404 };
  } catch {
    throw new Error(errorMessage.default);
  }
}, findAllObat = async (query) => {
  let page = query?.page || 0, limit = 10;
  try {
    let where = { isDeleted: 0 };
    query?.search && (where.OR = [
      {
        name: {
          startsWith: `%${query.search.toUpperCase()}`
        }
      },
      {
        code: {
          startsWith: `%${query.search.toUpperCase()}`
        }
      }
    ]);
    let [medicine, totalCount] = await prisma.$transaction([
      prisma.medicine.findMany({ where, skip: page * limit, take: limit }),
      prisma.medicine.count({ where })
    ]), data = medicine.map((med) => ({
      ...med,
      buyPrice: parseFloat(med.buyPrice),
      sellPrice: parseFloat(med.sellPrice)
    })), pageCount = Math.ceil(totalCount / limit);
    return !data.length && query?.search ? {
      data: null,
      message: "Data yang kamu cari tidak tersedia",
      status: 404
    } : {
      data: { data, pagination: { totalCount, page, pageCount } },
      status: 200
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, findOneObat = async (id) => {
  try {
    let data = await prisma.medicine.findUnique({
      where: { id, isDeleted: 0 }
    });
    if (!data)
      return {
        data: null,
        message: `Obat dengan id ${id} tidak terdaftar`,
        status: 404
      };
    let buyPrice = parseFloat(data.buyPrice), sellPrice = parseFloat(data.sellPrice);
    return {
      data: { ...data, buyPrice, sellPrice },
      status: 200,
      message: "Sukses"
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, deleteObat = async (id) => {
  try {
    return await prisma.medicine.findUnique({ where: { id } }) ? { data: await prisma.medicine.update({
      data: { isDeleted: 1 },
      where: { id }
    }), status: 200, message: "Berhasil hapus obat" } : {
      data: null,
      message: `Obat dengan id ${id} tidak terdaftar`,
      status: 404
    };
  } catch {
    throw new Error(errorMessage.default);
  }
}, updateObat = async (updateDto, id) => {
  try {
    let { unitId, code } = updateDto;
    if (!await prisma.medicine.findUnique({
      where: { id }
    }))
      return {
        data: null,
        message: `Obat dengan id ${id} tidak terdaftar`,
        status: 404
      };
    let unitName;
    if (unitId) {
      let unit = await prisma.unit.findUnique({
        where: { id: unitId }
      });
      if (!unit)
        return { data: null, message: "Satuan tidak tersedia", status: 404 };
      unitName = unit.name;
    }
    if (code) {
      let existCode = await prisma.medicine.findUnique({
        where: { code }
      });
      if (existCode && existCode.id !== id)
        return {
          data: null,
          message: `Kode obat ${existCode.code} sudah terdaftar`,
          status: 400
        };
    }
    return { data: await prisma.medicine.update({
      data: {
        ...updateDto,
        unitName,
        code
      },
      where: { id }
    }), status: 200, message: "Berhasil rubah obat" };
  } catch {
    throw new Error(errorMessage.default);
  }
}, exportObat = async () => {
  try {
    let medicine = (await prisma.medicine.findMany({
      where: { isDeleted: 0 }
    })).map((med) => ({
      ...med,
      sellPrice: parseFloat(med.sellPrice),
      buyPrice: parseFloat(med.buyPrice)
    })), wb = new exceljs3.Workbook(), sheet = wb.addWorksheet("Obat"), columns = [
      { key: "code", header: "Kode" },
      { key: "name", header: "Obat" },
      { key: "stock", header: "Stok" },
      { key: "sellPrice", header: "Harga Jual" },
      { key: "buyPrice", header: "Harga Beli" },
      { key: "unitName", header: "Satuan" }
    ];
    return sheet.columns = columns, sheet.addRows(medicine), sheet.getRow(1).eachCell((cell) => {
      let c = cell;
      c.font = { bold: !0 };
    }), sheet.columns.forEach((column) => {
      let maxLength = 0;
      column?.eachCell({ includeEmpty: !0 }, (cell) => {
        let columnLength = cell.value ? cell.value.toString().length : 10;
        columnLength > maxLength && (maxLength = columnLength);
      });
      let padding = 2;
      column.width = maxLength < 10 ? 10 : maxLength + padding;
    }), await wb.xlsx.writeBuffer();
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/presentation/components/Input/InputSearch.tsx
import { CloseButton, Input } from "@mantine/core";
import { Form, Link as Link2, useSearchParams as useSearchParams3 } from "@remix-run/react";
import { IconSearch } from "@tabler/icons-react";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function InputSearch(props) {
  let [searchParams] = useSearchParams3(), querySearch = searchParams.get("search");
  return /* @__PURE__ */ jsxDEV22(Form, { action: "?page=1&", method: "get", style: { width: "25%" }, children: /* @__PURE__ */ jsxDEV22(
    Input,
    {
      ...props,
      defaultValue: querySearch || "",
      type: "text",
      placeholder: "cari",
      rightSectionPointerEvents: "all",
      leftSectionPointerEvents: "all",
      name: "search",
      leftSection: /* @__PURE__ */ jsxDEV22(IconSearch, { size: 16 }, void 0, !1, {
        fileName: "app/presentation/components/Input/InputSearch.tsx",
        lineNumber: 19,
        columnNumber: 18
      }, this),
      rightSection: /* @__PURE__ */ jsxDEV22(Link2, { to: ".", children: /* @__PURE__ */ jsxDEV22(
        CloseButton,
        {
          "aria-label": "Clear input",
          style: { display: querySearch ? void 0 : "none" }
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Input/InputSearch.tsx",
          lineNumber: 22,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/presentation/components/Input/InputSearch.tsx",
        lineNumber: 21,
        columnNumber: 6
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/presentation/components/Input/InputSearch.tsx",
      lineNumber: 11,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/presentation/components/Input/InputSearch.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/routes/_app.laporan-obat/index.tsx
import { Fragment as Fragment10, jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var meta9 = () => [{ title: "Laporan Obat" }];
function LaporanObat() {
  let loader18 = useTypedLoaderData7();
  return /* @__PURE__ */ jsxDEV23(Fragment10, { children: [
    /* @__PURE__ */ jsxDEV23(Outlet4, {}, void 0, !1, {
      fileName: "app/routes/_app.laporan-obat/index.tsx",
      lineNumber: 22,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV23("main", { children: [
      /* @__PURE__ */ jsxDEV23(Group8, { children: [
        /* @__PURE__ */ jsxDEV23(InputSearch, {}, void 0, !1, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 25,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV23(ButtonDownload, { url: "/report-excel?data=obat" }, void 0, !1, {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 26,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.laporan-obat/index.tsx",
        lineNumber: 24,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV23(
        CustomTable,
        {
          mt: "sm",
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: ["Kode", "Obat", "Beli", "Jual", "Stok"],
          children: loader18?.data?.data?.map((data) => /* @__PURE__ */ jsxDEV23(Table4.Tr, { children: [
            /* @__PURE__ */ jsxDEV23(Table4.Td, { children: data.code }, void 0, !1, {
              fileName: "app/routes/_app.laporan-obat/index.tsx",
              lineNumber: 35,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV23(Table4.Td, { children: data.name }, void 0, !1, {
              fileName: "app/routes/_app.laporan-obat/index.tsx",
              lineNumber: 36,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV23(Table4.Td, { children: rupiah(data.buyPrice) }, void 0, !1, {
              fileName: "app/routes/_app.laporan-obat/index.tsx",
              lineNumber: 37,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV23(Table4.Td, { children: rupiah(data.sellPrice) }, void 0, !1, {
              fileName: "app/routes/_app.laporan-obat/index.tsx",
              lineNumber: 38,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV23(Table4.Td, { children: data.stock }, void 0, !1, {
              fileName: "app/routes/_app.laporan-obat/index.tsx",
              lineNumber: 39,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.laporan-obat/index.tsx",
            lineNumber: 34,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.laporan-obat/index.tsx",
          lineNumber: 28,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.laporan-obat/index.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.laporan-obat/index.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}
var loader3 = async ({ request }) => {
  await requireUserSession(request, "HEAD_WH");
  let { page, queryString: search } = prepareSearch(request.url), data = await findAllObat({
    page,
    search
  });
  return typedjson10(data);
};

// app/routes/_app.pengguna.$id/index.tsx
var app_pengguna_exports2 = {};
__export(app_pengguna_exports2, {
  action: () => action8,
  default: () => UpdatePengguna,
  loader: () => loader4,
  meta: () => meta10
});
import { typedjson as typedjson11 } from "remix-typedjson";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function UpdatePengguna() {
  return /* @__PURE__ */ jsxDEV24(PenggunaForm, {}, void 0, !1, {
    fileName: "app/routes/_app.pengguna.$id/index.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}
var meta10 = () => [{ title: "Ubah pengguna" }], loader4 = async ({ params, request }) => {
  await requireUserSession(request, "HEAD_WH");
  let data = await findOneUser(params.id);
  if (data.status === 404)
    throw new Response("Data tidak ditemukan", { status: 404 });
  return typedjson11(data, { status: data.status });
}, action8 = async ({ request, params }) => {
  await requireUserSession(request, "HEAD_WH");
  let { method } = request, id = params.id;
  if (method === "PATCH") {
    let formData = await request.formData(), schema = userUpdateDto.safeParse(formData);
    if (!schema.success)
      return typedjson11(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let data = await updateUser(schema.data, id);
    return typedjson11(data, { status: data.status });
  }
  if (method === "DELETE") {
    let data = await deleteUser(id);
    return typedjson11(data, { status: data.status });
  }
  throw new Response("Method not allowed", { status: 404 });
};

// app/routes/_app.supplier.$id/index.tsx
var app_supplier_exports2 = {};
__export(app_supplier_exports2, {
  action: () => action9,
  default: () => UpdateSuppler,
  loader: () => loader5,
  meta: () => meta11
});
import {
  redirect as redirect2
} from "@remix-run/node";
import { typedjson as typedjson12 } from "remix-typedjson";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function UpdateSuppler() {
  return /* @__PURE__ */ jsxDEV25(SupplierForm, {}, void 0, !1, {
    fileName: "app/routes/_app.supplier.$id/index.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
var meta11 = () => [{ title: "Ubah supplier" }], loader5 = async ({ params, request }) => {
  await requireUserSession(request, "ADMIN");
  let data = await findOneSupplier(+params.id);
  if (data.status === 404)
    throw new Response("Data tidak ditemukan", { status: 404 });
  return typedjson12(data, { status: data.status });
}, action9 = async ({ request, params }) => {
  await requireUserSession(request, "ADMIN");
  let { method } = request, id = +params.id;
  if (method === "PATCH") {
    let formData = await request.formData(), schema = updateSupplierDto.safeParse(formData);
    if (!schema.success)
      return typedjson12(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let data = await updateSupplier(schema.data, id);
    return typedjson12(data, { status: data.status });
  }
  if (method === "DELETE")
    return await deleteSupplier(id), redirect2("/supplier");
  throw new Response("Method not allowed", { status: 404 });
};

// app/routes/_app.obat.tambah/index.tsx
var app_obat_exports = {};
__export(app_obat_exports, {
  action: () => action10,
  default: () => TambahObat,
  meta: () => meta12
});

// app/presentation/components/Form/ObatForm.tsx
import { Button as Button8, Group as Group9, NumberInput as NumberInput3, Stack as Stack5, TextInput as TextInput5 } from "@mantine/core";
import { useForm as useForm6, isNotEmpty as isNotEmpty6, isInRange as isInRange3 } from "@mantine/form";
import { notifications as notifications6 } from "@mantine/notifications";
import { useNavigate as useNavigate9, useNavigation as useNavigation7, useSubmit as useSubmit6 } from "@remix-run/react";
import { useEffect as useEffect7 } from "react";
import { useTypedActionData as useTypedActionData6, useTypedLoaderData as useTypedLoaderData8 } from "remix-typedjson";
import { Fragment as Fragment11, jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function ObatForm() {
  let navigate = useNavigate9(), navigation = useNavigation7(), actionData = useTypedActionData6(), loaderData = useTypedLoaderData8(), submit = useSubmit6(), isSubmitting = navigation.state !== "idle", {
    code = "",
    name = "",
    buyPrice = "",
    sellPrice = "",
    stock = "",
    id = null,
    unitId = "",
    unitName = ""
  } = loaderData?.data || {}, initialValues = {
    code,
    name,
    buyPrice,
    sellPrice,
    ...id ? null : { stock },
    unitId
  }, form = useForm6({
    initialValues,
    validate: {
      code: isNotEmpty6("Kode tidak boleh kosong"),
      name: isNotEmpty6("Nama tidak boleh kosong"),
      buyPrice: isInRange3({ min: 1 }, "Harga tidak boleh 0"),
      sellPrice: isInRange3({ min: 1 }, "Harga tidak boleh 0"),
      unitId: isNotEmpty6("Satuan tidak boleh kosong"),
      ...id ? null : { stock: isNotEmpty6("Stok tidak boleh kosong") }
    }
  }), onClose = () => {
    navigate("..");
  }, onSubmit = (values) => {
    submit(values, {
      method: id ? "patch" : "post",
      action: id ? "." : "../tambah"
    });
  };
  return useEffect7(() => {
    if (actionData && actionData?.message) {
      let failed = actionData?.status > 300;
      notifications6.show({
        title: failed ? "Gagal" : "Sukses",
        message: actionData.message,
        autoClose: 5e3,
        color: failed ? "red" : "blue"
      });
    }
  }, [actionData]), /* @__PURE__ */ jsxDEV26(Fragment11, { children: /* @__PURE__ */ jsxDEV26(CustomModal, { onClose, title: "Satuan", children: /* @__PURE__ */ jsxDEV26("form", { onSubmit: form.onSubmit(onSubmit), children: /* @__PURE__ */ jsxDEV26(Stack5, { gap: "sm", children: [
    /* @__PURE__ */ jsxDEV26(
      TextInput5,
      {
        "data-autofocus": !0,
        label: "Kode",
        withAsterisk: !0,
        ...form.getInputProps("code")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26(
      TextInput5,
      {
        label: "Nama",
        withAsterisk: !0,
        ...form.getInputProps("name")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    ),
    !id && /* @__PURE__ */ jsxDEV26(
      NumberInput3,
      {
        label: "Stok",
        withAsterisk: !0,
        min: 0,
        ...form.getInputProps("stock")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 91,
        columnNumber: 8
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26(
      NumberInput3,
      {
        label: "Harga Beli",
        withAsterisk: !0,
        decimalScale: 2,
        ...form.getInputProps("buyPrice")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 98,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26(
      NumberInput3,
      {
        label: "Harga Jual",
        withAsterisk: !0,
        decimalScale: 2,
        ...form.getInputProps("sellPrice")
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 104,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26(
      SelectAsync,
      {
        valueKey: "id",
        labelKey: "name",
        label: "Satuan",
        isError: form.errors.unitId,
        actionUrl: "/satuan",
        onChange: (e) => form.setValues({ unitId: e.id }),
        defaultValue: { id: unitId, name: unitName }
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 110,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26(Group9, { justify: "flex-end", children: [
      /* @__PURE__ */ jsxDEV26(Button8, { onClick: onClose, variant: "transparent", color: "red", children: "Batal" }, void 0, !1, {
        fileName: "app/presentation/components/Form/ObatForm.tsx",
        lineNumber: 120,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV26(
        Button8,
        {
          type: "submit",
          disabled: isSubmitting,
          loading: isSubmitting,
          children: "Simpan"
        },
        void 0,
        !1,
        {
          fileName: "app/presentation/components/Form/ObatForm.tsx",
          lineNumber: 123,
          columnNumber: 8
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Form/ObatForm.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 78,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 76,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Form/ObatForm.tsx",
    lineNumber: 75,
    columnNumber: 3
  }, this);
}

// app/routes/_app.obat.tambah/index.tsx
import { typedjson as typedjson13 } from "remix-typedjson";
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function TambahObat() {
  return /* @__PURE__ */ jsxDEV27(ObatForm, {}, void 0, !1, {
    fileName: "app/routes/_app.obat.tambah/index.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var meta12 = () => [{ title: "Tambah obat" }];
async function action10({ request }) {
  await requireUserSession(request, "ADMIN");
  try {
    let formData = await request.formData(), schema = createObatDto.safeParse(formData);
    if (!schema.success)
      return typedjson13(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let result = await createObat(schema.data);
    return typedjson13(result, { status: result.status });
  } catch (error) {
    throw error;
  }
}

// app/routes/_app.satuan.$id/index.tsx
var app_satuan_exports2 = {};
__export(app_satuan_exports2, {
  action: () => action11,
  default: () => UpdateSatuan,
  loader: () => loader6,
  meta: () => meta13
});
import {
  redirect as redirect3
} from "@remix-run/node";
import { typedjson as typedjson14 } from "remix-typedjson";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function UpdateSatuan() {
  return /* @__PURE__ */ jsxDEV28(SatuanForm, {}, void 0, !1, {
    fileName: "app/routes/_app.satuan.$id/index.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
var meta13 = () => [{ title: "Ubah satuan" }], loader6 = async ({ params, request }) => {
  await requireUserSession(request, "ADMIN");
  let data = await findOneSatuan(+params.id);
  if (data.status === 404)
    throw new Response("Data tidak ditemukan", { status: 404 });
  return typedjson14(data, { status: data.status });
}, action11 = async ({ request, params }) => {
  await requireUserSession(request, "ADMIN");
  let { method } = request, formData = await request.formData(), id = +params.id;
  if (method === "PATCH") {
    let schema = updateSatuanDto.safeParse(formData);
    if (!schema.success)
      return typedjson14(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let data = await updateSatuan(schema.data, id);
    return typedjson14(data, { status: data.status });
  }
  if (method === "DELETE")
    return await deleteSatuan(id), redirect3("/satuan");
  throw new Response("Method not allowed", { status: 404 });
};

// app/routes/_app.pembelian/index.tsx
var app_exports4 = {};
__export(app_exports4, {
  default: () => PembelianPage,
  loader: () => loader7,
  meta: () => meta14
});

// app/presentation/components/Button/ButtonAdd.tsx
import { Button as Button9 } from "@mantine/core";
import { useNavigate as useNavigate10 } from "@remix-run/react";
import { IconPlus } from "@tabler/icons-react";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
function ButtonAdd({ label, goTo }) {
  let navigation = useNavigate10();
  return /* @__PURE__ */ jsxDEV29(Button9, { mb: "md", rightSection: /* @__PURE__ */ jsxDEV29(IconPlus, {}, void 0, !1, {
    fileName: "app/presentation/components/Button/ButtonAdd.tsx",
    lineNumber: 16,
    columnNumber: 33
  }, this), onClick: () => navigation(goTo), children: label }, void 0, !1, {
    fileName: "app/presentation/components/Button/ButtonAdd.tsx",
    lineNumber: 16,
    columnNumber: 3
  }, this);
}

// app/presentation/components/Button/ActionButtons.tsx
import { Button as Button10, Group as Group10, Menu, Tooltip as Tooltip2 } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
function ActionButtons({
  onDelete,
  onUpdate
}) {
  return /* @__PURE__ */ jsxDEV30(Group10, { gap: 5, justify: "center", children: [
    onUpdate && /* @__PURE__ */ jsxDEV30(Tooltip2, { label: "Ubah", children: /* @__PURE__ */ jsxDEV30(Button10, { size: "xs", variant: "light", onClick: onUpdate, children: /* @__PURE__ */ jsxDEV30(IconEdit, { size: 12 }, void 0, !1, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 17,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    onDelete && /* @__PURE__ */ jsxDEV30(Menu, { shadow: "sm", width: 200, children: [
      /* @__PURE__ */ jsxDEV30(Menu.Target, { children: /* @__PURE__ */ jsxDEV30(Tooltip2, { label: "Hapus", children: /* @__PURE__ */ jsxDEV30(Button10, { size: "xs", variant: "light", color: "red", children: /* @__PURE__ */ jsxDEV30(IconTrash, { size: 12 }, void 0, !1, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 26,
        columnNumber: 8
      }, this) }, void 0, !1, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV30(Menu.Dropdown, { children: [
        /* @__PURE__ */ jsxDEV30(Menu.Label, { children: "Yakin untuk menghapus ?" }, void 0, !1, {
          fileName: "app/presentation/components/Button/ActionButtons.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV30(
          Menu.Item,
          {
            onClick: onDelete,
            color: "red",
            leftSection: /* @__PURE__ */ jsxDEV30(IconTrash, {}, void 0, !1, {
              fileName: "app/presentation/components/Button/ActionButtons.tsx",
              lineNumber: 36,
              columnNumber: 21
            }, this),
            children: "Ya hapus!"
          },
          void 0,
          !1,
          {
            fileName: "app/presentation/components/Button/ActionButtons.tsx",
            lineNumber: 33,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/presentation/components/Button/ActionButtons.tsx",
        lineNumber: 31,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Button/ActionButtons.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Button/ActionButtons.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

// app/routes/_app.pembelian/index.tsx
import { Outlet as Outlet5, useFetcher } from "@remix-run/react";
import { typedjson as typedjson15, useTypedLoaderData as useTypedLoaderData9 } from "remix-typedjson";
import { Group as Group11, Table as Table5 } from "@mantine/core";
import { Fragment as Fragment12, jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
var meta14 = () => [{ title: "Data Pembelian" }, { content: "Master pembelian" }];
function PembelianPage() {
  let loader18 = useTypedLoaderData9(), fetcher = useFetcher(), onDelete = (id) => fetcher.submit(null, { action: `/pembelian/${id}`, method: "DELETE" });
  return /* @__PURE__ */ jsxDEV31(Fragment12, { children: [
    /* @__PURE__ */ jsxDEV31(Outlet5, {}, void 0, !1, {
      fileName: "app/routes/_app.pembelian/index.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV31("main", { children: [
      /* @__PURE__ */ jsxDEV31(Group11, { justify: "space-between", children: [
        /* @__PURE__ */ jsxDEV31(ButtonAdd, { label: "Tambah Pembelian", goTo: "tambah" }, void 0, !1, {
          fileName: "app/routes/_app.pembelian/index.tsx",
          lineNumber: 30,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV31(InputSearch, { mb: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.pembelian/index.tsx",
          lineNumber: 31,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.pembelian/index.tsx",
        lineNumber: 29,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV31(
        CustomTable,
        {
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: [
            "No Faktur",
            "Obat",
            "Supplier",
            "Tanggal",
            "Kuantitas",
            "Total"
          ],
          renderActionHeader: !0,
          children: loader18?.data?.data?.map((data) => /* @__PURE__ */ jsxDEV31(Table5.Tr, { children: [
            /* @__PURE__ */ jsxDEV31(Table5.Td, { children: data.invoice }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 47,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV31(Table5.Td, { children: data.medicineName }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 48,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV31(Table5.Td, { children: data.supplierName }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 49,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV31(Table5.Td, { children: data.date.toISOString().split("T")[0] }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 50,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV31(Table5.Td, { children: data.quantity }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 51,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV31(Table5.Td, { children: rupiah(data.total) }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 52,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV31(Table5.Td, { children: /* @__PURE__ */ jsxDEV31(ActionButtons, { onDelete: () => onDelete(data.id) }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 54,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/routes/_app.pembelian/index.tsx",
              lineNumber: 53,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.pembelian/index.tsx",
            lineNumber: 46,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.pembelian/index.tsx",
          lineNumber: 33,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.pembelian/index.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.pembelian/index.tsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}
var loader7 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  let { page, queryString: search } = prepareSearch(request.url), data = await findAllPembelian({ page, search });
  return typedjson15(data);
};

// app/routes/_app.penjualan/index.tsx
var app_exports5 = {};
__export(app_exports5, {
  default: () => PenjualanPage,
  loader: () => loader8,
  meta: () => meta15
});
import { Outlet as Outlet6, useFetcher as useFetcher2 } from "@remix-run/react";
import { typedjson as typedjson16, useTypedLoaderData as useTypedLoaderData10 } from "remix-typedjson";
import { Group as Group12, Table as Table6 } from "@mantine/core";
import { Fragment as Fragment13, jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
var meta15 = () => [{ title: "Data Penjualan" }, { content: "Master Penjualan" }];
function PenjualanPage() {
  let loader18 = useTypedLoaderData10(), fetcher = useFetcher2(), onDelete = (id) => fetcher.submit(null, { action: `/penjualan/${id}`, method: "DELETE" });
  return /* @__PURE__ */ jsxDEV32(Fragment13, { children: [
    /* @__PURE__ */ jsxDEV32(Outlet6, {}, void 0, !1, {
      fileName: "app/routes/_app.penjualan/index.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV32("main", { children: [
      /* @__PURE__ */ jsxDEV32(Group12, { justify: "space-between", children: [
        /* @__PURE__ */ jsxDEV32(ButtonAdd, { label: "Tambah penjualan", goTo: "tambah" }, void 0, !1, {
          fileName: "app/routes/_app.penjualan/index.tsx",
          lineNumber: 30,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV32(InputSearch, { mb: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.penjualan/index.tsx",
          lineNumber: 31,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.penjualan/index.tsx",
        lineNumber: 29,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV32(
        CustomTable,
        {
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: ["No Nota", "Obat", "Tanggal", "Kuantitas", "Total"],
          renderActionHeader: !0,
          children: loader18?.data?.data?.map((data) => /* @__PURE__ */ jsxDEV32(Table6.Tr, { children: [
            /* @__PURE__ */ jsxDEV32(Table6.Td, { children: data.invoice }, void 0, !1, {
              fileName: "app/routes/_app.penjualan/index.tsx",
              lineNumber: 40,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV32(Table6.Td, { children: data.medicineName }, void 0, !1, {
              fileName: "app/routes/_app.penjualan/index.tsx",
              lineNumber: 41,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV32(Table6.Td, { children: data.date.toISOString().split("T")[0] }, void 0, !1, {
              fileName: "app/routes/_app.penjualan/index.tsx",
              lineNumber: 42,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV32(Table6.Td, { children: data.quantity }, void 0, !1, {
              fileName: "app/routes/_app.penjualan/index.tsx",
              lineNumber: 43,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV32(Table6.Td, { children: rupiah(data.total) }, void 0, !1, {
              fileName: "app/routes/_app.penjualan/index.tsx",
              lineNumber: 44,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV32(Table6.Td, { children: /* @__PURE__ */ jsxDEV32(ActionButtons, { onDelete: () => onDelete(data.id) }, void 0, !1, {
              fileName: "app/routes/_app.penjualan/index.tsx",
              lineNumber: 46,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/routes/_app.penjualan/index.tsx",
              lineNumber: 45,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.penjualan/index.tsx",
            lineNumber: 39,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.penjualan/index.tsx",
          lineNumber: 33,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.penjualan/index.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.penjualan/index.tsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}
var loader8 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  let { page, queryString } = prepareSearch(request.url), data = await findAllPenjualan({ page, search: queryString });
  return typedjson16(data);
};

// app/routes/_app.obat.$id/index.tsx
var app_obat_exports2 = {};
__export(app_obat_exports2, {
  action: () => action12,
  default: () => UpdateObat,
  loader: () => loader9,
  meta: () => meta16
});
import {
  redirect as redirect4
} from "@remix-run/node";
import { typedjson as typedjson17 } from "remix-typedjson";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function UpdateObat() {
  return /* @__PURE__ */ jsxDEV33(ObatForm, {}, void 0, !1, {
    fileName: "app/routes/_app.obat.$id/index.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
var meta16 = () => [{ title: "Ubah obat" }], loader9 = async ({ params, request }) => {
  await requireUserSession(request, "ADMIN");
  let data = await findOneObat(+params.id);
  if (data.status === 404)
    throw new Response("Data tidak ditemukan", { status: 404 });
  return typedjson17(data, { status: data.status });
}, action12 = async ({ request, params }) => {
  await requireUserSession(request, "ADMIN");
  let { method } = request, id = +params.id;
  if (method === "PATCH") {
    let formData = await request.formData(), schema = updateObatDto.safeParse(formData);
    if (!schema.success)
      return typedjson17(
        { message: schema.error.errors[0].message, status: 400 },
        { status: 400 }
      );
    let data = await updateObat(schema.data, id);
    return typedjson17(data, { status: data.status });
  }
  if (method === "DELETE")
    return await deleteObat(id), redirect4("/obat");
  throw new Response("Method not allowed", { status: 404 });
};

// app/routes/_app.pengguna/index.tsx
var app_exports6 = {};
__export(app_exports6, {
  default: () => PenggunaPage,
  loader: () => loader10,
  meta: () => meta17
});
import { Outlet as Outlet7, useFetcher as useFetcher3, useNavigate as useNavigate11 } from "@remix-run/react";
import { typedjson as typedjson18, useTypedLoaderData as useTypedLoaderData11 } from "remix-typedjson";
import { Badge, Group as Group13, Table as Table7 } from "@mantine/core";
import { Fragment as Fragment14, jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
var meta17 = () => [{ title: "Data Pengguna" }, { content: "Master pengguna" }], type = {
  ADMIN: "Admin",
  HEAD_WH: "Kepala Gudang",
  SUPER: "Super User"
};
function PenggunaPage() {
  let loader18 = useTypedLoaderData11(), navigate = useNavigate11(), fetcher = useFetcher3(), onUpdate = (id) => navigate(`/pengguna/${id}`), onDelete = (id) => fetcher.submit(null, { action: `/pengguna/${id}`, method: "DELETE" });
  return /* @__PURE__ */ jsxDEV34(Fragment14, { children: [
    /* @__PURE__ */ jsxDEV34(Outlet7, {}, void 0, !1, {
      fileName: "app/routes/_app.pengguna/index.tsx",
      lineNumber: 35,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV34("main", { children: [
      /* @__PURE__ */ jsxDEV34(Group13, { justify: "space-between", children: [
        /* @__PURE__ */ jsxDEV34(ButtonAdd, { label: "Tambah Pengguna", goTo: "tambah" }, void 0, !1, {
          fileName: "app/routes/_app.pengguna/index.tsx",
          lineNumber: 38,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV34(InputSearch, { mb: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.pengguna/index.tsx",
          lineNumber: 39,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.pengguna/index.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV34(
        CustomTable,
        {
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: ["Nama", "Email", "HP", "Level", "Status"],
          renderActionHeader: !0,
          children: loader18?.data?.data?.map((data) => /* @__PURE__ */ jsxDEV34(Table7.Tr, { children: [
            /* @__PURE__ */ jsxDEV34(Table7.Td, { children: data.fullName }, void 0, !1, {
              fileName: "app/routes/_app.pengguna/index.tsx",
              lineNumber: 48,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV34(Table7.Td, { children: data.email }, void 0, !1, {
              fileName: "app/routes/_app.pengguna/index.tsx",
              lineNumber: 49,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV34(Table7.Td, { children: data.hp }, void 0, !1, {
              fileName: "app/routes/_app.pengguna/index.tsx",
              lineNumber: 50,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV34(Table7.Td, { children: type[data.level] }, void 0, !1, {
              fileName: "app/routes/_app.pengguna/index.tsx",
              lineNumber: 51,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV34(Table7.Td, { children: /* @__PURE__ */ jsxDEV34(Badge, { color: data.status ? "blue" : "red", children: data.status ? "Aktif" : "Non Aktif" }, void 0, !1, {
              fileName: "app/routes/_app.pengguna/index.tsx",
              lineNumber: 53,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/routes/_app.pengguna/index.tsx",
              lineNumber: 52,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV34(Table7.Td, { children: /* @__PURE__ */ jsxDEV34(
              ActionButtons,
              {
                onUpdate: () => onUpdate(data.id),
                onDelete: () => onDelete(data.id)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_app.pengguna/index.tsx",
                lineNumber: 58,
                columnNumber: 9
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_app.pengguna/index.tsx",
              lineNumber: 57,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.pengguna/index.tsx",
            lineNumber: 47,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.pengguna/index.tsx",
          lineNumber: 41,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.pengguna/index.tsx",
      lineNumber: 36,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.pengguna/index.tsx",
    lineNumber: 34,
    columnNumber: 3
  }, this);
}
var loader10 = async ({ request }) => {
  let { level } = await requireUserSession(request, "HEAD_WH"), { page, queryString } = prepareSearch(request.url), data = await findAllUser({ page, search: queryString }, level);
  return typedjson18(data);
};

// app/routes/_app.supplier/index.tsx
var app_exports7 = {};
__export(app_exports7, {
  default: () => SupplierPage,
  loader: () => loader11,
  meta: () => meta18
});
import { Outlet as Outlet8, useFetcher as useFetcher4, useNavigate as useNavigate12 } from "@remix-run/react";
import { Group as Group14, Table as Table8 } from "@mantine/core";
import { typedjson as typedjson19, useTypedLoaderData as useTypedLoaderData12 } from "remix-typedjson";
import { Fragment as Fragment15, jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
var meta18 = () => [{ title: "Data supplier" }];
function SupplierPage() {
  let loader18 = useTypedLoaderData12(), navigate = useNavigate12(), fetcher = useFetcher4(), onUpdate = (id) => navigate(`/supplier/${id}`), onDelete = (id) => fetcher.submit(null, { action: `/supplier/${id}`, method: "DELETE" });
  return /* @__PURE__ */ jsxDEV35(Fragment15, { children: [
    /* @__PURE__ */ jsxDEV35(Outlet8, {}, void 0, !1, {
      fileName: "app/routes/_app.supplier/index.tsx",
      lineNumber: 27,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV35("main", { children: [
      /* @__PURE__ */ jsxDEV35(Group14, { justify: "space-between", children: [
        /* @__PURE__ */ jsxDEV35(ButtonAdd, { label: "Tambah Supplier", goTo: "tambah" }, void 0, !1, {
          fileName: "app/routes/_app.supplier/index.tsx",
          lineNumber: 30,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV35(InputSearch, { mb: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.supplier/index.tsx",
          lineNumber: 31,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.supplier/index.tsx",
        lineNumber: 29,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV35(
        CustomTable,
        {
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: ["Nama", "Telpon"],
          renderActionHeader: !0,
          children: loader18?.data?.data.map((data) => /* @__PURE__ */ jsxDEV35(Table8.Tr, { children: [
            /* @__PURE__ */ jsxDEV35(Table8.Td, { children: data.name }, void 0, !1, {
              fileName: "app/routes/_app.supplier/index.tsx",
              lineNumber: 40,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV35(Table8.Td, { children: data.hp }, void 0, !1, {
              fileName: "app/routes/_app.supplier/index.tsx",
              lineNumber: 41,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV35(Table8.Td, { children: /* @__PURE__ */ jsxDEV35(
              ActionButtons,
              {
                onUpdate: () => onUpdate(data.id),
                onDelete: () => onDelete(data.id)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_app.supplier/index.tsx",
                lineNumber: 43,
                columnNumber: 9
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_app.supplier/index.tsx",
              lineNumber: 42,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.supplier/index.tsx",
            lineNumber: 39,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.supplier/index.tsx",
          lineNumber: 33,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.supplier/index.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.supplier/index.tsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}
var loader11 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  let searchParams = new URL(request.url).searchParams, querySearch = searchParams.get("search") || "", queryPage = +(searchParams.get("page") || 0), page = queryPage > 0 ? queryPage - 1 : 0, data = await findAllSupplier({ page, search: querySearch });
  return typedjson19(data);
};

// app/routes/report-excel/index.ts
var report_excel_exports = {};
__export(report_excel_exports, {
  loader: () => loader12
});
import z11 from "zod";
import { typedjson as typedjson20 } from "remix-typedjson";
async function loader12({ request }) {
  await requireUserSession(request, "HEAD_WH");
  let { start, end } = prepareSearch(request.url), stringToDate = z11.coerce.date();
  if (!stringToDate.safeParse(start).success || !stringToDate.safeParse(end).success)
    return typedjson20({ data: null, message: "Invalid date" }, { status: 400 });
  let now = /* @__PURE__ */ new Date(), startDate = (start ? new Date(start) : now).toLocaleDateString("en-CA"), endDate = (end ? new Date(end) : now).toLocaleDateString("en-CA"), reportType = new URL(request.url).searchParams.get("data"), data;
  switch (reportType) {
    case "penjualan":
      data = await exportPenjualan({
        start: startDate,
        end: endDate
      });
      break;
    case "obat":
      data = await exportObat();
      break;
    case "pembelian":
      data = await exportPembelian({
        start: startDate,
        end: endDate
      });
      break;
    default:
      break;
  }
  return data ? new Response(data, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    }
  }) : new Response("Not found", { status: 404 });
}

// app/routes/_app._index/index.tsx
var app_exports8 = {};
__export(app_exports8, {
  default: () => Dashboard,
  loader: () => loader13,
  meta: () => meta19,
  options: () => options
});
import { Paper as Paper2, SimpleGrid as SimpleGrid2, Text as Text3 } from "@mantine/core";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IconCash, IconCashOff, IconPill } from "@tabler/icons-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as Title2,
  Tooltip as Tooltip3,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// app/services/dashboard.server.ts
var getDashboardData = async () => {
  let labels2 = {
    Januari: 1,
    Februari: 2,
    Maret: 3,
    April: 4,
    Mei: 5,
    Juni: 6,
    Juli: 7,
    Agustus: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12
  };
  try {
    let year2 = (/* @__PURE__ */ new Date()).getFullYear(), start = new Date(year2, 0, 1).toLocaleDateString("en-CA"), end = new Date(year2, 11, 31).toLocaleDateString("en-CA"), countMedicine = await prisma.medicine.count({
      where: { isDeleted: 0 }
    }), {
      _sum: { total: sumSalles }
    } = await prisma.sale.aggregate({
      _sum: { total: !0 },
      where: { date: { gte: new Date(start), lte: new Date(end) } }
    }), {
      _sum: { total: sumPurchase }
    } = await prisma.purchase.aggregate({
      _sum: { total: !0 },
      where: { date: { gte: new Date(start), lte: new Date(end) } }
    }), salesRaw = await prisma.$queryRaw`
		SELECT
    	EXTRACT(MONTH FROM date) AS month,
    	SUM(total) AS total
		FROM sales
		WHERE EXTRACT(YEAR FROM DATE) = ${year2}
		GROUP BY EXTRACT(MONTH FROM date)
		ORDER BY EXTRACT(MONTH FROM date)`, datasheetSales = Array.from(
      { length: 12 },
      (_, index) => salesRaw.find((item) => item.month === index + 1)?.total || 0
    ), purchaseRaw = await prisma.$queryRaw`
		SELECT
    	EXTRACT(MONTH FROM date) AS month,
    	SUM(total) AS total
		FROM purchase
		WHERE EXTRACT(YEAR FROM DATE) = ${year2}
		GROUP BY EXTRACT(MONTH FROM date)
		ORDER BY EXTRACT(MONTH FROM date)`, datasheetPurchase = Array.from(
      { length: 12 },
      (_, index) => purchaseRaw.find((item) => item.month === index + 1)?.total || 0
    );
    return {
      data: {
        countMedicine,
        sumSalles,
        sumPurchase,
        datasheetSales,
        datasheetPurchase
      },
      message: "Sukses",
      status: 200
    };
  } catch {
    throw new Error(errorMessage.default);
  }
};

// app/presentation/components/Card/CardDashboard.tsx
import { Group as Group15, Paper, Text as Text2 } from "@mantine/core";
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
function CardDashboard({
  icon,
  title,
  value
}) {
  return /* @__PURE__ */ jsxDEV36(Paper, { shadow: "sm", p: "sm", children: /* @__PURE__ */ jsxDEV36(Group15, { children: [
    /* @__PURE__ */ jsxDEV36(Paper, { withBorder: !0, p: "xs", children: icon }, void 0, !1, {
      fileName: "app/presentation/components/Card/CardDashboard.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV36("div", { children: [
      /* @__PURE__ */ jsxDEV36(Text2, { c: "gray", children: title }, void 0, !1, {
        fileName: "app/presentation/components/Card/CardDashboard.tsx",
        lineNumber: 21,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV36(Text2, { c: "dark", children: value }, void 0, !1, {
        fileName: "app/presentation/components/Card/CardDashboard.tsx",
        lineNumber: 22,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/presentation/components/Card/CardDashboard.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Card/CardDashboard.tsx",
    lineNumber: 16,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/presentation/components/Card/CardDashboard.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/routes/_app._index/index.tsx
import { Fragment as Fragment16, jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title2,
  Tooltip3,
  Legend
);
var labels = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
], year = (/* @__PURE__ */ new Date()).getFullYear().toString(), options = {
  responsive: !0,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: !0,
      text: year
    }
  },
  maintainAspectRation: !0
}, color = {
  pembelian: "rgba(53, 162, 235, 0.5)",
  penjualan: "rgba(255, 99, 132, 0.5)"
};
function Dashboard() {
  let {
    countMedicine,
    sumPurchase,
    sumSalles,
    datasheetPurchase,
    datasheetSales
  } = useLoaderData(), data = {
    labels,
    datasets: [
      {
        label: "Penjualan",
        data: datasheetSales,
        backgroundColor: color.penjualan
      },
      {
        label: "Pembelian",
        data: datasheetPurchase,
        backgroundColor: color.pembelian
      }
    ]
  };
  return /* @__PURE__ */ jsxDEV37(Fragment16, { children: [
    /* @__PURE__ */ jsxDEV37(Text3, { style: { textAlign: "center" }, c: "gray", mb: "xs", children: year }, void 0, !1, {
      fileName: "app/routes/_app._index/index.tsx",
      lineNumber: 90,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV37(SimpleGrid2, { cols: 3, children: [
      /* @__PURE__ */ jsxDEV37(
        CardDashboard,
        {
          icon: /* @__PURE__ */ jsxDEV37(IconPill, { color: "blue", size: 50 }, void 0, !1, {
            fileName: "app/routes/_app._index/index.tsx",
            lineNumber: 95,
            columnNumber: 12
          }, this),
          title: "Obat",
          value: countMedicine
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app._index/index.tsx",
          lineNumber: 94,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV37(
        CardDashboard,
        {
          icon: /* @__PURE__ */ jsxDEV37(IconCash, { color: color.penjualan, size: 50 }, void 0, !1, {
            fileName: "app/routes/_app._index/index.tsx",
            lineNumber: 100,
            columnNumber: 12
          }, this),
          title: "Penjualan",
          value: rupiah(sumSalles ? +sumSalles : 0)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app._index/index.tsx",
          lineNumber: 99,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV37(
        CardDashboard,
        {
          icon: /* @__PURE__ */ jsxDEV37(IconCashOff, { color: color.pembelian, size: 50 }, void 0, !1, {
            fileName: "app/routes/_app._index/index.tsx",
            lineNumber: 105,
            columnNumber: 12
          }, this),
          title: "Pembelian",
          value: rupiah(sumPurchase ? +sumPurchase : 0)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app._index/index.tsx",
          lineNumber: 104,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app._index/index.tsx",
      lineNumber: 93,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV37(Paper2, { shadow: "sm", p: "sm", withBorder: !0, mt: "md", children: /* @__PURE__ */ jsxDEV37(Bar, { options, data, height: "70%" }, void 0, !1, {
      fileName: "app/routes/_app._index/index.tsx",
      lineNumber: 111,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/_app._index/index.tsx",
      lineNumber: 110,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app._index/index.tsx",
    lineNumber: 89,
    columnNumber: 3
  }, this);
}
var meta19 = () => [{ title: "Dashboard" }], loader13 = async ({ request }) => {
  await requireUserSession(request);
  let data = await getDashboardData();
  return json(data.data, { status: data.status });
};

// app/routes/_app.satuan/index.tsx
var app_exports9 = {};
__export(app_exports9, {
  default: () => SatuanPage,
  loader: () => loader14,
  meta: () => meta20
});
import { Outlet as Outlet9, useFetcher as useFetcher5, useNavigate as useNavigate13 } from "@remix-run/react";
import { Group as Group16, Table as Table9 } from "@mantine/core";
import { typedjson as typedjson21, useTypedLoaderData as useTypedLoaderData13 } from "remix-typedjson";
import { Fragment as Fragment17, jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
function SatuanPage() {
  let loader18 = useTypedLoaderData13(), navigate = useNavigate13(), fetcher = useFetcher5(), onUpdate = (id) => navigate(`/satuan/${id}`), onDelete = (id) => fetcher.submit(null, { action: `/satuan/${id}`, method: "DELETE" });
  return /* @__PURE__ */ jsxDEV38(Fragment17, { children: [
    /* @__PURE__ */ jsxDEV38(Outlet9, {}, void 0, !1, {
      fileName: "app/routes/_app.satuan/index.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV38("main", { children: [
      /* @__PURE__ */ jsxDEV38(Group16, { justify: "space-between", children: [
        /* @__PURE__ */ jsxDEV38(ButtonAdd, { label: "Tambah Satuan", goTo: "tambah" }, void 0, !1, {
          fileName: "app/routes/_app.satuan/index.tsx",
          lineNumber: 27,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV38(InputSearch, { mb: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.satuan/index.tsx",
          lineNumber: 28,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.satuan/index.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV38(
        CustomTable,
        {
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: ["Nama"],
          renderActionHeader: !0,
          children: loader18?.data?.data.map((data) => /* @__PURE__ */ jsxDEV38(Table9.Tr, { children: [
            /* @__PURE__ */ jsxDEV38(Table9.Td, { children: data.name }, void 0, !1, {
              fileName: "app/routes/_app.satuan/index.tsx",
              lineNumber: 37,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV38(Table9.Td, { children: /* @__PURE__ */ jsxDEV38(
              ActionButtons,
              {
                onUpdate: () => onUpdate(data.id),
                onDelete: () => onDelete(data.id)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_app.satuan/index.tsx",
                lineNumber: 39,
                columnNumber: 9
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_app.satuan/index.tsx",
              lineNumber: 38,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.satuan/index.tsx",
            lineNumber: 36,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.satuan/index.tsx",
          lineNumber: 30,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.satuan/index.tsx",
      lineNumber: 25,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.satuan/index.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, this);
}
var meta20 = () => [{ title: "Data satuan" }], loader14 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  let { page, queryString } = prepareSearch(request.url), data = await findAllSatuan({ page, search: queryString });
  return typedjson21(data);
};

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action13,
  default: () => AuthPage,
  loader: () => loader15
});
import { Paper as Paper3, TextInput as TextInput6, PasswordInput as PasswordInput2, Button as Button11, Title as Title3 } from "@mantine/core";
import { isEmail as isEmail2, useForm as useForm7, hasLength as hasLength2 } from "@mantine/form";
import {
  json as json2,
  redirect as redirect5
} from "@remix-run/node";
import {
  useActionData,
  useLoaderData as useLoaderData2,
  useNavigation as useNavigation8,
  useSubmit as useSubmit7
} from "@remix-run/react";
import { useEffect as useEffect8 } from "react";
import { notifications as notifications7 } from "@mantine/notifications";

// app/presentation/styles/AuthenticationImage.module.css
var AuthenticationImage_module_default = { wrapper: "AuthenticationImage-module__wrapper__uPohY", form: "AuthenticationImage-module__form__nmr-z", title: "AuthenticationImage-module__title__6hrgv" };

// app/routes/_auth.login.tsx
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
function AuthPage() {
  let navigation = useNavigation8(), submit = useSubmit7(), actionData = useActionData(), loaderData = useLoaderData2(), isSubmitting = navigation.state !== "idle", form = useForm7({
    initialValues: {
      email: "",
      password: ""
    },
    validate: {
      email: isEmail2("Email tidak valid"),
      password: hasLength2({ min: 2 }, "Password minimal 6 karakter")
    }
  }), onSubmit = (values) => {
    submit(values, {
      method: "POST"
    });
  };
  return useEffect8(() => {
    let message;
    actionData && (message = actionData.message), loaderData && (message = loaderData.error), message && notifications7.show({
      title: "Gagal",
      message,
      autoClose: 5e3,
      color: "red"
    });
  }, [actionData, loaderData]), /* @__PURE__ */ jsxDEV39("div", { className: AuthenticationImage_module_default.wrapper, children: /* @__PURE__ */ jsxDEV39(Paper3, { className: AuthenticationImage_module_default.form, radius: 0, p: 30, children: [
    /* @__PURE__ */ jsxDEV39(Title3, { order: 2, className: AuthenticationImage_module_default.title, ta: "center", mt: "md", mb: 50, children: "Selamat datang di Apptik" }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV39("form", { onSubmit: form.onSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxDEV39(
        TextInput6,
        {
          ...form.getInputProps("email"),
          label: "Email",
          placeholder: "hello@gmail.com",
          size: "md"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 71,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV39(
        PasswordInput2,
        {
          label: "Password",
          placeholder: "password",
          mt: "md",
          size: "md",
          ...form.getInputProps("password")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 77,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ jsxDEV39(
        Button11,
        {
          fullWidth: !0,
          mt: "xl",
          size: "md",
          type: "submit",
          disabled: isSubmitting,
          loading: isSubmitting,
          children: "Login"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 84,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 70,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 66,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
async function action13({ request }) {
  try {
    let formData = await request.formData(), schema = loginDto.safeParse(formData);
    return schema.success ? login(schema.data) : json2(
      { message: schema.error.errors[0].message, status: 400 },
      { status: 400 }
    );
  } catch (error) {
    throw error;
  }
}
async function loader15({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId"))
    return redirect5("/");
  let data = { error: session.get("error") };
  return json2(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/routes/_app.obat/index.tsx
var app_exports10 = {};
__export(app_exports10, {
  default: () => ObatPage,
  loader: () => loader16,
  meta: () => meta21
});
import { Outlet as Outlet10, useFetcher as useFetcher6, useNavigate as useNavigate14 } from "@remix-run/react";
import { typedjson as typedjson22, useTypedLoaderData as useTypedLoaderData14 } from "remix-typedjson";
import { Group as Group17, Table as Table10 } from "@mantine/core";
import { Fragment as Fragment18, jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
var meta21 = () => [{ title: "Data Obat" }, { content: "Master obat" }];
function ObatPage() {
  let loader18 = useTypedLoaderData14(), navigate = useNavigate14(), fetcher = useFetcher6(), onUpdate = (id) => navigate(`/obat/${id}`), onDelete = (id) => fetcher.submit(null, { action: `/obat/${id}`, method: "DELETE" });
  return /* @__PURE__ */ jsxDEV40(Fragment18, { children: [
    /* @__PURE__ */ jsxDEV40(Outlet10, {}, void 0, !1, {
      fileName: "app/routes/_app.obat/index.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV40("main", { children: [
      /* @__PURE__ */ jsxDEV40(Group17, { justify: "space-between", children: [
        /* @__PURE__ */ jsxDEV40(ButtonAdd, { label: "Tambah Obat", goTo: "tambah" }, void 0, !1, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 32,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV40(InputSearch, { mb: "sm" }, void 0, !1, {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 33,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.obat/index.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV40(
        CustomTable,
        {
          totalPagination: loader18?.data?.pagination.pageCount || 0,
          header: ["Kode", "Obat", "Beli", "Jual", "Stok"],
          renderActionHeader: !0,
          children: loader18?.data?.data?.map((data) => /* @__PURE__ */ jsxDEV40(Table10.Tr, { children: [
            /* @__PURE__ */ jsxDEV40(Table10.Td, { children: data.code }, void 0, !1, {
              fileName: "app/routes/_app.obat/index.tsx",
              lineNumber: 42,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV40(Table10.Td, { children: data.name }, void 0, !1, {
              fileName: "app/routes/_app.obat/index.tsx",
              lineNumber: 43,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV40(Table10.Td, { children: rupiah(data.buyPrice) }, void 0, !1, {
              fileName: "app/routes/_app.obat/index.tsx",
              lineNumber: 44,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV40(Table10.Td, { children: rupiah(data.sellPrice) }, void 0, !1, {
              fileName: "app/routes/_app.obat/index.tsx",
              lineNumber: 45,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV40(Table10.Td, { children: data.stock }, void 0, !1, {
              fileName: "app/routes/_app.obat/index.tsx",
              lineNumber: 46,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV40(Table10.Td, { children: /* @__PURE__ */ jsxDEV40(
              ActionButtons,
              {
                onUpdate: () => onUpdate(data.id),
                onDelete: () => onDelete(data.id)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_app.obat/index.tsx",
                lineNumber: 48,
                columnNumber: 9
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_app.obat/index.tsx",
              lineNumber: 47,
              columnNumber: 8
            }, this)
          ] }, data.id, !0, {
            fileName: "app/routes/_app.obat/index.tsx",
            lineNumber: 41,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_app.obat/index.tsx",
          lineNumber: 35,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_app.obat/index.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.obat/index.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}
var loader16 = async ({ request }) => {
  await requireUserSession(request, "ADMIN");
  let { page, queryString } = prepareSearch(request.url), data = await findAllObat({ page, search: queryString });
  return typedjson22(data);
};

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action14
});
import { json as json3 } from "@remix-run/node";
function action14({ request }) {
  if (request.method !== "POST")
    throw json3({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
import { Outlet as Outlet11 } from "@remix-run/react";
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
function auth_default() {
  return /* @__PURE__ */ jsxDEV41("div", { children: /* @__PURE__ */ jsxDEV41(Outlet11, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 6,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

// app/routes/_app/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => AppLayout,
  loader: () => loader17
});
import { Outlet as Outlet12 } from "@remix-run/react";

// app/presentation/components/Sidebar/Sidebar.tsx
import {
  AppShell,
  Burger,
  Group as Group19,
  Text as Text4,
  ScrollArea,
  Menu as Menu2,
  rem as rem2,
  Button as Button12
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconGauge,
  IconPackage,
  IconBuildingFactory2,
  IconUser,
  IconReportAnalytics,
  IconPill as IconPill2,
  IconShoppingBag,
  IconShoppingCart,
  IconLogout,
  IconChevronDown
} from "@tabler/icons-react";

// app/presentation/components/Sidebar/NavbarLinksGroup.tsx
import { useState } from "react";
import {
  Group as Group18,
  Box as Box2,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  rem
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { Link as Link3, useNavigate as useNavigate15 } from "@remix-run/react";

// app/presentation/components/Sidebar/NavbarLinksGroup.module.css
var NavbarLinksGroup_module_default = { control: "NavbarLinksGroup-module__control__t-YWe", link: "NavbarLinksGroup-module__link__pmxSf", chevron: "NavbarLinksGroup-module__chevron__IEwyd" };

// app/presentation/components/Sidebar/NavbarLinksGroup.tsx
import { Fragment as Fragment19, jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links: links2,
  link
}) {
  let navigate = useNavigate15(), hasLinks = Array.isArray(links2), [opened, setOpened] = useState(initiallyOpened || !1), goTo = () => {
    link !== "#" && navigate(link);
  }, items = (hasLinks ? links2 : []).map(
    (link2) => /* @__PURE__ */ jsxDEV42(Link3, { className: NavbarLinksGroup_module_default.link, to: link2.link, children: link2.label }, link2.label, !1, {
      fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
      lineNumber: 40,
      columnNumber: 3
    }, this)
  );
  return /* @__PURE__ */ jsxDEV42(Fragment19, { children: [
    /* @__PURE__ */ jsxDEV42(
      UnstyledButton,
      {
        onClick: () => setOpened((o) => !o),
        className: NavbarLinksGroup_module_default.control,
        children: /* @__PURE__ */ jsxDEV42(Group18, { onClick: goTo, justify: "space-between", gap: 0, children: [
          /* @__PURE__ */ jsxDEV42(Box2, { style: { display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ jsxDEV42(ThemeIcon, { variant: "light", size: 30, children: /* @__PURE__ */ jsxDEV42(Icon, { style: { width: rem(18), height: rem(18) } }, void 0, !1, {
              fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
              lineNumber: 54,
              columnNumber: 8
            }, this) }, void 0, !1, {
              fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
              lineNumber: 53,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV42(Box2, { ml: "md", children: label }, void 0, !1, {
              fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
              lineNumber: 56,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
            lineNumber: 52,
            columnNumber: 6
          }, this),
          hasLinks && /* @__PURE__ */ jsxDEV42(
            IconChevronRight,
            {
              className: NavbarLinksGroup_module_default.chevron,
              stroke: 1.5,
              style: {
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none"
              }
            },
            void 0,
            !1,
            {
              fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
              lineNumber: 59,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
          lineNumber: 51,
          columnNumber: 5
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
        lineNumber: 47,
        columnNumber: 4
      },
      this
    ),
    hasLinks ? /* @__PURE__ */ jsxDEV42(Collapse, { in: opened, children: items }, void 0, !1, {
      fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
      lineNumber: 71,
      columnNumber: 16
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/presentation/components/Sidebar/NavbarLinksGroup.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/presentation/components/Sidebar/Sidebar.tsx
import { Form as Form2, useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/presentation/components/Sidebar/Sidebar.module.css
var Sidebar_module_default = { links: "Sidebar-module__links__kpX44", linksInner: "Sidebar-module__linksInner__FbjjM", footer: "Sidebar-module__footer__lfI7d" };

// app/presentation/components/Sidebar/Sidebar.tsx
import { jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
import { createElement } from "react";
var dataLinks = [
  { link: "/", label: "Dashboard", icon: IconGauge },
  { link: "/obat", label: "Obat", icon: IconPill2, level: "ADMIN" },
  {
    link: "/penjualan",
    label: "Penjualan",
    icon: IconShoppingCart,
    level: "ADMIN"
  },
  {
    link: "/pembelian",
    label: "Pembelian",
    icon: IconShoppingBag,
    level: "ADMIN"
  },
  {
    link: "/supplier",
    label: "Supplier",
    icon: IconBuildingFactory2,
    level: "ADMIN"
  },
  { link: "/satuan", label: "Satuan", icon: IconPackage, level: "ADMIN" },
  { link: "/pengguna", label: "Pengguna", icon: IconUser, level: "HEAD_WH" },
  {
    label: "Laporan",
    icon: IconReportAnalytics,
    links: [
      { label: "Obat", link: "/laporan-obat" },
      { label: "Pembelian", link: "/laporan-pembelian" },
      { label: "Penjualan", link: "/laporan-penjualan" }
    ],
    link: "#",
    level: "HEAD_WH"
  }
];
function SideBar({ children }) {
  let [opened, { toggle }] = useDisclosure(), data = useLoaderData3(), links2 = dataLinks.reduce((filteredArray, item) => data.level === "SUPER" ? (filteredArray.push(/* @__PURE__ */ createElement(LinksGroup, { ...item, key: item.label })), filteredArray) : (item?.level === data.level && filteredArray.push(/* @__PURE__ */ createElement(LinksGroup, { ...item, key: item.label })), item?.level || filteredArray.push(/* @__PURE__ */ createElement(LinksGroup, { ...item, key: item.label })), filteredArray), []);
  return /* @__PURE__ */ jsxDEV43(
    AppShell,
    {
      styles: {
        main: {
          transition: "padding-left 450ms ease",
          background: "#ffff"
        },
        navbar: {
          overflow: "hidden",
          transition: "all 350ms ease, min-width 350ms ease",
          left: opened ? 0 : -300
        },
        header: { background: "var(--mantine-color-gray-0)", border: "none" }
      },
      navbar: {
        width: opened ? 300 : 0,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened }
      },
      header: { height: 60 },
      padding: "md",
      children: [
        /* @__PURE__ */ jsxDEV43(AppShell.Header, { children: /* @__PURE__ */ jsxDEV43(Group19, { h: "100%", px: "md", display: "flex", justify: "space-between", children: [
          /* @__PURE__ */ jsxDEV43(Group19, { children: [
            /* @__PURE__ */ jsxDEV43(Burger, { opened, onClick: toggle, size: "sm" }, void 0, !1, {
              fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
              lineNumber: 114,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV43(
              Text4,
              {
                variant: "gradient",
                gradient: { from: "indigo", to: "grape", deg: 156 },
                fw: 600,
                children: "APOTEK POS"
              },
              void 0,
              !1,
              {
                fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
                lineNumber: 115,
                columnNumber: 7
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
            lineNumber: 113,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ jsxDEV43(Menu2, { trigger: "hover", openDelay: 100, closeDelay: 400, children: [
            /* @__PURE__ */ jsxDEV43(Menu2.Target, { children: /* @__PURE__ */ jsxDEV43(Group19, { children: [
              /* @__PURE__ */ jsxDEV43(Text4, { children: data.fullName }, void 0, !1, {
                fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
                lineNumber: 126,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV43(IconChevronDown, { size: "1rem" }, void 0, !1, {
                fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
                lineNumber: 127,
                columnNumber: 9
              }, this)
            ] }, void 0, !0, {
              fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
              lineNumber: 125,
              columnNumber: 8
            }, this) }, void 0, !1, {
              fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
              lineNumber: 124,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV43(Menu2.Dropdown, { children: /* @__PURE__ */ jsxDEV43(
              Menu2.Item,
              {
                color: "red",
                leftSection: /* @__PURE__ */ jsxDEV43(IconLogout, { style: { width: rem2(14), height: rem2(14) } }, void 0, !1, {
                  fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
                  lineNumber: 134,
                  columnNumber: 17
                }, this),
                children: /* @__PURE__ */ jsxDEV43(Form2, { method: "post", action: "logout", children: /* @__PURE__ */ jsxDEV43(Button12, { variant: "transparent", c: "red", type: "submit", children: "Logout" }, void 0, !1, {
                  fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
                  lineNumber: 138,
                  columnNumber: 10
                }, this) }, void 0, !1, {
                  fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
                  lineNumber: 137,
                  columnNumber: 9
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
                lineNumber: 131,
                columnNumber: 8
              },
              this
            ) }, void 0, !1, {
              fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
              lineNumber: 130,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
            lineNumber: 123,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 112,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 111,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV43(AppShell.Navbar, { children: /* @__PURE__ */ jsxDEV43(ScrollArea, { className: Sidebar_module_default.links, children: /* @__PURE__ */ jsxDEV43("div", { className: Sidebar_module_default.linksInner, children: links2 }, void 0, !1, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 149,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 148,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 147,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV43(AppShell.Main, { children }, void 0, !1, {
          fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
          lineNumber: 152,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/presentation/components/Sidebar/Sidebar.tsx",
      lineNumber: 90,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_app/route.tsx
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
function AppLayout() {
  return /* @__PURE__ */ jsxDEV44(SideBar, { children: /* @__PURE__ */ jsxDEV44(Outlet12, {}, void 0, !1, {
    fileName: "app/routes/_app/route.tsx",
    lineNumber: 9,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_app/route.tsx",
    lineNumber: 8,
    columnNumber: 3
  }, this);
}
function loader17({ request }) {
  return getUserFromSession(request);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XM7AF5LL.js", imports: ["/build/_shared/chunk-JXHNNPNR.js", "/build/_shared/chunk-3GYVE5CM.js", "/build/_shared/chunk-H36SQQE5.js", "/build/_shared/chunk-JKUASME7.js", "/build/_shared/chunk-TVZC3ZTX.js", "/build/_shared/chunk-GE3GTWYK.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4SFQ4DAT.js", imports: ["/build/_shared/chunk-FB5U22CE.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !0 }, "routes/_app": { id: "routes/_app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_app-ZE5UWM22.js", imports: ["/build/_shared/chunk-PN4YPUV5.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app._index": { id: "routes/_app._index", parentId: "routes/_app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_app._index-AWAX6EHE.js", imports: ["/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-UR2JVBTH.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.laporan-obat": { id: "routes/_app.laporan-obat", parentId: "routes/_app", path: "laporan-obat", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.laporan-obat-DIAND45D.js", imports: ["/build/_shared/chunk-K7XK6WFT.js", "/build/_shared/chunk-DM2RFF4X.js", "/build/_shared/chunk-MWUO55WX.js", "/build/_shared/chunk-UR2JVBTH.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.laporan-pembelian": { id: "routes/_app.laporan-pembelian", parentId: "routes/_app", path: "laporan-pembelian", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.laporan-pembelian-VLTWO4AZ.js", imports: ["/build/_shared/chunk-RVANRUO7.js", "/build/_shared/chunk-MWUO55WX.js", "/build/_shared/chunk-UR2JVBTH.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-CY2NIO2S.js", "/build/_shared/chunk-FB5U22CE.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.laporan-penjualan": { id: "routes/_app.laporan-penjualan", parentId: "routes/_app", path: "laporan-penjualan", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.laporan-penjualan-Z3N2QVNT.js", imports: ["/build/_shared/chunk-RVANRUO7.js", "/build/_shared/chunk-MWUO55WX.js", "/build/_shared/chunk-UR2JVBTH.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-MHPTUXZ7.js", "/build/_shared/chunk-FB5U22CE.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.obat": { id: "routes/_app.obat", parentId: "routes/_app", path: "obat", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.obat-N5F73GMQ.js", imports: ["/build/_shared/chunk-6QVH6ZDZ.js", "/build/_shared/chunk-K7XK6WFT.js", "/build/_shared/chunk-DM2RFF4X.js", "/build/_shared/chunk-UR2JVBTH.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.obat.$id": { id: "routes/_app.obat.$id", parentId: "routes/_app.obat", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.obat.$id-N6XNWMMC.js", imports: ["/build/_shared/chunk-JBCBDQ4E.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-72OE7WZ6.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.obat.tambah": { id: "routes/_app.obat.tambah", parentId: "routes/_app.obat", path: "tambah", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.obat.tambah-5JPENQ3P.js", imports: ["/build/_shared/chunk-JBCBDQ4E.js", "/build/_shared/chunk-72OE7WZ6.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_app.pembelian": { id: "routes/_app.pembelian", parentId: "routes/_app", path: "pembelian", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.pembelian-EBZN5VLK.js", imports: ["/build/_shared/chunk-6QVH6ZDZ.js", "/build/_shared/chunk-K7XK6WFT.js", "/build/_shared/chunk-UR2JVBTH.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-CY2NIO2S.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.pembelian.$id": { id: "routes/_app.pembelian.$id", parentId: "routes/_app.pembelian", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.pembelian.$id-VK6AQNRY.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_app.pembelian.tambah": { id: "routes/_app.pembelian.tambah", parentId: "routes/_app.pembelian", path: "tambah", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.pembelian.tambah-I4BBDPX3.js", imports: ["/build/_shared/chunk-72OE7WZ6.js", "/build/_shared/chunk-FB5U22CE.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_app.pengguna": { id: "routes/_app.pengguna", parentId: "routes/_app", path: "pengguna", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.pengguna-FW3BMPLY.js", imports: ["/build/_shared/chunk-6QVH6ZDZ.js", "/build/_shared/chunk-K7XK6WFT.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-TUYE7RHD.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.pengguna.$id": { id: "routes/_app.pengguna.$id", parentId: "routes/_app.pengguna", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.pengguna.$id-XAWOOHJ3.js", imports: ["/build/_shared/chunk-HB2CIPTA.js", "/build/_shared/chunk-FB5U22CE.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.pengguna.tambah": { id: "routes/_app.pengguna.tambah", parentId: "routes/_app.pengguna", path: "tambah", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.pengguna.tambah-XXCXREUH.js", imports: ["/build/_shared/chunk-HB2CIPTA.js", "/build/_shared/chunk-FB5U22CE.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_app.penjualan": { id: "routes/_app.penjualan", parentId: "routes/_app", path: "penjualan", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.penjualan-DUGKIDY2.js", imports: ["/build/_shared/chunk-6QVH6ZDZ.js", "/build/_shared/chunk-K7XK6WFT.js", "/build/_shared/chunk-UR2JVBTH.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-MHPTUXZ7.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.penjualan.$id": { id: "routes/_app.penjualan.$id", parentId: "routes/_app.penjualan", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.penjualan.$id-ZF47M2T2.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_app.penjualan.tambah": { id: "routes/_app.penjualan.tambah", parentId: "routes/_app.penjualan", path: "tambah", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.penjualan.tambah-MQ3SIC4J.js", imports: ["/build/_shared/chunk-72OE7WZ6.js", "/build/_shared/chunk-FB5U22CE.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_app.satuan": { id: "routes/_app.satuan", parentId: "routes/_app", path: "satuan", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.satuan-GHGJ366Z.js", imports: ["/build/_shared/chunk-6QVH6ZDZ.js", "/build/_shared/chunk-K7XK6WFT.js", "/build/_shared/chunk-5DYELMDO.js", "/build/_shared/chunk-V4SLZUJ4.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.satuan.$id": { id: "routes/_app.satuan.$id", parentId: "routes/_app.satuan", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.satuan.$id-V5NUS6ES.js", imports: ["/build/_shared/chunk-KR6KRWEQ.js", "/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.satuan.tambah": { id: "routes/_app.satuan.tambah", parentId: "routes/_app.satuan", path: "tambah", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.satuan.tambah-UOFP25GX.js", imports: ["/build/_shared/chunk-KR6KRWEQ.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_app.supplier": { id: "routes/_app.supplier", parentId: "routes/_app", path: "supplier", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.supplier-QVJEME7Y.js", imports: ["/build/_shared/chunk-6QVH6ZDZ.js", "/build/_shared/chunk-K7XK6WFT.js", "/build/_shared/chunk-RIBNF5H3.js", "/build/_shared/chunk-MCQZOWTR.js", "/build/_shared/chunk-LIHYYZCT.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.supplier.$id": { id: "routes/_app.supplier.$id", parentId: "routes/_app.supplier", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.supplier.$id-MKXIT4PZ.js", imports: ["/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-5HYSACAG.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_app.supplier.tambah": { id: "routes/_app.supplier.tambah", parentId: "routes/_app.supplier", path: "tambah", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.supplier.tambah-MQSHXIDN.js", imports: ["/build/_shared/chunk-5HYSACAG.js", "/build/_shared/chunk-ADOTIUEJ.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-ZXMV4QQG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "routes/_auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-FD5MV5W4.js", imports: ["/build/_shared/chunk-TMJLOEVS.js", "/build/_shared/chunk-6GUGFI3G.js", "/build/_shared/chunk-J4BNWPQD.js", "/build/_shared/chunk-TIURHWID.js", "/build/_shared/chunk-FKWJBNZD.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-C43N5UMT.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/report-excel": { id: "routes/report-excel", parentId: "root", path: "report-excel", index: void 0, caseSensitive: void 0, module: "/build/routes/report-excel-X3MFTYG3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "0424b830", hmr: { runtime: "/build/_shared/chunk-GE3GTWYK.js", timestamp: 1705423548729 }, url: "/build/manifest-0424B830.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_app.laporan-pembelian": {
    id: "routes/_app.laporan-pembelian",
    parentId: "routes/_app",
    path: "laporan-pembelian",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/_app.laporan-penjualan": {
    id: "routes/_app.laporan-penjualan",
    parentId: "routes/_app",
    path: "laporan-penjualan",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports2
  },
  "routes/_app.pembelian.tambah": {
    id: "routes/_app.pembelian.tambah",
    parentId: "routes/_app.pembelian",
    path: "tambah",
    index: void 0,
    caseSensitive: void 0,
    module: app_pembelian_exports
  },
  "routes/_app.penjualan.tambah": {
    id: "routes/_app.penjualan.tambah",
    parentId: "routes/_app.penjualan",
    path: "tambah",
    index: void 0,
    caseSensitive: void 0,
    module: app_penjualan_exports
  },
  "routes/_app.pengguna.tambah": {
    id: "routes/_app.pengguna.tambah",
    parentId: "routes/_app.pengguna",
    path: "tambah",
    index: void 0,
    caseSensitive: void 0,
    module: app_pengguna_exports
  },
  "routes/_app.supplier.tambah": {
    id: "routes/_app.supplier.tambah",
    parentId: "routes/_app.supplier",
    path: "tambah",
    index: void 0,
    caseSensitive: void 0,
    module: app_supplier_exports
  },
  "routes/_app.pembelian.$id": {
    id: "routes/_app.pembelian.$id",
    parentId: "routes/_app.pembelian",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: app_pembelian_exports2
  },
  "routes/_app.penjualan.$id": {
    id: "routes/_app.penjualan.$id",
    parentId: "routes/_app.penjualan",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: app_penjualan_exports2
  },
  "routes/_app.satuan.tambah": {
    id: "routes/_app.satuan.tambah",
    parentId: "routes/_app.satuan",
    path: "tambah",
    index: void 0,
    caseSensitive: void 0,
    module: app_satuan_exports
  },
  "routes/_app.laporan-obat": {
    id: "routes/_app.laporan-obat",
    parentId: "routes/_app",
    path: "laporan-obat",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports3
  },
  "routes/_app.pengguna.$id": {
    id: "routes/_app.pengguna.$id",
    parentId: "routes/_app.pengguna",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: app_pengguna_exports2
  },
  "routes/_app.supplier.$id": {
    id: "routes/_app.supplier.$id",
    parentId: "routes/_app.supplier",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: app_supplier_exports2
  },
  "routes/_app.obat.tambah": {
    id: "routes/_app.obat.tambah",
    parentId: "routes/_app.obat",
    path: "tambah",
    index: void 0,
    caseSensitive: void 0,
    module: app_obat_exports
  },
  "routes/_app.satuan.$id": {
    id: "routes/_app.satuan.$id",
    parentId: "routes/_app.satuan",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: app_satuan_exports2
  },
  "routes/_app.pembelian": {
    id: "routes/_app.pembelian",
    parentId: "routes/_app",
    path: "pembelian",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports4
  },
  "routes/_app.penjualan": {
    id: "routes/_app.penjualan",
    parentId: "routes/_app",
    path: "penjualan",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports5
  },
  "routes/_app.obat.$id": {
    id: "routes/_app.obat.$id",
    parentId: "routes/_app.obat",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: app_obat_exports2
  },
  "routes/_app.pengguna": {
    id: "routes/_app.pengguna",
    parentId: "routes/_app",
    path: "pengguna",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports6
  },
  "routes/_app.supplier": {
    id: "routes/_app.supplier",
    parentId: "routes/_app",
    path: "supplier",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports7
  },
  "routes/report-excel": {
    id: "routes/report-excel",
    parentId: "root",
    path: "report-excel",
    index: void 0,
    caseSensitive: void 0,
    module: report_excel_exports
  },
  "routes/_app._index": {
    id: "routes/_app._index",
    parentId: "routes/_app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_exports8
  },
  "routes/_app.satuan": {
    id: "routes/_app.satuan",
    parentId: "routes/_app",
    path: "satuan",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports9
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "routes/_auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/_app.obat": {
    id: "routes/_app.obat",
    parentId: "routes/_app",
    path: "obat",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports10
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/_app": {
    id: "routes/_app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
