import type { ActionFunctionArgs } from "@remix-run/node";
import { typedjson } from "remix-typedjson";
import SupplierForm from "~/presentation/components/Form/SupplierForm";
import { requireUserSession } from "~/services/login.server";
import { createSupllier, createSupplierDto } from "~/services/supplier.server";

export default function TambahSupplier() {
	return <SupplierForm />;
}

export const meta = () => {
	return [{ title: "Tambah supplier" }];
};

export const action = async ({ request }: ActionFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	try {
		const formData = await request.formData();
		const schema = createSupplierDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const result = await createSupllier(schema.data);
		return typedjson(result, { status: result.status });
	} catch (error) {
		throw error;
	}
};

export type ActionSupplierType = typeof action;
