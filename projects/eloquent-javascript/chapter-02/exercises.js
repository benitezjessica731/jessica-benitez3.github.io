
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(x) {
  //create a for loop
  for (var i = 1; i <= x; i++) {
    //declare a var equal to ""
    var row = "";
    //create another for loop
    for (var j = 0; j < i; j++) {
      //concat row with #
      row += "#";
    }
    //log the new row to the console
    console.log(row);
  }
}

// Call the function
triangles(7);


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//write a function that prints out all the numbers 0 to 100, for numbers divisible by 3, print Fizz to the console,
//for numbers divisible by 5, print Buzz to the console, for numbers divisible by 3 and 5, print FizzBuzz to the console

function fizzBuzz() {
  //create a for loop to print numbers 1 to 15 in the console
  for (var i = 1; i < 16; i++) {
    //create an if statement to determine if i is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      //if so, log FizzBuzz to the console
      console.log("fizzbuzz");
    //create else if statement to determine if i is divisible by 3
    } else if (i % 3 === 0) {
      //if so, log Fizz to the console
      console.log("fizz");
    //create else if statement to determine if i is divisible by 5
    } else if (i % 5 === 0) {
      //if so, log Buzz to the console
      console.log("buzz");
    //all else, print the number to the console
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {
  //declare var board
  var board = "";
  //create for loop to iterate
  for (var i = 0; i < x; i++) {
    //create another for loop
    for (var j = 0; j < x; j++) {
      //create if statement to determine if even
      if ((i + j) % 2 === 0) {
        //if even, start the line with a space
        board += ' ';
        //create else
      } else {
        //else start the line with a #
        board += '#';
      }
    }
    // Add a line break after each row
    board += '\n'; 
  }
  //log console
  console.log(board);
}

// Call the function
drawChessboard(8);


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
