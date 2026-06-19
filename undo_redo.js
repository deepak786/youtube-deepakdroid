/*
====================================================
UNDO / REDO SYSTEM
How Ctrl + Z Really Works
====================================================
*/


/*
----------------------------------------------------
Step 1: The Problem
----------------------------------------------------

Hello

↓

Hello World

↓

Hello World!!!

Now the user presses Ctrl + Z.

Question:

How do we know that the previous state was:

Hello World ?
*/


/*
----------------------------------------------------
Step 2: Store History
----------------------------------------------------

Instead of storing only the current text,
we store every state.

History:

Hello

↓

Hello World

↓

Hello World!!!
*/


/*
----------------------------------------------------
Step 3: Undo Stack
----------------------------------------------------

TOP
------------------
Hello World!!!
Hello World
Hello
------------------

The latest state is always on top.

When we Undo,
we remove the top state.
*/


/*
----------------------------------------------------
Step 4: After Undo
----------------------------------------------------

User presses Ctrl + Z

Undo Stack

TOP
------------------
Hello World
Hello
------------------

Redo Stack

TOP
------------------
Hello World!!!
------------------

The removed state is moved to the Redo Stack.
*/


/*
----------------------------------------------------
Step 5: After Redo
----------------------------------------------------

User presses Ctrl + Y

Undo Stack

TOP
------------------
Hello World!!!
Hello World
Hello
------------------

Redo Stack

-------------

--------------

The state is moved back.
*/


/*
----------------------------------------------------
Step 6: Why Clear Redo?
----------------------------------------------------

History:

Hello

↓

Hello World

↓

Hello World!!!

Undo

↓

Hello World

Redo Stack:

Hello World!!!

Now user types:

Hello Universe

History becomes:

Hello

↓

Hello World

↓

Hello Universe

The old Redo path is no longer valid.

Redo Stack:

(empty)
*/


/*
----------------------------------------------------
Step 7: Implementation
----------------------------------------------------
*/

class UndoRedo {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }

    addState(state) {
        this.undoStack.push(state);
        this.redoStack = [];
    }

    undo() {
        if(this.undoStack.length <= 1){
            return null;
        }

        const top = this.undoStack.pop();
        this.redoStack.push(top);

        return this.undoStack[this.undoStack.length - 1];
    }

    redo() {
        if(this.redoStack.length === 0){
            return null;
        }

        const top = this.redoStack.pop();
        this.undoStack.push(top);

        return top;
    }
}


/*
----------------------------------------------------
Step 8: Demo
----------------------------------------------------
*/

const editor = new UndoRedo();

editor.addState("Hello");
editor.addState("Hello World");
editor.addState("Hello World!!!");

console.log("State");
console.log(editor.undoStack);
console.log(editor.redoStack);

console.log("Undo");
console.log(editor.undo());

console.log("\n\nState");
console.log(editor.undoStack);
console.log(editor.redoStack);

console.log("\nUndo");
console.log(editor.undo());

console.log("\n\nState");
console.log(editor.undoStack);
console.log(editor.redoStack);

console.log("\nRedo");
console.log(editor.redo());

console.log("\n\nState");
console.log(editor.undoStack);
console.log(editor.redoStack);