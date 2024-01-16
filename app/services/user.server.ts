import { z } from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "~/utils/prisma.server";
import { errorMessage } from "~/_helper/constant";
import { phoneRegex } from "~/utils/constant";
import { Level } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { QueryFindAllDto } from "./global-dto/queryFindAll";

export const createUserDto = zfd.formData({
	fullName: zfd.text(z.string().toUpperCase()),
	password: zfd.text(z.string().min(6)),
	email: zfd.text(z.string().email()),
	status: zfd.numeric(z.coerce.number().min(0).max(1)),
	hp: zfd.text(z.string().regex(phoneRegex, "Invalid phone number")),
	address: zfd.text(z.string().optional()).optional(),
	level: zfd.text(z.nativeEnum(Level)),
	birthday: zfd.text(z.coerce.date()),
});

export const userUpdateDto = zfd.formData({
	fullName: zfd.text(z.string().toUpperCase()).optional(),
	password: zfd.text(z.string().min(6)).optional(),
	email: zfd.text(z.string().email()),
	status: zfd.numeric(z.coerce.number().min(0).max(1)),
	hp: zfd.text(z.string().regex(phoneRegex, "Invalid phone number")),
	address: zfd.text(z.string().optional()).optional(),
	level: zfd.text(z.nativeEnum(Level)),
	birthday: zfd.text(z.coerce.date()),
});

export type CreateUserDto = z.infer<typeof createUserDto>;

export type UserUpdateDto = z.infer<typeof userUpdateDto>;

export const createUser = async (dto: CreateUserDto) => {
	try {
		const { email, hp, status, birthday, password: plainText } = dto;
		const exist = await prisma.user.findFirst({
			where: {
				OR: [{ email }, { hp }],
			},
			select: { hp: true, email: true },
		});
		if (exist) {
			Object.keys(exist).forEach((key) => {
				if ((exist as any)[key] === (dto as any)[key])
					return {
						data: null,
						message: `Data ${(dto as any)[key]} sudah terdaftar`,
						status: 400,
					};
			});
		}

		const salt = bcrypt.genSaltSync(10);
		const password = bcrypt.hashSync(plainText, salt);

		const data = await prisma.user.create({
			data: {
				...dto,
				password,
				status: +status,
				birthday: new Date(birthday),
			},
			select: {
				id: true,
			},
		});

		return { data, message: "Berhasil tambah pengguna", status: 201 };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const findAllUser = async (query?: QueryFindAllDto, level?: Level) => {
	const page = query?.page || 0;
	const limit = 10;

	try {
		const where: { OR?: any[]; isDeleted: number; level?: any } = {
			isDeleted: 0,
		};
		if (query?.search) {
			where.OR = [
				{
					fullName: {
						startsWith: `%${query.search.toUpperCase()}`,
					},
				},
				{
					email: {
						startsWith: `%${query.search}`,
					},
				},
				{
					hp: {
						startsWith: `%${query.search}`,
					},
				},
			];
		}
		if (level !== "SUPER") {
			where.level = { not: "SUPER" };
		}

		const [data, totalCount] = await prisma.$transaction([
			prisma.user.findMany({
				where,
				skip: page * limit,
				take: limit,
				select: {
					id: true,
					fullName: true,
					email: true,
					hp: true,
					level: true,
					status: true,
				},
			}),
			prisma.user.count({ where }),
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

export const findOneUser = async (id: string) => {
	try {
		const data = await prisma.user.findUnique({
			where: { id, isDeleted: 0 },
		});
		if (!data)
			return {
				data: null,
				message: `Pengguna dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		const { password, ...exludePassword } = data;
		return {
			data: exludePassword,
			status: 200,
			message: "Sukses",
		};
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const updateUser = async (dto: UserUpdateDto, id: string) => {
	try {
		const { email, hp, password, birthday, status } = dto;
		const exist = await prisma.user.findFirst({
			where: {
				OR: [{ email }, { hp }],
				NOT: {
					id,
				},
			},
			select: { hp: true, email: true },
		});
		if (exist) {
			Object.keys(exist).forEach((key) => {
				if ((exist as any)[key] === (dto as any)[key])
					return {
						data: null,
						message: `Data ${(dto as any)[key]} sudah terdaftar`,
						status: 400,
					};
			});
		}

		let passwordHased;
		if (password) {
			const salt = bcrypt.genSaltSync(10);
			passwordHased = bcrypt.hashSync(password, salt);
		}

		const data = await prisma.user.update({
			data: {
				...dto,
				...(passwordHased ? { password: passwordHased } : null),
				birthday: new Date(birthday),
				status: +status,
			},
			select: {
				id: true,
			},
			where: { id },
		});

		return { data, message: "Berhasil ubah pengguna", status: 200 };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};

export const deleteUser = async (id: string) => {
	try {
		const isExist = await prisma.user.findUnique({ where: { id } });
		if (!isExist)
			return {
				data: null,
				message: `Pengguna dengan id ${id} tidak terdaftar`,
				status: 404,
			};

		const data = await prisma.user.update({
			data: { isDeleted: 1 },
			where: { id },
		});
		return { data, status: 200, message: "Berhasil hapus pengguna" };
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};
