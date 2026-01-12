import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "custom-instructions", text: "Custom instructions", level: 2 },
	{ id: "chat-reference", text: "Chat reference", level: 2 },
	{ id: "copilot-edits", text: "Copilot Edits", level: 2 },
];

export default function CopilotPage() {
	return (
		<DocPage title="GitHub Copilot" toc={toc}>
			<p>Configure GitHub Copilot to use ROLES.md in your project.</p>

			<h2 id="custom-instructions">Custom instructions</h2>
			<p>
				Add to <code>.github/copilot-instructions.md</code>:
			</p>
			<CodeBlock>{`## Roles

Read ROLES.md and follow the role that matches the current task:
- Code implementation: Implementer role
- Code review: Reviewer role
- Architecture decisions: Architect role`}</CodeBlock>

			<h2 id="chat-reference">Chat reference</h2>
			<p>In Copilot Chat, reference the file:</p>
			<CodeBlock>
				@workspace Read ROLES.md and use the Implementer role.
			</CodeBlock>

			<h2 id="copilot-edits">Copilot Edits</h2>
			<p>When using Copilot Edits for multi-file changes:</p>
			<CodeBlock>
				Use the Implementer role from ROLES.md. Apply changes to specified files
				only.
			</CodeBlock>
		</DocPage>
	);
}
