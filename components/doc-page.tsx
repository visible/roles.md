"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllPages } from "@/lib/navigation";
import { TableOfContents, type TocItem } from "./toc";

export type { TocItem };

type Props = {
	title: string;
	toc: TocItem[];
	children: React.ReactNode;
};

export function DocPage({ title, toc, children }: Props) {
	const pathname = usePathname();
	const allPages = getAllPages();
	const currentIndex = allPages.findIndex((p) => p.href === pathname);
	const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
	const next =
		currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

	return (
		<>
			<main className="flex-1 min-w-0">
				<article className="prose text-sm">
					<h1>{title}</h1>
					{children}
				</article>

				<nav className="mt-16 pt-8 border-t border-border flex items-center justify-between">
					{prev ? (
						<Link href={prev.href} className="group flex flex-col">
							<span className="text-xs text-muted mb-1">Previous</span>
							<span className="text-sm text-fg group-hover:text-accent transition-colors">
								{prev.title}
							</span>
						</Link>
					) : (
						<div />
					)}
					{next ? (
						<Link href={next.href} className="group flex flex-col items-end">
							<span className="text-xs text-muted mb-1">Next</span>
							<span className="text-sm text-fg group-hover:text-accent transition-colors">
								{next.title}
							</span>
						</Link>
					) : (
						<div />
					)}
				</nav>
			</main>
			<TableOfContents items={toc} />
		</>
	);
}
