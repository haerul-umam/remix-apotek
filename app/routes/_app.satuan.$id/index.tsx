import {
	redirect,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
} from "@remix-run/node";
import { typedjson } from "remix-typedjson";
import {
	deleteSatuan,
	findOneSatuan,
	updateSatuan,
	updateSatuanDto,
} from "~/services/satuan.server";
import SatuanForm from "~/presentation/components/Form/SatuanForm";
import { requireUserSession } from "~/services/login.server";

export default function UpdateSatuan() {
	return <SatuanForm />;
}

export const meta = () => {
	return [{ title: "Ubah satuan" }];
};

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const data = await findOneSatuan(+params.id!);
	if (data.status === 404)
		throw new Response("Data tidak ditemukan", { status: 404 });
	return typedjson(data, { status: data.status });
};

export type LoaderIdSatuanType = typeof loader;

export const action = async ({ request, params }: ActionFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const { method } = request;
	const formData = await request.formData();
	const id = +params.id!;
	if (method === "PATCH") {
		const schema = updateSatuanDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const data = await updateSatuan(schema.data, id);
		return typedjson(data, { status: data.status });
	}
	if (method === "DELETE") {
		await deleteSatuan(id);
		return redirect("/satuan");
	}
	throw new Response("Method not allowed", { status: 404 });
};
