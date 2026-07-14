/*
====================================================
How WhatsApp Delivers Your Messages
====================================================
*/


/*
----------------------------------------------------
The Problem
----------------------------------------------------

Deepak sends:

"Hello 👋"

↓

Alice is Offline

↓

What should WhatsApp do?

*/


/*
----------------------------------------------------
Wrong Ideas
----------------------------------------------------

❌ Keep retrying forever

❌ Delete the message

Need a better solution.

*/


/*
----------------------------------------------------
A Better Idea
----------------------------------------------------

Store the message
temporarily until
Alice comes online.

*/


/*
----------------------------------------------------
Message Flow
----------------------------------------------------

Deepak

↓

WhatsApp Server

↓

Waiting Area

↓

Alice (Offline)

*/


/*
----------------------------------------------------
Alice Comes Online
----------------------------------------------------

Waiting Area

↓

Deliver Message

↓

Alice

*/


/*
----------------------------------------------------
What Is This Waiting Area?
----------------------------------------------------

Message 1

↓

Message 2

↓

Message 3

First In

↓

First Out

This data structure is called:

Queue

*/


/*
----------------------------------------------------
Real World
----------------------------------------------------

✓ Email

✓ Payment Systems

✓ Notifications

All use Queues.

*/


/*
----------------------------------------------------
Interactive demo
----------------------------------------------------

https://play.deepakdroid.xyz/whatsapp-delivery/

*/