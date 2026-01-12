"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, isNavItem } from "@/lib/navigation";

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="w-56 shrink-0 hidden lg:block">
			<div className="sticky top-24">
				<nav className="space-y-6">
					{navigation.map((entry, i) => (
						<div key={i}>
							{isNavItem(entry) ? (
								<Link
									href={entry.href}
									className={`block text-sm py-1 transition-colors ${
										pathname === entry.href
											? "text-accent"
											: "text-muted hover:text-fg"
									}`}
								>
									{entry.title}
								</Link>
							) : (
								<>
									<p className="text-xs text-muted mb-2 uppercase tracking-wider">
										{entry.title}
									</p>
									<ul className="space-y-1">
										{entry.items.map((item) => (
											<li key={item.href}>
												<Link
													href={item.href}
													className={`block text-sm py-1 transition-colors ${
														pathname === item.href
															? "text-accent"
															: "text-muted hover:text-fg"
													}`}
												>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								</>
							)}
						</div>
					))}
				</nav>
			</div>
		</aside>
	);
}
