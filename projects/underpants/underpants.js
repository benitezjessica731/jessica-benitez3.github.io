// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {}; // variable _ declared an empty object

/*
var _ = {
    identity: function(value){
        return value;
    }
}

*/


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    //create if statement to determine if typeof value is equal to string
    if (typeof value === "string") {
        //if so, return string
        return "string";
    //create else if statement to determine if value is an array
    } else if (Array.isArray(value)){
        //if so, return an array
        return "array";
    //create else if value is equal to null
    } else if (value === null) {
        //return null
        return "null";
    //create else if statement and instanceof to determine if value is a function
    } else if (value instanceof Function) {
        //if so, return function
        return "function";
    //create else if statement to determine if value is a boolean
    } else if (typeof value === "boolean") {
        //if so, return boolean
        return "boolean";
    //create else if statement to determine if value is equal to a number
    } else if (typeof value === "number") {
    //if so, return number
        return "number";
    //create else if value is undefined
    } else if (value === undefined) {
        //if so return undefined
        return "undefined";
    //else return object
    } else {
        return "object";
    }
    
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array,number) {
    //create if statement to determine if array is not an array
    if (!Array.isArray(array)) {
    //if so, return array
        return [];
    }
    //create if statement to determine if number is not a number
    if (typeof number !== "number") {
    //if so, return the first element in array
        return array[0];
    }
    //create if statement to determine if number is negative
    if (number <= 0){
    //if so, return an ampty array
        return [];
    }
    //create if statement to determine if number is greater than the array length
    if (number > array.length) {
    //if so, return array
        return array;
    }
    //return the first number item in array
    return array.slice(0, number);
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
     //create if statement to determine if array is not an array
     if (!Array.isArray(array)) {
        //if so, return array
            return [];
        }
        //create if statement to determine if number is not a number
        if (typeof number !== "number") {
        //if so, return the last element in array
            return array[array.length - 1];
        }
        //create if statement to determine if number is negative
        if (number <= 0){
        //if so, return an ampty array
            return [];
        }
        //create if statement to determine if number is greater than the array length
        if (number > array.length) {
        //if so, return array
            return array;
        }
        //return the last number item in array
        return array.slice(array.length - number);
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    //create a for loop to iterate over array
    for (var i = 0; i < array.length; i++) {
        //create if statement if value is in array
        if (array[i] === value) {
            //return the index
            return i;
        }
    }
    //return -1 if value is not in array
    return -1;
}
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (array, value) {
    if (array.includes(value)){
        return true;
    }
    return false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //call function once for each element
        for (var i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    // else it's an object
    } else {
        for(let key in collection) {
            func(collection[key], key, collection);
        }
    }


}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    //create a var and set equal to an empty array
    var output = [];
    //create a for loop to iterate over array
    for (var i = 0; i < array.length; i++) {
    //create if statement using the indexof method to check for duplicates
      if (_.indexOf(output, array[i]) === -1) {
        //if it is unique, push the element onto the array
        output.push(array[i]);
      }
    }
    //return the new array
    return output;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //let newarray set equal to an array
    let newArray = [];
    //call _.each function passing element, index, and array as arguments
    _.each(array, function(element, index, array){
        //create if statement to determine if true
        if(func(element, index, array)){
            //add element to new array
            newArray.push(element);
        }
    });
    //return the newarray
    return newArray;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //let newArray equal to an empty array
    let newArray = [];
    //call _.each function with element, index, and array as arguments
    _.each(array, function(element, index, array){
        //create if statement to determine if false
        if(!func(element, index, array)){
            //push the element onto the new array
            newArray.push(element);
        }
    });
    //return the new array
    return newArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
    //declare truthyvalues to an empty array
    let truthyValues = [];
    //declare falsyvalues to an empty array
    let falsyValues = [];
    //call the _.each function for each element in the array passing in the arguments, element, key, array
    _.each(array, function(element, key, array){
        //create if statement if the function returns a truthy value
        if (func(element, key, array)) {
            //if true, push the element onto the truthy array
            truthyValues.push(element)
        //create else
        } else {
            //if false, push the element onto the falsy array
            falsyValues.push(element);
        }
    });
    //return an array of truthyvalues and falsyvalues
    return [truthyValues, falsyValues];
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function (collection, func) {
    //declare an empty array to result
    let result = [];
    //create if statement to determine if collection is an array
    if (Array.isArray(collection)) {
    //create for loop to iterate through the array if it is an array
      for (let i = 0; i < collection.length; i++) {
        //push the function onto the result array
        result.push(func(collection[i], i, collection));
      }
      //create else if to determine if collection is an object
    } else if (typeof collection === 'object') {
    //use for in loop for object
      for (let key in collection) {
        //push the function onto the result array
        result.push(func(collection[key], key, collection));
      }
    }
    //return the new array
    return result;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (array, property) {
    //return an array using the map function, with array and callback function as its arguments
    return _.map(array, function(obj) {
        //return the property
        return obj[property];
    });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function (collection, func) { 
    //create if statement to determine if func is not a function
    if (typeof func !== "function") {
        //check if all elements are truthy
        return collection.every(function(element) {
            //return 
            return Boolean(element);
        });
    //create else if to determine if collection is an array
    } else if (Array.isArray(collection)){
        //check if the function returns true for all elements in the array
        return collection.every(function(element, index) {
            //return all elements
            return func(element, index, collection);
        });
    //create if else statement to see if collection is an object
    } else if (typeof collection === "object" && collection !== null){
        //check if the function returns true for all values in the object
        return Object.values(collection).every(function(value, key){
            //return
            return func(value, Object.keys(collection)[key], collection);
        });
    }
    //else return false
    return false;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (collection, func){
    //use if statement to determine if func is not a function
    if (typeof func !== "function") {
        return collection.some(function(element) {
            return Boolean(element);
        });
    //create else if statement to determine if collection is an array
    } else if (Array.isArray(collection)){
        //check if the function returns true for all elements in the array
        return collection.some(function(element, index) {
            //return
            return func(element, index, collection);
        });
    //create else if to determine if collection is an object
    } else if (typeof collection === "object" && collection !== null){
        //check if the function returns true for all values in the object
        return Object.values(collection).some(function(value, key){
            //return
            return func(value, Object.keys(collection)[key], collection);
        });
    }
    //return false if collection is another type of data
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array,func,seed){
    let result;
    //determine if seed was not passed in
    if (seed === undefined){
    //use the first element in array as seed
        result = array[0];
        for (let i = 1; i < array.length; i++){
            //reassign result to func invocation
            result = func(result, array[i], i, array);
        }
    //else it was
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++) {
            //reassign result to func invocation
            result = func(result, array[i], i, array);
        }
    }
    return result;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//Object.assign()
_.extend = function (object1, ...objects) {
    //use for each to iterate over each object
    objects.forEach(function(object){
        //create if statement to determine if object is an object
        if (typeof object === "object" && typeof object !== null){
            //use for in loop to iterate over object
            for (var key in object){
                //copy properties using the assignment operator
                object1[key] = object[key]
            }
        }
    });
    //return the updated object1
    return object1;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
