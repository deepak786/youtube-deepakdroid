# I Built Two Search Engines. They Failed in Opposite Ways.

Keyword matches words. Vector matches meaning. Same question: keyword misses “app freezes on payment,” a real embedding model finds the runbook. Hybrid runs both because one search box also gets names like error codes.

Watch: https://www.youtube.com/watch?v=6SRTtxwdhTc

## Walkthrough

| File | Topic |
|------|--------|
| `01-intro.md` | Two engines compete |
| `02-round-1.md` | Keyword search |
| `03-why-keyword.md` | Matching words is not matching meaning |
| `04-round-2.md` | Vector search (`all-MiniLM-L6-v2`, 384-d) |
| `05-embeddings-2d.md` | 2D sketch of nearby = similar |
| `06-why-hybrid.md` | Sentences and names in the same box |
| `07-final-round.md` | Hybrid: vector for the sentence, keyword for the ID |
| `08-summary.md` | Different questions, so you run both |

## Run

```bash
npm install
node search.js keyword
node search.js vector
node search.js hybrid
```

The first `vector` run downloads the model.
