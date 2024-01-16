import { z } from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "~/utils/prisma.server";
import type { QueryFindAllDto } from "./global-dto/queryFindAll";
import { errorMessage } from "~/_helper/constant";

export const createSatuanDto = zfd.formData({
	name: zfd.text(z.string().toUpperCase()),
});

export type CreateSatuanDto = z.infer<typeof createSatuanDto>;

export const updateSatuanDto = zfd.formData({
	name: zfd.text(z.string().toUpperCase()).optional(),
});

export type UpdateSatuanDto = z.infer<typeof updateSatuanDto>;

export const findAllSatuan = async (query?: QueryFindAllDto) => {
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
			prisma.unit.findMany({ where, skip: page * limit, take: limit }),
			prisma.unit.count({ where }),
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

export const findOneSatuan = async (id: number) => {
	try {
		const data = await prisma.unit.findUnique({ where: { id, isDeleted: 0 } });
		if (!data)
			return {
				data: null,
				message: `Satuan dengan id ${id} tidak terdaftar`,
				status: 404,
			};
		return { data, status: 200, message: "Sukses" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const createSatuan = async (createDto: CreateSatuanDto) => {
	try {
		const { name } = createDto;
		const exist = await prisma.unit.findFirst({
			where: { name },
		});
		if (exist) {
			if (exist.isDeleted) {
				const data = await prisma.unit.update({
					data: { isDeleted: 0 },
					where: { id: exist.id },
				});
				return { data, status: 201, message: "Berhasil tambah satuan" };
			} else {
				return {
					data: null,
					message: `Satuan dengan nama ${name} sudah terdaftar`,
					status: 400,
				};
			}
		}

		const data = await prisma.unit.create({
			data: { name },
		});
		return { data, status: 201, message: "Berhasil tambah satuan" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const updateSatuan = async (updateDto: UpdateSatuanDto, id: number) => {
	try {
		const { name } = updateDto;
		if (name) {
			const exist = await prisma.unit.findFirst({
				where: { name },
			});
			if (exist)
				return {
					data: null,
					message: `Satuan dengan nama ${name} sudah terdaftar`,
					status: 400,
				};
		}

		const data = await prisma.unit.update({
			data: { ...(name ? { name } : null) },
			where: { id },
		});
		return { data, status: 201, message: "Berhasil ubah satuan" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const deleteSatuan = async (id: number) => {
	try {
		const isExist = await prisma.unit.findUnique({ where: { id } });
		if (!isExist)
			return {
				data: null,
				message: `Satuan dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		const data = await prisma.unit.update({
			data: { isDeleted: 1 },
			where: { id },
		});
		return { data, status: 200, message: "Berhasil hapus satuan" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};
