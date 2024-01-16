import { z } from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "~/utils/prisma.server";
import { errorMessage } from "~/_helper/constant";
import type { QueryFindAllDto } from "./global-dto/queryFindAll";
import exceljs from "exceljs";

export const createObatDto = zfd.formData({
	code: zfd.text(z.string().toUpperCase()),
	name: zfd.text(z.string().toUpperCase()),
	stock: zfd.numeric(z.coerce.number().min(0)),
	buyPrice: zfd.numeric(z.coerce.number().positive()),
	sellPrice: zfd.numeric(z.coerce.number().positive()),
	unitId: zfd.numeric(z.coerce.number().positive()),
});

export type CreateObatDto = z.infer<typeof createObatDto>;

export const updateObatDto = zfd.formData({
	code: zfd.text(z.string().toUpperCase()).optional(),
	name: zfd.text(z.string().toUpperCase()).optional(),
	buyPrice: zfd.numeric(z.coerce.number().positive()).optional(),
	sellPrice: zfd.numeric(z.coerce.number().positive()).optional(),
	unitId: zfd.numeric(z.coerce.number().positive()).optional(),
});

export type UpdateObatDto = z.infer<typeof updateObatDto>;

export const createObat = async (createDto: CreateObatDto) => {
	try {
		const { code, unitId } = createDto;

		const unit = await prisma.unit.findUnique({
			where: { id: unitId },
		});
		if (!unit)
			return { data: null, message: "Satuan tidak tersedia", status: 404 };

		const exist = await prisma.medicine.findUnique({
			where: { code },
		});
		if (exist)
			return { data: null, message: "Kode obat telah terdaftar", status: 400 };

		const data = await prisma.medicine.create({
			data: {
				...createDto,
				unitName: unit.name,
			},
		});
		return { data, status: 201, message: "Berhasil tambah obat" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const findAllObat = async (query?: QueryFindAllDto) => {
	const page = query?.page || 0;
	const limit = 10;

	try {
		const where: { isDeleted: number; OR?: any[] } = { isDeleted: 0 };
		if (query?.search) {
			where.OR = [
				{
					name: {
						startsWith: `%${query.search.toUpperCase()}`,
					},
				},
				{
					code: {
						startsWith: `%${query.search.toUpperCase()}`,
					},
				},
			];
		}
		const [medicine, totalCount] = await prisma.$transaction([
			prisma.medicine.findMany({ where, skip: page * limit, take: limit }),
			prisma.medicine.count({ where }),
		]);
		const data = medicine.map((med) => ({
			...med,
			buyPrice: parseFloat(med.buyPrice as any),
			sellPrice: parseFloat(med.sellPrice as any),
		}));
		const pageCount = Math.ceil(totalCount / limit);

		if (!data.length && query?.search)
			return {
				data: null,
				message: "Data yang kamu cari tidak tersedia",
				status: 404,
			};

		return {
			data: { data, pagination: { totalCount, page, pageCount } },
			status: 200,
		};
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const findOneObat = async (id: number) => {
	try {
		const data = await prisma.medicine.findUnique({
			where: { id, isDeleted: 0 },
		});
		if (!data)
			return {
				data: null,
				message: `Obat dengan id ${id} tidak terdaftar`,
				status: 404,
			};
		const buyPrice = parseFloat(data.buyPrice as any);
		const sellPrice = parseFloat(data.sellPrice as any);

		return {
			data: { ...data, buyPrice, sellPrice },
			status: 200,
			message: "Sukses",
		};
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const deleteObat = async (id: number) => {
	try {
		const isExist = await prisma.medicine.findUnique({ where: { id } });
		if (!isExist)
			return {
				data: null,
				message: `Obat dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		const data = await prisma.medicine.update({
			data: { isDeleted: 1 },
			where: { id },
		});
		return { data, status: 200, message: "Berhasil hapus obat" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const updateObat = async (updateDto: UpdateObatDto, id: number) => {
	try {
		const { unitId, code } = updateDto;

		const exist = await prisma.medicine.findUnique({
			where: { id },
		});
		if (!exist)
			return {
				data: null,
				message: `Obat dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		let unitName;
		if (unitId) {
			const unit = await prisma.unit.findUnique({
				where: { id: unitId },
			});
			if (!unit)
				return { data: null, message: "Satuan tidak tersedia", status: 404 };
			unitName = unit.name;
		}

		if (code) {
			const existCode = await prisma.medicine.findUnique({
				where: { code },
			});
			if (existCode && existCode.id !== id)
				return {
					data: null,
					message: `Kode obat ${existCode.code} sudah terdaftar`,
					status: 400,
				};
		}

		const data = await prisma.medicine.update({
			data: {
				...updateDto,
				unitName,
				code,
			},
			where: { id },
		});
		return { data, status: 200, message: "Berhasil rubah obat" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const exportObat = async () => {
	try {
		let data = await prisma.medicine.findMany({
			where: { isDeleted: 0 },
		});
		const medicine = data.map((med) => ({
			...med,
			sellPrice: parseFloat(med.sellPrice as any),
			buyPrice: parseFloat(med.buyPrice as any),
		}));
		const wb = new exceljs.Workbook();
		const sheet = wb.addWorksheet("Obat");
		const columns: { key: keyof (typeof medicine)[number]; header: string }[] =
			[
				{ key: "code", header: "Kode" },
				{ key: "name", header: "Obat" },
				{ key: "stock", header: "Stok" },
				{ key: "sellPrice", header: "Harga Jual" },
				{ key: "buyPrice", header: "Harga Beli" },
				{ key: "unitName", header: "Satuan" },
			];
		sheet.columns = columns;
		sheet.addRows(medicine);

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
