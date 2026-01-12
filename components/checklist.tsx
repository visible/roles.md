type Props = {
	items: string[];
};

function CheckboxIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 16 16"
			fill="none"
			className="shrink-0 mt-0.5"
		>
			<rect
				x="1"
				y="1"
				width="14"
				height="14"
				rx="2"
				stroke="var(--color-border)"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

export function Checklist({ items }: Props) {
	return (
		<ul className="space-y-3 list-none p-0 m-0">
			{items.map((item, i) => (
				<li key={i} className="flex items-start gap-3 text-fg">
					<CheckboxIcon />
					<span>{item}</span>
				</li>
			))}
		</ul>
	);
}
