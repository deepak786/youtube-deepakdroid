/*
====================================================
LRU CACHE
Why Apps Load Faster?
====================================================
*/


/*
----------------------------------------------------
The Problem
----------------------------------------------------

Cache Size = 3

User Requests

A
B
C

Cache

A   B   C

User opens:

A (No database Call, since its already in memory.)

Now another request arrives:

D

Question:

Which item should we remove?
*/


/*
----------------------------------------------------
LRU Strategy
----------------------------------------------------

Initial Cache

A   B   C


Access A

↓

B   C   A


Insert D

↓

C   A   D


Remove:

B

(Least Recently Used)
*/


/*
----------------------------------------------------
Can we use Array?
----------------------------------------------------

Example:

[ "C", "A", "D" ]

Whenever something is accessed:

Find it.
Remove it.
Push it to the end.

Works. But...

Finding an item takes:

```
O(n)
```
*/


/*
----------------------------------------------------
What do we need?
----------------------------------------------------

We need TWO things.

✔ Find an item quickly

✔ Keep track of the most recently used item


JavaScript's Map gives us:

✔ Fast lookup
✔ Preserves insertion order

So for this video, we can build a simple LRU Cache using Map.
*/


/*
----------------------------------------------------
Implementation
----------------------------------------------------

How do we make an item the Most Recently Used?

Let's build it.
*/

class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(!this.cache.has(key)){
            return null;
        }

        const value = this.cache.get(key);

        // Make it most recently used by deleting it and putting it at the end.
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        if(this.cache.has(key)){
            this.cache.delete(key);
        }

        // Check if our cache is already full
        if(this.cache.size >= this.capacity){
            const leastRecentlyUsed = this.cache.keys().next().value;
            this.cache.delete(leastRecentlyUsed);
        }

        this.cache.set(key, value);
    }

    print() {
        console.log(
            [...this.cache.keys()]
        );
    }

}


/*
----------------------------------------------------
Demo
----------------------------------------------------
*/

const cache = new LRUCache(3);

/*
Expected Output

[ 'A', 'B', 'C' ]

Access A -> [ 'B', 'C', 'A' ]
Insert D -> [ 'C', 'A', 'D' ]

*/

cache.put("A", "User A");
cache.put("B", "User B");
cache.put("C", "User C");
cache.print();

// Access A
console.log(cache.get("A"));
cache.print();

// Insert D
cache.put("D", "User D");
cache.print();

/*
-----------------------------
Production
-----------------------------

HashMap + Doubly Linked list

*/