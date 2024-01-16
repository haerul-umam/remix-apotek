import { Button, Flex, Text, Title } from "@mantine/core";
import { useNavigate } from "@remix-run/react";

interface ErrorBoundaryPageProps {
	title: string;
	message: string;
}

export default function ErrorBoundaryPage(props: ErrorBoundaryPageProps) {
	const navigate = useNavigate();
	const gohome = () => navigate("..");
	return (
		<Flex
			h={"100vh"}
			justify="center"
			align="center"
			direction="column"
			gap="lg"
		>
			<Title>{props.title}</Title>
			<Text c="gray" size="lg">
				{props.message}
			</Text>
			<Button variant="subtle" size="md" onClick={gohome}>
				Kembali
			</Button>
		</Flex>
	);
}
