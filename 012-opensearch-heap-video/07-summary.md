# Production Recommendations

## ✅ Avoid sorting by `_id`

```js
sort: [{ "_id": "asc" }]
```

Reason:
- Builds Fielddata
- Uses JVM Heap

---

## ✅ Prefer keyword fields

```js
sort: [{ "id.keyword": "asc" }]
```

Reason:
- Uses Doc Values
- Minimal Heap Usage

---

## Final Takeaway

A single line of code caused gigabytes of JVM heap usage.

Understanding how OpenSearch stores and sorts fields is more important than simply memorizing the fix.