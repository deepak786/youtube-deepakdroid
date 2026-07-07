/*
====================================================
How LinkedIn Knows Your
1st, 2nd & 3rd Connections
====================================================
*/


/*
----------------------------------------------------
The Problem
----------------------------------------------------

Deepak -> Alice, Bob
Alice -> Charlie
Bob -> David

- What kind of connections are Charlie and David to Deepak?

Charlie -> Emma

- What kind of connection is Emma to Deepak?

Important Question:
How LinkedIn calculates the connection level?
*/


/*
----------------------------------------------------
Can We Compare Everyone?
----------------------------------------------------

- LinkedIn has 1 Billion+ Users
- Compare every user with every other user?

*/


/*
----------------------------------------------------
Think Like a Graph
----------------------------------------------------

LinkedIn -> Graph

Person -> Node

Connection -> Edge



            Deepak
           /      \
      Alice        Bob
        |           |
    Charlie      David
        |
      Emma
*/


/*
----------------------------------------------------
Visit Level by Level
----------------------------------------------------

Level 0 (Deepak)

↓

Level 1 (Alice, Bob)

↓

Level 2 (Charlie, David)

↓

Level 3 (Emma)
*/


/*
----------------------------------------------------
The Aha Moment
----------------------------------------------------

Level 1 -> 1st Connection


Level 2 -> 2nd Connection


Level 3 -> 3rd Connection


This approach is called:

Breadth-First Search (BFS) - Explore the graph one level at a time
*/