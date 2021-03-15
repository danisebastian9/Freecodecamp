// Var variables value can be overwritten without issue and may be cause issues with advanced applications.
var camper = 'James';
var camper = 'David';
console.log(camper); // logs 'David'. The first camper value was overwrited. 

// With let the variable values can't be overwritten generating an error in the exact same case: 
let camper = 'James';
let camper = 'David'; // throws an error "SyntaxError: unknown: Identifier 'camper' has already been declared"


// EXERCISE: 
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(quote)
}
catTalk()  // "Oliver says Meow!"


