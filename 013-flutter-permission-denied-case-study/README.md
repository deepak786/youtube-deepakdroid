# Flutter Permission Denied Case Study

A Flutter app with Firebase Realtime Database started throwing `permission-denied` after users logged out and back in with a different account. Security rules and the SDK were fine — the bug was a singleton caching a `DatabaseReference` built with the previous user's UID.

Watch: https://youtu.be/mYnOa2mHH0A

## Walkthrough

| File | Topic |
|------|--------|
| `01-problem.md` | `permission-denied` after account switch |
| `02-investigation.md` | Rules and package versions look fine |
| `03-root-cause.md` | Singleton caches a UID-based path |
| `04-bad-code.md` | The problematic repository code |
| `05-explanation.md` | Why the stale reference fails for User B |
| `06-fix.md` | Resolve the reference lazily per call |
| `07-summary.md` | Treat auth-dependent objects as session-scoped |
