# Google's Approach: Open Knowledge Format (OKF)

## 🤔 What If We Never Broke The Files Apart?

RAG turns your documentation into chunks.

What if the files stayed **files**?

---

## ✂️ What RAG Does To Your Docs

```text
order-service.md
loyalty-service.md
kafka-topics.md

        │
        ▼

Chunk   Chunk   Chunk   Chunk

        │
        ▼

Vector Database
```

The files are gone.

Only fragments are left.

---

## 📁 What OKF Does Instead

The files stay files.

```text
okf-bundle/

├── services/
│   ├── order-service.md
│   └── loyalty-service.md
├── kafka/
│   └── orders-completed.md
└── tables/
    └── loyalty-points.md
```

One concept per file.

Files link to each other.

That's the whole idea.

---

## 📝 One Concept File

```markdown
---
type: Service
title: Loyalty Service
description: Updates customer loyalty points from order events.
---

Consumes [orders.completed](/kafka/orders-completed.md).

Writes to [loyalty_points](/tables/loyalty-points.md).
```

Three parts:

- `type` — what kind of thing this is
- `description` — so it can be found
- **links** — so an agent can open the next file

That's the format. Markdown and YAML. Nothing else.

> What's missing is a **format**, not another service.

---

## 🔍 So What Actually Changed?

Not the facts.

Your docs may already mention Loyalty Service.

What changed is **what survives**.

```text
RAG pipeline

order-service.md
      │  chunked
      ▼
"...Loyalty Service updates points..."

  ← just text in a chunk
  ← nothing to click
```

```text
OKF

order-service.md
      │  still a file
      ▼
[Loyalty Service](/services/loyalty-service.md)

  ← a real path
  ← the agent can open it
```

Chunking flattens a link into characters.

Keeping files keeps it a **door**.

---

## 🧭 How Does The Agent Find Anything?

The same way a coding agent works in your repo.

```text
list the folder      → see what exists
read a description   → pick the right one
filter on type       → "show me all Services"
follow a link        → open the next file
```

No embeddings required.

A curated bundle is a few hundred small files.

Small enough to navigate — not guess.

---

## 🧠 Our Question Again

> Which service updates customer loyalty points?

```text
order-service.md
      │ publishes
      ▼
orders-completed.md
      │ consumed by
      ▼
loyalty-service.md   ← the answer
```

The agent walks the path instead of ranking paragraphs.

---

## ⚠️ Two Honest Points

**OKF doesn't do the walking.**

It stores the links. An agent has to follow them.

**And somebody has to write them.**

A person, a pipeline, or an enrichment agent.

OKF just keeps them.

---

## 📌 Key Idea

RAG gives the model **chunks in a database**.

OKF gives the agent **files it can open**.
