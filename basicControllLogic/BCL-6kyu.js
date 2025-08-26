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
function applyBackspaces(input) {
  const out = [];
  // Match [backspace] optionally followed by *<number>, e.g. [backspace], [backspace]*3
  const re = /\[backspace](?:\*(\d+))?/gi;

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

  return out.join('');
}


console.log(solve("a[backspace]*2oopppp[backspace]*2[backspace]s"));
