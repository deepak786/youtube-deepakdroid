# Final Round — Hybrid

Keyword hits first. Vector fills the gaps.

**Sentence**

> app freezes on payment

```text
Hybrid search
  checkout-timeout.md          vector   0.415
```

No keyword hit. Vector brings the runbook.

**Name**

> ERROR_504_GATEWAY

```text
Hybrid search
  checkout-timeout.md          keyword
```

Exact ID. Keyword brings the same file.

| | Keyword | Vector | Hybrid |
|---|---|---|---|
| `app freezes on payment` | ❌ | ✅ | ✅ vector |
| `ERROR_504_GATEWAY` | ✅ | | ✅ keyword |
