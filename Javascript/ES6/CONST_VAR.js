// READ-ONLY variables with const. 
/* const has all the awesome features that let has,
 with the added bonus that variables declared using const are read-only. 
 They are a constant value, which means that once a variable is assigned with const, 
 it cannot be reassigned.
*/
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error

// A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.


/* 
    Note: It is common for developers to use uppercase variable identifiers 
    for immutable values and lowercase or camelCase for mutable values (objects and arrays). 
    In a later challenge you will see an example of a lowercase variable identifier being used for an array.
*/


// EXERCISE
function printManyTimes(str) {
    const SENTENCE = str + " is cool!";            // Constant variable, no change UPPER_CASE
    for (let i = 0; i < str.length; i+=2) {        // let variable, mutable, result changes. cammelCase 
      console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");  // "freeCodeCamp is cool" x6 times as it's running the added value length each 2 times. 


// Mutate an array declared with CONST. 
/*
    Some developers prefer to assign all their variables using const by default, 
    unless they know they will need to reassign the value. Only in that case, 
    they use let.
*/
/*
    it is important to understand that objects (including arrays and functions) 
    assigned to a variable using const are still mutable. 
    Using the const declaration only prevents reassignment of the variable identifier. 
*/

const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

/*
    As you can see, you can mutate the object [5, 6, 7] itself 
    and the variable s will still point to the altered array [5, 6, 45]. 
    Like all arrays, the array elements in s are mutable, but because const was used, 
    you cannot use the variable identifier s to point to a different array using the assignment operator. 
*/


// EXERCISE: 
// code takes the last array value and add it to the beginning. 
const s = [5, 7, 2];
function editInPlace() {
  let removed = s.pop();
  s.unshift(removed)
  return s
}
console.log(editInPlace());

// OR: 
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();


// Prevent OBJECT MUTATION:
/*
    To ensure your data doesn't change, JavaScript provides a function 
    Object.freeze to prevent data mutation.

    Once the object is frozen, you can no longer add, update, or delete properties from it. 
    Any attempt at changing the object will be rejected without an error.
*/
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}


// EXERCISE: 
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)            // This code blocks the object
    try {
      MATH_CONSTANTS.PI = 99;            // PI value can't be changed, as it was blocked.
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


