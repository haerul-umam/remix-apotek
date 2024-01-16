import { Button, Tooltip } from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconFileDownload } from "@tabler/icons-react";

export default function ButtonDownload({ url }: { url: string }) {
	return (
		<Tooltip label="Download">
			<Link to={url} target="_blank">
				<Button size="sm">
					<IconFileDownload size={16} />
				</Button>
			</Link>
		</Tooltip>
	);
}
