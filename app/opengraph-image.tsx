import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ROLES.md";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				background: "#0a0a0a",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "16px",
					marginBottom: "24px",
				}}
			>
				<div
					style={{
						width: "48px",
						height: "4px",
						background: "#e8e8e8",
					}}
				/>
			</div>
			<div
				style={{
					fontSize: "72px",
					fontWeight: 500,
					color: "#f0f0f0",
					letterSpacing: "-0.02em",
				}}
			>
				/ROLES.md
			</div>
			<div
				style={{
					fontSize: "24px",
					color: "#666666",
					marginTop: "16px",
				}}
			>
				Define what your AI agent is responsible for.
			</div>
		</div>,
		{
			...size,
		},
	);
}
