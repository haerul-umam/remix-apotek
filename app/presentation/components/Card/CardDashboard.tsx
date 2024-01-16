import { Group, Paper, Text } from "@mantine/core";

export interface CardDashboardProps {
	icon: React.ReactNode;
	title: string;
	value: string | number;
}

export default function CardDashboard({
	icon,
	title,
	value,
}: CardDashboardProps) {
	return (
		<Paper shadow="sm" p="sm">
			<Group>
				<Paper withBorder p="xs">
					{icon}
				</Paper>
				<div>
					<Text c="gray">{title}</Text>
					<Text c="dark">{value}</Text>
				</div>
			</Group>
		</Paper>
	);
}
