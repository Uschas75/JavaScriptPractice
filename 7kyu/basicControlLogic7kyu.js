/**
 * Task:1
 * You will be given an array (a) and a limit value (limit)..
 *  You must check that all values in the array are below or 
 * equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.
 */
function smallEnough(a, limit, index = 0) {
  // Base case: if we've checked all elements, return true
  if (index === a.length) {
    return true;
  }

  // If current element exceeds limit, return false immediately
  if (a[index] > limit) {
    return false;
  }

  // Recursively check next element
  return smallEnough(a, limit, index + 1);
}
// console.log("result: " + smallEnough([1, 2, 3, 4, 4], 5)); // Expected output: true

/**
 * 
task:2
Loop Detector
In this kata, you'll simulate traversing a one-way pointer chain, 
similar to a singly linked list. Each element in the input list 
represents the index of the next element to move to.

Your task is to determine whether this chain eventually
 enters a loop, or whether it terminates by stepping out of bounds.

Function Signature
arr is a list or array of non-negative integers.

Return True (or your language's equivalent) if the traversal enters a loop.

Return False (or your language's equivalent) if the traversal terminates.

How Traversal Works
Begin at index 0.

Read the value at the current index to get the next index.

Continue stepping through the array.

If you encounter an index you've already visited, you've found a loop 
— return True (or your language's equivalent).

If a step takes you to an index outside the array, the traversal ends
 — return False (or your language's equivalent).
 */

function hasLoop(indices, i = 0, visited = new Set()) {
  // If index is out of bounds, no loop
  if (i < 0 || i >= indices.length) return false;

  // If we've already visited this index, loop detected
  if (visited.has(i)) return true;

  // Mark this index as visited
  visited.add(i);

  // Recursive call to next index
  return hasLoop(indices, indices[i], visited);
}

/**
 * task:3
 * You have to create a function which receives 3 
 * number arguments: 2 operands a and b, and the 
 * result of an unknown operation performed on them.

Based on those 3 values you have to return a string,
 that describes which operation was used to get the given result.

The possible return strings are: "addition", 
"subtraction", "multiplication", "division".

Examples:
(a = 1, b = 2, result = 3)   --> 1 ? 2 = 3   --> "addition"
(a = 5, b = 2, result = 2.5) --> 5 ? 2 = 2.5 --> "division"
Notes
The / operator performs a plain division without rounding.
You can assume that there will always be a unique valid 
answer (no ambiguous cases like e.g. 1 ? 0 = 0 which could
 be either - or +, or 3 ? 1 = 3 which could be either * or /).
You can assume that there will be no division by 0

 */
function calcType(a, b, res) {
  // your code here
  if (a + b === res) return "addition";
  if (a - b === res || b - a === res) return "subtraction";
  if (a === 1 || b === 1) {
    if (a / b === res || (b / a === res && a * b !== res)) return "division";
    else return "multiplication";
  }
  if (a / b === res || b / a === res) return "division";
  else return "multiplication";
}

console.log(calcType(1, 2, 2)); // Expected output: "addition"
console.log(calcType(5, 2, 2.5)); // Expected output: "division"

/**
 * 
task:4
Complete the solution so that it returns a formatted string. 
The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5); // should return "Value is 00005"
 */

function solution(value) {
  //...
  return `Value is ${String(value).padStart(5, "0")}`;
}

console.log(solution("8")); // solution("12345"); // Expected output: "Value is 12345"

/**
 * task:5
 * 
Task

Given an array of length N, where N denotes the number 
of iterative statements. Each item-pair in the array 
represents two elements, with the 1st value (V) indicating
 the upper boundary for the iteration to take place 
 (can be inclusive or exclusive depending on the 2nd value) 
 and the 2nd value (Boolean data type -> true / false depending 
 on your chosen language) indicating whether the upper boundary (V) is inclusive or not.

You must write a function that outputs an array in which each 
element represents the number of times each for-loop condition is evaluated. 
Below is an example for better understanding:

Example

arr = [[7, true], [5, false]]

for(int i = 0; i <= 7; i++){   // This statement is executed 9 times 
// before termination -> 0, 1, 2, 3, 4, 5, 6, 7, 8 (since 8 > 7 is the breaking condition)
  for(int j = 0; j < 5; j++){  // In one cycle of outermost loop, this statement 
  // is executed 6 times before termination -> 0, 1, 2, 3, 4, 5 (since 5 >= 5 is the breaking condition)
    // some statements
  }
}
Note

The array can be empty, with a range of 0 <= N <= 20
The starting counter of the C-style for-loop is always 0
The iteration expression or operation to be performed is always incremental
The range of upper boundary is as follows: 1 <= V <= 20
}
 */

function countLoopIterations(arr) {
  let result = [],
    product = 1n;
  for (let [num, bool] of arr) {
    let count = BigInt(num) + 1n + (bool ? 1n : 0n);
    result.push(count * product);
    product *= count - 1n;
  }
  return result;
}

function countLoopIterations(arr) {
  let result = [];
  let outerProduct = 1n; // Initialize outer product to 1n (BigInt). this integer will be huge, cause sometimes the loop
  //will run for 20 times, so we need to use BigInt to avoid overflow.

  for (const [Vraw, inc] of arr) {
    const V = BigInt(Vraw);
    const iterations = inc ? V + 1n : V; // if inclusive(2nd value) , is true then v + 1n if not then v;
    const perRunChecks = iterations + 1n; // extra failing check
    const totalChecks = perRunChecks * outerProduct;

    result.push(totalChecks);
    outerProduct *= iterations;
  }
  return result;
}

// Example usage
/*
console.log(
  countLoopIterations([
    [7, true],
    [5, false],
  ])
); // Expected output: [9, 6]
console.log(
  countLoopIterations([
    [7, true],
    [5, false],
  ])
); // Expected output: [9, 6]
*/

/**
 * task:6
 * On Unix system type files can be identified with the ls -l
 *  command which displays the type of the file in the first 
 * alphabetic letter of the file system permissions field. You 
 * can find more information about file type on Unix system on the wikipedia page.

'-' A regular file ==> file.
'd' A directory ==> directory.
'l' A symbolic link ==> symlink.
'c' A character special file. It refers to a device that handles
 data as a stream of bytes (e.g: a terminal/modem) ==> character_file.
'b' A block special file. It refers to a device that handles data
 in blocks (e.g: such as a hard drive or CD-ROM drive) ==> block_file.
'p' a named pipe ==> pipe.
's' a socket ==> socket.
'D' a door ==> door.
In this kata you should complete a function that return the filetype 
as a string regarding the file_attribute given by the ls -l command.

For example if the function receive -rwxr-xr-x it should return file.
 */

function linuxType(fileAttribute) {
  // I have to check the first character of the fileAttribute string
  //then I have to return the corresponding file type as a string.
  const typeMap = {
    "-": "file",
    d: "directory",
    l: "symlink",
    c: "character_file",
    b: "block_file",
    p: "pipe",
    s: "socket",
    D: "door",
  };

  return typeMap[fileAttribute[0]] || "unknown"; //the first character will be used as the key to access the file type then
  //return the corresponding value from the typemap object or return 'unknown' if the first character is not in the typemap.
}

/**
 * task:7
 * In ECMAScript 2020, there is a new operator ?. 
 * called the optional chaining operator. This operator is available from Node.js v14 onwards.
It's nothing revolutionary - just an example of syntactic sugar but a pretty neat one.

Use case
Imagine you have a Car, the car has an Engine, the engine has a 
Gearbox and the gearbox has some property you are interested in, 
for example numberOfGears. Now, the car could be from junkyard and 
the gearbox or even the engine could be missing (null).
The name of each property is the name of the class it contains, 
converted to the appropriate case, such that if all components are present 
the final property could be accessed by:
Car.engine.gearbox.numberOfGears
How to determine the number of gears in a car?
Instructions
Complete the method called getNumberOfGears being added to the 
prototype of the Car class. This method will return the value of 
the numberOfGears property of the gearbox or null if the gearbox (or anything else) is missing.

Constraints
Find some information about the ?. and ?? operators and try to write 
the method without using if or the ternary operator ?:.
 */
class Car {
  constructor(engine, gearbox, numberOfGears) {
    this.engine = engine;
    this.gearbox = gearbox;
    this.numberOfGears = numberOfGears;
  }

  getNumberOfGears() {
    return this.engine?.gearbox?.numberOfGears ?? null;
  }
}

/**
 * 
 * task:8
 * Write a function inverse_slice that takes three arguments: 
 * a list items, an integer a and an integer b. The function 
 * should return a new list with the slice specified by items[a:b] excluded.

For example:

>>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
[12, 14, 55, 24]
Input domain:

items will always be a valid sequence.
b will always be greater than a.
a will always be greater than or equal to zero.
a will always be less than the length of items.
b may be greater than the length of items

 */

function inverseSlice(items, a, b) {
  return items.slice(0, a).concat(items.slice(b + 1));
}
// console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 3)); // Expecte output: [12, 14, 55, 24]

/**
 * task: 9
 * This should be fairly simple. It is more of 
 * a puzzle than a programming problem.
There will be a string input in this 
format: 'a+b' 2 lower case letters (a-z) seperated by a '+'
Return the sum of the two variables.
There is one correct answer for a pair of variables.
I know the answers, it is your task to find out.
Once you crack the code for one or two of the pairs, 
you will have the answer for the rest.
It is like when you were in school doing math and you
 saw "11 = c+h" and you needed to find out what c and h were.
However you don't have an 11. You have an unknown there as well. Example:
X = a+b.
You don't know what X is, and you don't know what b is or a,
 but it is a puzzle and you will find out.
As part of this puzzle, there is three hints or clues on solving
 this. I won't tell you what the other two are, but one of them is:
  Don't overthink it. It is a simple solution 
Given the input as a string - Return the sum of the two variables as int.
 */
function theVar(theVariables) {
  //input will be a string also not like number in string format
  // your code here
  return (
    theVariables.split("+")[0].charCodeAt(0) -
    96 +
    theVariables.split("+")[1].charCodeAt(0) -
    96
  );
}
// console.log(theVar("c+d")); // Expected output: 2

/**
 * task:10
 * You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.
 */

function processData(data) {
  //your code here
  let result = 1;
  data.forEach((el, i) => {
    // code to run
    data[i] = el.reduce((a, b) => a - b);
    result *= data[i];
  });
  return result;
}
console.log(
  processData([
    [2, 8],
    [3, 4],
    [8, 7],
  ])
); // Expected output: 3

/**
 * task:11
 * 
 * Given: a sequence of different type of values (number, string, boolean).
 *  You should return an object with a separate properties for each of types
 *  presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
 */

function separateTypes(input) {
  let result = {};
  input.forEach((el) => {
    result[typeof el] = result[typeof el] || [];
    for (let key in result) {
      if (key === typeof el) {
        result[key].push(el);
      }
    }
  });

  return result;
}

// console.log(separateTypes(["a", 1, 2, false, "b"])); // Expected output: { number: [1, 2], string: ['a', 'b'], boolean: [false] }

/**
 * task:12
 * Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and 
adding them to end of array one-by-one (if direction is "left") or 
removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:

array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
Examples:

loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45]
 */

function loopArr(arr, direction, steps) {
  if(direction === "left"){    
    return (arr.slice(steps)).concat(arr.slice(0, steps)).flat();; 
  }
  else if(direction === "right"){
    if(direction === "left"){    
    return (arr.slice(0, steps)).concat(arr.slice(steps)).flat();; 
  }
  }
  // arr.forEach(element => {
    
  // });

}
// console.log(loopArr([1, 5, 87, 45, 8, 8], "left", 2)); // Expected output: [87, 45, 8, 8, 1, 5]
console.log(loopArr([1, 5, 87, 45, 8, 8], "right", 2)); // Expected output: [8, 8, 1, 5, 87, 45]