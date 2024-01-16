import exceljs from "exceljs";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "~/utils/prisma.server";
import { errorMessage } from "~/_helper/constant";
import type { QueryFindAllDto } from "./global-dto/queryFindAll";

export const createPenjualanDto = zfd.formData({
	medicineId: zfd.numeric(z.coerce.number()),
	quantity: zfd.numeric(z.coerce.number().min(0)),
	total: zfd.numeric(z.coerce.number().positive()),
	date: zfd.text(z.coerce.date()),
});

export type CreatePenjualanDto = z.infer<typeof createPenjualanDto>;

export const createPenjualan = async (
	createPembelianDto: CreatePenjualanDto
) => {
	try {
		const { medicineId, date, quantity } = createPembelianDto;
		const med = await prisma.medicine.findUnique({
			where: { id: +medicineId, isDeleted: 0 },
		});
		if (!med)
			return {
				data: null,
				message: `Obat dengan id ${medicineId} tidak terdaftar`,
				status: 404,
			};
		if (!med.stock)
			return {
				data: null,
				message: `Obat ${med.name} kehabisan stock`,
				status: 400,
			};

		const timestamp = Math.floor(new Date().getTime() / 1000.0);
		const [data] = await prisma.$transaction([
			prisma.sale.create({
				data: {
					...createPembelianDto,
					date: new Date(date),
					medicineName: med.name,
					invoice: `${timestamp}`,
				},
			}),
			prisma.medicine.update({
				data: { stock: med.stock - quantity },
				where: { id: medicineId },
			}),
		]);

		return { data, message: "Berhasil tambah penjualan", status: 201 };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const deletePenjualan = async (id: number) => {
	try {
		const sale = await prisma.sale.findUnique({
			where: { id },
		});
		if (!sale)
			return {
				data: null,
				message: `Penjualan dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		const medicine = await prisma.medicine.findUnique({
			where: { id: sale.medicineId },
		});
		const [data] = await prisma.$transaction([
			prisma.sale.delete({
				where: { id },
			}),
			prisma.medicine.update({
				data: { stock: medicine!.stock + sale.quantity },
				where: { id: sale.medicineId },
			}),
		]);

		return { data, message: "Berhasil hapus penjualan", status: 200 };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const exportPenjualan = async (query: QueryFindAllDto) => {
	try {
		const { start = new Date(), end = new Date() } = query;
		const data = await prisma.sale.findMany({
			where: { date: { gte: new Date(start), lte: new Date(end) } },
		});

		const sales = data.map((sale) => ({
			...sale,
			date: sale.date.toLocaleDateString("en-CA"),
			total: parseFloat(sale.total as any),
		}));
		const wb = new exceljs.Workbook();
		const sheet = wb.addWorksheet("Penjualan");
		const columns: { key: keyof (typeof data)[number]; header: string }[] = [
			{ key: "invoice", header: "No Nota" },
			{ key: "medicineName", header: "Obat" },
			{ key: "date", header: "Tanggal" },
			{ key: "quantity", header: "Kuantitas" },
			{ key: "total", header: "Total" },
		];
		sheet.columns = columns;
		sheet.addRows(sales);

		sheet.getRow(1).eachCell((cell) => {
			const c = cell;
			c.font = { bold: true };
		});

		sheet.columns.forEach((column) => {
			let maxLength = 0;
			column?.eachCell!({ includeEmpty: true }, (cell) => {
				const columnLength = cell.value ? cell.value.toString().length : 10;
				if (columnLength > maxLength) {
					maxLength = columnLength;
				}
			});
			const padding = 2;
			column.width = maxLength < 10 ? 10 : maxLength + padding;
		});

		const buffer = await wb.xlsx.writeBuffer();

		return buffer;
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const findAllPenjualan = async (query: QueryFindAllDto) => {
	const { page = 0, search, start, end } = query;
	const limit = 10;

	try {
		const where: Record<string, unknown> = {};
		if (search) {
			where.invoice = {
				startsWith: `%${search.toUpperCase()}`,
			};
		}
		if (start && end) {
			where.date = {
				gte: new Date(start),
				lte: new Date(end),
			};
		}

		const [sales, totalCount] = await prisma.$transaction([
			prisma.sale.findMany({ where, skip: page * limit, take: limit }),
			prisma.sale.count({ where }),
		]);
		const pageCount = Math.ceil(totalCount / limit);
		if (!sales.length && query?.search)
			return {
				data: null,
				message: "Data yang kamu cari tidak tersedia",
				status: 404,
			};

		const data = sales.map((sale) => ({
			...sale,
			total: parseFloat(sale.total as any),
		}));

		return {
			data: { data, pagination: { totalCount, page, pageCount } },
			status: 200,
		};
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};
