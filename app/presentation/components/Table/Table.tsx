import React from "react";
import {
	Alert,
	Box,
	BoxComponentProps,
	LoadingOverlay,
	Pagination,
	Table,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { useNavigate, useNavigation, useSearchParams } from "@remix-run/react";
import { useTypedLoaderData } from "remix-typedjson";

interface ICustomTable extends BoxComponentProps {
	header: string[];
	rows?: Record<string, any>[];
	children?: React.ReactNode;
	totalPagination: number;
	renderActionHeader?: boolean;
}

export default function CustomTable({
	header,
	rows,
	children,
	totalPagination,
	renderActionHeader,
	...other
}: ICustomTable) {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { state } = useNavigation();
	const loader = useTypedLoaderData();

	const isLoading = state === "loading";
	const queryPage = +(searchParams.get("page") || 0);
	const page = queryPage > 0 ? queryPage : 1;
	const movePagination = (value: number) => navigate(`?page=${value}`);

	const Rows = rows
		? rows.map((element) => {
				const td = Object.values(element).map((data, idx) => (
					<Table.Td key={idx}>{data}</Table.Td>
				));
				return <Table.Tr key={JSON.stringify(element)}>{td}</Table.Tr>;
		  })
		: null;
	const Header = header.map((head) => <Table.Th key={head}>{head}</Table.Th>);

	if (
		!((Array.isArray(children) && children.length) || Rows) &&
		!totalPagination &&
		loader.status < 300
	) {
		return (
			<Alert
				variant="outline"
				color="blue"
				title="Data Tabel"
				icon={<IconInfoCircle />}
			>
				Data tidak ditemukan, silahkan tambahkan atau filter data.
			</Alert>
		);
	}

	return (
		<Box pos="relative" {...other}>
			<LoadingOverlay
				visible={isLoading}
				zIndex={100}
				overlayProps={{ radius: "sm", blur: 2 }}
			/>
			{loader.status > 300 ? (
				<Alert
					variant="light"
					color="blue"
					title="Data obat"
					icon={<IconInfoCircle />}
				>
					{loader?.message || "Gagal mendapatkan data"}
				</Alert>
			) : (
				<>
					<Table withTableBorder>
						<Table.Thead bg="cyan.6" c="#ffff">
							<Table.Tr>
								{Header}
								{renderActionHeader ? (
									<Table.Th style={{ textAlign: "center" }}>Aksi</Table.Th>
								) : null}
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>{children || Rows}</Table.Tbody>
					</Table>
					<Pagination
						value={+page}
						onChange={movePagination}
						total={totalPagination}
						size="sm"
						mt="sm"
						style={{
							justifyContent: "flex-end",
							display: "flex",
						}}
					/>
				</>
			)}
		</Box>
	);
}
