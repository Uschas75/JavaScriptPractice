
// console.log(type(new (function Custom() {})())); // 'Custom'
/******
 * 
 task: 39
 You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next
Notes:

do NOT mutate the nodes!
in some cases there may be only a loop, with no dangling piece
Thanks to shadchnev, I broke all of the methods from the Hash class.

Don't miss dmitry's article in the discussion after you pass the Kata !! 
// Codewars expects a function named `loop_size`
 */

/**
 * task: 39- step 1
 * tep 1: Understand the Node

Concept: A linked list is made of nodes, where each node stores data and a reference (pointer) to the next node.

Exercise 1:
Define a class Node with two attributes: data and next.
Create a node with some data and print its values.
Question: Create a node with the value 10. What is its next value?
 * 
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let node = new Node(10);
console.log(node.data);

/**
 * task: 39- step 2
Step 2: Create a Simple Linked List

Concept: A linked list starts with a head that points to the first node.

Exercise 2:

Define a class LinkedList with an attribute head.

Add a method print_list() to print all node values.

Question: Create a linked list and add three nodes with values 10, 20, 30. Print the list.


 * 
 */


// list.print_list(); // null

/**
 * task: 39- step 3


Step 3: Insert Nodes

Concept: Nodes can be inserted at the beginning, end, or specific position.
Exercise 3:

Add methods to insert:

At the beginning

At the end

At a specific position
Question:
Insert 5 at the beginning of your linked list. Print the list.

Insert 40 at the end. Print the list.

Insert 25 at position 3. Print the list.
 * 
 */


class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at a specific position
  insertAtPosition(position, data) {
    if (position < 1) {
      console.log("Invalid position");
      return;
    }
    if (position === 1) {
      this.insertAtBeginning(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 1;

    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("Position out of range");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Print the linked list
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// Example usage
const list = new LinkedList();

// Insert 5 at the beginning
list.insertAtBeginning(5);
console.log("After inserting 5 at the beginning:");
list.printList();

// Insert 40 at the end
list.insertAtEnd(40);
console.log("After inserting 40 at the end:");
list.printList();

// Insert 25 at position 3
list.insertAtPosition(3, 25);
console.log("After inserting 25 at position 3:");
list.printList();

// 10->20->30->null
/**
 * task: 39- step 4


Step 4: Delete Nodes

Concept: Deleting nodes requires changing pointers to remove references.

Exercise 4:

Add methods to delete a node by value or position.

Questions:

Delete node with value 20. Print the list.

Delete node at position 2. Print the list.
 * 
 */

/**
 * task: 39- step 5



Step 5: Search & Length

Concept: You can search for a value or count nodes.

Exercise 5:

Add methods:

search(value) → returns True/False

length() → returns number of nodes

Questions:

Search for 25 in your list.

Find the length of your linked list.
 */

/**
 * task: 39- step 5



Step 6: Advanced Operations

Concept: Now you can implement more advanced stuff:

Reverse the linked list

Detect a cycle

Merge two linked lists

Questions:

Reverse your linked list and print it.

Create another linked list with nodes 100, 200. Merge it with your first list. Print the final list.
 */
