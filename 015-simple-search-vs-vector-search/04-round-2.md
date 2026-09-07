# Round 2 — Vector

A real model turns each description into **384 numbers**.

Nearby numbers mean similar meaning.

> app freezes on payment

```text
Simple search
  (no results)

Vector search
  checkout-timeout.md          0.415
  card-processor-latency.md    0.266
  cart-session.md              0.243
  stripe-webhook-retries.md    0.209
```

The words still miss.

Meaning finds the runbook.

| | Keyword | Vector |
|---|---|---|
| Round 1 `app freezes on payment` | ❌ | |
| Round 2 `app freezes on payment` | ❌ | ✅ |
| Final | | |
