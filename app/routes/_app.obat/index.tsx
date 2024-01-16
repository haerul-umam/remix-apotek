import CustomTable from "~/presentation/components/Table/Table";
import ButtonAdd from "~/presentation/components/Button/ButtonAdd";
import ActionButtons from "~/presentation/components/Button/ActionButtons";
import InputSearch from "~/presentation/components/Input/InputSearch";
import { Outlet, useFetcher, useNavigate } from "@remix-run/react";
import { findAllObat } from "~/services/obat.server";
import { prepareSearch } from "~/utils/_helper.server";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { Group, Table } from "@mantine/core";
import { rupiah } from "~/utils/_helper";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export const meta: MetaFunction = () => {
	return [{ title: "Data Obat" }, { content: "Master obat" }];
};

export default function ObatPage() {
	const loader = useTypedLoaderData<LoaderType>();
	const navigate = useNavigate();
	const fetcher = useFetcher();

	const onUpdate = (id: any) => navigate(`/obat/${id}`);
	const onDelete = (id: any) =>
		fetcher.submit(null, { action: `/obat/${id}`, method: "DELETE" });

	return (
		<>
			<Outlet />
			<main>
				<Group justify="space-between">
					<ButtonAdd label="Tambah Obat" goTo="tambah" />
					<InputSearch mb="sm" />
				</Group>
				<CustomTable
					totalPagination={loader?.data?.pagination.pageCount || 0}
					header={["Kode", "Obat", "Beli", "Jual", "Stok"]}
					renderActionHeader
				>
					{loader?.data?.data?.map((data) => (
						<Table.Tr key={data.id}>
							<Table.Td>{data.code}</Table.Td>
							<Table.Td>{data.name}</Table.Td>
							<Table.Td>{rupiah(data.buyPrice)}</Table.Td>
							<Table.Td>{rupiah(data.sellPrice)}</Table.Td>
							<Table.Td>{data.stock}</Table.Td>
							<Table.Td>
								<ActionButtons
									onUpdate={() => onUpdate(data.id)}
									onDelete={() => onDelete(data.id)}
								/>
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

	const { page, queryString } = prepareSearch(request.url);
	const data = await findAllObat({ page, search: queryString });

	return typedjson(data);
};

type LoaderType = typeof loader;
