import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "dayjs/locale/id.js";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useRouteError,
} from "@remix-run/react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { cssBundleHref } from "@remix-run/css-bundle";
import { Notifications } from "@mantine/notifications";
import ErrorBoundaryPage from "./presentation/components/Error/ErrorBoundary";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import { DatesProvider } from "@mantine/dates";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

interface DocumentProps {
	children: React.ReactNode;
}

function Document({ children }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>
					<Notifications position="top-right" zIndex={1000} />
					<DatesProvider settings={{ locale: "id" }}>{children}</DatesProvider>
				</MantineProvider>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export const meta: MetaFunction = () => {
	return [
		{ title: "Aplikasi apotek" },
		{ name: "description", content: "aplikasi pos apotek" },
	];
};

export function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<Document>
				<ErrorBoundaryPage
					title="Terjadi kesalahan respon server, mungkin kamu tersesat"
					message={error.data}
				/>
			</Document>
		);
	} else if (error instanceof Error) {
		return (
			<Document>
				<ErrorBoundaryPage
					title="Terjadi kesalahan, silahkan coba beberapa saat kembali"
					message={error.message}
				/>
			</Document>
		);
	} else {
		return (
			<Document>
				<ErrorBoundaryPage title="Error occurred !" message="Unkown error" />
			</Document>
		);
	}
}
