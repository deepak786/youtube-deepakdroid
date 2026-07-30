# Lessons Learned

✓ Firebase wasn't the problem.

✓ The Security Rules were correct.

✓ The SDK wasn't broken.

The real issue was caching a DatabaseReference that contained user-specific state.

Whenever an object depends on authentication...

Treat it as session-scoped.

Don't keep it inside a long-lived singleton.