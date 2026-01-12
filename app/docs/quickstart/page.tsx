import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "create-the-file", text: "Create the file", level: 2 },
	{ id: "reference-the-role", text: "Reference the role", level: 2 },
	{ id: "add-more-roles", text: "Add more roles", level: 2 },
	{ id: "best-practices", text: "Best practices", level: 2 },
];

export default function QuickStartPage() {
	return (
		<DocPage title="Quick Start" toc={toc}>
			<p>Get started with ROLES.md in under a minute.</p>

			<h2 id="create-the-file">Create the file</h2>
			<p>
				Create a <code>ROLES.md</code> file in your project root:
			</p>
			<CodeBlock>{`# Implementer

## Responsibilities
- Write code based on provided specifications
- Follow project conventions and patterns
- Keep changes focused and minimal

## Allowed
- Create and modify source files
- Run tests and linters
- Ask clarifying questions

## Forbidden
- Approve or merge changes
- Modify CI/CD configuration
- Make architectural decisions

## Handoff
- Pass to Reviewer when implementation is complete
- Escalate to Architect for design questions`}</CodeBlock>

			<h2 id="reference-the-role">Reference the role</h2>
			<p>Tell your AI assistant to use the role:</p>
			<CodeBlock>
				Use the Implementer role from ROLES.md for this task.
			</CodeBlock>
			<p>
				Or configure your tool to automatically read the file. See the Configure
				section for tool-specific instructions.
			</p>

			<h2 id="add-more-roles">Add more roles</h2>
			<p>Expand your ROLES.md with additional roles as needed:</p>
			<CodeBlock>{`# Reviewer

## Responsibilities
- Review code for correctness
- Identify potential bugs
- Check conventions

## Allowed
- Read all files
- Run tests
- Comment on quality

## Forbidden
- Modify files directly
- Approve own changes

## Handoff
- Return to Implementer with feedback`}</CodeBlock>

			<h2 id="best-practices">Best practices</h2>
			<p>
				<strong>Start simple.</strong> Begin with one or two roles. Add
				complexity only when needed.
			</p>
			<p>
				<strong>Be specific.</strong> Vague responsibilities lead to
				unpredictable behavior. &quot;Write good code&quot; is less useful than
				&quot;Write code that follows the project&apos;s TypeScript
				conventions&quot;.
			</p>
			<p>
				<strong>Define boundaries clearly.</strong> The Forbidden section is
				often more important than Allowed.
			</p>
		</DocPage>
	);
}
