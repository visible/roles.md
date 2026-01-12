"use client";

import { useState, useCallback } from "react";

export function CodeBlock({ children }: { children: string }) {
	const [copied, setCopied] = useState(false);

	const copy = useCallback(() => {
		navigator.clipboard.writeText(children);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}, [children]);

	return (
		<div className="group relative">
			<button
				type="button"
				onClick={copy}
				className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs px-2 py-1 rounded bg-border text-muted hover:text-fg"
			>
				{copied ? "Copied" : "Copy"}
			</button>
			<pre>
				<code>{children}</code>
			</pre>
		</div>
	);
}
