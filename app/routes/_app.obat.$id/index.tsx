import {
	redirect,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
} from "@remix-run/node";
import { typedjson } from "remix-typedjson";
import {
	deleteObat,
	findOneObat,
	updateObat,
	updateObatDto,
} from "~/services/obat.server";
import ObatForm from "~/presentation/components/Form/ObatForm";
import { requireUserSession } from "~/services/login.server";

export default function UpdateObat() {
	return <ObatForm />;
}

export const meta = () => {
	return [{ title: "Ubah obat" }];
};

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const data = await findOneObat(+params.id!);
	if (data.status === 404)
		throw new Response("Data tidak ditemukan", { status: 404 });
	return typedjson(data, { status: data.status });
};

export type LoaderIdObatType = typeof loader;

export const action = async ({ request, params }: ActionFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const { method } = request;
	const id = +params.id!;
	if (method === "PATCH") {
		const formData = await request.formData();
		const schema = updateObatDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const data = await updateObat(schema.data, id);
		return typedjson(data, { status: data.status });
	}
	if (method === "DELETE") {
		await deleteObat(id);
		return redirect("/obat");
	}
	throw new Response("Method not allowed", { status: 404 });
};
