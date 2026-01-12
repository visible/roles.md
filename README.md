# /ROLES.md

A simple, open convention for defining the responsibilities an AI agent is operating under.

```
roles.md
```

---

## What

Where `AGENTS.md` provides project-specific context and instructions, `ROLES.md` answers a different question: what role is the agent responsible for fulfilling while it works.

Roles describe responsibility, authority, and constraints rather than personality or tone.

## Why

People already use roles when working with AI agents. Prompts like "act as a reviewer" or "you are a senior engineer" are common, but they are informal, duplicated across chats, and easy to drift over time.

This convention provides a dedicated place to define roles once.

## Example Role

```markdown
# Implementer

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
- Escalate to Architect for design questions
```

## Usage

Create a `ROLES.md` file in your project root with your own custom roles. Define what makes sense for your workflow:

```
Use the Implementer role from ROLES.md for this task.
```

Start simple. One or two roles. Add more as your workflow evolves.

## Docs

[roles.md/docs](https://roles.md/docs)

## License

MIT
