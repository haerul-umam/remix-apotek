export function prepareSearch(url: string) {
	const searchParams = new URL(url).searchParams;

	const queryString = searchParams.get("search")?.toUpperCase() || "";
	const queryPage = +(searchParams.get("page") || 0);
	const page = queryPage > 0 ? queryPage - 1 : 0;
	const start = searchParams.get("start");
	const end = searchParams.get("end");

	return { page, queryString, start, end };
}
