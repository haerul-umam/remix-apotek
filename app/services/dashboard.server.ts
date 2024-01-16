import { prisma } from "~/utils/prisma.server";
import { errorMessage } from "~/_helper/constant";

interface Raw {
	month: number;
	total: number;
}

export const getDashboardData = async () => {
	const labels = {
		Januari: 1,
		Februari: 2,
		Maret: 3,
		April: 4,
		Mei: 5,
		Juni: 6,
		Juli: 7,
		Agustus: 8,
		September: 9,
		Oktober: 10,
		November: 11,
		Desember: 12,
	};
	try {
		const year = new Date().getFullYear();
		const start = new Date(year, 0, 1).toLocaleDateString("en-CA");
		const end = new Date(year, 11, 31).toLocaleDateString("en-CA");

		const countMedicine = await prisma.medicine.count({
			where: { isDeleted: 0 },
		});
		const {
			_sum: { total: sumSalles },
		} = await prisma.sale.aggregate({
			_sum: { total: true },
			where: { date: { gte: new Date(start), lte: new Date(end) } },
		});
		const {
			_sum: { total: sumPurchase },
		} = await prisma.purchase.aggregate({
			_sum: { total: true },
			where: { date: { gte: new Date(start), lte: new Date(end) } },
		});
		const salesRaw: Raw[] = await prisma.$queryRaw`
		SELECT
    	EXTRACT(MONTH FROM date) AS month,
    	SUM(total) AS total
		FROM sales
		WHERE EXTRACT(YEAR FROM DATE) = ${year}
		GROUP BY EXTRACT(MONTH FROM date)
		ORDER BY EXTRACT(MONTH FROM date)`;

		const datasheetSales = Array.from(
			{ length: 12 },
			(_, index) =>
				salesRaw.find((item) => item.month === index + 1)?.total || 0
		);
		const purchaseRaw: Raw[] = await prisma.$queryRaw`
		SELECT
    	EXTRACT(MONTH FROM date) AS month,
    	SUM(total) AS total
		FROM purchase
		WHERE EXTRACT(YEAR FROM DATE) = ${year}
		GROUP BY EXTRACT(MONTH FROM date)
		ORDER BY EXTRACT(MONTH FROM date)`;

		const datasheetPurchase = Array.from(
			{ length: 12 },
			(_, index) =>
				purchaseRaw.find((item) => item.month === index + 1)?.total || 0
		);

		return {
			data: {
				countMedicine,
				sumSalles,
				sumPurchase,
				datasheetSales,
				datasheetPurchase,
			},
			message: "Sukses",
			status: 200,
		};
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};
