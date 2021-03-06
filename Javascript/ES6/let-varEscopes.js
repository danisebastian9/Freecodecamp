/* 
var = function-scoped variables
ES6: let, const = block-scoped variables. 

When you declare a variable with the let keyword inside a block, statement, or expression, 
    its scope is limited to that block, statement, or expression.
For example:
*/
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

/*With the var keyword, i is declared globally. 
So when i++ is executed, it updates the global variable. This code is similar to the following: */
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

/*This behavior will cause problems if you were to create a function and 
    store it for later use inside a for loop that uses the i variable. 
    This is because the stored function will always refer to the value of the updated global i variable.
*/
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3

/* As you can see, printNumTwo() prints 3 and not 2. 
    This is because the value assigned to i was updated and the printNumTwo() 
    returns the global i and not the value i had when the function was created in the for loop. 
    The let keyword does not follow this behavior:
*/

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"

/* i is not defined because it was not declared in the global scope. 
    It is only declared within the for loop statement. 
    printNumTwo() returned the correct value because three different i variables 
    with unique values (0, 1, and 2) were created by the let keyword within the loop statement.    
*/


// EXERCISE: 
function start() {
    for (let i = 0; i < 5; i += 1){
        console.log(i);
    }

    console.log(i) // error, i can't be accessed outside of the block
}
start() // will output 0,1,2,3,4

//EXERCISE: 
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}


