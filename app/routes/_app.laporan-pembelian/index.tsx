import z from "zod";
import CustomTable from "~/presentation/components/Table/Table";
import InputDateRange from "~/presentation/components/Input/InputDateRange";
import ButtonDownload from "~/presentation/components/Button/ButtonDownload";
import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { prepareSearch } from "~/utils/_helper.server";
import { findAllPembelian } from "~/services/pembelian.server";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { Outlet } from "@remix-run/react";
import { Group, Table } from "@mantine/core";
import { rupiah } from "~/utils/_helper";
import { useDateRangeParamsInvalid } from "~/hooks/useDateRangeParamsCheck";
import { requireUserSession } from "~/services/login.server";

export const meta: MetaFunction = () => {
	return [{ title: "Laporan Pembelian" }];
};

export default function LaporanPembelian() {
	const loader = useTypedLoaderData<LoaderType>();
	const { errorElement, start, end } = useDateRangeParamsInvalid();
	if (errorElement) return errorElement;

	return (
		<>
			<Outlet />
			<main>
				<Group>
					<InputDateRange my="sm" />
					<ButtonDownload
						url={`/report-excel?data=pembelian&start=${start}&end=${end}`}
					/>
				</Group>
				<CustomTable
					mt="sm"
					totalPagination={loader?.data?.pagination.pageCount || 0}
					header={[
						"No Faktur",
						"Obat",
						"Supplier",
						"Tanggal",
						"Kuantitas",
						"Total",
					]}
				>
					{loader?.data?.data?.map((data) => (
						<Table.Tr key={data.id}>
							<Table.Td>{data.invoice}</Table.Td>
							<Table.Td>{data.medicineName}</Table.Td>
							<Table.Td>{data.supplierName}</Table.Td>
							<Table.Td>{data.date.toISOString().split("T")[0]}</Table.Td>
							<Table.Td>{data.quantity}</Table.Td>
							<Table.Td>{rupiah(data.total as any)}</Table.Td>
						</Table.Tr>
					))}
				</CustomTable>
			</main>
		</>
	);
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "HEAD_WH");

	const { page, queryString: search, start, end } = prepareSearch(request.url);
	const stringToDate = z.coerce.date();
	if (
		!stringToDate.safeParse(start).success ||
		!stringToDate.safeParse(end).success
	) {
		return typedjson({ data: null, message: "Invalid date" }, { status: 400 });
	}
	const now = new Date();
	const startDate = start ? new Date(start) : now;
	const endDate = end ? new Date(end) : now;

	const data = await findAllPembelian({
		page,
		search,
		start: startDate.toLocaleDateString("en-CA"),
		end: endDate.toLocaleDateString("en-CA"),
	});

	return typedjson(data);
};

type LoaderType = typeof loader;
