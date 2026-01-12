import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen bg-bg text-fg px-6 py-16 md:px-12 md:py-24">
			<div className="mx-auto max-w-2xl">
				<header className="mb-10">
					<h1 className="text-accent text-2xl font-medium tracking-tight">
						/ROLES.md
					</h1>
					<p className="text-muted mt-2 text-sm">
						Define what your AI agent is responsible for.
					</p>
					<Link
						href="/docs"
						className="inline-flex items-center gap-2 mt-6 text-sm text-muted hover:text-accent transition-colors"
					>
						<span>Read the docs</span>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden="true"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</Link>
				</header>

				<section className="space-y-8 text-sm leading-relaxed">
					<p>
						A simple, open convention for defining the responsibilities an AI
						agent is operating under. Where AGENTS.md provides project-specific
						context and instructions, this answers a different question: what
						role is the agent responsible for fulfilling while it works.
					</p>

					<p>
						Roles describe responsibility, authority, and constraints rather
						than personality or tone. They define what the agent should focus
						on, what it is allowed to do, what it must avoid, and when work
						should be handed off.
					</p>

					<div className="border border-border bg-card p-4">
						<p className="text-muted mb-3 text-xs uppercase tracking-wider">
							Example
						</p>
						<pre className="text-accent overflow-x-auto text-xs leading-loose">
							{`# Implementer

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
- Escalate to Architect for design questions`}
						</pre>
					</div>

					<p>
						People already use roles when working with AI agents. Prompts like
						"act as a reviewer" or "you are a senior engineer" are common, but
						they are informal, duplicated across chats, and easy to drift over
						time. This convention provides a dedicated place to define your own
						roles once, in a way that can be reused across tasks, agents, and
						tools.
					</p>

					<p className="text-muted">
						A role is not a subagent. Subagents are autonomous entities
						delegated by a primary agent to handle specific tasks, each with
						their own context window and decision-making scope. A role is a
						behavioral contract that any agent operates under.
					</p>

					<div className="border-l-2 border-border py-1 pl-4">
						<p className="text-muted text-xs">
							Complements existing primitives. AGENTS.md provides project
							context. Skills define capabilities. Roles define responsibility.
						</p>
					</div>

					<p className="text-muted">
						Intentionally lightweight. No required fields, schemas, or formats.
						A small file that quietly improves how agents work.
					</p>
				</section>

				<footer className="mt-16 border-t border-border pt-8">
					<a
						href="https://github.com/visible/roles.md"
						className="text-muted hover:text-accent transition-colors"
						aria-label="GitHub"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="currentColor"
							role="img"
							aria-labelledby="github-title"
						>
							<title id="github-title">GitHub</title>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
						</svg>
					</a>
				</footer>
			</div>
		</main>
	);
}
