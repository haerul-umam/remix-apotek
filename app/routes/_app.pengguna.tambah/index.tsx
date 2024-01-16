import PenggunaForm from "~/presentation/components/Form/PenggunaForm";
import { typedjson } from "remix-typedjson";
import { createUser, createUserDto } from "~/services/user.server";
import type { ActionFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export default function TambahPengguna() {
	return <PenggunaForm />;
}

export const action = async ({ request }: ActionFunctionArgs) => {
	await requireUserSession(request, "HEAD_WH");

	try {
		const formData = await request.formData();
		const schema = createUserDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const result = await createUser(schema.data);
		return typedjson(result, { status: result.status });
	} catch (error) {
		throw error;
	}
};

export const meta = () => {
	return [{ title: "Tambah pengguna" }];
};

export type ActionPenggunaType = typeof action;
