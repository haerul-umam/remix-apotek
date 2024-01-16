import { CloseButton, Input, InputProps } from "@mantine/core";
import { Form, Link, useSearchParams } from "@remix-run/react";
import { IconSearch } from "@tabler/icons-react";

export default function InputSearch(props: InputProps) {
	const [searchParams] = useSearchParams();
	const querySearch = searchParams.get("search");

	return (
		<Form action="?page=1&" method="get" style={{ width: "25%" }}>
			<Input
				{...props}
				defaultValue={querySearch || ""}
				type="text"
				placeholder="cari"
				rightSectionPointerEvents="all"
				leftSectionPointerEvents="all"
				name="search"
				leftSection={<IconSearch size={16} />}
				rightSection={
					<Link to=".">
						<CloseButton
							aria-label="Clear input"
							style={{ display: querySearch ? undefined : "none" }}
						/>
					</Link>
				}
			/>
		</Form>
	);
}
