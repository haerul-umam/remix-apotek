import bcrypt from "bcryptjs";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { prisma } from "~/utils/prisma.server";
import { errorMessage } from "~/_helper/constant";
import { commitSession, destroySession, getSession } from "~/session.server";
import { redirect } from "@remix-run/node";
import { Level } from "@prisma/client";

export const loginDto = zfd.formData({
	email: zfd.text(z.string().email()),
	password: zfd.text(z.string().min(6)),
});

export type LoginDto = z.infer<typeof loginDto>;

export const createUserSession = async (
	userId: string,
	redirectPath: string
) => {
	const session = await getSession();
	session.set("userId", userId);
	return redirect(redirectPath, {
		headers: {
			"Set-Cookie": await commitSession(session),
		},
	});
};

export const destroyUserSession = async (request: Request) => {
	const session = await getSession(request.headers.get("Cookie"));
	return redirect("/", {
		headers: {
			"Set-Cookie": await destroySession(session),
		},
	});
};

export const getUserFromSession = async (request: Request) => {
	const session = await getSession(request.headers.get("Cookie"));
	const userId = session.get("userId");
	if (!userId) {
		throw redirect("/login");
	}

	const user = await prisma.user.findUnique({ where: { id: userId } });
	if (!user) {
		throw destroyUserSession(request);
	}

	const { id, level, fullName, isDeleted, status } = user;
	return { id, level, fullName, isDeleted, status };
};

export const requireUserSession = async (request: Request, level?: Level) => {
	const user = await getUserFromSession(request);
	if (!user) {
		throw redirect("/login");
	}
	if (level && user.level !== "SUPER") {
		if (user.level !== level) {
			throw redirect("/");
		}
	}
	if (user.isDeleted || !user.status) {
		const session = await getSession(request.headers.get("Cookie"));
		throw redirect("/login", {
			headers: {
				"Set-Cookie": await destroySession(session),
			},
		});
	}

	return user;
};

export const createFlashErrorSession = async (
	message: string,
	redirectPath: string
) => {
	const session = await getSession();
	session.flash("error", message);

	return redirect(redirectPath, {
		headers: {
			"Set-Cookie": await commitSession(session),
		},
	});
};

export const login = async (loginDto: LoginDto) => {
	try {
		const { email, password: plainText } = loginDto;
		const exist = await prisma.user.findUnique({
			where: { email },
		});

		const passwordCorrect = bcrypt.compareSync(
			plainText,
			exist?.password || ""
		);
		if (!passwordCorrect || !exist) {
			return createFlashErrorSession("Pengguna atau password salah", "/login");
		}

		if (exist.isDeleted || !exist.status) {
			return createFlashErrorSession("Pengguna sudah tidak aktif", "/login");
		}
		return createUserSession(exist.id, "/");
	} catch (error) {
		throw new Error(errorMessage.default);
	}
};
