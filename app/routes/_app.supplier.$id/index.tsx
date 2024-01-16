import {
	redirect,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
} from "@remix-run/node";
import { typedjson } from "remix-typedjson";
import SupplierForm from "~/presentation/components/Form/SupplierForm";
import { requireUserSession } from "~/services/login.server";
import {
	deleteSupplier,
	findOneSupplier,
	updateSupplier,
	updateSupplierDto,
} from "~/services/supplier.server";

export default function UpdateSuppler() {
	return <SupplierForm />;
}

export const meta = () => {
	return [{ title: "Ubah supplier" }];
};

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const data = await findOneSupplier(+params.id!);
	if (data.status === 404)
		throw new Response("Data tidak ditemukan", { status: 404 });
	
	return typedjson(data, { status: data.status });
};

export type LoaderIdSupplierType = typeof loader;

export const action = async ({ request, params }: ActionFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const { method } = request;
	const id = +params.id!;
	if (method === "PATCH") {
		const formData = await request.formData();
		const schema = updateSupplierDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const data = await updateSupplier(schema.data, id);
		return typedjson(data, { status: data.status });
	}
	if (method === "DELETE") {
		await deleteSupplier(id);
		return redirect("/supplier");
	}
	
	throw new Response("Method not allowed", { status: 404 });
};
