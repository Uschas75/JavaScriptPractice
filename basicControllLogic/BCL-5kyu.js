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
// Define Node class first

// Define Node class first
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define LinkedList class
class TestLinkedList {
  constructor() {
    this.head = null; // Points to the first node
  }

  // Insert node at the beginning
  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert node at the end (this is what you wanted to do)
  insertAtEnd(data) {
    let newNode = new Node(data);

    let current = this.head;

    if (!this.head) {
      this.head = newNode;
      return;
    }
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    return this.head;
  }
}

// // ✅ Test the class
// let testLinkedList_A = new TestLinkedList();

// console.log("Insert at beginning:");
// testLinkedList_A.insertAtBeginning(85);

// console.log("Insert 90 at end:");
// testLinkedList_A.insertAtEnd(90);

// console.log("Insert 770 at end:");
// testLinkedList_A.insertAtEnd(770);
// testLinkedList_A.insertAtEnd(870);
// testLinkedList_A.insertAtEnd(98570);

// // console.log("Print linked list:");
// // testLinkedList_A.printList();
// // console.log(testLinkedList_A.head);

// // console.dir(testLinkedList_A, { depth: null });

class LinkedList {
  constructor() {
    this.head = null;
  }
  atTheBegining(data) {
    let newNode = new Node(data);
    newNode.next = this.head;

    this.head = newNode; // the head always changes to the new node and the previous data  which was the head at
    // certain point of times becomes the next of the new node
  }
  atTheLast(data) {
    const newNode = new Node(data);
    // console.log(`--- Adding ${data} ---`);

    if (!this.head) {
      this.head = newNode;
      // console.log("List was empty, set as head");
      return;
    }

    let current = this.head;
    // console.log(`Starting at head: ${current.data}`);

    let steps = 0;
    while (current.next) {
      current = current.next;
      steps++;
      // console.log(`Step ${steps}: Moved to node with data: ${current.data}`);
    }

    // console.log(`Reached end at node: ${current.data}`);
    current.next = newNode;
    // console.log(`Added ${data} after ${current.data}`);
  }

  /**
   * Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.
   */

  middleNode() {
    {
      let nodeCount = 0;
      let current = this.head;
      while (current) {
        nodeCount++;
        current = current.next;
      }
      let middleNode = nodeCount / 2;
      if (Number.isInteger(middleNode)) {
        return middleNode;
      }
    }
  }
}
let ll = new LinkedList();
ll.atTheBegining(10);
ll.atTheBegining(20);
// ll.atTheBegining(30);
ll.atTheLast(40);
ll.atTheLast(50);
ll.atTheLast(60);
ll.atTheLast(70);
ll.atTheLast(80);
ll.atTheLast(90);
ll.atTheLast(100);
console.dir(ll, { depth: null }); // 30 -> 20 -> 10 -> null
console.log("Middle Node Data:", ll.middleNode()); // Should print 50
