import { z } from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "~/utils/prisma.server";
import { errorMessage } from "~/_helper/constant";
import type { QueryFindAllDto } from "./global-dto/queryFindAll";
import exceljs from "exceljs";

export const createPembelianDto = zfd.formData({
	invoice: zfd.text(z.string().toUpperCase()),
	medicineId: zfd.numeric(z.coerce.number()),
	supplierId: zfd.numeric(z.coerce.number()),
	quantity: zfd.numeric(z.coerce.number().min(0)),
	total: zfd.numeric(z.coerce.number().positive()),
	date: zfd.text(z.coerce.date()),
});

export type CreatePembelianDto = z.infer<typeof createPembelianDto>;

export const createPembelian = async (
	createPembelianDto: CreatePembelianDto
) => {
	try {
		const { medicineId, supplierId, date, quantity, invoice } =
			createPembelianDto;

		const invoiceExist = await prisma.purchase.findFirst({
			where: { invoice },
		});
		if (invoiceExist)
			return {
				data: null,
				message: "No faktur sudah terdaftar",
				status: 400,
			};
		const med = await prisma.medicine.findUnique({
			where: { id: +medicineId, isDeleted: 0 },
		});
		if (!med)
			return {
				data: null,
				message: `Obat dengan id ${medicineId} tidak terdaftar`,
				status: 404,
			};
		const supplier = await prisma.supplier.findUnique({
			where: { id: supplierId, isDeleted: 0 },
		});
		if (!supplier)
			return {
				data: null,
				message: `Supplier dengan id ${supplierId} tidak terdaftar`,
				status: 404,
			};

		const [data] = await prisma.$transaction([
			prisma.purchase.create({
				data: {
					...createPembelianDto,
					date: new Date(date),
					supplierName: supplier.name,
					medicineName: med.name,
				},
			}),
			prisma.medicine.update({
				data: { stock: med.stock + quantity },
				where: { id: medicineId },
			}),
		]);

		return { data, message: "Berhasil tambah pembelian", status: 201 };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const deletePembelian = async (id: number) => {
	try {
		const purchase = await prisma.purchase.findUnique({
			where: { id },
		});
		if (!purchase)
			return {
				data: null,
				message: `Pembelian dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		const medicine = await prisma.medicine.findUnique({
			where: { id: purchase.medicineId },
		});
		const [data] = await prisma.$transaction([
			prisma.purchase.delete({
				where: { id },
			}),
			prisma.medicine.update({
				data: { stock: medicine!.stock - purchase.quantity },
				where: { id: purchase.medicineId },
			}),
		]);

		return { data, message: "Berhasil hapus pembelian", status: 200 };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const findAllPembelian = async (query: QueryFindAllDto) => {
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

		const [purchases, totalCount] = await prisma.$transaction([
			prisma.purchase.findMany({ where, skip: page * limit, take: limit }),
			prisma.purchase.count({ where }),
		]);
		const pageCount = Math.ceil(totalCount / limit);
		if (!purchases.length && query?.search)
			return {
				data: null,
				message: "Data yang kamu cari tidak tersedia",
				status: 404,
			};

		const data = purchases.map((purchase) => ({
			...purchase,
			total: parseFloat(purchase.total as any),
		}));

		return {
			data: { data, pagination: { totalCount, page, pageCount } },
			status: 200,
		};
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const exportPembelian = async (query: QueryFindAllDto) => {
	try {
		const { start = new Date(), end = new Date() } = query;
		const data = await prisma.purchase.findMany({
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
			{ key: "supplierName", header: "Supplier" },
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
