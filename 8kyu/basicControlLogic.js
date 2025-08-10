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
// console.log("popElement:" + popElement([1, 2, 3, 4, 5]));

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

/**
 * Task:7
 * The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return).
Then, traverse obj, checking each key and value..
If the length of the key is equal to 5, then push
the key to your array. Separately, if the length 
of the value is equal to 5, then push the value
to your array.

At the end, return your array.

You should use for..in in your code, otherwise your
solution may not pass this kata.
 */

function giveMeFive(obj) {
  //coding here
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
// console.log(
//   "giveMeFive:" +
//     giveMeFive({
//       name: "dog",
//       legs: 5,
//       color: "white",
//       age: 5,
//       breed: "bulldog",
//       owner: "John",
//       hobby: "running",
//       favoriteFood: "meat",
//     })
// );

/**
 * Task:8
 * Task
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We 
will pad it with "*" symbols on its left side and on 
its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function
 that loops n times. Each time through the loop it will
  add one * to str, alternating on which side it is padded: 
  the first time will add a * to the left side of str, the 
  second time will add a * to the right side, and so on.

Finally, return the padded string.
 */
function padIt(str, n) {
  //coding here
  let m = 1;
  do {
    if (m % 2 === 0) str = str + "*";
    else str = "*" + str;

    m++;
  } while (n >= m);

  return str;
}
// console.log("padIt:" + padIt("a", 5)); // Expected output: "*a**"

/**
 * 
Task:9
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
Tip: Using default for most of the cases can reduce your work.
 */ function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;

    case 2:
      days = 28;
      break;

    case 3:
      days = 31;
      break;

    case 4:
      days = 30;
      break;

    case 5:
      days = 31;
      break;

    case 6:
      days = 30;
      break;

    case 7:
      days = 31;
      break;

    case 8:
      days = 31;
      break;

    case 9:
      days = 30;
      break;

    case 10:
      days = 31;
      break;

    case 11:
      days = 30;
      break;

    case 12:
      days = 31;
      break;
  }
  return days;
}

/**
 * Task:10
 * Task
Coding in function trueOrFalse, function accept 1 parameters
:val, try to use the conditional statement if...else, if val 
value is false (val==false or it can convert to false), should 
return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see 
if your code is working properly.

In the end, click "Submit" to submit your code pass this kat
 */

function trueOrFalse(val) {
  if (!val) return "false";
  else return "true";
}

/**
 * task:11
 * In case you got lost, here's precisely
 *  what you have to do: define a method Number.prototype.
 * times that accepts a function f as an argument and executes
 *  it as many times as the integer it is called on (e.g. (100).times would
 * execute something 100 times). The iteration variable i should be supplied
 * to the anonymous function being executed in order to support looping through array elements.
 */

Number.prototype.times = function (f) {
  const n = Number(this); // convert 'this' to a primitive number
  for (let i = 0; i < n; i++) {
    f(i); // call the function with the current index
  }
};
let sum = 0;

(1).times(function (i) {
  console.log("result" + sum);
  sum += i + 1; // adds 1..5 to sum
});
// console.log(sum);

/**
 *
 * task:12
 * In JavaScript, there is a special case where strict comparison
 * of the same variable returns false! Try to find out what must
 *  be done to get such result!
 *
 *
 */

function findStrangeValue() {
  // your code!
  let x = NaN;
  console.log(x === x); // false
  return x;
}

/**
 * Task:13
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
console.log("result: " + smallEnough([1, 2, 3, 4, 4], 5)); // Expected output: true
