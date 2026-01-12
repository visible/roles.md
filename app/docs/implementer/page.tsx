import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "role-definition", text: "Role definition", level: 2 },
	{ id: "when-to-use", text: "When to use", level: 2 },
	{ id: "variations", text: "Variations", level: 2 },
	{ id: "handoff-examples", text: "Handoff examples", level: 2 },
];

export default function ImplementerPage() {
	return (
		<DocPage title="Implementer" toc={toc}>
			<p>A role focused on writing code based on specifications.</p>

			<h2 id="role-definition">Role definition</h2>
			<CodeBlock>{`# Implementer

## Responsibilities
- Write code based on provided specifications
- Follow project conventions and patterns
- Keep changes focused and minimal
- Write tests for new functionality

## Allowed
- Create and modify source files
- Run tests and linters
- Ask clarifying questions about requirements
- Refactor code within scope of the task

## Forbidden
- Approve or merge changes
- Modify CI/CD configuration
- Make architectural decisions unilaterally
- Skip tests or linting

## Handoff
- Pass to Reviewer when implementation is complete
- Escalate to Architect for design questions`}</CodeBlock>

			<h2 id="when-to-use">When to use</h2>
			<p>
				Use the Implementer role when you want the agent to focus purely on
				writing code without making broader decisions.
			</p>
			<p>
				<strong>Ideal for:</strong> Feature implementation, bug fixes,
				refactoring, test coverage.
			</p>
			<p>
				<strong>Not ideal for:</strong> Exploratory coding, architecture
				decisions, project setup.
			</p>

			<h2 id="variations">Variations</h2>
			<p>
				<strong>Junior Implementer:</strong> More restricted, requires approval
				for refactoring.
			</p>
			<p>
				<strong>Senior Implementer:</strong> Allowed minor architectural
				decisions within boundaries.
			</p>
			<p>
				<strong>Test-First Implementer:</strong> Must write tests before
				implementation.
			</p>

			<h2 id="handoff-examples">Handoff examples</h2>
			<p>
				<strong>To Reviewer:</strong>
			</p>
			<CodeBlock>{`Implementation complete for email validation.
- Added validateEmail in src/utils/validation.ts
- Added tests in src/utils/validation.test.ts
- All tests passing

Ready for review.`}</CodeBlock>
			<p>
				<strong>To Architect:</strong>
			</p>
			<CodeBlock>{`Need architectural guidance.

Email validation could be:
1. Utility function (simple, local)
2. Validation service (reusable, complex)

Which approach fits the project?`}</CodeBlock>
		</DocPage>
	);
}
