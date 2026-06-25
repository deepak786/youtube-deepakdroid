/*
====================================================
RATE LIMITER
How APIs Prevent Abuse

- 429 Too many requests
- Rate limit exceeded
====================================================
*/

/*
----------------------------------------------------
Simple rule
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

Store each request timestamp

[
    "2026-06-20 10:01:10",
    "2026-06-20 10:01:20",
    "2026-06-20 10:01:30",
    ...
]

*/

/*
----------------------------------------------------
Store State Per User
----------------------------------------------------

user_123 : {
    count: 3,
    windowStart: "2026-06-20 10:01:10"
}

*/

// IMPLEMENTATION

class RateLimiter {
    constructor(limit, windowMs) {
        this.limit = limit;
        this.windowMs = windowMs;
        this.users = new Map();
    }

    // Helper function to check if we allow the request or not to this user
    allowRequest(userId) {
        const now = new Date();

        if(!this.users.get(userId)){
            this.users.set(userId, {
                count: 1,
                windowStart: now,
            });

            return true;
        }

        const user = this.users.get(userId);
        if(now - user.windowStart > this.windowMs){
            user.count = 1;
            user.windowStart = now;

            return true;
        }

        if(user.count >= this.limit){
            return false;
        }

        user.count++;
        return true;
    }
}


// DEMO

// 3 requests per minute
const limiter = new RateLimiter(6, 15000);

let requestId = 0;

const interval = setInterval(() => {
    requestId++;
    const allowed = limiter.allowRequest("user123");
    console.log(allowed ? `Request ${requestId} allowed` : `Request ${requestId} rejected`);

    if(requestId === 20){
        clearInterval(interval);
        console.log("Stopped");
    }
}, 1000);
