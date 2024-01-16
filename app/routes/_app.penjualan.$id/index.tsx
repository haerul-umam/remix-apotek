import { ActionFunctionArgs } from "@remix-run/node";
import { typedjson } from "remix-typedjson";
import { requireUserSession } from "~/services/login.server";
import { deletePenjualan } from "~/services/penjualan.server";

export const action = async ({ request, params }: ActionFunctionArgs) => {
	await requireUserSession(request, "ADMIN");

	const { method } = request;
	const id = params.id!;
	if (method === "DELETE") {
		const data = await deletePenjualan(+id);
		return typedjson(data, { status: data.status });
	}
	throw new Response("Method not allowed", { status: 404 });
};
