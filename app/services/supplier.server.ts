import { z } from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "~/utils/prisma.server";
import type { QueryFindAllDto } from "./global-dto/queryFindAll";
import { errorMessage } from "~/_helper/constant";
import { phoneRegex } from "~/utils/constant";

export const createSupplierDto = zfd.formData({
	name: zfd.text(z.string().toUpperCase()),
	hp: zfd.text(z.string().regex(phoneRegex, "Invalid phone number")),
	address: zfd.text(z.string().optional()).optional(),
});

export type CreateSupplierDto = z.infer<typeof createSupplierDto>;

export const updateSupplierDto = zfd.formData({
	name: zfd.text(z.string().toUpperCase()).optional(),
	hp: zfd.text(z.string().regex(phoneRegex, "Invalid phone number")).optional(),
	address: zfd.text(z.string()).optional(),
});

export type UpdateSupplierDto = z.infer<typeof updateSupplierDto>;

export const findAllSupplier = async (query?: QueryFindAllDto) => {
	const page = query?.page || 0;
	const limit = 10;

	try {
		const where: { isDeleted: number; name?: any } = { isDeleted: 0 };
		if (query?.search) {
			where.name = {
				startsWith: `%${query.search.toUpperCase()}`,
			};
		}
		const [data, totalCount] = await prisma.$transaction([
			prisma.supplier.findMany({ where, skip: page * limit, take: limit }),
			prisma.supplier.count({ where }),
		]);
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

export const findOneSupplier = async (id: number) => {
	try {
		const data = await prisma.supplier.findUnique({
			where: { id, isDeleted: 0 },
		});
		if (!data)
			return {
				data: null,
				message: `Supplier dengan id ${id} tidak terdaftar`,
				status: 404,
			};
		return { data, status: 200, message: "Sukses" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const createSupllier = async (createDto: CreateSupplierDto) => {
	try {
		const { hp } = createDto;

		if (hp) {
			const exist = await prisma.supplier.findFirst({
				where: { hp },
			});
			if (exist) {
				return {
					data: null,
					message: `Supplier dengan hp ${hp} sudah terdaftar`,
					status: 400,
				};
			}
		}

		const data = await prisma.supplier.create({
			data: { ...createDto, hp },
		});
		return { data, status: 201, message: "Berhasil tambah supplier" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const updateSupplier = async (
	updateDto: UpdateSupplierDto,
	id: number
) => {
	try {
		const { hp } = updateDto;
		if (hp) {
			const exist = await prisma.supplier.findFirst({
				where: { hp },
			});
			if (exist && exist.id !== id)
				return {
					data: null,
					message: `Supplier dengan telpon ${hp} sudah terdaftar`,
					status: 400,
				};
		}

		const data = await prisma.supplier.update({
			data: { ...updateDto, hp },
			where: { id },
		});
		return { data, status: 200, message: "Berhasil ubah supplier" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const deleteSupplier = async (id: number) => {
	try {
		const isExist = await prisma.supplier.findUnique({ where: { id } });
		if (!isExist)
			return {
				data: null,
				message: `Supplier dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		const data = await prisma.supplier.update({
			data: { isDeleted: 1 },
			where: { id },
		});
		return { data, status: 200, message: "Berhasil hapus supplier" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};
