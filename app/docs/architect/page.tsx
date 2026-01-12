import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

const toc = [
	{ id: "role-definition", text: "Role definition", level: 2 },
	{ id: "when-to-use", text: "When to use", level: 2 },
	{ id: "adr-format", text: "ADR format", level: 2 },
	{ id: "handoff-examples", text: "Handoff examples", level: 2 },
];

export default function ArchitectPage() {
	return (
		<DocPage title="Architect" toc={toc}>
			<p>A role focused on system design and technical decisions.</p>

			<h2 id="role-definition">Role definition</h2>
			<CodeBlock>{`# Architect

## Responsibilities
- Design system architecture and components
- Make technology and pattern decisions
- Define interfaces between systems
- Ensure scalability and maintainability

## Allowed
- Create and modify design documents
- Define project structure
- Choose technologies and dependencies
- Set coding standards

## Forbidden
- Implement features directly
- Skip documentation for decisions
- Make decisions without trade-off analysis
- Override security requirements

## Handoff
- Pass specifications to Implementer
- Consult Security for sensitive designs
- Escalate strategic decisions to Tech Lead`}</CodeBlock>

			<h2 id="when-to-use">When to use</h2>
			<p>
				Use the Architect role when you need focus on design decisions rather
				than implementation.
			</p>
			<p>
				<strong>Ideal for:</strong> New projects, API design, system migrations,
				technical planning.
			</p>
			<p>
				<strong>Not ideal for:</strong> Bug fixes, simple features, code
				reviews.
			</p>

			<h2 id="adr-format">ADR format</h2>
			<p>Document decisions using Architecture Decision Records:</p>
			<CodeBlock>{`# ADR-001: Use PostgreSQL

## Status
Accepted

## Context
Need reliable database with ACID compliance.

## Decision
Use PostgreSQL with read replicas.

## Consequences
- Proven reliability
- Requires database operations investment
- May need sharding at scale`}</CodeBlock>

			<h2 id="handoff-examples">Handoff examples</h2>
			<p>
				<strong>To Implementer:</strong>
			</p>
			<CodeBlock>{`Design complete for auth feature.

See ADR-001 for database decision.
See auth-design.md for components.

Implement AuthService first.`}</CodeBlock>
		</DocPage>
	);
}
