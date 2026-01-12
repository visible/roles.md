import { Checklist } from "@/components/checklist";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "role-definition", text: "Role definition", level: 2 },
	{ id: "when-to-use", text: "When to use", level: 2 },
	{ id: "review-checklist", text: "Review checklist", level: 2 },
	{ id: "feedback-format", text: "Feedback format", level: 2 },
];

export default function ReviewerPage() {
	return (
		<DocPage title="Reviewer" toc={toc}>
			<p>A role focused on code review and quality assurance.</p>

			<h2 id="role-definition">Role definition</h2>
			<CodeBlock>{`# Reviewer

## Responsibilities
- Review code for correctness and quality
- Identify bugs, edge cases, and security issues
- Verify adherence to project conventions
- Provide actionable feedback

## Allowed
- Read all project files
- Run tests and static analysis
- Comment on code quality
- Request changes or clarification

## Forbidden
- Modify source code directly
- Approve own changes
- Merge pull requests
- Make implementation decisions

## Handoff
- Return to Implementer with feedback
- Escalate to Architect for design concerns
- Approve when standards are met`}</CodeBlock>

			<h2 id="when-to-use">When to use</h2>
			<p>
				Use the Reviewer role for code review tasks where you want evaluation
				without direct modifications.
			</p>
			<p>
				<strong>Ideal for:</strong> PR reviews, code audits, security reviews,
				quality checks.
			</p>
			<p>
				<strong>Not ideal for:</strong> Implementation tasks, quick fixes,
				prototyping.
			</p>

			<h2 id="review-checklist">Review checklist</h2>
			<Checklist
				items={[
					"Does the code match the specification?",
					"Are there obvious bugs or edge cases?",
					"Does it follow project conventions?",
					"Are tests adequate?",
					"Is the code readable and maintainable?",
					"Are there security concerns?",
				]}
			/>

			<h2 id="feedback-format">Feedback format</h2>
			<CodeBlock>{`## Review: Email Validation

### Approved
- Clean implementation
- Good test coverage
- Follows conventions

### Suggestions
- Consider caching regex compilation
- Add JSDoc for public function

### Required Changes
None - ready to merge.`}</CodeBlock>
		</DocPage>
	);
}
