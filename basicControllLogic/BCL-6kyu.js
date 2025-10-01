/**
 * task:26
 * Return true if n is prime and false if not;

like:
  isPrime(7) == true
  isPrime(-7) == true
  isPrime(6) == false
  isPrime(-6) == false

!important: n always be integer and can be negative (but you need to handle this);

you can't use loops or hardcode (for, while)


 */

function isPrime(n, divisor = 2) {
  n = Math.abs(n);
  if (n < 2) return false;
  if (n % divisor === 0 && n !== divisor) return false;
  if (divisor <= Math.sqrt(n)) return isPrime(n, divisor + 1);

  return true;
}

/**
 * task: 27
 * This kata is a harder version of this kata: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
If you haven't done it yet, you should do that one first before doing this one
You are given a string of letters that you need to type out. In the string there is a special function:
[backspace]. Once you encounter a [backspace] , you delete the character right before it. If there is 
nothing to backspace , just carry on. Return the final string .
e.g. oopp[backspace]s return oops (delete the p)
Walkthrough:

o
oo
oop
oopp
oop [backspace]
oops

e.g. ooppp[backspace][backspace]s return oops (delete both p's)

Walkthrough:

o
oo
oop
oopp
ooppp
oopp [backspace]
oop [backspace]
oops

e.g. a[backspace][backspace]ooppp[backspace][backspace]s return oops

Walkthrough:

a
[nothing]
[nothing]
o
oo
oop
oopp
ooppp
oopp [backspace]
oop [backspace]
oops

But there's a twist! [backspace][backspace][backspace] can appear as 
[backspace]*3 or even [backspace]*2[backspace]

Basically, [backspace][backspace] ... [backspace] n times can appear as 
[backspace]*n (n can even be 1, but not less than 1 ([backspace]*0 will not occur))

e.g. a[backspace]*2oopppp[backspace]*2[backspace]s return oops

Walkthrough:

a
[nothing] [backspace]*2
o
oo
oop
oopp
ooppp
oopppp
oopp [backspace]*2
oop [backspace]
oops

To make it easier, only letters, spaces. and the [backspace] function will be in the initial string.

Good luck!


 */
function solve(input) {
  const out = [];
  // Match [backspace] optionally followed by *<number>, e.g. [backspace], [backspace]*3
  const re = /\[backspace](?:\*(\d+))?/gi;
  /**
   *   / ... / → regex literal.
      g → global flag (find all matches, not just the first).
      i → case-insensitive flag.
   * 
   */

  let i = 0;
  while (i < input.length) {
    // Find the next backspace token
    const m = re.exec(input);
    const nextTokenStart = m ? m.index : input.length;

    // Push all literal characters up to the token (letters/spaces per problem)
    for (let j = i; j < nextTokenStart; j++) out.push(input[j]);

    if (!m) break; // no more tokens

    // How many backspaces to apply? default = 1
    const count = m[1] ? parseInt(m[1], 10) : 1;

    // Pop up to 'count' characters (ignore if nothing to delete)
    for (let k = 0; k < count && out.length; k++) out.pop();

    // Continue scanning after the token
    i = re.lastIndex;
  }

  return out.join("");
}

// console.log(solve("a[backspace]*2oopppp[backspace]*2[backspace]s"));

/**
 * function combine()
that combines arrays by alternatingly taking elements passed to it.
combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 
 */
function combine(...args) {
  let result = [];
  let maxLength = Math.max(...args.map((arr) => arr.length));

  for (let i = 0; i < maxLength; i++) {
    for (let arr of args) {
      if (i < arr.length) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}
// console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]));

/**
 * 
 * task: 28

Been a while, but here's part 2!
You are given a string of lowercase letters and spaces that you need to type out.
In the string there is a special function: [shift]. Once you encounter a [shift] ,
you capitalise the character right after it, as if you're actually holding the key. Return the final string .

e.g. [shift]john [shift]green return John Green (capitalise the j and g)
Walkthrough:

[shift]
J capitalise the j
Jo
Joh
John
John[space]
John G capitalise the g
John Gr
John Gre
John Gree
John Green

John Green
e.g. [shift]n[shift]o[shift]o[shift]o return NOOO (capitalise all the letters)

Walkthrough:

[shift]
N capitalise the n
NO capitalise the O
NOO capitalise the O
NOOO capitalise the O

NOOO

Notice if we want to capitalise a long string of letters, it will look very confusing
viually. So, let's add two new functions, holdshift and unshift. It's self-explanatory.
Some examples:
[holdshift]uppercase[unshift] return UPPERCASE (holdshift all letters)
Walkthrough:
[holdshift]
U
UP
UPP
...

UPPERCASE
[unshift]

UPPERCASE
unshift can also apply to normal shift, but since normal shift only
affects the character right after, unshift would have to be directly
after normal shift for it to affect it.

Example: [shift][unshift]dont [shift][unshift]shift returns dont shift

Walkthrough:

[shift][unshift] cancels
dont[space]
[shift][unshift] cancels
dont shift
dont shift
Whew! That was lengthy!

Ok, to summerise:

[shift] capitalises the character right after it ([shift]a -> A)
[holdshift] capitalises all the characters after it until it reaches unshift ([holdshift]one[unshift]two -> ONEtwo)
[unshift] releases shift (either [shift] or [holdshift])
[shift][unshift]d returns d
Other necessary things you might want to know:

Shifting a space is a space
After a [holdshift], there is always an unshift, without any functions in between
After unshifting, the next function called will not be an unshift (you can't release something if you're not pressing it)
Things like [shift][holdshift] or [shift][shift] or [holdshift][shift]can't occur, but [shift][unshift] can
The string will never start with [unshift] for obvious reasons
Good luck! More examples in the example tests (The description took me way too long lol)

Please give this a good rating, I spent a really long time coding this.

Thank you!
 */
const typeOut = (str) => {
  // Here be dragons
  const re = /\[(unshift|holdshift|shift)\]/gi;
  str = str.replaceAll("[shift]", 2);
  str = str.replaceAll("[holdshift]", 3);
  str = str.replaceAll("[unshift]", 1);
  let arr = str.split("");
  let x = 1;
  let result = [];
  for (let key in arr) {
    arr[key] = isNaN(arr[key]) ? arr[key] : Number(arr[key]);

    if ((x === 2 || x === 3) && arr[key] !== 0) {
      if (typeof arr[key] === "string") {
        arr[Number(key)] = arr[Number(key)].toUpperCase();
      }
      if (x === 2) {
        x = 1;
      }
    }

    if (arr[key] === 2) {
      x = 2;
    }
    if (arr[key] === 3) {
      x = 3;
    }
    if (arr[key] === 1) {
      x = 1;
    }
    if (arr[key] === 0 && x !== 3) {
      x = 1;
    }
    if (typeof arr[key] === "string" || arr[key] === 0) {
      arr[key] === 0 ? result.push(" ") : result.push(arr[key]);
    }
  }
  // if(x === 1){
  //   arr[key] = arr[key].toUpperCase();
  //  console.log(arr[key]);

  //   x = 0;
  // }
  // if(x === 2){
  //   arr[key] = arr[key].toUpperCase();
  // }

  return result.join("");
  // return re.exec(str);
};
// console.log(typeOut("hello [shift]world [holdshift]oops[unshift] done")); // UPPERCASE

/**
 * task: 29
 * Prehistory
In JavaScript there are two operators that help us determine whether an
operand belongs to a certain type or class, they are "typeof" and "instanceof",
but both of these operators can fool us in some cases.

Task
You need to implement the function "f" which will determine the type of the passed
argument without errors. The peculiarity of this task is the limitation on
the number of characters in your solution, the length of your code must not exceed 45 characters.

Note
The "Symbol" and "RegExp" documentation will help you to solve this task, good luck :^)
 */

f = (x) => {
  return Object.prototype.toString.call(x).slice(8, -1);
}; //do your magick :･ﾟ✧:･ﾟ✧
// console.log(  f(/abc/)); // "RegExp"
// console.log(  f(Symbol('foo'))); // "Symbol"
// console.log(  f(123)); // "Number"

/**
 * task: 30
 * We know the formula to find the solutions of an equation of second degree with only one variable:

source: imgur.com

We need the function sec_deg_solver()/secDegSolver(), that accepts three arguments, a, b and c, the coefficients of the above equation.

The outputs of the function may vary depending on the values of coefficients a, b and c, according to the following situations. (used values as examples only):


- If a is equal 0:
                  - If b and c are not 0. It will return: "It is a 
                    first degree equation. Solution: 0.5512345"
   
                  - If a, b and c are 0. It will return: 
                     "The equation is indeterminate"
           
                  - If a and b are 0, and c is not 0. It will 
                     return: "Impossible situation. Wrong entries"
                  
                  - If a and c are 0 and b is not 0: It will return: "It is a first 
                    degree equation. Solution: 0.0"

- If a is not 0:
                  - If Δ < 0 (see image above). It will return: "There are no real 
                    solutions"

                  - If Δ = 0. It will return: "It has one double solution: 
                    1.4142135624"

                  - If Δ > 0. It will return: "Two solutions: 1,7320508076, 2.0"
                    (solutions should be sorted)
The results should be expressed up to 10 decimals rounded result Let's see some cases:


a = 0
b = 2
c = -4
secDegSolver(a, b, c) == It is a first degree equation. Solution: 2

a = 10
b = 2
c = -4
secDegSolver(a, b, c) == Two solutions: -0.7403124237, 0.5403124237

a = 1.5
b = 2
c = 4
secDegSolver(a, b, c) == There are no real solutions

a = 1
b = -2
c = 1
secDegSolver(a, b, c) == It has one double solution: 1

a = 0
b = 0
c = 0
secDegSolver(a, b, c) == The equation is indeterminate

a = 0
b = 0
c = 4
secDegSolver(a, b, c) == "Impossible situation. Wrong entries"
(Be aware that the result has a string format and -0.0 is not 0.0)

Note on having two solutions: input them sorted numerically; 
in the JavaScript version, not to put any extra difficulty 
on this one, sort them with a simple .sort() (which will sort them lexicographically).

Happy coding!!
 */

function secDegSolver(a, b, c) {
  const fmt = (x) => {
    const s = Number(x).toFixed(10);
    const n = Number(s);
    let out = s.replace(/\.?0+$/, "");
    if (n === 0) out = "0"; // normalize -0 → 0 (see special case below)
    return out;
  };

  if (a === 0) {
    if (b !== 0 && c !== 0) {
      return `It is a first degree equation. Solution: ${fmt(-c / b)}`;
    }
    if (b === 0 && c === 0) return "The equation is indeterminate";
    if (b === 0 && c !== 0) return "Impossible situation. Wrong entries";
    // spec explicitly wants "0.0" here
    return "It is a first degree equation. Solution: 0.0";
  }

  const delta = b * b - 4 * a * c;
  if (delta < 0) return "There are no real solutions";

  if (delta === 0) {
    const x = -b / (2 * a);
    return `It has one double solution: ${fmt(x)}`;
  }

  const sqrtD = Math.sqrt(delta);
  const x1 = (-b - sqrtD) / (2 * a);
  const x2 = (-b + sqrtD) / (2 * a);

  // Format first, then lexicographically sort strings (per kata note)
  const roots = [fmt(x1), fmt(x2)].sort();
  return `Two solutions: ${roots[0]}, ${roots[1]}`;
}
// console.log(secDegSolver(10, 2, -4)); // Two solutions: -0.7403124237, 0.5403124237

/**
 * task: 31
 * In this kata, you should calculate the type of triangle 
 * with three given sides a, b and c (given in any order).
If each angle is less than 90°, this triangle is acute and
the function should return 1. If one angle is strictly 90°,
this triangle is right and the function should return 2.
If one angle is more than 90°, this triangle is obtuse and
the function should return 3. If three sides cannot form a 
triangle, or one angle is 180° (which turns the triangle 
into a segment) - the function should return 0. Three input 
parameters are sides of given triangle. All input values are 
non-negative floating point or integer numbers (or both, depending on the language).
Acute
Right
Obtuse
Examples:
(2, 4, 6) ---> return 0 (Not triangle)
(8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
(3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.
There is a very small chance of random test to fail due to round-off error, in such case resubmit your solution.


 */

function triangleType(a, b, c) {
  let arr = [a, b, c];
  arr.sort((x, y) => x - y);
  let result = arr[0] ** 2 + arr[1] ** 2 - arr[2] ** 2;

  if (arr[0] + arr[1] > arr[2]) {
    if (result > 0) return 1;
    if (result === 0) return 2;
    if (result < 0) return 3;
  } else {
    return 0;
  }
}
// console.log(triangleType(7, 12, 8)); // 3

/**
 * task: 32
 * "Explain the question [You are provided with a function of the form f(x) = axⁿ,
 * that consists of a single term only and 'a' and 'n' are integers, e.g., f(x) = 3x², f(x) = 5 etc.
 * Your task is to create a function that takes f(x) as the argument and returns
 *  the result of differentiating the function, that is, the derivative. If f(x) = axⁿ,
 * then f′(x) = naxⁿ⁻¹. Input is a string, for example '5x^4'. The function f(x) consists
 *  of a single term only. Variable is denoted by x. Output should be a string, for example '20x^3'.]"
 */
function differentiate(f) {
  //Write your code here
  if (!f.includes("x")) return "0";
  let [a, n] = f.split("x");
  console.log([a, n]);
  a === "-" ? (a = -1) : (a = Number(a));
  // a === "" ? a = 1 : a = Number(a);
  a === 0 ? (a = 1) : (a = Number(a));
  console.log(a);
  n === "" ? (n = 1) : (n = Number(n.slice(1)));
  console.log([a, n]);
  // let find = n.match(/\^(\d+)/);
  if (n - 1 === 0) return String(n * a);
  if (n - 1 === 1) return `${n * a}x`;
  if (a === 1 || a === -1) {
    if (n * a === 1) return `x^${n - 1}`;
    if (n * a === -1) return `-x^${n - 1}`;
  }

  if (a === 1) return `${n * a}x^${n - 1}`;
  return `${n * a}x^${n - 1}`;
}
// console.log(differentiate("x^-2")); // '20x^3'
/**
 * task: 33
 * In this kata you're given a string which can include English
 *  lowercase letters, digits, and spaces. Your task is to write a function 
 * which will return a string of 'L' and 'R' chars which displays in which order should the hands be used to type it.

Rules of touch typing
The digits before (including) 5, letters of the first row before (including) t, 
letters of the second row before (including) g and letters of the third row before (including) b are typed with left hand, the other digits and numbers are typed with right hand.
Space is typed with left hand if the non-space char you typed before was typed with right one, and vice versa. If it is the first char, it's typed with left hand.
Every string you're given is a correct string which includes only digits, lowercase letters and spaces. Strings need not be validated.

Examples
"i love programming" -> "RLRRLLRRLRLLLRRRRL"
"  two spaces" -> "LLLLRLLRLLLL"
 */
function touchType(str) {
  //good luck again!
  const leftHand = "12345qwertasdfgzxcvb";
  // console.log(leftHand.length);
  let out = [];
  // console.log(str.includes(leftHand[0]));
  for (let i = 0; i < str.length; i++) {
    if (
      leftHand.includes(str[i]) ||
      (str[i] === " " && (i === 0 || str[i - 1] === " " || out[i - 1] === "R"))
    ) {
      // console.log("in");
      out[i] = "L";
    } else {
      out[i] = "R";
      // console.log("in");
    }
  }
  return out.join("");
}

// console.log(touchType("i love programming")); // "RLRRLLRRLRLLLRRRRL"
// console.log(touchType("  two spaces")); // "LLLLRLLRLLLL"
// touchType("i love programming"); // "RLRRLLRRLRLLLRRRRL"

/**
 * task: 34
 * You have to write an array() function returning an array object with elements as follow:

[ 'array', 'boolean', 'function', 'number', 'object', 'string', 'undefined' ]
Coding Limitation:
Less than 60 characters
 */

array = (_) => ["array", ...[!0, (_) => _, 1, {}, "s", _].map((e) => typeof e)];

// console.log(array()); // 25

/**
 * task: 35
 * Find the most common Data Type within a given array.

For Example, ['1', '2', 2] should return 'string'.

If there are any ties at all then just return 'We got a tie!'
 */

class CommonDatatypes {
  check(arr) {
    //Have a good one!
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let type = typeof arr[i];
      obj[type] ? obj[type]++ : (obj[type] = 1);
    }
    let val = Object.values(obj).reduce((a, b) => (a > b ? a : (a = b)));
    let res = Object.keys(obj).filter((k) => obj[k] === val);
    return res.length > 1 ? "We got a tie!" : res[0];
  }
}
let common = new CommonDatatypes();
console.log(common.check(["1", "2", "3", 3, 4, 2])); //

/**
 * task: 36
 *
 */
function statsDiscDistr(arr) {
  // Check if all x are integers (allow float with .0)
  const notIntegers = arr.some(([x, _]) => !Number.isInteger(x));
  const allIntegersOrZeroDecimal = arr.every(
    ([x, _]) => Number.isInteger(x) || x % 1 === 0
  );

  // Sum of probabilities
  const probSum = arr.reduce((acc, [_, p]) => acc + p, 0);

  // Check distribution validity
  const validDistribution = Math.abs(probSum - 1) < 1e-9; // allow floating point tolerance

  // Handle errors
  if (!validDistribution && !allIntegersOrZeroDecimal) {
    return "It's not a valid distribution and furthermore, one or more variable value are not integers";
  }
  if (!validDistribution) {
    return "It's not a valid distribution";
  }
  if (!allIntegersOrZeroDecimal) {
    return "All the variable values should be integers";
  }

  // Compute mean
  const mean = arr.reduce((acc, [x, p]) => acc + x * p, 0);

  // Compute variance
  const variance = arr.reduce(
    (acc, [x, p]) => acc + Math.pow(x - mean, 2) * p,
    0
  );

  // Standard deviation
  const stdDev = Math.sqrt(variance);

  return [mean, variance, stdDev];
}
/**
 * task:37
  * console.log(statsDiscDistr([[1, 0.2], [2, 0.5], [3, 0.3]])); // [2.1, 0.49, 0.7]
  * Given 2 simultaneous equations with 2 variables, find the value of the two variables.

The simultaneous equations will be handed to the function as a 2-d array, the non-zero 
integer coefficients of the corresponding variables will be in the same order for both of the inner arrays. for example:

x + 2y = 11

//becomes --> [1,2,11]

3x + 5y = 29

//becomes --> [3,5,29]

Your function must return a 1-d array containing the values of the two variables in 
the order in which they were given in the argument. Solutions of all equations are integers. For the example above:

//should return an array in the form [x,y]

--> [3,4]
  * */

function solveSimultaneous(array) {
  const [[a1, b1, c1], [a2, b2, c2]] = array;
  const divisor = a1 / a2;
  const y = (c1 - c2 * divisor) / (b1 - b2 * divisor);
  const x = (c1 - b1 * y) / a1;
  return [Math.round(x), Math.round(y)];
}
console.log(
  solveSimultaneous([
    [1, 2, 11],
    [3, 5, 29],
  ])
); // [3,4]

/**
 * task: 38
 * Create the function type which takes the argument val and returns val's type as a string. If possible, type should return additional information. Instead of a wall of text, here are code examples:

type(undefined) --> 'Undefined'
type(null) --> 'Null'
type(true) --> 'Boolean'
type(function(){}) --> 'Function'
type(Math.max) --> 'Function'
type('abc') --> 'String'
type({snap: "crackle"}) --> 'Object'

//Numbers should include additional information
type(1) --> 'Number Integer'
type(1.1) --> 'Number Float'
type(NaN) --> 'Number NaN'
type(-Infinity) --> 'Number Infinite'

//If a string is numeric-formatted:
type('123')
type('123.321')
type('0xF')
  --> All return 'String Numeric'

//For constructed objects, return the name of the constructor
type(/abc/) --> 'RegExp'
type([1,2,3]) --> 'Array'
function Custom(){}
type(new Custom()) --> 'Custom'
Related reading: MDN's page for Object.prototype.toString and Object.prototype.constructor.
 */
