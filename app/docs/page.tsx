import { CodeBlock } from "@/components/code-block";
import { Defines } from "@/components/defines";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "what-is-a-role", text: "What is a role?", level: 2 },
	{ id: "core-principles", text: "Core principles", level: 2 },
	{ id: "separation-of-concerns", text: "Separation of concerns", level: 3 },
	{ id: "explicit-boundaries", text: "Explicit boundaries", level: 3 },
	{ id: "handoff-rules", text: "Handoff rules", level: 3 },
	{ id: "roles-vs-subagents", text: "Roles vs Subagents", level: 2 },
	{ id: "roles-vs-skills", text: "Roles vs Skills", level: 2 },
	{ id: "file-structure", text: "File structure", level: 2 },
];

export default function IntroductionPage() {
	return (
		<DocPage title="Introduction" toc={toc}>
			<p>
				ROLES.md is a simple, open convention for defining the responsibilities
				an AI agent is operating under. Create your own roles that fit your
				workflow.
			</p>
			<p>
				Where AGENTS.md provides project-specific context and instructions,
				ROLES.md answers a different question: what role is the agent
				responsible for fulfilling while it works.
			</p>

			<h2 id="what-is-a-role">What is a role?</h2>
			<p>
				A role describes responsibility, authority, and constraints rather than
				personality or tone. It defines:
			</p>
			<Defines
				items={[
					"What the agent should focus on",
					"What it is allowed to do",
					"What it must avoid",
					"When work should be handed off",
				]}
			/>

			<h2 id="core-principles">Core principles</h2>

			<h3 id="separation-of-concerns">Separation of concerns</h3>
			<p>
				Roles separate what an agent can do from what it is responsible for
				doing. An agent may have the capability to modify any file, but the
				Reviewer role restricts it to evaluation only.
			</p>

			<h3 id="explicit-boundaries">Explicit boundaries</h3>
			<p>
				Every role should clearly state what actions are allowed and forbidden.
				Ambiguity leads to unpredictable behavior.
			</p>

			<h3 id="handoff-rules">Handoff rules</h3>
			<p>
				Roles define when work should transfer to another role. This prevents
				scope creep and ensures the right expertise is applied at each stage.
			</p>

			<h2 id="roles-vs-subagents">Roles vs Subagents</h2>
			<p>
				A role is not a subagent. Subagents are autonomous entities delegated by
				a primary agent to handle specific tasks, each with their own context
				window and decision-making scope.
			</p>
			<p>
				A role is a behavioral contract that any agent operates under. The same
				agent can switch roles without spawning a new entity.
			</p>

			<h2 id="roles-vs-skills">Roles vs Skills</h2>
			<p>
				Skills describe what an agent knows how to do. A skill might be
				&quot;write TypeScript&quot; or &quot;analyze logs&quot;. Roles describe
				what the agent is accountable for in a given context.
			</p>

			<h2 id="file-structure">File structure</h2>
			<p>A minimal ROLES.md file contains role definitions in Markdown:</p>
			<CodeBlock>{`# Implementer

## Responsibilities
- Write code based on specifications
- Follow project conventions

## Allowed
- Create and modify source files
- Run tests

## Forbidden
- Approve changes
- Modify CI/CD

## Handoff
- Pass to Reviewer when complete`}</CodeBlock>
		</DocPage>
	);
}
