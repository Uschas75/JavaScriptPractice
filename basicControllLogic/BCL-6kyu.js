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

console.log(solve("a[backspace]*2oopppp[backspace]*2[backspace]s"));

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

You are given a string of lowercase letters and spaces that you need to type out. In the string there is a special function: [shift]. Once you encounter a [shift] , you capitalise the character right after it, as if you're actually holding the key. Return the final string .



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

Notice if we want to capitalise a long string of letters, it will look very confusing viually. So, let's add two new functions, holdshift and unshift. It's self-explanatory.



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



unshift can also apply to normal shift, but since normal shift only affects the character right after, unshift would have to be directly after normal shift for it to affect it.

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
  str = str.replaceAll("[shift]", 1);
  str = str.replaceAll("[holdshift]", 2);
  str = str.replaceAll("[unshift]", 0);
  let arr = str.split("");
  let x = 0;
  for (let key in arr) {
    arr[key] = isNaN(arr[key]) ? arr[key] : Number(arr[key]);
    
    console.log(typeof arr[key]);
    if (typeof arr[key] === "number") {
      x = arr[key];
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

  return arr;
  // return re.exec(str);
};
console.log(typeOut("hello [shift]world [holdshift]oops[unshift] done")); // UPPERCASE
