# Fielddata Usage

```http
GET _cat/fielddata?v
```

```text
field                 size
--------------------------------
clientId.keyword      0b
clientName.keyword    0b
jobId.keyword         0b
source.keyword        0b
type.keyword          7.9kb
_id                  602.4mb
_id                    2.6gb
_id                    1.6gb
_id                    602mb
_id                    1.4gb
_id                    2.7gb
```

Observation:

- Almost every `keyword` field uses **0 bytes**.
- `_id` alone is using **multiple gigabytes** of fielddata.