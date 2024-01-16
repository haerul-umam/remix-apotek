import { InputProps, MantineStyleProps } from "@mantine/core";
import { DatePickerInput, DatesRangeValue } from "@mantine/dates";
import { useNavigate } from "@remix-run/react";
import { formatDate } from "~/utils/_helper";

export interface InputDateRangeProps extends MantineStyleProps {
	start?: Date;
	end?: Date;
	onChange?(e: DatesRangeValue): any;
}

export default function InputDateRange({
	start,
	end,
	onChange,
	...other
}: InputDateRangeProps) {
	const navigate = useNavigate();
	const maxdays = 60;
	const inputDate = start ? new Date(start) : new Date();
	const futureDate = new Date(inputDate);
	const pastDate = new Date(inputDate);
	futureDate.setDate(inputDate.getDate() + maxdays);
	pastDate.setDate(inputDate.getDate() - maxdays);

	const goTo = (value: DatesRangeValue) => {
		const [start, end] = value;
		if (start && end) {
			navigate(
				`?start=${formatDate(new Date(start))}&end=${formatDate(new Date(end))}`
			);
		}
	};

	const handleChange = onChange || goTo;

	return (
		<DatePickerInput
			{...other}
			allowSingleDateInRange
			type="range"
			onChange={handleChange}
			{...(start && end ? { defaultValue: [start, end] } : null)}
			maxDate={futureDate}
			minDate={pastDate}
			style={{ width: "25%" }}
			placeholder="Tanggal"
		/>
	);
}
