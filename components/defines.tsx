type Props = {
	items: string[];
};

function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="shrink-0 text-muted"
		>
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	);
}

export function Defines({ items }: Props) {
	return (
		<ul className="space-y-2 my-4">
			{items.map((item, index) => (
				<li key={index} className="flex items-center gap-3">
					<ArrowIcon />
					<span className="text-sm text-fg">{item}</span>
				</li>
			))}
		</ul>
	);
}
