// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //given an input value, return true if the value is an array
   if (Array.isArray(value)) {
    return true;
    //return false if else
   } else {
    return false;
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //create if statement to determine if value is equal to an array
    if (Array.isArray(value)){
    //return false
        return false;
    //create else if statement to determine if value is equal to null
    } else if (value === null){
    //return false
        return false;
    //create else if statement to determine if value is equal to date using instanceof
    } else if (value instanceof Date){
    //return false
        return false;
    //create else if statement to determine if value is not equal to object
    } else if (typeof value !== "object") {
    //return false
        return false;
    //else return true
    } else {
        return true;
    }

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //create if statement to determine if value is equal to an array
    if (Array.isArray(value)){
    //return true
        return true;
    //create else if statement to determine if value is equal to null
    } else if (value === null){
        return false;
    //create else if statement to determine if value is equal to date using instanceof
    } else if (value instanceof Date){
    //return false
        return false;
    //create else if statement to determine if value is not equal to object
    } else if (typeof value !== "object") {
    //return false
        return false;
    //all else return true
    } else {
        return true;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //create if statement to determine if typeof value is string
    if (typeof value === "string") {
    //return "string"
        return "string";
    //create else if to determine if value is equal to array
    } else if (Array.isArray(value) === true) {
    //return "array"
       return "array";
    //create else if to determine if value is undefined
    } else if (typeof value === "undefined") {
    //return "undefined"
        return "undefined";
    //create else if to determine if typeof value is equal to number
    } else if (typeof value === "number") {
    //return "number"
        return "number";
    //create else if typeof value is equal to boolean
    } else if (typeof value === "boolean") {
    //return "boolean"
        return "boolean";
    //create else if to determine if value is equal to bull
    } else if (value === null) {
    //return "null"
        return "null";
    //create else if to determine if typeof value is function
    } else if (typeof value === "function") {
    //return function
        return "function";
    //create else if to determine if value is equal to date
    } else if (value instanceof Date === true) {
    //return "date"
        return "date";
    //create else if to determine if value is equal to object
    } else if (typeof value === "object") {
    //return object
        return "object";
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
