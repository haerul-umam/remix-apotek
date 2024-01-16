import z from "zod";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { prepareSearch } from "~/utils/_helper.server";
import { typedjson } from "remix-typedjson";
import { exportPenjualan } from "~/services/penjualan.server";
import { exportObat } from "~/services/obat.server";
import { requireUserSession } from "~/services/login.server";
import { exportPembelian } from "~/services/pembelian.server";

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserSession(request, "HEAD_WH");

	const { start, end } = prepareSearch(request.url);
	const stringToDate = z.coerce.date();
	if (
		!stringToDate.safeParse(start).success ||
		!stringToDate.safeParse(end).success
	) {
		return typedjson({ data: null, message: "Invalid date" }, { status: 400 });
	}
	const now = new Date();
	const startDate = (start ? new Date(start) : now).toLocaleDateString("en-CA");
	const endDate = (end ? new Date(end) : now).toLocaleDateString("en-CA");
	const url = new URL(request.url);
	const reportType = url.searchParams.get("data");
	let data;
	switch (reportType) {
		case "penjualan":
			data = await exportPenjualan({
				start: startDate,
				end: endDate,
			});
			break;

		case "obat":
			data = await exportObat();
			break;

		case "pembelian":
			data = await exportPembelian({
				start: startDate,
				end: endDate,
			});
			break;

		default:
			break;
	}

	if (data) {
		return new Response(data, {
			headers: {
				"Content-Type":
					"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			},
		});
	}
	return new Response("Not found", { status: 404 });
}
