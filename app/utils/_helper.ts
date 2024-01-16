export function rupiah(number: number) {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(number);
}

/*
	format date as YYYY-MM-DD
*/
export function formatDate(date: Date) {
	return date.toLocaleDateString("en-CA");
}
