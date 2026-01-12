import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "settings-file", text: "Settings file", level: 2 },
	{ id: "system-instructions", text: "System instructions", level: 2 },
	{ id: "prompt-integration", text: "Prompt integration", level: 2 },
];

export default function GeminiPage() {
	return (
		<DocPage title="Gemini CLI" toc={toc}>
			<p>Configure Gemini CLI to use ROLES.md in your project.</p>

			<h2 id="settings-file">Settings file</h2>
			<p>
				Add to your <code>.gemini/settings.json</code>:
			</p>
			<CodeBlock>{`{
  "contextFileName": "ROLES.md"
}`}</CodeBlock>

			<h2 id="system-instructions">System instructions</h2>
			<p>Add role-awareness to system instructions:</p>
			<CodeBlock>{`{
  "systemInstruction": "Read ROLES.md. Apply the appropriate role based on the task type."
}`}</CodeBlock>

			<h2 id="prompt-integration">Prompt integration</h2>
			<p>Reference roles directly in prompts:</p>
			<CodeBlock>
				Using the Implementer role from ROLES.md, implement...
			</CodeBlock>
		</DocPage>
	);
}
