import Link from "next/link";
import { Sidebar } from "@/components/sidebar";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-bg">
			<header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
				<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
					<Link href="/" className="text-accent font-medium">
						ROLES.md
					</Link>
					<nav className="flex items-center gap-4">
						<Link
							href="/docs"
							className="text-sm text-muted hover:text-fg transition-colors"
						>
							Docs
						</Link>
						<a
							href="https://github.com/visible/roles.md"
							className="text-sm text-muted hover:text-fg transition-colors"
						>
							GitHub
						</a>
					</nav>
				</div>
			</header>
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="flex gap-12">
					<Sidebar />
					{children}
				</div>
			</div>
		</div>
	);
}
