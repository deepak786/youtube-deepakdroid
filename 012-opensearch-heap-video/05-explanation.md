# Why did sorting by `_id` use so much heap?

The query looked like this:

```js
sort: [{ _id: "asc" }]
```

At first glance, this looks harmless.

But `_id` is a **metadata field**.

It does **not** use **Doc Values** for sorting.

Instead, OpenSearch builds **Fielddata**.

---

Sorting by `_id`

↓

Build Fielddata

↓

Store in JVM Heap

↓

Heap usage increases

## Rule

❌ Don't sort by `_id`