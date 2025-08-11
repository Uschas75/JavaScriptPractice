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
console.log("result: " + smallEnough([1, 2, 3, 4, 4], 5)); // Expected output: true