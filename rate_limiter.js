/*
====================================================
RATE LIMITER
How APIs Prevent Abuse
====================================================
*/


/*
----------------------------------------------------
The Problem
----------------------------------------------------

API Rule: Maximum 3 requests per minute


Request 1 ✅
Request 2 ✅
Request 3 ✅
Request 4 ❌

Question:
How do we enforce this rule?

*/

/*
----------------------------------------------------
First approach
----------------------------------------------------

Store each request/timestamp

[
    "10:01",
    "10:10",
    "10:25"
]

*/

/*
----------------------------------------------------
Store State Per User
----------------------------------------------------

user_123

{
    count: 3,
    windowStart: 10:00
}

Instead of storing every request,
we store:

- count
- windowStart
*/