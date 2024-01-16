import Select from "react-select/async";
import debounce from "lodash.debounce";
import useFetcherPromise from "~/hooks/useFetcherPromise";
import type { Props } from "react-select";

export interface SelectAsyncProps extends Props {
	valueKey: string;
	labelKey: string;
	isError?: boolean | string | null | undefined | React.ReactNode;
	onChange(e: any): void;
	label: string;
	actionUrl: string;
	fetchOptions?(inputText: string, cb: (options: any) => void): void;
}

type Option = Record<string, any>;

export default function SelectAsync({
	onChange,
	isError,
	valueKey,
	labelKey,
	label,
	actionUrl,
	fetchOptions,
	...other
}: SelectAsyncProps) {
	const fetcher = useFetcherPromise();

	const fetchDebounce = debounce((inputText: string, cb: any) => {
		fetcher
			.submit({ search: inputText }, { method: "GET", action: actionUrl })
			.then((res: any) => {
				if (res.data) cb(res.data.data);
				else cb([]);
			});
	}, 1000);

	return (
		<div className="mantine-InputWrapper-root">
			<label
				className="m-8fdc1311 mantine-InputWrapper-label mantine-TextInput-label"
				data-required="true"
			>
				{label}
				<span
					className="m-78a94662 mantine-InputWrapper-required mantine-TextInput-required"
					aria-hidden="true"
				>
					{" "}
					*
				</span>
			</label>
			<div>
				<Select
					styles={{
						control: (baseStyles) => ({
							...baseStyles,
							borderColor: isError ? "red" : "var(--mantine-color-gray-4)",
							height: "calc(2.25rem*var(--mantine-scale))",
							minHeight: "calc(2.25rem*var(--mantine-scale))",
							borderWidth: "0.3px",
							"&:hover": {},
						}),
					}}
					placeholder=""
					menuPlacement="top"
					noOptionsMessage={() => (
						<span style={{ fontSize: "13px" }}>
							Tidak ada data, silahkan ketik untuk mencari.
						</span>
					)}
					loadOptions={fetchOptions ?? fetchDebounce}
					getOptionLabel={(opt) => (opt as Option)[labelKey]}
					getOptionValue={(opt) => (opt as Option)[valueKey]}
					onChange={onChange}
					{...other}
				/>
			</div>
		</div>
	);
}
