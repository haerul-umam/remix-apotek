import React from "react";
import {
	AppShell,
	Burger,
	Group,
	Text,
	ScrollArea,
	Menu,
	rem,
	Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
	IconGauge,
	IconPackage,
	IconBuildingFactory2,
	IconUser,
	IconReportAnalytics,
	IconPill,
	IconShoppingBag,
	IconShoppingCart,
	IconLogout,
	IconChevronDown,
} from "@tabler/icons-react";
import type { LinksGroupProps } from "./NavbarLinksGroup";
import { LinksGroup } from "./NavbarLinksGroup";
import { Form, useLoaderData } from "@remix-run/react";
import { LoaderAppType } from "~/routes/_app/route";
import classes from "./Sidebar.module.css";

const dataLinks: LinksGroupProps[] = [
	{ link: "/", label: "Dashboard", icon: IconGauge },
	{ link: "/obat", label: "Obat", icon: IconPill, level: "ADMIN" },
	{
		link: "/penjualan",
		label: "Penjualan",
		icon: IconShoppingCart,
		level: "ADMIN",
	},
	{
		link: "/pembelian",
		label: "Pembelian",
		icon: IconShoppingBag,
		level: "ADMIN",
	},
	{
		link: "/supplier",
		label: "Supplier",
		icon: IconBuildingFactory2,
		level: "ADMIN",
	},
	{ link: "/satuan", label: "Satuan", icon: IconPackage, level: "ADMIN" },
	{ link: "/pengguna", label: "Pengguna", icon: IconUser, level: "HEAD_WH" },
	{
		label: "Laporan",
		icon: IconReportAnalytics,
		links: [
			{ label: "Obat", link: "/laporan-obat" },
			{ label: "Pembelian", link: "/laporan-pembelian" },
			{ label: "Penjualan", link: "/laporan-penjualan" },
		],
		link: "#",
		level: "HEAD_WH",
	},
];

interface ComponentSidebarProps {
	children: React.ReactNode;
}

export function SideBar({ children }: ComponentSidebarProps) {
	const [opened, { toggle }] = useDisclosure();
	const data = useLoaderData<LoaderAppType>();

	const links = dataLinks.reduce((filteredArray, item) => {
		if (data.level === "SUPER") {
			filteredArray.push(<LinksGroup {...item} key={item.label} />);
			return filteredArray;
		}
		if (item?.level === data.level) {
			filteredArray.push(<LinksGroup {...item} key={item.label} />);
		}
		if (!item?.level) {
			filteredArray.push(<LinksGroup {...item} key={item.label} />);
		}
		return filteredArray;
	}, [] as React.ReactElement[]);

	return (
		<AppShell
			styles={{
				main: {
					transition: "padding-left 450ms ease",
					background: "#ffff",
				},
				navbar: {
					overflow: "hidden",
					transition: "all 350ms ease, min-width 350ms ease",
					left: opened ? 0 : -300,
				},
				header: { background: "var(--mantine-color-gray-0)", border: "none" },
			}}
			navbar={{
				width: opened ? 300 : 0,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !opened },
			}}
			header={{ height: 60 }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md" display="flex" justify="space-between">
					<Group>
						<Burger opened={opened} onClick={toggle} size="sm" />
						<Text
							variant="gradient"
							gradient={{ from: "indigo", to: "grape", deg: 156 }}
							fw={600}
						>
							APOTEK POS
						</Text>
					</Group>
					<Menu trigger="hover" openDelay={100} closeDelay={400}>
						<Menu.Target>
							<Group>
								<Text>{data.fullName}</Text>
								<IconChevronDown size="1rem" />
							</Group>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								color="red"
								leftSection={
									<IconLogout style={{ width: rem(14), height: rem(14) }} />
								}
							>
								<Form method="post" action="logout">
									<Button variant="transparent" c="red" type="submit">
										Logout
									</Button>
								</Form>
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<ScrollArea className={classes.links}>
					<div className={classes.linksInner}>{links}</div>
				</ScrollArea>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
