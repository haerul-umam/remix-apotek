import z from "zod";
import { useSearchParams } from "@remix-run/react";
import InputDateRange from "~/presentation/components/Input/InputDateRange";
import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export function useDateRangeParamsInvalid() {
	const [searchParams] = useSearchParams();
	const start = searchParams.get("start");
	const end = searchParams.get("end");
	const stringToDate = z.coerce.date();
	let errorElement: React.ReactElement | null = null;
	if (
		!stringToDate.safeParse(start).success ||
		!stringToDate.safeParse(end).success
	) {
		errorElement = (
			<>
				<InputDateRange />
				<Alert
					variant="light"
					color="red"
					title="Request tidak valid"
					icon={<IconInfoCircle />}
					mt="sm"
				>
					Data tanggal tidak sesuai format, gunakan format YYYY-MM-DD !
				</Alert>
			</>
		);
	}
	return { start, end, errorElement };
}
