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
