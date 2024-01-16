import ObatForm from "~/presentation/components/Form/ObatForm";
import { typedjson } from "remix-typedjson";
import { createObat, createObatDto } from "~/services/obat.server";
import { type ActionFunctionArgs } from "@remix-run/node";
import { requireUserSession } from "~/services/login.server";

export default function TambahObat() {
	return <ObatForm />;
}

export const meta = () => {
	return [{ title: "Tambah obat" }];
};

export async function action({ request }: ActionFunctionArgs) {
	await requireUserSession(request, "ADMIN");

	try {
		const formData = await request.formData();
		const schema = createObatDto.safeParse(formData);
		if (!schema.success) {
			return typedjson(
				{ message: schema.error.errors[0].message, status: 400 },
				{ status: 400 }
			);
		}
		const result = await createObat(schema.data);
		return typedjson(result, { status: result.status });
	} catch (error) {
		throw error;
	}
}
