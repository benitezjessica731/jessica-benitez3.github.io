// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
   //create an index,i, to reiterate the numbers from 1 to 100 
  for (var i = 1; i <= 100; i++) {
  //for multiples of 3 and 5 print "FizzBuzz" to the console
     if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  //for multiples of 3 print "Fizz" instead of number
    } else if (i % 3 === 0) {
      console.log("Fizz");
  //for multiples of 5 print "Buzz" to the console
    } else if (i % 5 === 0) {
      console.log("Buzz");
//all else print the number to the console  
    } else {
      console.log(i);
    }
    } 

    // YOUR CODE GOES ABOVE HERE //
}
fizzBuzz();






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}