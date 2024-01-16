import { Button } from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { IconPlus } from "@tabler/icons-react";

interface ButtonAddProps {
	label: string;
	goTo: string;
}

export default function ButtonAdd({ label, goTo }: ButtonAddProps) {
	const navigation = useNavigate();

	const onClick = () => navigation(goTo);

	return (
		<Button mb="md" rightSection={<IconPlus />} onClick={onClick}>
			{label}
		</Button>
	);
}
