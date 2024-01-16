import ButtonAdd from "~/presentation/components/Button/ButtonAdd";
import CustomTable from "~/presentation/components/Table/Table";
import ActionButtons from "~/presentation/components/Button/ActionButtons";
import InputSearch from "~/presentation/components/Input/InputSearch";
import { Outlet, useFetcher, useNavigate } from "@remix-run/react";
import { Group, Table } from "@mantine/core";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { findAllSupplier } from "~/services/supplier.server";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export const meta: MetaFunction = () => {
	return [{ title: "Data supplier" }];
};

export default function SupplierPage() {
	const loader = useTypedLoaderData<LoaderType>();
	const navigate = useNavigate();
	const fetcher = useFetcher();

	const onUpdate = (id: any) => navigate(`/supplier/${id}`);
	const onDelete = (id: any) =>
		fetcher.submit(null, { action: `/supplier/${id}`, method: "DELETE" });

	return (
		<>
			<Outlet />
			<main>
				<Group justify="space-between">
					<ButtonAdd label="Tambah Supplier" goTo="tambah" />
					<InputSearch mb="sm" />
				</Group>
				<CustomTable
					totalPagination={loader?.data?.pagination.pageCount || 0}
					header={["Nama", "Telpon"]}
					renderActionHeader
				>
					{loader?.data?.data.map((data) => (
						<Table.Tr key={data.id}>
							<Table.Td>{data.name}</Table.Td>
							<Table.Td>{data.hp}</Table.Td>
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

	const searchParams = new URL(request.url).searchParams;
	const querySearch = searchParams.get("search") || "";
	const queryPage = +(searchParams.get("page") || 0);
	const page = queryPage > 0 ? queryPage - 1 : 0;

	const data = await findAllSupplier({ page: page, search: querySearch });
	return typedjson(data);
};

type LoaderType = typeof loader;
