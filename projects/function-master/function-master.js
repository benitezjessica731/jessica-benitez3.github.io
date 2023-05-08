//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declare an empty array called arr
    var storArr = [];
    //create for loop to loop over object
    for (var key in object){
        //create if typeof statement to see if any values are equal to strings
        if (typeof object[key] === "string") {
            //if true, push the value into the declared array
            storArr.push(object[key]);
        }
    }
    //return the array with join method, adding a space, to return to string
    return storArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        //return array
            return "array";
        //create else if statement to determine if collection is equal to null
        } else if (collection === null){
            return false;
        //create else if statement to determine if collection is equal to date using instanceof
        } else if (collection instanceof Date){
        //return false
            return false;
        //create else if statement to determine if collection is equal to object
        } else if (typeof collection === "object") {
        //return false
            return "object";
}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split string into an array
    var array = string.split(" ");
    //create for loop to interate over each element in array
    for (var i = 0; i < array.length; i++) {
    //capitalize the first letter at each element
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    //return the array back into a string
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!

function welcomeMessage(object) {
    //return welcome to an object with a name property
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>'"

function profileInfo(object) {
    //create a variable called name and set equal to the name property
    var name = object.name;
    //create a variable called species and set equal to the species property
    var species = object.species;
    //capitalize the first letter in name
    name = name.charAt(0).toUpperCase() + name.slice(1);
    //capitalize the first letter in species
    species = species.charAt(0).toUpperCase() + species.slice(1);
    //return name is a species
            return name + " is a " + species;
        
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //Should take an object, if this object has a noises array return them 
    //as a string separated by a space, if there are no noises return 'there are no noises'"

    //create for in loop to check if object has a noises array
    for (var key in object) {
        //create if statement to check that the key is equal to noises
        if (key === "noises") {
    //check if noises is an array
        if (Array.isArray(object.noises)) { 
        //check length is > 0
        if (object.noises.length > 0) { 
            return object.noises.join(' ');
        }
    }
}
    }
        // didn't pass the above tests, so return this string
        return 'there are no noises'; 
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."

function hasWord(string, word) {
    if (string.includes(word)) {
        return true;
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object"

function addFriend (name, object) {
    for (var key in object) {
        if (key === "friends") {
            object[key].push(name);
        }
    }   
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, object) {
    //create a variable called friends and set equal to the friends array from the object
    var friends = object.friends;
    //create if statement if friends exists
        if(friends) {
    //create for loop to iterate over friends array
        for (var i = 0; i < friends.length; i++) {
    //create if statement to see if the friends index contains name
            if(friends[i] === name) {
    //if so, return true
            return true;
         } 

        }
    
    } 
    //if not, return false
    return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
    //create a variable called nonFriends and set equal to an empty array
    var nonFriends = [];
    //create for loop to loop over array
    for (var i = 0; i < array.length; i++){
        //create if statement if the name in the array does not equal name and the array does not include name
        if(array[i].name !== name && !array[i].friends.includes(name)){
        //push the array into the nonfriends array
        nonFriends.push(array[i].name);
    }
    //return nonfriends 
}   return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property <key>
// on <object> with new <value>. If <key> does not exist on <object> create it."

function updateObject(object, key, value) {
    //create if statement to check if the object has the property key
    if (object[key] === value) {
    //if the property exists, set equal to value
        object[key] = value;
    //create else statement
    } else {
    //if the key does not exist, set it equal to the value
        object[key] = value;
    }
    //return the updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"

function removeProperties(object, array) {
    //create a for loop to iterate over array's properties
    for (var i = 0; i < array.length; i++) {
    //create a new variable called key and set to equal array[i]
    var key = array[i];
    //create if statement and object.hasOwnProperty method to see if any properties on object are listed in array
        if (object.hasOwnProperty(key)) {
    //if any are equal, delete that object's property
            delete object[key];
        }
}
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed

function dedup(array) {
    //declare an empty storage array
    var storArr = [];
    //create a for loop to iterate over array
    for (var i = 0; i < array.length; i++) {
        //create conditional if statement and includes method to see if the storArr does not include element
        if (!storArr.includes(array[i])) {
        //if there is a duplicate, push into the storage array
            storArr.push(array[i]);
        }
    }
    //return the storage array
    return storArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}