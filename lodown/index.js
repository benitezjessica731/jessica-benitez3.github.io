'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity : Function takes in an input value and returns value unchanged
 * 
 * @param { Any value } value: Function takes in any datatype
 * @returns { Any value } value: Function returns input unchanged
 * 
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * 
 * @param { Array } collection: Function takes in an array
 * @param { Function } test: Function takes in a function to test each value in the array.
 * @return { Array } collection: Funtion returns an output array of all items that passed function test
 * 
 */
