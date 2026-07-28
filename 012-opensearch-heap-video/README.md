# OpenSearch JVM Heap Spike

How a single sort on `_id` pushed OpenSearch JVM memory pressure from ~60% to nearly 80%: metadata fields don't use Doc Values, so sorting builds Fielddata on the heap. Prefer sorting on a keyword field instead.

Watch: https://youtu.be/pUlVhKSgMgQ

## Walkthrough

| File | Topic |
|------|--------|
| `01-problem.md` | Sudden JVM memory pressure spike |
| `02-health.md` | Cluster health still green |
| `03-fielddata.md` | `_id` consuming gigabytes of fielddata |
| `04-query.js` | The problematic query (`sort` by `_id`) |
| `05-explanation.md` | Why `_id` sorting uses heap |
| `06-fix.js` | Fix: sort by `id.keyword` |
| `07-summary.md` | Production recommendations |
