import SatuanForm from "~/presentation/components/Form/SatuanForm";
import { typedjson } from "remix-typedjson";
import { createSatuan, createSatuanDto } from "~/services/satuan.server";
import type { ActionFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export default function TambahSatuan() {
	return <SatuanForm />;
}

export const action = async ({ request }: ActionFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	try {
		const formData = await request.formData();
		const schema = createSatuanDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const result = await createSatuan(schema.data);
		return typedjson(result, { status: result.status });
	} catch (error) {
		throw error;
	}
};

export const meta = () => {
	return [{ title: "Tambah satuan" }];
};

export type ActionSatuanType = typeof action;
