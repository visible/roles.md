```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   /ROLES.md                                                  │
│                                                              │
│   define what your ai agent is responsible for               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

```bash
> what is this?

  a simple, open convention for defining ai agent responsibilities.
  create your own roles. reuse them across tasks, agents, and tools.

> why?

  prompts like "act as a reviewer" are informal and drift over time.
  this gives you a dedicated place to define roles once.

> example?

  # Implementer

  ## Responsibilities
  - Write code based on specifications
  - Follow project conventions

  ## Allowed
  - Create and modify source files
  - Run tests and linters

  ## Forbidden
  - Approve or merge changes
  - Make architectural decisions

  ## Handoff
  - Pass to Reviewer when complete

> usage?

  create a ROLES.md in your project root.
  reference it: "Use the Implementer role from ROLES.md."

> docs?

  https://roles.md/docs
```

```
mit license
```
