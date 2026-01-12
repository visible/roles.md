"use client";

import { useEffect, useState, useCallback } from "react";

export type TocItem = {
	id: string;
	text: string;
	level: number;
};

type Props = {
	items: TocItem[];
};

function getIndent(level: number): number {
	if (level <= 2) return 14;
	if (level === 3) return 26;
	return 36;
}

function getLineX(level: number): number {
	return level >= 3 ? 10 : 0;
}

function CopyIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
		>
			<rect x="9" y="9" width="13" height="13" rx="2" />
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
}

function ArrowUpIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
		>
			<path d="M12 19V5M5 12l7-7 7 7" />
		</svg>
	);
}

export function TableOfContents({ items }: Props) {
	const [activeIds, setActiveIds] = useState<Set<string>>(new Set([items[0]?.id ?? ""]));
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [copied, setCopied] = useState(false);

	const updateActive = useCallback(() => {
		if (!items.length) return;

		const scrollY = window.scrollY;
		const viewportHeight = window.innerHeight;

		setShowScrollTop(scrollY > 300);

		const visible = new Set<string>();
		const headerHeight = 80;

		for (let i = 0; i < items.length; i++) {
			const el = document.getElementById(items[i].id);
			if (!el) continue;

			const rect = el.getBoundingClientRect();
			const nextEl = items[i + 1] ? document.getElementById(items[i + 1].id) : null;
			const sectionBottom = nextEl
				? nextEl.getBoundingClientRect().top
				: viewportHeight;

			const sectionTop = rect.top;
			const isVisible = sectionTop < viewportHeight && sectionBottom > headerHeight;

			if (isVisible) {
				visible.add(items[i].id);
			}
		}

		if (visible.size === 0 && items.length > 0) {
			visible.add(items[0].id);
		}

		setActiveIds(visible);
	}, [items]);

	useEffect(() => {
		updateActive();
		window.addEventListener("scroll", updateActive, { passive: true });
		window.addEventListener("resize", updateActive, { passive: true });
		return () => {
			window.removeEventListener("scroll", updateActive);
			window.removeEventListener("resize", updateActive);
		};
	}, [updateActive]);

	const copyPage = useCallback(() => {
		const article = document.querySelector("article");
		if (article) {
			navigator.clipboard.writeText(article.innerText);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		}
	}, []);

	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	if (!items.length) return null;

	return (
		<nav className="hidden xl:block w-48 shrink-0">
			<div className="sticky top-24">
				<p className="text-xs text-muted mb-3">On this page</p>
				<div className="relative flex flex-col">
					{items.map((item, i) => {
						const isActive = activeIds.has(item.id);
						const prevLevel = items[i - 1]?.level ?? item.level;
						const nextLevel = items[i + 1]?.level ?? item.level;
						const x = getLineX(item.level);
						const prevX = getLineX(prevLevel);
						const nextX = getLineX(nextLevel);
						const entering = x !== prevX;
						const exiting = x !== nextX;

						return (
							<a
								key={item.id}
								href={`#${item.id}`}
								onClick={(e) => {
									e.preventDefault();
									const el = document.getElementById(item.id);
									if (el) {
										const y = el.getBoundingClientRect().top + window.scrollY - 80;
										window.scrollTo({ top: y, behavior: "smooth" });
										history.replaceState(null, "", `#${item.id}`);
									}
								}}
								style={{ paddingLeft: getIndent(item.level) }}
								className={`relative py-1.5 text-[13px] transition-colors first:pt-0 last:pb-0 ${
									isActive ? "text-accent" : "text-muted hover:text-fg"
								}`}
							>
								{entering && (
									<svg viewBox="0 0 16 16" className="absolute -top-1.5 left-0 size-4">
										<line
											x1={prevX}
											y1="0"
											x2={x}
											y2="12"
											stroke={isActive ? "var(--color-accent)" : "var(--color-border)"}
											strokeWidth="1"
										/>
									</svg>
								)}
								<div
									className="absolute w-px"
									style={{
										left: x,
										top: entering ? 6 : 0,
										bottom: exiting ? 6 : 0,
										background: isActive
											? "var(--color-accent)"
											: "var(--color-border)",
									}}
								/>
								{item.text}
							</a>
						);
					})}
				</div>

				<div className="mt-6 pt-4 border-t border-border space-y-2">
					<button
						type="button"
						onClick={copyPage}
						className="flex items-center gap-2 text-xs text-muted hover:text-fg transition-colors w-full"
					>
						{copied ? <CheckIcon /> : <CopyIcon />}
						<span>{copied ? "Copied" : "Copy page"}</span>
					</button>
					<button
						type="button"
						onClick={scrollToTop}
						className={`flex items-center gap-2 text-xs text-muted hover:text-fg w-full transition-all duration-200 ${
							showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
						}`}
					>
						<ArrowUpIcon />
						<span>Back to top</span>
					</button>
				</div>
			</div>
		</nav>
	);
}
