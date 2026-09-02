# Where RAG Starts to Break

## 🤔 Let's Ask Our Question Again

> Which service updates customer loyalty points?

---

## 🔍 Vector Search Retrieves

```text
✓ README.md

✓ order-service.md

✓ runbooks
```

Looks good...

---

## ❌ But It Misses

```text
✗ kafka-topics.md

✗ loyalty-service.md

✗ database-schema.md
```

Those documents never reach the LLM.

---

## 🤖 The AI Responds

> The **Order Service** updates customer loyalty points.

---

## ❌ But That's Wrong

The actual flow is:

```text
Order Service
       │
 Publishes Event
       │
       ▼
 Kafka Topic
       │
 Consumed By
       ▼
Loyalty Service
       │
 Updates
       ▼
 Database
```

The Order Service **doesn't** update customer loyalty points.

It only publishes an event.

The **Loyalty Service** performs the actual update.

---

## 😕 But Everything Was Documented...

The documentation wasn't missing.

The language model wasn't broken.

With only partial context, the model confidently gave the wrong answer.

So...

**What actually went wrong?**
