import PenjualanForm from "~/presentation/components/Form/PenjualanForm";
import { typedjson } from "remix-typedjson";
import {
	createPenjualan,
	createPenjualanDto,
} from "~/services/penjualan.server";
import type { ActionFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export default function TambahPenjualan() {
	return <PenjualanForm />;
}

export const action = async ({ request }: ActionFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	try {
		const formData = await request.formData();
		const schema = createPenjualanDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const result = await createPenjualan(schema.data);
		return typedjson(result, { status: result.status });
	} catch (error) {
		throw error;
	}
};

export const meta = () => {
	return [{ title: "Tambah penjualan" }];
};

export type ActionPenjualanType = typeof action;
