export type NavItem = {
	title: string;
	href: string;
};

export type NavSection = {
	title: string;
	items: NavItem[];
};

export type NavEntry = NavItem | NavSection;

export const navigation: NavEntry[] = [
	{ title: "Introduction", href: "/docs" },
	{ title: "Quick Start", href: "/docs/quickstart" },
	{
		title: "Configure",
		items: [
			{ title: "Cursor", href: "/docs/cursor" },
			{ title: "Claude Code", href: "/docs/claude" },
			{ title: "Aider", href: "/docs/aider" },
			{ title: "Gemini CLI", href: "/docs/gemini" },
			{ title: "GitHub Copilot", href: "/docs/copilot" },
		],
	},
	{
		title: "Examples",
		items: [
			{ title: "Implementer", href: "/docs/implementer" },
			{ title: "Reviewer", href: "/docs/reviewer" },
			{ title: "Architect", href: "/docs/architect" },
		],
	},
];

export function isNavItem(entry: NavEntry): entry is NavItem {
	return "href" in entry;
}

export function getAllPages(): NavItem[] {
	const pages: NavItem[] = [];
	for (const entry of navigation) {
		if (isNavItem(entry)) {
			pages.push(entry);
		} else {
			pages.push(...entry.items);
		}
	}
	return pages;
}
