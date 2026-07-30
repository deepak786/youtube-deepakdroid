# The Problem

I had a Flutter application that used Firebase Realtime Database.

Everything worked as expected until users logged out and logged back in with a different account.

Then the application started throwing:

[firebase_database/permission-denied]

At first, I assumed it was a Firebase Security Rules issue.

But the real problem was somewhere else.