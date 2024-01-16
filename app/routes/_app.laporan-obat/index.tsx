import CustomTable from "~/presentation/components/Table/Table";
import ButtonDownload from "~/presentation/components/Button/ButtonDownload";
import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { prepareSearch } from "~/utils/_helper.server";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { Outlet } from "@remix-run/react";
import { Group, Table } from "@mantine/core";
import { rupiah } from "~/utils/_helper";
import { findAllObat } from "~/services/obat.server";
import InputSearch from "~/presentation/components/Input/InputSearch";
import { requireUserSession } from "~/services/login.server";

export const meta: MetaFunction = () => {
	return [{ title: "Laporan Obat" }];
};

export default function LaporanObat() {
	const loader = useTypedLoaderData<LoaderType>();

	return (
		<>
			<Outlet />
			<main>
				<Group>
					<InputSearch />
					<ButtonDownload url={`/report-excel?data=obat`} />
				</Group>
				<CustomTable
					mt="sm"
					totalPagination={loader?.data?.pagination.pageCount || 0}
					header={["Kode", "Obat", "Beli", "Jual", "Stok"]}
				>
					{loader?.data?.data?.map((data) => (
						<Table.Tr key={data.id}>
							<Table.Td>{data.code}</Table.Td>
							<Table.Td>{data.name}</Table.Td>
							<Table.Td>{rupiah(data.buyPrice as any)}</Table.Td>
							<Table.Td>{rupiah(data.sellPrice as any)}</Table.Td>
							<Table.Td>{data.stock}</Table.Td>
						</Table.Tr>
					))}
				</CustomTable>
			</main>
		</>
	);
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "HEAD_WH");

	const { page, queryString: search } = prepareSearch(request.url);

	const data = await findAllObat({
		page,
		search,
	});

	return typedjson(data);
};

type LoaderType = typeof loader;
