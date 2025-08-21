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
  if(a+b === res) return "addition";
  if(a-b === res || b-a === res) return "subtraction";
  if(a ===1 || b===1 ){
    if(a /b === res || b / a === res && a*b !== res) return "division";
    else return "multiplication";
  }
  if(a /b === res || b / a === res) return "division";
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

 function solution(value){
  
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

function countLoopIterations(arr){
  let result = [];
  let outerProduct = 1n;   // Initialize outer product to 1n (BigInt). this integer will be huge, cause sometimes the loop 
   //will run for 20 times, so we need to use BigInt to avoid overflow.

  for (const [Vraw, inc] of arr) {
    const V = BigInt(Vraw);
    const iterations = inc ? V + 1n : V;          // if inclusive(2nd value) , is true then v + 1n if not then v; 
    const perRunChecks = iterations + 1n;         // extra failing check
    const totalChecks = perRunChecks * outerProduct;

    result.push(totalChecks);
    outerProduct *= iterations;
  }
  return result;
}

// Example usage
console.log(countLoopIterations([[7, true], [5, false]])); // Expected output: [9, 6]
console.log(countLoopIterations([[7, true], [5, false]])); // Expected output: [9, 6]

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
const typeMap = {
    '-': 'file',
    'd': 'directory',
    'l': 'symlink',
    'c': 'character_file',
    'b': 'block_file',
    'p': 'pipe',
    's': 'socket',
    'D': 'door'
  };

  return typeMap[fileAttribute[0]] || 'unknown';
}