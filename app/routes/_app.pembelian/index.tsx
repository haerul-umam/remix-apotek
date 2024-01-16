import CustomTable from "~/presentation/components/Table/Table";
import ButtonAdd from "~/presentation/components/Button/ButtonAdd";
import ActionButtons from "~/presentation/components/Button/ActionButtons";
import InputSearch from "~/presentation/components/Input/InputSearch";
import { Outlet, useFetcher } from "@remix-run/react";
import { prepareSearch } from "~/utils/_helper.server";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { Group, Table } from "@mantine/core";
import { rupiah } from "~/utils/_helper";
import { findAllPembelian } from "~/services/pembelian.server";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export const meta: MetaFunction = () => {
	return [{ title: "Data Pembelian" }, { content: "Master pembelian" }];
};

export default function PembelianPage() {
	const loader = useTypedLoaderData<LoaderType>();
	const fetcher = useFetcher();

	const onDelete = (id: any) =>
		fetcher.submit(null, { action: `/pembelian/${id}`, method: "DELETE" });

	return (
		<>
			<Outlet />
			<main>
				<Group justify="space-between">
					<ButtonAdd label="Tambah Pembelian" goTo="tambah" />
					<InputSearch mb="sm" />
				</Group>
				<CustomTable
					totalPagination={loader?.data?.pagination.pageCount || 0}
					header={[
						"No Faktur",
						"Obat",
						"Supplier",
						"Tanggal",
						"Kuantitas",
						"Total",
					]}
					renderActionHeader
				>
					{loader?.data?.data?.map((data) => (
						<Table.Tr key={data.id}>
							<Table.Td>{data.invoice}</Table.Td>
							<Table.Td>{data.medicineName}</Table.Td>
							<Table.Td>{data.supplierName}</Table.Td>
							<Table.Td>{data.date.toISOString().split("T")[0]}</Table.Td>
							<Table.Td>{data.quantity}</Table.Td>
							<Table.Td>{rupiah(data.total as any)}</Table.Td>
							<Table.Td>
								<ActionButtons onDelete={() => onDelete(data.id)} />
							</Table.Td>
						</Table.Tr>
					))}
				</CustomTable>
			</main>
		</>
	);
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const { page, queryString: search } = prepareSearch(request.url);
	const data = await findAllPembelian({ page, search });

	return typedjson(data);
};

type LoaderType = typeof loader;
