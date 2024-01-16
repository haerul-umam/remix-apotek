import { Button, Group, Menu, Tooltip } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ActionButtonsProps {
	onUpdate?(): any;
	onDelete?(): any;
}

export default function ActionButtons({
	onDelete,
	onUpdate,
}: ActionButtonsProps) {
	return (
		<Group gap={5} justify="center">
			{onUpdate && (
				<Tooltip label="Ubah">
					<Button size="xs" variant="light" onClick={onUpdate}>
						<IconEdit size={12} />
					</Button>
				</Tooltip>
			)}
			{onDelete && (
				<Menu shadow="sm" width={200}>
					<Menu.Target>
						<Tooltip label="Hapus">
							<Button size="xs" variant="light" color="red">
								<IconTrash size={12} />
							</Button>
						</Tooltip>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Label>Yakin untuk menghapus ?</Menu.Label>
						<Menu.Item
							onClick={onDelete}
							color="red"
							leftSection={<IconTrash />}
						>
							Ya hapus!
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			)}
		</Group>
	);
}
