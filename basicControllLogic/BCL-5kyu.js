//------------------------Fresh Start------------------------//
//Simple Task: Draw a linked list with 3 nodes containing values 10, 20, 30. Label each part (data, next, head).

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
/**
//manually linking nodes
*/
node1.next = node2;
node2.next = node3;

//Simple Task: Visiting each node from head to end.
function traverse(head) {
  let current = head;
  //Simple Task: Write a function that counts how many nodes are in a linked list.
  let count = 0;
  let result = "";
  while (current !== null) {
    result += current.data + " -> ";
    count++;
    current = current.next;
  }
  result += "null";
  console.log(count);
  return console.log(result);
}

//SimpleTask : Implement insertion at beginning

function insertAtBeginning(head, data) {
  let newNode = new Node(data);

  newNode.next = head;
  node1 = newNode; // Update head to new node
  return newNode;
}
insertAtBeginning(node1, 5);
insertAtBeginning(node1, 569);
insertAtBeginning(node1, 30);

// //Simple task: Insert at end
// function insertAtEnd(head, data) {
//   let newNode = new Node(data);
//   let current = head;
//   while(current.next !== null){
//     current = current.next;
//   }
//   current.next = newNode;
//   return head;

// }

function insertAtEnd(head, data) {
  let newNode = new Node(data);

  let current = head;
  // Stop at the last node (where next is null)
  while (current.next !== null) {
    current = current.next;
  }
  // here, current.next is the last node's next of head. now we get the last node's next to point to newNode
  // the reason behind running this loop to get memmory address of last node is because we don't have direct access to it.
  //when we have access to last node, we can change its next to point to newNode
  // here current  = current.next does not depend on others because each node and its next are independent of each other.
  current.next = newNode;
  return head;
}

insertAtEnd(node1, 777);
insertAtEnd(node1, 569);
//Insert a node after a given node

function insertAfterNode(prevNode, data) {
  if (prevNode === null) {
    console.log("The given previous node cannot be null");
    return;
  }
  let newNode = new Node(data);
  let nextNode = prevNode.next;
  newNode.next = nextNode;
  prevNode.next = newNode;
  return node1;
}
// console.dir(insertAfterNode(node2, 902), {depth: null}); // Insert 99 after node with value 20
insertAfterNode(node3, 777);
// console.dir(node1, {depth: null}); // New head with value 5
// console.dir( insertAtEnd(node1, 909),{depth: null});
// traverse(node1); // Output: 5 -> 8 -> 3 -> 10 -> 20 -> 30 -> 99 -> null

//simple task: Delete the first node

function deleteFirstNode(head) {
  if (head === null) {
    return null;
  }
  node1 = head.next; // Update head to the next node
  return node1;
}

// console.dir(deleteFirstNode(node1), {depth: null}); // New head with value 8

//simple task: Delete the last node
function deleteLastNode(head) {
  if (head === null) {
    return null;
  }
  while (head.next !== null) {
    head = head.next;
    if (head.next.next === null) {
      head.next = null;
      break;
    }
  }

  return node1;
}

// console.dir(deleteLastNode(node1), {depth: null}); // List without last node

//simple task : Delete a node with specific value
function deleteNodeByValue(head, value) {
  if (head === null) {
    return null;
  }
  let current = head;
  while (current.next !== null) {
    if (current.next.data === value) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
  }
  return node1;
}
// console.dir(deleteNodeByValue(node1, 20), {depth: null}); // List without node with value 20

//1.2 Start with Problem 1.2 (Search Element) and solve them in the recommended order. After each problem, test with:
function searchElement(head, key) {
  while (head !== null) {
    if (head.data === key) {
      return true;
    }
    head = head.next;
  }
  return false;
}
// console.log(searchElement(node1, 20));   // true
// console.log(searchElement(node1, 100));  // false

// Problem 1.3 - Get Nth Node
function getNthNode(head, index) {
  let count = 0;
  while (head !== null) {
    if (count === index) {
      return head.data;
    }
    head = head.next;
    count++;
  }
  return null;
}

// console.log(getNthNode(node1, 2)); // 20
// console.log(getNthNode(node1, 5)); // null

//Problem 2.1: Insert at Position
function insertAtPosition(head, data, position) {
  let originalHead = head;
  let newNode = new Node(data);
  let count = 0;
  if (position === 0 && head !== null) {
    newNode.next = head;
    return newNode;
  } else if (position === 0 && head === null) {
    return newNode;
  }
  while (head !== null) {
    if (count + 1 === position) {
      newNode.next = head.next;
      head.next = newNode;
      return originalHead;
    }

    head = head.next;
    count++;
  }
  if (position > count) {
    return insertAtEnd(originalHead, data);
  }
}
insertAtPosition(node1, 555, 2);
insertAtPosition(node1, 585, 0);
// console.dir(insertAtPosition(node1, 555, 2), { depth: null }); // Insert 555 at position 2
// console.dir(insertAtPosition(node1, 585, 0), { depth: null }); // Insert 555 at position 0

//Problem 2.2 - Insert in Sorted List
function insertInSortedList(head, val) {
  if (head === null) {
    return new Node(val);
  }

  let arr = [];
  while (head.next !== null) {
    arr.push(head.data);
    head = head.next;
  }
  arr.push(val);
  arr.sort((a, b) => a - b);
  let inserted = new Node(arr[0]);
  let dummyHead = inserted;
  for (let i = 1; i <= arr.length - 1; i++) {
    inserted.next = new Node(arr[i]);
    inserted = inserted.next;
  }
  node1 = dummyHead;
  return node1;
}
// console.dir(node1, { depth: null }); // Original list
// insertInSortedList(node1, 11)
// console.dir(insertInSortedList(node1, 11), { depth: null }); // Insert 25 in sorted list
// console.dir(insertInSortedList(null, 5), { depth: null }); // Insert into empty list
// console.dir(insertInSortedList(node1, 10), { depth: null }); // Insert into single-node list

// Problem 2.3 - Delete Node from Sorted List
function deleteFromSortedList(head, val) {
  if (head === null) {
    return null;
  }
  if (head.data === val) {
    return head.next;
  }
  let current = head;
  while (current.next !== null) {
    if (current.next.data === val && current.next.next !== null) {
      current.next = current.next.next;
      return head;
    } else if (current.next.data === val && current.next.next === null) {
      current.next = null;
      return head;
    }
    current = current.next;
  }
}
// console.dir(node1, { depth: null }); // Original list
// deleteFromSortedList(node1, 20);
// console.dir(deleteFromSortedList(node1, 20), { depth: null }); // Delete 20 from sorted list
// console.dir(deleteFromSortedList(null, 5), { depth: null }); // Delete from empty list

//Problem 3.1 - Reverse Linked List

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next; // Store next node
    // for the next two lines , we are isolating current node and storeing it as the later node's next value
    current.next = prev; // Reverse the link
    prev = current; // Move prev to current
    // make the current's value the rest of the list to continue the process
    current = next; // Move to next node
  }

  return prev; // New head
}
// console.dir(reverseLinkedList(node1), { depth: null }); // Reversed list

// Problem 3.2 - Find Middle Node
function findMiddleNode(head) {
  let count = 0;
  let current = head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  let middleIndex = Math.floor(count / 2);
  current = head;
  let index = 0;
  while (current !== null) {
    if (index === middleIndex) {
      return current;
    }
    index++;
    current = current.next;
  }
  return current;
}
// console.dir(findMiddleNode(node1), { depth: null }); // Middle node
let circleNode = new Node(999);
function createCycle(head, circleNode) {
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = circleNode; // Creating a cycle for testing
  circleNode.next = head; // Pointing back to second node to form a cycle
  return circleNode;
}
// console.dir(createCycle(node1, circleNode), { depth: null }); // List with cycle

// Problem 3.3 - Detect Cycle in Linked List
function detectCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && slow !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
// console.log(detectCycle(node1)); // false

//Problem 3.4 - Remove Duplicates from Sorted Linked List

function removeDuplicates(head) {
  let current = head;
  let dummy = null;
  while (current !== null) {
    dummy = current;
    while (dummy !== null && dummy.next !== null) {
      if (current.data === dummy.next.data) {
        dummy.next = dummy.next.next; // Remove & STAY
      } else {
        dummy = dummy.next; // Move forward
      }
    }
    console.log(dummy);

    current = current.next;
  }
  return head;
}





// console.dir(node1, { depth: null });
// console.dir(removeDuplicates(node1), { depth: null }); // List without duplicates



//Problem 3.5: Find Intersection Point of Two Linked Lists

function findIntersection(headA, headB) {
 let pointerA = headA;
  let pointerB = headB;
  while(pointerA !== pointerB){
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }
  return pointerA; // or pointerB, they are equal here
}

let circleNode2 = new Node(999);
let nodeA1 = new Node(20);
let nodeA2 = new Node(30);
let nodeA3 = new Node(6354874);
let nodeA4 = new Node(777);
let nodeA5 = new Node(569);

nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = nodeA4
nodeA4.next = nodeA5;

let nodeB1 = new Node(100);
let nodeB2 = new Node(200);
let nodeB3 = new Node(300);
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;
nodeB3.next = nodeA3; // Creating intersection at nodeA3




// console.dir(node1, { depth: null });
// console.log(findIntersection(nodeB1, nodeA1)); // false
// console.log(type(new (function Custom() {})())); // 'Custom'


//------------------------Fresh End------------------------//
/**
 * 
 task 39:  You are given a node that is the beginning of a linked list.
  This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:
 */

function loop_size(node) {
 
  let fast = node;
  let slow = node;
  
 
  
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
     if(slow === fast){
       
       let current = slow;
        let count = 1;
       while(current.next !== slow){
         current = current.next;
         count++;
       }
       return count;
     }
  }
  return null;
}

/**
 * task 40 : We have 3 equations with 3 unknowns x, y, and z and we are to solve for these unknowns.

Equations 4x -3y +z = -10, 2x +y +3z = 0, and -x +2y -5z = 17 will be passed in as an array of [[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]] and the result should be returned as an array like [1, 4, -2] (i.e. [x, y, z]).

Note: In C++ do not use new or malloc to allocate memory for the returned variable as allocated memory will not be freed in the Test Cases. Setting the variable as static will do.
 */

function solveEq(eq){
  let matD = eq.map(function(item){
    return item.slice(0,-1);
  })
  console.log(matD);
  let det = (matD[0][0]*((matD[1][1]*matD[2][2])-(matD[1][2]*matD[2][1])));
  console.log(det);
 
}
solveEq([[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]]); // [1, 4, -2]