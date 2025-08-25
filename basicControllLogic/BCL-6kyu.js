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
    if(n < 2) return false;
    if(n % divisor === 0 && n!== divisor) return false;
    if(divisor <= Math.sqrt(n)) return isPrime(n, divisor + 1);

    return true;

};

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
function solve(s) {
let newS = s.replaceAll("[backspace]", "#").replaceAll("#*", "").replaceAll("#",1).split("");
let converted = newS.map(el => (isNaN(el) ? el : Number(el))); // isNaN = condition is not a number. el(true) : number(el)(false)
let result = [];
console.log(converted);
  
  for(let i = 0; i < converted.length; i++){
    // console.log(converted[i]);
    // console.log(typeof(converted[i]));
    // console.log(typeof(converted[i]) === "number");
    if(typeof(converted[i]) === "number"){
      // console.log("dhukse");
     console.log(converted.splice(i - converted[i],converted[i])); 
    }
    }
  
 return converted;
 
}
console.log(solve("a[backspace]*2oopppp[backspace]*2[backspace]s"));