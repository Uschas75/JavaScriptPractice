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
console.log("pickIt:" + pickIt([1, 2, 3, 4, 5, 6, 7, 8, 9]));
