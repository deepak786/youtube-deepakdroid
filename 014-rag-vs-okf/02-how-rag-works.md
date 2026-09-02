# How RAG Works

## 🤖 The Problem

A Large Language Model doesn't know your company's documentation.

It only knows what it was trained on.

So...

How can it answer questions about **your** system?

---

## 💡 The Solution: Retrieval-Augmented Generation (RAG)

Instead of retraining the model,

we give it the relevant documentation **at runtime**.

---

## 📚 Company Documentation

```text
company-docs/

├── README.md
├── order-service.md
├── kafka-topics.md
├── loyalty-service.md
├── database-schema.md
└── runbooks/
```

---

## ✂️ Step 1 — Split Into Chunks

Large documents are divided into smaller pieces.

```text
README.md
      │
      ▼

+--------------------+
| Chunk 1            |
+--------------------+

+--------------------+
| Chunk 2            |
+--------------------+

+--------------------+
| Chunk 3            |
+--------------------+
```

---

## 🧠 Step 2 — Create Embeddings

Each chunk becomes a numerical representation.

```text
Chunk 1 ─────► Embedding

Chunk 2 ─────► Embedding

Chunk 3 ─────► Embedding
```

These embeddings are stored inside a **Vector Database**.

---

## 🗄️ Step 3 — Store Everything

```text
Chunks

        │

        ▼

Embeddings

        │

        ▼

Vector Database
```

Now the documentation becomes searchable.

---

## ❓ Step 4 — User Asks a Question

> Which service updates customer loyalty points?

The question is also converted into an embedding.

---

## 🔍 Step 5 — Similarity Search

The Vector Database searches for the most similar chunks.

```text
Question

      │

      ▼

Vector Search

      │

      ▼

Top 5 Similar Chunks
```

---

## 🤖 Step 6 — Generate the Answer

The retrieved chunks are sent to the LLM.

```text
Question

+

Relevant Chunks

        │

        ▼

Large Language Model

        │

        ▼

Answer
```

---

## ✅ Why RAG Became So Popular

RAG allows AI models to answer questions about:

- Your documentation
- Internal APIs
- Company knowledge
- Databases
- Wikis

Without retraining the model.

For many applications,

this works extremely well.

But...

there's one important limitation.