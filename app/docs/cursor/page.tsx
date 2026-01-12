import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "using-rules", text: "Using rules", level: 2 },
	{ id: "using-mentions", text: "Using mentions", level: 2 },
	{ id: "automatic-detection", text: "Automatic detection", level: 2 },
];

export default function CursorPage() {
	return (
		<DocPage title="Cursor" toc={toc}>
			<p>Configure Cursor to use ROLES.md in your project.</p>

			<h2 id="using-rules">Using rules</h2>
			<p>
				Add to your <code>.cursor/rules</code> file:
			</p>
			<CodeBlock>
				Read ROLES.md and follow the specified role for this task.
			</CodeBlock>

			<h2 id="using-mentions">Using mentions</h2>
			<p>Reference the file directly in your prompts:</p>
			<CodeBlock>@ROLES.md Use the Implementer role for this task.</CodeBlock>

			<h2 id="automatic-detection">Automatic detection</h2>
			<p>Add logic to your rules for automatic role selection:</p>
			<CodeBlock>{`Read ROLES.md. Apply roles based on the task:
- For code changes: Implementer role
- For PR reviews: Reviewer role
- For design discussions: Architect role`}</CodeBlock>
		</DocPage>
	);
}
