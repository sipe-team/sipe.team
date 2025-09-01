"use client";

import { useEffect, useState } from "react";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sendGAEvent } from "@next/third-parties/google";
import { Flex } from "@sipe-team/side";
import clsx from "clsx";

import Layout from "@/components/atoms/Layout";
import HamburgerButton from "@/components/global/HamburgerButton";
import Button from "@/components/molecules/Button";
import { SipeLogo } from "@/libs/assets/logos";
import { displayApplication, getCurrentStatus } from "@/libs/utils/recruit";

import styles from "./index.module.scss";

const menus: { name: string; path: Route }[] = [
	{ name: "About", path: "/about" },
	{ name: "Recruit", path: "/recruit" },
	{ name: "People", path: "/people" },
	{ name: "Activity", path: "/activity" },
];

function Navigation() {
	const pathname = usePathname();
	const now = Date.now();
	const currentStatus = getCurrentStatus(now);
	const currentApplicationDetail = displayApplication[currentStatus];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [pathname]);

	const handleClickJoinUsButton = () => {
		sendGAEvent("event", "cilck_join_us_button", {
			screen_name: "menu",
		});
	};

	return (
		<Flex align="center" asChild className={styles.wrapper} direction="column">
			<header>
				<Layout className={styles.headerLayout}>
					<Flex
						align="center"
						className={styles.header}
						direction="row"
						justify="space-between"
					>
						<Link href="/">
							<SipeLogo aria-label="사이프 로고" />
						</Link>
						<HamburgerButton
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							isOpened={isMobileMenuOpen}
						/>
					</Flex>
					<Flex
						align="center"
						asChild
						className={clsx(
							styles.menuWrapper,
							isMobileMenuOpen ? styles.open : styles.close,
						)}
						direction="row"
					>
						<nav>
							<Flex
								className={clsx(
									styles.menuList,
									isMobileMenuOpen ? styles.open : styles.close,
								)}
								gap="12px"
							>
								{menus.map((menu) => (
									<Button
										key={menu.name}
										buttonType="menu"
										active={menu.path === pathname}
										href={menu.path}
									>
										{menu.name}
									</Button>
								))}
								<Button
									disabled={currentStatus !== "ongoing"}
									isExternalLink
									href={currentApplicationDetail.formUrl}
									buttonType="apply"
									onClick={handleClickJoinUsButton}
								>
									Join Us
								</Button>
							</Flex>
						</nav>
					</Flex>
				</Layout>
			</header>
		</Flex>
	);
}

export default Navigation;
