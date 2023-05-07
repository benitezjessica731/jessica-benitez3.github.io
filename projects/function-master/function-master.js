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
    //declare result to an empty string
    var result = "";
    //use a for loop to iterate over object
    for (var key in object) {
    //declare value to the key value of object
      var value = object[key];
      //create if statement to see if typeof value is strictly equal to a string
      if (typeof value === 'string') {
        //concat the result and value plus a space
        result += value + ' ';
      }
    }
    //return result by trimming the end
    return result.trim();
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
    //create a variable called friends and set equal to an empty array
    var nonFriends = [];
    for (var i = 0; i < nonFriends.length; i++){
        if(nonFriends[i] !== name)
        return nonFriends[i];
    }
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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