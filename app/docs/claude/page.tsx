import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "using-claude-md", text: "Using CLAUDE.md", level: 2 },
	{ id: "memory-integration", text: "Memory integration", level: 2 },
	{ id: "subagent-configuration", text: "Subagent configuration", level: 2 },
];

export default function ClaudePage() {
	return (
		<DocPage title="Claude Code" toc={toc}>
			<p>Configure Claude Code to use ROLES.md in your project.</p>

			<h2 id="using-claude-md">Using CLAUDE.md</h2>
			<p>
				Add to your <code>CLAUDE.md</code> file:
			</p>
			<CodeBlock>{`## Roles

Read ROLES.md and apply the appropriate role for each task.`}</CodeBlock>
			<p>
				Claude Code automatically reads CLAUDE.md, making this the most seamless
				integration.
			</p>

			<h2 id="memory-integration">Memory integration</h2>
			<p>Claude Code&apos;s memory system can remember role preferences:</p>
			<CodeBlock>
				Remember: For code implementation tasks, use the Implementer role from
				ROLES.md.
			</CodeBlock>

			<h2 id="subagent-configuration">Subagent configuration</h2>
			<p>
				When Claude Code spawns subagents, each can operate under a different
				role:
			</p>
			<CodeBlock>{`## Subagent Roles

When delegating tasks:
- Planning tasks: Use Architect role
- Implementation tasks: Use Implementer role
- Review tasks: Use Reviewer role`}</CodeBlock>
		</DocPage>
	);
}
