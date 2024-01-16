import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { SideBar } from "~/presentation/components/Sidebar/Sidebar";
import { getUserFromSession } from "~/services/login.server";

export default function AppLayout() {
	return (
		<SideBar>
			<Outlet />
		</SideBar>
	);
}

export function loader({ request }: LoaderFunctionArgs) {
	return getUserFromSession(request);
}

export type LoaderAppType = typeof loader;
