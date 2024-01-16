import CustomTable from "~/presentation/components/Table/Table";
import ButtonAdd from "~/presentation/components/Button/ButtonAdd";
import ActionButtons from "~/presentation/components/Button/ActionButtons";
import InputSearch from "~/presentation/components/Input/InputSearch";
import { Outlet, useFetcher, useNavigate } from "@remix-run/react";
import { prepareSearch } from "~/utils/_helper.server";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { Badge, Group, Table } from "@mantine/core";
import { findAllUser } from "~/services/user.server";
import { requireUserSession } from "~/services/login.server";
import { Level } from "@prisma/client";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [{ title: "Data Pengguna" }, { content: "Master pengguna" }];
};

const type: Record<Level, string> = {
	ADMIN: "Admin",
	HEAD_WH: "Kepala Gudang",
	SUPER: "Super User",
};

export default function PenggunaPage() {
	const loader = useTypedLoaderData<LoaderType>();
	const navigate = useNavigate();
	const fetcher = useFetcher();

	const onUpdate = (id: any) => navigate(`/pengguna/${id}`);
	const onDelete = (id: any) =>
		fetcher.submit(null, { action: `/pengguna/${id}`, method: "DELETE" });

	return (
		<>
			<Outlet />
			<main>
				<Group justify="space-between">
					<ButtonAdd label="Tambah Pengguna" goTo="tambah" />
					<InputSearch mb="sm" />
				</Group>
				<CustomTable
					totalPagination={loader?.data?.pagination.pageCount || 0}
					header={["Nama", "Email", "HP", "Level", "Status"]}
					renderActionHeader
				>
					{loader?.data?.data?.map((data) => (
						<Table.Tr key={data.id}>
							<Table.Td>{data.fullName}</Table.Td>
							<Table.Td>{data.email}</Table.Td>
							<Table.Td>{data.hp}</Table.Td>
							<Table.Td>{type[data.level]}</Table.Td>
							<Table.Td>
								<Badge color={data.status ? "blue" : "red"}>
									{data.status ? "Aktif" : "Non Aktif"}
								</Badge>
							</Table.Td>
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
	const { level } = await requireUserSession(request, "HEAD_WH");

	const { page, queryString } = prepareSearch(request.url);
	const data = await findAllUser({ page, search: queryString }, level);

	return typedjson(data);
};

type LoaderType = typeof loader;
