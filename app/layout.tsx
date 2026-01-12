import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "/ROLES.md",
		template: "%s | /ROLES.md",
	},
	description:
		"A simple, open convention for defining the responsibilities an AI agent is operating under.",
	metadataBase: new URL("https://roles.md"),
	openGraph: {
		title: "/ROLES.md",
		description:
			"A simple, open convention for defining the responsibilities an AI agent is operating under.",
		url: "https://roles.md",
		siteName: "/ROLES.md",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "/ROLES.md",
		description:
			"A simple, open convention for defining the responsibilities an AI agent is operating under.",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/icon.svg",
		apple: "/icon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
