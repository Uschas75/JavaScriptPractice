// Question
// Unfinished Loop - Bug Fixing #1
function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}
/*
Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
*/
function typeValidation(variable, type) {
  // Your code should be here ;)
  return typeof variable === type;
}

console.log("typeValidation:" + typeValidation(5, "number"));

/**
 * Task:3
The function pickIt accepts 1 parameter, arr, which is an array of numbers.
 We need to traverse arr by using a for loop. If an element is an odd number, 
 push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return 
statement. Your work is to write a for loop.
 * 
 */
function pickIt(arr) {
  let odd = [],
    even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  console.log(odd, even);
  return [odd, even];
}
// console.log("pickIt:" + pickIt([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* Task:4
You need traverse dolls by using for loop.

## If element is "Hello Kitty" or "Barbie doll", 
you should push it to a bag

(bag is an array, I've defined in the function); 
if it's other strings, we should use continue skip it.

###When the bag has three element, bag is full. You should use break and jump out the loop;

If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code.
 otherwise, your solution may not pass this kata.

If you forgot how to push an element to array, please refer to lesson 4.
*/

function grabDoll(dolls) {
  var bag = []; // Initialize bag with three elements
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    console.log(dolls[i]);
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
      console.log("continue:" + dolls[i]);
      continue; // Skip to the next iteration if the doll is not one of the desired types
    }
    if (bag.length === 3) {
      break; // Exit the loop if the bag is full
    }
    bag.push(dolls[i]);
  }

  return bag;
}

// console.log(
//   "grabDoll:" +
//     grabDoll([
//       "Hello Kitty",
//       "Barbie ball",
//       "Teddy bear",
//       "Barbie doll",
//       "Hello Kitty",
//     ])
// );

/**
 // Task:5
 * 
 * I've written five functions. Each function receives a parameter arr which is an array. 
 * Complete the functions using arr inside the function bodies.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
 */
function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr; // Pushes the element and returns the modified array
}
function popElement(arr) {
  //pop an element from arr

  arr.pop();

  return arr; // Pops the last element and returns it
}
console.log("popElement:" + popElement([1, 2, 3, 4, 5]));

/**
 * 
task:6
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
 */

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
