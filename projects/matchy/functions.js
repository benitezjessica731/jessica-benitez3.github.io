/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement a function declaration called search which takes an array of animals as parameter, and a string 
function search(array, string) {
//create a for loop to look through animals array
    for (var i = 0; i < array.length; i++)
//create if statement, if animal exists
     if (array[i].name === string) {
        //return array[i]
        return array[i];
    } 
    //if name does not match, return null
   return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function declaration called replace with a signature of replace that takes 3 parameters, an array of animals, a string representing
//the name of an animal on which to perform a search and an object that represents the replacement animal 
//If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.

//create a function called replace that takes 3 parameters, animals, name, replacement
function replace(animals, name, replacement) {
    //create a for loop to iterate through the animals array 
    for (var i = 0; i < animals.length; i++) {
    //create if statement if an animal with that name is in the animals array
        if (animals[i].name === name) {
            //if the name exists replace with replacement object
            animals[i] = replacement;
        }
    }
    //return animals array
    return animals;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
//Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//If an animal with that name exists within the `animals` Array, remove it.

//write a function called remove with two parameters, animals and name
function remove(animals, name) {
    //create a for loop to iterate over animals array
    for (var i = 0; i < animals.length; i++) {
        //create if statement to determine if that animal exists within the animals array
        if(animals[i].name === name) {
        //remove that animal using splice method
            animals.splice(i, 1);
        }
    }
    //return animals array
    return animals;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
    - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
    - Checks that the animal Object has a `name` property with a length > 0.
    - Checks that the animal Object has a `species` property with a length > 0.
    - Has a **unique** name, meaning no other animals have that name.
    - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.*/

//write a function called add, with 2 parameters, animals and animal
function add(animals, animal) {
    //create if statement if animal length and species length is greater than 0
    if(animal.name.length > 0 && animal.species.length > 0){
        //create a for loop to iterate over animals array
        for (let i = 0; i < animals.length; i++){
            //create if statement to check this animal name is unique
            if (animals[i].name === animal.name){
        //return
        return;
    }
    //push onto animals array
    animals.push(animal);
}
    }
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
