/* Destructuring assignment is special syntax introduced in ES6, 
    for neatly assigning values taken directly from an object.
*/ 

const user = { name: 'John Doe', age: 34 };

// ES5 code: 
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

// Same code in ES6: 
const { name, age } = user;
// name = 'John Doe', age = 34

//PRACTICE:
const mascotas = { name: "Paco", age: 12};
const {name, age} = mascotas;
console.log(name); // Paco
console.log(age);  // 12


// Practice:
const mascotas = [
    { name: "Paco", age: 12},
    { name: "Rufus", age: 17},
    { name: "Maya", age: 5},
    { name: "Hamlet", age: 8}
]
const { name, age } = mascotas;
console.log(mascotas[1].name) // Rufus

// EXERCISE: 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;

//const today = HIGH_TEMPERATURES.today;         // ES5 past variable assignment
//const tomorrow = HIGH_TEMPERATURES.tomorrow;   // ES5 past variable assignment

console.log(today)          // 77
console.log(tomorrow)       // 80


// DESTRUCTURING ASSIGNMENT to assign variables from Objects. 
/*
    Destructuring allows you to assign a new variable name when extracting values. 
    You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:
*/
const user = { name: 'John Doe', age: 34 };
//Here's how you can give new variable names in the assignment:
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34

// EXAMPLE: 
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;
console.log(user.name) // "John Doe"
console.log(user.age)  // 34
console.log(userName)  // "John Doe"
console.log(userAge)   // 34


// EXERCISE: 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;  // ES6

// const highToday = HIGH_TEMPERATURES.today;                     ES5
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;               ES5

console.log(highToday);     // 77
console.log(highTomorrow);  // 80



// DESTRUCTURING ASSIGNMENT to assign variables from NESTED OBJECTS:
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
};
//Here's how to extract the values of object properties and assign them to variables with the same name:
const { johnDoe: { age, email }} = user;
//And here's how you can assign an object properties' values to variables with different names:
const { johnDoe: { age: userAge, email: userEmail }} = user;

// EXERCISE: 
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log("Low Today is " + lowToday, "High Today is " + highToday); // Low Today is 64 High Today is 77



// DESTRUCTURING Assignment to assign variables from Arrays. 
//ES6 makes destructuring arrays as easy as destructuring objects.
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
/*
    The variable "a" is assigned the first value of the array, 
    and "b" is assigned the second value of the array. 
    We can also access the value at any index in an array with destructuring 
    by using commas to reach the desired index:
*/
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

// EXERCISE, swap the a to b and b to a values using destructuring. 
let a = 8, b = 6;
[a, b] = [b, a]
console.log(a) // 6
console.log(b) // 8


// DESTRUCTURING Assignment with REST Parameter to Reassign array elements. 
//The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2              a and b takes the first array values, the rest are going to the rest ...arr array
console.log(arr); // [3, 4, 5, 7]


// EXERCISE:
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";   // requires all variables to be declared inside the function
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10]



// DESTRUCTURING ASSIGNMENT to Pass an Object as a function's parameter: 
//In some cases, you can destructure the object in a function argument itself.

//Consider the code below:
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}

//This effectively destructures the object sent into the function. This can also be done in-place:
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
/* When profileData is passed to the above function, 
    the values are destructured from the function parameter for use within the function.
*/

// EXERCISE: 
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0; 
console.log(half(stats)) // 28.015


// DESTRUCTURING EXERCISES: 
const alphabet = ["A", "B", "C", "D", "E", "F"]
const numbers = ["1", "2", "3", "4", "5", "6"]

const newArray = [...alphabet, ...numbers]
console.log(newArray) // ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6"]

const [a,, c, ...rest] = alphabet  // array values are skipped adding the comma (,)
console.log(a) // "A"
console.log(c) // "C"
console.log(rest) // ["D", "E", "F"]



// SUM AND MULTIPLY
function sumAndMultiply(a,b) {
    return [a+b, a*b, a/b]
}
const array = sumAndMultiply(2, 3)
console.log(array) // [5, 6]

const [sum, multiply, division = "No Division"] = sumAndMultiply(2, 3)

console.log(sum);  // 5
console.log(multiply) // 6
console.log(division) // 0.6 or if there's no parameter added in the function ",a/b". response is the default "No Division"



//  OBJECT: 
const personOne = {
    name: "Kyle",
    age: 24,
    address: {
        city: "Somewhere",
        state: "One of them"
    }
}

const personTwo = {
    name: "Sally",
    age: 32,
    address: {
        city: "Somewhere else",
        state: "Another one of them"
    }
}

const { name: firtName, age, favoriteFood = "Rice", address: { city }, ...rest } = personTwo

console.log(firstName) // "Sally"
console.log(age)  // 32
console.log(favoriteFood) // If there's no value, default "Rice" will be printed, if there's a value the available value will replace the default "Rice" added value. 
console.log(rest) // The rest of the Object information will be printed. 
console.log(city) // nested value city "Somewhere else" is printed. 


const personThree = {...personOne, ...personTwo}
console.log(personThree) // Will add both objects in one. 


function printUser(user) {
    console.log(user)
}
printUser(personOne) // prints the entire object value. 


function printUsers({ name, age }) {
    console.log(`Name is: ${name}. Age is ${age}`)
}
printUsers(personOne) // Name is Kyle. Age is 24. 
