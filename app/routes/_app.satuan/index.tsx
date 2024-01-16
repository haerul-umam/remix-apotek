import ButtonAdd from "~/presentation/components/Button/ButtonAdd";
import CustomTable from "~/presentation/components/Table/Table";
import ActionButtons from "~/presentation/components/Button/ActionButtons";
import InputSearch from "~/presentation/components/Input/InputSearch";
import { Outlet, useFetcher, useNavigate } from "@remix-run/react";
import { findAllSatuan } from "~/services/satuan.server";
import { Group, Table } from "@mantine/core";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { prepareSearch } from "~/utils/_helper.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export default function SatuanPage() {
	const loader = useTypedLoaderData<LoaderType>();
	const navigate = useNavigate();
	const fetcher = useFetcher();

	const onUpdate = (id: any) => navigate(`/satuan/${id}`);
	const onDelete = (id: any) =>
		fetcher.submit(null, { action: `/satuan/${id}`, method: "DELETE" });

	return (
		<>
			<Outlet />
			<main>
				<Group justify="space-between">
					<ButtonAdd label="Tambah Satuan" goTo="tambah" />
					<InputSearch mb="sm" />
				</Group>
				<CustomTable
					totalPagination={loader?.data?.pagination.pageCount || 0}
					header={["Nama"]}
					renderActionHeader
				>
					{loader?.data?.data.map((data) => (
						<Table.Tr key={data.id}>
							<Table.Td>{data.name}</Table.Td>
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

export const meta = () => {
	return [{ title: "Data satuan" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const { page, queryString } = prepareSearch(request.url);
	const data = await findAllSatuan({ page, search: queryString });

	return typedjson(data);
};

type LoaderType = typeof loader;
