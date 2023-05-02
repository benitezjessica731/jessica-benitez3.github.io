/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare a variable named animal and assign it to an empty object
var animal = {};
//using dot notation, give animal a property named species with a value of any animal species
animal.species = "dog";
//using bracket notation, give animal a property of name with a value of your animal's name
animal["name"] = "Chicago";
//using either notation, give animal a property called "noises" with a value of an empty array
animal.noises = [];
//print animal object to the console by adding console.log(animal)
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named "noises" and assign it to an empty array
var noises = [];
//using bracket notation, give noises its first element "bark"
noises[0] = "bark";
//using an array function, add another noise to the end of noises
noises.push("growl");
//place an element at beginning of noises array
noises.unshift("whimper");
//using bracket syntax, add another element to the end of noises
noises[3] = "yawn";
//console.log the length of noises
console.log(noises.length);
//console.log the last element of noises
console.log(noises[noises.length -1]);
//console.log the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using bracket syntax, assign the noises property on animal to our new noises array 
animal["noises"] = noises;
//using any syntax add another noise to the noises property
animal.noises.splice(0, 0, "loud bark");
//console.log animal
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animals and assign it to an empty array
var animals = [];
//push the animal made onto "animals"
animals.push(animal);
//console.log animals
console.log(animals);
//create a variable called duck and assign it to the data given
var duck = {
  species : "duck",
  name : "Jerome",
  noises : ["quack", "honk", "sneeze", "woosh"]
};
//push duck to animals
animals.push(duck);
//console.log animals
console.log(animals);
//create two more animal objects each with a species, a name, and at least two sounds and add each one of them to 'animals'
var cat = {
  species : "cat",
  name : "Luna",
  noises : ["meow", "purr"]
};
var snake = {
  species : "snake",
  name : "Snakey",
  noises : ["hiss", "rattle"]
};
//add each new animal to animals array
animals.push(cat);
animals.push(snake);
//console log animals
console.log(animals);
//console log animals length
console.log(animals.length); //4

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose a data structure for this list of friends
//choosing to choose an array as the data structure as I feel it is easier to pull elements into and out of an array versus objects
//create a variable called friends and assign it the data structure that was chosen
var friends = [];
//write a function called getRandom that takes the animals array and returns a random index of the input array, using math.random
function getRandom(array) {
  return Math.random(array);
}
//using a random index from this function, get a random animal and add its name to friends
friends.push(animal["name"]);
//using bracket notation add the friends list as a property also named friends on one of the animals in the animals array
animal["friends"] = friends;
//console log
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}