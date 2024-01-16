import {
  require_jsx_runtime
} from "/build/_shared/chunk-WQFJ2CRD.js";
import {
  useActionData,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-3GYVE5CM.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// node_modules/remix-typedjson/dist/esm/remix.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/remix-typedjson/dist/esm/typedjson.js
var customTypeMap = /* @__PURE__ */ new Map();
var splitKey = (key) => {
  const keys = [];
  const parts = key.split(".");
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith("[")) {
      let k = parts[i].substring(1);
      let j = i + 1;
      while (!parts[j].endsWith("]")) {
        k += `.${parts[j]}`;
        j++;
      }
      k += `.${parts[j].slice(0, -1)}`;
      keys.push(k);
      i = j;
    } else {
      keys.push(parts[i]);
    }
  }
  return keys;
};
function applyMeta(data, meta) {
  const customTypeMapValues = Array.from(customTypeMap.values());
  for (const key of Object.keys(meta)) {
    const keys = splitKey(key);
    applyConversion(data, keys, meta[key]);
  }
  return data;
  function applyConversion(data2, keys, type, depth = 0) {
    const key = keys[depth];
    if (depth < keys.length - 1) {
      applyConversion(data2[key], keys, type, depth + 1);
      return;
    }
    const value = data2[key];
    switch (type) {
      case "date":
        data2[key] = new Date(value);
        break;
      case "set":
        data2[key] = new Set(value);
        break;
      case "map":
        data2[key] = new Map(Object.entries(value));
        break;
      case "regexp":
        const match = /^\/(.*)\/([dgimsuy]*)$/.exec(value);
        if (match) {
          data2[key] = new RegExp(match[1], match[2]);
        } else {
          throw new Error(`Invalid regexp: ${value}`);
        }
        break;
      case "bigint":
        data2[key] = BigInt(value);
        break;
      case "undefined":
        data2[key] = void 0;
        break;
      case "infinity":
        data2[key] = Number.POSITIVE_INFINITY;
        break;
      case "-infinity":
        data2[key] = Number.NEGATIVE_INFINITY;
        break;
      case "nan":
        data2[key] = NaN;
        break;
      case "error":
        const err = new Error(value.message);
        err.name = value.name;
        err.stack = value.stack;
        data2[key] = err;
        break;
      default:
        let customType = customTypeMap.get(type);
        if (customType) {
          data2[key] = customType.deserialize(value);
        }
    }
  }
}

// node_modules/remix-typedjson/dist/esm/remix.js
function useTypedLoaderData() {
  const data = useLoaderData();
  return deserializeRemix(data);
}
function useTypedActionData() {
  const data = useActionData();
  return deserializeRemix(data);
}
function useTypedFetcher(opts) {
  const fetcher = useFetcher(opts);
  if (fetcher.data) {
    const newData = deserializeRemix(fetcher.data);
    fetcher.data = newData ?? void 0;
  }
  return fetcher;
}
function deserializeRemix(data) {
  if (!data)
    return data;
  if (data.$$obj) {
    return data.$$meta ? applyMeta(data.$$obj, data.$$meta) : data.$$obj;
  } else if (data.$$meta) {
    const meta = data.$$meta;
    delete data.$$meta;
    return applyMeta(data, meta);
  }
  return data;
}

export {
  useTypedLoaderData,
  useTypedActionData,
  useTypedFetcher
};
//# sourceMappingURL=/build/_shared/chunk-LIHYYZCT.js.map
