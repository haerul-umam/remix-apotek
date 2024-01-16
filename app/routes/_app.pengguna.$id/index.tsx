import PenggunaForm from "~/presentation/components/Form/PenggunaForm";
import { typedjson } from "remix-typedjson";
import {
	deleteUser,
	findOneUser,
	updateUser,
	userUpdateDto,
} from "~/services/user.server";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export default function UpdatePengguna() {
	return <PenggunaForm />;
}

export const meta = () => {
	return [{ title: "Ubah pengguna" }];
};

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "HEAD_WH");

	const data = await findOneUser(params.id!);
	if (data.status === 404)
		throw new Response("Data tidak ditemukan", { status: 404 });
	return typedjson(data, { status: data.status });
};

export type LoaderIdPenggunaType = typeof loader;

export const action = async ({ request, params }: ActionFunctionArgs) => {
	await requireUserSession(request, "HEAD_WH");

	const { method } = request;
	const id = params.id!;
	if (method === "PATCH") {
		const formData = await request.formData();
		const schema = userUpdateDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const data = await updateUser(schema.data, id);
		return typedjson(data, { status: data.status });
	}
	if (method === "DELETE") {
		const data = await deleteUser(id);
		return typedjson(data, { status: data.status });
	}
	throw new Response("Method not allowed", { status: 404 });
};
