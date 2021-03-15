/* Arrow Functions to write concise Anonymous Functions:

    We often don't need to name our functions, especially when passing 
    a function as an argument to another function. Instead, we create inline functions. 
    We don't need to name these functions because we do not reuse them anywhere else.

PAST:*/
const myFunc = function() {
    const myVar = "value";
    return myVar;
}
/*
    ES6 provides us with the syntactic sugar to not have to write 
    anonymous functions this way. Instead, you can use arrow function syntax:
*/
const myFunc = () => {
    const myVar = "value";
    return myVar;
}
/*
    When there is no function body, and only a return value, 
    arrow function syntax allows you to omit the keyword return as well as the 
    brackets surrounding the code. This helps simplify smaller functions into one-line statements:
*/
const myFunc = () => "value";
//  This code will still return the string value by default.


//EXERCISE: 
const magic = () => {
    return new Date();
};
console.log(magic()) // Mon Jan 25 2021 22:11:13 GMT-0500 (hora estándar de Colombia)



// ARROW FUNCTIONS WITH PARAMETERS
//Just like a regular function, you can pass arguments into an arrow function.

// doubles input value and returns it
const doubler = (item) => item * 2;
doubler(4); // returns 8

//If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
// the same function, without the parameter parentheses
const doubler = item => item * 2;

//It is possible to pass more than one argument into an arrow function.
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8

// EXERCISE: 
// myConcat function appends contents of arr2 to arr1
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};  
console.log(myConcat([1, 2], [3, 4, 5]));


// DEFAULT PARAMETERS FOR FUNCTIONS: 
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

/*
    The default parameter kicks in when the argument is not specified (it is undefined). 
    As you can see in the example above, the parameter name will receive 
    its default value "Anonymous" when you do not provide a value for the parameter. 
    You can add default values for as many parameters as you want.
*/

// EXERCISE: 
const increment = (number, value = 1) => number + value
console.log(increment(10, 5)); // Response is 15
console.log(increment(10));    // Response is 11 as default value was set to 1. 



// REST PARAMETER WITH FUNCTION PARAMETERS: 
// "..." inside the function argument creates an array with the values. 
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
/* 
    The rest parameter eliminates the need to check the args array 
    and allows us to apply map(), filter() and reduce() on the parameters array.
*/

// EXERCISE: 
function add(...nums) {
    let total = 0;
    for(const n of nums) {
        total += n;
    }
    return total;
}
const result = add(5, 10, 20);
console.log(result);  // 35 the sum of the added values. 


// PARTIAL REST PARAMETER: 
function add(a, ...nums) {
    console.log(a);          // this outputs 5
    console.log(nums);       // this outputs [10, 20]
    let total = 0;
    for(const n of nums) {
        total += n;
    }
    return total;
}
const result = add(5, 10, 20);
console.log(result);  // 35 the sum of the added values. 

// EXERCISE: 
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0,1,2))  // 3 The sum of the provided values. 
console.log(sum(5,3,5,10)) // 23


//BETTER ELABORATED
const sum = (...args) => {  // Receive multiple arguments that will be added to array. 
    return args.reduce((acumulator, element) => acumulator + element, 0);
}
console.log(sum(5,1,3)) // 9 


