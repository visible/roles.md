import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "configuration-file", text: "Configuration file", level: 2 },
	{ id: "command-line", text: "Command line", level: 2 },
	{ id: "architect-mode", text: "Architect mode", level: 2 },
];

export default function AiderPage() {
	return (
		<DocPage title="Aider" toc={toc}>
			<p>Configure Aider to use ROLES.md in your project.</p>

			<h2 id="configuration-file">Configuration file</h2>
			<p>
				Add to your <code>.aider.conf.yml</code>:
			</p>
			<CodeBlock>read: ROLES.md</CodeBlock>

			<h2 id="command-line">Command line</h2>
			<p>Read the file when starting Aider:</p>
			<CodeBlock>aider --read ROLES.md</CodeBlock>
			<p>Or add during a session:</p>
			<CodeBlock>/read ROLES.md</CodeBlock>

			<h2 id="architect-mode">Architect mode</h2>
			<p>Aider&apos;s architect mode pairs well with the Architect role:</p>
			<CodeBlock>aider --architect --read ROLES.md</CodeBlock>
			<p>Then in chat:</p>
			<CodeBlock>
				Apply the Architect role. Focus on design decisions.
			</CodeBlock>
		</DocPage>
	);
}
