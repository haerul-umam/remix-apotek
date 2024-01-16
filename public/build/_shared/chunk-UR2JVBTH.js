import {
  createHotContext
} from "/build/_shared/chunk-GE3GTWYK.js";

// app/utils/_helper.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/_helper.ts"
  );
  import.meta.hot.lastModified = "1704561063456.705";
}
function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}
function formatDate(date) {
  return date.toLocaleDateString("en-CA");
}

export {
  rupiah,
  formatDate
};
//# sourceMappingURL=/build/_shared/chunk-UR2JVBTH.js.map
