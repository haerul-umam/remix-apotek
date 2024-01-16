import { Paper, SimpleGrid, Text } from "@mantine/core";
import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { IconCash, IconCashOff, IconPill } from "@tabler/icons-react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getDashboardData } from "~/services/dashboard.server";
import { requireUserSession } from "~/services/login.server";
import { rupiah } from "~/utils/_helper";
import CardDashboard from "~/presentation/components/Card/CardDashboard";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const labels = [
	"Januari",
	"Februari",
	"Maret",
	"April",
	"Mei",
	"Juni",
	"Juli",
	"Agustus",
	"September",
	"Oktober",
	"November",
	"Desember",
];

const year = new Date().getFullYear().toString();

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: year,
		},
	},
	maintainAspectRation: true,
};

const color = {
	pembelian: "rgba(53, 162, 235, 0.5)",
	penjualan: "rgba(255, 99, 132, 0.5)",
};

export default function Dashboard() {
	const {
		countMedicine,
		sumPurchase,
		sumSalles,
		datasheetPurchase,
		datasheetSales,
	} = useLoaderData<Loader>();
	const data = {
		labels,
		datasets: [
			{
				label: "Penjualan",
				data: datasheetSales,
				backgroundColor: color.penjualan,
			},
			{
				label: "Pembelian",
				data: datasheetPurchase,
				backgroundColor: color.pembelian,
			},
		],
	};
	return (
		<>
			<Text style={{ textAlign: "center" }} c="gray" mb="xs">
				{year}
			</Text>
			<SimpleGrid cols={3}>
				<CardDashboard
					icon={<IconPill color="blue" size={50} />}
					title="Obat"
					value={countMedicine}
				/>
				<CardDashboard
					icon={<IconCash color={color.penjualan} size={50} />}
					title="Penjualan"
					value={rupiah(sumSalles ? +sumSalles : 0)}
				/>
				<CardDashboard
					icon={<IconCashOff color={color.pembelian} size={50} />}
					title="Pembelian"
					value={rupiah(sumPurchase ? +sumPurchase : 0)}
				/>
			</SimpleGrid>
			<Paper shadow="sm" p="sm" withBorder mt="md">
				<Bar options={options} data={data} height="70%" />
			</Paper>
		</>
	);
}

export const meta: MetaFunction = () => {
	return [{ title: "Dashboard" }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireUserSession(request);

	const data = await getDashboardData();
	return json(data.data, { status: data.status });
};

type Loader = typeof loader;
